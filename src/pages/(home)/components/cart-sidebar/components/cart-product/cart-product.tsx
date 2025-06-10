import { Text } from "@shared/ui/text/Text";
import { Image } from "@shared/ui/image/image.component";

import { useCartActions } from "@shared/api/hooks/use-cart/use-cart-actions";
import { Div } from "@shared/ui/div/div";
import { ProductQuantitySelector } from "@shared/ui/product-quantity-select/product-quantity-select";
import type { CartItem } from "@shared/api/hooks/use-cart/use-cart.types";
import { Link } from "react-router";

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
    <Div flex gap1 itemsCenter width-full>
      <Link to={`/cart/${product.id}`} style={{ all: "inherit" }}>
        <Image
          src={snippetImage.url}
          radius="md"
          aspectRatio="1 / 1"
          size="md"
        />
        <Div flex flexCol width-full style={{ gap: 4 }}>
          <Text textStyle="sm" fontWeight="light" lineClamp2>
            {longTitle}
          </Text>
          <Text textStyle="sm" fontWeight="medium">
            {currentPriceSigned}
          </Text>
        </Div>
      </Link>

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
