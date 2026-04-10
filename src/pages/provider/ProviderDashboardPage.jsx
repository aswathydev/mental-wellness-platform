import { useState } from 'react'

const tabs = [
  'Dashboard',
  'Appointments',
  'Availability',
  'Services',
  'Reviews',
  'Earnings',
  'Profile'
]

// Dummy Data
const dummyAppointments = [
  { id: 1, name: 'Anjali', date: '2026-04-10', time: '10:00', status: 'upcoming' },
  { id: 2, name: 'Rahul', date: '2026-04-08', time: '14:00', status: 'completed' },
]

const dummyServices = [
  { id: 1, title: 'Therapy Session', price: 500 },
]

const dummyReviews = [
  { id: 1, user: 'Meera', rating: 5, comment: 'Very helpful session!' },
]

export default function ProviderDashboard() {
  const [activeTab, setActiveTab] = useState('Dashboard')

  return (
    <div className="min-h-screen bg-slate-100 py-6">
      <div className="max-w-6xl mx-auto px-4">

        {/* Tabs */}
        <div className="flex gap-2 mb-6 flex-wrap bg-white p-2 rounded-2xl shadow-sm">
          {tabs.map(tab => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-4 py-2 rounded-xl text-sm font-medium transition ${
                activeTab === tab
                  ? 'bg-teal-600 text-white shadow'
                  : 'text-slate-600 hover:bg-slate-100'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Content */}
        {activeTab === 'Dashboard' && <Dashboard />}
        {activeTab === 'Appointments' && <Appointments />}
        {activeTab === 'Availability' && <Availability />}
        {activeTab === 'Services' && <Services />}
        {activeTab === 'Reviews' && <Reviews />}
        {activeTab === 'Earnings' && <Earnings />}
        {activeTab === 'Profile' && <Profile />}
      </div>
    </div>
  )
}

function Dashboard() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      <Card title="Total Sessions" value="24" />
      <Card title="Upcoming" value="5" />
      <Card title="Earnings" value="₹12,000" />
    </div>
  )
}

function Appointments() {
  return (
    <div className="space-y-3">
      {dummyAppointments.map(a => (
        <div key={a.id} className="bg-white border border-slate-200 p-4 rounded-2xl shadow-sm hover:shadow-md transition flex justify-between">
          <div>
            <p className="font-medium">{a.name}</p>
            <p className="text-sm text-slate-500">{a.date} at {a.time}</p>
          </div>
          <span
            className={`text-xs px-3 py-1 rounded-full font-medium ${
              a.status === 'upcoming'
                ? 'bg-blue-100 text-blue-700'
                : 'bg-green-100 text-green-700'
            }`}
          >
            {a.status}
          </span>
        </div>
      ))}
    </div>
  )
}

function Availability() {
  return (
    <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
      <p className="text-slate-600">Integrate your availability component here</p>
    </div>
  )
}

function Services() {
  return (
    <div className="space-y-3">
      {dummyServices.map(s => (
        <div key={s.id} className="bg-white border border-slate-200 p-4 rounded-2xl shadow-sm hover:shadow-md transition flex justify-between">
          <p>{s.title}</p>
          <p className="font-medium">₹{s.price}</p>
        </div>
      ))}
    </div>
  )
}

function Reviews() {
  return (
    <div className="space-y-3">
      {dummyReviews.map(r => (
        <div key={r.id} className="bg-white border border-slate-200 p-4 rounded-2xl shadow-sm">
          <p className="font-medium">{r.user}</p>
          <p>⭐ {r.rating}</p>
          <p className="text-sm text-slate-500">{r.comment}</p>
        </div>
      ))}
    </div>
  )
}

function Earnings() {
  return (
    <div className="bg-white border border-slate-200 p-6 rounded-2xl shadow-sm">
      <p className="text-lg font-semibold text-slate-800">Total Earnings</p>
      <p className="text-2xl font-bold text-teal-600 mt-2">₹12,000</p>
      <p className="text-sm text-slate-500 mt-1">(Dummy data)</p>
    </div>
  )
}

function Profile() {
  return (
    <div className="bg-white border border-slate-200 p-6 rounded-2xl shadow-sm">
      <p className="text-slate-600">Edit profile feature here</p>
    </div>
  )
}

function Card({ title, value }) {
  return (
    <div className="p-5 bg-white border border-slate-200 rounded-2xl shadow-sm hover:shadow-md transition">
      <p className="text-sm text-slate-500">{title}</p>
      <p className="text-2xl font-semibold text-slate-900 mt-1">{value}</p>
    </div>
  )
}











// import { useState } from 'react'
// import { useAuth } from '../../context/AuthContext'
// import {
//   addAvailabilitySlot,
//   getProviderByEmail,
//   removeAvailabilitySlot,
//   toggleAvailabilitySlot,
// } from '../../lib/providerStore'

// function todayDate() {
//   return new Date().toISOString().slice(0, 10)
// }

// export default function ProviderDashboardPage() {
//   const { user } = useAuth()
//   const [date, setDate] = useState(todayDate())
//   const [time, setTime] = useState('09:00')
//   const [version, setVersion] = useState(0)

//   const provider = user?.email ? getProviderByEmail(user.email) : null

//   if (!provider) {
//     return <p className="text-slate-500">Provider account not found.</p>
//   }

//   function onAddSlot(event) {
//     event.preventDefault()
//     addAvailabilitySlot(provider.id, date, time)
//     setVersion((v) => v + 1)
//   }

//   function onToggle(slotId) {
//     toggleAvailabilitySlot(provider.id, slotId)
//     setVersion((v) => v + 1)
//   }

//   function onRemove(slotId) {
//     removeAvailabilitySlot(provider.id, slotId)
//     setVersion((v) => v + 1)
//   }

//   return (
//     <div key={version} className="max-w-4xl mx-auto space-y-8">
//       <div className="rounded-2xl border border-slate-200 bg-white p-6">
//         <h1 className="text-2xl font-semibold text-slate-900">Provider Dashboard</h1>
//         <p className="mt-1 text-sm text-slate-500">Manage your professional details and availability.</p>
//       </div>

//       <section className="rounded-2xl border border-slate-200 bg-white p-6">
//         <h2 className="text-lg font-semibold text-slate-900">Profile details</h2>
//         <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
//           <p><span className="font-medium">Name:</span> {provider.name}</p>
//           <p><span className="font-medium">Email:</span> {provider.email}</p>
//           <p><span className="font-medium">Specialization:</span> {provider.specialization}</p>
//           <p><span className="font-medium">Qualification:</span> {provider.qualification}</p>
//           <p><span className="font-medium">License:</span> {provider.licenseNumber}</p>
//           <p><span className="font-medium">Experience:</span> {provider.experienceYears} years</p>
//           <p><span className="font-medium">Phone:</span> {provider.phone}</p>
//           <p><span className="font-medium">Services:</span> {provider.services.join(', ') || '—'}</p>
//         </div>
//         <p className="mt-3 text-sm text-slate-600">{provider.bio}</p>
//         <div className="mt-3">
//           <p className="text-sm font-medium text-slate-700">Certificates</p>
//           {provider.certificates.length > 0 ? (
//             <ul className="mt-1 text-sm text-slate-500 list-disc pl-5">
//               {provider.certificates.map((file) => (
//                 <li key={file}>{file}</li>
//               ))}
//             </ul>
//           ) : (
//             <p className="text-sm text-slate-500">No certificates uploaded.</p>
//           )}
//         </div>
//       </section>

//       <section className="rounded-2xl border border-slate-200 bg-white p-6">
//         <h2 className="text-lg font-semibold text-slate-900">Manage availability</h2>
//         <form className="mt-4 grid grid-cols-1 sm:grid-cols-4 gap-3" onSubmit={onAddSlot}>
//           <input
//             type="date"
//             value={date}
//             min={todayDate()}
//             onChange={(e) => setDate(e.target.value)}
//             className="rounded-xl border border-slate-200 px-3 py-2 text-sm"
//           />
//           <input
//             type="time"
//             value={time}
//             onChange={(e) => setTime(e.target.value)}
//             className="rounded-xl border border-slate-200 px-3 py-2 text-sm"
//           />
//           <button
//             type="submit"
//             className="sm:col-span-2 rounded-xl bg-teal-600 text-white px-4 py-2 text-sm font-medium hover:bg-teal-700"
//           >
//             Add available slot
//           </button>
//         </form>

//         <div className="mt-5 space-y-3">
//           {provider.availability.length === 0 ? (
//             <p className="text-sm text-slate-500">No slots added yet.</p>
//           ) : (
//             provider.availability.map((slot) => (
//               <div
//                 key={slot.id}
//                 className="flex flex-wrap items-center justify-between gap-3 rounded-xl border border-slate-200 px-4 py-3 text-sm"
//               >
//                 <p className="text-slate-700">
//                   <span className="font-medium">{slot.date}</span> at <span className="font-medium">{slot.time}</span>
//                 </p>
//                 <div className="flex items-center gap-2">
//                   <button
//                     type="button"
//                     onClick={() => onToggle(slot.id)}
//                     className={`rounded-lg px-3 py-1.5 text-xs font-medium ${
//                       slot.available
//                         ? 'bg-emerald-100 text-emerald-700'
//                         : 'bg-amber-100 text-amber-700'
//                     }`}
//                   >
//                     {slot.available ? 'Available' : 'Unavailable'}
//                   </button>
//                   <button
//                     type="button"
//                     onClick={() => onRemove(slot.id)}
//                     className="rounded-lg border border-slate-200 px-3 py-1.5 text-xs font-medium text-slate-600 hover:bg-slate-50"
//                   >
//                     Remove
//                   </button>
//                 </div>
//               </div>
//             ))
//           )}
//         </div>
//       </section>
//     </div>
//   )
// }



// import { useState } from 'react'

// const tabs = [
//   'Dashboard',
//   'Appointments',
//   'Availability',
//   'Services',
//   'Reviews',
//   'Earnings',
//   'Profile'
// ]

// // Dummy Data
// const dummyAppointments = [
//   { id: 1, name: 'Anjali', date: '2026-04-10', time: '10:00', status: 'upcoming' },
//   { id: 2, name: 'Rahul', date: '2026-04-08', time: '14:00', status: 'completed' },
// ]

// const dummyServices = [
//   { id: 1, title: 'Therapy Session', price: 500 },
// ]

// const dummyReviews = [
//   { id: 1, user: 'Meera', rating: 5, comment: 'Very helpful session!' },
// ]

// export default function ProviderDashboard() {
//   const [activeTab, setActiveTab] = useState('Dashboard')

//   return (
//     <div className="max-w-6xl mx-auto p-6">
//       {/* Tabs */}
//       <div className="flex gap-2 mb-6 flex-wrap">
//         {tabs.map(tab => (
//           <button
//             key={tab}
//             onClick={() => setActiveTab(tab)}
//             className={`px-4 py-2 rounded-xl text-sm ${activeTab === tab ? 'bg-teal-600 text-white' : 'bg-slate-100'}`}
//           >
//             {tab}
//           </button>
//         ))}
//       </div>

//       {/* Content */}
//       {activeTab === 'Dashboard' && <Dashboard />}
//       {activeTab === 'Appointments' && <Appointments />}
//       {activeTab === 'Availability' && <Availability />}
//       {activeTab === 'Services' && <Services />}
//       {activeTab === 'Reviews' && <Reviews />}
//       {activeTab === 'Earnings' && <Earnings />}
//       {activeTab === 'Profile' && <Profile />}
//     </div>
//   )
// }

// function Dashboard() {
//   return (
//     <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
//       <Card title="Total Sessions" value="24" />
//       <Card title="Upcoming" value="5" />
//       <Card title="Earnings" value="₹12,000" />
//     </div>
//   )
// }

// function Appointments() {
//   return (
//     <div className="space-y-3">
//       {dummyAppointments.map(a => (
//         <div key={a.id} className="border p-4 rounded-xl flex justify-between">
//           <div>
//             <p className="font-medium">{a.name}</p>
//             <p className="text-sm text-slate-500">{a.date} at {a.time}</p>
//           </div>
//           <span className="text-sm">{a.status}</span>
//         </div>
//       ))}
//     </div>
//   )
// }

// function Availability() {
//   return <p>Reuse your existing availability component here</p>
// }

// function Services() {
//   return (
//     <div className="space-y-3">
//       {dummyServices.map(s => (
//         <div key={s.id} className="border p-4 rounded-xl flex justify-between">
//           <p>{s.title}</p>
//           <p>₹{s.price}</p>
//         </div>
//       ))}
//     </div>
//   )
// }

// function Reviews() {
//   return (
//     <div className="space-y-3">
//       {dummyReviews.map(r => (
//         <div key={r.id} className="border p-4 rounded-xl">
//           <p className="font-medium">{r.user}</p>
//           <p>⭐ {r.rating}</p>
//           <p className="text-sm text-slate-500">{r.comment}</p>
//         </div>
//       ))}
//     </div>
//   )
// }

// function Earnings() {
//   return (
//     <div>
//       <p className="text-lg font-medium">Total Earnings: ₹12,000</p>
//       <p className="text-sm text-slate-500">(Dummy data)</p>
//     </div>
//   )
// }

// function Profile() {
//   return (
//     <div>
//       <p>Edit profile feature here</p>
//     </div>
//   )
// }

// function Card({ title, value }) {
//   return (
//     <div className="p-4 bg-white border rounded-2xl">
//       <p className="text-sm text-slate-500">{title}</p>
//       <p className="text-xl font-semibold">{value}</p>
//     </div>
//   )
// }
