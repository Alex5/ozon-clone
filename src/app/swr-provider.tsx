import type { ReactNode } from "react";
import { SWRConfig } from "swr";
import { fetcher } from "../shared/api/fetcher";

type SWRProviderProps = {
  children: ReactNode;
};

export function SWRProvider({ children }: SWRProviderProps) {
  return (
    <SWRConfig
      value={{
        refreshInterval: 3000,
        fetcher: (resource, init) => fetcher(resource, init),
      }}
    >
      {children}
    </SWRConfig>
  );
}
