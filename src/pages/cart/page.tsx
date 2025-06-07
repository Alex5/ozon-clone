import { useCart } from "@shared/api/hooks/use-cart/use-cart";
import { calculateTotal } from "@shared/services/amount.service";
import { Div } from "@shared/ui/div/div";
import { Image } from "@shared/ui/image/image.component";
import { ProductQuantitySelector } from "@shared/ui/product-quantity-select/product-quantity-select";
import { Text } from "@shared/ui/text/Text";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router";

export function CartPage() {
  const { cart } = useCart();

  const cartItems = Object.values(cart ?? {});

  const total = calculateTotal(cart);

  return (
    <Div gap4 flex flexCol style={{ maxWidth: "960px", margin: "0 auto" }}>
      <Link to="/">
        <Div flex gap1>
          <ArrowLeft />
          <Text>Вернуться в каталог</Text>
        </Div>
      </Link>
      <Text textStyle="lg">Корзина</Text>
      <Div flex gap2>
        <Div flex flexCol gap2 style={{ width: "100%" }}>
          {cartItems.map(({ product, quantity }) => (
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
                <ProductQuantitySelector.Decrement />
                <ProductQuantitySelector.Quantity />
                <ProductQuantitySelector.Increment />
              </ProductQuantitySelector>
            </Div>
          ))}
        </Div>
        <Div flex flexCol style={{ width: "328px" }} gap2>
          <Text>Итого</Text>
          <Text>К оплате: {total}</Text>
        </Div>
      </Div>
    </Div>
  );
}
