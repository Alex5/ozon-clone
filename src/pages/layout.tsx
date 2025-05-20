import { Outlet } from "react-router";
// import { Container } from "../shared/ui/container/Container";

export function RootPageLayout() {
  return (
    <div>
      <header>Header</header>
      <Outlet />
      <footer>Footer</footer>
    </div>
  );
}
