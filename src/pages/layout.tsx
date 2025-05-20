import { Outlet } from "react-router";
import { Container } from "../shared/ui/container/Container";

export function RootPageLayout() {
  return (
    <Container>
      <header>Header</header>
      <Outlet />
      <footer>Footer</footer>
    </Container>
  );
}
