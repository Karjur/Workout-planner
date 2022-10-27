<template>
  <div class="text-right mb-3">
</div>
<!-- Modal -->
<div class="text-right mb-3">  
<div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h1 class="modal-title fs-5" id="exampleModalLabel">Lisa grupp</h1>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        <div class="text-left mb-3">
          <label for="formGroupExampleInput" class="form-label">Grupi nimi</label>
          <input :type="'text'" class="form-control" id="formGroupExampleInput" placeholder="Grupi nimi" v-model="group.name">
        </div>
        <div class="text-left mb-3">
          <label for="formGroupExampleInput2" class="form-label">Osalejate arv</label>
          <input :type="'number'" class="form-control" id="formGroupExampleInput2" placeholder="0" v-model="group.nrOfParticipants">
        </div>
        <div class="text-left mb-3">
          <label for="inputStatus" class="form-label">Staatus</label>
          <select id="inputStatus" class="form-select" v-model="group.status">
            <option selected>Vali...</option>
            <option>Avatud</option>
            <option>Kinnine</option>
          </select>
        </div>
        <div class="text-left mb-3">
          <label for="formGroupExampleInput" class="form-label">Treener</label>
          <input :type="'text'" class="form-control" id="formGroupExampleInput" placeholder="Treener" v-model="group.coachName">
        </div>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Katkesta</button>
        <button type="button" class="btn btn-primary" @click="submitForm">Lisa grupp</button>
      </div>
    </div>
  </div>
</div> 
</div>

<GroupList title="Gruppide nimekiri"/> 
</template>
  
<script setup lang="ts">
 import { Group } from '@/model/group';
import { useGroupsStore } from '@/stores/groupsStore';
import { ref, Ref } from 'vue';
import GroupList from '@/components/GroupList.vue';

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
 