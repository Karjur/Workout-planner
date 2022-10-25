import { Workout } from '@/model/workout';
import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useWorkoutsStore = defineStore('exercisesStore', () => {
  const workouts = ref<Workout[]>([
    { name: 'Jalgpall', trainer: 'Kalle', description: 'Kirjeldus', location: 'Tallinn', startTime: '18:00', endTime:'19:30'},
    { name: 'Võrkpall', trainer: 'Pille', description: 'Kirjeldus', location: 'Tallinn', startTime: '18:00', endTime:'19:30'},
  ]);

  const addWorkout = (workout: Workout) => {
    workouts.value.push(workout);
  };

  return { workouts, addWorkout };
});
