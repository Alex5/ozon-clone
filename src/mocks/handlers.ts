// src/mocks/handlers.js
import { http, HttpResponse } from "msw";
import products from "./products.json";

export const handlers = [
  http.get(`/api/v1/products`, () => {
    return HttpResponse.json(products);
  }),
];
