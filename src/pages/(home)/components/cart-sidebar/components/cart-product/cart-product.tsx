import { Text } from "@shared/ui/text/Text";
import type { CartItem } from "@mocks/handlers";
import { Image } from "@shared/ui/image/image.component";

import { useCartActions } from "@shared/api/hooks/use-cart/use-cart-actions";
import { Div } from "@shared/ui/div/div";
import { ProductQuantitySelector } from "@shared/ui/product-quantity-select/product-quantity-select";

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
    <Div flex gap4 itemsCenter>
      <Image
        src={snippetImage.url}
        radius="lg"
        aspectRatio="1 / 1"
        style={{ flex: 1 }}
        size="md"
      />
      <Div flex flexCol gap2>
        <Text textStyle="xs">{longTitle}</Text>
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
