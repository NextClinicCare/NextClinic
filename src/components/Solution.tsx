import { motion } from 'framer-motion'
import { Zap, Send, Compass, ShieldCheck } from 'lucide-react'
import PulseBadge from './PulseBadge'

const points = [
  { icon: Send, text: 'Every enquiry is followed up automatically' },
  { icon: Compass, text: 'Patients are guided towards booking without manual effort' },
  { icon: ShieldCheck, text: 'No missed leads or forgotten messages' },
]

export default function Solution() {
  return (
    <section className="border-t border-navy/[0.07] px-5 py-24 sm:px-8 sm:py-32">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col items-start gap-10 md:flex-row-reverse md:items-center md:gap-16">
          {/* Right side (visually left on desktop due to reverse): headline */}
          <div className="md:w-2/5">
            <PulseBadge icon={Zap} />
            <h2 className="mt-7 text-3xl font-semibold leading-tight tracking-tight text-navy sm:text-4xl">
              An automated follow-up system for clinics
            </h2>
            <p className="mt-4 text-navy-light">
              Every enquiry captured, every patient nudged towards a booking — on autopilot.
            </p>
          </div>

          {/* Points */}
          <div className="grid w-full gap-4 md:w-3/5">
            {points.map((p, i) => (
              <motion.div
                key={p.text}
                initial={{ opacity: 0, x: 16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.45, delay: i * 0.08 }}
                className="flex items-center gap-5 rounded-xl border border-navy/[0.08] bg-offwhite p-6 transition-all hover:-translate-y-0.5 hover:border-navy/20"
              >
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-navy/10 text-navy">
                  <p.icon className="h-[18px] w-[18px]" strokeWidth={1.75} />
                </div>
                <p className="text-[15px] font-medium text-navy">{p.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
