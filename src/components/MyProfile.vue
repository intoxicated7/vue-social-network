<script setup>
import useAuth from '../hooks/sb-hooks-auth'

const { user } = useAuth()
</script>

<template>
  <div class="bg-slate-700 rounded-md px-3 py-4 my-4">
    <div class="flex">
      <img class="rounded-full w-44" src="../assets/user_avatar.png" />
      <div class="flex items-center h-3 justify-between w-full">
        <h2 class="text-lg">{{ user.email }}</h2>
        <span class="text-gray-300 text-sm">online</span>
      </div>
    </div>
  </div>
</template>
