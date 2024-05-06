export interface CustomerDetails {
  id: number;
  name: string;
  address: string;
  phone: string | number;
  comment: string;
}

export const CUSTOMER_DETAIL_CARD_CONSTANTS: CustomerDetails[] = [
  {
    id: 1,
    name: 'Basso Jim',
    address: '5429 N. Melvina Ave, Chicago, IL, United States, 60714 - 3400',
    phone: '847-933-5244',
    comment: '',
  },
  {
    id: 2,
    name: 'Basso Jim',
    address: '5429 N. Melvina Ave, Chicago, IL, United States, 60714 - 3400',
    phone: '847-933-5244',
    comment: '',
  },
  {
    id: 3,
    name: 'Basso Jim',
    address: '5429 N. Melvina Ave, Chicago, IL, United States, 60714 - 3400',
    phone: '847-933-5244',
    comment: '',
  },
];
