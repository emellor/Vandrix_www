const statusStyles = {
  available: 'border-[#16a34a]/25 bg-[#16a34a]/10 text-[#166534]',
  development: 'border-[#2563EB]/20 bg-[#2563EB]/10 text-[#1e40af]',
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
