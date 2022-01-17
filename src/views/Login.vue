<script setup lang="ts">
import useAuth from '../hooks/sb-hooks-auth'
import { useRouter } from 'vue-router'
import { useField } from 'vee-validate'
import * as yup from 'yup'
import { ref } from '@vue/reactivity'

const { login, isLoggedIn } = useAuth()

const router = useRouter()


const email = ref<string>('')
const password = ref<string>('')

// form options
// const userLength = ref<number>(6)
// const passLength = ref<number>(8)

// const { value: userCheck, errorMessage: errorUsername } = useField(
//   'username',
//   yup.string().required().min(userLength.value)
//   )

// const { value: passCheck, errorMessage: errorPassword } = useField(
//   'password',
//   yup.string().required().min(passLength.value)
// )

const handleLogin = async () => {
  try {
    await login({ email: email.value, password: password.value })
    console.log('authorized')
    console.log(isLoggedIn())
  } catch(error) {
    alert(error.message)
  }
}
</script>


<template>
  <div class="mt-60">
    <div class="wrapper bg-slate-800 rounded-md p-3">
      <div class="text-center text-white font-semibold mb-3">
        <h2 class="text-2xl">Форма авторизации</h2>
      </div>
      <form class="space-y-3">
        <div>
          <input class="rounded-md w-full p-1.5 px-2 text-sm bg-slate-600" name="username" v-model="email" type="text" placeholder="Ваш никнейм" />
          <!-- <span>{{ errorUsername }}</span> -->
        </div>
        <div>
          <input class="rounded-md w-full p-1.5 px-2 text-sm bg-slate-600" name="password" v-model="password" type="password" placeholder="Ваш пароль" />
          <!-- <span>{{ errorPassword }}</span> -->
          <div class="flex justify-between items-center">
            <span style="font-size: 12px" class="text-white float-right mb-4">Забыл пароль</span>
            <span style="font-size: 12px" class="text-white float-right mb-4">Создать аккаунт</span>
          </div>
        </div>
        <div class="text-center">
          <button @click.prevent="handleLogin" class="rounded-md w-full p-1.5 bg-emerald-500 text-white text-sm font-semibold">Авторизоваться</button>
        </div>
      </form>
    </div>
  </div>
</template>

<style scoped>
.wrapper {
  width: 450px;
  margin: 0 auto;
}
</style>