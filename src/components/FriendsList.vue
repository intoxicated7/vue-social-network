<script setup lang="ts">
import { onMounted } from '@vue/runtime-core'
import { ref } from 'vue'
import useFriends from '../hooks/sb-hooks-friends'

const { getFriends } = useFriends()

const props = defineProps({
  user_id: String
})

const friends = ref()

onMounted(async () => {
  friends.value = await getFriends(props.user_id)
})

</script>

<template>
  <div>
    <h2 v-if="friends">Друзья: {{ friends.length }}</h2>
    <div v-for="friend in friends" :key="friend">
      {{ friend }}
    </div>
  </div>

</template>
