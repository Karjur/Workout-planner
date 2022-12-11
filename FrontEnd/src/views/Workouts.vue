<template>
  <div class="text-right mb-3"></div>
  <WorkoutList title="Trennide nimekiri" />
</template>

<script setup lang="ts">
import WorkoutList from '@/components/WorkoutList.vue';
import Datepicker from '@vuepic/vue-datepicker';
import { useWorkoutsStore } from '@/stores/workoutsStore';
import { useRouter } from 'vue-router';
import { ref, Ref } from 'vue';
import { Workout } from '@/modules/workout';

const { addWorkout } = useWorkoutsStore();

const router = useRouter();
</script>