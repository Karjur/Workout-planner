<template>
  <header>
    <nav class="h-16">
      <div class="branding">
        <img src="@/assets/sportlyz_logo.png" alt="" />
      </div>
      <ul class="navigation" sm:justify-start>
        <li v-for="path in paths">
          <router-link aria-current="page" class="link" :to="path.path">{{
            path.name
          }}</router-link>
        </li>
        <li v-if="auth.isAuth" @click="logout">
          <a class="router-link-active router-link-exact-active link">
            Log out
          </a>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script lang="ts">
import { IPageData } from '@/router';
import { useAuthStore } from '@/stores/authStore';
import { storeToRefs } from 'pinia';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'navigation',
  setup() {
    const { navbarPages } = storeToRefs(useAuthStore());
    const authStore = useAuthStore();
    const { auth } = storeToRefs(authStore);
    return { paths: navbarPages, logoutAction: authStore.logout, auth };
  },
  methods: {
    logout() {
      this.logoutAction();
      this.$router.push('/');
    },
  },
});
</script>

<style lang="scss" scoped>
header {
  background-color: rgba(0, 0, 0, 0.8);
  z-index: 99;
  width: 100%;
  transition: 0.5s ease all;
  color: #fff;
}

nav {
  display: flex;
  flex-direction: row;
  padding: 12px 0;
  transition: 0.5s ease all;
  width: 90%;
  margin: 0 auto;

  p {
    font-size: 20px;
    text-transform: uppercase;
    align-items: center;
    text-align: left;
  }

  ul,
  .link {
    font-weight: 500;
    color: #fff;
    list-style: none;
    text-decoration: none;
  }

  li {
    text-transform: uppercase;
    padding: 16px;
    margin-left: 16px;
  }

  .link {
    font-size: 14px;
    transition: 0.5s ease all;
    padding-bottom: 4px;
    border-bottom: 1px solid transparent;

    &:hover {
      color: #00afea;
      border-color: #00afea;
    }
  }

  .branding {
    display: flex;
    align-items: center;

    img {
      width: 140px;
      height: 35px;
      transition: 0.5s ease all;
    }
  }

  .navigation {
    display: flex;
    align-items: center;
    flex: 1;
    justify-content: flex-end;
  }
}
</style>
