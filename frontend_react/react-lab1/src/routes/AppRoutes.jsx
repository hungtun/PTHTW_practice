import { LoginPage, HomePage } from "../pages/public/HomePage";
import { RegisterPage } from "../pages/public/RegisterPage";
import { NotFoundPage } from "../pages/NotFoundPage";
import { PublicLayout } from "../layouts/PublicLayout";
import { UserLayout } from "../layouts/UserLayout";
import { Route, Routes } from "react-router-dom";
import { AdminLayout } from "../layouts/AdminLayout";

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<PublicLayout />}>
        <Route path="home" element={<HomePage />} />
        <Route path="login" element={<LoginPage />} />
        <Route path="register" element={<RegisterPage />} />
      </Route>

      <Route path="admin" element={<AdminLayout />}>
        {/* Admin-specific routes can be added here */}
      </Route>

      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}
