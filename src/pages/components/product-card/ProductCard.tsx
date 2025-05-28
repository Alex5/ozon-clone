import type { ProductType } from "@shared/api/hooks/use-products/types";
import { Card } from "@shared/ui/card/Card";
import { Float } from "@shared/ui/float/Float";
import { Image } from "@shared/ui/image/Image";
import { Text } from "@shared/ui/text/Text";
import { Button } from "@shared/ui/button/Button";

import styles from "./product-card.module.css";
import { getImageUrl } from "@shared/services/dom.service";

export function ProductCard({ product }: { product: ProductType }) {
  const imageSrc = getImageUrl(product.snippetImage.url, 600);

  return (
    <Card className={styles.container}>
      <div style={{ position: "relative" }}>
        <div className={styles.image}>
          <Image onClick={() => null} src={imageSrc} radius="xl" />
        </div>
        <Float placement="bottom-end">
          <Button size="lg" radius="rounded">
            {/* @todo */}
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
        </Float>
      </div>
      <Text textStyle="md" fontWeight="medium">
        {product.pricing.priceSigned}
      </Text>
      <Text textStyle="sm">{product.longTitle}</Text>
    </Card>
  );
}
