import SectionBlock from '../components/SectionBlock'

function AboutPage() {
  return (
    <div className="space-y-8">
      <section className="rounded-2xl border border-vx-border bg-vx-surface/70 p-8 lg:p-12">
        <p className="text-xs font-semibold uppercase tracking-[0.16em] text-vx-accent">About Vandrix</p>
        <h1 className="mt-4 max-w-4xl text-4xl font-semibold tracking-tight text-vx-text lg:text-5xl">
          Built to combine practical energy insight, applied AI, and deployable sensing.
        </h1>
        <p className="mt-5 max-w-3xl text-base leading-7 text-vx-muted">
          Vandrix operates at the intersection of consulting-grade rigour and modern product delivery.
          We focus on measurable outcomes across energy performance, operational visibility, and compliance readiness.
        </p>
      </section>

      <SectionBlock
        eyebrow="Company Focus"
        title="A specialist model for organisations that need action, not noise"
        intro="The business is structured to bring together strategic thinking and technical execution. That includes software products, AI workflows, and sensing-led operational data where needed."
      >
        <div className="grid gap-4 md:grid-cols-3">
          {[
            ['Energy performance', 'Reducing avoidable spend through clearer insight and prioritised interventions.'],
            ['Operational visibility', 'Improving understanding of equipment and site-level behaviour over time.'],
            ['Compliance readiness', 'Strengthening ISO 50001 evidence quality and audit confidence.'],
          ].map(([title, text]) => (
            <div key={title} className="rounded-xl border border-vx-border/80 bg-vx-surface-2/60 p-5">
              <p className="text-sm font-semibold text-vx-text">{title}</p>
              <p className="mt-3 text-sm leading-6 text-vx-muted">{text}</p>
            </div>
          ))}
        </div>
      </SectionBlock>

      <SectionBlock eyebrow="Delivery Philosophy" title="Serious, measured, and outcome-led">
        <div className="space-y-3 text-sm leading-7 text-vx-muted">
          <p>Vandrix is not a generic dashboard provider and not a slideware consultancy model.</p>
          <p>Each engagement is designed around operational constraints, data realities, and commercial priorities.</p>
          <p>The objective is simple: help teams take better decisions with credible, technically grounded intelligence.</p>
        </div>
      </SectionBlock>

      <section className="rounded-2xl border border-vx-accent/50 bg-vx-accent/10 p-8">
        <h2 className="text-3xl font-semibold text-vx-text">Speak with the Vandrix team</h2>
        <p className="mt-4 max-w-2xl text-sm leading-7 text-vx-muted">
          If you are evaluating energy performance improvements, ISO 50001 readiness work, or sensing-led pilots,
          we would welcome a conversation.
        </p>
        <a href="mailto:hello@vandrix.co.uk" className="mt-6 inline-flex rounded-md bg-vx-text px-5 py-2.5 text-sm font-semibold text-vx-bg">
          Contact Vandrix
        </a>
      </section>
    </div>
  )
}

export default AboutPage
