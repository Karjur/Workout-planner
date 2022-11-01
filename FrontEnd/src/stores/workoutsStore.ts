import { Workout } from '@/model/workout';
import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useWorkoutsStore = defineStore('exercisesStore', () => {
  const workouts = ref<Workout[]>([
    { id: 0, name: 'Jalgpall', trainer: 'Kalle', description: 'Kirjeldus', location: 'Tallinn', date: '2022, 11, 3', startTime: '18:00', endTime:'19:30'},
    { id: 1, name: 'Võrkpall', trainer: 'Pille', description: 'Kirjeldus', location: 'Tallinn', date: '2022, 11, 3',startTime: '18:00', endTime:'19:30'},
  ]);

  const addWorkout = (workout: Workout) => {
    workout.id = new Date().getTime();
    workouts.value.push(workout);
    console.log(workouts.value);
  };

  const editWorkout = (workout: Workout) => {
    const editWorkoutIdx = workouts.value.findIndex(w => w.id === workout.id);
    if(editWorkoutIdx !== -1) {
      workouts.value[editWorkoutIdx] = workout; 
    }
  };

  const removeWorkout = (workoutId: number) => {
    const removeWorkoutIdx = workouts.value.findIndex(w => w.id === workoutId);
    if(removeWorkoutIdx >= 0) {
      workouts.value.splice(removeWorkoutIdx, 1);
    } 
  };

  return { workouts, addWorkout, editWorkout, removeWorkout};
});
