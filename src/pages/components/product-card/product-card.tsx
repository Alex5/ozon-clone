import type { ProductType } from "@shared/api/hooks/use-products";
import { Card } from "@shared/ui/card/card";
import { CardContent } from "@shared/ui/card/card-content";
import { Float } from "@shared/ui/float/float";
import { Image } from "@shared/ui/image/image";
import { Text } from "@shared/ui/text/text";

export function ProductCard({ product }: { product: ProductType }) {
  return (
    <Card>
      <div style={{ position: "relative" }}>
        <Image src={product.image} aspectRatio={"1 / 1"} />
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
          }).format(product.price)}
        </Text>
        <Text size="sm">{product.title}</Text>
      </CardContent>
      <footer>
        <button>Buy</button>
      </footer>
    </Card>
  );
}
