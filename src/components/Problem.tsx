import { motion } from 'framer-motion'
import { AlertTriangle, MessageCircleOff, Clock, UserX, Wallet } from 'lucide-react'
import PulseBadge from './PulseBadge'

const points = [
  { icon: MessageCircleOff, text: 'Many enquiries never get a response' },
  { icon: Clock, text: 'Slow replies drastically reduce bookings' },
  { icon: UserX, text: 'Staff forget or don’t follow up consistently' },
  { icon: Wallet, text: 'Paid traffic leads are wasted' },
]

export default function Problem() {
  return (
    <section id="problem" className="px-5 py-24 sm:px-8 sm:py-32">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col items-start gap-10 md:flex-row md:items-center md:gap-16">
          {/* Left: headline + badge */}
          <div className="md:w-2/5">
            <PulseBadge icon={AlertTriangle} />
            <h2 className="mt-7 text-3xl font-semibold leading-tight tracking-tight text-navy sm:text-4xl">
              Many clinics lose up to 40% of enquiries due to missed or delayed follow-ups
            </h2>
          </div>

          {/* Right: points */}
          <div className="grid w-full gap-4 sm:grid-cols-2 md:w-3/5">
            {points.map((p, i) => (
              <motion.div
                key={p.text}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.45, delay: i * 0.08 }}
                className="flex items-start gap-4 rounded-xl border border-navy/[0.08] bg-offwhite p-5 transition-all hover:-translate-y-0.5 hover:border-navy/20"
              >
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-navy/10 text-navy">
                  <p.icon className="h-[17px] w-[17px]" strokeWidth={1.75} />
                </div>
                <p className="pt-1 text-sm font-medium leading-snug text-navy-light">
                  {p.text}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
