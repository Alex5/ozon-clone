import { useCartActions } from "@shared/api/hooks/use-cart/use-cart-actions";
import type { CartItem } from "@shared/api/hooks/use-cart/use-cart.types";
import { Div } from "@shared/ui/div/div";
import { Image } from "@shared/ui/image/image.component";
import { ProductQuantitySelector } from "@shared/ui/product-quantity-select/product-quantity-select";
import { Text } from "@shared/ui/text/Text";

export function CartProductCard({ cartItem }: { cartItem: CartItem }) {
  const { product, quantity } = cartItem;

  const { addToCart, removeFromCart } = useCartActions();

  return (
    <Div key={product.id} flex gap2>
      <Image
        src={product.snippetImage.url}
        aspectRatio="1 / 1"
        size="lg"
        radius="lg"
      />
      <Text fontWeight="normal" textStyle="md" style={{ flex: 1 }}>
        {product.longTitle}
      </Text>
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
