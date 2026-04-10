export const navigationItems = [
  { label: 'Solutions', href: '/' },
  { label: 'WattGuard', href: '/wattguard' },
  { label: 'Vandrix ISO', href: '/vandrix-iso' },
  { label: 'Vandrix Sense', href: '/vandrix-sense' },
  { label: 'About', href: '/about' },
]

export const solutions = [
  {
    name: 'WattGuard',
    href: '/wattguard',
    status: 'available',
    statusLabel: 'Available now',
    description:
      'Commercially ready analytics for half-hourly meter data, designed to identify out-of-hours waste, baseload drift, and avoidable spend.',
    audience: 'Energy managers, estates leads, and multi-site operators',
    value: 'Rapid insight from existing data with clear, practical actions.',
  },
  {
    name: 'Vandrix ISO',
    href: '/vandrix-iso',
    status: 'development',
    statusLabel: 'In development',
    description:
      'AI-assisted ISO 50001 audit readiness and compliance intelligence for organisations preparing evidence for certification or surveillance.',
    audience: 'Compliance teams, sustainability leaders, and audit sponsors',
    value: 'Structured gap analysis and remediation priorities for early preparation.',
  },
  {
    name: 'Vandrix Sense',
    href: '/vandrix-sense',
    status: 'development',
    statusLabel: 'In development',
    description:
      'Vertical operational intelligence using current sensors, LoRaWAN telemetry, and time-series AI at machine and equipment level.',
    audience: 'Manufacturing and engineering teams in asset-intensive environments',
    value: 'Detection of idle load, inefficiency, and abnormal operational behaviour.',
  },
]
