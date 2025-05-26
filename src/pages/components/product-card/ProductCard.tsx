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
        <Image
          onClick={() => null}
          src={imageSrc}
          aspectRatio={"1 / 1"}
          radius="xl"
        />
        <Float placement="bottom-start">
          <NewBadge />
        </Float>
        <Float placement="bottom-end">
          <Button size="lg" radius="rounded">
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
