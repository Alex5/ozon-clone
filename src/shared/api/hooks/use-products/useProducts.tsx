import useSWRImmutable from "swr/immutable";
import type { ProductType } from "./use-products.types";

export function useProducts() {
  const { data, ...rest } = useSWRImmutable<ProductType[]>("products");

  return {
    products: data,
    ...rest,
  };
}
