import CtaPanel from '../components/CtaPanel'
import PageHero from '../components/PageHero'
import SectionBlock from '../components/SectionBlock'

function VandrixSensePage() {
  return (
    <div className="space-y-8 lg:space-y-10">
      <PageHero
        eyebrow="Vandrix Sense"
        status="development"
        statusLabel="In development"
        title="Vertical operational intelligence from sensing, telemetry, and time-series AI."
        intro="Vandrix Sense is being developed as a focused product for asset-intensive operations. It combines current sensing, LoRaWAN telemetry, and machine-level analysis to expose operational energy waste and control issues."
      />

      <SectionBlock eyebrow="Context" title="Why meter data alone is often insufficient">
        <p className="text-sm leading-7 text-vx-muted lg:text-base">
          Site-level electricity data can indicate that something is wrong, but not which machine, system, or runtime pattern is responsible.
          Vandrix Sense addresses that blind spot with targeted equipment-level visibility.
        </p>
      </SectionBlock>

      <SectionBlock eyebrow="Where Sense Fits" title="A practical sensing stack for defined operational outcomes">
        <div className="grid gap-4 md:grid-cols-3">
          {[
            'Current sensors on priority loads and process assets',
            'LoRaWAN telemetry for resilient low-power collection',
            'Time-series modelling with operational context and thresholds',
          ].map((item) => (
            <div key={item} className="rounded-xl border border-vx-border/80 bg-vx-surface-2/60 p-4 text-sm leading-6 text-vx-muted">
              {item}
            </div>
          ))}
        </div>
      </SectionBlock>

      <SectionBlock eyebrow="Priority Use Cases" title="Initial vertical scenarios in scope">
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {[
            'Machinery running outside scheduled production windows',
            'Compressor inefficiency and compressed air losses',
            'HVAC runtime outside expected occupancy schedules',
            'Refrigeration anomalies and unstable duty cycles',
            'Line-level energy intensity shifts by product or period',
            'Abnormal load signatures linked to operational faults',
          ].map((item) => (
            <div key={item} className="rounded-lg border border-vx-border/80 bg-vx-surface-2/50 px-4 py-3 text-sm text-vx-muted">
              {item}
            </div>
          ))}
        </div>
      </SectionBlock>

      <SectionBlock eyebrow="Delivery Model" title="How Vandrix Sense operates in practice">
        <div className="grid gap-4 md:grid-cols-4">
          {[
            ['Instrument', 'Deploy sensing at selected assets and systems.'],
            ['Stream', 'Collect time-series telemetry into the Vandrix data layer.'],
            ['Analyse', 'Apply AI detection logic for inefficiency and abnormal behaviour.'],
            ['Intervene', 'Translate findings into clear operational actions.'],
          ].map(([step, detail]) => (
            <div key={step} className="rounded-xl border border-vx-border/80 bg-vx-surface-2/60 p-4">
              <p className="text-sm font-semibold text-vx-text">{step}</p>
              <p className="mt-2 text-sm leading-6 text-vx-muted">{detail}</p>
            </div>
          ))}
        </div>
      </SectionBlock>

      <SectionBlock eyebrow="Ideal Customers" title="Designed for engineering-led and multi-site operations">
        <p className="text-sm leading-7 text-vx-muted lg:text-base">
          Best suited to manufacturing sites, process facilities, logistics operations, and estates with critical plant where
          machine-level intelligence can materially improve efficiency and runtime control.
        </p>
      </SectionBlock>

      <CtaPanel
        title="Discuss a Vandrix Sense pilot"
        body="We are working with early partners to shape specific vertical deployments with clear operational objectives."
        primaryLabel="Discuss a pilot"
        secondaryLabel="Request early access"
        secondaryHref="mailto:hello@vandrix.co.uk?subject=Request%20early%20access%20for%20Vandrix%20Sense"
      />
    </div>
  )
}

export default VandrixSensePage
