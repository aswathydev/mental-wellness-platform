// import { Link } from 'react-router-dom'

// export default function RegisterPage() {
//   return (
//     <div className="max-w-md mx-auto">
//       <h1 className="text-2xl font-semibold text-slate-900 dark:text-white">Create account</h1>
//       <form className="mt-8 space-y-4 text-left" onSubmit={(e) => e.preventDefault()}>
//         <label className="block">
//           <span className="text-sm font-medium text-slate-700 dark:text-slate-200">Display name</span>
//           <input
//             type="text"
//             className="mt-1 w-full rounded-xl border border-slate-200 dark:border-slate-600 bg-white dark:bg-slate-900 px-3 py-2.5 text-sm"
//             placeholder="How should we call you?"
//           />
//         </label>
//         <label className="block">
//           <span className="text-sm font-medium text-slate-700 dark:text-slate-200">Email</span>
//           <input
//             type="email"
//             className="mt-1 w-full rounded-xl border border-slate-200 dark:border-slate-600 bg-white dark:bg-slate-900 px-3 py-2.5 text-sm"
//             placeholder="you@example.com"
//             autoComplete="email"
//           />
//         </label>
//         <label className="block">
//           <span className="text-sm font-medium text-slate-700 dark:text-slate-200">Password</span>
//           <input
//             type="password"
//             className="mt-1 w-full rounded-xl border border-slate-200 dark:border-slate-600 bg-white dark:bg-slate-900 px-3 py-2.5 text-sm"
//             placeholder="••••••••"
//             autoComplete="new-password"
//           />
//         </label>
//         <button
//           type="submit"
//           className="w-full rounded-xl bg-teal-600 text-white py-2.5 text-sm font-medium hover:bg-teal-700"
//         >
//           Register
//         </button>
//       </form>
//       <p className="mt-6 text-center text-sm text-slate-500">
//         Already have an account?{' '}
//         <Link to="/login" className="font-medium text-teal-700 dark:text-teal-300 hover:underline">
//           Sign in
//         </Link>
//       </p>
//     </div>
//   )
// }



import { Link } from 'react-router-dom'

export default function RegisterPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-50 via-white to-teal-50 dark:from-indigo-950/40 dark:via-slate-900 dark:to-teal-950/40 px-4">
      
      {/* Card */}
      <div className="w-full max-w-md bg-white/80 dark:bg-slate-900/70 backdrop-blur-xl rounded-2xl shadow-xl border border-slate-200/60 dark:border-slate-700 p-8">
        
        {/* Header */}
        <div className="text-center">
          <h1 className="text-2xl font-semibold text-slate-900 dark:text-white">
            Join Heal Together 🌿
          </h1>
          <p className="mt-2 text-sm text-slate-500">
            Start your wellness journey today
          </p>
        </div>

        {/* Form */}
        <form className="mt-6 space-y-4" onSubmit={(e) => e.preventDefault()}>
          
          {/* Name */}
          <label className="block text-left">
            <span className="text-sm font-medium text-slate-700 dark:text-slate-200">
              Display Name
            </span>
            <input
              type="text"
              placeholder="How should we call you?"
              className="mt-1 w-full rounded-xl border border-slate-200 dark:border-slate-600 bg-white/70 dark:bg-slate-800 px-3 py-2.5 text-sm focus:ring-2 focus:ring-teal-400 outline-none"
            />
          </label>

          {/* Email */}
          <label className="block text-left">
            <span className="text-sm font-medium text-slate-700 dark:text-slate-200">
              Email
            </span>
            <input
              type="email"
              placeholder="you@example.com"
              autoComplete="email"
              className="mt-1 w-full rounded-xl border border-slate-200 dark:border-slate-600 bg-white/70 dark:bg-slate-800 px-3 py-2.5 text-sm focus:ring-2 focus:ring-teal-400 outline-none"
            />
          </label>

          {/* Password */}
          <label className="block text-left">
            <span className="text-sm font-medium text-slate-700 dark:text-slate-200">
              Password
            </span>
            <input
              type="password"
              placeholder="••••••••"
              autoComplete="new-password"
              className="mt-1 w-full rounded-xl border border-slate-200 dark:border-slate-600 bg-white/70 dark:bg-slate-800 px-3 py-2.5 text-sm focus:ring-2 focus:ring-teal-400 outline-none"
            />
          </label>

          {/* Confirm Password (Recommended) */}
          <label className="block text-left">
            <span className="text-sm font-medium text-slate-700 dark:text-slate-200">
              Confirm Password
            </span>
            <input
              type="password"
              placeholder="••••••••"
              className="mt-1 w-full rounded-xl border border-slate-200 dark:border-slate-600 bg-white/70 dark:bg-slate-800 px-3 py-2.5 text-sm focus:ring-2 focus:ring-teal-400 outline-none"
            />
          </label>

          {/* Button */}
          <button
            type="submit"
            className="w-full rounded-xl bg-gradient-to-r from-indigo-500 to-teal-500 text-white py-2.5 text-sm font-medium hover:opacity-90 transition"
          >
             <Link
            to="/"
            className="font-medium text-white-600 hover:underline"
          >
            Create Account
          </Link>
          </button>
        </form>

        {/* Footer */}
        <p className="mt-6 text-center text-sm text-slate-500">
          Already have an account?{' '}
          <Link
            to="/login"
            className="font-medium text-teal-600 hover:underline"
          >
            Sign in
          </Link>
        </p>
      </div>
    </div>
  )
}