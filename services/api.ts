import axios from "axios";

const config = useRuntimeConfig();

const api = axios.create({
    baseURL: config.public.apiBase as string, // Thay bằng URL API của bạn
    timeout: 10000, // Thời gian chờ request (ms)
    headers: {
        "Content-Type": "application/json",
    },
});

export default api;
