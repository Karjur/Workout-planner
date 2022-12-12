<template>
  <div class="center">
    <div class="box">
    <div v-if="workout != null">
      <div>Trenni nimi: {{ workout.name }}</div>
      <div>Treener: {{ workout.trainer }}</div>
      <div>Kirjeldus: {{ workout.description }}</div>
      <div>Asukoht: {{ workout.location }}</div>
      <div>Kuupäev: {{ workout.date }}</div>
      <div>Algus: {{ workout.startTime }}</div>
      <div>Lõpp: {{ workout.endTime }}</div>
      <div>Max osalejad: {{ workout.maxParticipants }}</div>
      <div>Osalejad: {{ workout.nrOfParticipants }}</div>
      <input type="checkbox" v-model="checked" @click="updateParticipants(1)" />
            <input
              type="radio"
              id="enable"
              value="10"
              v-model="workout.nrOfParticipants"
              @click="updateParticipants(1)"
              checked
            />
            <label for="enable">Going</label>
            <br />
            <input
              type="radio"
              id="disable"
              value=""
              v-model="workout.nrOfParticipants"
              @click="updateParticipants(-1)"
            />
            <label for="disable">Not going</label>
          </div>
          <div>
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
      const response = await fetch('https://localhost:5000/api/Workouts/' + id);
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
  