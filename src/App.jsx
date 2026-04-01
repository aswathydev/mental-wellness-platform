import { BrowserRouter, Routes, Route } from 'react-router-dom'
import MainLayout from './layouts/MainLayout'
import HomePage from './pages/HomePage'
import LoginPage from './pages/LoginPage'
import RegisterPage from './pages/RegisterPage'
import ProvidersPage from './pages/ProvidersPage'
import ProviderDetailPage from './pages/ProviderDetailPage'
import MoodPage from './pages/MoodPage'
import FeedPage from './pages/FeedPage'
import GamesPage from './pages/GamesPage'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />

        <Route element={<MainLayout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/providers" element={<ProvidersPage />} />
          <Route path="/providers/:id" element={<ProviderDetailPage />} />
          <Route path="/mood-history" element={<MoodPage />} />
          <Route path="/feed" element={<FeedPage />} /> 
          <Route path="/games" element={<GamesPage />} />

        </Route>
      </Routes>
    </BrowserRouter>
  )
}
