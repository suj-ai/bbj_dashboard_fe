import { Route, Routes } from "react-router-dom";

import { UnauthorisedFallback } from "../../../utils/fallbacks";
import Availablity from "../pages/availablity";
import ViewAvailability from "../pages/viewAvailability";

export const InventoryRoutes = () => (
  <Routes>
    <Route path="/items" element={"Order Coming coon"} />
    <Route path="/availablity" element={<Availablity />} />
    <Route path='/viewavailability' element={<ViewAvailability />} />
    <Route path="*" element={<UnauthorisedFallback />} />
  </Routes>
);
