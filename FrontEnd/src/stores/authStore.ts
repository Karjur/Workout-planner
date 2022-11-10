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

    const login = (role: AppRole) => {
        navbarPages.value = privatePaths;
        auth.value.isAuth = true;
        auth.value.role = role;
        

    };

    return {login, auth, navbarPages};
});