import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import WorkoutsVue from '@/views/Workouts.vue';
import WorkoutVue from '@/views/Workout.vue';
import AddWorkoutVue from '@/views/AddWorkout.vue';
import SportlyzMainVue from '@/views/SportlyzMain.vue';
import AuthPageVue from '@/views/LoginForm.vue';
import ProfileSportman from '@/views/ProfileSportman.vue';
import UpdateWorkoutVue from '@/views/UpdateWorkout.vue';
import LoginVue from '@/views/Login.vue';

export interface IPageData {
  path: string;
  name: string;
}

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
    path: '/profile',
    component: ProfileSportman,
  },
  {
    path: '/training/:id',
    name: 'Trenn',
    component: WorkoutVue,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
