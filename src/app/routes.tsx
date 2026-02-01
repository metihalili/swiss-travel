import { Route } from "react-router-dom";
import Home from "../pages/Home";
import Offers from "../pages/Offers";
import NotFound from "../pages/NotFound";
import FlightsFromSkopje from "../pages/seo/FlightsFromSkopje";
import HolidaysTurkey from "../pages/seo/HolidaysTurkey";
import TravelAgencyGostivar from "../pages/seo/TravelAgencyGostivar";
import Testimonials from "../pages/Testimonials";

import AdminLayout from "../pages/admin/AdminLayout";
import AdminLogin from "../pages/admin/AdminLogin";
import AdminOffers from "../pages/admin/AdminOffers";
import ProtectedRoute from "../features/auth/ProtectedRoute";

const AppRoutes = (
  <>
    <Route path="/" element={<Home />} />
    <Route path="/offers" element={<Offers />} />
<Route path="/flights-from-skopje" element={<FlightsFromSkopje />} />
<Route path="/holidays-turkey" element={<HolidaysTurkey />} />
<Route path="/travel-agency-gostivar" element={<TravelAgencyGostivar />} />
<Route path="/testimonials" element={<Testimonials />} />

    <Route path="/admin" element={<AdminLayout />}>
      <Route path="login" element={<AdminLogin />} />
      <Route
        path="offers"
        element={
          <ProtectedRoute>
            <AdminOffers />
          </ProtectedRoute>
        }
      />
    </Route>

    <Route path="*" element={<NotFound />} />
  </>
);

export default AppRoutes;
