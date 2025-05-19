import { useProducts } from "@shared/api/hooks/use-products";
import { ProductCard } from "../product-card/product-card";

export function ProductList() {
  const { products } = useProducts();

  return (
    <div
     
    >
      {products?.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}
