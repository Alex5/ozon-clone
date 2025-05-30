import { useCart } from "@shared/api/hooks/use-cart/use-cart";
import type { ProductType } from "@shared/api/hooks/use-products/types";
import { Button } from "@shared/ui/button/button";
import { Text } from "@shared/ui/text/Text";
import { useCartActions } from "./use-cart-actions";
import { Div } from "@shared/ui/div/div";

export function AddToCartButton({ product }: { product: ProductType }) {
  const { cart } = useCart();

  const { addToCart, removeFromCart } = useCartActions();

  const { quantity } = cart.get(product.id) ?? {};

  return (
    <Div flex justify-center align-center gap-2>
      {quantity ? (
        <Button
          onClick={() => removeFromCart(product)}
          radius="xl"
          size="lg"
          shadow="none"
          colorPallete="gray"
        >
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
      {quantity ? <Text fontWeight="medium">{quantity}</Text> : null}
      <Button
        onClick={() => addToCart(product)}
        size="lg"
        radius="rounded"
        shadow="none"
        colorPallete="gray"
      >
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
    </Div>
  );
}
