import { Link } from 'react-router-dom'
import CtaPanel from '../components/CtaPanel'
import PageHero from '../components/PageHero'
import SectionBlock from '../components/SectionBlock'
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
    <div className="space-y-8 lg:space-y-10">
      <PageHero
        eyebrow="Vandrix Energy Intelligence"
        title="Energy intelligence built for operational and commercial decision-makers."
        intro="Vandrix combines consulting-grade rigour, software delivery, and industrial sensing to reduce avoidable energy cost, improve operational visibility, and strengthen compliance readiness."
      >
        <div className="flex flex-wrap gap-3">
          <a href="#solutions" className="rounded-md bg-vx-text px-5 py-2.5 text-sm font-semibold text-vx-bg transition hover:opacity-90">
            Explore solutions
          </a>
          <a href="#contact" className="rounded-md border border-vx-border px-5 py-2.5 text-sm font-semibold text-vx-text transition hover:border-vx-accent">
            Book a conversation
          </a>
        </div>
      </PageHero>

      <SectionBlock
        eyebrow="Positioning"
        title="A specialist UK firm at the intersection of consulting, SaaS, and technical IoT"
        intro="Vandrix is the parent company behind a focused product portfolio. We combine strategic judgement with deployable products to deliver measurable outcomes across estates, sites, and industrial operations."
      >
        <div className="grid gap-4 md:grid-cols-2">
          {[
            'Energy intelligence focused on financial waste, controls, and site-level performance.',
            'Compliance intelligence designed for ISO 50001 evidence quality and audit readiness.',
            'Operational intelligence through targeted sensing where meter data lacks resolution.',
            'One architecture combining software analytics, applied AI, and industrial telemetry.',
          ].map((item) => (
            <div key={item} className="rounded-xl border border-vx-border/80 bg-vx-surface-2/70 p-4 text-sm leading-6 text-vx-muted">
              {item}
            </div>
          ))}
        </div>
      </SectionBlock>

      <SectionBlock
        eyebrow="Solutions"
        title="Three products under one Vandrix architecture"
        intro="WattGuard is available now. Vandrix ISO and Vandrix Sense are in development with pilot and early-access discussions open."
        className="scroll-mt-24"
      >
        <div id="solutions" className="grid gap-4 lg:grid-cols-3">
          {homepageSolutions.map((solution) => (
            <article key={solution.name} className="rounded-xl border border-vx-border/80 bg-vx-surface-2/70 p-5">
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
              <Link to={solution.href} className="mt-5 inline-flex text-sm font-semibold text-vx-accent transition hover:underline">
                View details
              </Link>
            </article>
          ))}
        </div>
      </SectionBlock>

      <SectionBlock eyebrow="Why Vandrix" title="Designed for operating reality, not dashboard theatre">
        <div className="grid gap-4 md:grid-cols-2">
          {[
            'Consulting-grade framing of risk, opportunity, and intervention priorities.',
            'Commercially focused outputs built for leadership teams and site operators.',
            'Technical sensing depth for machinery and equipment-level diagnosis.',
            'Clear alignment to cost reduction, operational control, and assurance outcomes.',
          ].map((point) => (
            <p key={point} className="rounded-xl border border-vx-border/80 bg-vx-surface-2/60 p-4 text-sm leading-6 text-vx-muted">
              {point}
            </p>
          ))}
        </div>
      </SectionBlock>

      <SectionBlock eyebrow="How Vandrix Works" title="A practical operating model for sustained improvement">
        <div className="grid gap-4 md:grid-cols-4">
          {[
            ['Measure', 'Capture reliable data from half-hourly meters, documentation, and sensing points.'],
            ['Interpret', 'Use analytics and applied AI to identify material waste, weak controls, and risk.'],
            ['Act', 'Prioritise interventions by site, asset, and expected commercial impact.'],
            ['Assure', 'Track outcomes and strengthen evidence for governance and audit activity.'],
          ].map(([step, detail]) => (
            <div key={step} className="rounded-xl border border-vx-border/80 bg-vx-surface-2/60 p-4">
              <p className="text-sm font-semibold text-vx-text">{step}</p>
              <p className="mt-2 text-sm leading-6 text-vx-muted">{detail}</p>
            </div>
          ))}
        </div>
      </SectionBlock>

      <SectionBlock eyebrow="Industries" title="Aligned to multi-site and asset-intensive environments">
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {[
            'Manufacturing and process environments',
            'Commercial buildings and mixed estates',
            'Retail portfolios and distributed sites',
            'Logistics and distribution operations',
            'Public and private sector estates',
            'High-load operations with variable demand profiles',
          ].map((sector) => (
            <div key={sector} className="rounded-lg border border-vx-border/80 bg-vx-surface-2/50 px-4 py-3 text-sm text-vx-muted">
              {sector}
            </div>
          ))}
        </div>
      </SectionBlock>

      <CtaPanel
        eyebrow="Commercial Enquiries"
        title="Book a conversation with the Vandrix team"
        body="If you are prioritising immediate cost recovery, pilot planning, or ISO 50001 preparation, we can advise on the right starting point across the Vandrix portfolio."
        primaryLabel="Book a conversation"
        secondaryLabel="Discuss a pilot or early access"
        secondaryHref="mailto:hello@vandrix.co.uk?subject=Discuss%20pilot%20or%20early%20access"
      />
    </div>
  )
}

export default HomePage
