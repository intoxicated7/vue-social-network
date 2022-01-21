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
  body.value = ''
}

</script>

<template>
  <div class="bg-slate-700 rounded-md my-5 p-3 pb-12">
    <form>
      <textarea
        v-model="body"
        class="bg-slate-600 p-1 px-2 w-full text-sm resize-none h-20 rounded-md"
        placeholder="Что у вас нового?"
      ></textarea>
      <button
        @click.prevent="handlePostAdding"
        class="float-right bg-emerald-500 rounded-md py-1 p-2 text-sm mt-2"
      >
        Опубликовать
      </button>
    </form>
  </div>
</template>

