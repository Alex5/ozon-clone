import useSWR from "swr";
import type { CartItem } from "../../../../mocks/handlers";

export function useCart() {
  const { data, ...rest } = useSWR<CartItem[]>("cart");

  return {
    cart: data,
    ...rest,
  };
}
