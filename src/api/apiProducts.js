import { instance } from "config/instanceAxios";
import { BASE_URL_ADDRESS } from "constant/baseURL";

const getProducts = async () => {
  const { data } = await instance.get(
    BASE_URL_ADDRESS + "collection/public/testunstoppable"
  );
  return data;
};

const getProductDetails = async ({ queryKey }) => {
  const id = queryKey?.[1];
  const { data } = await instance.get(
    BASE_URL_ADDRESS + "product/public/" + id
  );
  return data;
};

export { getProducts, getProductDetails };
