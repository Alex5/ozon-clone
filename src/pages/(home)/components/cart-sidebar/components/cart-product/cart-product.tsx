import { Text } from "@shared/ui/text/Text";
import type { CartItem } from "../../../../../../mocks/handlers";
import { Image } from "@shared/ui/image/image.component";
import { getImageUrl } from "@shared/services/dom.service";

import { Button } from "@shared/ui/button/button";
import { useCartActions } from "@shared/api/hooks/use-cart/use-cart-actions";
import { Div } from "@shared/ui/div/div";

type CartProductProps = {
  cartItem: CartItem;
};

export function CartProduct(props: CartProductProps) {
  const {
    cartItem: { product, quantity },
  } = props;

  const { longTitle, snippetImage, currentPriceSigned } = product;

  const imageSrc = getImageUrl(snippetImage.url, 600);

  const { addToCart, removeFromCart } = useCartActions();

  return (
    <Div flex gap4 itemsCenter>
      <Image src={imageSrc} radius="lg" h4 />
      <Div flex flexCol gap2>
        <Text textStyle="xs">{longTitle}</Text>
        <Text textStyle="sm" fontWeight="medium">
          {currentPriceSigned}
        </Text>
      </Div>
      <div
        style={{
          display: "flex",
          width: "100px",
          alignItems: "center",
          gap: "4px",
          backgroundColor: "rgba(101,92,78,.1)",
          borderRadius: "12px",
          height: "32px",
        }}
      >
        <Button
          onClick={() => removeFromCart(product)}
          shadow="none"
          style={{
            backgroundColor: "transparent",
            borderRadius: "inherit",
            height: "inherit",
          }}
        >
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill="currentColor"
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M6 12a1 1 0 001 1h10a1 1 0 100-2H7a1 1 0 00-1 1z"
            ></path>
          </svg>
        </Button>
        <Text textStyle="sm" fontWeight="medium">
          {quantity}
        </Text>
        <Button
          onClick={() => addToCart(product)}
          shadow="none"
          style={{
            backgroundColor: "transparent",
            borderRadius: "inherit",
            height: "inherit",
          }}
        >
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill="currentColor"
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M12 6a1 1 0 00-1 1v4H7a1 1 0 100 2h4v4a1 1 0 102 0v-4h4a1 1 0 100-2h-4V7a1 1 0 00-1-1z"
            ></path>
          </svg>
        </Button>
      </div>
    </Div>
  );
}
