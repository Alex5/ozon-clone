if (!import.meta.env.API_URL) throw new Error("no import.meta.env.API_URL");

const API_URL = import.meta.env.API_URL;

export function fetcher(input: RequestInfo | URL, init?: RequestInit) {
  return fetch(API_URL.concat(input.toString()), init).then((res) =>
    res.json()
  );
}
