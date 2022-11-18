import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import WorkoutsVue from '@/views/Workouts.vue';
import AddWorkoutVue from '@/views/AddWorkout.vue';
import SportlyzMainVue from '@/views/SportlyzMain.vue';
import AuthPageVue from '@/views/AuthPage.vue';
import ProfileSprtman from '@/views/ProfileSportman.vue';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Avaleht',
    component: SportlyzMainVue,
    props: { title: 'Avaleht' },
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
    path: '/profile-sportsman',
    component: ProfileSprtman,
  },
  {
    path: '/auth',
    name: 'Login',
    component: AuthPageVue,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
