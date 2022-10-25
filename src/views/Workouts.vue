<template>
  <div class="text-right mb-3">    
</div>
<!-- Modal -->
<div class="text-right mb-3">  
<div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h1 class="modal-title fs-5" id="exampleModalLabel">Lisa trenn</h1>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        <div class="text-left mb-3">
          <label for="formWorkoutExampleInput" class="form-label">Trenni nimi</label>
          <input :type="'text'" class="form-control" id="formWorkoutExampleInput" placeholder="Trenni nimi" v-model="workout.name">
        </div>
        <div class="text-left mb-3">
          <label for="formWorkoutExampleInput2" class="form-label">Treeneri nimi</label>
          <input :type="'text'" class="form-control" id="formWorkoutExampleInput2" placeholder="Treeneri nimi" v-model="workout.trainer">
        </div>
        <div class="text-left mb-3">
          <label for="formWorkoutExampleInput3" class="form-label">Kirjeldus</label>
          <input :type="'text'" class="form-control" id="formWorkoutExampleInput3" placeholder="Kirjeldus" v-model="workout.description">
        </div>
        <div class="text-left mb-3">
          <label for="formWorkoutExampleInput4" class="form-label">Asukoht</label>
          <input :type="'text'" class="form-control" id="formWorkoutExampleInput4" placeholder="Asukoht" v-model="workout.location">
        </div>
        <div class="text-left mb-3">
          <label for="formWorkoutExampleInput5" class="form-label">Algus</label>
          <Datepicker v-model="workout.startTime"> </Datepicker>
        </div>
        <div class="text-left mb-3">
          <label for="formWorkoutExampleInput6" class="form-label">Lõpp</label>
          <Datepicker v-model="workout.endTime"> </Datepicker>
        </div>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Katkesta</button>
        <button type="button" class="btn btn-primary" @click="submitForm">Lisa trenn</button>
      </div>
    </div>
  </div>
</div>
</div>

<WorkoutList title="Trennide nimekiri"/> 
</template>
  
<script setup lang="ts">
 import { Workout } from '@/model/workout';
import { useWorkoutsStore } from '@/stores/workoutsStore';
import { ref, Ref } from 'vue';
import WorkoutList from '@/components/WorkoutList.vue';
import Datepicker from '@vuepic/vue-datepicker';

import { useRouter } from 'vue-router';

const workout: Ref<Workout> = ref({
  name: '',
  trainer: '',
  description: '',
  location: '',
  startTime: '',
  endTime: '',
});
const { addWorkout } = useWorkoutsStore();

const router = useRouter();

const submitForm = () => {
  addWorkout({ ...workout.value });
  workout.value.name = '';
  workout.value.trainer = '';
  workout.value.description = '';
  workout.value.location = '';
  workout.value.startTime = '';
  workout.value.endTime = '';
  router.push({ name: 'Workouts' });
};
  
  </script>
 