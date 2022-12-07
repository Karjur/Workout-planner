<template>
    <WorkoutDetails title="Trennide nimekiri" />
</template>
  
  <script setup lang="ts">
  import WorkoutDetails from '@/components/WorkoutDetailsComponent.vue';
  import { useWorkoutsStore } from '@/stores/workoutsStore';
  import { useRouter } from 'vue-router';
  import { ref, Ref } from 'vue';
  import { Workout } from '@/modules/workout';
  
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
  const router = useRouter();
  </script>
  