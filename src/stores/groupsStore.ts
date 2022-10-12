import { Group } from '@/model/group';
import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useGroupsStore = defineStore('groupsStore', () => {
  const groups = ref<Group[]>([
    { name: 'Football', coachName: 'Mati', status: 'Available', nrOfParticipants: 15 },
    { name: 'Basketball', coachName: 'Kati', status: 'Non-available', nrOfParticipants: 10},
  ]);

  const addGroup = (group: Group) => {
    groups.value.push(group);
  };

  return { groups, addGroup};
});

