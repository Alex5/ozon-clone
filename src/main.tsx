import "./app/app.style.css";

import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "./app/router";
import { SWRProvider } from "./app/swr-provider";

const root = document.getElementById("root")!;

root.style.setProperty(
  "background-color",
  "var(--react-lavka-color-background)"
);

createRoot(root).render(
  <StrictMode>
    <SWRProvider>
      <RouterProvider />
    </SWRProvider>
  </StrictMode>
);
