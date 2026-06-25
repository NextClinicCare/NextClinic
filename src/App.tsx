import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  Menu, X, ArrowRight,
  AlertTriangle, MessageCircleOff, Clock, UserX, Wallet,
  Zap, Send, Compass, ShieldCheck,
  CalendarCheck, Plug, Bot,
  Building2, Inbox, Timer, TrendingUp, ClipboardList, Layers,
  Check, Plus,
} from 'lucide-react'
import type { LucideIcon } from 'lucide-react'

const LOGO_URL = '/logo-full.png'
const CALENDLY_URL = 'https://calendly.com/hello-nextclinic'
const EMAIL_URL = 'mailto:sotiris@nextclinic.care?subject=NextClinic%20-%20Getting%20Started'

/* ===================== PULSE BADGE ===================== */
function PulseBadge({ icon: Icon, size = 26 }: { icon: LucideIcon; size?: number }) {
  return (
    <div className="relative flex h-16 w-16 items-center justify-center">
      <motion.span
        className="absolute inset-0 rounded-full bg-navy opacity-[0.12]"
        animate={{ scale: [1, 1.4, 1], opacity: [0.14, 0, 0.14] }}
        transition={{ duration: 2.8, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.span
        className="absolute inset-0 rounded-full bg-navy opacity-[0.06]"
        animate={{ scale: [1, 1.7, 1], opacity: [0.08, 0, 0.08] }}
        transition={{ duration: 2.8, repeat: Infinity, ease: 'easeInOut', delay: 0.7 }}
      />
      <div className="relative flex h-14 w-14 items-center justify-center rounded-full border border-navy/10 bg-offwhite">
        <Icon className="text-navy" style={{ width: size, height: size }} strokeWidth={1.5} />
      </div>
    </div>
  )
}

/* ===================== NAVBAR ===================== */
const navLinks = [
  { label: 'How it works', href: '#how-it-works' },
  { label: 'FAQ', href: '#faq' },
]

function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled ? 'border-b border-navy/10 bg-offwhite/80 backdrop-blur-md' : 'bg-transparent'
      }`}
    >
      <nav className="relative mx-auto flex max-w-6xl items-center justify-between px-5 py-4 sm:px-8 sm:py-5">
        <a href="#top" className="flex items-center">
          <img src={LOGO_URL} alt="NextClinic" className="h-8 sm:h-9" style={{ mixBlendMode: 'multiply' }} />
        </a>

        <div className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-8 md:flex">
          {navLinks.map((l) => (
            <a key={l.href} href={l.href} className="text-sm font-medium text-navy-light transition-colors hover:text-navy">
              {l.label}
            </a>
          ))}
        </div>

        <div className="hidden md:block">
          <a href={CALENDLY_URL} target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center rounded-full bg-navy px-5 py-2.5 text-sm font-semibold text-offwhite shadow-sm transition-all hover:bg-navy-light hover:shadow-md">
            Book a Call
          </a>
        </div>

        <button className="flex h-9 w-9 items-center justify-center rounded-lg text-navy md:hidden"
          onClick={() => setOpen((o) => !o)} aria-label="Toggle menu">
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      {open && (
        <motion.div initial={{ opacity: 0, y: -8 }} animate={{ opacity: 1, y: 0 }}
          className="border-b border-navy/10 bg-offwhite px-5 py-4 md:hidden">
          <div className="flex flex-col gap-3">
            {navLinks.map((l) => (
              <a key={l.href} href={l.href} onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-2 text-sm font-medium text-navy-light hover:bg-offwhite-2">
                {l.label}
              </a>
            ))}
            <a href={CALENDLY_URL} target="_blank" rel="noopener noreferrer" onClick={() => setOpen(false)}
              className="mt-1 rounded-full bg-navy px-5 py-2.5 text-center text-sm font-semibold text-offwhite">
              Book a Call
            </a>
          </div>
        </motion.div>
      )}
    </header>
  )
}

/* ===================== HERO ===================== */
function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-36 pb-24 sm:pt-44 sm:pb-32">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-0 h-[420px] w-[760px] -translate-x-1/2 rounded-full bg-navy/[0.04] blur-3xl" />
      </div>

      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}
          className="mx-auto max-w-3xl text-center">
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
            <a href="#problem"
              className="group inline-flex w-full items-center justify-center gap-2 rounded-full bg-navy px-7 py-3.5 text-sm font-semibold text-offwhite transition-all hover:bg-navy-light sm:w-auto">
              Learn more
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </a>
            <a href="#how-it-works"
              className="inline-flex w-full items-center justify-center rounded-full border border-navy/15 px-7 py-3.5 text-sm font-semibold text-navy transition-all hover:border-navy/30 sm:w-auto">
              See how it works
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

/* ===================== PROBLEM ===================== */
const problemPoints = [
  { icon: MessageCircleOff, text: 'Many enquiries never get a response' },
  { icon: Clock, text: 'Slow replies drastically reduce bookings' },
  { icon: UserX, text: 'Staff forget or don\u2019t follow up consistently' },
  { icon: Wallet, text: 'Paid traffic leads are wasted' },
]

function Problem() {
  return (
    <section id="problem" className="px-5 py-24 sm:px-8 sm:py-32">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col items-start gap-10 md:flex-row md:items-center md:gap-16">
          <div className="md:w-2/5">
            <PulseBadge icon={AlertTriangle} />
            <h2 className="mt-7 text-3xl font-semibold leading-tight tracking-tight text-navy sm:text-4xl">
              Many clinics lose up to 40% of enquiries due to missed or delayed follow-ups
            </h2>
          </div>
          <div className="grid w-full gap-4 sm:grid-cols-2 md:w-3/5">
            {problemPoints.map((p, i) => (
              <motion.div key={p.text} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }} transition={{ duration: 0.45, delay: i * 0.08 }}
                className="flex items-start gap-4 rounded-xl border border-navy/[0.08] bg-offwhite p-5 transition-all hover:-translate-y-0.5 hover:border-navy/20">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-navy/10 text-navy">
                  <p.icon className="h-[17px] w-[17px]" strokeWidth={1.75} />
                </div>
                <p className="pt-1 text-sm font-medium leading-snug text-navy-light">{p.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

/* ===================== SOLUTION ===================== */
const solutionPoints = [
  { icon: Send, text: 'Every enquiry is followed up automatically' },
  { icon: Compass, text: 'Patients are guided towards booking without manual effort' },
  { icon: ShieldCheck, text: 'No missed leads or forgotten messages' },
]

function Solution() {
  return (
    <section className="border-t border-navy/[0.07] px-5 py-24 sm:px-8 sm:py-32">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col items-start gap-10 md:flex-row-reverse md:items-center md:gap-16">
          <div className="md:w-2/5">
            <PulseBadge icon={Zap} />
            <h2 className="mt-7 text-3xl font-semibold leading-tight tracking-tight text-navy sm:text-4xl">
              An automated follow-up system for clinics
            </h2>
            <p className="mt-4 text-navy-light">
              Every enquiry captured, every patient nudged towards a booking — on autopilot.
            </p>
          </div>
          <div className="grid w-full gap-4 md:w-3/5">
            {solutionPoints.map((p, i) => (
              <motion.div key={p.text} initial={{ opacity: 0, x: 16 }} whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-50px' }} transition={{ duration: 0.45, delay: i * 0.08 }}
                className="flex items-center gap-5 rounded-xl border border-navy/[0.08] bg-offwhite p-6 transition-all hover:-translate-y-0.5 hover:border-navy/20">
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

/* ===================== HOW IT WORKS ===================== */
const steps = [
  { icon: CalendarCheck, step: 'Step 1', title: 'Book a free consultation call', desc: 'We review your clinic and current enquiry flow.' },
  { icon: Plug, step: 'Step 2', title: 'Connect your enquiry sources', desc: 'We connect your website forms, booking tools, and lead channels.' },
  { icon: Bot, step: 'Step 3', title: 'Automation goes live', desc: 'Patients are followed up automatically until they respond or book an appointment.' },
]

function HowItWorks() {
  return (
    <section id="how-it-works" className="border-t border-navy/[0.07] px-5 py-24 sm:px-8 sm:py-32">
      <div className="mx-auto max-w-6xl">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-semibold tracking-tight text-navy sm:text-4xl">How it works</h2>
          <p className="mt-3 text-navy-light">Three simple steps from consultation to automated bookings.</p>
        </div>
        <div className="relative mt-16 grid gap-8 md:grid-cols-3">
          <div className="pointer-events-none absolute left-0 right-0 top-8 hidden h-px bg-gradient-to-r from-transparent via-navy/10 to-transparent md:block" />
          {steps.map((s, i) => (
            <motion.div key={s.step} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }} transition={{ duration: 0.5, delay: i * 0.12 }}
              className="relative flex flex-col items-center rounded-2xl border border-navy/[0.08] bg-offwhite p-8 text-center transition-all hover:-translate-y-1 hover:border-navy/20">
              <PulseBadge icon={s.icon} />
              <span className="mt-6 text-xs font-semibold uppercase tracking-widest text-navy-soft">{s.step}</span>
              <h3 className="mt-2 text-lg font-semibold text-navy">{s.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-navy-light">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ===================== BUILT FOR ===================== */
const builtPoints = [
  { icon: Inbox, text: 'No missed enquiries' },
  { icon: Timer, text: 'Faster response times' },
  { icon: TrendingUp, text: 'Higher conversion from existing leads' },
  { icon: ClipboardList, text: 'Less admin work' },
  { icon: Layers, text: 'Works with your current systems' },
]

function BuiltFor() {
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
            {builtPoints.map((p, i) => (
              <motion.div key={p.text} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }} transition={{ duration: 0.45, delay: i * 0.07 }}
                className={`flex items-center gap-4 rounded-xl border border-navy/[0.08] bg-offwhite p-5 transition-all hover:-translate-y-0.5 hover:border-navy/20 ${
                  i === builtPoints.length - 1 ? 'sm:col-span-2' : ''
                }`}>
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

/* ===================== MID CTA ===================== */
function MidCTA() {
  return (
    <section className="px-5 py-16 sm:px-8 sm:py-20">
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-60px' }} transition={{ duration: 0.5 }}
        className="mx-auto max-w-5xl rounded-3xl bg-navy px-8 py-16 text-center sm:px-12 sm:py-20">
        <h2 className="text-3xl font-semibold tracking-tight text-offwhite sm:text-4xl">
          Simple system. Ongoing results.
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-base text-offwhite/60">
          Turn your existing enquiries into booked appointments.
        </p>
        <a href="#pricing"
          className="group mt-8 inline-flex items-center justify-center gap-2 rounded-full bg-offwhite px-7 py-3.5 text-sm font-semibold text-navy transition-all hover:bg-offwhite-2">
          View pricing
          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
        </a>
      </motion.div>
    </section>
  )
}

/* ===================== PRICING ===================== */
const plans = [
  {
    name: 'Setup', price: '£350', period: 'one-time', highlight: false,
    features: [
      'Full system implementation tailored to your clinic',
      'Complete onboarding and setup walkthrough',
      'Support during configuration',
    ],
  },
  {
    name: 'Ongoing', price: '£450', period: '/mo', highlight: true,
    features: [
      'Automated follow-ups for every enquiry',
      'Converts missed leads into booked appointments',
      'Performance reporting on bookings and conversions',
    ],
  },
]

function Pricing() {
  return (
    <section id="pricing" className="border-t border-navy/[0.07] py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-semibold tracking-tight text-navy sm:text-4xl">Simple, flat pricing</h2>
          <p className="mt-3 text-navy-light">No hidden costs.</p>
        </div>
        <div className="mx-auto mt-16 grid max-w-3xl gap-6 md:grid-cols-2">
          {plans.map((p, i) => (
            <motion.div key={p.name} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }} transition={{ duration: 0.5, delay: i * 0.1 }}
              className={`flex flex-col rounded-2xl border p-9 transition-all hover:-translate-y-1 ${
                p.highlight ? 'border-navy bg-navy text-offwhite' : 'border-navy/[0.08] bg-offwhite text-navy hover:border-navy/20'
              }`}>
              <span className="text-xs font-semibold uppercase tracking-[0.18em] text-navy-soft">{p.name}</span>
              <div className="mt-5 flex items-end gap-1.5">
                <span className="text-5xl font-semibold tracking-tight">{p.price}</span>
                <span className={`pb-1.5 text-sm ${p.highlight ? 'text-offwhite/55' : 'text-navy-light'}`}>{p.period}</span>
              </div>
              <div className={`my-7 h-px w-full ${p.highlight ? 'bg-offwhite/15' : 'bg-navy/[0.08]'}`} />
              <ul className="space-y-4">
                {p.features.map((f) => (
                  <li key={f} className="flex items-start gap-3 text-sm">
                    <Check className={`mt-0.5 h-4 w-4 shrink-0 ${p.highlight ? 'text-offwhite' : 'text-navy-soft'}`} strokeWidth={2.5} />
                    <span className={p.highlight ? 'text-offwhite/90' : 'text-navy-light'}>{f}</span>
                  </li>
                ))}
              </ul>
              <a href={EMAIL_URL}
                className={`mt-9 inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-semibold transition-all ${
                  p.highlight ? 'bg-offwhite text-navy hover:bg-offwhite-2' : 'border border-navy/15 text-navy hover:border-navy hover:bg-navy hover:text-offwhite'
                }`}>
                Get started
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ===================== FAQ ===================== */
const faqs = [
  { q: 'What does NextClinic actually do?', a: 'We automate follow-ups for aesthetic and cosmetic clinics to turn missed enquiries into booked appointments.' },
  { q: 'Do you replace our booking system or CRM?', a: 'No — we integrate with your existing website forms, booking tools, and enquiry channels. No need to change your current setup.' },
  { q: 'How does the system get set up for my clinic?', a: 'We review your current enquiry flow, connect your systems, and activate automated follow-ups tailored to your clinic.' },
  { q: 'How quickly can it be set up?', a: 'Setup usually takes a short onboarding process after your consultation call.' },
  { q: 'Does this work with my current website and booking system?', a: 'Yes — it works with any website, booking system, or enquiry form.' },
  { q: 'Is this suitable for small clinics?', a: 'Yes — it\u2019s designed for both small and large aesthetic and cosmetic clinics that rely on appointment bookings.' },
]

function FAQ() {
  const [open, setOpen] = useState<number | null>(0)
  return (
    <section id="faq" className="border-t border-navy/[0.07] px-5 py-24 sm:px-8 sm:py-32">
      <div className="mx-auto max-w-3xl">
        <div className="text-center">
          <h2 className="text-3xl font-semibold tracking-tight text-navy sm:text-4xl">Frequently asked questions</h2>
          <p className="mt-3 text-navy-light">Everything you need to know about how NextClinic works.</p>
        </div>
        <div className="mt-12 space-y-3">
          {faqs.map((f, i) => {
            const isOpen = open === i
            return (
              <div key={f.q} className="overflow-hidden rounded-xl border border-navy/[0.08] bg-offwhite">
                <button onClick={() => setOpen(isOpen ? null : i)}
                  className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left">
                  <span className="text-base font-medium text-navy">{f.q}</span>
                  <motion.span animate={{ rotate: isOpen ? 45 : 0 }} transition={{ duration: 0.2 }}
                    className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-navy/10">
                    <Plus className="h-4 w-4 text-navy" strokeWidth={2} />
                  </motion.span>
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.3, ease: 'easeInOut' }}>
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

/* ===================== FINAL CTA ===================== */
function FinalCTA() {
  return (
    <section id="book" className="px-5 pb-28 pt-4 sm:px-8">
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-60px' }} transition={{ duration: 0.5 }}
        className="relative mx-auto max-w-5xl overflow-hidden rounded-3xl bg-navy px-8 py-20 text-center sm:px-12 sm:py-24">
        <div className="pointer-events-none absolute inset-0 opacity-[0.05]"
          style={{ backgroundImage: 'radial-gradient(circle, #ffffff 1px, transparent 1px)', backgroundSize: '22px 22px' }} />
        <div className="relative">
          <h2 className="text-3xl font-semibold tracking-tight text-offwhite sm:text-4xl md:text-5xl">
            Stop losing patient enquiries every day
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-offwhite/60">
            Automated follow-ups ensure every enquiry is responded to and guided towards booking.
          </p>
          <a href={CALENDLY_URL} target="_blank" rel="noopener noreferrer"
            className="group mt-9 inline-flex items-center justify-center gap-2 rounded-full bg-offwhite px-8 py-3.5 text-sm font-semibold text-navy transition-all hover:bg-offwhite-2">
            Book a Call
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </a>
        </div>
      </motion.div>
    </section>
  )
}

/* ===================== FOOTER ===================== */
function Footer() {
  return (
    <footer className="border-t border-navy/[0.07] bg-offwhite">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 px-5 py-10 sm:flex-row sm:px-8">
        <div className="flex items-center">
          <img src={LOGO_URL} alt="NextClinic" className="h-7" style={{ mixBlendMode: 'multiply' }} />
        </div>
        <nav className="flex items-center gap-6 text-sm text-navy-light">
          <a href="#how-it-works" className="transition-colors hover:text-navy">How it works</a>
          <a href="#faq" className="transition-colors hover:text-navy">FAQ</a>
          <a href="#pricing" className="transition-colors hover:text-navy">Pricing</a>
        </nav>
        <p className="text-xs text-navy-light">© {new Date().getFullYear()} NextClinic. All rights reserved.</p>
      </div>
    </footer>
  )
}

/* ===================== APP ===================== */
export default function App() {
  return (
    <div className="min-h-screen bg-offwhite text-navy">
      <Navbar />
      <main>
        <Hero />
        <Problem />
        <Solution />
        <HowItWorks />
        <BuiltFor />
        <MidCTA />
        <Pricing />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  )
}
