import { http, HttpResponse, delay } from "msw";
import products from "./products.json";
import type { ProductType } from "./types";

export type CartItem = {
  product: ProductType;
  quantity: number;
};

const cart = new Map<ProductType["id"], CartItem>();

async function withRealisticBehavior<T>(response: () => T | Promise<T>) {
  const randomDelay = Math.floor(Math.random() * 700) + 100;

  const shouldFail = Math.random() < 0.03;

  await delay(randomDelay);

  if (shouldFail) {
    return HttpResponse.json(undefined, {
      status: 500,
      statusText: "server error, try later",
    });
  }

  return response();
}

export const handlers = [
  http.get(`/api/v1/products`, () =>
    withRealisticBehavior(() => HttpResponse.json(products))
  ),

  http.get(`/api/v1/cart`, () =>
    withRealisticBehavior(() => HttpResponse.json(Array.from(cart.values())))
  ),

  http.post(`/api/v1/cart`, async (req) =>
    withRealisticBehavior(async () => {
      const json = (await req.request.json()) as ProductType;

      const existing = cart.get(json.id);

      if (existing) {
        existing.quantity += 1;
      } else {
        cart.set(json.id, { product: json, quantity: 1 });
      }

      return HttpResponse.json(Array.from(cart.values()), { status: 201 });
    })
  ),

  http.delete<{ id: string }>(`/api/v1/cart/:id`, async ({ params }) =>
    withRealisticBehavior(() => {
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
    })
  ),
];
