import CtaPanel from '../components/CtaPanel'
import PageHero from '../components/PageHero'
import SectionBlock from '../components/SectionBlock'

function WattGuardPage() {
  return (
    <div className="space-y-8 lg:space-y-10">
      <PageHero
        eyebrow="WattGuard"
        status="available"
        statusLabel="Available now"
        title="Commercially ready detection of avoidable electricity waste from half-hourly meter data."
        intro="WattGuard is mature, low-friction software for organisations that need immediate visibility of out-of-hours waste, baseload issues, and unnecessary spend across one site or many."
      />

      <SectionBlock
        eyebrow="The Problem"
        title="Material waste often sits in plain sight"
        intro="In many organisations, site-level usage patterns are visible but not commercially translated. Waste continues because teams lack a clear, accountable view of where spend is avoidable."
      >
        <div className="grid gap-4 md:grid-cols-3">
          {[
            'Out-of-hours demand continues while buildings are operationally idle.',
            'Baseload drift increases cost month by month without clear ownership.',
            'Portfolio variance is difficult to prioritise without financial framing.',
          ].map((item) => (
            <p key={item} className="rounded-xl border border-vx-border bg-vx-surface-2/60 p-4 text-sm leading-6 text-vx-muted">
              {item}
            </p>
          ))}
        </div>
      </SectionBlock>

      <SectionBlock
        eyebrow="How WattGuard Works"
        title="Fast onboarding, practical outputs"
        intro="WattGuard is designed for rapid adoption using existing datasets. No hardware programme. No site disruption. No major integration effort."
      >
        <div className="grid gap-4 md:grid-cols-2">
          <div className="rounded-xl border border-vx-border bg-vx-surface-2/60 p-5">
            <p className="text-sm font-semibold text-vx-text">Input requirements</p>
            <ul className="mt-3 space-y-2 text-sm leading-6 text-vx-muted">
              <li>Half-hourly electricity meter exports</li>
              <li>Basic site metadata and operating-hour context</li>
              <li>Tariff assumptions where available</li>
            </ul>
          </div>
          <div className="rounded-xl border border-vx-border bg-vx-surface-2/60 p-5">
            <p className="text-sm font-semibold text-vx-text">Outputs provided</p>
            <ul className="mt-3 space-y-2 text-sm leading-6 text-vx-muted">
              <li>Out-of-hours waste visibility by site and period</li>
              <li>Baseload trend analysis and drift detection</li>
              <li>Estimated avoidable spend in financial terms</li>
              <li>Site comparison and prioritised recommendations</li>
            </ul>
          </div>
        </div>
      </SectionBlock>

      <SectionBlock
        eyebrow="Typical Outcomes"
        title="Designed to support action, not just reporting"
        intro="WattGuard provides commercially useful outputs that help finance and operations teams intervene quickly and track improvement."
      >
        <div className="grid gap-4 md:grid-cols-2">
          {[
            'Identify avoidable OPEX waste in days rather than months.',
            'Reduce unnecessary out-of-hours spend before the next billing cycle.',
            'Support sustainability and compliance reporting with defensible evidence.',
            'Create clearer accountability across operations, estates, and finance teams.',
          ].map((item) => (
            <p key={item} className="rounded-xl border border-vx-border/80 bg-vx-surface-2/60 p-4 text-sm leading-6 text-vx-muted">
              {item}
            </p>
          ))}
        </div>
      </SectionBlock>

      <SectionBlock eyebrow="Who It Is For" title="Built for organisations with meaningful multi-site energy spend">
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {[
            'Finance directors and CFO-led teams focused on margin control',
            'Operations directors accountable for overhead reduction',
            'Facilities and estates leaders managing distributed sites',
            'Energy managers responsible for usage governance',
            'Sustainability teams requiring robust reporting evidence',
            'Commercial and industrial operators with estate complexity',
          ].map((item) => (
            <div key={item} className="rounded-lg border border-vx-border/80 bg-vx-surface-2/50 px-4 py-3 text-sm text-vx-muted">
              {item}
            </div>
          ))}
        </div>
      </SectionBlock>

      <SectionBlock
        eyebrow="Why WattGuard Is Different"
        title="Commercially mature and low-friction by design"
        intro="WattGuard is not a generic dashboard proposition. It is focused on identifying financial waste from standard half-hourly data and helping teams act quickly."
      >
        <div className="grid gap-4 md:grid-cols-2">
          {[
            'No hardware rollout and no major IT integration programme.',
            'Compatible with standard half-hourly data already held by most organisations.',
            'Findings expressed in commercial terms relevant to leadership decisions.',
            'Suitable for individual sites, regional portfolios, and national estates.',
          ].map((point) => (
            <p key={point} className="rounded-xl border border-vx-border/80 bg-vx-surface-2/60 p-4 text-sm leading-6 text-vx-muted">
              {point}
            </p>
          ))}
        </div>
      </SectionBlock>

      <CtaPanel
        title="Book a WattGuard conversation"
        body="Share your current estate profile and meter data availability. We will outline a practical route to first findings and immediate intervention priorities."
        primaryLabel="Request a WattGuard demo"
        secondaryLabel="Book a conversation"
        secondaryHref="mailto:hello@vandrix.co.uk?subject=Request%20WattGuard%20demo"
      />
    </div>
  )
}

export default WattGuardPage
