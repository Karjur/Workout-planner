<template>
  <div class="center">
    <div class="box">
    <div v-if="workout != null">
      <div>id: {{ workout.id }}</div>
      <div>name: {{ workout.name }}</div>
      <div>trainer: {{ workout.trainer }}</div>
      <div>description: {{ workout.description }}</div>
      <div>location: {{ workout.location }}</div>
      <div>date: {{ workout.date }}</div>
      <div>startTime: {{ workout.startTime }}</div>
      <div>endTime: {{ workout.endTime }}</div>
      <div>maxParticipants: {{ workout.maxParticipants }}</div>
      <div>nrOfParticipants: {{ workout.nrOfParticipants }}</div>
      <!-- <input type="checkbox" v-model="checked" @change="updateParticipants" /> -->
      <button class="text-red-500" @click="updateParticipants(1)">I will be attending the workout</button>
      <button class="text-red-500" @click="updateParticipants(-1)">I will not be attending the workout</button>
    </div>
  </div>
  </div>
  </template>
  
  <script lang="ts">
  import { defineComponent } from 'vue';
  import { useRouter } from 'vue-router';
  import { Workout } from '@/modules/workout';
  import axios from 'axios';
  
  export default defineComponent({
    data() {
      return { workout: null as Workout | null, checked: false, };
    },
    async mounted() {
      const router = useRouter();
      const id = +router.currentRoute.value.params.id;
      const response = await fetch('http://localhost:5000/api/Workouts/' + id);
      this.workout = await response.json();
    },
    methods: {
    async updateParticipants(value: number) {
      if (this.workout && this.workout.nrOfParticipants + value >= 0 && this.workout.nrOfParticipants + value <= this.workout.maxParticipants) {
        this.workout.nrOfParticipants += value;
      
      // ei tööta  
      //   try {
      //   await axios.put('http://localhost:5000/workouts/1', {
      //     nrOfParticipants: this.workout.nrOfParticipants
      //   });
      // } catch (error) {
      //   // handle the error here
      // }
      // ei tööta
    }
  }
  }});
  </script>
  