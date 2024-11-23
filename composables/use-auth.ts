import type {FormSignIn} from "~/types/form";

// export type TypeUseAuth = ReturnType<typeof useAuth>;
//
// const keyUseAuth = Symbol() as InjectionKey<TypeUseAuth>
//
// export function provideUseClassInfo (useAuthParam : TypeUseAuth){
//     provide(keyUseAuth, useAuthParam);
// }
//
// export function useAuthContext (){
//     return inject(keyUseAuth) as TypeUseAuth
// }

export function useAuth() {
    const accessToken = useState<string>("accessToken", () => "");
    const formStateSignIn = reactive<FormSignIn>({
        email: '',
        password: ''
    });
    const handleSignIn = async (data: FormSignIn) => {
        const {$signInService} = useNuxtApp();
        return await $signInService(data);
    }

    return {
        formStateSignIn,
        accessToken,
        handleSignIn
    }
}