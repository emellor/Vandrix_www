import { Link } from 'react-router-dom'
import SectionBlock from '../components/SectionBlock'
import StatusBadge from '../components/StatusBadge'
import { solutions } from '../data/siteContent'

function HomePage() {
  return (
    <div className="space-y-8 lg:space-y-10">
      <section className="rounded-2xl border border-vx-border bg-vx-surface/70 p-8 lg:p-12">
        <p className="text-xs font-semibold uppercase tracking-[0.16em] text-vx-accent">Energy Intelligence Platform</p>
        <h1 className="mt-4 max-w-4xl text-4xl font-semibold tracking-tight text-vx-text lg:text-6xl">
          Practical energy intelligence for measurable commercial outcomes.
        </h1>
        <p className="mt-6 max-w-3xl text-base leading-7 text-vx-muted lg:text-lg">
          Vandrix helps organisations reduce avoidable energy cost, improve operational visibility,
          and strengthen compliance readiness through software analytics, applied AI, and industrial sensing.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <a href="#solutions" className="rounded-md bg-vx-text px-5 py-2.5 text-sm font-semibold text-vx-bg hover:opacity-90">
            Explore Solutions
          </a>
          <a href="#contact" className="rounded-md border border-vx-border px-5 py-2.5 text-sm font-semibold text-vx-text hover:border-vx-accent">
            Book a Conversation
          </a>
        </div>
      </section>

      <SectionBlock
        eyebrow="Positioning"
        title="A specialist company spanning energy, compliance, and operations"
        intro="Vandrix combines consulting-grade thinking, production software delivery, and technical sensing capability. We focus on action and measurable performance, not dashboard noise."
      >
        <div className="grid gap-4 md:grid-cols-2">
          {['Energy intelligence', 'Compliance intelligence', 'Operational intelligence', 'Software, AI, and sensing in one model'].map((item) => (
            <div key={item} className="rounded-xl border border-vx-border/80 bg-vx-surface-2/70 p-4 text-sm text-vx-text">
              {item}
            </div>
          ))}
        </div>
      </SectionBlock>

      <SectionBlock eyebrow="Solutions" title="Three products, one coherent operating model" className="scroll-mt-24" >
        <div id="solutions" className="grid gap-4 lg:grid-cols-3">
          {solutions.map((solution) => (
            <article key={solution.name} className="rounded-xl border border-vx-border/80 bg-vx-surface-2/70 p-5">
              <div className="flex items-center justify-between gap-3">
                <h3 className="text-xl font-semibold text-vx-text">{solution.name}</h3>
                <StatusBadge status={solution.status}>{solution.statusLabel}</StatusBadge>
              </div>
              <p className="mt-4 text-sm leading-6 text-vx-muted">{solution.description}</p>
              <p className="mt-4 text-sm text-vx-text"><span className="text-vx-muted">For:</span> {solution.audience}</p>
              <p className="mt-2 text-sm text-vx-text"><span className="text-vx-muted">Value:</span> {solution.value}</p>
              <Link to={solution.href} className="mt-5 inline-flex text-sm font-semibold text-vx-accent hover:underline">
                View product
              </Link>
            </article>
          ))}
        </div>
      </SectionBlock>

      <SectionBlock
        eyebrow="Why Vandrix"
        title="Built for teams that need technical depth and commercial clarity"
      >
        <div className="grid gap-4 md:grid-cols-2">
          {[
            'Premium consulting mindset with practical delivery discipline.',
            'Product-led outputs designed for action at site and portfolio level.',
            'Sensor and time-series capability for machine-level insight where meter data is not enough.',
            'Outcome-led approach centred on waste reduction, operating control, and audit confidence.',
          ].map((point) => (
            <p key={point} className="rounded-xl border border-vx-border/80 bg-vx-surface-2/60 p-4 text-sm leading-6 text-vx-muted">
              {point}
            </p>
          ))}
        </div>
      </SectionBlock>

      <SectionBlock eyebrow="Operating Model" title="How Vandrix works">
        <div className="grid gap-4 md:grid-cols-4">
          {[
            ['Measure', 'Collect reliable data from meters, documents, and sensing points.'],
            ['Interpret', 'Apply analytics and AI to identify material risk, waste, and weak control.'],
            ['Act', 'Provide prioritised interventions that teams can execute immediately.'],
            ['Assure', 'Track progress and strengthen compliance evidence over time.'],
          ].map(([step, detail]) => (
            <div key={step} className="rounded-xl border border-vx-border/80 bg-vx-surface-2/60 p-4">
              <p className="text-sm font-semibold text-vx-text">{step}</p>
              <p className="mt-2 text-sm leading-6 text-vx-muted">{detail}</p>
            </div>
          ))}
        </div>
      </SectionBlock>

      <SectionBlock eyebrow="Industry Fit" title="Relevant across asset-heavy and multi-site operations">
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {[
            'Manufacturing and processing facilities',
            'Multi-site commercial property portfolios',
            'Retail and mixed-estate operations',
            'Logistics and distribution environments',
            'Public and private estates',
            'Asset-heavy operations with variable load profiles',
          ].map((sector) => (
            <div key={sector} className="rounded-lg border border-vx-border/80 bg-vx-surface-2/50 px-4 py-3 text-sm text-vx-muted">
              {sector}
            </div>
          ))}
        </div>
      </SectionBlock>

      <section id="contact" className="rounded-2xl border border-vx-accent/50 bg-vx-accent/10 p-8 lg:p-10">
        <p className="text-xs font-semibold uppercase tracking-[0.16em] text-vx-accent">Contact</p>
        <h2 className="mt-3 text-3xl font-semibold tracking-tight text-vx-text lg:text-4xl">
          Discuss a demo, pilot, or rollout plan.
        </h2>
        <p className="mt-4 max-w-2xl text-sm leading-7 text-vx-muted lg:text-base">
          Whether you need rapid insights from meter data today or early access to ISO and sensing pilots,
          we can scope a practical engagement around your objectives.
        </p>
        <div className="mt-6 flex flex-wrap gap-3">
          <a href="mailto:hello@vandrix.co.uk" className="rounded-md bg-vx-text px-5 py-2.5 text-sm font-semibold text-vx-bg">
            hello@vandrix.co.uk
          </a>
          <a href="tel:+4402000000000" className="rounded-md border border-vx-border px-5 py-2.5 text-sm font-semibold text-vx-text">
            +44 (0)20 0000 0000
          </a>
        </div>
      </section>
    </div>
  )
}

export default HomePage
