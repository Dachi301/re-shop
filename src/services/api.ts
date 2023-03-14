import { axiosInstance } from "@/config";

export interface apiResponse {
    error: boolean;
    message: string | object;
}

type requestMethods = "GET" | "POST" | "PUT" | "DELETE";

const Api = {
    sendRequest: async (
        endpoint: string,
        params?: object,
        method: requestMethods = "GET",
        data: object = {},
        headers: object = {}
    ) => {
        const response: apiResponse = {
            error: false,
            message: "",
        };

        try {
            const apiResponse = await axiosInstance({
                url: encodeURI(endpoint),
                method,
                data,
                params,
                headers,
            });

            response.error = false;
            response.message = apiResponse.data;
        } catch (e: any) {
            response.error = true;
            // response.data = e.response?.data ?? e.message ?? e;
        }
        return response;
    },
};

export default Api;
