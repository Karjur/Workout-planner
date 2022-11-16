<template>
    <div id="body">
      <div class="blurred-circles">
        <div class="blurred-circle-blue" />
        <div class="blurred-circle-purple" />
        <div class="blurred-circle-pink" />
        <div class="blurred-circle-yellow" />
      </div>
      <div class="blurred-background"></div>
      <div class="dialog">
        <Dialog :modal="false" :closable="false" v-model:visible="displayModal">
          <div class="delete-dialog-header">
            <p class="delete-dialog-header-message">University editing</p>
          </div>
          <div class="dialog-body">
            <div class="input-data-container">
              <div class="labels-container">
                <label for="name">Name</label>
              </div>
  
              <div class="input-container">
                <input
                  id="name"
                  name="name"
                  v-model="workout.name"
                  class="inputing-data"
                  minlength="2"
                  maxlength="30"
                  required
                />
              </div>
  
            </div>
            <div class="buttons-container">
              <div class="cancel-description-button-container">
                <button class="cancel-description-button" @click="$emit('close')">
                  <p class="cancel-button-content">Cancel</p>
                </button>
              </div>
              <div class="delete-description-button-container">
                <button class="delete-description-button" @click="add()">
                  <p class="done-button-content">Done</p>
                </button>
              </div>
            </div>
          </div>
        </Dialog>
      </div>
    </div>
  </template>
  
  <script lang="ts">
  import { Workout } from "@/model/workout";
  import { useWorkoutsStore } from "@/stores/workoutsStore";
  import { ref, Ref } from "vue";
  import { useRouter } from "vue-router";
  import "@/components/course/courseStyle.css";
  
  export default {
    emits: ["close"],
    setup(props: any, context: any) {
      const displayModal = true;
      const router = useRouter();
      const picture = "";
  
      const { addWorkout } = useWorkoutsStore();
  
      const workout: Ref<Workout> = ref({
        id: -1,
        name: "",
        trainer: "",
        description: "",
        location: "",
        date: "", 
        startTime: "",
        endTime: "",
      });
  
      const add = async () => {
        let response = addWorkout({ ...workout.value });
  
        workout.value.id = -1;
        workout.value.name = "";
  
        let id = await response;
  
        context.emit('close');
      };
  
      return {
        displayModal,
        workout,
        router,
        add,
      };
    },
    methods: {
      
    },
  };
  </script>
  