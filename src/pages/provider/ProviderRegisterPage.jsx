import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { registerProviderAccount } from '../../lib/providerStore'

export default function ProviderRegisterPage() {
  const navigate = useNavigate()
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: '',
    specialization: '',
    qualification: '',
    licenseNumber: '',
    experienceYears: '',
    services: '',
    bio: '',
  })
  const [certificates, setCertificates] = useState([])
  const [error, setError] = useState('')
  const [success, setSuccess] = useState('')

  function updateField(key, value) {
    setForm((prev) => ({ ...prev, [key]: value }))
  }

  function onCertificateChange(event) {
    const files = Array.from(event.target.files ?? [])
    const names = files.map((f) => f.name)
    setCertificates(names)
  }

  function onSubmit(event) {
    event.preventDefault()
    setError('')
    setSuccess('')

    if (form.password.length < 6) {
      setError('Password should be at least 6 characters.')
      return
    }
    if (form.password !== form.confirmPassword) {
      setError('Passwords do not match.')
      return
    }

    const result = registerProviderAccount({
      ...form,
      certificates,
    })

    if (!result.ok) {
      setError(result.error)
      return
    }

    setSuccess('Provider account registered. You can now log in.')
    setTimeout(() => navigate('/login', { replace: true }), 900)
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-50 via-white to-teal-50 dark:from-indigo-950/40 dark:via-slate-900 dark:to-teal-950/40 px-4 py-8">
      <div className="w-full max-w-3xl bg-white/80 dark:bg-slate-900/70 backdrop-blur-xl rounded-2xl shadow-xl border border-slate-200/60 dark:border-slate-700 p-8">
        <div className="text-center">
          <h1 className="text-2xl font-semibold text-slate-900 dark:text-white">
            Provider Registration
          </h1>
          <p className="mt-2 text-sm text-slate-500 dark:text-slate-400">
            Submit professional details and certificates to create your provider account.
          </p>
        </div>

        <form className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4" onSubmit={onSubmit}>
          {error && (
            <p className="md:col-span-2 rounded-xl bg-rose-50 border border-rose-200 px-3 py-2 text-sm text-rose-700">
              {error}
            </p>
          )}
          {success && (
            <p className="md:col-span-2 rounded-xl bg-emerald-50 border border-emerald-200 px-3 py-2 text-sm text-emerald-700">
              {success}
            </p>
          )}

          <label className="block text-left">
            <span className="text-sm font-medium text-slate-700 dark:text-slate-200">Full name</span>
            <input required value={form.name} onChange={(e) => updateField('name', e.target.value)} className="mt-1 w-full rounded-xl border border-slate-200 px-3 py-2.5 text-sm" />
          </label>
          <label className="block text-left">
            <span className="text-sm font-medium text-slate-700 dark:text-slate-200">Email</span>
            <input type="email" required value={form.email} onChange={(e) => updateField('email', e.target.value)} className="mt-1 w-full rounded-xl border border-slate-200 px-3 py-2.5 text-sm" />
          </label>
          <label className="block text-left">
            <span className="text-sm font-medium text-slate-700 dark:text-slate-200">Phone</span>
            <input required value={form.phone} onChange={(e) => updateField('phone', e.target.value)} className="mt-1 w-full rounded-xl border border-slate-200 px-3 py-2.5 text-sm" />
          </label>
          <label className="block text-left">
            <span className="text-sm font-medium text-slate-700 dark:text-slate-200">Specialization</span>
            <input required value={form.specialization} onChange={(e) => updateField('specialization', e.target.value)} placeholder="Clinical Psychologist" className="mt-1 w-full rounded-xl border border-slate-200 px-3 py-2.5 text-sm" />
          </label>
          <label className="block text-left">
            <span className="text-sm font-medium text-slate-700 dark:text-slate-200">Qualification</span>
            <input required value={form.qualification} onChange={(e) => updateField('qualification', e.target.value)} placeholder="MSc Psychology" className="mt-1 w-full rounded-xl border border-slate-200 px-3 py-2.5 text-sm" />
          </label>
          <label className="block text-left">
            <span className="text-sm font-medium text-slate-700 dark:text-slate-200">License number</span>
            <input required value={form.licenseNumber} onChange={(e) => updateField('licenseNumber', e.target.value)} className="mt-1 w-full rounded-xl border border-slate-200 px-3 py-2.5 text-sm" />
          </label>
          <label className="block text-left">
            <span className="text-sm font-medium text-slate-700 dark:text-slate-200">Years of experience</span>
            <input type="number" min="0" required value={form.experienceYears} onChange={(e) => updateField('experienceYears', e.target.value)} className="mt-1 w-full rounded-xl border border-slate-200 px-3 py-2.5 text-sm" />
          </label>
          <label className="block text-left">
            <span className="text-sm font-medium text-slate-700 dark:text-slate-200">Services (comma separated)</span>
            <input required value={form.services} onChange={(e) => updateField('services', e.target.value)} placeholder="CBT, Anxiety, Depression" className="mt-1 w-full rounded-xl border border-slate-200 px-3 py-2.5 text-sm" />
          </label>

          <label className="block text-left md:col-span-2">
            <span className="text-sm font-medium text-slate-700 dark:text-slate-200">Bio</span>
            <textarea rows={3} required value={form.bio} onChange={(e) => updateField('bio', e.target.value)} className="mt-1 w-full rounded-xl border border-slate-200 px-3 py-2.5 text-sm" />
          </label>

          <label className="block text-left md:col-span-2">
            <span className="text-sm font-medium text-slate-700 dark:text-slate-200">Upload certificates</span>
            <input
              type="file"
              multiple
              accept=".pdf,.png,.jpg,.jpeg"
              onChange={onCertificateChange}
              className="mt-1 w-full rounded-xl border border-slate-200 px-3 py-2.5 text-sm"
            />
            {certificates.length > 0 && (
              <p className="mt-2 text-xs text-slate-500">Selected: {certificates.join(', ')}</p>
            )}
          </label>

          <label className="block text-left">
            <span className="text-sm font-medium text-slate-700 dark:text-slate-200">Password</span>
            <input type="password" required value={form.password} onChange={(e) => updateField('password', e.target.value)} className="mt-1 w-full rounded-xl border border-slate-200 px-3 py-2.5 text-sm" />
          </label>
          <label className="block text-left">
            <span className="text-sm font-medium text-slate-700 dark:text-slate-200">Confirm password</span>
            <input type="password" required value={form.confirmPassword} onChange={(e) => updateField('confirmPassword', e.target.value)} className="mt-1 w-full rounded-xl border border-slate-200 px-3 py-2.5 text-sm" />
          </label>

          <button type="submit" className="md:col-span-2 w-full rounded-xl bg-gradient-to-r from-indigo-500 to-teal-500 text-white py-2.5 text-sm font-medium hover:opacity-90 transition">
            Register as provider
          </button>
        </form>

        <p className="mt-6 text-center text-sm text-slate-500 dark:text-slate-400">
          Already have a provider account?{' '}
          <Link to="/login" className="font-medium text-teal-600 hover:underline">
            Sign in
          </Link>
        </p>
      </div>
    </div>
  )
}
