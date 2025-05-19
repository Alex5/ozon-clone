import useSWR from "swr";
import type { ProductType } from "./types";

export function useProducts() {
  const { data, ...rest } = useSWR<ProductType[]>("products");

  return {
    products: data,
    ...rest,
  };
}
