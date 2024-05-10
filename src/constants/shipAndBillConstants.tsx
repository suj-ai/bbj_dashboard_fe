import { BillingsDetailsCard } from '../components/billingCard';
import { CustomerDetailsCard } from '../components/cards/customerCard';
import { OrderDetailsCard } from '../components/cards/ordersCard';

export interface ShippingDetails {
  id: number;
  value: JSX.Element;
}

export const SHIP_AND_BILL_DETAILS_CONSTANTS: ShippingDetails[] = [
  {
    id: 1,
    value: <OrderDetailsCard />,
  },
  {
    id: 1,
    value: <CustomerDetailsCard />,
  },
  {
    id: 1,
    value: <BillingsDetailsCard />,
  },
];
