// plugins/auth.js
import type {FormSignIn} from "~/types/form";

// plugins/auth-service.ts
export default defineNuxtPlugin((nuxtApp) => {
    return {
        provide: {
            signInService: (data: FormSignIn) => {
                const config = useRuntimeConfig();
                const apiUrl = `${config.public.apiBase}/user/sign-in`;

                return $fetch(apiUrl, {
                    method: 'POST',
                    body: data,
                });
            },
        },
    };
});
