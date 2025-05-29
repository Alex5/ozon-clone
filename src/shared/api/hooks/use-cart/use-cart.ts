import useSWR from "swr";
import type { CartItem } from "../../../../mocks/handlers";

export function useCart() {
  const { data, ...rest } = useSWR<CartItem[]>("cart");

  const cart = new Map<CartItem["product"]["id"], CartItem>();

  data?.forEach((cartItem) => {
    cart.set(cartItem.product.id, cartItem);
  });

  return {
    cart,
    ...rest,
  };
}
