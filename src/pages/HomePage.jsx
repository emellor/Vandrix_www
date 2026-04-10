import StatusBadge from '../components/StatusBadge'
import { Activity, Factory, FileText, Gauge, ShieldCheck, Workflow } from 'lucide-react'

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
    <div className="space-y-24 py-6 lg:py-10">
      <section className="relative overflow-hidden rounded-2xl border border-slate-200 bg-gradient-to-b from-slate-50 to-white px-6 py-16 sm:px-8 lg:px-12 lg:py-20">
        <div className="pointer-events-none absolute inset-0 grid-overlay opacity-30" />
        <div className="relative grid gap-10 lg:grid-cols-2 lg:items-center">
          <div>
            <span className="inline-flex rounded-full border border-slate-200 bg-white px-3 py-1 text-xs font-semibold uppercase tracking-[0.14em] text-[#3C444D]">
              ISO 50001 Automation
            </span>
            <h1 className="mt-6 text-balance text-5xl leading-tight text-[#1a1c1e] sm:text-6xl">
              Industrial-grade <span className="text-[#F16122]">intelligence</span> for multi-site energy assurance.
            </h1>
            <p className="mt-6 max-w-xl text-pretty text-base leading-8 text-[#3C444D] lg:text-lg">
              Vandrix helps manufacturing and commercial estates teams convert fragmented energy data into
              accurate, actionable decisions across cost, compliance, and operational performance.
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <a
                href="#solutions"
                className="rounded-md bg-[#F16122] px-8 py-4 text-base font-bold text-white shadow-lg transition-all hover:bg-[#d44d1a]"
              >
                Explore solutions
              </a>
              <a
                href="#contact"
                className="rounded-md border border-slate-200 bg-white px-8 py-4 text-base font-semibold text-[#1a1c1e] transition hover:bg-slate-50"
              >
                Book a conversation
              </a>
            </div>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-6">
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#3C444D]">Live data workflow</p>
            <div className="mt-6 grid grid-cols-12 items-end gap-2">
              {[42, 56, 35, 74, 58, 86, 49, 63, 77, 52, 68, 91].map((bar, index) => (
                <div
                  key={`${bar}-${index}`}
                  className="rounded-sm"
                  style={{
                    height: `${bar * 1.3}px`,
                    backgroundColor: index % 3 === 0 ? '#F16122' : '#4f46e5',
                  }}
                />
              ))}
            </div>
            <div className="mt-5 grid grid-cols-3 gap-3 text-xs">
              <div className="rounded-lg bg-[#f4f5f7] p-3 text-[#3C444D]">Source files</div>
              <div className="rounded-lg bg-[#f4f5f7] p-3 text-[#3C444D]">AI processing</div>
              <div className="rounded-lg bg-[#f4f5f7] p-3 text-[#3C444D]">Executive output</div>
            </div>
          </div>
        </div>
      </section>

      <section className="rounded-2xl border border-slate-200 bg-white p-8 lg:p-12">
        <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#3C444D]">Solutions</p>
        <h2 className="mt-3 text-3xl text-[#1a1c1e] lg:text-4xl">Three products under one enterprise architecture</h2>
        <p className="mt-4 max-w-3xl text-sm leading-7 text-[#3C444D] lg:text-base">
          WattGuard is commercially live. Vandrix ISO and Vandrix Sense are in development with pilot pathways
          for organisations that need early capability in compliance and machine-level operations intelligence.
        </p>
        <div id="solutions" className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {homepageSolutions.map((solution) => (
            <article key={solution.name} className="rounded-xl border border-slate-200 bg-[#f4f5f7] p-6">
              <div className="flex items-start justify-between gap-3">
                <h3 className="text-xl font-semibold text-[#1a1c1e]">{solution.name}</h3>
                <StatusBadge status={solution.status}>{solution.statusLabel}</StatusBadge>
              </div>
              <p className="mt-4 text-sm leading-6 text-[#3C444D]">{solution.summary}</p>
              <p className="mt-4 text-sm leading-6 text-[#1a1c1e]">
                <span className="text-[#3C444D]">For:</span> {solution.forWho}
              </p>
              <p className="mt-2 text-sm leading-6 text-[#1a1c1e]">
                <span className="text-[#3C444D]">Outcome:</span> {solution.outcome}
              </p>
              <a href={solution.href} className="mt-5 inline-flex text-sm font-semibold text-[#2563EB] transition hover:underline">
                View details
              </a>
            </article>
          ))}
        </div>
      </section>

      <section className="rounded-2xl border border-slate-200 bg-white p-8 lg:p-12">
        <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#3C444D]">Why Vandrix</p>
        <h2 className="mt-3 text-3xl text-[#1a1c1e] lg:text-4xl">Built for security, accuracy, and delivery speed</h2>
        <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {[
            [ShieldCheck, 'Assurance-first methodology with compliance-grade evidence trails.'],
            [Gauge, 'High-accuracy analytics designed for operational and financial decisions.'],
            [Activity, 'Fast delivery model for immediate intervention planning and action.'],
          ].map(([Icon, text]) => (
            <div key={text} className="rounded-xl border border-slate-200 bg-[#f4f5f7] p-5">
              <Icon size={24} strokeWidth={2.4} className="text-[#F16122]" />
              <p className="mt-3 text-sm leading-7 text-[#3C444D]">{text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="rounded-2xl border border-slate-200 bg-white p-8 lg:p-12">
        <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#3C444D]">How It Works</p>
        <h2 className="mt-3 text-3xl text-[#1a1c1e] lg:text-4xl">From unstructured evidence to decision-ready outputs</h2>
        <div className="mt-8 grid gap-5 lg:grid-cols-[1fr_auto_1fr_auto_1fr] lg:items-center">
          <div className="rounded-xl border border-slate-200 bg-[#f4f5f7] p-6">
            <FileText size={26} strokeWidth={2.3} className="text-[#F16122]" />
            <p className="mt-3 text-sm font-semibold uppercase tracking-[0.12em] text-[#3C444D]">Dirty PDF</p>
            <p className="mt-2 text-sm leading-6 text-[#3C444D]">Meter exports, audit files, and operational documents.</p>
          </div>
          <Workflow size={24} strokeWidth={2.4} className="mx-auto hidden text-[#2563EB] lg:block" />
          <div className="rounded-xl border border-slate-200 bg-[#f4f5f7] p-6">
            <span className="inline-flex h-2.5 w-2.5 animate-pulse rounded-full bg-[#2563EB]" />
            <p className="mt-3 text-sm font-semibold uppercase tracking-[0.12em] text-[#3C444D]">AI / Processing</p>
            <p className="mt-2 text-sm leading-6 text-[#3C444D]">Structured interpretation, validation, and prioritisation.</p>
          </div>
          <Workflow size={24} strokeWidth={2.4} className="mx-auto hidden text-[#2563EB] lg:block" />
          <div className="rounded-xl border border-slate-200 bg-[#f4f5f7] p-6">
            <FileText size={26} strokeWidth={2.3} className="text-[#F16122]" />
            <p className="mt-3 text-sm font-semibold uppercase tracking-[0.12em] text-[#3C444D]">Clean document</p>
            <p className="mt-2 text-sm leading-6 text-[#3C444D]">Action plans and leadership-ready evidence output.</p>
          </div>
        </div>
      </section>

      <section className="rounded-2xl border border-slate-200 bg-white p-8 lg:p-12">
        <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#3C444D]">Industries</p>
        <h2 className="mt-3 text-3xl text-[#1a1c1e] lg:text-4xl">Trusted across high-value industrial and estate portfolios</h2>
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {[
            [Factory, 'Manufacturing and process operations'],
            [Gauge, 'Commercial buildings and estates'],
            [ShieldCheck, 'Public sector and regulated portfolios'],
          ].map(([Icon, label]) => (
            <div key={label} className="rounded-xl border border-slate-200 bg-[#f4f5f7] p-5">
              <Icon size={24} strokeWidth={2.4} className="text-[#F16122]" />
              <p className="mt-3 text-sm text-[#3C444D]">{label}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="contact" className="rounded-2xl border border-slate-200 bg-white p-8 text-center lg:p-12">
        <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#3C444D]">Commercial Enquiries</p>
        <h2 className="mt-3 text-3xl text-[#1a1c1e] lg:text-4xl">Discuss deployment, pilots, or audit programmes</h2>
        <p className="mx-auto mt-4 max-w-3xl text-sm leading-7 text-[#3C444D] lg:text-base">
          Speak with Vandrix about WattGuard rollout, Vandrix ISO pilot access, or Vandrix Sense operational
          intelligence design for multi-site industrial environments.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <a
            href="mailto:hello@vandrix.co.uk?subject=Book%20a%20conversation"
            className="rounded-md bg-[#F16122] px-8 py-4 text-base font-bold text-white shadow-lg transition-all hover:bg-[#d44d1a]"
          >
            Book a conversation
          </a>
          <a
            href="mailto:hello@vandrix.co.uk?subject=Discuss%20pilot%20or%20early%20access"
            className="rounded-md border border-slate-200 bg-white px-8 py-4 text-base font-semibold text-[#1a1c1e] transition hover:bg-slate-50"
          >
            Discuss a pilot
          </a>
        </div>
      </section>
    </div>
  )
}

export default HomePage
