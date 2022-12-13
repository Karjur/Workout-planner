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
      <div class="item8">Osalejad: {{ participantNum }} / {{ workout.maxParticipants }}</div>
      <div class="item9">
        <input
            type="radio"
            id="enable"
            name="participation"
            value="participates"
          :checked="checked"

            @click=updateParticipants(false)
          />
          <label for="enable">Osalen</label>
      </div>
      <div class="item10">
        <input
          type="radio"
          id="disable"
          name="participation"
          value="does not participate"
          :checked="!checked"
          @click=updateParticipants(true)
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
  import { id } from 'date-fns/locale';
  
  export default defineComponent({
    data() {
      return { 
        workout: null as Workout | null, 
        checked: false,
        participantNum: 0
      };
    },
    async mounted() {
      const router = useRouter();
      const id = +router.currentRoute.value.params.id;
      const responseWorkout= await fetch('https://localhost:5000/api/Workouts/' + id);
      this.workout = await responseWorkout.json();
      const participants = await fetch('https://localhost:5000/api/Workouts/' + id + '/')
    },
    methods: {
    async updateParticipants(remove: boolean) {
      if(remove && this.checked) {
        this.participantNum--;
        this.checked = false;
      } else if(!remove && !this.checked) {
        this.participantNum++;
        this.checked = true;
      }
    }
  }});
  </script>
  
