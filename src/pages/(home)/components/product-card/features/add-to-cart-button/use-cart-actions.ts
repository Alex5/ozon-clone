import { useCart } from "@shared/api/hooks/use-cart/use-cart";
import type { ProductType } from "@shared/api/hooks/use-products/types";

export function useCartActions() {
  const { mutate } = useCart();

  const updateCart = async (
    method: "POST" | "DELETE",
    product: ProductType
  ) => {
    const res = await fetch(
      `/api/v1/cart${method === "DELETE" ? "/" + product.id : ""}`,
      {
        method,
        body: JSON.stringify(product),
      }
    );

    const cart = await res.json();

    await mutate(cart);
  };

  const addToCart = (product: ProductType) => updateCart("POST", product);
  const removeFromCart = (product: ProductType) =>
    updateCart("DELETE", product);

  return { addToCart, removeFromCart };
}
