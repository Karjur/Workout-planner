import useApi, { useApiRawRequest } from '@/modules/api';
import { Workout } from '@/modules/workout';
import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useWorkoutsStore = defineStore('workoutsStore', () => {
  const apiGetWorkouts = useApi<Workout[]>('workouts');
  let allWorkouts: Workout[] = [];
  let workouts = ref<Workout[]>([]);

  const loadWorkouts = async () => {
    await apiGetWorkouts.request();

    if (apiGetWorkouts.response.value) {
      return apiGetWorkouts.response.value!;
    }

    return [];
  };

  const load = async () => {
    allWorkouts = await loadWorkouts();
    workouts.value = allWorkouts;
  };

  const addWorkout = async (workout: Workout) => {
    const apiAddWorkout = useApi<Workout>('workouts', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(workout),
    });
    await apiAddWorkout.request();
    if (apiAddWorkout.response.value) {
      allWorkouts.push(apiAddWorkout.response.value!);
      workouts.value = allWorkouts;
    }
  };

  const deleteWorkout = async (workout: Workout) => {
    const deleteWorkoutRequest = useApiRawRequest(`workouts/${workout.id}`, {
      method: 'DELETE',
    });

    const res = await deleteWorkoutRequest();

    if (res.status === 204) {
      let id = allWorkouts.indexOf(workout);

      if (id !== -1) {
        allWorkouts.splice(id, 1);
      }

      id = allWorkouts.indexOf(workout);

      if (id !== -1) {
        allWorkouts.splice(id, 1);
      }
    }
  };

  const filterWorkoutsByTitle = (exerciseTitleFilter: string) => {
    workouts.value = allWorkouts.filter((x) =>
      x.name.startsWith(exerciseTitleFilter),
    );
  };

  return { workouts, addWorkout, deleteWorkout, load, filterWorkoutsByTitle };
});
