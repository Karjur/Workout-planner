<template>
  <div>{{ workout.name }}: {{ workout.trainer }} : {{ workout.description }}: {{ workout.location }}: {{ workout.date }}: {{workout.startTime}}: {{workout.endTime}}</div>
</template>

<script setup lang="ts">
import { Workout } from '@/modules/workout';

defineProps<{ workout: Workout }>();
</script>