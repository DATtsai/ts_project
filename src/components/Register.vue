<template>
  <div>
    <!-- <Process></Process> -->
    <v-form v-model="valid">
      <v-container>
        <v-label text="電子信箱"></v-label>
        <v-text-field
          v-model="email"
          placeholder="email"
          type="email"
          variant="outlined"
          required
          hide-details
        ></v-text-field>

        <v-label text="密碼"></v-label>
        <v-text-field
          v-model="password"
          placeholder="請輸入密碼"
          type="password"
          variant="outlined"
          hide-details
          required
        ></v-text-field>

        <v-label text="確認密碼"></v-label>
        <v-text-field
          v-model="confirmPassword"
          placeholder="請再輸入一次密碼"
          type="password"
          variant="outlined"
          hide-details
          required
        ></v-text-field>
        <v-btn
          block
          class="mb-8"
          color="blue"
          size="large"
          variant="tonal"
        >
          下一步
        </v-btn>
        已經有會員了嗎？ <router-link to="/login">立即登入</router-link>
      </v-container>
    </v-form>

    <v-form>
      <v-container>
        <v-label>姓名</v-label>
        <v-text-field           
          v-model="name"
          placeholder="請輸入姓名"
          variant="outlined"
          required
          hide-details
        ></v-text-field>
        <v-label>手機號碼</v-label>
        <v-text-field           
          v-model="phone"
          placeholder="請輸入手機號碼"
          variant="outlined"
          required
          hide-details
        ></v-text-field>
        <v-label>生日</v-label>
        <v-row>
          <v-col cols="12" md="4">
            <v-select v-model="birth.year" suffix="年" variant="outlined" :items="[1980, 1981, 1982, 1987]"></v-select>
          </v-col>
          <v-col cols="12" md="4">
            <v-select v-model="birth.month" suffix="月" variant="outlined" :items="[1, 2, 3]"></v-select>
          </v-col>
          <v-col cols="12" md="4">
            <v-select v-model="birth.day" suffix="日" variant="outlined" :items="[1, 2, 3, 27]"></v-select>
          </v-col>
        </v-row>
        <v-label>地址</v-label>
        <v-row>
          <v-col cols="12" md="6">
            <v-select variant="outlined" :items="['台北市']"></v-select>
          </v-col>
          <v-col cols="12" md="6">
            <v-select variant="outlined" :items="['文山區']"></v-select>
          </v-col>
        </v-row>
        <v-text-field           
          v-model="address.detail"
          placeholder="請輸入詳細地址"
          variant="outlined"
          required
          hide-details
        ></v-text-field>
        <v-checkbox label="我已閱讀並同意本網站個資使用規範"></v-checkbox>
        <v-btn
          block
          class="mb-8"
          color="blue"
          size="large"
          variant="tonal"
          @click="submit"
        >
          完成註冊
        </v-btn>
      </v-container>
    </v-form>
  </div>
</template>

<script setup lang="ts">
import { ref } from '@vue/runtime-core'
import Process from './Process.vue'
import { signup, verifyEmail, generateEmailCode } from '../apis/api'
import { reqSignup, reqEmail } from '../types/apiTypes'
import day from 'dayjs'
import { useJwtStore } from '../store/jwt'

const { setJwtToken } = useJwtStore()

const email = ref('')
const password = ref('')
const confirmPassword = ref('')
const valid = ref(false)

const name = ref('')
const phone = ref('')
const birth = ref({year: NaN, month: NaN, day: NaN})
const address = ref({zipcode: NaN, city: '', county: NaN, detail: ''})

const validate = () => {
  if(!email.value || !password.value || !confirmPassword.value) return false
  if(password.value !== confirmPassword.value) return false
  return true
}

const submit = async () => {

  const reqVerify: reqEmail = { email: email.value }
  let res = await verifyEmail(reqVerify)
  if(!res.status) {
    console.log(res.message)
    return
  }
  if(res.result.isEmailExists) {
    console.log('This email already exists!')
    return
  }
  console.log('---- finish email verfify ----')
  const reqBody: reqSignup = {
    name: name.value,
    email: email.value,
    password: password.value,
    phone: phone.value,
    birthday: day(`${birth.value.year}-${birth.value.month}-${birth.value.day}`).format('YYYY-MM-DD'),
    address: {
      zipcode: 116,
      detail: address.value.detail
    }
  }
  res = await signup(reqBody)
  if(res.status) setJwtToken(res.token)
  else {
    console.log(res.message)
    return
  }
  console.log('---- finish singup customer ----')
  res = await generateEmailCode(reqVerify)
  if(!res.status) {
    console.log(res.message)
    return
  }
  console.log('---- finish to send token to customer email ----')

  return 'finish'
}

</script>