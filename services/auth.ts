import api from "~/services/api";
import type {FormSignIn} from "~/types/form";

export const signInService = async (data: FormSignIn) => {
    const res = await api.post(`/user/sign-in`, data , {withCredentials:true})
    return res.data
}