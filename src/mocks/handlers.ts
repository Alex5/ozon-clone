// src/mocks/handlers.js
import { http, HttpResponse } from "msw";

import products from "./products.json";

type ProductType = (typeof products)[0];

let cart: ProductType[] = [];

export const handlers = [
  http.get(`/api/v1/products`, () => {
    return HttpResponse.json(products);
  }),
  http.get(`/api/v1/cart`, () => {
    return HttpResponse.json(cart);
  }),
  http.post(`/api/v1/cart`, async (req) => {
    const json = (await req.request.json()) as ProductType;

    cart.push(json);

    return HttpResponse.json(cart, { status: 201 });
  }),
  http.delete(`/api/v1/cart`, async (req) => {
    const json = (await req.request.json()) as ProductType;

    cart = cart.filter((cartItem) => cartItem.id !== json.id);

    return HttpResponse.json(cart, { status: 201 });
  }),
];
