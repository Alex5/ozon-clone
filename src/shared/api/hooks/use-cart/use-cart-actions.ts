import { fetcher } from "@shared/api/fetcher";
import { useCart, type CartType } from "@shared/api/hooks/use-cart/use-cart";
import type { ProductType } from "@mocks/types";

export function useCartActions() {
  const { cart, mutate } = useCart();

  async function handleAddProductToCart(product: ProductType) {
    const cartItem = {
      product,
      quantity: (cart?.[product.id]?.quantity ?? 0) + 1,
    };

    async function addProduct(product: ProductType): Promise<CartType> {
      return await fetcher("cart", {
        method: "POST",
        body: JSON.stringify(product),
      });
    }

    const optimisticData = { ...cart, [product.id]: cartItem };

    try {
      await mutate(addProduct(product), {
        optimisticData: optimisticData,
        rollbackOnError: true,
        populateCache: true,
        revalidate: false,
      });
    } catch (error) {
      console.error(error);
    }
  }

  async function handleRemoveProductFromCart(product: ProductType) {
    const cartItem = cart?.[product.id];

    const newCart = { ...cart };

    if (cartItem) {
      if (cartItem.quantity === 1) {
        delete newCart[cartItem.product.id];
      } else {
        newCart[cartItem.product.id] = {
          ...cartItem,
          quantity: cartItem.quantity - 1,
        };
      }
    }

    try {
      await mutate(
        fetcher(`cart/${product.id}`, {
          method: "DELETE",
        }),
        {
          optimisticData: newCart,
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
