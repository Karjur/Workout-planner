<template>
  <div class="bg-gray-50 py-12 px-4 sm:px-6 lg:px-8 text-dark-300">
    <div class="bg-gray-50">
      <h1 class="font-bold text-center">
        {{ title }}
        <button
          a
          class="btn btn-primary"
          style="float: right"
          data-bs-toggle="modal"
          data-bs-target="#exampleModal"
          align-right
          href="newworkout"
          :to="{ name: 'Lisa trenn' }"
          role="button"
        >
          Lisa trenn
        </button>
      </h1>

      <p v-if="workouts.length === 0">Tühi</p>
      <DataTable
        :value="workouts"
        v-else
        editMode="row"
        dataKey="id"
      >
        <Column field="name" header="Nimi" />
        <Column field="trainer" header="Treener" />
        <Column field="description" header="Kirjeldus" />
        <Column field="location" header="Asukoht" />
        <Column field="date" header="Kuupäev" />
        <Column field="startTime" header="Algus">
          <template #body="slotProps">
            {{ slotProps.data.startTime.hours }}:{{
              slotProps.data.startTime.minutes
            }}
          </template>
        </Column>
        <Column field="endTime" header="Lõpp">
          <template #body="slotProps">
            {{ slotProps.data.endTime.hours }}:{{
              slotProps.data.endTime.minutes
            }}
          </template>
        </Column>
        <Column
          style="width: 10%; min-width: 8rem"
          bodyStyle="text-align:center"
        >
          <template #body="slotProps">
            <button
                class="p-row-editor-init p-link"
                type="button"
                @click="async (e) =>  goToWorkoudDetails(slotProps.data)"
              >
                <span class="p-row-editor-init-icon pi pi-fw pi-pencil"></span>
              </button>     
            <button
                class="p-row-editor-init p-link"
                type="button"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal"
                @click="async (e) =>  await setEditWorkout(slotProps.data)"
              >
                <span class="p-row-editor-init-icon pi pi-fw pi-pencil"></span>
              </button>
              <button
                class="p-row-editor-init p-link"
                type="button"
                @click="(e) => removeWorkout(slotProps.data)"
              >
                <span class="p-row-editor-init-icon pi pi-fw pi-trash"></span>
              </button>
              
          </template>
        </Column>
      </DataTable>
    </div>
  </div>
  <WorkoutModal :editWorkout="editWorkout" @close="close" />
</template>

<script lang="ts">
import { Workout } from '@/modules/workout';
import { useWorkoutsStore } from '@/stores/workoutsStore';
import { storeToRefs } from 'pinia';
import { defineComponent, ref } from 'vue';
import WorkoutModal from './WorkoutModal.vue';

export default defineComponent({

  props: {
    title: String,
  },
  setup() {
    
    const workoutStore = useWorkoutsStore();
    const {workouts} = storeToRefs(workoutStore);
    const { removeWorkout: removeWorkoutMethod, getWorkouts } = useWorkoutsStore();

    const editWorkout = ref<Workout | null>(null);

    const setEditWorkout = (data: Workout) => {
      editWorkout.value = { ...data };
    };

    const loadWorkouts = async () => {
      // console.log("was", workouts);
      workouts.value = await getWorkouts();
      // console.log("now", workouts);
    };

    const close = () => {
      editWorkout.value = null;
      loadWorkouts();
    };
    return {
      close,
      setEditWorkout,
      editWorkout,
      removeWorkoutMethod,
      getWorkouts,
      loadWorkouts,
      workouts,
    };
  },
  async mounted() {
    this.loadWorkouts();
  },
  methods: {
    goToWorkoudDetails(data: Workout) {
      this.$router.push(`/trainings/${data.id}`);
    },
    async removeWorkout(workout: Workout) {
      const okRemove = confirm(
        `Do you really want to remove workout ${workout.name}?`,
      );
      if (okRemove) {
        await this.removeWorkoutMethod(workout.id);
        this.loadWorkouts();
      }
    },
  },
  watch: {
    workouts() {
      console.log("workouts changes", this.workouts);
    }
  },
  components: { WorkoutModal },
});
</script>

