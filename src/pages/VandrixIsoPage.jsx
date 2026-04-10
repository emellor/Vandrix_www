import SectionBlock from '../components/SectionBlock'
import StatusBadge from '../components/StatusBadge'

function VandrixIsoPage() {
  return (
    <div className="space-y-8">
      <section className="rounded-2xl border border-vx-border bg-vx-surface/70 p-8 lg:p-12">
        <div className="flex flex-wrap items-center gap-3">
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-vx-accent">Vandrix ISO</p>
          <StatusBadge status="development">In development</StatusBadge>
        </div>
        <h1 className="mt-4 max-w-4xl text-4xl font-semibold tracking-tight text-vx-text lg:text-5xl">
          AI-assisted ISO 50001 readiness intelligence for teams preparing for audit scrutiny.
        </h1>
        <p className="mt-5 max-w-3xl text-base leading-7 text-vx-muted">
          Vandrix ISO is being developed for organisations that need a structured view of evidence quality,
          coverage, and remediation priorities before certification or surveillance audits.
        </p>
      </section>

      <SectionBlock eyebrow="Compliance Challenge" title="Evidence is often fragmented across teams and systems">
        <p className="text-sm leading-7 text-vx-muted">
          Internal teams can spend significant time chasing documents, checking version quality, and assessing
          whether evidence actually supports audit expectations. Vandrix ISO is designed to reduce that burden
          and improve readiness confidence.
        </p>
      </SectionBlock>

      <SectionBlock eyebrow="Document Scope" title="Example evidence types analysed">
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {['Energy policies and procedures', 'Objectives, targets and KPIs', 'Monitoring and measurement records', 'Internal audit reports', 'Management review documentation', 'Improvement action logs'].map((item) => (
            <div key={item} className="rounded-lg border border-vx-border/80 bg-vx-surface-2/50 px-4 py-3 text-sm text-vx-muted">{item}</div>
          ))}
        </div>
      </SectionBlock>

      <SectionBlock eyebrow="AI Process" title="How Vandrix ISO works">
        <div className="grid gap-4 md:grid-cols-4">
          {[
            ['Ingest', 'Upload policies, records, and supporting evidence.'],
            ['Map', 'Assess each item against ISO 50001 readiness expectations.'],
            ['Diagnose', 'Flag weak areas, missing evidence, and outdated material.'],
            ['Guide', 'Generate targeted remediation guidance and priorities.'],
          ].map(([step, detail]) => (
            <div key={step} className="rounded-xl border border-vx-border/80 bg-vx-surface-2/60 p-4">
              <p className="text-sm font-semibold text-vx-text">{step}</p>
              <p className="mt-2 text-sm text-vx-muted">{detail}</p>
            </div>
          ))}
        </div>
      </SectionBlock>

      <SectionBlock eyebrow="Outputs" title="Structured readiness reporting for leadership and audit preparation">
        <ul className="space-y-2 text-sm text-vx-muted">
          <li>Readiness summary with confidence scoring by evidence area</li>
          <li>Gap register with severity and remediation urgency</li>
          <li>Evidence quality flags and document freshness checks</li>
          <li>Practical next-step actions for audit readiness plans</li>
        </ul>
      </SectionBlock>

      <SectionBlock eyebrow="Who It Is For" title="Designed for organisations managing formal energy management systems">
        <p className="text-sm leading-7 text-vx-muted">
          Ideal for compliance leads, sustainability teams, and operational sponsors preparing for initial
          certification or recurring surveillance audits.
        </p>
      </SectionBlock>

      <section className="rounded-2xl border border-vx-accent/50 bg-vx-accent/10 p-8">
        <h2 className="text-3xl font-semibold text-vx-text">Join early access discussions</h2>
        <p className="mt-4 max-w-2xl text-sm leading-7 text-vx-muted">
          If ISO 50001 readiness is a priority this year, we are open to pilot conversations with selected partners.
        </p>
        <a href="mailto:hello@vandrix.co.uk" className="mt-6 inline-flex rounded-md bg-vx-text px-5 py-2.5 text-sm font-semibold text-vx-bg">
          Discuss a pilot
        </a>
      </section>
    </div>
  )
}

export default VandrixIsoPage
