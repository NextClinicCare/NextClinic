import { motion } from 'framer-motion'
import { Building2, Inbox, Timer, TrendingUp, ClipboardList, Layers } from 'lucide-react'
import PulseBadge from './PulseBadge'

const points = [
  { icon: Inbox, text: 'No missed enquiries' },
  { icon: Timer, text: 'Faster response times' },
  { icon: TrendingUp, text: 'Higher conversion from existing leads' },
  { icon: ClipboardList, text: 'Less admin work' },
  { icon: Layers, text: 'Works with your current systems' },
]

export default function BuiltFor() {
  return (
    <section className="border-t border-navy/[0.07] px-5 py-24 sm:px-8 sm:py-32">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col items-start gap-10 md:flex-row md:items-center md:gap-16">
          <div className="md:w-2/5">
            <PulseBadge icon={Building2} />
            <h2 className="mt-7 text-3xl font-semibold leading-tight tracking-tight text-navy sm:text-4xl">
              Built for busy clinics
            </h2>
            <p className="mt-4 text-navy-light">
              Designed around the realities of running an aesthetic or cosmetic clinic — less
              manual work, more booked appointments.
            </p>
          </div>

          <div className="grid w-full gap-4 sm:grid-cols-2 md:w-3/5">
            {points.map((p, i) => (
              <motion.div
                key={p.text}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.45, delay: i * 0.07 }}
                className={`flex items-center gap-4 rounded-xl border border-navy/[0.08] bg-offwhite p-5 transition-all hover:-translate-y-0.5 hover:border-navy/20 ${
                  i === points.length - 1 ? 'sm:col-span-2' : ''
                }`}
              >
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-navy/10 text-navy">
                  <p.icon className="h-[17px] w-[17px]" strokeWidth={1.75} />
                </div>
                <p className="text-sm font-medium text-navy">{p.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
