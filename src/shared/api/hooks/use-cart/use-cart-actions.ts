import type { CartItem } from "@mocks/handlers";
import { fetcher } from "@shared/api/fetcher";
import { useCart } from "@shared/api/hooks/use-cart/use-cart";
import type { ProductType } from "@mocks/types";

export function useCartActions() {
  const { cart, mutate } = useCart();

  async function handleAddProductToCart(product: ProductType) {
    const cartItem: CartItem = {
      product,
      quantity: (cart.get(product.id)?.quantity ?? 0) + 1,
    };

    async function addProduct(product: ProductType): Promise<CartItem[]> {
      return await fetcher("cart", {
        method: "POST",
        body: JSON.stringify(product),
      });
    }

    try {
      await mutate(addProduct(product), {
        optimisticData: [...(Array.from(cart.values()) ?? []), cartItem],
        rollbackOnError: true,
        populateCache: true,
        revalidate: false,
      });
    } catch (error) {
      console.error(error);
    }
  }

  async function handleRemoveProductFromCart(product: ProductType) {
    const cartItem = cart.get(product.id);

    let cartItems = Array.from(cart.values()) ?? [];

    if (cartItem) {
      cartItems = cartItems.map((cartItem) =>
        cartItem.product.id === product.id
          ? { ...cartItem, quantity: cartItem.quantity - 1 }
          : cartItem
      );
    }

    try {
      await mutate(
        fetcher(`cart/${product.id}`, {
          method: "DELETE",
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

  return {
    addToCart: handleAddProductToCart,
    removeFromCart: handleRemoveProductFromCart,
  };
}
