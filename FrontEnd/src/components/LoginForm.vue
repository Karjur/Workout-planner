<template>
  <div class="bg-gray-50 py-12 px-4 sm:px-6 lg:px-8 text-dark-300">
    <div
      class="min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8"
    >
      <h1 class="font-bold text-center">
        {{ 'Sisselogimine' }}
      </h1>
    </div>
    <div class="container" style="width: 40%">
      <div class="text-center mb-4" v-if="isLoading">
        <div class="spinner-border text-primary">
          <span class="visually-hidden">Loading...</span>
        </div>
      </div>
      <div class="mb-3 row">
        <label for="staticEmail" class="col-sm-2 col-form-label"
          >Kasutajanimi</label
        >
        <div class="col-sm-10">
          <input
            type="text"
            v-model="username"
            class="form-control"
            placeholder="Kasutajanimi"
          />
        </div>
      </div>
      <div class="mb-3 row">
        <label for="inputPassword" class="col-sm-2 col-form-label"
          >Parool</label
        >
        <div class="col-sm-10">
          <input
            type="password"
            v-model="password"
            class="form-control"
            placeholder="Parool"
          />
        </div>
      </div>
      <div class="mb-3 row">
        <div class="col-9"></div>
        <div class="col-3 text-end">
          <button
            @click="submitForm"
            :disabled="!isAvailableSubmit"
            class="btn btn-success"
          >
            {{ 'Login sisse' }}
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { AppRole, useAuthStore } from '@/stores/authStore';
import { defineComponent, ref } from 'vue';

export default defineComponent({
  data() {
    return {
      username: '',
      password: '',
    };
  },
  setup() {
    const isLoading = ref<boolean>(false);
    const { login } = useAuthStore();
    return { isLoading, login };
  },
  methods: {
    submitForm() {
      if (this.username == 'admin' && this.password == 'admin') {
        this.login(AppRole.MASTER);
        this.$router.push('/Trennid');
      }
      if (this.username == 'test' && this.password == 'test') {
        this.login(AppRole.CLIENT);
        this.$router.push('/Trennid');
      }
    },
  },
  computed: {
    isAvailableSubmit() {
      return this.username !== '' && this.password !== '';
    },
  },
});
</script>
