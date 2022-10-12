<template>
    <div class="bg-gray-50 py-12 px-4 sm:px-6 lg:px-8 text-dark-300">
      <div class="text-center bg-gray-50">
        <h1 class="font-bold">{{ title }}</h1>
        <p v-if="groups.length === 0">No groups</p>
        <DataTable :value="groups" v-if="groups.length !== 0">
          <Column field="name" header="Group name" />
          <Column field="nrOfParticipants" header="Number of participants" />
          <Column field="status" header="Status" />
          <Column field="coachName" header="Coach name" />
        </DataTable>
      </div>
    </div>
  </template>
  
  <script setup lang="ts">
  import { useGroupsStore } from '@/stores/groupsStore';
  defineProps<{ title: string }>();
  const { groups } = useGroupsStore();
  </script>