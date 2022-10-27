<template>
  <div
    class="min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
    <form class="max-w-md w-full space-y-8">
      <div class="mt-8 space-y-6">
        <div class="rounded-md shadow-sm -space-y-px">
          <div>
            <label for="name">Grupi nimi</label>
            <input
              id="name"
              name="name"
              v-model="group.name"
              class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
              placeholder="Nimi"
            />
          </div>
          <div>
            <label for="coachName">Treener</label>
            <input
              id="coachName"
              name="coachName"
              v-model="group.coachName"
              class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
              placeholder="Treener"
            />
          </div>
          <div>
            <label for="status">Staatus</label>
            <br />
            <input
              type="radio"
              id="enable"
              value="Available"
              v-model="group.status"
              checked
            />
            <label for="enable">Avatud</label>
            <br />
            <input
              type="radio"
              id="disable"
              value="Non-Available"
              v-model="group.status"
            />
            <label for="disable">Kinnine</label>
          </div>
          <div>
            <label for="nrOfParticipants">Osalejate arv</label>
            <input
              type="number"
              id="nrOfParticipants"
              name="nrOfParticipants"
              v-model="group.nrOfParticipants"
              class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
              placeholder="Osalejate arv"
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
            Lisa treeninggrupp
          </button>
        </div>
      </div>
    </form>
  </div>
</template>

<script setup lang="ts">
import { Group } from '@/model/group';
import { useGroupsStore } from '@/stores/groupsStore';
import { ref, Ref } from 'vue';

import { useRouter } from 'vue-router';

const group: Ref<Group> = ref({
  name: '',
  coachName: '',
  status: 'Avatud',
  nrOfParticipants: 0,
});
const { addGroup } = useGroupsStore();

const router = useRouter();

const submitForm = () => {
  addGroup({ ...group.value });
  group.value.name = '';
  group.value.coachName = '';
  group.value.status = '';
  group.value.nrOfParticipants = 0;
  router.push({ name: 'Groups' });
};
</script>
