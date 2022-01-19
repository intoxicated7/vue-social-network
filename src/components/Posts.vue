<script setup lang="ts">
import usePosts from '../hooks/sb-hooks-posts'
import useAuth from '../hooks/sb-hooks-auth'
import useLikes from '../hooks/sb-hooks-likes'
import { ref } from 'vue'

const errMsg = ref<null | string>(null)
const like = ref(null)

const { getPosts } = usePosts()
const { getLike } = useLikes()
const { user } = useAuth()

const posts = await getPosts()

const likeHandle = (user_id: string, post_id: number): void => {
  getLike({ user_id, post_id })

}
</script>

<template>
  <div class="bg-slate-700 rounded-md my-3 p-2 text-white" v-for="post in posts" :key="post">
    <div class="flex items-center">
      <span class="text-zinc-400 text-sm">{{ post.created_at }}</span>
    </div>
    <div>{{ post.body }}</div>
    <div class="mt-2">
      <div class="flex items-center space-x-2">
        <div class="cursor-pointer bg-slate-800 rounded-xl px-3">
          <i v-if="like" class="fas fa-heart px-3 py-1"></i>
          <i v-else @click="likeHandle(user.id, post.id)" class="far fa-heart  py-1"></i>
          <span class="pl-1">12</span>
        </div>
        <i class="far fa-comment bg-slate-800 rounded-xl px-3 py-1 cursor-pointer"></i>
        <i class="fas fa-share bg-slate-800 rounded-xl px-3 py-1 cursor-pointer"></i>
      </div>
    </div>
  </div>
</template>
