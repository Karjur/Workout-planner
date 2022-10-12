import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import WorkoutsVue from '@/views/Workouts.vue';
import AddWorkoutVue from '@/views/AddWorkout.vue';
import SportlyzMainVue from '@/views/SportlyzMain.vue';
import GroupsVue from '@/views/Groups.vue';
import AddGroupVue from '@/views/AddGroup.vue';


const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Sportlyz',
    component: SportlyzMainVue,
    props: { title: 'Sportlyz'},
  },
  {
    path: '/trainings',
    name: 'Trennid',
    component: WorkoutsVue,
    props: { title: 'Trennid' },
  },
  {
    path: '/newworkout',
    name: 'Lisa trenn',
    component: AddWorkoutVue,
  },
  {
    path: '/groups',
    name: 'Groups',
    component: GroupsVue,
    props: { title: 'Groups' },
  },
  {
    path: '/newgroup',
    name: 'Add group',
    component: AddGroupVue,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
