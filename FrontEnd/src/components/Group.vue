<template>
    <div>
      {{ group.name }} : {{ group.status }} :
      {{ group.nrOfParticipants }} : {{ group.coachName }} 
    </div>
  </template>
  
  <script setup lang="ts">
  import { Group } from '@/model/group';
  
  defineProps<{ group: Group }>();
  </script>