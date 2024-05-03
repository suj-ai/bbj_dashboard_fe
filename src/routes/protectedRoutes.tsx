import MainLayout from "../components/mainLayout";
import { OrdersRoutes } from "../feature/orders/index.ts";
import { UnauthorisedFallback } from "../utils/fallbacks.tsx";

export const protectedRoutes = [
  {
    path: "/",
    element: <MainLayout />,
    children: [
      { path: "/orders_management/*", element: <OrdersRoutes /> },
      { path: "*", element: <UnauthorisedFallback /> },
    ],
  },
];
