<script setup lang="ts">
import useFriends from '../hooks/sb-hooks-friends'

const { getFriends } = useFriends()

const props = defineProps({
  user_id: String
})

const friends = async (user_id: string) => {
  return await getFriends(user_id)
}

// console.log(friends(props.user_id))
</script>

<template>
  <div>Друзья: {{ friends(props.user_id) }}</div>
</template>

