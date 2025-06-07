import useSWR, { useSWRConfig, type MutatorOptions } from "swr";
import { fetcher } from "@shared/api/fetcher";
import type { CartType } from "./use-cart.types";
import { useAuth } from "../use-auth/use-auth";

export function useCart() {
  const { me } = useAuth();

  const { cache } = useSWRConfig();

  const { data, mutate, ...rest } = useSWR<CartType, unknown, string | null>(
    `cart?username=${me?.username}`,
    (key) =>
      me?.username
        ? fetcher(key, {
            credentials: "include",
          })
        : Promise.resolve(cache.get("cart")?.data)
  );

  const customMutation = ({
    fetcher,
    options,
  }: {
    fetcher: () => Promise<CartType> | CartType;
    options: MutatorOptions;
  }) => {
    if (!me?.username) {
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
