import { FaRegStar } from "react-icons/fa";
import { LiaBoxOpenSolid } from "react-icons/lia";

type MenuItem = {
  key: string;
  icon?: React.ComponentType;
  label: string;
  path: string;
  items?: MenuItem[];
};

export type SidenavConstants = MenuItem[];

export const SIDENAV_CONSTANTS: SidenavConstants = [
  {
    key: "favourites",
    icon: FaRegStar,
    label: "Favourites",
    path: "/favorites",
  },
  {
    key: "orders_management",
    icon: LiaBoxOpenSolid,
    label: "Orders Management",
    path: "/orders_management",
    items: [
      {
        key: "orders",
        label: "Orders",
        path: "/orders_management/orders",
      },
      {
        key: "order_freight",
        label: "Order Freight",
        path: "/orders_management/order_freight",
      },
    ],
  },
];
