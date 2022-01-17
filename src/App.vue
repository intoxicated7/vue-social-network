<script setup lang="ts">
import Nav from '@/components/Nav.vue'
import defaultLayout from '@/layouts/defaultLayout.vue'
</script>

<template>
  <Nav />
  <default-layout>
    <router-view></router-view>
  </default-layout>
</template>

<style>

</style>
