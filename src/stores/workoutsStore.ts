import { Workout } from '@/model/workout';
import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useWorkoutsStore = defineStore('exercisesStore', () => {
  const workouts = ref<Workout[]>([
    { name: 'Jalgpall', trainer: 'Kalle', description: 'Kirjeldus', location: 'Tallinn', date: '2000.11.11' },
    { name: 'Võrkpall', trainer: 'Pille', description: 'Kirjeldus', location: 'Tallinn', date: '2000.11.11' },
    { name: 'Korvpall', trainer: 'Mati', description: 'Kirjeldus', location: 'Tallinn', date: '2000.11.11' },
    { name: 'Ujumine', trainer: 'Elle', description: 'Kirjeldus', location: 'Tallinn', date: '2000.11.11' },
  ]);

  const addWorkout = (workout: Workout) => {
    workout.value.push(workout);
  };

  return { workouts, addWorkout };
});
