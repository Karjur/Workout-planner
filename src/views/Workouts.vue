<template>
  <WorkoutList title="Treeningute nimekiri" />
  <li><router-link aria-current="page" class="link" :to="{name: 'Lisa trenn'}">Lisa trenn</router-link></li>
</template>

<script setup lang="ts">
import WorkoutList from '@/components/WorkoutList.vue';
</script>