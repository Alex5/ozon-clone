import { Text } from "@shared/ui/text/Text";
import styles from "./cart-sidebar.module.css";
import { useCart } from "@shared/api/hooks/use-cart/use-cart";

export function CartSidebar() {
  const { cart } = useCart();

  return (
    <aside className={styles["cart-sidebar"]}>
      <Text
        textStyle="lg"
        fontWeight="medium"
        style={{ display: "block", marginBottom: "20px" }}
      >
        15–25 мин, 119₽
      </Text>
      <ul className={styles["cart-sidebar-list"]}>
        {cart?.map((cartItem) => (
          <Text key={cartItem.id}>{cartItem.longTitle}</Text>
        ))}
      </ul>
    </aside>
  );
}
