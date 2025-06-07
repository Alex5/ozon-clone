import useSWR, { useSWRConfig, type MutatorOptions } from "swr";
import type { CartItem } from "@mocks/handlers";
import { fetcher } from "@shared/api/fetcher";

export type CartType = Record<string, CartItem>;

const isUserAuthorized = false;

export function useCart() {
  const { cache } = useSWRConfig();

  const { data, mutate, ...rest } = useSWR<CartType, unknown, string>(
    "cart",
    (key) =>
      isUserAuthorized ? fetcher(key) : Promise.resolve(cache.get("cart")?.data)
  );

  const customMutation =({
    fetcher,
    options,
  }: {
    fetcher: () => Promise<CartType> | CartType;
    options: MutatorOptions;
  }) => {
    if (!isUserAuthorized) {
      return mutate(options.optimisticData, options);
    } else {
      return mutate(fetcher, options);
    }
  };

  return {
    cart: data,
    data,
    mutate: customMutation,
    ...rest,
  };
}
