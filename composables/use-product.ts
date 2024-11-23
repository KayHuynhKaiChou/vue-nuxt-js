import type {FormSignIn} from "~/types/form";

export function useProduct() {
    const limit = ref(8)

    const handleGetListProduct = async () => {
        const {$getlistProductService} = useNuxtApp();
        const res : any = await $getlistProductService(limit.value);
        return res?.data
    }

    const handleGetProductById = async (id: string) => {
        const {$getProductByIdService} = useNuxtApp();
        const res : any = await $getProductByIdService(id);
        return res?.data
    }

    const handleLoadMore = () => limit.value = limit.value + 4

    return {
        limit,
        handleLoadMore,
        handleGetProductById,
        handleGetListProduct
    }
}