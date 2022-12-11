<template>
  <div class="py-12 px-4 sm:px-6 lg:px-8 text-dark-300">
    <div
      class="min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8"
    >
      <h1 class="font-bold text-center">
        {{ isReg ? 'Registreerin' : 'Sisselogimine' }}
      </h1>
    </div>
    <div class="container" style="width: 40%">
      <div class="text-center mb-4" v-if="isLoading">
        <div class="spinner-border text-primary">
          <span class="visually-hidden">Loading...</span>
        </div>
      </div>
      <form @submit.prevent="submit">
        <div class="mb-3 row">
          <label for="username" class="col-sm-2 col-form-label"
            >Kasutajanimi</label
          >
          <div class="col-sm-10">
            <input
              type="text"
              v-model="user.username"
              name="username"
              class="form-control"
              placeholder="Kasutajanimi"
            />
          </div>
        </div>
        <div class="mb-3 row">
          <label for="password" class="col-sm-2 col-form-label">Parool</label>
          <div class="col-sm-10">
            <input
              type="password"
              v-model="user.password"
              name="password"
              class="form-control"
              placeholder="Parool"
            />
          </div>
        </div>
        <div class="mb-3 row">
          <div class="col-9">
            <div class="form-check form-switch">
              <input
                class="form-check-input"
                type="checkbox"
                :checked="isReg"
                @change="() => (isReg = !isReg)"
              />
              <label class="form-check-label" for="flexSwitchCheckDefault">{{
                !isReg ? 'Registreerin' : 'Login sisse'
              }}</label>
            </div>
          </div>
          <div class="col-3 text-end">
            <button @click="submit" class="btn btn-success">
              {{ isReg ? 'Registreerin' : 'Login sisse' }}
            </button>
          </div>
        </div>
      </form>
      <p class="text-red-400">Vigane kasutajanimi või parool</p>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import { User } from '@/modules/user';
import router from '@/router';

export default defineComponent({
  data: () => ({
    isReg: false,
  }),
  setup() {
    const isLoading = ref<boolean>(false);
    const user: User = { username: '', password: '' };

    let showError = ref(false);

    const submit = async () => {
      router.push({ name: 'Trennid' });
    };

    return { isLoading, user, submit, showError };
  },
});
</script>
