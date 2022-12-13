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
        participantNum: 0,
      };
    },
    async mounted() {
      const router = useRouter();
      const id = +router.currentRoute.value.params.id;
      const responseWorkout= await fetch('https://localhost:5000/api/Workouts/' + id);
      this.workout = await responseWorkout.json();
      this.updateParticipantsAsync();
    },
    methods: {
      async updateParticipantsAsync() {
        const id = +this.$router.currentRoute.value.params.id;
        try {
          const participantsCount = await axios.get<any[]>('https://localhost:5000/api/Workouts/' + id + '/participants');
          console.log("participantsCount", participantsCount.data);
          this.checked = participantsCount.data.findIndex(p => p.userId  == 1) >= 0;
          this.participantNum = participantsCount.data.length;
        } catch(e) {
          this.participantNum = -1;
          this.checked = false;

        }
      },
    async updateParticipants(remove: boolean) {
      const id = +this.$router.currentRoute.value.params.id;
      console.log(remove ,this.checked);
      await axios.put<any[]>('https://localhost:5000/api/Workouts/' + id + '/participants?remove=' + remove)
      await this.updateParticipantsAsync();
    }
  }});
  </script>
  
