// import { FaUserCircle, FaEnvelope, FaCalendarAlt } from 'react-icons/fa'

// /** Placeholder rows until user accounts are backed by MongoDB */
// const sampleUsers = [
//   {
//     id: 'u1',
//     name: 'Anjali K.',
//     email: 'anjali@example.com',
//     role: 'Member',
//     joined: 'Mar 12, 2026',
//     status: 'active',
//   },
//   {
//     id: 'u2',
//     name: 'Rahul M.',
//     email: 'rahul@example.com',
//     role: 'Member',
//     joined: 'Mar 8, 2026',
//     status: 'active',
//   },
//   {
//     id: 'u3',
//     name: 'Dr. Samira Patel',
//     email: 'samira@wellness.example',
//     role: 'Provider',
//     joined: 'Feb 1, 2026',
//     status: 'active',
//   },
//   {
//     id: 'u4',
//     name: 'Anonymous user',
//     email: '—',
//     role: 'Member',
//     joined: 'Apr 1, 2026',
//     status: 'suspended',
//   },
// ]

// export default function UsersPage() {
//   return (
//     <div className="mx-auto max-w-5xl space-y-6">
//       <div>
//         <h2 className="text-2xl font-semibold text-slate-900 dark:text-white">Users</h2>
//         <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
//           Preview of how member and provider accounts will appear. Connect your auth service to
//           load real users.
//         </p>
//       </div>

//       <div className="overflow-hidden rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/80 shadow-sm">
//         <div className="overflow-x-auto">
//           <table className="w-full min-w-[640px] text-left text-sm">
//             <thead className="border-b border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800/50">
//               <tr>
//                 <th className="px-4 py-3 font-semibold text-slate-700 dark:text-slate-200">
//                   User
//                 </th>
//                 <th className="px-4 py-3 font-semibold text-slate-700 dark:text-slate-200">
//                   Role
//                 </th>
//                 <th className="px-4 py-3 font-semibold text-slate-700 dark:text-slate-200">
//                   Joined
//                 </th>
//                 <th className="px-4 py-3 font-semibold text-slate-700 dark:text-slate-200">
//                   Status
//                 </th>
//               </tr>
//             </thead>
//             <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
//               {sampleUsers.map((u) => (
//                 <tr key={u.id} className="hover:bg-slate-50/80 dark:hover:bg-slate-800/30">
//                   <td className="px-4 py-3">
//                     <div className="flex items-center gap-3">
//                       <FaUserCircle className="h-9 w-9 text-slate-300 dark:text-slate-600" />
//                       <div>
//                         <p className="font-medium text-slate-900 dark:text-white">{u.name}</p>
//                         <p className="flex items-center gap-1 text-xs text-slate-500 dark:text-slate-400">
//                           <FaEnvelope className="h-3 w-3" />
//                           {u.email}
//                         </p>
//                       </div>
//                     </div>
//                   </td>
//                   <td className="px-4 py-3 text-slate-600 dark:text-slate-300">{u.role}</td>
//                   <td className="px-4 py-3 text-slate-600 dark:text-slate-300">
//                     <span className="inline-flex items-center gap-1">
//                       <FaCalendarAlt className="h-3 w-3 text-slate-400" />
//                       {u.joined}
//                     </span>
//                   </td>
//                   <td className="px-4 py-3">
//                     <span
//                       className={`inline-flex rounded-full px-2.5 py-0.5 text-xs font-medium ${
//                         u.status === 'active'
//                           ? 'bg-emerald-100 text-emerald-800 dark:bg-emerald-950/50 dark:text-emerald-200'
//                           : 'bg-slate-200 text-slate-700 dark:bg-slate-700 dark:text-slate-200'
//                       }`}
//                     >
//                       {u.status}
//                     </span>
//                   </td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>
//       </div>
//     </div>
//   )
// }





import { useState } from 'react'
import { FaUserCircle, FaEnvelope, FaCalendarAlt, FaSearch } from 'react-icons/fa'

const sampleUsers = [
  {
    id: 'u1',
    name: 'Anjali K.',
    email: 'anjali@example.com',
    role: 'Member',
    joined: 'Mar 12, 2026',
    status: 'active',
    posts: 12,
    reports: 1,
  },
  {
    id: 'u2',
    name: 'Rahul M.',
    email: 'rahul@example.com',
    role: 'Member',
    joined: 'Mar 8, 2026',
    status: 'active',
    posts: 5,
    reports: 0,
  },
  {
    id: 'u3',
    name: 'Dr. Samira Patel',
    email: 'samira@wellness.example',
    role: 'Provider',
    joined: 'Feb 1, 2026',
    status: 'active',
    posts: 20,
    reports: 2,
  },
  {
    id: 'u4',
    name: 'Anonymous user',
    email: '—',
    role: 'Member',
    joined: 'Apr 1, 2026',
    status: 'suspended',
    posts: 0,
    reports: 3,
  },
]

export default function UsersPage() {
  const [users, setUsers] = useState(sampleUsers)
  const [search, setSearch] = useState('')
  const [selectedUser, setSelectedUser] = useState(null)

  const filteredUsers = users.filter((u) =>
    u.name.toLowerCase().includes(search.toLowerCase()) ||
    u.email.toLowerCase().includes(search.toLowerCase())
  )

  const toggleBan = (id) => {
    setUsers((prev) =>
      prev.map((u) =>
        u.id === id
          ? { ...u, status: u.status === 'active' ? 'suspended' : 'active' }
          : u
      )
    )
  }

  return (
    <div className="mx-auto max-w-6xl space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-semibold">Users</h2>
          <p className="text-sm text-slate-500">Manage all platform users</p>
        </div>

        <div className="flex items-center gap-2 border rounded-xl px-3 py-2">
          <FaSearch className="text-slate-400" />
          <input
            type="text"
            placeholder="Search users..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="outline-none text-sm"
          />
        </div>
      </div>

      <div className="overflow-hidden rounded-2xl border bg-white shadow-sm">
        <table className="w-full text-sm">
          <thead className="bg-slate-50">
            <tr>
              <th className="px-4 py-3 text-left">User</th>
              <th className="px-4 py-3">Role</th>
              <th className="px-4 py-3">Posts</th>
              <th className="px-4 py-3">Reports</th>
              <th className="px-4 py-3">Status</th>
              <th className="px-4 py-3">Actions</th>
            </tr>
          </thead>

          <tbody>
            {filteredUsers.map((u) => (
              <tr key={u.id} className="border-t hover:bg-slate-50">
                <td className="px-4 py-3">
                  <div className="flex items-center gap-3">
                    <FaUserCircle className="h-9 w-9 text-slate-300" />
                    <div>
                      <p className="font-medium">{u.name}</p>
                      <p className="text-xs text-slate-500 flex items-center gap-1">
                        <FaEnvelope className="h-3 w-3" /> {u.email}
                      </p>
                    </div>
                  </div>
                </td>

                <td className="px-4 py-3 text-center">{u.role}</td>
                <td className="px-4 py-3 text-center">{u.posts}</td>
                <td className="px-4 py-3 text-center">{u.reports}</td>

                <td className="px-4 py-3 text-center">
                  <span
                    className={`px-2 py-1 rounded-full text-xs ${
                      u.status === 'active'
                        ? 'bg-green-100 text-green-700'
                        : 'bg-red-100 text-red-700'
                    }`}
                  >
                    {u.status}
                  </span>
                </td>

                <td className="px-4 py-3 text-center space-x-2">
                  <button
                    onClick={() => setSelectedUser(u)}
                    className="text-blue-600 text-xs"
                  >
                    View
                  </button>

                  <button
                    onClick={() => toggleBan(u.id)}
                    className="text-xs text-red-600"
                  >
                    {u.status === 'active' ? 'Ban' : 'Unban'}
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* User Details Modal */}
      {selectedUser && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center">
          <div className="bg-white rounded-2xl p-6 w-[400px] space-y-4">
            <h3 className="text-lg font-semibold">User Details</h3>

            <div className="text-sm space-y-1">
              <p><strong>Name:</strong> {selectedUser.name}</p>
              <p><strong>Email:</strong> {selectedUser.email}</p>
              <p><strong>Role:</strong> {selectedUser.role}</p>
              <p><strong>Posts:</strong> {selectedUser.posts}</p>
              <p><strong>Reports:</strong> {selectedUser.reports}</p>
              <p><strong>Status:</strong> {selectedUser.status}</p>
            </div>

            <div className="flex justify-end gap-2">
              <button
                onClick={() => setSelectedUser(null)}
                className="text-sm px-3 py-1 border rounded"
              >
                Close
              </button>

              <button className="text-sm px-3 py-1 bg-blue-600 text-white rounded">
                Reset Password
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
