import type { ProductType } from "@shared/api/hooks/use-products/types";
import { Card } from "@shared/ui/card/Card";
import { Float } from "@shared/ui/float/Float";
import { Image } from "@shared/ui/image/Image";
import { Text } from "@shared/ui/text/Text";

import styles from "./product-card.module.css";
import { getImageUrl } from "@shared/services/dom.service";
import { AddToCartButton } from "./features/add-to-cart-button/add-to-cart-button";

export function ProductCard({ product }: { product: ProductType }) {
  const imageSrc = getImageUrl(product.snippetImage.url, 600);

  return (
    <Card className={styles.container}>
      <div style={{ position: "relative" }}>
        <div className={styles.image}>
          <Image onClick={() => null} src={imageSrc} radius="xl" />
        </div>
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
