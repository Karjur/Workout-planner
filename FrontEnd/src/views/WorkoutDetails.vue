<template>
   <div class="bg-gray-50 py-12 px-4 sm:px-6 lg:px-8 text-dark-300">
    <div class="bg-gray-50">
      <button class="btn btn-danger" @click="back">Back</button>
      <h1 class="font-bold text-center">
          Page for workoud details {{ id }}
      </h1>
  </div>
  </div>
</template>
  
<script lang="ts">
import { defineComponent } from 'vue';
import { useRoute } from 'vue-router';
  export default defineComponent({
    setup() {
      const params = useRoute().params;
      
      return {id: params["id"]};
    },
    methods: {
      back() {
        this.$router.push("/trainings");
      }
    }
  });
</script>
  