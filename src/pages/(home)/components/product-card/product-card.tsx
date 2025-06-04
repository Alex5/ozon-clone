import styles from "./product-card.module.css";

import type { ProductType } from "@mocks/types";
import { Card } from "@shared/ui/card/card";
import { Float } from "@shared/ui/float/float";
import { Image } from "@shared/ui/image/image.component";
import { Text } from "@shared/ui/text/Text";
import { AddToCartButton } from "./components/add-to-cart-button/add-to-cart-button";

export function ProductCard({ product }: { product: ProductType }) {
  return (
    <Card className={styles.container}>
      <div style={{ position: "relative" }}>
        <Image
          onClick={() => null}
          src={product.snippetImage.url}
          radius="xl"
          loading="lazy"
          aspectRatio="1 / 1"
          // size="lg"
        />
        <Float placement="bottom-end">
          <AddToCartButton product={product} />
        </Float>
      </div>
      <Text textStyle="md" fontWeight="medium">
        {product.currentPriceSigned}
      </Text>
      <Text textStyle="sm">{product.longTitle}</Text>
    </Card>
  );
}
