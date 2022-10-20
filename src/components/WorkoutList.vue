<template>
  <div class="bg-gray-50 py-12 px-4 sm:px-6 lg:px-8 text-dark-300">
    <div class="text-center bg-gray-50">
      <h1 class="font-bold">{{ title }}</h1>
      <DataTable :value="workouts">
        <Column field="name" header="Nimi" />
        <Column field="trainer" header="Treener" />
        <Column field="description" header="Kirjeldus" />
        <Column field="location" header="Asukoht" />
        <Column field="date" header="Kuupäev" />
        <Column field="startTime" header="Algus" />
        <Column field="endTime" header="Lõpp" />
      </DataTable>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useWorkoutsStore } from '@/stores/workoutsStore';

defineProps<{ title: string }>();

const { workouts } = useWorkoutsStore();
</script>
