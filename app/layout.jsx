import localFont from 'next/font/local'
import "./globals.css"

const clashDisplay = localFont({
  src: [
    { path: './fonts/ClashDisplay-Medium.woff2', weight: '500' },
    { path: './fonts/ClashDisplay-Semibold.woff2', weight: '600' },
    { path: './fonts/ClashDisplay-Bold.woff2', weight: '700' },
  ],
  variable: '--font-clash',
  display: 'swap',
})

const generalSans = localFont({
  src: [
    { path: './fonts/GeneralSans-Regular.woff2', weight: '400' },
    { path: './fonts/GeneralSans-Medium.woff2', weight: '500' },
  ],
  variable: '--font-sans',
  display: 'swap',
})

export const metadata = {
  title: "Julian Araoz — GTM & Growth Tech Operator | LatAm · AI · Fractional",
  description: "GTM and growth tech operator. 10 years inside TikTok, DiDi, and Mercado Libre. LatAm expansion, fractional Head of Growth, AI business transformation. MIT Sloan. Boston & LatAm.",
  keywords: [
    "GTM operator", "LatAm expansion", "fractional Head of Growth", "AI transformation",
    "go-to-market strategy", "growth operator", "LatAm market entry", "Julian Araoz",
    "ecosystem growth", "AI-native operations", "fractional CRO", "MIT Sloan",
  ],
  authors: [{ name: "Julian Araoz", url: "https://julianaraoz.com" }],
  creator: "Julian Araoz",
  metadataBase: new URL("https://julianaraoz.com"),
  alternates: { canonical: "https://julianaraoz.com" },
  openGraph: {
    type: "website",
    url: "https://julianaraoz.com",
    title: "Julian Araoz — GTM & Growth Tech Operator",
    description: "AI-powered partner infrastructure that generates $10M–$100M+ in incremental revenue. 30-day deployment. Boston & LatAm.",
    siteName: "Julian Araoz",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Julian Araoz — GTM & Growth Tech Operator",
    description: "AI-powered partner infrastructure that generates $10M–$100M+ in incremental revenue. 30-day deployment.",
    creator: "@julianaraoz",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
}

const schemas = [
  // Person — who Julian is
  {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Julian Araoz",
    alternateName: "Julián Araoz",
    url: "https://julianaraoz.com",
    image: "https://julianaraoz.com/hero.jpg",
    jobTitle: "GTM & Growth Tech Operator",
    description: "GTM and growth tech operator. Ten years building inside TikTok, DiDi, and Mercado Libre across Latin America. Helps international companies expand into LatAm, operates as fractional Head of Growth for scale-ups, and migrates traditional businesses to AI-native operations.",
    worksFor: {
      "@type": "Organization",
      name: "MyCreators",
      url: "https://mycreators.io",
    },
    alumniOf: [
      { "@type": "CollegeOrUniversity", name: "MIT Sloan School of Management", url: "https://mitsloan.mit.edu" },
      { "@type": "CollegeOrUniversity", name: "Tecnológico de Monterrey", url: "https://tec.mx" },
    ],
    knowsAbout: [
      "Go-to-Market Strategy", "LatAm Market Expansion", "Strategic Partnerships",
      "Growth Marketing", "AI Business Transformation", "Platform Monetization",
      "Creator Economy", "Loyalty Programs", "Marketplace Operations",
    ],
    hasOccupation: {
      "@type": "Occupation",
      name: "GTM & Growth Tech Operator",
      occupationLocation: { "@type": "City", name: "Boston" },
    },
    nationality: { "@type": "Country", name: "Colombia" },
    sameAs: [
      "https://www.linkedin.com/in/julianaraoz",
      "https://mycreators.io",
      "https://x.com/julianaraozh",
      "https://www.youtube.com/@julianaraozh",
      "https://julianaraozh.substack.com",
    ],
  },
  // ProfessionalService — what he offers
  {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: "Julian Araoz GTM & Growth Tech Operatorure",
    url: "https://julianaraoz.com",
    description: "Modular partner infrastructure deployed in sprints. From ecosystem audit to autonomous revenue engine — in 30 days.",
    founder: { "@type": "Person", name: "Julian Araoz" },
    areaServed: ["United States", "Mexico", "Latin America"],
    priceRange: "$$$$",
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Partnership Infrastructure Sprints",
      itemListElement: [
        {
          "@type": "Offer",
          name: "Sprint 01 — The Blueprint",
          description: "7-day deep-dive: partner ecosystem mapped, revenue gaps identified, AI workflow architecture designed.",
        },
        {
          "@type": "Offer",
          name: "Sprint 02 — Core Infrastructure",
          description: "14-day deployment: CRM connected, Autonomous Deal Desk deployed, first co-sell workflows live.",
        },
        {
          "@type": "Offer",
          name: "Sprint 03 — Autonomous Engine",
          description: "30-day full deployment: commissions automated, partner incentives routed dynamically, zero manual settlement.",
        },
      ],
    },
  },
  // FAQPage — critical for AEO / AI search engines
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Who is Julian Araoz's partnership service for?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Founders and operators at $10M–$500M companies who know partnerships should be driving revenue — but haven't built the program yet.",
        },
      },
      {
        "@type": "Question",
        name: "How is Julian Araoz different from hiring a Head of Partnerships?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "A Head of Partnerships takes 6 months to hire and costs $200K+. Julian deploys an autonomous ecosystem in 30 days using AI infrastructure. You get the program, the deals, and the systems — without the headcount.",
        },
      },
      {
        "@type": "Question",
        name: "How is Julian Araoz different from a consulting firm?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Consulting firms deliver decks. Julian delivers deals. The metric isn't hours billed — it's first partnership closed.",
        },
      },
      {
        "@type": "Question",
        name: "What does Julian Araoz's partnership program cost?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Engagements are modular. Starting with The Blueprint (Sprint 01) as a low-risk entry point to map your architecture. Full engine deployments scale based on complexity and include a performance component.",
        },
      },
      {
        "@type": "Question",
        name: "What happens after Julian Araoz's partnership program deployment?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "You own the infrastructure — the AI workflows, CRM integrations, and playbook. Most clients transition to a fractional retainer or their internal team takes the wheel. Either way, you're not dependent on Julian.",
        },
      },
      {
        "@type": "Question",
        name: "How long does it take to build a partnership program with Julian Araoz?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "The full autonomous engine is deployed in 30 days across three sprints: 7-day blueprint, 14-day infrastructure build, and 30-day autonomous engine deployment.",
        },
      },
    ],
  },
  // WebSite
  {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Julian Araoz",
    url: "https://julianaraoz.com",
    description: "GTM & Growth Tech Operator building AI-powered partner infrastructure that generates $10M–$100M+ in incremental revenue in 30 days.",
    author: { "@type": "Person", name: "Julian Araoz" },
  },
]

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${clashDisplay.variable} ${generalSans.variable}`}>
      <head>
        {schemas.map((schema, i) => (
          <script key={i} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
        ))}
      </head>
      <body>{children}</body>
    </html>
  )
}
