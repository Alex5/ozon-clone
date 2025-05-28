import { worker } from "../../mocks/browser";

export async function enableMocking() {
  const url = `${import.meta.env.BASE_URL}mockServiceWorker.js`;

  return worker.start({
    serviceWorker: {
      url: url,
    },
  });
}
