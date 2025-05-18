import {
  createBrowserRouter,
  RouterProvider as ReactRouterProvider,
} from "react-router";
import { CartPage } from "../pages/cart/page";
import { ProductPage } from "../pages/product/page";
import { RootPageLayout } from "../pages/root/layout";

const router = createBrowserRouter([
  {
    index: true,
    Component: RootPageLayout,
  },
  {
    path: "cart",
    Component: CartPage,
  },
  {
    path: "product/:productId",
    Component: ProductPage,
  },
]);

export function RouterProvider() {
  return <ReactRouterProvider router={router} />;
}
