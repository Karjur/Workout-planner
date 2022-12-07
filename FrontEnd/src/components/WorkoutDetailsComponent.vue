<template>
    <div class="bg-gray-50 py-12 px-4 sm:px-6 lg:px-8 text-dark-300">
      <div class="bg-gray-50">
        <DataTable :value="workouts">
          <template #header>
          </template>
          <Column field="name" header="Nimi" />
          <Column field="trainer" header="Treener" />
          <Column field="description" header="Kirjeldus" />
          <Column field="location" header="Asukoht" />
          <Column field="date" header="Kuupäev" />
          <Column field="startTime" header="Algus" />
          <Column field="endTime" header="Lõpp" />
          <Column>
          </Column>
        </DataTable>
      </div>
    </div>
  </template>
  
  <script lang="ts" setup>
  import { Workout } from '@/modules/workout';
  import { useWorkoutsStore } from '@/stores/workoutsStore';
  import { storeToRefs } from 'pinia';
  import { onMounted, ref, Ref, watch } from 'vue';
  
  defineProps<{ title: string }>();
  
  const workoutsStore = useWorkoutsStore();
  const { workouts } = storeToRefs(workoutsStore);
  const workoutTitleFilter = ref<string>('');
  
  onMounted(() => {
    workoutsStore.load();
  });
  
  watch(workoutTitleFilter, (title) => {
    workoutsStore.filterWorkoutsByTitle(title);
  });
  
  const remove = (workout: Workout) => {
    workoutsStore.deleteWorkout(workout);
  };
  </script>
  