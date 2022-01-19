<script setup lang="ts">
import useAuth from '../hooks/sb-hooks-auth'
import NewPost from '@/components/NewPost.vue'
import MyPosts from '@/components/MyPosts.vue'

const { user } = useAuth()
</script>


<template>
  <div class="bg-slate-800 rounded-md text-white mt-4 p-3">
    {{ user.email }}
    <NewPost />
    <MyPosts />
  </div>
</template>

<style scoped>
.textarea__style {
  width: 350px;
}
</style>