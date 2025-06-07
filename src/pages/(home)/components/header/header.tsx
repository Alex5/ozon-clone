import { Div } from "@shared/ui/div/div";
import styles from "./header.module.css";
import { Github } from "lucide-react";
import { Button } from "@shared/ui/button/button";
import { repository } from "../../../../../package.json";

export function Header() {
  return (
    <header className={styles.header}>
      <div className={styles["header-content"]}>
        <img
          src="react_lavka_full_logo.svg"
          alt="react-lavka-logo"
          height={28}
        />
        <Div flex gap2>
          <a href={repository} target="_blank">
            <Button colorPallete="gray" radius="lg">
              <Github />
            </Button>
          </a>
        </Div>
      </div>
    </header>
  );
}
