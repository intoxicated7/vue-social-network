<script setup lang="ts">
import { onMounted, ref } from 'vue'
import useLikes from '../hooks/sb-hooks-likes'
import usePosts from '../hooks/sb-hooks-posts'

const { getPosts } = usePosts()

const { likesCount } = useLikes()

const props = defineProps({
  post_id: Number
})

const like = ref()

onMounted(async () => {
  like.value = await likesCount(props.post_id)
})
</script>

<template>
  <div v-if="like">
    {{ like.length }}
  </div>
</template>