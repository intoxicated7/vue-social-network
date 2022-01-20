<script setup lang="ts">
import usePosts from '../hooks/sb-hooks-posts'

const { myPosts } = usePosts()

</script>

<template>
{{ myPosts() }}
</template>