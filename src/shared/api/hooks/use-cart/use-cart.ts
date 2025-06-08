import useSWR, { useSWRConfig, type MutatorOptions } from "swr";
import { fetcher } from "@shared/api/fetcher";
import type { CartType } from "./use-cart.types";
import { useAuth, type YandexUserInfo } from "../use-auth/use-auth";

export function useCart() {
  const { me } = useAuth();

  const { cache } = useSWRConfig();

  const key = ["cart", me] as const;

  const { data, mutate, ...rest } = useSWR<
    CartType,
    unknown,
    readonly ["cart", YandexUserInfo | undefined]
  >(key, ([key]) =>
    me
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
    if (!me) {
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
