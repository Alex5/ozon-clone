const API_URL = import.meta.env.VITE_API_URL;

if (!API_URL) throw new Error("API_URL must be provided");

export function fetcher(input: RequestInfo | URL, init?: RequestInit) {
  return fetch(`${API_URL}/api/v1/`.concat(input.toString()), init).then(
    (res) => res.json()
  );
}
