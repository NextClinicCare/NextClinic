import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Plus } from 'lucide-react'

const faqs = [
  {
    q: 'What does NextClinic actually do?',
    a: 'We automate follow-ups for aesthetic and cosmetic clinics to turn missed enquiries into booked appointments.',
  },
  {
    q: 'Do you replace our booking system or CRM?',
    a: 'No — we integrate with your existing website forms, booking tools, and enquiry channels. No need to change your current setup.',
  },
  {
    q: 'How does the system get set up for my clinic?',
    a: 'We review your current enquiry flow, connect your systems, and activate automated follow-ups tailored to your clinic.',
  },
  {
    q: 'How quickly can it be set up?',
    a: 'Setup usually takes a short onboarding process after your consultation call.',
  },
  {
    q: 'Does this work with my current website and booking system?',
    a: 'Yes — it works with any website, booking system, or enquiry form.',
  },
  {
    q: 'Is this suitable for small clinics?',
    a: 'Yes — it’s designed for both small and large aesthetic and cosmetic clinics that rely on appointment bookings.',
  },
]

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0)

  return (
    <section id="faq" className="border-t border-navy/[0.07] px-5 py-24 sm:px-8 sm:py-32">
      <div className="mx-auto max-w-3xl">
        <div className="text-center">
          <h2 className="text-3xl font-semibold tracking-tight text-navy sm:text-4xl">
            Frequently asked questions
          </h2>
          <p className="mt-3 text-navy-light">
            Everything you need to know about how NextClinic works.
          </p>
        </div>

        <div className="mt-12 space-y-3">
          {faqs.map((f, i) => {
            const isOpen = open === i
            return (
              <div
                key={f.q}
                className="overflow-hidden rounded-xl border border-navy/[0.08] bg-offwhite"
              >
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
                >
                  <span className="text-base font-medium text-navy">{f.q}</span>
                  <motion.span
                    animate={{ rotate: isOpen ? 45 : 0 }}
                    transition={{ duration: 0.2 }}
                    className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-navy/10"
                  >
                    <Plus className="h-4 w-4 text-navy" strokeWidth={2} />
                  </motion.span>
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: 'easeInOut' }}
                    >
                      <p className="px-6 pb-5 text-sm leading-relaxed text-navy-light">{f.a}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
