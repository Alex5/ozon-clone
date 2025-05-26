import { Container } from "@shared/ui/container/Container";
import { Outlet } from "react-router";
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
