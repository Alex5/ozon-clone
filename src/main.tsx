import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "./app/router";
import { SWRProvider } from "./app/swr-provider";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <SWRProvider>
      <RouterProvider />
    </SWRProvider>
  </StrictMode>
);
