<template>
     <div class="bg-gray-50 py-12 px-4 sm:px-6 lg:px-8 text-dark-300">
         <div class="min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
            <h1 class="font-bold text-center">{{isReg ? "Registration" : "Authorization"}}</h1>
        </div>
        <div class="container" style="width: 100%;">
            <div class="text-center mb-4" v-if="isLoading">
                <div class="spinner-border text-primary">
                    <span class="visually-hidden">Loading...</span>
                </div>
            </div>
            <div class="d-flex mt-1 mb-3">
                <div class="w-50 text-center">
                    <button @click="loginClient" class="btn btn-success">
                        Client
                    </button>
                </div>
                <div class="w-50 text-center">
                    <button @click="loginMaster " class="btn btn-success">
                        Master
                    </button>
                </div>
            </div>
            <div class="col-9" v-if="isReg">
                <div class="form-check form-switch">
                    <input class="form-check-input" type="checkbox" :checked="regAsClient" @change="() => regAsClient = !regAsClient">
                    <label class="form-check-label" for="flexSwitchCheckDefault">Registrate as {{!regAsClient ? "Client" : "Master"}}</label>
                </div>
            </div>
            <div class="mb-3 row">
                <label for="staticEmail" class="col-sm-2 col-form-label">Email</label>
                <div class="col-sm-10">
                    <input type="text" v-model="authData.login" class="form-control" placeholder="E-mail adress">
                </div>
            </div>
            <div class="mb-3 row">
                <label for="inputPassword" class="col-sm-2 col-form-label">Password</label>
                <div class="col-sm-10">
                <input type="password" v-model="authData.password"  class="form-control" placeholder="Your password">
                </div>
            </div>
            <div class="mb-3 row">
                <div class="col-9">
                    <div class="form-check form-switch">
                        <input class="form-check-input" type="checkbox" :checked="isReg" @change="() => isReg = !isReg">
                        <label class="form-check-label" for="flexSwitchCheckDefault">{{!isReg ? "Registration" : "Login"}}</label>
                    </div>
                </div>
                <div class="col-3 text-end">
                    <button @click="submitForm" :disabled="!isAvailableSubmit" class="btn btn-success">{{isReg ? "Registrate" : "Login in"}}</button>
                </div>
            </div>
        </div>
     </div>
</template>

<script lang="ts">
    import { AppRole, useAuthStore } from '@/stores/authStore';
import { defineComponent, ref } from 'vue';

    export default defineComponent({
        data: () => ({
            isReg: false,
            regAsClient: false
        }),
        setup() {
            const isLoading = ref<boolean>(false);
            const {login} = useAuthStore();
            const authData = ref<{login: string; password: string}>({
                login: "",
                password: "",
            });
            return {isLoading, authData, login};
        },
        methods: {
            submitForm() {
                console.log(this.authData);
            },
            loginClient() {
                this.login(AppRole.CLIENT);
                this.$router.push("/profile");
            },
            loginMaster() {
                this.login(AppRole.MASTER);
                this.$router.push("/profile");
            }
        },
        computed: {
            isAvailableSubmit() {
                return this.authData.login !== "" && this.authData.password !== ""
            }
        },
    });
</script>