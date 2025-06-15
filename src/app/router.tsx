import {
  createBrowserRouter,
  RouterProvider as ReactRouterProvider,
} from "react-router";
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
          lazy: {
            Component: async () => {
              const { CartPage } = await import("../pages/cart/page");

              return CartPage;
            },
          },
        },
        {
          path: "/product/:productId",
          lazy: {
            Component: async () => {
              const { ProductPage } = await import("../pages/product/page");

              return ProductPage;
            },
          },
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
