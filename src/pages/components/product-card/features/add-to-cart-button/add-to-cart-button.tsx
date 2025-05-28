import { useCart } from "@shared/api/hooks/use-cart/use-cart";
import type { ProductType } from "@shared/api/hooks/use-products/types";
import { Button } from "@shared/ui/button/Button";
import { Text } from "@shared/ui/text/Text";

export function AddToCartButton({ product }: { product: ProductType }) {
  const { cart, mutate } = useCart();

  async function addToCart(product: ProductType) {
    const res = await fetch("/api/v1/cart", {
      method: "POST",
      body: JSON.stringify(product),
    });

    const cart = await res.json();

    await mutate(cart);
  }

  async function removeFromCart(product: ProductType) {
    const res = await fetch("/api/v1/cart", {
      method: "DELETE",
      body: JSON.stringify(product),
    });

    const cart = await res.json();

    await mutate(cart);
  }

  const cartCount = cart?.filter(
    (cartItem) => cartItem.id === product.id
  ).length;

  return (
    <div
      style={{
        display: "flex",
        gap: "10px",
        backgroundColor: "white",
        borderRadius: "28px",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {cartCount ? (
        <Button onClick={() => removeFromCart(product)} radius="xl" size="lg">
          <svg
            className="i1rjkic7"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill="currentColor"
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M3 12.5a.5.5 0 00.5.5h17a.5.5 0 00.5-.5v-1a.5.5 0 00-.5-.5h-17a.5.5 0 00-.5.5v1z"
            ></path>
          </svg>
        </Button>
      ) : null}
      {cartCount ? <Text fontWeight="medium">{cartCount}</Text> : null}
      <Button onClick={() => addToCart(product)} size="lg" radius="rounded">
        {/* @todo вынести в icons */}
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill="currentColor"
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M11.5 3a.5.5 0 00-.5.5V11H3.5a.5.5 0 00-.5.5v1a.5.5 0 00.5.5H11v7.5a.5.5 0 00.5.5h1a.5.5 0 00.5-.5V13h7.5a.5.5 0 00.5-.5v-1a.5.5 0 00-.5-.5H13V3.5a.5.5 0 00-.5-.5h-1z"
          ></path>
        </svg>
      </Button>
    </div>
  );
}
