import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "./app/router";
import { SWRProvider } from "./app/swr-provider";

const root = document.getElementById("root")!;

root.style.setProperty("background-color", "#f5f7fa");

createRoot(root).render(
  <StrictMode>
    <SWRProvider>
      <RouterProvider />
    </SWRProvider>
  </StrictMode>
);
