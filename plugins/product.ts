// plugins/product-service.ts
export default defineNuxtPlugin((nuxtApp) => {
    return {
        provide: {
            getlistProductService: (limit: number) => {
                const config = useRuntimeConfig();
                const apiUrl = `${config.public.apiBase}/product/all-products`;

                return $fetch(apiUrl, {
                    method: 'GET',
                    params: {
                        limit
                    }
                });
            },
            getProductByIdService: (id: string) => {
                const config = useRuntimeConfig();
                const apiUrl = `${config.public.apiBase}/product/details-product/${id}`;
                const accessToken = useState<string | null>('accessToken').value;

                return $fetch(apiUrl, {
                    method: 'GET'
                });
            },
        },
    };
});
