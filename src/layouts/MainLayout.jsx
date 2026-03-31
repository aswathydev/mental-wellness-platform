import { Outlet } from 'react-router-dom'
import Nav from '../components/Nav'
import Footer from '../components/Footer'

export default function MainLayout() {
  return (
    <div className="min-h-svh flex flex-col text-slate-800 dark:text-slate-100">
      <Nav />
      <main className="flex-1 w-full max-w-6xl mx-auto px-4 sm:px-6 py-6 sm:py-8">
        <Outlet />
      </main>
      <footer className="border-t border-slate-200/80 dark:border-slate-700/80 py-6 text-center text-sm text-slate-500">
        {/* Heal Together - Mental Wellness Platform
        <p></p> */}
        <Footer />
      </footer>
    </div>
  )
}
