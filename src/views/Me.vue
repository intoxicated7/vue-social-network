<script setup lang="ts">
import useAuth from '../hooks/sb-hooks-auth'
import NewPost from '@/components/NewPost.vue'
import MyPosts from '@/components/MyPosts.vue'
import FriendsList from '@/components/FriendsList.vue'
import MyProfile from '@/components/MyProfile.vue'


const { user } = useAuth()
</script>


<template>
  <div class="text-white mt-4 p-3">
    <div>
      <MyProfile />
      <FriendsList :user_id="user.id" />
      <NewPost />
      <MyPosts :user_id="user.id" />
    </div>
  </div>
</template>

<style scoped>
.textarea__style {
  width: 350px;
}
</style>