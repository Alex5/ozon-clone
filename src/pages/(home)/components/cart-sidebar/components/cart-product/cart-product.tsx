import { Text } from "@shared/ui/text/Text";
import { Image } from "@shared/ui/image/image.component";

import { useCartActions } from "@shared/api/hooks/use-cart/use-cart-actions";
import { Div } from "@shared/ui/div/div";
import { ProductQuantitySelector } from "@shared/ui/product-quantity-select/product-quantity-select";
import type { CartItem } from "@shared/api/hooks/use-cart/use-cart.types";

type CartProductProps = {
  cartItem: CartItem;
};

export function CartProduct(props: CartProductProps) {
  const {
    cartItem: { product, quantity },
  } = props;

  const { longTitle, snippetImage, currentPriceSigned } = product;

  const { addToCart, removeFromCart } = useCartActions();

  return (
    <Div flex gap1 itemsCenter>
      <Image src={snippetImage.url} radius="lg" aspectRatio="1 / 1" size="lg" />
      <Div flex flexCol style={{ width: "100%" }}>
        <Text textStyle="xs" style={{ marginBottom: "6px" }}>
          {longTitle}
        </Text>
        <Text textStyle="sm" fontWeight="medium">
          {currentPriceSigned}
        </Text>
      </Div>
      <ProductQuantitySelector quantity={quantity}>
        <ProductQuantitySelector.Decrement
          onDecrement={() => removeFromCart(product)}
        />
        <ProductQuantitySelector.Quantity />
        <ProductQuantitySelector.Increment
          onIncrement={() => addToCart(product)}
        />
      </ProductQuantitySelector>
    </Div>
  );
}
