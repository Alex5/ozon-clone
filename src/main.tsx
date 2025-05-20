import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "./app/router";
import { SWRProvider } from "./app/swr-provider";

const root = document.getElementById("root")!;

// Стиль фона
root.style.setProperty("background-color", "#f5f7fa");

// Лоадер
const loader = document.createElement("div");
loader.innerHTML = `<div class="spinner"></div>`;
loader.style.cssText = `
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;
root.appendChild(loader);

// Добавляем стили спиннера
const style = document.createElement("style");
style.innerHTML = `
.spinner {
  border: 6px solid #e0e0e0;
  border-top: 6px solid #000000;
  border-radius: 50%;
  width: 50px;
  height: 50px;
  animation: spin 1s linear infinite;
}
@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}`;
document.head.appendChild(style);

async function enableMocking() {
  const { worker } = await import("./mocks/browser");

  return worker.start({
    serviceWorker: {
      url: `${import.meta.env.BASE_URL}mockServiceWorker.js`,
    },
  });
}

enableMocking().then(() => {
  root.removeChild(loader);

  createRoot(root).render(
    <StrictMode>
      <SWRProvider>
        <RouterProvider />
      </SWRProvider>
    </StrictMode>
  );
});
