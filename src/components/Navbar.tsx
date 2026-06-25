import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { Menu, X } from 'lucide-react'

const links = [
  { label: 'How it works', href: '#how-it-works' },
  { label: 'FAQ', href: '#faq' },
]

export default function Navbar() {
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
        {/* Logo */}
        <a href="#top" className="flex items-center">
          <img src="https://i.postimg.cc/WpDGrkn6/IMG-3743.jpg" alt="NextClinic" className="h-8 sm:h-9" style={{ mixBlendMode: 'multiply' }} />
        </a>

        {/* Center links */}
        <div className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-8 md:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm font-medium text-navy-light transition-colors hover:text-navy"
            >
              {l.label}
            </a>
          ))}
        </div>

        {/* CTA */}
        <div className="hidden md:block">
          <a
            href="https://calendly.com/hello-nextclinic"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center rounded-full bg-navy px-5 py-2.5 text-sm font-semibold text-offwhite shadow-sm transition-all hover:bg-navy-light hover:shadow-md"
          >
            Book a Call
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          className="flex h-9 w-9 items-center justify-center rounded-lg text-navy md:hidden"
          onClick={() => setOpen((o) => !o)}
          aria-label="Toggle menu"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      {/* Mobile menu */}
      {open && (
        <motion.div
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          className="border-b border-navy/10 bg-offwhite px-5 py-4 md:hidden"
        >
          <div className="flex flex-col gap-3">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-2 text-sm font-medium text-navy-light hover:bg-offwhite-2"
              >
                {l.label}
              </a>
            ))}
            <a
              href="https://calendly.com/hello-nextclinic"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setOpen(false)}
              className="mt-1 rounded-full bg-navy px-5 py-2.5 text-center text-sm font-semibold text-offwhite"
            >
              Book a Call
            </a>
          </div>
        </motion.div>
      )}
    </header>
  )
}
