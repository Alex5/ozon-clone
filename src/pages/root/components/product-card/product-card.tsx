import type { ProductType } from "@shared/api/hooks/use-products";

export function ProductCard({ product }: { product: ProductType }) {
  return (
    <article>
      <h5>{product.name}</h5>
    </article>
  );
}
