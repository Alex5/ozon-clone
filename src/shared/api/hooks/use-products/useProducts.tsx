import type { ProductType } from "./types";
import useSWRImmutable from "swr/immutable";

export function useProducts() {
  const { data, ...rest } = useSWRImmutable<ProductType[]>("products");

  return {
    products: data,
    ...rest,
  };
}
