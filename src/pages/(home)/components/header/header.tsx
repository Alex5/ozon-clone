import { Div } from "@shared/ui/div/div";
import styles from "./header.module.css";
import { Github } from "lucide-react";
import { repository } from "../../../../../package.json";
import { useAuth } from "@shared/api/hooks/use-auth/use-auth";
import { Text } from "@shared/ui/text/Text";
import { Image } from "@shared/ui/image/image.component";
import { ButtonLink } from "@shared/ui/button-link/button-link";

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
              <ButtonLink
                radius="md"
                to={import.meta.env.VITE_API_URL + "/api/v1/yandex"}
                target="_self"
              >
                <Text textStyle="md" fontWeight="medium">
                  Войти
                </Text>
              </ButtonLink>
            )}
          </Div>
          <ButtonLink
            to={repository}
            target="_blank"
            colorPallete="gray"
            radius="lg"
            size="md"
            icon
          >
            <Github />
          </ButtonLink>
        </Div>
      </div>
    </header>
  );
}
