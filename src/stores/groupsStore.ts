import { Group } from '@/model/group';
import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useGroupsStore = defineStore('groupsStore', () => {
  const groups = ref<Group[]>([
    { name: 'Jalgpall', coachName: 'Mati', status: 'Avatud', nrOfParticipants: 15 },
    { name: 'Korvpall', coachName: 'Kati', status: 'Kinnine', nrOfParticipants: 10},
  ]);

  const addGroup = (group: Group) => {
    groups.value.push(group);
  };

  return { groups, addGroup};
});

