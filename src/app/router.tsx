import {
  createBrowserRouter,
  RouterProvider as ReactRouterProvider,
} from "react-router";
import { CartPage } from "../pages/cart/page";
import { ProductPage } from "../pages/product/page";
import { RootPageLayout } from "../pages/layout";
import { RootPage } from "../pages/page";

const router = createBrowserRouter([
  {
    path: "/",
    Component: RootPageLayout,
    children: [
      {
        index: true,
        Component: RootPage,
      },
      {
        path: "/cart",
        Component: CartPage,
      },
      {
        path: "/product/:productId",
        Component: ProductPage,
      },
    ],
  },
], {
  basename: '/react-lavka'
});

export function RouterProvider() {
  return <ReactRouterProvider router={router} />;
}
