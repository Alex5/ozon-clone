import {
  createBrowserRouter,
  RouterProvider as ReactRouterProvider,
} from "react-router";
import { CartPage } from "../pages/cart/page";
import { RootPageLayout } from "@home/layout";
import { RootPage } from "@home/page";
import { ProductPage } from "../pages/product/page";

const router = createBrowserRouter(
  [
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
  ],
  {
    basename: "/react-lavka",
  }
);

export function RouterProvider() {
  return <ReactRouterProvider router={router} />;
}
