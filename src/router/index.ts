import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import WorkoutsVue from '@/views/Workouts.vue';
import AddWorkoutVue from '@/views/AddWorkout.vue';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Trennid',
    component: WorkoutsVue,
    props: { title: 'Trennid' },
  },
  {
    path: '/newworkout',
    name: 'Lisa trenn',
    component: AddWorkoutVue,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
