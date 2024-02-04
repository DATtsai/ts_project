<template>
  <div>
    <v-form>
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
        <v-row>
          <v-col cols="12" md="6">
            <v-checkbox label="記住帳號"></v-checkbox>
          </v-col>
          <v-col cols="12" md="6" align-self="center">
            <a href="#">忘記密碼？</a>
          </v-col>
        </v-row>
        <v-btn
          block
          class="mb-8"
          color="blue"
          size="large"
          variant="tonal"
          @click="submit"
        >
          會員登入
        </v-btn>
        沒有會員嗎？ <router-link to="/register">前往註冊</router-link>
      </v-container>
    </v-form>
  </div>
</template>

<script setup lang="ts">
import { ref } from '@vue/runtime-core'
import { reqLogin } from '../types/apiTypes'
import { login, signup } from '../apis/api'
import { useJwtStore } from '../store/jwt'

const { setJwtToken, jwt } = useJwtStore()

const email = ref('')
const password = ref('')

const submit = async () => {
  const reqBody: reqLogin = {
    email: email.value,
    password: password.value
  }
  let res = await login(reqBody)
  if(res.status) setJwtToken(res.token)
  console.log(res.token)
  console.log('---- finish login ----')
  return res
}
</script>