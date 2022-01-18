<script setup lang="ts">
import useAuth from '../hooks/sb-hooks-auth'

const { isLoggedIn, user } = useAuth()

console.log(isLoggedIn())
</script>


<template>
  <div class="bg-slate-800">
    <div class="flex justify-between items-center py-3 px-10">
      <div class="text-white font-semibold">Logo</div>
      <div v-if="isLoggedIn()" class="space-x-2 text-white">
        <span>{{ user.email }}</span>
        <router-link class="bg-slate-600 hover:bg-slate-700 rounded-md py-1.5 px-2" to="/logout">Выход</router-link>
      </div>
      <div v-else class="space-x-2 text-white text-sm font-semibold">
        <router-link class="bg-slate-600 hover:bg-slate-700 rounded-md py-1.5 px-2" to="/login">Вход</router-link>
        <router-link class="bg-emerald-500 hover:bg-emerald-600 rounded-md py-1.5 px-2" to="/signup">Начать регистрацию</router-link>
      </div>  
    </div>
  </div>
</template>