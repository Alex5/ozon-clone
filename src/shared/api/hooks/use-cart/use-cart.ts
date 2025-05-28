import useSWR from "swr";
import type { ProductType } from "../use-products/types";

export function useCart() {
  const { data, ...rest } = useSWR<ProductType[]>("cart");

  return {
    cart: data,
    ...rest,
  };
}
