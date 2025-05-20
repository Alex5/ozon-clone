export function fetcher(input: RequestInfo | URL, init?: RequestInit) {
  return fetch("/api/v1/".concat(input.toString()), init).then((res) =>
    res.json()
  );
}
