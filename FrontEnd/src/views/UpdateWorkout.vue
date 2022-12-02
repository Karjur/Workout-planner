<template>
  <AddWorkoutForm :workout="workout" />
</template>

<script setup lang="ts">
import AddWorkoutFormVue from '@/components/AddWorkoutForm.vue';
import { Workout } from '@/modules/workout';
import { useWorkoutsStore } from '@/stores/workoutsStore';
import { onMounted, Ref, ref } from 'vue';
import { useRoute } from 'vue-router';

const { load, getWorkoutById } = useWorkoutsStore();
const route = useRoute();

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

onMounted(async () => {
  await load();

  const loadedWorkout = getWorkoutById(Number(route.params.id));
  if (loadedWorkout !== undefined) {
    workout.value = loadedWorkout;
  }
});
</script>
