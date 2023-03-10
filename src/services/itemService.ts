import Api from "./api";

const ItemService = {
  getItems: async (params?: object) => {
    const apiData = await Api.sendRequest("/posts", params);

    console.log(apiData.message);
  },
};

export default ItemService;
