import SectionBlock from '../components/SectionBlock'
import StatusBadge from '../components/StatusBadge'

function WattGuardPage() {
  return (
    <div className="space-y-8">
      <section className="rounded-2xl border border-vx-border bg-vx-surface/70 p-8 lg:p-12">
        <div className="flex flex-wrap items-center gap-3">
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-vx-accent">WattGuard</p>
          <StatusBadge status="available">Available now</StatusBadge>
        </div>
        <h1 className="mt-4 max-w-4xl text-4xl font-semibold tracking-tight text-vx-text lg:text-5xl">
          Identify out-of-hours waste and avoidable spend from meter data you already have.
        </h1>
        <p className="mt-5 max-w-3xl text-base leading-7 text-vx-muted">
          WattGuard analyses half-hourly electricity data to expose baseload issues, unnecessary runtime,
          and hidden cost across portfolios. No hardware retrofit. No major integration project.
        </p>
      </section>

      <SectionBlock eyebrow="The Problem" title="Energy waste often hides in routine operating patterns">
        <div className="grid gap-4 md:grid-cols-3">
          {[
            'Out-of-hours consumption that continues when sites should be idle.',
            'Baseload drift that inflates cost month after month.',
            'Limited visibility across sites, making prioritisation difficult.',
          ].map((item) => (
            <p key={item} className="rounded-xl border border-vx-border bg-vx-surface-2/60 p-4 text-sm text-vx-muted">
              {item}
            </p>
          ))}
        </div>
      </SectionBlock>

      <SectionBlock eyebrow="How It Works" title="Low-friction onboarding, practical outputs">
        <div className="grid gap-4 md:grid-cols-2">
          <div className="rounded-xl border border-vx-border bg-vx-surface-2/60 p-5">
            <p className="text-sm font-semibold text-vx-text">What data is needed</p>
            <ul className="mt-3 space-y-2 text-sm text-vx-muted">
              <li>Half-hourly electricity meter exports</li>
              <li>Basic site metadata and operating hours</li>
              <li>Tariff assumptions where available</li>
            </ul>
          </div>
          <div className="rounded-xl border border-vx-border bg-vx-surface-2/60 p-5">
            <p className="text-sm font-semibold text-vx-text">What you receive</p>
            <ul className="mt-3 space-y-2 text-sm text-vx-muted">
              <li>Out-of-hours waste detection by site</li>
              <li>Baseload and trend visibility</li>
              <li>Estimated avoidable spend and action list</li>
              <li>Comparable site performance views</li>
            </ul>
          </div>
        </div>
      </SectionBlock>

      <SectionBlock eyebrow="Who It Is For" title="Teams responsible for performance across buildings and estates">
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {['Energy and utilities managers', 'Facilities and estates leaders', 'Operations directors', 'Finance and procurement stakeholders', 'Sustainability leads', 'Multi-site property operators'].map((item) => (
            <div key={item} className="rounded-lg border border-vx-border/80 bg-vx-surface-2/50 px-4 py-3 text-sm text-vx-muted">{item}</div>
          ))}
        </div>
      </SectionBlock>

      <SectionBlock eyebrow="Differentiation" title="Why WattGuard is commercially practical">
        <div className="grid gap-4 md:grid-cols-2">
          {[
            'Software-led deployment with minimal disruption to operations.',
            'Fast route to insight from existing data sources.',
            'Focus on avoidable cost and actionability, not generic dashboards.',
            'Built for ongoing performance management across portfolios.',
          ].map((point) => (
            <p key={point} className="rounded-xl border border-vx-border/80 bg-vx-surface-2/60 p-4 text-sm leading-6 text-vx-muted">{point}</p>
          ))}
        </div>
      </SectionBlock>

      <section className="rounded-2xl border border-vx-accent/50 bg-vx-accent/10 p-8">
        <h2 className="text-3xl font-semibold text-vx-text">Book a WattGuard demo</h2>
        <p className="mt-4 max-w-2xl text-sm leading-7 text-vx-muted">
          Share your portfolio profile and current data availability. We will map a realistic path to first insights.
        </p>
        <a href="mailto:hello@vandrix.co.uk" className="mt-6 inline-flex rounded-md bg-vx-text px-5 py-2.5 text-sm font-semibold text-vx-bg">
          Request demo access
        </a>
      </section>
    </div>
  )
}

export default WattGuardPage
