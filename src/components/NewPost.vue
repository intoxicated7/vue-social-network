<script setup lang="ts">
import useAuth from '../hooks/sb-hooks-auth'
import usePosts from '../hooks/sb-hooks-posts'
import { ref } from 'vue'

const { user } = useAuth()
const { addPost } = usePosts()

const body = ref<string>('')
let author_id = user.value?.id

const handlePostAdding = async () => {
  await addPost({ body: body.value, author_id: author_id })
}
</script>

<template>
  <div class="textarea__style py-10">
    <form>
      <textarea
        v-model="body"
        class="bg-slate-600 p-1 px-2 w-full text-sm resize-none h-20 rounded-md"
      ></textarea>
      <button
        @click.prevent="handlePostAdding"
        class="float-right bg-emerald-500 rounded-md py-1 p-2 text-sm"
      >
        Опубликовать
      </button>
    </form>
  </div>
</template>

