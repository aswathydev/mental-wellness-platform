import { useState } from 'react'
import { useAuth } from '../../context/AuthContext'
import {
  addAvailabilitySlot,
  getProviderByEmail,
  removeAvailabilitySlot,
  toggleAvailabilitySlot,
} from '../../lib/providerStore'

function todayDate() {
  return new Date().toISOString().slice(0, 10)
}

export default function ProviderDashboardPage() {
  const { user } = useAuth()
  const [date, setDate] = useState(todayDate())
  const [time, setTime] = useState('09:00')
  const [version, setVersion] = useState(0)

  const provider = user?.email ? getProviderByEmail(user.email) : null

  if (!provider) {
    return <p className="text-slate-500">Provider account not found.</p>
  }

  function onAddSlot(event) {
    event.preventDefault()
    addAvailabilitySlot(provider.id, date, time)
    setVersion((v) => v + 1)
  }

  function onToggle(slotId) {
    toggleAvailabilitySlot(provider.id, slotId)
    setVersion((v) => v + 1)
  }

  function onRemove(slotId) {
    removeAvailabilitySlot(provider.id, slotId)
    setVersion((v) => v + 1)
  }

  return (
    <div key={version} className="max-w-4xl mx-auto space-y-8">
      <div className="rounded-2xl border border-slate-200 bg-white p-6">
        <h1 className="text-2xl font-semibold text-slate-900">Provider Dashboard</h1>
        <p className="mt-1 text-sm text-slate-500">Manage your professional details and availability.</p>
      </div>

      <section className="rounded-2xl border border-slate-200 bg-white p-6">
        <h2 className="text-lg font-semibold text-slate-900">Profile details</h2>
        <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
          <p><span className="font-medium">Name:</span> {provider.name}</p>
          <p><span className="font-medium">Email:</span> {provider.email}</p>
          <p><span className="font-medium">Specialization:</span> {provider.specialization}</p>
          <p><span className="font-medium">Qualification:</span> {provider.qualification}</p>
          <p><span className="font-medium">License:</span> {provider.licenseNumber}</p>
          <p><span className="font-medium">Experience:</span> {provider.experienceYears} years</p>
          <p><span className="font-medium">Phone:</span> {provider.phone}</p>
          <p><span className="font-medium">Services:</span> {provider.services.join(', ') || '—'}</p>
        </div>
        <p className="mt-3 text-sm text-slate-600">{provider.bio}</p>
        <div className="mt-3">
          <p className="text-sm font-medium text-slate-700">Certificates</p>
          {provider.certificates.length > 0 ? (
            <ul className="mt-1 text-sm text-slate-500 list-disc pl-5">
              {provider.certificates.map((file) => (
                <li key={file}>{file}</li>
              ))}
            </ul>
          ) : (
            <p className="text-sm text-slate-500">No certificates uploaded.</p>
          )}
        </div>
      </section>

      <section className="rounded-2xl border border-slate-200 bg-white p-6">
        <h2 className="text-lg font-semibold text-slate-900">Manage availability</h2>
        <form className="mt-4 grid grid-cols-1 sm:grid-cols-4 gap-3" onSubmit={onAddSlot}>
          <input
            type="date"
            value={date}
            min={todayDate()}
            onChange={(e) => setDate(e.target.value)}
            className="rounded-xl border border-slate-200 px-3 py-2 text-sm"
          />
          <input
            type="time"
            value={time}
            onChange={(e) => setTime(e.target.value)}
            className="rounded-xl border border-slate-200 px-3 py-2 text-sm"
          />
          <button
            type="submit"
            className="sm:col-span-2 rounded-xl bg-teal-600 text-white px-4 py-2 text-sm font-medium hover:bg-teal-700"
          >
            Add available slot
          </button>
        </form>

        <div className="mt-5 space-y-3">
          {provider.availability.length === 0 ? (
            <p className="text-sm text-slate-500">No slots added yet.</p>
          ) : (
            provider.availability.map((slot) => (
              <div
                key={slot.id}
                className="flex flex-wrap items-center justify-between gap-3 rounded-xl border border-slate-200 px-4 py-3 text-sm"
              >
                <p className="text-slate-700">
                  <span className="font-medium">{slot.date}</span> at <span className="font-medium">{slot.time}</span>
                </p>
                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    onClick={() => onToggle(slot.id)}
                    className={`rounded-lg px-3 py-1.5 text-xs font-medium ${
                      slot.available
                        ? 'bg-emerald-100 text-emerald-700'
                        : 'bg-amber-100 text-amber-700'
                    }`}
                  >
                    {slot.available ? 'Available' : 'Unavailable'}
                  </button>
                  <button
                    type="button"
                    onClick={() => onRemove(slot.id)}
                    className="rounded-lg border border-slate-200 px-3 py-1.5 text-xs font-medium text-slate-600 hover:bg-slate-50"
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))
          )}
        </div>
      </section>
    </div>
  )
}
