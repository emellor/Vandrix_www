function SectionBlock({ eyebrow, title, intro, children, className = '' }) {
  return (
    <section className={`rounded-2xl border border-vx-border bg-vx-panel p-6 shadow-vx lg:p-8 ${className}`}>
      {eyebrow ? <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-vx-accent">{eyebrow}</p> : null}
      <h2 className="mt-3 text-2xl font-semibold tracking-tight text-vx-text lg:text-3xl">{title}</h2>
      {intro ? <p className="mt-4 max-w-3xl text-sm leading-7 text-vx-muted lg:text-base">{intro}</p> : null}
      <div className="mt-6">{children}</div>
    </section>
  )
}

export default SectionBlock
