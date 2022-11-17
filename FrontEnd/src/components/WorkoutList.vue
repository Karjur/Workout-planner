<template>
  <div class="bg-gray-50 py-12 px-4 sm:px-6 lg:px-8 text-dark-300">
    <div class="bg-gray-50">
      <h1 class="font-bold text-center">{{ title }}
         <button  
         v-if="auth.role == AppRole.MASTER"
            a class="btn btn-primary" style="float: right;" data-bs-toggle="modal" data-bs-target="#exampleModal" 
            align-right href = "newworkout" :to="{name: 'Lisa trenn'}" role="button">
            Lisa trenn 
         </button>
      </h1>
      <p v-if="workouts.length === 0">Tühi</p>
      <DataTable :value="workouts" v-if="workouts.length !== 0" editMode="row" dataKey="id">
        <Column field="name" header="Nimi" />
        <Column field="trainer" header="Treener" />
        <Column field="description" header="Kirjeldus" />
        <Column field="location" header="Asukoht" />
        <Column field="date" header="Kuupäev" />
        <Column field="endTime" header="Lõpp" />
        <Column field="startTime" header="Algus" />
        </DataTable>
      </div>
    </div>
    <WorkoutModal :editWorkout="editWorkout" @close="close"/>
</template>
  
<script lang="ts">
import { Workout } from '@/model/workout';
import { useAuthStore, AppRole } from '@/stores/authStore';
import { useWorkoutsStore } from '@/stores/workoutsStore';
import { storeToRefs } from 'pinia';
import { defineComponent, ref } from 'vue';
import WorkoutModal from './WorkoutModal.vue';


export default defineComponent({
  props: {
    title: String
  },
  setup() {
      const { workouts, removeWorkout: removeWorkoutMethod} = useWorkoutsStore();
      const editWorkout = ref<Workout | null>(null);

      const setEditWorkout =  (data: Workout) => {
        editWorkout.value = {...data};
      };

      const authStore = useAuthStore();
      const {auth} = storeToRefs(authStore);

      const close = () => {
        editWorkout.value = null;
      };
      return {close, setEditWorkout,workouts,editWorkout,removeWorkoutMethod, auth, AppRole};
  },
  methods: {
    removeWorkout(workout: Workout) {
        const okRemove = confirm(`Do you really want to remove workout ${workout.name}?`);
        if(okRemove) {
          this.removeWorkoutMethod(workout.id);
          this.$forceUpdate();
        }
      }
  },
  components: {WorkoutModal}
});
</script>