<script setup lang="ts">
import { defineAsyncComponent } from 'vue'

const PostsComponent = defineAsyncComponent(() => 
  import('../components/Posts.vue')
)

</script>

<template>
<Suspense>
  <template #default>
    <PostsComponent />
  </template>
  <template #fallback>
    <div class="text-white">
      Загрузка...
    </div>
  </template>
</Suspense>
</template>
