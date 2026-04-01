import { Link } from 'react-router-dom'
import { providers } from '../data/mockData'

export default function ProvidersPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-semibold text-slate-900 dark:text-purple">Service providers</h1>
      </div>

      <ul className="grid gap-4 md:grid-cols-2">
        {providers.map((p) => (
          <li
            key={p.id}
            className="rounded-2xl bg-gradient-to-br from-indigo-50 via-white to-teal-50 dark:from-indigo-950/40 dark:via-slate-900 dark:to-teal-950/40 border border-white-100/70 dark:border-white-800 p-6 sm:p-10"
          >
            <div className="flex items-start justify-between gap-2">
              <div>
                <h2 className="font-semibold text-lg text-slate-900 dark:text-white">{p.name}</h2>
                <p className="text-sm text-slate-500">{p.role}</p>
              </div>
              <div className="text-right text-sm">
                <div className="font-medium text-amber-600">★ {p.rating}</div>
                <div className="text-slate-400">{p.reviews} reviews</div>
              </div>
            </div>
            <p className="mt-3 text-sm text-slate-600 dark:text-slate-300">{p.bio}</p>
            <div className="mt-3 flex flex-wrap gap-2">
              {p.services.map((s) => (
                <span
                  key={s}
                  className="text-xs rounded-full bg-slate-100 dark:bg-slate-800 px-2 py-0.5 text-slate-600 dark:text-slate-300"
                >
                  {s}
                </span>
              ))}
            </div>
            <Link
              to={`/providers/${p.id}`}
              className="mt-4 inline-block text-sm font-medium text-teal-700 dark:text-teal-300 hover:underline"
            >
              View profile & reviews →
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}
