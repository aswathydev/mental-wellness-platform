import { Route } from 'react-router-dom';
import RequireProvider from '../pages/provider/RequireProvider';
import ProviderRegisterPage from '../pages/provider/ProviderRegisterPage';
import ProviderDashboardPage from '../pages/provider/ProviderDashboardPage';
import React from 'react';
import MainLayout from '../layouts/MainLayout';
import AppointmentsPage from '../pages/provider/AppointmentsPage';
import AvailabilityPage from '../pages/provider/AvailabilityPage';
import ServicesPage from '../pages/provider/ServicesPage';
import ReviewsPage from '../pages/provider/ReviewsPage';
import EarningsPage from '../pages/provider/EarningsPage';
import ProfilePage from '../pages/provider/ProfilePage';

export default function ProviderRoutes() {
  return (
    <>
      <Route path="/provider/register" element={<ProviderRegisterPage />} />
      <Route element={<MainLayout />}>
        {/* <Route element={<RequireProvider />}> */}
        <Route path="/provider/dashboard" element={<ProviderDashboardPage />} />
        {/* <Route path="/provider">
          <Route path="dashboard" element={<ProviderDashboardPage />} />
          <Route path="appointments" element={<AppointmentsPage />} />
          <Route path="availability" element={<AvailabilityPage />} />
          <Route path="services" element={<ServicesPage />} />
          <Route path="reviews" element={<ReviewsPage />} />
          <Route path="earnings" element={<EarningsPage />} />
          <Route path="profile" element={<ProfilePage />} />
        </Route> */}
      </Route>
    </>
  );
}