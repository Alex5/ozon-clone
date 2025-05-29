import { Text } from "@shared/ui/text/Text";
import type { CartItem } from "../../../../../../mocks/handlers";
import { Image } from "@shared/ui/image/Image";
import { getImageUrl } from "@shared/services/dom.service";

import styles from "./cart-product.module.css";
import { Button } from "@shared/ui/button/Button";
import { useCartActions } from "@home/components/product-card/features/add-to-cart-button/use-cart-actions";

type CartProductProps = {
  cartItem: CartItem;
};

export function CartProduct(props: CartProductProps) {
  const {
    cartItem: { product, quantity },
  } = props;

  const { id, longTitle, snippetImage, currentPriceSigned } = product;

  const imageSrc = getImageUrl(snippetImage.url, 600);

  const { addToCart, removeFromCart } = useCartActions();

  return (
    <div
      key={id}
      style={{
        display: "flex",
        alignItems: "center",
        gap: "20px",
      }}
    >
      <Image
        src={imageSrc}
        className={styles["cart-product-image"]}
        radius="lg"
      />
      <div style={{ display: "flex", flexDirection: "column", width: "100%" }}>
        <Text textStyle="sm">{longTitle}</Text>
        <Text textStyle="sm" fontWeight="medium">
          {currentPriceSigned}
        </Text>
      </div>
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
    </div>
  );
}
