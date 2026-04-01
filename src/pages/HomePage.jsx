import { Link } from 'react-router-dom'
import { helpRequests } from '../data/mockData'
import { useState, useEffect } from 'react'
import heroImage from '../assets/hero_image.png'
import Marquee from "react-fast-marquee/dist";
import FloatingChatButton from "../components/FloatingChatButton";
import MoodPrompt from "../components/home/MoodPrompt";
import { quotes } from '../data/mockData'

export default function HomePage() {
  const daily = quotes[0]

  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div className="space-y-4">
      <div className="bg-gradient-to-r from-indigo-500 to-teal-500 text-white py-2 px-4 rounded-lg mb-4">
        {mounted && (
          <Marquee.default speed={50} gradient={false}>
            🚨 Urgent:  🩸 A+ blood required for emergency surgery | Location: Kochi | Contact immediately to save a life
          </Marquee.default>
        )}
      </div>

      <section className="rounded-2xl bg-gradient-to-br from-indigo-50 via-white to-teal-50 dark:from-indigo-950/40 dark:via-slate-900 dark:to-teal-950/40 border border-white-100/70 dark:border-white-800 p-6 sm:p-10">


        <div className="flex flex-col-reverse sm:flex-row items-center gap-8">

          {/* LEFT CONTENT */}
          <div className="w-full sm:w-1/2 text-center sm:text-left">

            <p className="text-indigo-600 dark:text-indigo-300 text-sm font-medium uppercase tracking-wide">
              Mental Wellness Platform
            </p>

            <h1 className="mt-2 text-3xl sm:text-4xl font-semibold text-slate-900 dark:text-white tracking-tight">
              Heal Together, Grow Stronger
            </h1>

            <p className="mt-3 max-w-xl text-slate-600 dark:text-slate-300">
              A safe space to share, reflect, and improve your mental well-being
              — with AI support, journaling, and a caring community.
            </p>

            <div className="mt-6 flex flex-wrap gap-3 justify-center sm:justify-start">

              <Link
                to="/"
                className="inline-flex items-center justify-center rounded-xl bg-indigo-600 text-white px-5 py-2.5 text-sm font-medium shadow-sm hover:bg-indigo-700"
              >
                Share your thoughts
              </Link>

              <Link
                to="/"
                className="inline-flex items-center justify-center rounded-xl border border-slate-300 dark:border-slate-600 px-5 py-2.5 text-sm font-medium hover:bg-slate-50 dark:hover:bg-slate-800"
              >
                Support
              </Link>

            </div>
          </div>

          {/* RIGHT IMAGE */}
          <div className="w-full sm:w-1/2">
            <img
              src={heroImage}
              className="w-full max-w-md mx-auto"
            />
          </div>
        </div>
      </section>

      <section className="flex flex-col md:flex-row gap-6">
        <div className="w-full md:flex-[7] rounded-2xl bg-gradient-to-br from-amber-700 to-purple-700 dark:from-blue-900/80 dark:to-purple-900/70 border border-amber-800 dark:border-amber-700/50 p-6 text-left">
          <p className="text-xs font-semibold uppercase tracking-wide text-amber-800 dark:text-amber-200">
            Quote of the day
          </p>
          <blockquote className="mt-3 text-lg text-slate-800 dark:text-slate-100 leading-relaxed">
            “{daily.text}”
          </blockquote>
          <p className="mt-3 text-sm text-slate-600 dark:text-slate-400">— {daily.author}</p>
        </div>

        <div className="w-full md:flex-[3]">
          <MoodPrompt />
        </div>
      </section>

    </div>
  )
}
