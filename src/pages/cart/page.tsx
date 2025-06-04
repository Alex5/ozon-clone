import { useCart } from "@shared/api/hooks/use-cart/use-cart";

export function CartPage() {
  const { cart } = useCart();

  return (
    <div>
      Cart:{" "}
      <ul>
        {Array.from(cart.values()).map((cartItem) => (
          <li key={cartItem.product.id}>{cartItem.product.longTitle}</li>
        ))}
      </ul>
    </div>
  );
}
