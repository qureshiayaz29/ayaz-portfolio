export interface Experience {
  domain: string
  domainLabel: string
  role: string
  title: string
  tenure: string
  scale: string
  stack: string[]
  highlights: string[]
}

export const experiences: Experience[] = [
  {
    domain: "fintech",
    domainLabel: "Fintech / Trading",
    role: "Senior Android Engineer",
    title: "High-scale retail trading platform",
    tenure: "Nov 2022 – Present · 2+ yrs",
    scale: "80M users · 4M+ DAU · ~99.7% crash-free rate",
    stack: ["Kotlin", "Jetpack Compose", "KMM", "Room DB", "Dagger/Hilt", "Coroutines", "Crashlytics", "Mixpanel", "A/B Testing"],
    highlights: [
      "Reduced order form load time by ~25% (480ms → 124ms) and improved overall order placement speed by 20% through targeted performance work.",
      "Designed the advisory widget system — contributed to 1.95M+ user interactions and 117K orders placed in the first 6 months.",
      "Developed the in-app nudges system, driving 120K additional orders by surfacing contextual prompts at the right moment.",
      "Built offline-first Watchlist using Room DB and data prefetching — significantly improved perceived performance and reliability.",
      "Owned architecture and delivery of a KMM module — clean layering, future-ready modularisation.",
      "Delivered features end-to-end: pre-release analysis, A/B testing, and zero-issue production rollouts under tight deadlines.",
      "Interviewed and evaluated candidates across all levels, contributing to team growth."
    ]
  },
  {
    domain: "mobility",
    domainLabel: "Mobility / Super-App",
    role: "Senior Android Engineer",
    title: "Multi-service consumer super-app",
    tenure: "Oct 2021 – Nov 2022 · 1 yr",
    scale: "Operated across Southeast Asia · 1M+ transactions at launch",
    stack: ["Kotlin", "MVVM", "Clean Architecture", "ktlint", "detekt", "Flutter", "React Native", "CI/CD"],
    highlights: [
      "Implemented a train ticket booking system — handled 1M+ transactions in the first month with zero downtime or critical issues.",
      "Introduced modular use-case architecture in MVVM, reducing onboarding time for new developers by ~30%.",
      "Built and shipped a transaction logs system from scratch, reducing support tickets related to payment issues by ~20%.",
      "Improved code quality via ktlint, detekt, and static analysis — reduced review time by ~25% and improved test coverage.",
      "Delivered multiple cross-platform POCs (Flutter + React Native), accelerating architectural decisions."
    ]
  },
  {
    domain: "mobility",
    domainLabel: "EV / Hardware + App",
    role: "Android Engineer",
    title: "Consumer EV scooter companion app",
    tenure: "May 2021 – Oct 2021 · 6 mos",
    scale: "Shipped on Play Store · zero-glitch launch",
    stack: ["Kotlin", "MVVM", "CI/CD", "Android Studio", "detekt", "JaCoCo"],
    highlights: [
      "Developed and published the scooter companion app within weeks — zero glitches at launch.",
      "Implemented smooth animations to showcase scooter features in an engaging onboarding experience.",
      "Conducted code reviews, enforced coding standards, and introduced quality tooling (detekt, ktlint, JaCoCo)."
    ]
  },
  {
    domain: "enterprise",
    domainLabel: "Enterprise / Client Delivery",
    role: "Android Engineer",
    title: "Client-facing Android product delivery",
    tenure: "Sep 2019 – May 2021 · ~2 yrs",
    scale: "Multiple clients · B2C mobility apps",
    stack: ["Android", "Kotlin", "Java", "MVVM", "REST APIs", "Play Store"],
    highlights: [
      "Built, enhanced, and maintained high-impact Android applications across mobility and enterprise clients.",
      "Translated product requirements into well-scoped features — consistent on-time delivery of user-focused solutions."
    ]
  }
]
