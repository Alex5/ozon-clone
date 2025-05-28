// src/mocks/handlers.ts
import { http, HttpResponse } from "msw";
import products from "./products.json";

type ProductType = (typeof products)[0];

export type CartItem = {
  product: ProductType;
  quantity: number;
};

const cart: CartItem[] = [];

export const handlers = [
  http.get(`/api/v1/products`, () => {
    return HttpResponse.json(products);
  }),

  http.get(`/api/v1/cart`, () => {
    return HttpResponse.json(cart);
  }),

  http.post(`/api/v1/cart`, async (req) => {
    const json = (await req.request.json()) as ProductType;

    const existingItem = cart.find((item) => item.product.id === json.id);

    if (existingItem) {
      existingItem.quantity += 1;
    } else {
      cart.push({ product: json, quantity: 1 });
    }

    return HttpResponse.json(cart, { status: 201 });
  }),

  http.delete(`/api/v1/cart`, async (req) => {
    const json = (await req.request.json()) as ProductType;

    const index = cart.findIndex((item) => item.product.id === json.id);

    if (index !== -1) {
      if (cart[index].quantity > 1) {
        cart[index].quantity -= 1;
      } else {
        cart.splice(index, 1);
      }
    }

    return HttpResponse.json(cart, { status: 200 });
  }),
];
