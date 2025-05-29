import { Outlet } from "react-router";

import { Container } from "@shared/ui/container/Container";
import { Header } from "./components/header/header";

export function RootPageLayout() {
  return (
    <>
      <Header />
      <Container>
        <Outlet />
      </Container>
    </>
  );
}
