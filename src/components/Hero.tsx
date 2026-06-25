import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-36 pb-24 sm:pt-44 sm:pb-32">
      {/* soft background glow */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-0 h-[420px] w-[760px] -translate-x-1/2 rounded-full bg-navy/[0.04] blur-3xl" />
      </div>

      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-3xl text-center"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-navy/10 bg-offwhite px-3.5 py-1.5 text-xs font-medium text-navy-light">
            <span className="relative flex h-1.5 w-1.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-navy/40" />
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-navy" />
            </span>
            Enquiry-to-Booking Conversion System
          </span>

          <h1 className="mt-7 text-4xl font-semibold leading-[1.12] tracking-tight text-navy sm:text-5xl md:text-6xl">
            Turn missed clinic enquiries into{' '}
            <span className="text-navy-soft">booked appointments</span>
          </h1>

          <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-navy-light">
            We help aesthetic, cosmetic dentistry and skin clinics respond to every enquiry
            instantly and follow-up reliably so more enquiries turn into booked appointments —
            without extra admin.
          </p>

          <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a
              href="#problem"
              className="group inline-flex w-full items-center justify-center gap-2 rounded-full bg-navy px-7 py-3.5 text-sm font-semibold text-offwhite transition-all hover:bg-navy-light sm:w-auto"
            >
              Learn more
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </a>
            <a
              href="#how-it-works"
              className="inline-flex w-full items-center justify-center rounded-full border border-navy/15 px-7 py-3.5 text-sm font-semibold text-navy transition-all hover:border-navy/30 sm:w-auto"
            >
              See how it works
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
