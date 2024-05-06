import { Route, Routes } from "react-router-dom";

import { UnauthorisedFallback } from "../../../utils/fallbacks";
import Availablity from "../pages/availablity";

export const InventoryRoutes = () => (
  <Routes>
    <Route path="/items" element={"Order Coming coon"} />
    <Route path="/availablity" element={<Availablity />} />
    <Route path="*" element={<UnauthorisedFallback />} />
  </Routes>
);
