import { Link } from 'react-router-dom'

export default function LoginPage() {
  return (
    <div className="max-w-md mx-auto">
      <h1 className="text-2xl font-semibold text-slate-900 dark:text-white">Sign in</h1>
      <form className="mt-8 space-y-4 text-left" onSubmit={(e) => e.preventDefault()}>
        <label className="block">
          <span className="text-sm font-medium text-slate-700 dark:text-slate-200">Email</span>
          <input
            type="email"
            className="mt-1 w-full rounded-xl border border-slate-200 dark:border-slate-600 bg-white dark:bg-slate-900 px-3 py-2.5 text-sm"
            placeholder="you@example.com"
            autoComplete="email"
          />
        </label>
        <label className="block">
          <span className="text-sm font-medium text-slate-700 dark:text-slate-200">Password</span>
          <input
            type="password"
            className="mt-1 w-full rounded-xl border border-slate-200 dark:border-slate-600 bg-white dark:bg-slate-900 px-3 py-2.5 text-sm"
            placeholder="••••••••"
            autoComplete="current-password"
          />
        </label>
        <button
          type="submit"
          className="w-full rounded-xl bg-teal-600 text-white py-2.5 text-sm font-medium hover:bg-teal-700"
        >
          Log in
        </button>
      </form>
      <p className="mt-6 text-center text-sm text-slate-500">
        No account?{' '}
        <Link to="/" className="font-medium text-teal-700 dark:text-teal-300 hover:underline">
          Register
        </Link>
      </p>
    </div>
  )
}
