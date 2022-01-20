<script setup lang="ts">
import useAuth from '../hooks/sb-hooks-auth'
import NewPost from '@/components/NewPost.vue'
import MyPosts from '@/components/MyPosts.vue'
import { defineAsyncComponent } from 'vue'

const FriendsList = defineAsyncComponent(() =>
import('../components/FriendsList.vue') )


const { user } = useAuth()
</script>


<template>
  <div class="bg-slate-800 rounded-md text-white mt-4 p-3">
    {{ user.email }}
    <NewPost />
    <MyPosts />
    <Suspense>
      <template #default>
        <FriendsList :user_id="user.id" />
      </template>
      <template #fallback>
        <div class="text-white">
          Загрузка...
        </div>
      </template>
    </Suspense>
  </div>
</template>

<style scoped>
.textarea__style {
  width: 350px;
}
</style>