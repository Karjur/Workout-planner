<template>
    <div class="bg-gray-50 py-12 px-4 sm:px-6 lg:px-8 text-dark-300">
      <div class="text-center bg-gray-50">
        <h1 class="font-bold">{{ title }}</h1>
        <p>Teretulemast Sportlyz-i!</p>
      </div>
    </div>
</template>

<script setup lang="ts">
    defineProps<{ title: string }>();
</script>
