import SectionBlock from '../components/SectionBlock'
import StatusBadge from '../components/StatusBadge'

function VandrixSensePage() {
  return (
    <div className="space-y-8">
      <section className="rounded-2xl border border-vx-border bg-vx-surface/70 p-8 lg:p-12">
        <div className="flex flex-wrap items-center gap-3">
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-vx-accent">Vandrix Sense</p>
          <StatusBadge status="development">In development</StatusBadge>
        </div>
        <h1 className="mt-4 max-w-4xl text-4xl font-semibold tracking-tight text-vx-text lg:text-5xl">
          Equipment-level sensing and AI insight for operational energy control.
        </h1>
        <p className="mt-5 max-w-3xl text-base leading-7 text-vx-muted">
          Vandrix Sense uses current sensors, LoRaWAN connectivity, and time-series analytics to detect waste,
          idle load, and inefficiency where site-level meter data cannot provide enough resolution.
        </p>
      </section>

      <SectionBlock eyebrow="Why It Matters" title="Meter data is useful, but not always enough">
        <p className="text-sm leading-7 text-vx-muted">
          Half-hourly meter data can highlight aggregate anomalies, but it rarely explains which machine,
          process, or operating condition is driving the issue. Vandrix Sense closes that gap.
        </p>
      </SectionBlock>

      <SectionBlock eyebrow="Where Sensing Adds Value" title="Targeted visibility at machine and equipment level">
        <div className="grid gap-4 md:grid-cols-3">
          {['Current sensors at load points', 'LoRaWAN telemetry for reliable low-power capture', 'Time-series modelling with operational context'].map((item) => (
            <div key={item} className="rounded-xl border border-vx-border/80 bg-vx-surface-2/60 p-4 text-sm text-vx-muted">{item}</div>
          ))}
        </div>
      </SectionBlock>

      <SectionBlock eyebrow="Use Cases" title="Focused, outcome-led operational scenarios">
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {[
            'Machinery left running outside planned hours',
            'Compressor inefficiency and compressed air losses',
            'HVAC runtime beyond schedule requirements',
            'Refrigeration anomalies and unstable load behaviour',
            'Line-level or site-level energy intensity shifts',
            'Abnormal operational load patterns during production cycles',
          ].map((item) => (
            <div key={item} className="rounded-lg border border-vx-border/80 bg-vx-surface-2/50 px-4 py-3 text-sm text-vx-muted">{item}</div>
          ))}
        </div>
      </SectionBlock>

      <SectionBlock eyebrow="Platform Flow" title="How the sensing stack operates">
        <div className="grid gap-4 md:grid-cols-4">
          {[
            ['Capture', 'Deploy sensing on priority assets and systems.'],
            ['Stream', 'Transmit telemetry into the Vandrix time-series layer.'],
            ['Detect', 'Run AI models for inefficiency, idle load, and abnormal behaviour.'],
            ['Respond', 'Convert findings into operational interventions and follow-up tracking.'],
          ].map(([step, detail]) => (
            <div key={step} className="rounded-xl border border-vx-border/80 bg-vx-surface-2/60 p-4">
              <p className="text-sm font-semibold text-vx-text">{step}</p>
              <p className="mt-2 text-sm text-vx-muted">{detail}</p>
            </div>
          ))}
        </div>
      </SectionBlock>

      <SectionBlock eyebrow="Ideal Profiles" title="Best suited to technical and asset-intensive operations">
        <p className="text-sm leading-7 text-vx-muted">
          Particularly relevant for manufacturing, logistics, refrigeration-heavy environments, and estates
          with critical plant where targeted sensing can accelerate waste reduction and operating control.
        </p>
      </SectionBlock>

      <section className="rounded-2xl border border-vx-accent/50 bg-vx-accent/10 p-8">
        <h2 className="text-3xl font-semibold text-vx-text">Discuss a Vandrix Sense pilot</h2>
        <p className="mt-4 max-w-2xl text-sm leading-7 text-vx-muted">
          We are working with early partners to shape vertical-focused deployments with clear operational outcomes.
        </p>
        <a href="mailto:hello@vandrix.co.uk" className="mt-6 inline-flex rounded-md bg-vx-text px-5 py-2.5 text-sm font-semibold text-vx-bg">
          Start pilot discussions
        </a>
      </section>
    </div>
  )
}

export default VandrixSensePage
