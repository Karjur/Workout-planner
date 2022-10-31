<template>
    <!-- Modal -->
    <div class="text-right mb-3">  
<div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true" @click="closeModal">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h1 class="modal-title fs-5" id="exampleModalLabel">{{ isEdit ? "Edit Group" : "Lisa Grupp"}}</h1>
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
        <button type="button" class="btn btn-secondary" id="close-modal" data-bs-dismiss="modal">Katkesta</button>
        <button type="button" class="btn btn-primary" @click="submitForm">{{ isEdit ? "Edit Group" : "Lisa Grupp"}}</button>
      </div>
    </div>
  </div>
</div> 
</div>
</template>

<script lang="ts">
import { Group } from '@/model/group';
import { useGroupsStore } from '@/stores/groupsStore';
import { defineComponent, Ref, ref, PropType  } from 'vue';

const emptyGroup = {
    id: 0,
    name: '',
    coachName: '',
    status: 'Avatud',
    nrOfParticipants: 0,
};

export default defineComponent({
    data: () => ({
       isEdit: false 
    }),
    props: {
        editGroup: {
            type: Object as PropType<Group | null>,
            required: true
        }
    },
    setup(props) {
        const group : Ref<Group> = ref(emptyGroup);
        
        if(props.editGroup) {
            group.value = props.editGroup;
        }
        
        const {addGroup, editGroup: editGroupMethod} = useGroupsStore();

        return {group, addGroup, editGroupMethod, close};
    },
    methods: {
        submitForm() {
            if(this.isEdit) {
                this.editGroupMethod({ ...this.group });
                this.group = emptyGroup;
            } else {
                this.addGroup({ ...this.group });
                this.group = emptyGroup;
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
        editGroup() {
            this.isEdit = !!this.editGroup;

            if(this.isEdit && this.editGroup) {
                this.group = this.editGroup;
            } else {
                this.group = emptyGroup;
            }
        }
    }
});


</script>

<style lang="scss" scoped>

</style>