import { useProducts } from "@shared/api/hooks/use-products/useProducts";
import { Grid } from "@shared/ui/grid/grid";
import { ProductCard } from "../product-card/product-card";
import { ProductListSekeltom } from "./product-list.skeleton";

export function ProductList() {
  const { products, isLoading } = useProducts();

  if (isLoading) return <ProductListSekeltom />;

  return (
    <Grid>
      {products?.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </Grid>
  );
}
