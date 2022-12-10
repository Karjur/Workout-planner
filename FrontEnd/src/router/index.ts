import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import WorkoutsVue from '@/views/Workouts.vue';
import AddWorkoutVue from '@/views/AddWorkout.vue';
import WorkoutDetailsVue from '@/views/WorkoutDetails.vue';
import SportlyzMainVue from '@/views/SportlyzMain.vue';
import AuthPageVue from '@/views/LoginForm.vue';
import ProfileSprtman from '@/views/ProfileSportman.vue';
import UpdateWorkoutVue from '@/views/UpdateWorkout.vue';
import LoginVue from '@/views/Login.vue';

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
    path: '/profile-sportsman',
    component: ProfileSprtman,
  },
  {
    path: '/login',
    name: 'Logi sisse',
    component: LoginVue,
  },
  {
    path: '/trainings/:id',
    component: WorkoutDetailsVue,
  },

];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
