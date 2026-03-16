import { Routes, Route } from "react-router-dom";
import AppProviders from "./providers";
import AppRoutes from "./routes";

export default function App() {
  return (
    <AppProviders>
      <Routes>
        {AppRoutes}
      
      </Routes>  <Route path="*" element={<div className="p-6">Not Found</div>} />
    </AppProviders>
  );
}
