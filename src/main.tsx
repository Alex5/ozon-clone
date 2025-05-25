import "./app/app.style.css";

import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "./app/router";
import { SWRProvider } from "./app/swr-provider";
import { addLoaderToElement, prepareRoot } from "@shared/services/dom.service";
import { enableMocking } from "@shared/services/mock.service";

prepareRoot().then((root) => {
  const loader = addLoaderToElement(root);

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
});
