import type { ReactNode } from "react";
import { SWRConfig } from "swr";
import { fetcher } from "../shared/api/fetcher";

type SWRProviderProps = {
  children: ReactNode;
};





export function SWRProvider({ children }: SWRProviderProps) {
  return (
    <SWRConfig value={{ fetcher}}>
      {children}
    </SWRConfig>
  );
}
