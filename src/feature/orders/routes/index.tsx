import { Route, Routes } from "react-router-dom";
import Orders from "../pages";
import { UnauthorisedFallback } from "../../../utils/fallbacks";

export const OrdersRoutes = () => (
  <Routes>
    <Route path="/orders" element={<Orders />} />
    <Route path="*" element={<UnauthorisedFallback />} />
  </Routes>
);
