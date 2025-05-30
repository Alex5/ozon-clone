import { useProducts } from "@shared/api/hooks/use-products/useProducts";
import { Grid } from "@shared/ui/grid/grid";
import { ProductCard } from "../product-card/product-card";

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
