import styles from "./catalog-sidebar.module.css";

export function CatalogSidebar() {
  return (
    <aside className={styles["catalog-sidebar"]}>
      <span data-text-type="title">Каталог</span>
    </aside>
  );
}
