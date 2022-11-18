<template>
  <div class="bg-gray-50 py-12 px-4 sm:px-6 lg:px-8 text-dark-300">
    <div class="bg-gray-50">
      <DataTable :value="workouts">
        <template #header>
          <div class="flex">
            <h1 class="font-bold">{{ title }}</h1>
            <input
              type="text"
              v-model="workoutTitleFilter"
              placeholder="Treeningu nime filter"
              class="border-2 ml-auto"
            />
            <button
              a
              class="btn btn-primary"
              style="float: right"
              data-bs-toggle="modal"
              data-bs-target="#exampleModal"
              align-right
              href="newworkout"
              :to="{ name: 'Lisa trenn' }"
              role="button"
            >
              Lisa trenn
            </button>
          </div>
        </template>
        <Column field="name" header="Nimi" />
        <Column field="trainer" header="Treener" />
        <Column field="description" header="Kirjeldus" />
        <Column field="location" header="Asukoht" />
        <Column field="date" header="Kuupäev" />
        <Column field="endTime" header="Lõpp" />
        <Column field="startTime" header="Algus" />
      </DataTable>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { Workout } from '@/modules/workout';
import { useWorkoutsStore } from '@/stores/workoutsStore';
import { storeToRefs } from 'pinia';
import { defineComponent, onMounted, ref, watch } from 'vue';

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
