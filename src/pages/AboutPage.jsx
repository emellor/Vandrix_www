import CtaPanel from '../components/CtaPanel'
import PageHero from '../components/PageHero'
import SectionBlock from '../components/SectionBlock'

function AboutPage() {
  return (
    <div className="space-y-8 lg:space-y-10">
      <PageHero
        eyebrow="About Vandrix"
        title="Built to unite practical energy insight, applied AI, and deployable sensing."
        intro="Vandrix sits between consulting-grade analysis and modern product delivery. The company is focused on measurable outcomes in energy performance, operational visibility, and compliance readiness."
      />

      <SectionBlock
        eyebrow="Company Focus"
        title="A specialist model for complex operational environments"
        intro="We work with organisations that need disciplined technical work and commercially sensible implementation."
      >
        <div className="grid gap-4 md:grid-cols-3">
          {[
            ['Energy performance', 'Reducing avoidable spend through robust analysis and clear intervention priorities.'],
            ['Operational visibility', 'Improving equipment and site-level understanding where decisions are currently constrained.'],
            ['Compliance readiness', 'Strengthening ISO 50001 evidence quality and audit preparation confidence.'],
          ].map(([title, text]) => (
            <div key={title} className="rounded-xl border border-vx-border/80 bg-vx-surface-2/60 p-5">
              <p className="text-sm font-semibold text-vx-text">{title}</p>
              <p className="mt-3 text-sm leading-6 text-vx-muted">{text}</p>
            </div>
          ))}
        </div>
      </SectionBlock>

      <SectionBlock eyebrow="Approach" title="Measured, technical, and outcome-led">
        <div className="space-y-3 text-sm leading-7 text-vx-muted lg:text-base">
          <p>Vandrix is not positioned as a generic dashboard platform and not as slide-led consultancy work.</p>
          <p>Our work is designed around operational constraints, engineering reality, and commercial priorities.</p>
          <p>We focus on producing evidence and actions that teams can use with confidence.</p>
        </div>
      </SectionBlock>

      <CtaPanel
        title="Speak with the Vandrix team"
        body="If you are assessing WattGuard deployment, ISO 50001 readiness support, or a sensing pilot, we would welcome a structured discussion."
        primaryLabel="Book a conversation"
        secondaryLabel="Contact Vandrix"
        secondaryHref="mailto:hello@vandrix.co.uk"
      />
    </div>
  )
}

export default AboutPage
