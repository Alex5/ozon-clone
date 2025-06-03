import { http, HttpResponse } from "msw";
import products from "./products.json";
import type { ProductType } from "./types";

export type CartItem = {
  product: ProductType;
  quantity: number;
};

const cart = new Map<ProductType["id"], CartItem>();

export const handlers = [
  http.get(`/api/v1/products`, () => {
    return HttpResponse.json(products);
  }),

  http.get(`/api/v1/cart`, () => {
    return HttpResponse.json(Array.from(cart.values()));
  }),

  http.post(`/api/v1/cart`, async (req) => {
    const json = (await req.request.json()) as ProductType;

    const existing = cart.get(json.id);

    if (existing) {
      existing.quantity += 1;
    } else {
      cart.set(json.id, { product: json, quantity: 1 });
    }

    return HttpResponse.json(Array.from(cart.values()), { status: 201 });
  }),

  http.delete<{ id: string }>(`/api/v1/cart/:id`, async ({ params }) => {
    const { id } = params;

    const existing = cart.get(id);

    if (existing) {
      if (existing.quantity > 1) {
        existing.quantity -= 1;
      } else {
        cart.delete(id);
      }
    }

    return HttpResponse.json(Array.from(cart.values()), { status: 200 });
  }),
];
