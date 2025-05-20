import type { ProductType } from "../../../shared/api/hooks/use-products";
import { Card } from "@shared/ui/card/Card";
import { CardContent } from "@shared/ui/card/CardContent";
import { Float } from "@shared/ui/float/Float";
import { Image } from "@shared/ui/image/Image";
import { Text } from "@shared/ui/text/Text";

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
          <div style={{ display: "flex", gap: "10px" }}>
            <span style={{ backgroundColor: "red", padding: "4px" }}>new</span>
            <span style={{ backgroundColor: "green", padding: "4px" }}>
              sale
            </span>
          </div>
        </Float>
      </div>
      <CardContent>
        <Text size="md" palette="red">
          {new Intl.NumberFormat("ru-RU", {
            style: "currency",
            currency: "RUR",
          }).format(product.pricing.amountPrice)}
        </Text>
        <Text size="sm">{product.title}</Text>
      </CardContent>
      <footer>
        <button>Buy</button>
      </footer>
    </Card>
  );
}
