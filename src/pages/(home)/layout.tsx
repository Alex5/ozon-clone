import { Outlet } from "react-router";

import { Container } from "@shared/ui/container/container";
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
