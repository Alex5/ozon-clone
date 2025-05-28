import { CatalogSidebar } from "./components/catalog-sidebar/catalog-sidebar";
import { ProductList } from "./components/product-list/ProductList";

export function RootPage() {
  return (
    <div style={{ display: "flex", gap: "20px" }}>
      <CatalogSidebar />
      <ProductList />
      <div
        style={{
          minWidth: "320px",
          backgroundColor: "lightblue",
          display: "flex",
          paddingLeft: "20px",
        }}
      >
        <span>20–30 мин, 0₽</span>
      </div>
    </div>
  );
}
