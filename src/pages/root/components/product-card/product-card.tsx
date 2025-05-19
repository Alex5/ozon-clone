import type { ProductType } from "@shared/api/hooks/use-products";
import { Card } from "@shared/ui/card/card";
import { CardContent } from "@shared/ui/card/card-content";
import { Float } from "@shared/ui/float/Float";
import { Image } from "@shared/ui/image/Image";
import { Text } from "@shared/ui/text/Text";

export function ProductCard({ product }: { product: ProductType }) {
  return (
    <Card>
      <Image src={product.avatar} aspectRatio={"1 / 1"}>
        <Float placement="bottom-start">
          <div style={{ display: "flex", gap: "10px" }}>
            <span style={{ backgroundColor: "red", padding: "4px" }}>new</span>
            <span style={{ backgroundColor: "green", padding: "4px" }}>
              sale
            </span>
          </div>
        </Float>
      </Image>
      <CardContent>
        <Text size="md" palette="red">
          {product.price}
        </Text>
        <Text size="sm">{product.name}</Text>
      </CardContent>
      <footer>
        <button>Buy</button>
      </footer>
    </Card>
  );
}
