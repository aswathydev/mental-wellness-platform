import { Link, useParams } from 'react-router-dom'
import { providers } from '../data/mockData'

const sampleReviews = [
  { id: 'r1', user: 'Jamie', stars: 5, text: 'Warm and practical — helped me with anxiety tools.' },
  { id: 'r2', user: 'Riley', stars: 4, text: 'Great listener. Scheduling was easy.' },
]

export default function ProviderDetailPage() {
  const { id } = useParams()
  const p = providers.find((x) => x.id === id)

  if (!p) {
    return (
      <div className="text-center py-12">
        <p className="text-slate-500">Provider not found.</p>
        <Link to="/providers" className="mt-4 inline-block text-teal-700 dark:text-teal-300 font-medium">
          ← Back to directory
        </Link>
      </div>
    )
  }

  return (
    <div className="max-w-2xl mx-auto space-y-8 text-left">
      <Link to="/providers" className="text-sm text-teal-700 dark:text-teal-300 hover:underline">
        ← All providers
      </Link>

      <header className="rounded-2xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900/50 p-6">
        <h1 className="text-2xl font-semibold text-slate-900 dark:text-white">{p.name}</h1>
        <p className="text-slate-500">{p.role}</p>
        <div className="mt-3 flex items-center gap-3">
          <span className="text-amber-600 font-medium">★ {p.rating}</span>
          <span className="text-slate-400 text-sm">{p.reviews} reviews</span>
        </div>
        <p className="mt-4 text-slate-600 dark:text-slate-300">{p.bio}</p>
       
        <h2 className="mt-6 text-sm font-semibold uppercase tracking-wide text-slate-400">Services</h2>
        <ul className="mt-2 flex flex-wrap gap-2">
          {p.services.map((s) => (
            <li
              key={s}
              className="text-sm rounded-lg bg-teal-50 dark:bg-teal-950/40 text-teal-800 dark:text-teal-200 px-3 py-1"
            >
              {s}
            </li>
          ))}
        </ul>
      </header>

      <section className="rounded-2xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900/50 p-6">
  <h2 className="text-lg font-semibold text-slate-900 dark:text-white">
    Book a session
  </h2>
  <p className="text-xs text-green-600 mt-1">
  Available today
</p>
<p className="text-sm text-slate-500 mt-2">
  45 mins • ₹999 per session
</p>
  <form
    className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4"
    onSubmit={(e) => e.preventDefault()}
  >
    {/* Date */}
    <label className="block text-sm">
      <span className="text-slate-600 dark:text-slate-300">Select date</span>
      <input
        type="date"
        className="mt-1 w-full rounded-lg border border-slate-200 dark:border-slate-600 bg-white dark:bg-slate-900 px-3 py-2 text-sm"
      />
    </label>

    {/* Time */}
    <label className="block text-sm">
      <span className="text-slate-600 dark:text-slate-300">Select time</span>
      <select className="mt-1 w-full rounded-lg border border-slate-200 dark:border-slate-600 bg-white dark:bg-slate-900 px-3 py-2 text-sm">
        <option>09:00 AM</option>
        <option>10:30 AM</option>
        <option>01:00 PM</option>
        <option>03:30 PM</option>
        <option>06:00 PM</option>
      </select>
    </label>

    {/* Session Type */}
    <label className="block text-sm md:col-span-2">
      <span className="text-slate-600 dark:text-slate-300">Session type</span>
      <select className="mt-1 w-full rounded-lg border border-slate-200 dark:border-slate-600 bg-white dark:bg-slate-900 px-3 py-2 text-sm">
        <option>Video call</option>
        <option>Audio call</option>
        <option>Chat session</option>
      </select>
    </label>

    {/* Notes */}
    <label className="block text-sm md:col-span-2">
      <span className="text-slate-600 dark:text-slate-300">
        Notes (optional)
      </span>
      <textarea
        rows={3}
        placeholder="Anything you'd like the provider to know..."
        className="mt-1 w-full rounded-lg border border-slate-200 dark:border-slate-600 bg-white dark:bg-slate-900 px-3 py-2 text-sm"
      />
    </label>

    {/* CTA */}
    <div className="md:col-span-2">
      <button
        type="submit"
        className="w-full rounded-lg bg-teal-600 hover:bg-teal-700 text-white px-4 py-2 text-sm font-medium"
      >
        Book appointment
      </button>
    </div>
  </form>
</section>

      <section>
        <h2 className="text-lg font-semibold text-slate-900 dark:text-purple">Reviews & ratings</h2>
        <form className="mt-4 rounded-xl border border-slate-200 dark:border-slate-700 p-4 space-y-3" onSubmit={(e) => e.preventDefault()}>
          <label className="block text-sm">
            <span className="text-slate-600 dark:text-slate-300">Your rating</span>
            <select className="mt-1 w-full rounded-lg border border-slate-200 dark:border-slate-600 bg-white dark:bg-slate-900 px-3 py-2 text-sm">
              <option>5</option>
              <option>4</option>
              <option>3</option>
              <option>2</option>
              <option>1</option>
            </select>
          </label>
          <label className="block text-sm">
            <span className="text-slate-600 dark:text-slate-300">Review</span>
            <textarea
              rows={3}
              className="mt-1 w-full rounded-lg border border-slate-200 dark:border-slate-600 bg-white dark:bg-slate-900 px-3 py-2 text-sm"
              placeholder="Share your experience (not saved in this UI)."
            />
          </label>
          <button type="submit" className="rounded-lg bg-teal-600 text-white px-4 py-2 text-sm font-medium">
            Submit review
          </button>
        </form>

        <ul className="mt-6 space-y-4">
          {sampleReviews.map((r) => (
            <li key={r.id} className="rounded-xl border border-slate-100 dark:border-slate-800 p-4">
              <div className="flex items-center justify-between">
                <span className="font-medium text-slate-900 dark:text-white">{r.user}</span>
                <span className="text-amber-600 text-sm">{'★'.repeat(r.stars)}</span>
              </div>
              <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">{r.text}</p>
            </li>
          ))}
        </ul>
      </section>
    </div>
  )
}
