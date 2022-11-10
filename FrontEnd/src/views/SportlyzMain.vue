<template>
    <div class="row bg-gray-50">
        <div class="col bg-gray-50">
            <SportlyzForm title="Avaleht" />
        </div>
        <div class="col">
            <AuthForm />
        </div>
    </div>
</template>

<script setup lang="ts">
    import SportlyzForm from '@/components/SportlyzForm.vue';
    import AuthForm from '@/components/AuthForm.vue';
</script>