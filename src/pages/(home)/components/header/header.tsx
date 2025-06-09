import { Div } from "@shared/ui/div/div";
import styles from "./header.module.css";
import { Github } from "lucide-react";
import { Button } from "@shared/ui/button/button";
import { repository } from "../../../../../package.json";
import { useAuth } from "@shared/api/hooks/use-auth/use-auth";
import { Text } from "@shared/ui/text/Text";
import { Image } from "@shared/ui/image/image.component";

export function Header() {
  const { logout, user } = useAuth();

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
            {user ? (
              <Image
                src={`https://avatars.yandex.net/get-yapic/${user.default_avatar_id}/islands-retina-middle`}
                onClick={logout}
                radius="xl"
                size="md"
                style={{ cursor: "pointer" }}
              />
            ) : (
              <a href={import.meta.env.VITE_API_URL + "/api/v1/yandex"}>
                <Button colorPallete="yellow" radius="md">
                  <Text fontWeight="medium">Войти</Text>
                </Button>
              </a>
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
