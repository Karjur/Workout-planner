import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import WorkoutsVue from '@/views/Workouts.vue';
import SportlyzMainVue from '@/views/SportlyzMain.vue';
import GroupsVue from '@/views/Groups.vue';
import ProfileSprtman from '@/views/ProfileSportman.vue';

export interface IPageData {
  path: string;
  name: string;
}

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Avaleht',
    component: SportlyzMainVue,
    props: { title: 'Avaleht'},
  },
  {
    path: '/trainings',
    name: 'Trennid',
    component: WorkoutsVue,
    props: { title: 'Trennid' },
  },
  {
    path: '/groups',
    name: 'Grupid',
    component: GroupsVue,
    props: { title: 'Grupid' },
  },
  {
    path: '/profile',
    component: ProfileSprtman,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
