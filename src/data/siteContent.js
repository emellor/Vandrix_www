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
      'Half-hourly meter analytics that highlights out-of-hours waste, baseload issues, and avoidable spend without new hardware.',
    audience: 'Energy managers, estates teams, multi-site operators',
    value: 'Fast insight from existing data and clear actions by site.',
  },
  {
    name: 'Vandrix ISO',
    href: '/vandrix-iso',
    status: 'development',
    statusLabel: 'In development',
    description:
      'AI-assisted ISO 50001 readiness intelligence that reviews uploaded evidence and maps strengths, gaps, and remediation priorities.',
    audience: 'Sustainability leads, compliance teams, audit sponsors',
    value: 'Structured readiness reports for certification and surveillance audits.',
  },
  {
    name: 'Vandrix Sense',
    href: '/vandrix-sense',
    status: 'development',
    statusLabel: 'In development',
    description:
      'Current-sensor and LoRaWAN data pipeline with time-series AI for machine and equipment-level operational energy intelligence.',
    audience: 'Industrial operations, engineering and site reliability teams',
    value: 'Detection of idle load, inefficiency, and abnormal runtime patterns.',
  },
]
