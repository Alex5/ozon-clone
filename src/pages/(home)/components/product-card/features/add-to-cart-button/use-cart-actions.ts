import { useCart } from "@shared/api/hooks/use-cart/use-cart";
import type { ProductType } from "@shared/api/hooks/use-products/types";

type CartMethod = "POST" | "DELETE";

type CartCommand = {
  method: CartMethod;
  getUrl: (product: ProductType) => string;
  getBody?: (product: ProductType) => BodyInit | null;
};

const cartCommands: Record<CartMethod, CartCommand> = {
  POST: {
    method: "POST",
    getUrl: () => `/api/v1/cart`,
    getBody: (product) => JSON.stringify(product),
  },
  DELETE: {
    method: "DELETE",
    getUrl: (product) => `/api/v1/cart/${product.id}`,
  },
};

export function useCartActions() {
  const { mutate } = useCart();

  const handleCartAction = async (
    method: CartMethod,
    product: ProductType
  ): Promise<void> => {
    const { getUrl, getBody } = cartCommands[method];

    const res = await fetch(getUrl(product), {
      method,
      headers: {
        "Content-Type": "application/json",
      },
      ...(getBody ? { body: getBody(product) } : {}),
    });

    if (!res.ok) {
      console.error(`Cart ${method} failed`, await res.text());
      return;
    }

    const cart = await res.json();
    await mutate(cart);
  };

  return {
    addToCart: (product: ProductType) => handleCartAction("POST", product),
    removeFromCart: (product: ProductType) => handleCartAction("DELETE", product),
  };
}
