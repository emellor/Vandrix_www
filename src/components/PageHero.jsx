import StatusBadge from './StatusBadge'

function PageHero({ eyebrow, title, intro, status, statusLabel, children }) {
  return (
    <section className="rounded-2xl border border-vx-border bg-vx-panel p-7 shadow-vx lg:p-12">
      <div className="flex flex-wrap items-center gap-3">
        <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-vx-accent">{eyebrow}</p>
        {status ? <StatusBadge status={status}>{statusLabel}</StatusBadge> : null}
      </div>
      <h1 className="mt-4 max-w-4xl text-balance text-3xl font-semibold tracking-tight text-vx-text sm:text-4xl lg:text-5xl">
        {title}
      </h1>
      <p className="mt-5 max-w-3xl text-pretty text-base leading-7 text-vx-muted">{intro}</p>
      {children ? <div className="mt-8">{children}</div> : null}
    </section>
  )
}

export default PageHero
