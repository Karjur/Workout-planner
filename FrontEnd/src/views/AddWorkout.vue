<template>
  <AddWorkoutForm :workout="workout" />
</template>

<script setup lang="ts">
import AddWorkoutForm from '@/components/AddWorkoutForm.vue';
import { Workout } from '@/modules/workout';
import { Ref, ref } from 'vue';

const workout: Ref<Workout> = ref({
  id: 0,
  name: '',
  trainer: '',
  description: '',
  location: '',
  date: '',
  startTime: '',
  endTime: '',
});
</script>
