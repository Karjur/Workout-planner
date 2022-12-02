<template>
  <header>
    <nav class="h-16">
      <div class="branding">
        <img src="@/assets/sportlyz_logo.png" alt="" />
      </div>
      <ul class="navigation" sm:justify-start>
        <li>
          <router-link
            aria-current="page"
            class="link"
            :to="{ name: 'Avaleht' }"
            >Avaleht</router-link
          >
        </li>
        <li>
          <router-link aria-current="page" class="link" to="/profile-sportsman"
            >Profiil</router-link
          >
        </li>
        <li>
          <router-link
            aria-current="page"
            class="link"
            :to="{ name: 'Trennid' }"
            >Treeningud</router-link
          >
        </li>
        <li>
          <router-link
            aria-current="page"
            class="link"
            :to="{ name: 'Logi sisse' }"
            >Login</router-link
          >
        </li>
        <li>
          <div
            class="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0 ml-3 relative"
          >
            <button
              type="button"
              v-if="isAuthenticated"
              class="text-white ring-gray-400 px-2 flex text-sm rounded-full focus:outline-none ring-2"
              @click="signOut"
            >
              Logi välja
            </button>
          </div>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script lang="ts">
import router from '@/router';
import { storeToRefs } from 'pinia';
import { useAuthStore } from '@/stores/authStore';

export default {
  name: 'navigation',
  setup() {
    const authStore = useAuthStore();
    const { logout } = authStore;
    const { isAuthenticated } = storeToRefs(authStore);

    const signOut = () => {
      logout();
      router.push({ name: 'Logi sisse' });
    };

    return { isAuthenticated, signOut };
  },
};
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
