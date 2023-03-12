import Api from "./api";

const ItemService = {
    getItems: async () => {
        const apiData = await Api.sendRequest("/posts");
        return apiData;
    },
};

export default ItemService;
