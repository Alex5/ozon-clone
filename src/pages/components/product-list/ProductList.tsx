import { useProducts } from "../../../shared/api/hooks/use-products/useProducts";
// import { Grid } from "../../../shared/ui/grid/Grid";
import { ProductCard } from "../product-card/ProductCard";

export function ProductList() {
  const { products } = useProducts();

  return (
    <div style={{ display: "flex", flexWrap: "wrap" }}>
      {products?.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}
