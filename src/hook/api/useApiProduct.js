import { useQuery } from "@tanstack/react-query";
import * as apiProduct from "api/apiProducts";

const useGetProducts = () => {
  return useQuery(["getProducts"], apiProduct.getProducts);
};

export { useGetProducts };
