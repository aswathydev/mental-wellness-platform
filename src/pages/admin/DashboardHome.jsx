// import { Link } from 'react-router-dom'
// import {
//   helpRequests,
//   moderationQueue,
//   providers,
//   feedPosts,
// } from '../../data/mockData'
// import { FaArrowRight, FaExclamationTriangle, FaUserFriends } from 'react-icons/fa'

// function StatCard({ title, value, hint, to, accent }) {
//   const inner = (
//     <div
//       className={`rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/80 p-5 shadow-sm transition hover:border-teal-300 dark:hover:border-teal-700 ${
//         to ? 'cursor-pointer' : ''
//       }`}
//     >
//       <p className="text-xs font-semibold uppercase tracking-wide text-slate-500 dark:text-slate-400">
//         {title}
//       </p>
//       <p className={`mt-2 text-3xl font-semibold tabular-nums ${accent}`}>{value}</p>
//       {hint && <p className="mt-2 text-sm text-slate-500 dark:text-slate-400">{hint}</p>}
//       {to && (
//         <p className="mt-3 flex items-center gap-1 text-sm font-medium text-teal-600 dark:text-teal-400">
//           Open <FaArrowRight className="h-3 w-3" />
//         </p>
//       )}
//     </div>
//   )

//   if (to) {
//     return (
//       <Link to={to} className="block focus:outline-none focus-visible:ring-2 focus-visible:ring-teal-500 rounded-2xl">
//         {inner}
//       </Link>
//     )
//   }
//   return inner
// }

// export default function DashboardHome() {
//   const pendingMod = moderationQueue.filter((m) => m.status === 'pending').length
//   const highUrgencyHelp = helpRequests.filter((h) => h.urgency === 'high').length

//   return (
//     <div className="mx-auto max-w-5xl space-y-8">
//       <div>
//         <h2 className="text-2xl font-semibold text-slate-900 dark:text-white">
//           Overview
//         </h2>
//         <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
//           Monitor community health, moderation, and urgent help requests. Data is mock until
//           your API is connected.
//         </p>
//       </div>

//       <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
//         <StatCard
//           title="Pending moderation"
//           value={pendingMod}
//           hint="Posts & comments awaiting review"
//           to="/admin/moderation"
//           accent="text-amber-600 dark:text-amber-400"
//         />
//         <StatCard
//           title="Help requests"
//           value={helpRequests.length}
//           hint={`${highUrgencyHelp} marked high urgency`}
//           to="/admin/help-banners"
//           accent="text-rose-600 dark:text-rose-400"
//         />
//         <StatCard
//           title="Listed providers"
//           value={providers.length}
//           hint="Active directory profiles"
//           to="/providers"
//           accent="text-teal-600 dark:text-teal-400"
//         />
//         <StatCard
//           title="Sample feed posts"
//           value={feedPosts.length}
//           hint="Seed data for community feed"
//           to="/feed"
//           accent="text-indigo-600 dark:text-indigo-400"
//         />
//       </div>

//       <div className="grid gap-6 lg:grid-cols-2">
//         <section className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/80 p-5 shadow-sm">
//           <div className="flex items-center justify-between gap-2">
//             <h3 className="font-semibold text-slate-900 dark:text-white">
//               Moderation queue
//             </h3>
//             <Link
//               to="/admin/moderation"
//               className="text-sm font-medium text-teal-600 dark:text-teal-400 hover:underline"
//             >
//               View all
//             </Link>
//           </div>
//           <ul className="mt-4 space-y-3">
//             {moderationQueue.slice(0, 4).map((item) => (
//               <li
//                 key={item.id}
//                 className="flex items-start gap-3 rounded-xl border border-slate-100 dark:border-slate-800 bg-slate-50 dark:bg-slate-800/50 px-3 py-2.5 text-sm"
//               >
//                 <FaExclamationTriangle className="mt-0.5 h-4 w-4 shrink-0 text-amber-500" />
//                 <div className="min-w-0">
//                   <span className="font-medium capitalize text-slate-800 dark:text-slate-200">
//                     {item.type}
//                   </span>
//                   <span className="text-slate-400"> · </span>
//                   <span className="text-slate-500 dark:text-slate-400">{item.risk} risk</span>
//                   <p className="mt-0.5 text-slate-600 dark:text-slate-300 line-clamp-2">
//                     {item.preview}
//                   </p>
//                 </div>
//               </li>
//             ))}
//           </ul>
//         </section>

//         <section className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/80 p-5 shadow-sm">
//           <div className="flex items-center justify-between gap-2">
//             <h3 className="font-semibold text-slate-900 dark:text-white">
//               Recent help requests
//             </h3>
//             <Link
//               to="/admin/help-banners"
//               className="text-sm font-medium text-teal-600 dark:text-teal-400 hover:underline"
//             >
//               Manage
//             </Link>
//           </div>
//           <ul className="mt-4 space-y-3">
//             {helpRequests.map((h) => (
//               <li
//                 key={h.id}
//                 className="flex items-start gap-3 rounded-xl border border-slate-100 dark:border-slate-800 bg-slate-50 dark:bg-slate-800/50 px-3 py-2.5 text-sm"
//               >
//                 <FaUserFriends className="mt-0.5 h-4 w-4 shrink-0 text-teal-500" />
//                 <div className="min-w-0">
//                   <p className="font-medium text-slate-800 dark:text-slate-200">{h.title}</p>
//                   <p className="text-xs text-slate-500 dark:text-slate-400">
//                     {h.responses} responses · {h.time}
//                   </p>
//                 </div>
//                 <span
//                   className={`ml-auto shrink-0 rounded-full px-2 py-0.5 text-xs font-medium capitalize ${
//                     h.urgency === 'high'
//                       ? 'bg-rose-100 text-rose-800 dark:bg-rose-950/60 dark:text-rose-200'
//                       : 'bg-amber-100 text-amber-800 dark:bg-amber-950/60 dark:text-amber-200'
//                   }`}
//                 >
//                   {h.urgency}
//                 </span>
//               </li>
//             ))}
//           </ul>
//         </section>
//       </div>
//     </div>
//   )
// }




import { Link } from 'react-router-dom'
import {
  helpRequests,
  moderationQueue,
  providers,
  feedPosts,
} from '../../data/mockData'
import { FaArrowRight } from 'react-icons/fa'

function StatCard({ title, value, hint, to, accent }) {
  const inner = (
    <div
      className={`rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/80 p-5 shadow-sm transition hover:border-teal-300 dark:hover:border-teal-700 ${
        to ? 'cursor-pointer' : ''
      }`}
    >
      <p className="text-xs font-semibold uppercase tracking-wide text-slate-500 dark:text-slate-400">
        {title}
      </p>
      <p className={`mt-2 text-3xl font-semibold tabular-nums ${accent}`}>{value}</p>
      {hint && <p className="mt-2 text-sm text-slate-500 dark:text-slate-400">{hint}</p>}
      {to && (
        <p className="mt-3 flex items-center gap-1 text-sm font-medium text-teal-600 dark:text-teal-400">
          Open <FaArrowRight className="h-3 w-3" />
        </p>
      )}
    </div>
  )

  if (to) {
    return (
      <Link to={to} className="block rounded-2xl">
        {inner}
      </Link>
    )
  }
  return inner
}

export default function DashboardHome() {
  // Mock analytics (replace with API later)
  const totalUsers = 1200
  const activeUsers = 860
  const totalPosts = 5400
  const reportsCount = 32
  const providersCount = providers.length

  return (
    <div className="mx-auto max-w-5xl space-y-8">
      <div>
        <h2 className="text-2xl font-semibold text-slate-900 dark:text-white">
          Dashboard Analytics
        </h2>
        <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
          Overview of platform usage and moderation insights.
        </p>
      </div>

      {/* Analytics Cards */}
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
        <StatCard
          title="Total Users"
          value={totalUsers}
          accent="text-indigo-600"
        />

        <StatCard
          title="Active Users"
          value={activeUsers}
          hint="Users active in last 24h"
          accent="text-green-600"
        />

        <StatCard
          title="Total Posts"
          value={totalPosts}
          to="/admin/posts"
          accent="text-blue-600"
        />

        <StatCard
          title="Reports"
          value={reportsCount}
          to="/admin/reports"
          accent="text-red-600"
        />

        <StatCard
          title="Providers"
          value={providersCount}
          to="/admin/providers"
          accent="text-teal-600"
        />
      </div>

      {/* Keep your existing sections below if needed */}

       {/* Charts Section */}
      <div className="grid gap-6 lg:grid-cols-2">
        <div className="rounded-2xl border p-5 bg-white">
          <h3 className="text-sm font-semibold mb-4">User Activity</h3>
          <UserChart />
        </div>

        <div className="rounded-2xl border p-5 bg-white">
          <h3 className="text-sm font-semibold mb-4">Posts vs Reports</h3>
          <PostsChart />
        </div>
      </div>

    </div>
  )
}





import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  BarChart,
  Bar,
} from 'recharts'

const userData = [
  { day: 'Mon', users: 200 },
  { day: 'Tue', users: 400 },
  { day: 'Wed', users: 350 },
  { day: 'Thu', users: 500 },
  { day: 'Fri', users: 650 },
]

function UserChart() {
  return (
    <ResponsiveContainer width="100%" height={250}>
      <LineChart data={userData}>
        <XAxis dataKey="day" />
        <YAxis />
        <Tooltip />
        <Line type="monotone" dataKey="users" />
      </LineChart>
    </ResponsiveContainer>
  )
}

const postData = [
  { name: 'Posts', value: 5400 },
  { name: 'Reports', value: 32 },
]

function PostsChart() {
  return (
    <ResponsiveContainer width="100%" height={250}>
      <BarChart data={postData}>
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Bar dataKey="value" />
      </BarChart>
    </ResponsiveContainer>
  )
}
