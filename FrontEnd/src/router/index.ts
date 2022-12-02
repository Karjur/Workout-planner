import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import WorkoutsVue from '@/views/Workouts.vue';
import AddWorkoutVue from '@/views/AddWorkout.vue';
import SportlyzMainVue from '@/views/SportlyzMain.vue';
import AuthPageVue from '@/views/LoginForm.vue';
import ProfileSprtman from '@/views/ProfileSportman.vue';
import UpdateWorkoutVue from '@/views/UpdateWorkout.vue';
import LoginVue from '@/views/Login.vue';
import { useAuthStore } from '@/stores/authStore';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Avaleht',
    component: SportlyzMainVue,
    props: { title: 'Avaleht' },
    meta: { requiresAuth: false },
  },
  {
    path: '/trainings',
    name: 'Trennid',
    component: WorkoutsVue,
    props: { title: 'Trennid' },
    meta: { requiresAuth: true },
  },
  {
    path: '/newworkout',
    name: 'Lisa trenn',
    component: AddWorkoutVue,
    meta: { requiresAuth: true },
  },
  {
    path: '/update/:id',
    name: 'Uuenda trenni',
    component: UpdateWorkoutVue,
    meta: { requiresAuth: true },
  },
  {
    path: '/profile-sportsman',
    component: ProfileSprtman,
    meta: { requiresAuth: true },
  },
  {
    path: '/login',
    name: 'Logi sisse',
    component: LoginVue,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach((to, from, next) => {
  const useAuth = useAuthStore();
  if (to.matched.some((record) => record.meta.requiresAuth)) {
    if (useAuth.isAuthenticated) {
      next();
      return;
    }
    next('/login');
  } else {
    next();
  }
});

export default router;
