<script setup lang="ts">
import NewPost from '@/components/NewPost.vue'
import MyPosts from '@/components/MyPosts.vue'
</script>


<template>
  <div class="bg-slate-800 rounded-md text-white mt-4 p-3">
  <NewPost />
  <MyPosts />
  </div>
</template>

<style scoped>
.textarea__style {
  width: 350px;
}
</style>