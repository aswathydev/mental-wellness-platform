import { Route } from 'react-router-dom';
import RequireProvider from '../pages/provider/RequireProvider';
import ProviderRegisterPage from '../pages/provider/ProviderRegisterPage';
import ProviderDashboardPage from '../pages/provider/ProviderDashboardPage';
import React from 'react';
import MainLayout from '../layouts/MainLayout';

export default function ProviderRoutes() {
  return (
    <>
      <Route path="/provider/register" element={<ProviderRegisterPage />} />
      <Route element={<MainLayout />}>
      {/* <Route element={<RequireProvider />}> */}
        <Route path="/provider/dashboard" element={<ProviderDashboardPage />} />
      </Route>
    </>
  );
}