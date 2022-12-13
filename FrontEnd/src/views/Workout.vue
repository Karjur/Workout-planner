<template>
  <div v-if="workout != null">
  <div class="grid-container">
      <div class="item1">Trenni nimi: {{ workout.name }}</div>
      <div class="item2">Kuupäev: {{ workout.date }}</div>
      <div class="item3">Algus: {{ workout.startTime }}</div>
      <div class="item4">Lõpp: {{ workout.endTime }}</div>
      <div class="item5">Treener: {{ workout.trainer }}</div>
      <div class="item6">Asukoht: {{ workout.location }}</div>
      <div class="item7"></div>
      <div class="item8">Osalejad: {{ workout.nrOfParticipants }} / {{ workout.maxParticipants }}</div>
      <div class="item9">
        <input
          type="radio"
          id="enable"
          value="10"
          v-model="workout.nrOfParticipants"
          @click="updateParticipants(1)"
          checked
          />
          <label for="enable">Osalen</label>
      </div>
      <div class="item10">
        <input
          type="radio"
          id="disable"
          value=""
          v-model="workout.nrOfParticipants"
          @click="updateParticipants(-1)"
          />
          <label for="disable">Ei osale</label>
      </div>      
      <div class="item11">Kirjeldus: {{ workout.description }}</div>
      </div>
      <div>
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
  
