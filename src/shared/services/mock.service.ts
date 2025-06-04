import { worker } from "../../mocks/browser";

let hasStarted = false;

export async function enableMocking() {
  const url = `${import.meta.env.BASE_URL}mockServiceWorker.js`;

  if (hasStarted) return;

  hasStarted = true;

  document.addEventListener("visibilitychange", () => {
    if (document.visibilityState === "visible") {
      navigator.serviceWorker.getRegistration().then((reg) => {
        if (reg) reg.update();
      });

      worker.start({ quiet: true });
    }
  });

  return worker.start({
    serviceWorker: {
      url: url,
    },
  });
}
