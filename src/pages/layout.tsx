import { Container } from "@shared/ui/container/Container";
import { Outlet } from "react-router";

export function RootPageLayout() {
  return (
    <Container>
      <header>Header</header>
      <Outlet />
      <footer>Footer</footer>
    </Container>
  );
}
