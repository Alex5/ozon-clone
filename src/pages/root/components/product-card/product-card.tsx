export function ProductCard({
  product,
}: {
  product: { id: number; name: string };
}) {
  return (
    <article>
      <h5>{product.name}</h5>
    </article>
  );
}
