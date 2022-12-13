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
          name="participation"
          value="participates"
          @click=updateParticipants(1)
          checked
          />
          <label for="enable">Osalen</label>
      </div>
      <div class="item10">
        <input
          type="radio"
          id="disable"
          name="participation"
          value="does not participate"
          @click=updateParticipants(-1)
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
import { info } from 'console';
  
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
      console.log(this.workout?.nrOfParticipants);
      if (!this.workout) {
        console.log("Fuck javascript");
        return};
      if (this.workout.nrOfParticipants + value < 0) {
        this.workout.nrOfParticipants = -value;
        console.log("Fuck programming")
        
      }
      else if (this.workout.nrOfParticipants + value > this.workout.maxParticipants) {
        this.workout.nrOfParticipants  = parseInt(this.workout.maxParticipants.toString()) - value;
        console.log("Fuck university")
        
      }
      this.workout.nrOfParticipants = parseInt(this.workout.nrOfParticipants.toString()) + value;
      
      console.log(this.workout.nrOfParticipants);
      
      try {
        await axios.put('https://localhost:5000/api/Workouts/' + this.workout.id, this.workout);}
      catch (error) {
        console.log(error)
      }
    console.log(this.workout?.nrOfParticipants);
    console.log(value);
  }
}
});
</script>
  
