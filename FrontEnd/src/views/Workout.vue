<template>
    <div v-if="workout != null">
      <div>id: {{ workout.id }}</div>
      <div>name: {{ workout.name }}</div>
      <div>trainer: {{ workout.trainer }}</div>
      <div>description: {{ workout.description }}</div>
      <div>location: {{ workout.location }}</div>
      <div>date: {{ workout.date }}</div>
      <div>startTime: {{ workout.startTime }}</div>
      <div>endTime: {{ workout.endTime }}</div>
    </div>
  </template>
  
  <script lang="ts">
  import { defineComponent } from 'vue';
  import { useRouter } from 'vue-router';
  import { Workout } from '@/modules/workout';
  
  export default defineComponent({
    data() {
      return { workout: null as Workout | null };
    },
    async mounted() {
      const router = useRouter();
      const id = +router.currentRoute.value.params.id;
      const response = await fetch('https://localhost:5000/api/Workouts/' + id);
      this.workout = await response.json();
    },
  });
  </script>
  