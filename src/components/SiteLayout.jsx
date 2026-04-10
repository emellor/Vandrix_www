import { Link, NavLink, Outlet } from 'react-router-dom'
import { useState } from 'react'
import { navigationItems } from '../data/siteContent'

const navClasses = ({ isActive }) =>
  `text-sm transition ${isActive ? 'text-vx-text' : 'text-vx-muted hover:text-vx-text'}`

function SiteLayout() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <div className="min-h-screen bg-white">
      <header className="sticky top-0 z-30 border-b border-slate-100 bg-white">
        <div className="mx-auto flex w-full max-w-[1240px] items-center justify-between gap-4 px-5 py-4 sm:px-6 lg:px-8">
          <Link to="/" className="text-lg font-bold uppercase tracking-[0.14em] text-[#1a1c1e] sm:text-xl">
            VANDRIX
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
              className="hidden rounded-md bg-[#F16122] px-5 py-2.5 text-sm font-bold text-white transition hover:bg-[#d44d1a] lg:inline-flex"
            >
              Book a conversation
            </a>
            <button
              type="button"
              onClick={() => setIsMenuOpen(true)}
              className="inline-flex rounded-md border border-slate-200 bg-white px-3 py-2 text-sm font-medium text-[#1a1c1e] lg:hidden"
            >
              Menu
            </button>
          </div>
        </div>
      </header>

      {isMenuOpen ? (
        <div className="fixed inset-0 z-40 bg-white p-6 lg:hidden">
          <div className="mx-auto flex w-full max-w-[1240px] items-center justify-between">
            <p className="text-lg font-semibold text-[#1a1c1e]">Navigation</p>
            <button
              type="button"
              onClick={() => setIsMenuOpen(false)}
              className="rounded-md border border-slate-200 px-3 py-2 text-sm text-[#1a1c1e]"
            >
              Close
            </button>
          </div>
          <nav className="mx-auto mt-8 flex w-full max-w-[1240px] flex-col gap-3">
            {navigationItems.map((item) => (
              <NavLink
                key={item.href}
                to={item.href}
                className="rounded-lg border border-slate-200 bg-[#f8fafc] px-4 py-3 text-base text-[#1a1c1e]"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.label}
              </NavLink>
            ))}
            <a
              href="/#contact"
              className="mt-4 inline-flex rounded-md bg-[#F16122] px-4 py-3 text-center text-sm font-bold text-white"
              onClick={() => setIsMenuOpen(false)}
            >
              Book a conversation
            </a>
          </nav>
        </div>
      ) : null}

      <main className="mx-auto w-full max-w-[1240px] px-5 py-8 sm:px-6 lg:px-8 lg:py-12">
        <Outlet />
      </main>

      <footer className="border-t border-slate-800 bg-[#1a1c1e]">
        <div className="mx-auto grid w-full max-w-[1240px] gap-10 px-5 py-14 text-white sm:px-6 lg:grid-cols-4 lg:px-8">
          <div className="lg:col-span-2">
            <p className="text-lg font-semibold text-white">VANDRIX</p>
            <p className="mt-3 max-w-lg text-sm leading-7 text-slate-300">
              Specialist energy intelligence for organisations managing complex estates,
              operational energy performance, and compliance assurance.
            </p>
            <p className="mt-4 text-xs text-slate-400">WattGuard is part of the Vandrix product portfolio.</p>
          </div>

          <div>
            <p className="text-sm font-semibold text-white">Pages</p>
            <ul className="mt-3 space-y-2 text-sm text-slate-300">
              {navigationItems.map((item) => (
                <li key={item.href}>
                  <Link to={item.href} className="hover:text-white">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-sm font-semibold text-white">Commercial contact</p>
            <p className="mt-3 text-sm leading-7 text-slate-300">
              Book a conversation, discuss a pilot, or request early access.
            </p>
            <a
              href="mailto:hello@vandrix.co.uk"
              className="mt-4 inline-flex rounded-md border border-[#F16122] bg-[#F16122]/10 px-4 py-2 text-sm font-medium text-white transition hover:bg-[#F16122]/20"
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
