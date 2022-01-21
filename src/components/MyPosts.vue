<script setup lang="ts">
import { onMounted, ref } from 'vue'
import usePosts from '../hooks/sb-hooks-posts'

const { myPosts } = usePosts()

const props = defineProps({
  user_id: String
})

const posts = ref()

onMounted(async () => {
  if (!props.user_id){
    return;
  }
  posts.value = await myPosts(props.user_id)
})
</script>

<template>
  <div class="m-3" v-for="post in posts" :key="post">
    <div class="flex items-center">
      <span class="text-zinc-400 text-sm">{{ post.created_at }}</span>
    </div>
  <div>{{ post.body }}</div>
  </div>
</template>