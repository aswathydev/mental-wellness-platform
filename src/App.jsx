// import { BrowserRouter, Routes, Route } from 'react-router-dom'
// import MainLayout from './layouts/MainLayout'
// import HomePage from './pages/HomePage'
// import LoginPage from './pages/LoginPage'
// import RegisterPage from './pages/RegisterPage'
// import ProvidersPage from './pages/ProvidersPage'
// import ProviderDetailPage from './pages/ProviderDetailPage'
// import MoodPage from './pages/MoodPage'
// import FeedPage from './pages/FeedPage'
// import GamesPage from './pages/GamesPage'
// import ProfilePage from './pages/ProfilePage'
// import AdminLayout from './pages/admin/AdminLayout'
// import DashboardHome from './pages/admin/DashboardHome'
// import ModerationPage from './pages/admin/ModerationPage'
// import HelpBannersPage from './pages/admin/HelpBannersPage'
// import UsersPage from './pages/admin/UsersPage'
// import RequireAdmin from './pages/admin/RequireAdmin'
// import RequireProvider from './pages/provider/RequireProvider'
// import ProviderRegisterPage from './pages/provider/ProviderRegisterPage'
// import ProviderDashboardPage from './pages/provider/ProviderDashboardPage'

// export default function App() {
//   return (
//     <BrowserRouter>
//       <Routes>
//         <Route path="/login" element={<LoginPage />} />
//         <Route path="/register" element={<RegisterPage />} />
//         <Route path="/provider/register" element={<ProviderRegisterPage />} />
//         <Route path="/admin/login" element={<LoginPage />} />
        
//         <Route element={<RequireAdmin />}>
//           <Route path="/admin" element={<AdminLayout />}>
//             <Route index element={<DashboardHome />} />
//             <Route path="moderation" element={<ModerationPage />} />
//             <Route path="help-banners" element={<HelpBannersPage />} />
//             <Route path="users" element={<UsersPage />} />
//           </Route>
//         </Route>


//         <Route element={<MainLayout />}>
//           <Route element={<RequireProvider />}>
//             <Route path="/provider/dashboard" element={<ProviderDashboardPage />} />
//           </Route>

//           <Route path="/" element={<HomePage />} />
//           <Route path="/providers" element={<ProvidersPage />} />
//           <Route path="/providers/:id" element={<ProviderDetailPage />} />
//           <Route path="/mood-history" element={<MoodPage />} />
//           <Route path="/feed" element={<FeedPage />} />
//           <Route path="/games" element={<GamesPage />} />
//           <Route path="/profile" element={<ProfilePage />} />

//         </Route>
//       </Routes>
//     </BrowserRouter>
//   )
// }


import AppRoutes from './routes/AppRoutes';

export default function App() {
  return <AppRoutes />;
}