import { Text } from "@shared/ui/text/Text";
import styles from "./cart-sidebar.module.css";
import { useCart } from "@shared/api/hooks/use-cart/use-cart";
import { Button } from "@shared/ui/button/button";
import { CartProduct } from "./components/cart-product/cart-product";
import { Link } from "react-router";

export function CartSidebar() {
  const { cart } = useCart();

  const total = Array.from(cart.values())?.reduce(
    (acc, prev) => (acc += prev.product.currentPrice * prev.quantity),
    0
  );

  return (
    <aside className={styles["cart-sidebar"]}>
      <Text
        textStyle="lg"
        fontWeight="medium"
        style={{ display: "block", marginBottom: "20px" }}
      >
        15–25 мин, 0-119
      </Text>
      <ul className={styles["cart-sidebar-list"]}>
        {Array.from(cart.values())?.map((cartItem) => (
          <CartProduct key={cartItem.product.id} cartItem={cartItem} />
        ))}
      </ul>
      <Link to="/cart" style={{ textDecoration: "none" }}>
        <Button radius="lg" style={{ width: "100%" }}>
          <Text fontWeight="medium">
            {total
              ? "В корзину " +
                new Intl.NumberFormat("ru-RU", {
                  currency: "RUB",
                  style: "currency",
                }).format(total)
              : "Добавьте что-нибудь"}
          </Text>
        </Button>
      </Link>
    </aside>
  );
}
