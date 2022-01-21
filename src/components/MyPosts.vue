<script setup lang="ts">
import { onMounted, ref } from 'vue'
import usePosts from '../hooks/sb-hooks-posts'
import LikesCount from '@/components/LikesCount.vue'
import useLikes from '../hooks/sb-hooks-likes'
import useAuth from '../hooks/sb-hooks-auth'

const { myPosts } = usePosts()
const { getLike, likesCount } = useLikes()

const { user } = useAuth()

const props = defineProps({
  user_id: String
})

const like = ref(null)
const posts = ref()

onMounted(async () => {
  if (!props.user_id){
    return;
  }
  posts.value = await myPosts(props.user_id)
})

const likeHandle = async (user_id: string, post_id: number): Promise<void> => {
  await getLike({ user_id, post_id })
}
</script>

<template>
  <div class="my-3 bg-slate-700 rounded-md p-3" v-for="post in posts" :key="post">
    <div class="flex items-center">
      <span class="text-zinc-400 text-sm">{{ post.created_at }}</span>
    </div>
    <div>{{ post.body }}</div> 
    <div class="flex items-center space-x-2">
        <div class="flex items-center space-x-2 cursor-pointer bg-slate-800 rounded-xl px-3">
          <i v-if="like" class="fas fa-heart px-3 py-1"></i>
          <i v-else @click="likeHandle(user.id, post.id)" class="far fa-heart  py-1"></i>
          <LikesCount :post_id="post.id" />
        </div>
        <i class="far fa-comment bg-slate-800 rounded-xl px-3 py-1 cursor-pointer"></i>
    </div>
  </div>
</template>