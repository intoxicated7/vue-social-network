<script setup lang="ts">
import usePosts from '../hooks/sb-hooks-posts'

const { posts } = usePosts()


console.log(posts)
</script>

<template>
  <div v-for="post in posts" :key="post">
    <!-- {{ post }} -->
  </div>
  <div></div>
</template>