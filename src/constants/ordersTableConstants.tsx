export interface Order {
  order: string;
  customer: string;
  type: string;
  status: string;
  transaction: string;
  event_date: string;
  event_title: string;
  ship_to: string;
  taken_by: string;
}
export const ORDERS_TABLE_CONSTANTS: Order[] = [
  {
    order: "ORD001",
    customer: "John Doe",
    type: "Retail",
    status: "Pending",
    transaction: "TRX1001",
    event_date: "2023-09-15",
    event_title: "Product Launch",
    ship_to: "1234 Elm St, Springfield",
    taken_by: "Jane Smith",
  },
  {
    order: "ORD002",
    customer: "Alice Johnson",
    type: "Wholesale",
    status: "Shipped",
    transaction: "TRX1002",
    event_date: "2023-09-16",
    event_title: "Trade Show",
    ship_to: "5678 Oak St, Metropolis",
    taken_by: "Sam Brown",
  },
  {
    order: "ORD003",
    customer: "Michael Bay",
    type: "Online",
    status: "Delivered",
    transaction: "TRX1003",
    event_date: "2023-09-17",
    event_title: "Webinar",
    ship_to: "91011 Pine St, Gotham",
    taken_by: "Chris Green",
  },
  {
    order: "ORD004",
    customer: "Sarah Connor",
    type: "Retail",
    status: "Cancelled",
    transaction: "TRX1004",
    event_date: "2023-09-18",
    event_title: "Conference",
    ship_to: "1213 Maple St, Star City",
    taken_by: "Pat White",
  },
  {
    order: "ORD005",
    customer: "Bruce Wayne",
    type: "Wholesale",
    status: "Processing",
    transaction: "TRX1005",
    event_date: "2023-09-19",
    event_title: "Exhibition",
    ship_to: "1415 Cedar St, Central City",
    taken_by: "Kim Yellow",
  },
  {
    order: "ORD006",
    customer: "Clark Kent",
    type: "Online",
    status: "Pending",
    transaction: "TRX1006",
    event_date: "2023-09-20",
    event_title: "Sales Meeting",
    ship_to: "1617 Birch St, Coast City",
    taken_by: "Morgan Orange",
  },
  {
    order: "ORD007",
    customer: "Diana Prince",
    type: "Retail",
    status: "Shipped",
    transaction: "TRX1007",
    event_date: "2023-09-21",
    event_title: "Product Demo",
    ship_to: "1819 Elm St, Keystone City",
    taken_by: "Casey Black",
  },
  {
    order: "ORD008",
    customer: "Barry Allen",
    type: "Wholesale",
    status: "Delivered",
    transaction: "TRX1008",
    event_date: "2023-09-22",
    event_title: "Customer Training",
    ship_to: "2021 Oak St, National City",
    taken_by: "Drew Grey",
  },
  {
    order: "ORD009",
    customer: "Tony Stark",
    type: "Online",
    status: "Cancelled",
    transaction: "TRX1009",
    event_date: "2023-09-23",
    event_title: "Networking Event",
    ship_to: "2223 Pine St, Bludhaven",
    taken_by: "Jess Purple",
  },
  {
    order: "ORD010",
    customer: "Peter Parker",
    type: "Retail",
    status: "Processing",
    transaction: "TRX1010",
    event_date: "2023-09-24",
    event_title: "Charity Event",
    ship_to: "2425 Maple St, Fawcett City",
    taken_by: "Alex Blue",
  },
  {
    order: "ORD012",
    customer: "Natasha Romanoff",
    type: "Online",
    status: "Shipped",
    transaction: "TRX1012",
    event_date: "2023-09-26",
    event_title: "Product Testing",
    ship_to: "2829 Birch St, Emerald City",
    taken_by: "Sky Indigo",
  },
];
export interface orderTableHeader {
  id: number;
  item: string;
  value?: string;
}
export const orderTableHeaderConstants = [
  {
    id: 1,
    item: "General",
  },
  {
    id: 2,
    item: "Items",
    value: "(03)",
  },
  {
    id: 3,
    item: "Shipping",
  },
  {
    id: 4,
    item: "Fulfilment",
  },
  {
    id: 5,
    item: "Discounts",
  },
  {
    id: 6,
    item: "Notes",
  },
  {
    id: 7,
    item: "Total",
    value: "(05)",
  },
  {
    id: 8,
    item: "Production",
  },
  {
    id: 9,
    item: "Payment",
  },
  {
    id: 10,
    item: "Payment Link",
  },
  {
    id: 11,
    item: "Fabrications",
  },
  {
    id: 12,
    item: "Tracking",
  },
  {
    id: 13,
    item: "Freight",
  },
];
