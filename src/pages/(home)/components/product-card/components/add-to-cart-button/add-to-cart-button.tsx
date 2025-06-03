import { useCart } from "@shared/api/hooks/use-cart/use-cart";
import type { ProductType } from "@shared/api/hooks/use-products/types";
import { Button } from "@shared/ui/button/button";
import { Text } from "@shared/ui/text/Text";
import { useCartActions } from "@shared/api/hooks/use-cart/use-cart-actions";
import { motion, AnimatePresence } from "framer-motion";

export function AddToCartButton({ product }: { product: ProductType }) {
  const { cart } = useCart();
  const { addToCart, removeFromCart } = useCartActions();
  const { quantity } = cart.get(product.id) ?? {};

  return (
    <motion.div
      layout
      transition={{ type: "tween", ease: "linear", duration: 0.2 }}
      style={{
        backgroundColor: "white",
        borderRadius: "48px",
        display: "flex",
        alignItems: "center",
        gap: "6px",
      }}
    >
      <AnimatePresence initial={false}>
        {quantity ? (
          <motion.div
            key="remove"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ type: "tween", ease: "linear", duration: 0.2 }}
          >
            <Button
              onClick={() => removeFromCart(product)}
              radius="xl"
              size="lg"
              shadow="none"
              colorPallete="gray"
              // style={{ padding: "unset" }}
            >
              <svg width="24" height="24" viewBox="0 0 24 24">
                <path
                  fill="currentColor"
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M3 12.5a.5.5 0 00.5.5h17a.5.5 0 00.5-.5v-1a.5.5 0 00-.5-.5h-17a.5.5 0 00-.5.5v1z"
                />
              </svg>
            </Button>
          </motion.div>
        ) : null}
      </AnimatePresence>

      <AnimatePresence initial={false}>
        {quantity ? (
          <motion.div
            key="qty"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ type: "tween", ease: "linear", duration: 0.2 }}
          >
            <Text fontWeight="medium">{quantity}</Text>
          </motion.div>
        ) : null}
      </AnimatePresence>

      <motion.div layout>
        <Button
          onClick={() => addToCart(product)}
          size="lg"
          radius="rounded"
          shadow="none"
          colorPallete="gray"
          // style={{ padding: "unset" }}
        >
          <svg width="24" height="24" viewBox="0 0 24 24">
            <path
              fill="currentColor"
              fillRule="evenodd"
              clipRule="evenodd"
              d="M11.5 3a.5.5 0 00-.5.5V11H3.5a.5.5 0 00-.5.5v1a.5.5 0 00.5.5H11v7.5a.5.5 0 00.5.5h1a.5.5 0 00.5-.5V13h7.5a.5.5 0 00.5-.5v-1a.5.5 0 00-.5-.5H13V3.5a.5.5 0 00-.5-.5h-1z"
            />
          </svg>
        </Button>
      </motion.div>
    </motion.div>
  );
}
