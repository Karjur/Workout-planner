<template>
    <!-- Modal -->
    <div class="text-right mb-3">
      <div
        class="modal fade"
        id="exampleModal"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
        @click="closeModal"
      >
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h1 class="modal-title fs-5" id="exampleModalLabel">
                {{ isEdit ? 'Edit Workout' : 'Lisa Workout' }}
            </h1>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body">
              <div class="text-left mb-3">
                <label for="formWorkoutExampleInput" class="form-label"
                  >Trenni nimi</label
                >
                <input
                  :type="'text'"
                  class="form-control"
                  id="formWorkoutExampleInput"
                  placeholder="Trenni nimi"
                  v-model="workout.name"
                />
              </div>
              <div class="text-left mb-3">
                <label for="formWorkoutExampleInput2" class="form-label"
                  >Treeneri nimi</label
                >
                <input
                  :type="'text'"
                  class="form-control"
                  id="formWorkoutExampleInput2"
                  placeholder="Treeneri nimi"
                  v-model="workout.trainer"
                />
              </div>
              <div class="text-left mb-3">
                <label for="formWorkoutExampleInput3" class="form-label"
                  >Kirjeldus</label
                >
                <input
                  :type="'text'"
                  class="form-control"
                  id="formWorkoutExampleInput3"
                  placeholder="Kirjeldus"
                  v-model="workout.description"
                />
              </div>
              <div class="text-left mb-3">
                <label for="formWorkoutExampleInput4" class="form-label"
                  >Asukoht</label
                >
                <input
                  :type="'text'"
                  class="form-control"
                  id="formWorkoutExampleInput4"
                  placeholder="Asukoht"
                  v-model="workout.location"
                />
              </div>
              <div class="text-left mb-3">
                <label for="formWorkoutExampleInput5" class="form-label"
                  >Kuupäev</label
                >
                <Datepicker
                  v-model="workout.date"
                  inputformat="dd/MM/YYYY"
                  Datepicker
                />
              </div>
              <div class="text-left mb-3">
                <label for="formWorkoutExampleInput6" class="form-label"
                  >Algus</label
                >
                <Datepicker v-model="workout.startTime" timePicker />
              </div>
              <div class="text-left mb-3">
                <label for="formWorkoutExampleInput7" class="form-label"
                  >Lõpp</label
                >
                <Datepicker v-model="workout.endTime" timePicker />
              </div>
            </div>
            <div class="modal-footer">
              <button
                type="button"
                class="btn btn-secondary"
                id="close-modal"
                data-bs-dismiss="modal"
              >
                Katkesta
              </button>
              <button type="button" class="btn btn-primary" @click="submitForm">
                {{ isEdit ? 'Edit Workout' : 'Lisa Workout' }}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script lang="ts">
  import { Workout } from '@/model/Workout';
  import { useWorkoutsStore } from '@/stores/workoutsStore';
  import { defineComponent, Ref, ref, PropType  } from 'vue';
  
  const emptyWorkout = {
      id: 0,
      name: '',
      trainer: '',
      description: '',
      location: '',
      date: '',
      startTime: '',
      endTime: '',
      nrOfParticipants: 0,
  };
  
  export default defineComponent({
      data: () => ({
         isEdit: false 
      }),
      props: {
          editWorkout: {
              type: Object as PropType<Workout | null>,
              required: true
          }
      },
      setup(props) {
          const workout : Ref<Workout> = ref(emptyWorkout);
          
          if(props.editWorkout) {
              workout.value = props.editWorkout;
          }
          
          const {addWorkout, editWorkout: editWorkoutMethod} = useWorkoutsStore();
  
          return {workout, addWorkout, editWorkoutMethod, close};
      },
      methods: {
          submitForm() {
              if(this.isEdit) {
                  this.editWorkoutMethod({ ...this.workout });
                  this.workout = emptyWorkout;
              } else {
                  this.addWorkout({ ...this.workout });
                  this.workout = emptyWorkout;
              }
              document.querySelector('#close-modal')?.click();
          },
          closeModal(e: any) {
              e.stopPropagation();
              if(e.target.classList.contains("modal", "btn-close") || e.target.getAttribute("data-bs-dismiss")) {
                  this.$emit('close');
              }
          }
      },
      watch: {
          editWorkout() {
              this.isEdit = !!this.editWorkout;
  
              if(this.isEdit && this.editWorkout) {
                  this.workout = this.editWorkout;
              } else {
                  this.workout = emptyWorkout;
              }
          }
      }
  });

  </script>

  <style lang="scss" scoped>
  
  </style>
  