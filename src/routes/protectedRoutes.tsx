import MainLayout from "../components/mainLayout";
import { InventoryRoutes } from "../feature/inventory/routes/index.tsx";
import { OrdersRoutes } from "../feature/orders/index.ts";
import { UnauthorisedFallback } from "../utils/fallbacks.tsx";

export const protectedRoutes = [
  {
    path: "/",
    element: <MainLayout />,
    children: [
      { path: "/orders_management/*", element: <OrdersRoutes /> },
      { path: "/inventory_maintainance/*", element: <InventoryRoutes /> },
      { path: "*", element: <UnauthorisedFallback /> },
    ],
  },
];
