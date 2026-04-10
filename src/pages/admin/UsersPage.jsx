
// import { useState } from 'react'
// import { FaUserCircle, FaEnvelope, FaCalendarAlt, FaSearch } from 'react-icons/fa'

// const sampleUsers = [
//   {
//     id: 'u1',
//     name: 'Anjali K.',
//     email: 'anjali@example.com',
//     role: 'Member',
//     joined: 'Mar 12, 2026',
//     status: 'active',
//     posts: 12,
//     reports: 1,
//   },
//   {
//     id: 'u2',
//     name: 'Rahul M.',
//     email: 'rahul@example.com',
//     role: 'Member',
//     joined: 'Mar 8, 2026',
//     status: 'active',
//     posts: 5,
//     reports: 0,
//   },
//   {
//     id: 'u3',
//     name: 'Dr. Samira Patel',
//     email: 'samira@wellness.example',
//     role: 'Provider',
//     joined: 'Feb 1, 2026',
//     status: 'active',
//     posts: 20,
//     reports: 2,
//   },
//   {
//     id: 'u4',
//     name: 'Anonymous user',
//     email: '—',
//     role: 'Member',
//     joined: 'Apr 1, 2026',
//     status: 'suspended',
//     posts: 0,
//     reports: 3,
//   },
// ]

// export default function UsersPage() {
//   const [users, setUsers] = useState(sampleUsers)
//   const [search, setSearch] = useState('')
//   const [selectedUser, setSelectedUser] = useState(null)

//   const filteredUsers = users.filter((u) =>
//     u.name.toLowerCase().includes(search.toLowerCase()) ||
//     u.email.toLowerCase().includes(search.toLowerCase())
//   )

//   const toggleBan = (id) => {
//     setUsers((prev) =>
//       prev.map((u) =>
//         u.id === id
//           ? { ...u, status: u.status === 'active' ? 'suspended' : 'active' }
//           : u
//       )
//     )
//   }

//   return (
//     <div className="mx-auto max-w-6xl space-y-6">
//       <div className="flex items-center justify-between">
//         <div>
//           <h2 className="text-2xl font-semibold">Users</h2>
//           <p className="text-sm text-slate-500">Manage all platform users</p>
//         </div>

//         <div className="flex items-center gap-2 border rounded-xl px-3 py-2">
//           <FaSearch className="text-slate-400" />
//           <input
//             type="text"
//             placeholder="Search users..."
//             value={search}
//             onChange={(e) => setSearch(e.target.value)}
//             className="outline-none text-sm"
//           />
//         </div>
//       </div>

//       <div className="overflow-hidden rounded-2xl border bg-white shadow-sm">
//         <table className="w-full text-sm">
//           <thead className="bg-slate-50">
//             <tr>
//               <th className="px-4 py-3 text-left">User</th>
//               <th className="px-4 py-3">Role</th>
//               <th className="px-4 py-3">Posts</th>
//               <th className="px-4 py-3">Reports</th>
//               <th className="px-4 py-3">Status</th>
//               <th className="px-4 py-3">Actions</th>
//             </tr>
//           </thead>

//           <tbody>
//             {filteredUsers.map((u) => (
//               <tr key={u.id} className="border-t hover:bg-slate-50">
//                 <td className="px-4 py-3">
//                   <div className="flex items-center gap-3">
//                     <FaUserCircle className="h-9 w-9 text-slate-300" />
//                     <div>
//                       <p className="font-medium">{u.name}</p>
//                       <p className="text-xs text-slate-500 flex items-center gap-1">
//                         <FaEnvelope className="h-3 w-3" /> {u.email}
//                       </p>
//                     </div>
//                   </div>
//                 </td>

//                 <td className="px-4 py-3 text-center">{u.role}</td>
//                 <td className="px-4 py-3 text-center">{u.posts}</td>
//                 <td className="px-4 py-3 text-center">{u.reports}</td>

//                 <td className="px-4 py-3 text-center">
//                   <span
//                     className={`px-2 py-1 rounded-full text-xs ${
//                       u.status === 'active'
//                         ? 'bg-green-100 text-green-700'
//                         : 'bg-red-100 text-red-700'
//                     }`}
//                   >
//                     {u.status}
//                   </span>
//                 </td>

//                 <td className="px-4 py-3 text-center space-x-2">
//                   <button
//                     onClick={() => setSelectedUser(u)}
//                     className="text-blue-600 text-xs"
//                   >
//                     View
//                   </button>

//                   <button
//                     onClick={() => toggleBan(u.id)}
//                     className="text-xs text-red-600"
//                   >
//                     {u.status === 'active' ? 'Ban' : 'Unban'}
//                   </button>
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>

//       {/* User Details Modal */}
//       {selectedUser && (
//         <div className="fixed inset-0 bg-black/40 flex items-center justify-center">
//           <div className="bg-white rounded-2xl p-6 w-[400px] space-y-4">
//             <h3 className="text-lg font-semibold">User Details</h3>

//             <div className="text-sm space-y-1">
//               <p><strong>Name:</strong> {selectedUser.name}</p>
//               <p><strong>Email:</strong> {selectedUser.email}</p>
//               <p><strong>Role:</strong> {selectedUser.role}</p>
//               <p><strong>Posts:</strong> {selectedUser.posts}</p>
//               <p><strong>Reports:</strong> {selectedUser.reports}</p>
//               <p><strong>Status:</strong> {selectedUser.status}</p>
//             </div>

//             <div className="flex justify-end gap-2">
//               <button
//                 onClick={() => setSelectedUser(null)}
//                 className="text-sm px-3 py-1 border rounded"
//               >
//                 Close
//               </button>

//               <button className="text-sm px-3 py-1 bg-blue-600 text-white rounded">
//                 Reset Password
//               </button>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   )
// }


import { useState, useMemo } from 'react'
import { FaUserCircle, FaEnvelope, FaSearch } from 'react-icons/fa'

const sampleUsers = Array.from({ length: 35 }).map((_, i) => ({
  id: `u${i}`,
  name: `User ${i}`,
  email: `user${i}@mail.com`,
  role: i % 3 === 0 ? 'Provider' : 'Member',
  joined: '2026',
  status: i % 5 === 0 ? 'suspended' : 'active',
  posts: Math.floor(Math.random() * 20),
  reports: Math.floor(Math.random() * 4),
}))

export default function UsersPage() {
  const [users, setUsers] = useState(sampleUsers)
  const [search, setSearch] = useState('')
  const [roleFilter, setRoleFilter] = useState('all')
  const [statusFilter, setStatusFilter] = useState('all')
  const [reportedOnly, setReportedOnly] = useState(false)

  const [page, setPage] = useState(1)
  const perPage = 8

  const filteredUsers = useMemo(() => {
    return users.filter((u) => {
      const matchesSearch =
        u.name.toLowerCase().includes(search.toLowerCase()) ||
        u.email.toLowerCase().includes(search.toLowerCase())

      const matchesRole = roleFilter === 'all' || u.role === roleFilter
      const matchesStatus = statusFilter === 'all' || u.status === statusFilter
      const matchesReports = !reportedOnly || u.reports > 0

      return matchesSearch && matchesRole && matchesStatus && matchesReports
    })
  }, [users, search, roleFilter, statusFilter, reportedOnly])

  const totalPages = Math.ceil(filteredUsers.length / perPage)
  const paginatedUsers = filteredUsers.slice((page - 1) * perPage, page * perPage)

  const toggleBan = (id) => {
    setUsers((prev) =>
      prev.map((u) =>
        u.id === id
          ? { ...u, status: u.status === 'active' ? 'suspended' : 'active' }
          : u
      )
    )
  }

  function exportCSV() {
    const rows = filteredUsers.map(u =>
      `${u.name},${u.email},${u.role},${u.status},${u.posts},${u.reports}`
    )

    const csv = `Name,Email,Role,Status,Posts,Reports\n${rows.join('\n')}`

    const blob = new Blob([csv], { type: 'text/csv' })
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = 'users.csv'
    a.click()
  }

  return (
    <div className="max-w-6xl mx-auto space-y-6">

      <h2 className="text-2xl font-semibold">Users Management</h2>

      {/* Filters */}
      <div className="flex flex-wrap gap-3 items-center">
        <div className="flex items-center gap-2 border px-3 py-2 rounded-xl bg-white">
          <FaSearch />
          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search"
            className="outline-none text-sm"
          />
        </div>

        <select value={roleFilter} onChange={(e) => setRoleFilter(e.target.value)} className="border px-3 py-2 rounded-xl">
          <option value="all">All Roles</option>
          <option value="Member">Member</option>
          <option value="Provider">Provider</option>
        </select>

        <select value={statusFilter} onChange={(e) => setStatusFilter(e.target.value)} className="border px-3 py-2 rounded-xl">
          <option value="all">All Status</option>
          <option value="active">Active</option>
          <option value="suspended">Suspended</option>
        </select>

        <button
          onClick={() => setReportedOnly(!reportedOnly)}
          className={`px-3 py-2 rounded-xl text-sm ${reportedOnly ? 'bg-red-100 text-red-600' : 'border'}`}
        >
          ⚠️ Reported Only
        </button>

        <button onClick={exportCSV} className="px-3 py-2 bg-teal-600 text-white rounded-xl text-sm">
          Export CSV
        </button>
      </div>

      <p className="text-sm text-slate-500">Showing {filteredUsers.length} users</p>

      {/* Table */}
      <div className="bg-white border rounded-2xl overflow-hidden">
        <table className="w-full text-sm">
          <thead className="bg-slate-50">
            <tr>
              <th className="p-3 text-left">User</th>
              <th>Role</th>
              <th>Posts</th>
              <th>Reports</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {paginatedUsers.map(u => (
              <tr key={u.id} className="border-t">
                <td className="p-3 flex items-center gap-2">
                  <FaUserCircle />
                  <div>
                    <p>{u.name}</p>
                    <p className="text-xs text-slate-500 flex items-center gap-1">
                      <FaEnvelope /> {u.email}
                    </p>
                  </div>
                </td>
                <td className="text-center">{u.role}</td>
                <td className="text-center">{u.posts}</td>
                <td className="text-center">{u.reports}</td>
                <td className="text-center">
                  <span className={`px-2 py-1 rounded text-xs ${u.status === 'active' ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>
                    {u.status}
                  </span>
                </td>
                <td className="text-center">
                  <button onClick={() => toggleBan(u.id)} className="text-xs text-red-600">
                    {u.status === 'active' ? 'Ban' : 'Unban'}
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      <div className="flex justify-center gap-2">
        {Array.from({ length: totalPages }, (_, i) => (
          <button
            key={i}
            onClick={() => setPage(i + 1)}
            className={`px-3 py-1 rounded ${page === i + 1 ? 'bg-teal-600 text-white' : 'bg-slate-200'}`}
          >
            {i + 1}
          </button>
        ))}
      </div>

      {/* Analytics */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <Stat title="Total Users" value={users.length} />
        <Stat title="Active" value={users.filter(u => u.status === 'active').length} />
        <Stat title="Suspended" value={users.filter(u => u.status === 'suspended').length} />
        <Stat title="Reported" value={users.filter(u => u.reports > 0).length} />
      </div>

    </div>
  )
}

function Stat({ title, value }) {
  return (
    <div className="p-4 bg-white border rounded-xl text-center">
      <p className="text-sm text-slate-500">{title}</p>
      <p className="text-xl font-semibold">{value}</p>
    </div>
  )
}
