import { Div } from "@shared/ui/div/div";
import styles from "./header.module.css";
import { Github } from "lucide-react";
import { Button } from "@shared/ui/button/button";
import { repository } from "../../../../../package.json";
import { useAuth } from "@shared/api/hooks/use-auth/use-auth";

export function Header() {
  const { login, logout, me } = useAuth();

  return (
    <header className={styles.header}>
      <div className={styles["header-content"]}>
        <img
          src="react_lavka_full_logo.svg"
          alt="react-lavka-logo"
          height={28}
        />

        <Div flex gap2>
          <Div flex gap2>
            {me?.username ? (
              <>
                <span style={{ color: "blueviolet" }}>{me?.username}</span>
                <button onClick={logout}>logout</button>
              </>
            ) : (
              <form
                onSubmit={async (e) => {
                  e.preventDefault();

                  const formData = new FormData(e.currentTarget);

                  const username = formData.get("username")?.toString();

                  if (!username) {
                    alert("no username");

                    return;
                  }

                  await login({ username });
                }}
              >
                <input
                  type="text"
                  name="username"
                  placeholder="Введите username"
                />
                <button type="submit">Войти</button>
              </form>
            )}
          </Div>
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
