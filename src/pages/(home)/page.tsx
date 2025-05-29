import { CartSidebar } from "./components/cart-sidebar/cart-sidebar";
import { ProductList } from "./components/product-list/product-list";

export function RootPage() {
  return (
    <div style={{ display: "flex", gap: "20px" }}>
      <ProductList />
      <CartSidebar />
    </div>
  );
}
