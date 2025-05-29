import styles from "./header.module.css";

export function Header() {
  return (
    <header className={styles.header}>
      <div className={styles["header-content"]}>
        <img src="react_lavka_full_logo.svg" alt="react-lavka-logo" height={28}/>
      </div>
    </header>
  );
}
