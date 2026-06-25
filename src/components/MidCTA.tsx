import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

export default function MidCTA() {
  return (
    <section className="px-5 py-16 sm:px-8 sm:py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 0.5 }}
        className="mx-auto max-w-5xl rounded-3xl bg-navy px-8 py-16 text-center sm:px-12 sm:py-20"
      >
        <h2 className="text-3xl font-semibold tracking-tight text-offwhite sm:text-4xl">
          Simple system. Ongoing results.
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-base text-offwhite/60">
          Turn your existing enquiries into booked appointments.
        </p>
        <a
          href="#pricing"
          className="group mt-8 inline-flex items-center justify-center gap-2 rounded-full bg-offwhite px-7 py-3.5 text-sm font-semibold text-navy transition-all hover:bg-offwhite-2"
        >
          View pricing
          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
        </a>
      </motion.div>
    </section>
  )
}
