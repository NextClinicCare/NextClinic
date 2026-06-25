export default function Footer() {
  return (
    <footer className="border-t border-navy/[0.07] bg-offwhite">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 px-5 py-10 sm:flex-row sm:px-8">
        <div className="flex items-center">
          <img src="https://i.postimg.cc/WpDGrkn6/IMG-3743.jpg" alt="NextClinic" className="h-7" style={{ mixBlendMode: 'multiply' }} />
        </div>

        <nav className="flex items-center gap-6 text-sm text-navy-light">
          <a href="#how-it-works" className="transition-colors hover:text-navy">
            How it works
          </a>
          <a href="#faq" className="transition-colors hover:text-navy">
            FAQ
          </a>
          <a href="#pricing" className="transition-colors hover:text-navy">
            Pricing
          </a>
        </nav>

        <p className="text-xs text-navy-light">© {new Date().getFullYear()} NextClinic. All rights reserved.</p>
      </div>
    </footer>
  )
}
