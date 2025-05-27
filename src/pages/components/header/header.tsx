import styles from "./header.module.css";

export function Header() {
  return (
    <header className={styles.header}>
      <div className={styles["header-content"]}>
        <span>react lavka</span>
      </div>
    </header>
  );
}
