import { useState } from 'react'
import { NavLink, Link } from 'react-router-dom'
import logo4 from '../assets/logo4.png' // adjust path

const links = [
  { to: '/', label: 'Home' },
  { to: '/', label: 'About' },
  { to: '/', label: 'Features' },
  { to: '/', label: 'Community' },
  { to: '/providers', label: 'Providers' },
]

const navClass = ({ isActive }) =>
  [
    'px-3 py-2 text-sm font-medium transition-all duration-200',
    isActive
      ? 'text-teal-700'
      : 'text-slate-600 hover:text-teal-600',
  ].join(' ')

export default function Nav() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-40 bg-white/100 backdrop-blur-xl border-b border-slate-200/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between h-16">

        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 font-semibold text-slate-800">
          <img src={logo4} alt="Heal Together" className="h-19 w-19 object-contain" />
          {/* <span className="hidden sm:inline text-lg font-semibold bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
            Heal Together
          </span> */}
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-6">
          {links.map((l) => (
            <NavLink key={l.to} to={l.to} className={navClass} end={l.to === '/'}>
              {l.label}
            </NavLink>
          ))}
        </nav>

        {/* Right Actions */}
        <div className="hidden lg:flex items-center gap-3">
          {/* Mood History Icon */}
          <Link
            to="/mood-history"
            className="p-2 rounded-full hover:bg-slate-100 transition"
            title="Mood History"
          >
            <svg
              className="h-5 w-5 text-slate-600 hover:text-teal-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 19h16M4 15l4-4 4 4 6-6"
              />
            </svg>
          </Link>

          {/* Sign Up */}
          <Link
            to="/register"
            className="px-5 py-2 text-sm font-semibold rounded-full bg-gradient-to-r from-blue-500 to-indigo-500 text-white shadow-sm hover:opacity-90 transition"
          >
            Sign Up
          </Link>
        </div>

        {/* <div className="hidden lg:flex items-center gap-3">
          <Link
            to="/register"
            className="px-5 py-2 text-sm font-semibold rounded-full bg-gradient-to-r from-blue-500 to-indigo-500 text-white shadow-sm hover:opacity-90 transition"
          >
            Sign Up
          </Link>
        </div> */}

        {/* Mobile */}
        <div className="flex items-center gap-2 lg:hidden">
          <button
            type="button"
            className="rounded-lg border border-slate-200 p-2"
            onClick={() => setOpen((v) => !v)}
          >
            <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {open ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="lg:hidden bg-white/90 backdrop-blur-xl border-t border-slate-200 px-4 py-4 flex flex-col gap-3">
          {links.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              className={navClass}
              onClick={() => setOpen(false)}
            >
              {l.label}
            </NavLink>
          ))}

          <Link
            to="/mood-history"
            className="flex items-center gap-2 px-3 py-2 text-sm text-slate-600"
            onClick={() => setOpen(false)}
          >
            <svg
              className="h-5 w-5 text-slate-600 hover:text-teal-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 19h16M4 15l4-4 4 4 6-6"
              />
            </svg>
            Mood History
          </Link>

          <Link
            to="/register"
            className="text-center rounded-full bg-gradient-to-r from-blue-500 to-indigo-500 text-white py-2 font-medium"
          >
            Sign Up Free
          </Link>
        </div>
      )}
    </header>
  )
}
