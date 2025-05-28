import { CartSidebar } from "./components/cart-sidebar/cart-sidebar";
import { CatalogSidebar } from "./components/catalog-sidebar/catalog-sidebar";
import { ProductList } from "./components/product-list/ProductList";

export function RootPage() {
  return (
    <div style={{ display: "flex", gap: "20px" }}>
      <CatalogSidebar />
      <ProductList />
      <CartSidebar />
    </div>
  );
}
