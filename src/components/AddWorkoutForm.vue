<template>
    <div
      class="min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8"
    >
      <form class="max-w-md w-full space-y-8">
        <div class="mt-8 space-y-6">
          <div class="rounded-md shadow-sm -space-y-px">
            <div>
              <label for="name">Nimi</label>
              <input
                id="name"
                name="name"
                v-model="workout.name"
                class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Nimi"
              />
            </div>
            <div>
              <label for="trainer">Treener</label>
              <input
                id="trainer"
                name="trainer"
                v-model="workout.trainer"
                class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Treener"
              />
            </div>
            <div>
              <label for="description">Kirjeldus</label>
              <input
                id="description"
                name="description"
                v-model="workout.description"
                class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Kirjeldus"
              />
            </div>
            <div>
              <label for="location">Asukoht</label>
              <input
                id="location"
                name="location"
                v-model="workout.location"
                class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Asukoht"
              />
            </div>
            <div>
              <label for="startTime">Algus</label>
              <input
                id="startTime"
                name="startTime"
                v-model="workout.startTime"
                class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Algus"
              />
            </div>
            <div>
              <label for="endTime">Lõpp</label>
              <input
                id="endTime"
                name="endTime"
                v-model="workout.endTime"
                class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Lõpp"
              />
            </div>
          </div>
  
          <div>
            <button
              @click.prevent="submitForm"
              class="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              <span class="absolute left-0 inset-y-0 flex items-center pl-3">
              </span>
              Lisa trenn
            </button>
          </div>
        </div>
      </form>
    </div>
  </template>
  
  <script setup lang="ts">
  import { Workout } from '@/model/workout';
  import { useWorkoutsStore } from '@/stores/workoutsStore';
  import { isDate } from 'util/types';
  import { ref, Ref } from 'vue';
  import { useRouter } from 'vue-router';
  import DateComponent from './DateComponent.vue';
  import Datepicker from '@vuepic/vue-datepicker';
  import '@vuepic/vue-datepicker/dist/main.css';
  
  const workout: Ref<Workout> = ref({
    name: '',
    trainer: '',
    description: '',
    location: '',
    date: '',
    startTime: '',
    endTime: '',
  });
  const { addWorkout } = useWorkoutsStore();
  const router = useRouter();
  
  const submitForm = () => {
    addWorkout({ ...workout.value });
  
    workout.value.name = '';
    workout.value.description = '';
  
    router.push({ name: 'Trennid' });
  };
  </script>
  
