import { useProducts } from "src/shared/api/hooks/use-products/useProducts";
import { ProductCard } from "../product-card/ProductCard";
import { Grid } from "src/shared/ui/grid/Grid";

export function ProductList() {
  const { products } = useProducts();

  return (
    <Grid>
      {products?.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </Grid>
  );
}
