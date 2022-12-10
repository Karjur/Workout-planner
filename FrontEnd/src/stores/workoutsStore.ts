import useApi, { useApiRawRequest } from '@/modules/api';
import { Workout } from '@/modules/workout';
import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useWorkoutsStore = defineStore('workoutsStore', () => {
  const workouts = ref<Workout[]>([]);

  const {request: getWorkoutsAction, response: apiWorkouts} = useApi<Workout[]>("Workouts");

  const getWorkouts = async () => {
      await getWorkoutsAction();

      if(apiWorkouts.value) {
        for(let i =0; i < apiWorkouts.value.length; i++) {
          const startTime = apiWorkouts.value[i].startTime as string;
          const endTime = apiWorkouts.value[i].endTime as string;
          const endTimeParts =  endTime.split(":");
          const startTimeParts =  startTime.split(":");
          apiWorkouts.value[i].endTime = {hours: endTimeParts[0], minutes: endTimeParts[1]};
          apiWorkouts.value[i].startTime = {hours: startTimeParts[0], minutes: startTimeParts[1]};
          apiWorkouts.value[i].date = apiWorkouts.value[i].date ? new Date(apiWorkouts.value[i].date).toLocaleDateString('ru-RU') : "";
        }
        return apiWorkouts.value;
      }

      return [];
  }

  const addZero = (num: number) => {

    return (+num ? num : 0) < 10 ? "0" + num : num;
  };

  const prepareWorkoutObj = (workout: Workout): Workout => {
    if(typeof workout.startTime == 'object' && typeof workout.endTime== 'object') {
      workout.startTime = `${addZero(+workout.startTime.hours)}:${addZero(+workout.startTime.minutes)}`;
      workout.endTime = `${addZero(+workout.endTime.hours)}:${addZero(+workout.endTime.minutes)}`;
    }

    return workout;
  }

  const addWorkout =async  (workout: Workout) => {
    console.log("workout to edit",workout);
    workout = prepareWorkoutObj(workout);

    const add = useApiRawRequest(`Workouts`, {
      method: "POST",
      body: JSON.stringify(workout),
      headers: {
          'Content-Type': 'application/json'
      }
    })

    await add();
    workouts.value = await getWorkouts();
    console.log("after add ", workouts.value);
  };

  const editWorkout = async  (workout: Workout) => {
    console.log("workout to edit",workout);
    workout = prepareWorkoutObj(workout);

    const edit = useApiRawRequest(`Workouts/${workout.id}`, {
      method: "PUT",
      body: JSON.stringify(workout),
      headers: {
          'Content-Type': 'application/json'
      }
    })

    await edit();
    workouts.value = await getWorkouts();
  };

  const removeWorkout =async  (workoutId: number) => {
    const remove = useApiRawRequest(`Workouts/${workoutId}`, {
      method: "DELETE",
      headers: {
          'Content-Type': 'application/json'
      }
    })

    await remove();
    workouts.value = await getWorkouts(); 
  };

  return { workouts, addWorkout, editWorkout, removeWorkout, getWorkouts};
});


