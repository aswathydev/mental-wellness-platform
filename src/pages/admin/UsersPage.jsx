import { FaUserCircle, FaEnvelope, FaCalendarAlt } from 'react-icons/fa'

/** Placeholder rows until user accounts are backed by MongoDB */
const sampleUsers = [
  {
    id: 'u1',
    name: 'Anjali K.',
    email: 'anjali@example.com',
    role: 'Member',
    joined: 'Mar 12, 2026',
    status: 'active',
  },
  {
    id: 'u2',
    name: 'Rahul M.',
    email: 'rahul@example.com',
    role: 'Member',
    joined: 'Mar 8, 2026',
    status: 'active',
  },
  {
    id: 'u3',
    name: 'Dr. Samira Patel',
    email: 'samira@wellness.example',
    role: 'Provider',
    joined: 'Feb 1, 2026',
    status: 'active',
  },
  {
    id: 'u4',
    name: 'Anonymous user',
    email: '—',
    role: 'Member',
    joined: 'Apr 1, 2026',
    status: 'suspended',
  },
]

export default function UsersPage() {
  return (
    <div className="mx-auto max-w-5xl space-y-6">
      <div>
        <h2 className="text-2xl font-semibold text-slate-900 dark:text-white">Users</h2>
        <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
          Preview of how member and provider accounts will appear. Connect your auth service to
          load real users.
        </p>
      </div>

      <div className="overflow-hidden rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/80 shadow-sm">
        <div className="overflow-x-auto">
          <table className="w-full min-w-[640px] text-left text-sm">
            <thead className="border-b border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800/50">
              <tr>
                <th className="px-4 py-3 font-semibold text-slate-700 dark:text-slate-200">
                  User
                </th>
                <th className="px-4 py-3 font-semibold text-slate-700 dark:text-slate-200">
                  Role
                </th>
                <th className="px-4 py-3 font-semibold text-slate-700 dark:text-slate-200">
                  Joined
                </th>
                <th className="px-4 py-3 font-semibold text-slate-700 dark:text-slate-200">
                  Status
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
              {sampleUsers.map((u) => (
                <tr key={u.id} className="hover:bg-slate-50/80 dark:hover:bg-slate-800/30">
                  <td className="px-4 py-3">
                    <div className="flex items-center gap-3">
                      <FaUserCircle className="h-9 w-9 text-slate-300 dark:text-slate-600" />
                      <div>
                        <p className="font-medium text-slate-900 dark:text-white">{u.name}</p>
                        <p className="flex items-center gap-1 text-xs text-slate-500 dark:text-slate-400">
                          <FaEnvelope className="h-3 w-3" />
                          {u.email}
                        </p>
                      </div>
                    </div>
                  </td>
                  <td className="px-4 py-3 text-slate-600 dark:text-slate-300">{u.role}</td>
                  <td className="px-4 py-3 text-slate-600 dark:text-slate-300">
                    <span className="inline-flex items-center gap-1">
                      <FaCalendarAlt className="h-3 w-3 text-slate-400" />
                      {u.joined}
                    </span>
                  </td>
                  <td className="px-4 py-3">
                    <span
                      className={`inline-flex rounded-full px-2.5 py-0.5 text-xs font-medium ${
                        u.status === 'active'
                          ? 'bg-emerald-100 text-emerald-800 dark:bg-emerald-950/50 dark:text-emerald-200'
                          : 'bg-slate-200 text-slate-700 dark:bg-slate-700 dark:text-slate-200'
                      }`}
                    >
                      {u.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}
