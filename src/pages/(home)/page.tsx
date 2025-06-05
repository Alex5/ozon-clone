import { Div } from "@shared/ui/div/div";
import { CartSidebar } from "./components/cart-sidebar/cart-sidebar";
import { ProductList } from "./components/product-list/product-list";
import { CatalogSidebar } from "./components/catalog-sidebar/catalog-sidebar";

export function RootPage() {
  return (
    <Div flex gap4>
      <CatalogSidebar />
      <ProductList />
      <CartSidebar />
    </Div>
  );
}
