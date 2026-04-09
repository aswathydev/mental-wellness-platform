import { BrowserRouter, Routes, Route } from 'react-router-dom';
import PublicRoutes from './PublicRoutes';
import AdminRoutes from './AdminRoutes';
import ProviderRoutes from './ProviderRoutes';
import React from 'react';

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        {PublicRoutes()}
        {AdminRoutes()}
        {ProviderRoutes()}
      </Routes>
    </BrowserRouter>
  );
}