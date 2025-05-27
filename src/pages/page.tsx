import { ProductList } from "./components/product-list/ProductList";

export function RootPage() {
  return (
    <div style={{ display: "flex", gap: "20px" }}>
      <div style={{ minWidth: "268px", backgroundColor: "lightcoral" }}>
        catalog wrapper
      </div>
      <ProductList />
      <div
        style={{
          minWidth: "368px",
          backgroundColor: "lightblue",
          display: "flex",
        }}
      >
        <span>20–30 мин, 0₽</span>
      </div>
    </div>
  );
}
