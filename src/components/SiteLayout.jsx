import { Link, NavLink, Outlet } from 'react-router-dom'
import { navigationItems } from '../data/siteContent'

const navClasses = ({ isActive }) =>
  `text-sm transition ${isActive ? 'text-vx-text' : 'text-vx-muted hover:text-vx-text'}`

function SiteLayout() {
  return (
    <div className="min-h-screen">
      <header className="sticky top-0 z-30 border-b border-vx-border/70 bg-vx-bg/90 backdrop-blur">
        <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-6 py-4 lg:px-10">
          <Link to="/" className="text-xl font-semibold tracking-wide text-vx-text">
            Vandrix
          </Link>
          <nav className="hidden items-center gap-6 lg:flex">
            {navigationItems.map((item) => (
              <NavLink key={item.href} to={item.href} className={navClasses}>
                {item.label}
              </NavLink>
            ))}
          </nav>
          <Link
            to="/#contact"
            className="rounded-md border border-vx-border bg-vx-surface px-4 py-2 text-sm font-medium text-vx-text transition hover:border-vx-accent"
          >
            Contact
          </Link>
        </div>
      </header>

      <main className="mx-auto w-full max-w-7xl px-6 py-10 lg:px-10 lg:py-16">
        <Outlet />
      </main>

      <footer className="border-t border-vx-border/80 bg-[#070c15]">
        <div className="mx-auto grid w-full max-w-7xl gap-10 px-6 py-12 lg:grid-cols-4 lg:px-10">
          <div className="lg:col-span-2">
            <p className="text-lg font-semibold text-vx-text">Vandrix</p>
            <p className="mt-3 max-w-lg text-sm text-vx-muted">
              Specialist energy intelligence for organisations that need measurable savings,
              stronger operational visibility, and compliance confidence.
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
            <p className="text-sm font-semibold text-vx-text">Get in touch</p>
            <p className="mt-3 text-sm text-vx-muted">Book a conversation, request a demo, or discuss a pilot.</p>
            <a
              href="#contact"
              className="mt-4 inline-flex rounded-md border border-vx-accent bg-vx-accent/10 px-4 py-2 text-sm font-medium text-vx-text hover:bg-vx-accent/20"
            >
              Book a conversation
            </a>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default SiteLayout
