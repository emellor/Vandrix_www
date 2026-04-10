import { Link, NavLink, Outlet } from 'react-router-dom'
import { useState } from 'react'
import { navigationItems } from '../data/siteContent'

const navClasses = ({ isActive }) =>
  `text-sm transition ${isActive ? 'text-vx-text' : 'text-vx-muted hover:text-vx-text'}`

function SiteLayout() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <div className="min-h-screen">
      <header className="sticky top-0 z-30 border-b border-vx-border/70 bg-vx-bg/92 backdrop-blur">
        <div className="mx-auto flex w-full max-w-7xl items-center justify-between gap-4 px-5 py-4 sm:px-6 lg:px-10">
          <Link to="/" className="text-lg font-semibold tracking-[0.02em] text-vx-text sm:text-xl">
            Vandrix
          </Link>
          <nav className="hidden items-center gap-6 lg:flex">
            {navigationItems.map((item) => (
              <NavLink key={item.href} to={item.href} className={navClasses}>
                {item.label}
              </NavLink>
            ))}
          </nav>
          <div className="flex items-center gap-2">
            <a
              href="/#contact"
              className="hidden rounded-md bg-vx-accent px-4 py-2 text-sm font-semibold text-white shadow-sm shadow-vx-accent/30 transition hover:brightness-110 lg:inline-flex"
            >
              Book a conversation
            </a>
            <button
              type="button"
              onClick={() => setIsMenuOpen(true)}
              className="inline-flex rounded-md border border-vx-border bg-vx-panel px-3 py-2 text-sm font-medium text-vx-text lg:hidden"
            >
              Menu
            </button>
          </div>
        </div>
      </header>

      {isMenuOpen ? (
        <div className="fixed inset-0 z-40 bg-vx-bg/95 p-6 backdrop-blur lg:hidden">
          <div className="mx-auto flex w-full max-w-7xl items-center justify-between">
            <p className="text-lg font-semibold text-vx-text">Navigation</p>
            <button
              type="button"
              onClick={() => setIsMenuOpen(false)}
              className="rounded-md border border-vx-border px-3 py-2 text-sm text-vx-text"
            >
              Close
            </button>
          </div>
          <nav className="mx-auto mt-8 flex w-full max-w-7xl flex-col gap-3">
            {navigationItems.map((item) => (
              <NavLink
                key={item.href}
                to={item.href}
                className="rounded-lg border border-vx-border bg-vx-panel px-4 py-3 text-base text-vx-text"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.label}
              </NavLink>
            ))}
            <a
              href="/#contact"
              className="mt-4 inline-flex rounded-md bg-vx-accent px-4 py-3 text-center text-sm font-semibold text-white"
              onClick={() => setIsMenuOpen(false)}
            >
              Book a conversation
            </a>
          </nav>
        </div>
      ) : null}

      <main className="mx-auto w-full max-w-7xl px-5 py-8 sm:px-6 lg:px-10 lg:py-14">
        <Outlet />
      </main>

      <footer className="border-t border-vx-border/80 bg-[#060b14]">
        <div className="mx-auto grid w-full max-w-7xl gap-10 px-5 py-12 sm:px-6 lg:grid-cols-4 lg:px-10">
          <div className="lg:col-span-2">
            <p className="text-lg font-semibold text-vx-text">Vandrix</p>
            <p className="mt-3 max-w-lg text-sm leading-7 text-vx-muted">
              Specialist energy intelligence for organisations managing complex estates,
              operational energy performance, and compliance assurance.
            </p>
            <p className="mt-4 text-xs text-vx-muted">WattGuard is part of the Vandrix product portfolio.</p>
          </div>

          <div>
            <p className="text-sm font-semibold text-vx-text">Pages</p>
            <ul className="mt-3 space-y-2 text-sm text-vx-muted">
              {navigationItems.map((item) => (
                <li key={item.href}>
                  <Link to={item.href} className="hover:text-vx-text">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-sm font-semibold text-vx-text">Commercial contact</p>
            <p className="mt-3 text-sm leading-7 text-vx-muted">
              Book a conversation, discuss a pilot, or request early access.
            </p>
            <a
              href="mailto:hello@vandrix.co.uk"
              className="mt-4 inline-flex rounded-md border border-vx-accent bg-vx-accent/10 px-4 py-2 text-sm font-medium text-vx-text transition hover:bg-vx-accent/20"
            >
              hello@vandrix.co.uk
            </a>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default SiteLayout
