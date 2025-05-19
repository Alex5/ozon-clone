import { Container } from "@shared/ui/container/container";
import { RootPage } from "./page";

export function RootPageLayout() {
  return (
    <Container>
      <header>Header</header>
      <RootPage />
      <footer>Footer</footer>
    </Container>
  );
}
