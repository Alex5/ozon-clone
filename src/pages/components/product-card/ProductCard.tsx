import { Card } from "src/shared/ui/card/Card";
import type { ProductType } from "../../../shared/api/hooks/use-products";

// component ui
import { NewBadge } from "./ui/NewBadge";
import { Image } from "src/shared/ui/image/Image";
import { Float } from "src/shared/ui/float/Float";
import { Text } from "src/shared/ui/text/Text";

export function ProductCard({ product }: { product: ProductType }) {
  return (
    <Card>
      <div style={{ position: "relative" }}>
        <Image
          src={product.snippetImage.url
            .replace("{w}", "600")
            .replace("{h}", "600")}
          aspectRatio={"1 / 1"}
        />
        <Float placement="bottom-start">
          <NewBadge />
        </Float>
        <Float placement="bottom-end">
          <button
            style={{
              padding: "12px",
              borderRadius: "24px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            +
          </button>
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
