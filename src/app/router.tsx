import {
  createBrowserRouter,
  RouterProvider as ReactRouterProvider,
} from "react-router";
import { CartPage } from "../pages/cart/page";
import { RootPageLayout } from "@home/layout";
import { RootPage } from "@home/page";

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
