import { Route, Routes } from 'react-router-dom';
import Orders from '../pages';
import { UnauthorisedFallback } from '../../../utils/fallbacks';
import NewViewOrders from '../pages/viewOrders/newViewOrders';
// import ViewOrders from '../pages/viewOrders';

export const OrdersRoutes = () => (
  <Routes>
    <Route path="/orders" element={<Orders />} />
    <Route path="/orders/:id" element={<NewViewOrders />} />
    {/* <Route path="/orders/:id" element={<ViewOrders />} /> */}
    <Route path="*" element={<UnauthorisedFallback />} />
  </Routes>
);
