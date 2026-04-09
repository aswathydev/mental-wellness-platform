import { useEffect, useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { useAuth } from '../../context/AuthContext'
import React from 'react'

export default function AdminLoginPage() {
  const navigate = useNavigate()
  const location = useLocation()
  const { login, user } = useAuth()
  const from = location.state?.from

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')

  useEffect(() => {
    if (!user) return
    if (user.role === 'admin') {
      navigate(from && String(from).startsWith('/admin') ? from : '/admin', {
        replace: true,
      })
      return
    }
    if (user.role === 'provider') {
      navigate(from && String(from).startsWith('/provider') ? from : '/provider/dashboard', {
        replace: true,
      })
      return
    }
    navigate(from && !String(from).startsWith('/admin') ? from : '/', { replace: true })
  }, [user, from, navigate])

  function handleSubmit(e) {
    e.preventDefault()
    setError('')
    const result = login(email, password)
    if (!result.ok) {
      setError(result.error)
      return
    }
    if (result.role === 'admin') {
      navigate(from && String(from).startsWith('/admin') ? from : '/admin', { replace: true })
    } else if (result.role === 'provider') {
      navigate(from && String(from).startsWith('/provider') ? from : '/provider/dashboard', {
        replace: true,
      })
    } else {
      navigate(from && !String(from).startsWith('/admin') ? from : '/', { replace: true })
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-50 via-white to-teal-50 dark:from-indigo-950/40 dark:via-slate-900 dark:to-teal-950/40 px-4">
      <div className="w-full max-w-md bg-white/80 dark:bg-slate-900/70 backdrop-blur-xl rounded-2xl shadow-xl border border-slate-200/60 dark:border-slate-700 p-8">
        <div className="text-center">
          <h1 className="text-2xl font-semibold text-slate-900 dark:text-white">
            Welcome Back 💙
          </h1>
          {/* <p className="mt-2 text-sm text-slate-500 dark:text-slate-400">
            Sign in as member, provider, or admin
          </p> */}
        </div>

        <form className="mt-6 space-y-4" onSubmit={handleSubmit}>
          {error && (
            <p
              className="rounded-xl bg-rose-50 dark:bg-rose-950/40 border border-rose-200 dark:border-rose-900/50 px-3 py-2 text-sm text-rose-800 dark:text-rose-200"
              role="alert"
            >
              {error}
            </p>
          )}

          <label className="block text-left">
            <span className="text-sm font-medium text-slate-700 dark:text-slate-200">
              Email
            </span>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@example.com"
              autoComplete="email"
              required
              className="mt-1 w-full rounded-xl border border-slate-200 dark:border-slate-600 bg-white/70 dark:bg-slate-800 px-3 py-2.5 text-sm focus:ring-2 focus:ring-teal-400 outline-none"
            />
          </label>

          <label className="block text-left">
            <span className="text-sm font-medium text-slate-700 dark:text-slate-200">
              Password
            </span>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••"
              autoComplete="current-password"
              required
              className="mt-1 w-full rounded-xl border border-slate-200 dark:border-slate-600 bg-white/70 dark:bg-slate-800 px-3 py-2.5 text-sm focus:ring-2 focus:ring-teal-400 outline-none"
            />
          </label>

          <button
            type="submit"
            className="w-full rounded-xl bg-gradient-to-r from-indigo-500 to-teal-500 text-white py-2.5 text-sm font-medium hover:opacity-90 transition"
          >
            Log in
          </button>
        </form>
      </div>
    </div>
  )
}
