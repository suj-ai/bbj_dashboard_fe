import { Route, Routes } from 'react-router-dom';
import Orders from '../pages';
import { UnauthorisedFallback } from '../../../utils/fallbacks';
import ViewOrders from '../pages/viewOrders';

export const OrdersRoutes = () => (
  <Routes>
    <Route path="/orders" element={<Orders />} />
    <Route path="/orders/:id" element={<ViewOrders />} />
    <Route path="*" element={<UnauthorisedFallback />} />
  </Routes>
);
