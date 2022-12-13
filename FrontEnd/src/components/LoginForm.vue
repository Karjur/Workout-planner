<template>
  <div class="py-12 px-4 sm:px-6 lg:px-8 text-dark-300">
    <div
      class="min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8"
    >
      <h1 class="font-bold text-center">
        {{ 'Sisselogimine' }}
      </h1>
    </div>
    <div class="container" style="width: 40%">
      <form @submit.prevent="handleSubmit">
        <div class="mb-3 row">
          <label for="username" class="col-sm-2 col-form-label"
            >Kasutajanimi</label
          >
          <div class="col-sm-10">
            <input
              type="text"
              v-model="username"
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
              v-model="password"
              name="password"
              class="form-control"
              placeholder="Parool"
            />
          </div>
        </div>
        <div class="mb-3 row">
          <div class="col-9"></div>
          <div class="col-3 text-end">
            <button @click="handleSubmit" class="btn btn-success">
              {{ 'Login sisse' }}
            </button>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import { User } from '@/modules/user';
import router from '@/router';
import axios from 'axios';

export default defineComponent({
  data() {
    return {
      username: '',
      password: '',
    };
  },
  methods: {
    async handleSubmit() {
      let result = await axios.get(
        `http://localhost:5000/api/Users/${this.username}&${this.password}`,
      );

      if (result.status == 200 && result.data.length > 0) {
        localStorage.setItem('user-info', JSON.stringify(result.data[0]));
        this.$router.push({ name: 'Trennid' });
      }

      console.warn(result);
    },
  },
});
</script>
