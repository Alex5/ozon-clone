import useSWR, { useSWRConfig, type MutatorOptions } from "swr";
import { fetcher } from "@shared/api/fetcher";
import type { CartType } from "./use-cart.types";
import { useAuth } from "../use-auth/use-auth";

export function useCart() {
  const { me } = useAuth();

  const { cache } = useSWRConfig();

  const key = ["cart", me?.username] as const;

  const { data, mutate, ...rest } = useSWR<
    CartType,
    unknown,
    readonly ["cart", string | undefined]
  >(key, ([key]) =>
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
