import type { ProductType } from "../../../shared/api/hooks/use-products";
import { Card } from "@shared/ui/card/Card";
import { Float } from "@shared/ui/float/Float";
import { Image } from "@shared/ui/image/Image";
import { Text } from "@shared/ui/text/Text";

// component ui
import { NewBadge } from "./ui/NewBadge";

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
