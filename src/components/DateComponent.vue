<template>
  <Datepicker
    v-model="workout.date"
    format="yyyy/MM/dd"
    value-format="yyyy-MM-dd">
  </Datepicker>
</template>

<script>
import DateComponent from './DateComponent.vue';
import { Workout } from '@/model/workout';
import { useWorkoutsStore } from '@/stores/workoutsStore';

export default {
  name: 'datecomponent',
};
</script>
