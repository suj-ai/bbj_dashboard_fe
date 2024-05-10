import { FaRegStar } from "react-icons/fa";
import { LiaBoxOpenSolid } from "react-icons/lia";
import { LiaHandshakeSolid } from "react-icons/lia";
import { MdOutlineInventory2 } from "react-icons/md";

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
  {
    key: "customer_maintainance",
    icon: LiaHandshakeSolid,
    label: "Customer Maintainance",
    path: "/customer_maintainance",
    items: [
      {
        key: "customers",
        label: "Customers",
        path: "/customer_maintainance/customers",
      },
    ],
  },

  {
    key: "inventory_maintainance",
    icon: MdOutlineInventory2,
    label: "Inventory Maintainance",
    path: "/inventory_maintainance",
    items: [
      {
        key: "items",
        label: "Items",
        path: "/inventory_maintainance/items",
      },
      {
        key: "availablity",
        label: "Availablity",
        path: "/inventory_maintainance/availablity",
      },
      {
        key: "viewAvailability",
        label: "View Availability",
        path: "/inventory_maintainance/viewavailability",
      },
    ],
  },
];
