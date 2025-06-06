import useSWR from "swr";
import type { CartItem } from "@mocks/handlers";

export type CartType = Record<string, CartItem>;

export function useCart() {
  const { data, ...rest } = useSWR<CartType>("cart");

  return {
    cart: data,
    data,
    ...rest,
  };
}
