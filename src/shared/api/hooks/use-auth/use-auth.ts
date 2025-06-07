import { fetcher } from "@shared/api/fetcher";
import useSWR from "swr";

export function useAuth() {
  const { data, mutate, ...rest } = useSWR<
    { username: string },
    unknown,
    string
  >("me", (key) => fetcher(key, { credentials: "include" }));

  async function login({ username }: { username: string }) {
    const res = await mutate(
      fetcher("login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          username,
        }),
        credentials: "include",
      }),
      {
        optimisticData: { username },
        populateCache: true,
        revalidate: false,
        rollbackOnError: false,
      }
    );

    return res;
  }

  async function logout() {
    await mutate(undefined, { revalidate: false });

    await fetcher("logout", {
      method: "PATCH",
      credentials: "include",
    });

    await mutate();
  }

  return {
    me: data,
    login,
    logout,
    ...rest,
  };
}
