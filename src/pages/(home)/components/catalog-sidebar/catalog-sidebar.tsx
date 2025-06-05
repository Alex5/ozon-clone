import { Text } from "@shared/ui/text/Text";
import styles from "./catalog-sidebar.module.css";
import categoryGroup from "@mocks/category-group.json";

export function CatalogSidebar() {
  return (
    <aside className={styles["catalog-sidebar"]}>
      {categoryGroup.products.map((product) => (
        <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
          <Text>{product.title}</Text>
          <ul>{product.title}</ul>
        </div>
      ))}
    </aside>
  );
}
