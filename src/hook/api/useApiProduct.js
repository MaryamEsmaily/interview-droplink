import { useQuery } from "@tanstack/react-query";
import * as apiProduct from "api/apiProducts";

const useGetProducts = () => {
  return useQuery(["getProducts"], apiProduct.getProducts);
};
const useGetProductDetails = (params) => {
  return useQuery(["getProductDetails", params], apiProduct.getProductDetails, {
    enabled: !!params,
  });
};

export { useGetProducts, useGetProductDetails };
