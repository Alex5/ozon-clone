import styles from "./header.module.css";

export function Header() {
  return (
    <header className={styles.header}>
      <div className={styles["header-content"]}>
        <img src="./full-logo.svg" alt="" />
      </div>
    </header>
  );
}
