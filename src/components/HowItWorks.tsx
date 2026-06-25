import { motion } from 'framer-motion'
import { CalendarCheck, Plug, Bot } from 'lucide-react'
import PulseBadge from './PulseBadge'

const steps = [
  {
    icon: CalendarCheck,
    step: 'Step 1',
    title: 'Book a free consultation call',
    desc: 'We review your clinic and current enquiry flow.',
  },
  {
    icon: Plug,
    step: 'Step 2',
    title: 'Connect your enquiry sources',
    desc: 'We connect your website forms, booking tools, and lead channels.',
  },
  {
    icon: Bot,
    step: 'Step 3',
    title: 'Automation goes live',
    desc: 'Patients are followed up automatically until they respond or book an appointment.',
  },
]

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="border-t border-navy/[0.07] px-5 py-24 sm:px-8 sm:py-32">
      <div className="mx-auto max-w-6xl">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-semibold tracking-tight text-navy sm:text-4xl">
            How it works
          </h2>
          <p className="mt-3 text-navy-light">
            Three simple steps from consultation to automated bookings.
          </p>
        </div>

        <div className="relative mt-16 grid gap-8 md:grid-cols-3">
          {/* connecting line */}
          <div className="pointer-events-none absolute left-0 right-0 top-8 hidden h-px bg-gradient-to-r from-transparent via-navy/10 to-transparent md:block" />

          {steps.map((s, i) => (
            <motion.div
              key={s.step}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: i * 0.12 }}
              className="relative flex flex-col items-center rounded-2xl border border-navy/[0.08] bg-offwhite p-8 text-center transition-all hover:-translate-y-1 hover:border-navy/20"
            >
              <PulseBadge icon={s.icon} />
              <span className="mt-6 text-xs font-semibold uppercase tracking-widest text-navy-soft">
                {s.step}
              </span>
              <h3 className="mt-2 text-lg font-semibold text-navy">{s.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-navy-light">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
