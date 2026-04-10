import CtaPanel from '../components/CtaPanel'
import PageHero from '../components/PageHero'
import SectionBlock from '../components/SectionBlock'

function VandrixIsoPage() {
  return (
    <div className="space-y-8 lg:space-y-10">
      <PageHero
        eyebrow="Vandrix ISO"
        status="development"
        statusLabel="In development"
        title="AI-assisted ISO 50001 audit readiness and compliance intelligence."
        intro="Vandrix ISO is being developed as a premium product for organisations preparing for certification or surveillance activity. It is designed to assess evidence quality, identify compliance gaps, and guide remediation planning."
      />

      <SectionBlock eyebrow="Compliance Problem" title="Audit readiness work is often manual, fragmented, and late-stage">
        <p className="text-sm leading-7 text-vx-muted lg:text-base">
          Teams frequently assemble evidence from multiple functions under time pressure, with limited visibility of document strength,
          coverage, and recency. Vandrix ISO is designed to provide an earlier and more structured view.
        </p>
      </SectionBlock>

      <SectionBlock eyebrow="Evidence Inputs" title="Typical document categories reviewed">
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {[
            'Energy policy and governance documents',
            'Objectives, targets, and performance KPIs',
            'Monitoring records and metering evidence',
            'Internal audit findings and actions',
            'Management review records',
            'Corrective action and improvement logs',
          ].map((item) => (
            <div key={item} className="rounded-lg border border-vx-border/80 bg-vx-surface-2/50 px-4 py-3 text-sm text-vx-muted">
              {item}
            </div>
          ))}
        </div>
      </SectionBlock>

      <SectionBlock eyebrow="AI Workflow" title="How Vandrix ISO processes readiness evidence">
        <div className="grid gap-4 md:grid-cols-4">
          {[
            ['Ingest', 'Upload policies, records, and supporting artefacts.'],
            ['Assess', 'Map evidence against ISO 50001 readiness expectations.'],
            ['Identify', 'Flag missing evidence, weak areas, and outdated material.'],
            ['Guide', 'Issue structured readiness outputs and remediation guidance.'],
          ].map(([step, detail]) => (
            <div key={step} className="rounded-xl border border-vx-border/80 bg-vx-surface-2/60 p-4">
              <p className="text-sm font-semibold text-vx-text">{step}</p>
              <p className="mt-2 text-sm leading-6 text-vx-muted">{detail}</p>
            </div>
          ))}
        </div>
      </SectionBlock>

      <SectionBlock eyebrow="Example Outputs" title="Designed for audit sponsors and delivery teams">
        <ul className="space-y-2 text-sm leading-7 text-vx-muted lg:text-base">
          <li>Readiness summary by clause area and evidence confidence</li>
          <li>Gap register with severity and ownership guidance</li>
          <li>Flags for stale, incomplete, or low-strength documentation</li>
          <li>Prioritised remediation plan for the next audit window</li>
        </ul>
      </SectionBlock>

      <CtaPanel
        title="Request early access to Vandrix ISO"
        body="We are inviting selected organisations to shape pilot use cases ahead of wider launch."
        primaryLabel="Request early access"
        secondaryLabel="Discuss a pilot"
        secondaryHref="mailto:hello@vandrix.co.uk?subject=Discuss%20Vandrix%20ISO%20pilot"
      />
    </div>
  )
}

export default VandrixIsoPage
