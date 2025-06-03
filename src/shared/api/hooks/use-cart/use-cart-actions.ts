import type { CartItem } from "@mocks/handlers";
import { fetcher } from "@shared/api/fetcher";
import { useCart } from "@shared/api/hooks/use-cart/use-cart";
import type { ProductType } from "@mocks/types";

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
  const { cart, mutate } = useCart();

  async function handleAddProductToCart(product: ProductType) {
    const cartItem: CartItem = {
      product,
      quantity: cart.get(product.id)?.quantity ?? 1,
    };

    const cartItems = [...(Array.from(cart.values()) ?? []), cartItem];

    try {
      await mutate(
        fetcher("cart", {
          method: "POST",
          body: JSON.stringify(product),
        }),
        {
          optimisticData: cartItems,
          rollbackOnError: true,
          populateCache: true,
          revalidate: false,
        }
      );
    } catch (error) {
      console.error(error);
    }
  }

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

    await mutate(cart, { populateCache: cart, revalidate: false });
  };

  return {
    addToCart: handleAddProductToCart,
    removeFromCart: (product: ProductType) =>
      handleCartAction("DELETE", product),
  };
}
