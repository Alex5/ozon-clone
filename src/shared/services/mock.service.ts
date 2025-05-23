export async function enableMocking() {
  const { worker } = await import("../../mocks/browser");

  const url = `${import.meta.env.BASE_URL}mockServiceWorker.js`;

  return worker.start({
    serviceWorker: {
      url: url,
    },
  });
}
