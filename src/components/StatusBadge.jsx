const statusStyles = {
  available: 'border-vx-success/80 bg-vx-success/10 text-[#9ee3d6]',
  development: 'border-vx-accent/80 bg-vx-accent/10 text-[#bdc9ff]',
}

function StatusBadge({ status, children }) {
  return (
    <span
      className={`inline-flex rounded-full border px-2.5 py-1 text-xs font-medium ${statusStyles[status]}`}
    >
      {children}
    </span>
  )
}

export default StatusBadge
