import useApi, { useApiRawRequest } from '@/modules/api';
import { Group } from '@/model/group';
import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useGroupsStore = defineStore('groupsStore', () => {
  const apiGetGroups = useApi<Group[]>('groups');
  let allGroups: Group[] = [];
  let certainGroup: Group | undefined = undefined;
 // let groups = ref<Group[]>([]);
  let group = ref<Group>();

  const loadGroups = async () => {
    await apiGetGroups.request();

    if (apiGetGroups.response.value) {
      return apiGetGroups.response.value!;
    }

    return [];
  };

  const loadById = async (id: string) => {
    const url = `groups/${id}`;
    const getGroupByIdRequest = useApi<Group>(url);

    await getGroupByIdRequest.request();
    
    if (getGroupByIdRequest.response.value) {
      return getGroupByIdRequest.response.value!;
    }

    return undefined;
  };

  const load = async (id: string | undefined) => {
    if (id){
      certainGroup = await loadById(id);
      group.value = certainGroup;
    }else{
      allGroups = await loadGroups();
      groups.value = allGroups;
    }
  };


  const groups = ref<Group[]>([
    { id: 0, name: 'Jalgpall', coachName: 'Kevin', status: 'Avatud', nrOfParticipants: 15 },
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

  return { groups, group, load, addGroup, editGroup, removeGroup};
});

