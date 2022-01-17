<script setup lang="ts">
import { useStore } from 'vuex'
import { useRouter } from 'vue-router'
import { useField } from 'vee-validate'
import * as yup from 'yup'
import { ref } from '@vue/reactivity'

const store = useStore()
const router = useRouter()


const username = ref<string>('')
const password = ref<string>('')

// form options
const userLength = ref<number>(6)
const passLength = ref<number>(8)

const { value: userCheck, errorMessage: errorUsername } = useField(
  'username',
  yup.string().required().min(userLength.value)
  )

const { value: passCheck, errorMessage: errorPassword } = useField(
  'password',
  yup.string().required().min(passLength.value)
)

const signUp = async () => {

}
</script>


<template>
  <div class="mt-60">
    <div class="wrapper bg-slate-800 rounded-md p-3">
      <div class="text-center text-white font-semibold mb-3">
        <h2 class="text-2xl">Форма регистрации</h2>
      </div>
      <form class="space-y-3">
        <div>
          <input class="rounded-md w-full p-1.5 px-2 text-sm bg-slate-600" name="username" v-model="userCheck" type="text" placeholder="Ваш никнейм" />
          <span>{{ errorUsername }}</span>
        </div>
        <div>
          <input class="rounded-md w-full p-1.5 px-2 text-sm bg-slate-600" name="password" v-model="passCheck" type="password" placeholder="Придумайте пароль" />
          <span>{{ errorPassword }}</span>
          <span style="font-size: 12px" class="text-white float-right mb-4">У меня уже есть аккаунт</span>
        </div>
        <div class="text-center">
          <button @click.prevent="signUp" class="rounded-md w-full p-1.5 bg-emerald-500 text-white text-sm font-semibold">Зарегистрироваться</button>
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