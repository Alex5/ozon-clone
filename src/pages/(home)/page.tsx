import { Div } from "@shared/ui/div/div";
import { CartSidebar } from "./components/cart-sidebar/cart-sidebar";
import { ProductList } from "./components/product-list/product-list";

export function RootPage() {
  return (
    <Div flex gap4>
      <ProductList />
      <CartSidebar />
    </Div>
  );
}
