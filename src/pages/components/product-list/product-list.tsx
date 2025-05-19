import { useProducts } from "shared/api/hooks/use-products";
import { ProductCard } from "../product-card/product-card";
import { Grid } from "shared/ui/grid/grid";

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
