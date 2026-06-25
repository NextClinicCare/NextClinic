import { motion } from 'framer-motion'
import { Check } from 'lucide-react'

const plans = [
  {
    name: 'Setup',
    price: '£350',
    period: 'one-time',
    features: [
      'Full system implementation tailored to your clinic',
      'Complete onboarding and setup walkthrough',
      'Support during configuration',
    ],
    highlight: false,
  },
  {
    name: 'Ongoing',
    price: '£450',
    period: '/mo',
    features: [
      'Automated follow-ups for every enquiry',
      'Converts missed leads into booked appointments',
      'Performance reporting on bookings and conversions',
    ],
    highlight: true,
  },
]

export default function Pricing() {
  return (
    <section id="pricing" className="border-t border-navy/[0.07] py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-semibold tracking-tight text-navy sm:text-4xl">
            Simple, flat pricing
          </h2>
          <p className="mt-3 text-navy-light">No hidden costs.</p>
        </div>

        <div className="mx-auto mt-16 grid max-w-3xl gap-6 md:grid-cols-2">
          {plans.map((p, i) => (
            <motion.div
              key={p.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className={`flex flex-col rounded-2xl border p-9 transition-all hover:-translate-y-1 ${
                p.highlight
                  ? 'border-navy bg-navy text-offwhite'
                  : 'border-navy/[0.08] bg-offwhite text-navy hover:border-navy/20'
              }`}
            >
              <span className="text-xs font-semibold uppercase tracking-[0.18em] text-navy-soft">
                {p.name}
              </span>

              <div className="mt-5 flex items-end gap-1.5">
                <span className="text-5xl font-semibold tracking-tight">{p.price}</span>
                <span
                  className={`pb-1.5 text-sm ${p.highlight ? 'text-offwhite/55' : 'text-navy-light'}`}
                >
                  {p.period}
                </span>
              </div>

              <div
                className={`my-7 h-px w-full ${p.highlight ? 'bg-offwhite/15' : 'bg-navy/[0.08]'}`}
              />

              <ul className="space-y-4">
                {p.features.map((f) => (
                  <li key={f} className="flex items-start gap-3 text-sm">
                    <Check
                      className={`mt-0.5 h-4 w-4 shrink-0 ${
                        p.highlight ? 'text-offwhite' : 'text-navy-soft'
                      }`}
                      strokeWidth={2.5}
                    />
                    <span className={p.highlight ? 'text-offwhite/90' : 'text-navy-light'}>
                      {f}
                    </span>
                  </li>
                ))}
              </ul>

              <a
                href="mailto:sotiris@nextclinic.care?subject=NextClinic%20-%20Getting%20Started"
                className={`mt-9 inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-semibold transition-all ${
                  p.highlight
                    ? 'bg-offwhite text-navy hover:bg-offwhite-2'
                    : 'border border-navy/15 text-navy hover:border-navy hover:bg-navy hover:text-offwhite'
                }`}
              >
                Get started
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
