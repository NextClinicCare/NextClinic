import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

export default function FinalCTA() {
  return (
    <section id="book" className="px-5 pb-28 pt-4 sm:px-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 0.5 }}
        className="relative mx-auto max-w-5xl overflow-hidden rounded-3xl bg-navy px-8 py-20 text-center sm:px-12 sm:py-24"
      >
        {/* subtle dotted texture */}
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.05]"
          style={{
            backgroundImage: 'radial-gradient(circle, #ffffff 1px, transparent 1px)',
            backgroundSize: '22px 22px',
          }}
        />
        <div className="relative">
          <h2 className="text-3xl font-semibold tracking-tight text-offwhite sm:text-4xl md:text-5xl">
            Stop losing patient enquiries every day
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-offwhite/60">
            Automated follow-ups ensure every enquiry is responded to and guided towards booking.
          </p>
          <a
            href="https://calendly.com/hello-nextclinic"
            target="_blank"
            rel="noopener noreferrer"
            className="group mt-9 inline-flex items-center justify-center gap-2 rounded-full bg-offwhite px-8 py-3.5 text-sm font-semibold text-navy transition-all hover:bg-offwhite-2"
          >
            Book a Call
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </a>
        </div>
      </motion.div>
    </section>
  )
}
