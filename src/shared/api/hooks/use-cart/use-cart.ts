import useSWR from "swr";
import type { CartItem } from "@mocks/handlers";

export type CartType = Record<string, CartItem>;

const USER_ID = "samurai";

export function useCart() {
  const { data, ...rest } = useSWR<CartType>(`cart/${USER_ID}`);

  return {
    cart: data,
    data,
    ...rest,
  };
}
