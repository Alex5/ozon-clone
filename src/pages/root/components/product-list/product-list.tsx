import { ProductCard } from "../product-card/product-card";

const products = [
  {
    id: 1,
    name: "product 1",
  },
];

export function ProductList() {
  return (
    <div>
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}
