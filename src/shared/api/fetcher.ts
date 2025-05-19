// if (!import.meta.env.VITE_API_URL)
//   throw new Error("no import.meta.env.API_URL");

// const API_URL = import.meta.env.VITE_API_URL;

export function fetcher(input: RequestInfo | URL, init?: RequestInit) {
  return fetch("/api/v1/".concat(input.toString()), init).then((res) =>
    res.json()
  );
}
