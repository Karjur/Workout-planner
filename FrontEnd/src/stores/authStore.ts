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
        localStorage.setItem("user", JSON.stringify(auth.value));
    };

    const logout = () => {
        navbarPages.value = publicPaths; 
        auth.value = {
            isAuth: false,
            role: AppRole.CLIENT
        };
        localStorage.removeItem("user");
    };

    const hasPermision = (): boolean => {
        const localData = localStorage.getItem("user");
        if(!localData) return false;
        const localUser = JSON.parse(localData) as IAuth;
        auth.value = localUser;
        navbarPages.value = privatePaths;
        
        return true;
    };

    return {hasPermision, logout, login, auth, navbarPages};
});