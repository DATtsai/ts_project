import { defineStore } from 'pinia'
import { ref } from '@vue/runtime-core'

export const useJwtStore = defineStore('jwt', () => {
  const jwt = ref('')

  const setJwtToken = (token: string) => {
    jwt.value = token
  }
  
  return { jwt, setJwtToken }
})