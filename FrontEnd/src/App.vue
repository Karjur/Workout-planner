<template>
  <div><Navigation /></div>
  <router-view />
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Navigation from './components/Navigation.vue';
import { useAuthStore } from './stores/authStore';

export default defineComponent({
  mounted() {
    const authStore = useAuthStore();
    if (!authStore.hasPermision()) {
      this.$router.push('/');
    }
  },
  components: { Navigation },
});
</script>
