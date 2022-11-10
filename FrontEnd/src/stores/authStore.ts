import { IPageData } from "@/router";
import { privatePaths, publicPaths } from "@/router/access";
import { defineStore } from "pinia";
import { ref } from "vue";

export enum AppRole {
    MASTER = "MASTER",
    CLIENT = "CLIENT"
}

export interface IAuth {
    isAuth: boolean;
    role: AppRole;
}

export const useAuthStore = defineStore('authStore', () => {
    const navbarPages = ref<IPageData[]>(publicPaths); 

    const auth = ref<IAuth>({
        isAuth: false,
        role: AppRole.CLIENT
    });
    return {auth, navbarPages};
});