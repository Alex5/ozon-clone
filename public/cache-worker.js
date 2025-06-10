const CACHE_NAME = "react-lavka-cache-v1";

const PRECACHE_URLS = [
  "/",
  "/react-lavka/",
  "/react-lavka/index.html",
  "/react-lavka/main.js",
  "/react-lavka/favicon.svg",
];

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(PRECACHE_URLS))
  );
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    (async () => {
      const keys = await caches.keys();

      await Promise.all(
        keys
          .filter((key) => key !== CACHE_NAME)
          .map((key) => caches.delete(key))
      );

      await self.clients.claim();
    })()
  );
});

const staleWhileRevalidate = async (request) => {
  const cache = await caches.open(CACHE_NAME);

  const cachedResponse = await cache.match(request);

  const fetchPromise = fetch(request)
    .then((networkResponse) => {
      if (networkResponse && networkResponse.ok) {
        cache.put(request, networkResponse.clone());
      }

      return networkResponse;
    })
    .catch(() => {
      return cachedResponse || Response.error();
    });

  return cachedResponse || fetchPromise;
};

self.addEventListener("fetch", (event) => {
  const { request } = event;

  if (request.method === "GET") {
    event.respondWith(staleWhileRevalidate(request));
  }
});
