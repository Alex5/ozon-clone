import { Text } from "@shared/ui/text/Text";
import styles from "./cart-sidebar.module.css";
import { useCart } from "@shared/api/hooks/use-cart/use-cart";
import { Button } from "@shared/ui/button/button";
import { CartProduct } from "./components/cart-product/cart-product";
import { Link } from "react-router";

export function CartSidebar() {
  const { cart } = useCart();

  const total = Object.values(cart ?? {})?.reduce(
    (acc, prev) => (acc += prev.product.currentPrice * prev.quantity),
    0
  );

  const cartItems = Object.values(cart ?? {});

  return (
    <aside className={styles["cart-sidebar"]}>
      <Text
        textStyle="md"
        fontWeight="bold"
        style={{ display: "block", marginBottom: "20px" }}
      >
        15–25 мин, 0–119 ₽
      </Text>
      {cartItems.length === 0 ? (
        <div
          style={{
            height: "100%",
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
            gap: 20,
            alignItems: "center",
          }}
        >
          <img
            src="https://yastatic.net/s3/lavka-web/public/assets/images/CategoryUnavailable@2x.png"
            alt=""
            width="100%"
          />
          <Text>
            В корзине пока ничего нет. <br />
            Самое время наполнять её!
          </Text>
        </div>
      ) : (
        <ul className={styles["cart-sidebar-list"]}>
          {cartItems?.map((cartItem) => (
            <CartProduct key={cartItem.product.id} cartItem={cartItem} />
          ))}
        </ul>
      )}

      <Link to="/cart" style={{ textDecoration: "none" }}>
        <Button radius="lg" style={{ width: "100%" }} disabled={!total}>
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
