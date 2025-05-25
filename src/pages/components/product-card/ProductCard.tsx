import type { ProductType } from "../../../shared/api/hooks/use-products/types";
import { Card } from "../../../shared/ui/card/Card";
import { Float } from "../../../shared/ui/float/Float";
import { Image } from "../../../shared/ui/image/Image";
import { Text } from "@shared/ui/text/Text";
import { NewBadge } from "./ui/NewBadge";

import { Button } from "@shared/ui/button/Button";

export function ProductCard({ product }: { product: ProductType }) {
  const imageSrc = product.snippetImage.url
    .replace("{w}", "600")
    .replace("{h}", "600");

  return (
    <Card>
      <div style={{ position: "relative" }}>
        <Image src={imageSrc} aspectRatio={"1 / 1"} />
        <Float placement="bottom-start">
          <NewBadge />
        </Float>
        <Float placement="bottom-end">
          <Button colorPallete="yellow" size="icon">
            +
          </Button>
        </Float>
      </div>
      <Text size="md">
        {new Intl.NumberFormat("ru-RU", {
          style: "currency",
          currency: "RUR",
        }).format(product.pricing.price)}
      </Text>
      <Text size="sm">{product.title}</Text>
    </Card>
  );
}
