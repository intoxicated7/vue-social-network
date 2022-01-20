<script setup lang="ts">
import useLikes from '../hooks/sb-hooks-likes'
import usePosts from '../hooks/sb-hooks-posts'

const { getPosts } = usePosts()

const { likesCount } = useLikes()

const props = defineProps({
  post_id: Number
})

// console.log(likesCount(props.post_id))

</script>

<template>
  <div>
    <!-- <span>{{ likesCount(props.post_id)  }}</span> -->
  </div>
</template>