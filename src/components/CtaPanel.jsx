function CtaPanel({ eyebrow = 'Next Step', title, body, primaryLabel, secondaryLabel, primaryHref = 'mailto:hello@vandrix.co.uk', secondaryHref = '#contact' }) {
  return (
    <section id="contact" className="rounded-2xl border border-vx-accent/40 bg-gradient-to-br from-vx-accent/12 to-vx-panel p-7 lg:p-10">
      <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-vx-accent">{eyebrow}</p>
      <h2 className="mt-3 text-2xl font-semibold tracking-tight text-vx-text sm:text-3xl lg:text-4xl">{title}</h2>
      <p className="mt-4 max-w-2xl text-sm leading-7 text-vx-muted lg:text-base">{body}</p>
      <div className="mt-7 flex flex-wrap gap-3">
        <a href={primaryHref} className="rounded-md bg-vx-text px-5 py-2.5 text-sm font-semibold text-vx-bg transition hover:opacity-90">
          {primaryLabel}
        </a>
        {secondaryLabel ? (
          <a href={secondaryHref} className="rounded-md border border-vx-border px-5 py-2.5 text-sm font-semibold text-vx-text transition hover:border-vx-accent">
            {secondaryLabel}
          </a>
        ) : null}
      </div>
    </section>
  )
}

export default CtaPanel
