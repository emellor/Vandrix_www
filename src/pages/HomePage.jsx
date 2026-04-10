import StatusBadge from '../components/StatusBadge'

const homepageSolutions = [
  {
    name: 'WattGuard',
    href: '/wattguard',
    status: 'available',
    statusLabel: 'Available now',
    summary:
      'Commercially ready analysis of half-hourly meter data to identify out-of-hours waste, baseload drift, and avoidable electricity spend.',
    forWho: 'Finance, operations, and estates leaders across multi-site organisations',
    outcome:
      'No hardware, no site visits, no major IT integration. Rapid findings and practical financial actions.',
  },
  {
    name: 'Vandrix ISO',
    href: '/vandrix-iso',
    status: 'development',
    statusLabel: 'In development',
    summary:
      'AI-assisted ISO 50001 audit readiness and compliance intelligence for teams preparing evidence ahead of certification and surveillance.',
    forWho: 'Compliance leads, sustainability teams, and audit sponsors',
    outcome:
      'Structured gap visibility, evidence quality assessment, and remediation guidance for early preparation.',
  },
  {
    name: 'Vandrix Sense',
    href: '/vandrix-sense',
    status: 'development',
    statusLabel: 'In development',
    summary:
      'Vertical operational intelligence using current sensors, LoRaWAN telemetry, and time-series AI at machine and equipment level.',
    forWho: 'Manufacturing, commercial estates, and engineering-led operations',
    outcome:
      'Detection of idle load, runtime inefficiency, and abnormal energy patterns in defined operational use cases.',
  },
]

function HomePage() {
  return (
    <div className="space-y-14 lg:space-y-20">
      <section className="relative overflow-hidden rounded-3xl border border-white/20 bg-vx-panel px-6 py-14 text-center shadow-vx sm:px-8 lg:px-14 lg:py-20">
        <div className="pointer-events-none absolute inset-0 grid-overlay opacity-35" />
        <div className="pointer-events-none absolute inset-x-0 top-0 h-36 bg-gradient-to-b from-vx-accent/10 to-transparent" />
        <div className="relative mx-auto max-w-4xl">
          <span className="inline-flex rounded-full border border-white/30 bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.14em] text-vx-soft backdrop-blur">
            ISO 50001 Automation
          </span>
          <h1 className="mt-6 text-balance text-5xl leading-tight text-vx-text sm:text-6xl">
            Security, accuracy, and speed for enterprise energy intelligence.
          </h1>
          <p className="mx-auto mt-6 max-w-3xl text-pretty text-base leading-8 text-vx-muted lg:text-lg">
            Vandrix is the parent platform for commercially serious energy analytics, audit readiness intelligence,
            and machine-level operational sensing across multi-site portfolios.
          </p>
          <div className="mt-9 flex flex-wrap justify-center gap-3">
            <a
              href="#solutions"
              className="rounded-md bg-vx-accent px-7 py-3 text-base font-semibold text-white shadow-sm shadow-vx-accent/30 transition hover:-translate-y-0.5 hover:shadow-lg hover:shadow-vx-accent/40"
            >
              Explore solutions
            </a>
            <a
              href="#contact"
              className="rounded-md border border-white/25 bg-white/5 px-7 py-3 text-base font-semibold text-vx-text transition hover:bg-white/10"
            >
              Book a conversation
            </a>
          </div>
        </div>
      </section>

      <section className="rounded-3xl border border-white/15 bg-vx-panel/70 p-7 lg:p-10">
        <p className="text-xs font-semibold uppercase tracking-[0.14em] text-vx-accent">Positioning</p>
        <h2 className="mt-3 text-3xl text-vx-text lg:text-4xl">
          Premium consulting judgement. Product delivery discipline. Industrial-grade data depth.
        </h2>
        <div className="mt-7 grid gap-4 md:grid-cols-2">
          {[
            'Energy intelligence focused on financial waste, controls, and site-level performance.',
            'Compliance intelligence designed for ISO 50001 evidence quality and audit readiness.',
            'Operational intelligence through targeted sensing where meter data lacks resolution.',
            'One architecture combining software analytics, applied AI, and industrial telemetry.',
          ].map((item) => (
            <div
              key={item}
              className="rounded-2xl border border-white/20 bg-white/5 p-5 text-sm leading-6 text-vx-muted backdrop-blur-sm"
            >
              {item}
            </div>
          ))}
        </div>
      </section>

      <section id="solutions" className="scroll-mt-24 rounded-3xl border border-white/15 bg-vx-panel/70 p-7 lg:p-10">
        <p className="text-xs font-semibold uppercase tracking-[0.14em] text-vx-accent">Solutions</p>
        <h2 className="mt-3 text-3xl text-vx-text lg:text-4xl">Three focused products under one Vandrix parent brand</h2>
        <p className="mt-4 max-w-3xl text-sm leading-7 text-vx-muted lg:text-base">
          WattGuard is commercially ready today. Vandrix ISO and Vandrix Sense are in active development with
          structured pilot and early-access pathways.
        </p>
        <div className="mt-8 grid gap-4 lg:grid-cols-6">
          {homepageSolutions.map((solution) => (
            <article
              key={solution.name}
              className={`rounded-2xl border border-white/20 bg-white/5 p-6 backdrop-blur-sm ${
                solution.name === 'WattGuard' ? 'lg:col-span-3' : 'lg:col-span-3'
              }`}
            >
              <div className="flex items-start justify-between gap-3">
                <h3 className="text-xl font-semibold text-vx-text">{solution.name}</h3>
                <StatusBadge status={solution.status}>{solution.statusLabel}</StatusBadge>
              </div>
              <p className="mt-4 text-sm leading-6 text-vx-muted">{solution.summary}</p>
              <p className="mt-4 text-sm leading-6 text-vx-text">
                <span className="text-vx-muted">For:</span> {solution.forWho}
              </p>
              <p className="mt-2 text-sm leading-6 text-vx-text">
                <span className="text-vx-muted">Outcome:</span> {solution.outcome}
              </p>
              <a href={solution.href} className="mt-5 inline-flex text-sm font-semibold text-vx-accent transition hover:underline">
                View details
              </a>
            </article>
          ))}
        </div>
      </section>

      <section className="rounded-3xl border border-white/15 bg-vx-panel/70 p-7 lg:p-10">
        <p className="text-xs font-semibold uppercase tracking-[0.14em] text-vx-accent">Why Vandrix</p>
        <h2 className="mt-3 text-3xl text-vx-text lg:text-4xl">Built for enterprise-grade assurance and delivery confidence</h2>
        <div className="mt-7 grid gap-4 md:grid-cols-2">
          {[
            'Consulting-grade framing of risk, opportunity, and intervention priorities.',
            'Commercially focused outputs built for leadership teams and site operators.',
            'Technical sensing depth for machinery and equipment-level diagnosis.',
            'Clear alignment to cost reduction, operational control, and assurance outcomes.',
          ].map((point) => (
            <p key={point} className="rounded-2xl border border-white/20 bg-white/5 p-5 text-sm leading-7 text-vx-muted backdrop-blur-sm">
              {point}
            </p>
          ))}
        </div>
      </section>

      <section className="rounded-3xl border border-white/15 bg-vx-panel/70 p-7 lg:p-10">
        <p className="text-xs font-semibold uppercase tracking-[0.14em] text-vx-accent">How It Works</p>
        <h2 className="mt-3 text-3xl text-vx-text lg:text-4xl">From raw evidence to board-ready intelligence</h2>
        <div className="mt-8 grid gap-5 lg:grid-cols-[1fr_auto_1fr_auto_1fr] lg:items-center">
          <div className="rounded-2xl border border-white/20 bg-white/5 p-6 backdrop-blur-sm">
            <p className="text-xs uppercase tracking-[0.14em] text-vx-muted">Input</p>
            <p className="mt-2 text-lg text-vx-text">Dirty PDF / meter exports</p>
            <p className="mt-2 text-sm leading-6 text-vx-muted">Operational reports, audit evidence, and half-hourly data from live estates.</p>
          </div>
          <div className="hidden h-0.5 w-10 bg-vx-accent/70 lg:block" />
          <div className="rounded-2xl border border-white/20 bg-white/5 p-6 backdrop-blur-sm">
            <p className="text-xs uppercase tracking-[0.14em] text-vx-muted">Processing</p>
            <div className="mt-2 flex items-center gap-2">
              <span className="h-2.5 w-2.5 animate-pulse rounded-full bg-vx-accent" />
              <p className="text-lg text-vx-text">AI interpretation pipeline</p>
            </div>
            <p className="mt-2 text-sm leading-6 text-vx-muted">Applied AI and analytics engines validate, map, and prioritise findings.</p>
          </div>
          <div className="hidden h-0.5 w-10 bg-vx-accent/70 lg:block" />
          <div className="rounded-2xl border border-white/20 bg-white/5 p-6 backdrop-blur-sm">
            <p className="text-xs uppercase tracking-[0.14em] text-vx-muted">Output</p>
            <p className="mt-2 text-lg text-vx-text">Clean board-ready report</p>
            <p className="mt-2 text-sm leading-6 text-vx-muted">Clear actions, quantified impact, and audit-grade evidence confidence.</p>
          </div>
        </div>
      </section>

      <section className="rounded-3xl border border-white/15 bg-vx-panel/70 p-7 lg:p-10">
        <p className="text-xs font-semibold uppercase tracking-[0.14em] text-vx-accent">Industries</p>
        <h2 className="mt-3 text-3xl text-vx-text lg:text-4xl">Designed for high-spend, high-accountability operations</h2>
        <div className="mt-7 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {[
            'Manufacturing and process environments',
            'Commercial buildings and mixed estates',
            'Retail portfolios and distributed sites',
            'Logistics and distribution operations',
            'Public and private sector estates',
            'High-load operations with variable demand profiles',
          ].map((sector) => (
            <div key={sector} className="rounded-xl border border-white/20 bg-white/5 px-4 py-3 text-sm text-vx-muted backdrop-blur-sm">
              {sector}
            </div>
          ))}
        </div>
      </section>

      <section id="contact" className="rounded-3xl border border-white/20 bg-vx-panel p-7 text-center shadow-vx lg:p-12">
        <p className="text-xs font-semibold uppercase tracking-[0.14em] text-vx-accent">Commercial Enquiries</p>
        <h2 className="mt-3 text-3xl text-vx-text lg:text-4xl">Ready for a board-level energy intelligence discussion?</h2>
        <p className="mx-auto mt-4 max-w-3xl text-sm leading-7 text-vx-muted lg:text-base">
          Speak with Vandrix about immediate WattGuard rollout, ISO readiness planning, or vertical sensing pilots
          for complex estates and industrial operations.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <a
            href="mailto:hello@vandrix.co.uk?subject=Book%20a%20conversation"
            className="rounded-md bg-vx-accent px-7 py-3 text-base font-semibold text-white shadow-sm shadow-vx-accent/30 transition hover:brightness-110"
          >
            Book a conversation
          </a>
          <a
            href="mailto:hello@vandrix.co.uk?subject=Discuss%20a%20pilot%20or%20early%20access"
            className="rounded-md border border-white/25 bg-white/5 px-7 py-3 text-base font-semibold text-vx-text transition hover:bg-white/10"
          >
            Discuss a pilot or early access
          </a>
        </div>
      </section>
    </div>
  )
}

export default HomePage
