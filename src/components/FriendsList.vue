<script setup lang="ts">
import { onMounted } from '@vue/runtime-core'
import { ref } from 'vue'
import useFriends from '../hooks/sb-hooks-friends'
import useAuth from '../hooks/sb-hooks-auth'

const { getFriends } = useFriends()
const { getUser } = useAuth()

const props = defineProps({
  user_id: String
})

const friends = ref()

onMounted(async () => {
  if (!props.user_id){
    return;
  }
  friends.value = await getFriends(props.user_id)
})

</script>

<template>
  <div>
    <h2 v-if="friends">Друзья: {{ friends.length }}</h2>
    <div v-for="friend in friends" :key="friend">
      {{ friend.friend_id }}
    </div>
  </div>

</template>
