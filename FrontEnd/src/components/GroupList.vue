<template>
    <div class="bg-gray-50 py-12 px-4 sm:px-6 lg:px-8 text-dark-300">
      <div class="bg-gray-50">
        <h1 class="font-bold text-center">{{ title }}
          <button 
             a class="btn btn-primary" style="float: right;" data-bs-toggle="modal" data-bs-target="#exampleModal" 
             align-right href = "newgroup" :to="{name: 'Lisa grupp'}" role="button">
             Lisa grupp
          </button>
        </h1>
        <p v-if="groups.length === 0">Tühi</p>
        <!-- <DataTable :value="products2" editMode="row"  v-model:editingRows="editingRows" @row-edit-save="onRowEditSave" responsiveLayout="scroll"></DataTable> -->
        <DataTable :value="groups" v-if="groups.length !== 0" editMode="row" dataKey="id">
          <Column field="name" header="Grupi nimi" />
          <Column field="nrOfParticipants" header="Osalejate arv" />
          <Column field="status" header="Staatus" />
          <Column field="coachName" header="Treener" />
          <Column style="width:10%; min-width:8rem" bodyStyle="text-align:center">
            <template  #body="slotProps">
              <button class="p-row-editor-init p-link" type="button" data-bs-toggle="modal" data-bs-target="#exampleModal" 
                @click="(e) => setEditGroup(slotProps.data)" ><span class="p-row-editor-init-icon pi pi-fw pi-pencil"></span>
              </button>
            </template>
          </Column>
        </DataTable>
      </div>
    </div>
    <GroupModal :editGroup="editGroup" @close="close"/>
</template>
  
<script setup lang="ts">
import { Group } from '@/model/group';
import { useGroupsStore } from '@/stores/groupsStore';
import { ref } from 'vue';
import GroupModal from './GroupModal.vue';


defineProps<{ title: string }>();
const { groups} = useGroupsStore();
const editGroup = ref<Group | null>(null);

const setEditGroup =  (data: Group) => {
  editGroup.value = {...data};
};

const close = () => {
  editGroup.value = null;
};
</script>