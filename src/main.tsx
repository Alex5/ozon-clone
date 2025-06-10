import "./app/app.style.css";

import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "./app/router";
import { SWRProvider } from "./app/swr-provider";

if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker
      .register("/react-lavka/cache-worker.js")
      .then((reg) => console.log("✅ Service Worker registered", reg))
      .catch((err) =>
        console.error("❌ Service Worker registration failed", err)
      );
  });
}

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
