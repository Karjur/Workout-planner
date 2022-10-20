<template>
  <div class="text-right mb-3">    
<a class="btn btn-primary" align-right href = "newgroup" :to="{name: 'Lisa grupp'}" role="button">Lisa grupp</a>
</div>
<GroupList title="Gruppide nimekiri" />
</template>
  
  <script setup lang="ts">
  import GroupList from '@/components/GroupList.vue';
  </script>
 