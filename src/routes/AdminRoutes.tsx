
import { Route, Navigate } from 'react-router-dom';
import AdminLayout from '../pages/admin/AdminLayout';
import DashboardHome from '../pages/admin/DashboardHome';
import ModerationPage from '../pages/admin/ModerationPage';
import HelpBannersPage from '../pages/admin/HelpBannersPage';
import UsersPage from '../pages/admin/UsersPage';
import RequireAdmin from '../pages/admin/RequireAdmin';
import AdminLoginPage from '../pages/admin/AdminLoginPage';
import { useAuth } from '../context/AuthContext';
import React from 'react';
import PostsPage from '../pages/admin/PostsPage';
import ReportsPage from '../pages/admin/ReportsPage';
import ProvidersPage from '../pages/admin/ProvidersPage';

// 🔒 Prevent logged-in admin from seeing login page
function AdminLoginRoute() {
  const { user } = useAuth();

  if (user?.role === 'admin') {
    return <Navigate to="/admin" replace />;
  }

  return <AdminLoginPage />;
}

export default function AdminRoutes() {
  return (
    <>
      {/* Admin Login */}
      <Route path="/admin/login" element={<AdminLoginRoute />} />

      {/* Protected Admin Routes */}
      <Route element={<RequireAdmin />}>
        <Route path="/admin" element={<AdminLayout />}>
          <Route index element={<DashboardHome />} />
          <Route path="moderation" element={<ModerationPage />} />
          <Route path="help-banners" element={<HelpBannersPage />} />
          <Route path="users" element={<UsersPage />} />
          <Route path="posts" element={<PostsPage />} />
          <Route path="reports" element={<ReportsPage />} />
          <Route path="providers" element={<ProvidersPage />} />
          {/*<Route path="reviews" element={<ReviewsPage />} />
          <Route path="settings" element={<SettingsPage />} /> */}
        </Route>
      </Route>

      {/* Optional: Catch invalid admin routes */}
      {/* <Route path="/admin/unknown" element={<Navigate to="/admin" replace />} /> */}
    </>
  );
}