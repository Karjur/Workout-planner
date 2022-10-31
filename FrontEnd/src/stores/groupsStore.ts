import { Group } from '@/model/group';
import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useGroupsStore = defineStore('groupsStore', () => {
  const groups = ref<Group[]>([
    { id: 0, name: 'Jalgpall', coachName: 'Mati', status: 'Avatud', nrOfParticipants: 15 },
    { id: 1, name: 'Korvpall', coachName: 'Kati', status: 'Kinnine', nrOfParticipants: 10},
  ]);

  const addGroup = (group: Group) => {
    group.id = new Date().getTime();
    groups.value.push(group);
    console.log(groups.value);
  };

  const editGroup = (group: Group) => {
    const editGroupIdx = groups.value.findIndex(g => g.id === group.id);
    if(editGroupIdx !== -1) {
      groups.value[editGroupIdx] = group; 
    }
  };

  const removeGroup = (groupId: number) => {
    const removeGroupIdx = groups.value.findIndex(g => g.id === groupId);
    if(removeGroupIdx >= 0) {
      groups.value.splice(removeGroupIdx, 1);
    } 
  };

  return { groups, addGroup, editGroup, removeGroup};
});

