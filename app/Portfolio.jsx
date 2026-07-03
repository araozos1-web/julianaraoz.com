"use client"
import React, { useEffect, useState } from "react"
import Lenis from "lenis"

// ─── STATIC CONTENT ──────────────────────────────────────────────────────────

const CTA = "https://calendly.com/jaraoz-mit/new-meeting"
const EMAIL = "mailto:jaraoz@mit.edu"

const CARDS = {
  en: [
    { name: "L'Oréal × Mercado Libre", img: "/mercadolibre.jpg", obj: "obj-c",  tag: "Ecosystem Build",      text: "#1 CPG partner by GMV. 11 brands activated. First co-investment model of this scale in LatAm." },
    { name: "DiDi × OxxoGas",          img: "/didi-mic.jpg",     obj: "obj-c",  tag: "Alliance Architecture", text: "Zero platform cost. Thousands of stations integrated. Driver retention moat vs. Uber." },
    { name: "TikTok × Mercado Libre",  img: "/tiktok.jpg",       obj: "obj-c",  tag: "B2B GTM",               text: "First commerce integration in LatAm. TikTok for Business flagship case. 2.5x ROAS." },
    { name: "MyCreators.io",           img: "/mycreators.jpg",   obj: "obj-top", tag: "0→1 Program",          text: "Payments infrastructure and partner ecosystem for LatAm creators, zero agency friction." },
    { name: "Crehana",                 img: "/crehana.jpg",      obj: "obj-c",  tag: "Partner Retention",     text: "B2B partnerships and behavioral design turned into scalable retention programs." },
  ],
  es: [
    { name: "L'Oréal × Mercado Libre", img: "/mercadolibre.jpg", obj: "obj-c",  tag: "Ecosistema",          text: "#1 partner CPG por GMV. 11 marcas activadas. Primer modelo de co-inversión de esta escala en LATAM." },
    { name: "DiDi × OxxoGas",          img: "/didi-mic.jpg",     obj: "obj-c",  tag: "Alianza Estratégica", text: "Cero costo de plataforma. Miles de estaciones integradas. Ventaja de retención vs. Uber." },
    { name: "TikTok × Mercado Libre",  img: "/tiktok.jpg",       obj: "obj-c",  tag: "GTM B2B",             text: "Primera integración de comercio en LATAM. Caso insignia de TikTok for Business. 2.5x ROAS." },
    { name: "MyCreators.io",           img: "/mycreators.jpg",   obj: "obj-top", tag: "Programa 0→1",        text: "Infraestructura de pagos y ecosistema de partners para creadores LATAM, sin fricción de agencia." },
    { name: "Crehana",                 img: "/crehana.jpg",      obj: "obj-c",  tag: "Retención de Partners", text: "Partnerships B2B y diseño conductual convertidos en programas de retención escalables." },
  ],
}

const LOGO_BRANDS = [
  { name: "TikTok" }, { name: "Mercado Libre" }, { name: "DiDi" }, { name: "Kavak" },
  { name: "La Haus" }, { name: "L'Oréal" }, { name: "Unilever" }, { name: "P&G" },
  { name: "Diageo" }, { name: "Pernod Ricard" }, { name: "McDonald's" }, { name: "Oxxo" },
  { name: "7-Eleven" }, { name: "Pemex" }, { name: "Sura" }, { name: "SmartFit" },
  { name: "Crehana" }, { name: "MIT Sloan" }, { name: "MyCreators" },
]


const FAQ_ITEMS = {
  en: [
    { q: "What exactly do you do?",
      a: "I help companies grow. If you're entering LatAm, I build the GTM infrastructure. If you need growth execution, I operate as a fractional Head of Growth. If you're a traditional business that needs to modernize, I migrate your operations to AI-driven workflows." },
    { q: "Who is this for?",
      a: "Startups expanding into LatAm. Foreign platforms entering the region. Scale-ups that need senior growth execution. Agencies and traditional businesses ready to operate with AI." },
    { q: "What happens after an engagement?",
      a: "You own everything I build. The systems, the workflows, the playbooks, the automations. Most clients move to a fractional retainer. Others hand it off to their team." },
    { q: "Are you open to full-time roles?",
      a: "For the right company and the right challenge, yes." },
  ],
  es: [
    { q: "¿Qué haces exactamente?",
      a: "Ayudo a empresas a crecer. Si estás entrando a LatAm, construyo la infraestructura GTM. Si necesitas ejecución de growth, opero como Head of Growth fraccional. Si eres una empresa tradicional que quiere modernizarse, migro tus operaciones a workflows impulsados por IA." },
    { q: "¿Para quién es esto?",
      a: "Startups expandiéndose a LatAm. Plataformas extranjeras entrando a la región. Scale-ups que necesitan ejecución de growth senior. Agencias y empresas tradicionales listas para operar con IA." },
    { q: "¿Qué pasa al terminar un engagement?",
      a: "Te quedas con todo lo que construyo: los sistemas, los workflows, los playbooks, las automatizaciones. La mayoría de los clientes pasan a un retainer fraccional. Otros lo transfieren a su equipo." },
    { q: "¿Estás abierto a roles de tiempo completo?",
      a: "Para la empresa y el reto adecuados, sí." },
  ],
}

const T = {
  en: {
    heroHeadline:   "I build growth engines and commercial operations.",
    heroCta:        "Work with me →",
    heroSubtitle:   "Advisor & Fractional Tech Operator.",
    heroTagline:    "Helping global businesses expand into LatAm, and traditional companies become AI-driven.",
    workedWith:     "Built and operated inside",
    aboutLabel:     "// About",
    aboutTitle:     <>A decade inside hypergrowth.<br />A life between cultures.</>,
    aboutBody:      "10+ years building growth and commercial operations inside TikTok, DiDi, and Mercado Libre. Companies that scaled across languages, currencies, and regulations most playbooks never touch. I bring that same operating experience, and a life split between the U.S. and Latin America, to every company I work with.",
    aboutEduLabel:  "Educated at",
    sprintLabel:    "// How I work with you",
    sprintTitle:    <>How I work<br />with you.</>,
    s1label:        "// AI Transformation",   s1title: "AI Business Transformation",
    s1b:            ["→ AI workflow migration.", "→ Cost reduction through automation.", "→ Tech stack deployment."],
    s2label:        "// LatAm Expansion",     s2title: "LatAm Expansion & GTM",
    s2b:            ["→ Market entry architecture.", "→ Channel and distribution design.", "→ The local operating playbook."],
    s3label:        "// Growth",              s3title: "Fractional Head of Growth",
    s3b:            ["→ Growth loops.", "→ Loyalty and retention architecture.", "→ Partnership and ecosystem programs."],
    s4label:        "// Advisory",            s4title: "Advisory & Strategy",
    s4b:            ["→ GTM and growth strategy sessions.", "→ AI readiness assessment.", "→ Channel and partnership audits."],
    casesLabel:     "// Case studies",
    casesTitle:     <>The Work.</>,
    metricsLabel:   "// By the numbers",
    metrics: [
      { n: "12x",  label: "Revenue Growth",      sub: "As fractional CGO for VC-backed startups" },
      { n: "16+",  label: "AI Transformations",  sub: "Operations scaled for SMBs & agencies" },
      { n: "2",    label: "Cross-Border GTMs",   sub: "LatAm soft-landing for Chinese tech" },
      { n: "3",    label: "Ecosystems Built",    sub: "TikTok · DiDi · Mercado Libre" },
    ],
    faqLabel:       "// FAQ",
    faqTitle:       <>Common<br />questions</>,
    ctaLabel:       "// Let's build",
    ctaTitle:       <>Let&apos;s build.</>,
    ctaDesc:        "Book a call. I'll tell you where the gaps are and what it would take to fix them.",
    ctaCta:         "Work with me →",
    footerCopy:     "Julian Araoz © 2026 · Boston · Mexico City",
  },
  es: {
    heroHeadline:   "Construyo motores de crecimiento y operaciones.",
    heroCta:        "Hablemos →",
    heroSubtitle:   "Asesor & Operador Tech Fraccional.",
    heroTagline:    "Ayudo a empresas globales a expandirse en LatAm, y a empresas tradicionales a operar con IA.",
    workedWith:     "Construido y operado dentro de",
    aboutLabel:     "// Sobre mí",
    aboutTitle:     <>Una década en hypergrowth.<br />Una vida entre culturas.</>,
    aboutBody:      "Más de 10 años construyendo growth y operaciones comerciales dentro de TikTok, DiDi y Mercado Libre. Empresas que escalaron cruzando idiomas, monedas y regulaciones que la mayoría de los playbooks nunca toca. Traigo esa misma experiencia operativa, y una vida repartida entre Estados Unidos y Latinoamérica, a cada empresa con la que trabajo.",
    aboutEduLabel:  "Formado en",
    sprintLabel:    "// Cómo trabajo contigo",
    sprintTitle:    <>Cómo trabajo<br />contigo.</>,
    s1label:        "// IA y Transformación",  s1title: "Transformación AI del Negocio",
    s1b:            ["→ Migración de workflows a IA.", "→ Reducción de costos por automatización.", "→ Despliegue de tech stack."],
    s2label:        "// Expansión LatAm",      s2title: "Expansión LatAm & GTM",
    s2b:            ["→ Arquitectura de entrada al mercado.", "→ Diseño de canales y distribución.", "→ El playbook de operación local."],
    s3label:        "// Growth",               s3title: "Head of Growth Fraccional",
    s3b:            ["→ Growth loops.", "→ Arquitectura de lealtad y retención.", "→ Programas de partnerships y ecosistemas."],
    s4label:        "// Advisory",             s4title: "Advisory & Estrategia",
    s4b:            ["→ Sesiones de estrategia GTM y growth.", "→ Diagnóstico de preparación para IA.", "→ Auditorías de canales y partnerships."],
    casesLabel:     "// Casos",
    casesTitle:     <>El Trabajo.</>,
    metricsLabel:   "// Los números",
    metrics: [
      { n: "12x",  label: "Revenue Growth",         sub: "Como CGO fraccional para startups con VC" },
      { n: "16+",  label: "Transformaciones con IA", sub: "Operaciones escaladas para PyMEs y agencias" },
      { n: "2",    label: "GTMs Cross-Border",      sub: "Soft-landing en LatAm para tech china" },
      { n: "3",    label: "Ecosistemas",             sub: "TikTok · DiDi · Mercado Libre" },
    ],
    faqLabel:       "// Preguntas",
    faqTitle:       <>Lo que<br />preguntan</>,
    ctaLabel:       "// Arranquemos",
    ctaTitle:       <>Arranquemos.</>,
    ctaDesc:        "Agenda una llamada. Te digo dónde están los gaps y qué haría para cerrarlos.",
    ctaCta:         "Hablemos →",
    footerCopy:     "Julian Araoz © 2026 · Boston · Ciudad de México",
  },
}

const BORDER = "1px solid rgba(255,255,255,0.07)"

// ─── COMPONENT ───────────────────────────────────────────────────────────────

export default function Portfolio() {
  const [lang, setLang] = useState("en")
  const t = T[lang]
  const cards = CARDS[lang]
  const faq = FAQ_ITEMS[lang]

  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches
    const cleanups = []

    if (!reduce) {
      const lenis = new Lenis({ duration: 1.1, smoothWheel: true })
      let rafId
      const raf = (time) => { lenis.raf(time); rafId = requestAnimationFrame(raf) }
      rafId = requestAnimationFrame(raf)
      cleanups.push(() => { cancelAnimationFrame(rafId); lenis.destroy() })
    }

    const heroImg = document.getElementById("heroImg")
    if (!reduce && heroImg) {
      const onScroll = () => { const y = window.scrollY; if (y < window.innerHeight) heroImg.style.transform = `translateY(${y * 0.18}px) scale(${1 + y * 0.0002})` }
      window.addEventListener("scroll", onScroll, { passive: true })
      cleanups.push(() => window.removeEventListener("scroll", onScroll))
    }

    if (!reduce) {
      const chips = document.querySelectorAll("#chips .chip")
      const onMove = (e) => { const cx = e.clientX / window.innerWidth - 0.5, cy = e.clientY / window.innerHeight - 0.5; chips.forEach((ch) => { const d = parseFloat(ch.dataset.depth || 20); ch.style.transform = `translate(${cx * d}px, ${cy * d}px)` }) }
      window.addEventListener("pointermove", onMove)
      cleanups.push(() => window.removeEventListener("pointermove", onMove))
    }

    const io = new IntersectionObserver((es) => es.forEach((e) => { if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target) } }), { threshold: 0.08 })
    document.querySelectorAll(".reveal").forEach((el, i) => { el.style.transitionDelay = (i % 4) * 0.07 + "s"; io.observe(el) })
    cleanups.push(() => io.disconnect())

    const car = document.getElementById("carousel")
    if (car) {
      let down = false, sx = 0, sl = 0, vel = 0, lx = 0, raf2 = null
      const begin = (e) => { if (e.pointerType === "touch") return; down = true; car.classList.add("grabbing"); sx = lx = e.clientX; sl = car.scrollLeft; vel = 0; if (raf2) cancelAnimationFrame(raf2); try { car.setPointerCapture(e.pointerId) } catch (_) {} }
      const move  = (e) => { if (!down) return; car.scrollLeft = sl - (e.clientX - sx); vel = e.clientX - lx; lx = e.clientX }
      const glide = () => { vel *= 0.93; if (Math.abs(vel) < 0.4) return; car.scrollLeft -= vel; raf2 = requestAnimationFrame(glide) }
      const end   = () => { if (!down) return; down = false; car.classList.remove("grabbing"); if (Math.abs(vel) > 1) raf2 = requestAnimationFrame(glide) }
      car.addEventListener("pointerdown", begin); car.addEventListener("pointermove", move); car.addEventListener("pointerup", end); car.addEventListener("pointercancel", end); car.addEventListener("pointerleave", end)
      cleanups.push(() => { car.removeEventListener("pointerdown", begin); car.removeEventListener("pointermove", move); car.removeEventListener("pointerup", end); car.removeEventListener("pointercancel", end); car.removeEventListener("pointerleave", end); if (raf2) cancelAnimationFrame(raf2) })
    }

    document.querySelectorAll("video[data-fallback]").forEach((v) => { let ok = false; const fail = () => { v.style.display = "none" }; v.addEventListener("playing", () => (ok = true)); v.addEventListener("error", fail); v.play && v.play().catch(() => {}); setTimeout(() => { if (!ok && v.readyState < 3) fail() }, 2000) })

    return () => cleanups.forEach((fn) => fn())
  }, [])

  return (
    <main style={{ background: "#000" }}>

      {/* ══ 1. HERO ══════════════════════════════════════════════════════ */}
      <section id="hero" className="relative h-screen min-h-[700px] w-full overflow-hidden" style={{ background: "#000" }}>
        <div className="absolute inset-0 media-fallback" />
        <img id="heroImg" src="/hero.jpg" alt="Julian Araoz" fetchPriority="high" draggable="false"
          className="heroimg absolute inset-0 w-full h-full object-cover"
          onError={(e) => (e.currentTarget.style.display = "none")} />
        <div className="absolute inset-0" style={{ background: "linear-gradient(to bottom, rgba(0,0,0,0.2) 0%, rgba(0,0,0,0.05) 45%, rgba(0,0,0,0.78) 100%)" }} />

        {/* Name chip — top left */}
        <div className="absolute top-6 left-6 z-20">
          <span className="inline-flex items-center px-5 py-2.5 rounded-full font-sans font-semibold text-sm text-black bg-white">
            Julian Araoz
          </span>
        </div>

        {/* Language toggle — top right */}
        <div className="absolute top-6 right-6 z-20 flex items-center gap-1 p-1 rounded-full"
             style={{ background: "rgba(255,255,255,0.09)", backdropFilter: "blur(20px)", WebkitBackdropFilter: "blur(20px)", border: "1px solid rgba(255,255,255,0.18)" }}>
          <button onClick={() => setLang("en")}
                  className={`px-4 py-1.5 rounded-full font-sans font-semibold text-xs transition-all ${lang === "en" ? "bg-white text-black" : "text-white/50 hover:text-white/80"}`}>
            EN
          </button>
          <button onClick={() => setLang("es")}
                  className={`px-4 py-1.5 rounded-full font-sans font-semibold text-xs transition-all ${lang === "es" ? "bg-white text-black" : "text-white/50 hover:text-white/80"}`}>
            ES
          </button>
        </div>

        {/* Floating chips */}
        <div id="chips" className="absolute inset-0 z-10 pointer-events-none select-none">
          {[
            { text: "Cross-Border GTM",         style: { top:  "9%", left:  "2%" }, depth: 18, delay: "0s"   },
            { text: "AI-Driven Operations",     style: { top:  "9%", right: "2%" }, depth: 24, delay: "1.1s" },
            { text: "Ecosystem Monetization",   style: { top: "40%", left:  "2%" }, depth: 28, delay: "1.8s" },
            { text: "LatAm Soft-Landing",       style: { top: "40%", right: "2%" }, depth: 16, delay: "0.7s" },
            { text: "Loyalty & Retention",      style: { top: "66%", left:  "2%" }, depth: 14, delay: "2.3s" },
            { text: "Fractional CRO & Advisory",style: { top: "66%", right: "2%" }, depth: 20, delay: "0.4s" },
          ].map((chip, i) => (
            <div key={chip.text}
                 className={`chip float absolute ${i >= 4 ? "hidden md:inline-flex" : "inline-flex"} items-center px-5 py-2.5 rounded-full font-sans font-medium text-sm text-white/85`}
                 style={{ ...chip.style, background: "rgba(255,255,255,0.09)", backdropFilter: "blur(20px)", WebkitBackdropFilter: "blur(20px)", border: "1px solid rgba(255,255,255,0.18)", boxShadow: "0 1px 0 rgba(255,255,255,0.15) inset", animationDelay: chip.delay }}
                 data-depth={chip.depth}>
              {chip.text}
            </div>
          ))}
        </div>

        {/* Company logos — bottom right, desktop only */}
        <div className="hidden md:flex absolute bottom-[8%] right-14 z-10 items-center gap-5">
          {[
            { src: "/logos/tiktok-logo.svg", alt: "TikTok" },
            { src: "/logos/mercadolibre-logo.svg", alt: "Mercado Libre" },
            { src: "/logos/didi-logo.png", alt: "DiDi" },
            { src: "/logos/unilever.svg", alt: "Unilever" },
            { src: "/logos/crehana-logo.svg", alt: "Crehana" },
          ].map((logo) => (
            <img key={logo.alt} src={logo.src} alt={logo.alt} draggable="false"
                 style={{ height: "27px", width: "auto", maxWidth: "114px", objectFit: "contain",
                          filter: "brightness(0) invert(1)", opacity: 0.45 }} />
          ))}
        </div>

        {/* Headline */}
        <div className="absolute bottom-[8%] left-6 md:left-14 right-6 md:right-auto z-10" style={{ maxWidth: "54ch" }}>
          <h1 className="kinetic font-display font-bold text-white"
              style={{ fontSize: "clamp(1.65rem,2.5vw,2.9rem)", lineHeight: 1.08, letterSpacing: "-0.025em" }}>
            {t.heroHeadline}
          </h1>
          <p className="kinetic mt-4 font-sans text-white/55 leading-relaxed"
             style={{ fontSize: "clamp(0.92rem,1.1vw,1.05rem)", maxWidth: "50ch" }}>
            {t.heroTagline}
          </p>
          <div className="kinetic mt-7 flex flex-wrap items-center gap-4">
            <a href={CTA}
               className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full font-sans font-semibold text-sm text-black bg-white hover:bg-white/90 transition-colors">
              {t.heroCta}
            </a>
            <span className="text-white/35 text-sm font-sans">{t.heroSubtitle}</span>
          </div>
        </div>
      </section>

      {/* ══ 6. CASE STUDIES ═════════════════════════════════════════════ */}
      <section id="cases" className="pt-16 md:pt-24 pb-10 overflow-hidden relative" style={{ background: "#000", borderTop: BORDER }}>
        {/* ambient background video */}
        <video autoPlay loop muted playsInline
               className="absolute inset-0 w-full h-full object-cover opacity-20 pointer-events-none"
               style={{ zIndex: 0 }}>
          <source src="/didi.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 pointer-events-none" style={{ background: "linear-gradient(to bottom, rgba(0,0,0,0.55) 0%, rgba(0,0,0,0.3) 50%, rgba(0,0,0,0.6) 100%)", zIndex: 1 }} />
        <div className="reveal max-w-7xl mx-auto px-6 md:px-10 mb-14 relative" style={{ zIndex: 2 }}>
          <p className="font-mono text-[10px] uppercase tracking-[0.28em] text-white/40 mb-5">{t.casesLabel}</p>
          <h2 className="font-display font-bold text-white leading-[0.9] tracking-[-0.03em]"
              style={{ fontSize: "clamp(3rem,7vw,8rem)" }}>
            {t.casesTitle}
          </h2>
        </div>
        <div id="carousel" className="flex gap-4 overflow-x-auto px-6 md:px-10 pb-6 select-none relative" style={{ zIndex: 2 }}>
          {cards.map((c) => (
            <article key={c.name} className="snap-item pcard ar45 shrink-0 w-[clamp(250px,78vw,340px)] rounded-2xl overflow-hidden relative"
                     style={{ border: BORDER }}>
              <div className="absolute inset-0 media-fallback" />
              <img src={c.img} alt={c.name} loading="lazy" draggable="false"
                   onError={(e) => (e.currentTarget.style.display = "none")}
                   className={`pcard-media absolute inset-0 w-full h-full object-cover ${c.obj}`} />
              <div className="absolute inset-0 bg-gradient-to-t from-black/88 via-black/10 to-transparent" />
              <div className="absolute bottom-5 left-5 right-5">
                <span className="font-mono text-[9px] uppercase tracking-[0.18em]" style={{ color: "#10B981" }}>{c.tag}</span>
                <h3 className="font-display font-semibold text-white mt-2"
                    style={{ fontSize: "clamp(1rem,1.7vw,1.25rem)", lineHeight: 1.15, letterSpacing: "-0.02em" }}>
                  {c.name}
                </h3>
                <p className="font-sans text-white/50 mt-1.5 leading-relaxed" style={{ fontSize: "clamp(0.75rem,0.85vw,0.82rem)" }}>
                  {c.text}
                </p>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* ══ 2. ABOUT ════════════════════════════════════════════════════ */}
      <section className="py-16 md:py-24 px-6 md:px-10" style={{ background: "#000", borderTop: BORDER }}>
        <div className="max-w-7xl mx-auto grid md:grid-cols-[1.1fr_1fr] gap-10 md:gap-16 items-start">
          <div className="reveal">
            <p className="font-mono text-[10px] uppercase tracking-[0.28em] text-white/40 mb-5">{t.aboutLabel}</p>
            <h2 className="font-display font-bold text-white leading-[0.95] tracking-[-0.03em]"
                style={{ fontSize: "clamp(2.2rem,4.2vw,3.6rem)" }}>
              {t.aboutTitle}
            </h2>
          </div>
          <div>
            <p className="reveal font-sans text-white/50 leading-relaxed"
               style={{ fontSize: "clamp(0.95rem,1.15vw,1.05rem)" }}>
              {t.aboutBody}
            </p>
            <div className="reveal mt-10">
              <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-white/30 mb-4">{t.aboutEduLabel}</p>
              <div className="flex flex-wrap items-center gap-6">
                {[
                  { src: "/logos/mit-icon.png", alt: "MIT" },
                  { src: "/logos/mit-sloan-logo.svg", alt: "MIT Sloan" },
                  { src: "/logos/mit-medialab-logo.svg", alt: "MIT Media Lab" },
                ].map((logo) => (
                  <img key={logo.alt} src={logo.src} alt={logo.alt} draggable="false"
                       style={{ height: "24px", width: "auto", maxWidth: "120px", objectFit: "contain",
                                filter: "brightness(0) invert(1)", opacity: 0.5 }} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══ 4. SERVICES ═════════════════════════════════════════════════ */}
      <section style={{ background: "#f0ede8" }}>
        <div className="max-w-7xl mx-auto px-6 md:px-10 pt-14 md:pt-20 pb-14">
          <p className="reveal font-mono text-[10px] uppercase tracking-[0.28em] mb-5" style={{ color: "rgba(0,0,0,0.35)" }}>{t.sprintLabel}</p>
          <h2 className="reveal font-display font-bold leading-[0.9] tracking-[-0.03em]"
              style={{ fontSize: "clamp(2.6rem,6vw,7rem)", color: "#000" }}>
            {t.sprintTitle}
          </h2>
        </div>
        <div className="grid md:grid-cols-2" style={{ borderTop: "1px solid rgba(0,0,0,0.08)" }}>
          {/* Card 1 — AI Transformation (beige) */}
          <div className="reveal flex flex-col p-10 md:p-14"
               style={{ background: "#f0ede8", borderRight: "1px solid rgba(0,0,0,0.08)", borderBottom: "1px solid rgba(0,0,0,0.08)" }}>
            <p className="font-mono text-[10px] uppercase tracking-[0.2em] mb-6" style={{ color: "rgba(0,0,0,0.35)" }}>{t.s1label}</p>
            <h3 className="font-display font-semibold mb-7" style={{ fontSize: "clamp(1.4rem,1.9vw,1.9rem)", lineHeight: 1.05, letterSpacing: "-0.02em", color: "#000" }}>{t.s1title}</h3>
            <ul className="flex flex-col gap-3 font-sans" style={{ fontSize: "clamp(0.88rem,1.05vw,0.97rem)", color: "rgba(0,0,0,0.55)" }}>
              {t.s1b.map((b) => <li key={b}>{b}</li>)}
            </ul>
          </div>
          {/* Card 2 — LatAm Expansion (dark green) */}
          <div className="reveal flex flex-col p-10 md:p-14"
               style={{ background: "#0d3d28", borderBottom: "1px solid rgba(255,255,255,0.06)" }}>
            <p className="font-mono text-[10px] uppercase tracking-[0.2em] mb-6" style={{ color: "#10B981" }}>{t.s2label}</p>
            <h3 className="font-display font-semibold mb-7 text-white" style={{ fontSize: "clamp(1.4rem,1.9vw,1.9rem)", lineHeight: 1.05, letterSpacing: "-0.02em" }}>{t.s2title}</h3>
            <ul className="flex flex-col gap-3 font-sans" style={{ fontSize: "clamp(0.88rem,1.05vw,0.97rem)", color: "rgba(255,255,255,0.5)" }}>
              {t.s2b.map((b) => <li key={b}>{b}</li>)}
            </ul>
          </div>
          {/* Card 3 — Fractional Head of Growth (bright green) */}
          <div className="reveal flex flex-col p-10 md:p-14" style={{ background: "#10B981", borderRight: "1px solid rgba(0,0,0,0.08)" }}>
            <p className="font-mono text-[10px] uppercase tracking-[0.2em] mb-6" style={{ color: "rgba(0,0,0,0.4)" }}>{t.s3label}</p>
            <h3 className="font-display font-semibold mb-7" style={{ fontSize: "clamp(1.4rem,1.9vw,1.9rem)", lineHeight: 1.05, letterSpacing: "-0.02em", color: "#000" }}>{t.s3title}</h3>
            <ul className="flex flex-col gap-3 font-sans" style={{ fontSize: "clamp(0.88rem,1.05vw,0.97rem)", color: "rgba(0,0,0,0.6)" }}>
              {t.s3b.map((b) => <li key={b}>{b}</li>)}
            </ul>
          </div>
          {/* Card 4 — Advisory (black) */}
          <div className="reveal flex flex-col p-10 md:p-14" style={{ background: "#000" }}>
            <p className="font-mono text-[10px] uppercase tracking-[0.2em] mb-6" style={{ color: "rgba(255,255,255,0.35)" }}>{t.s4label}</p>
            <h3 className="font-display font-semibold mb-7 text-white" style={{ fontSize: "clamp(1.4rem,1.9vw,1.9rem)", lineHeight: 1.05, letterSpacing: "-0.02em" }}>{t.s4title}</h3>
            <ul className="flex flex-col gap-3 font-sans" style={{ fontSize: "clamp(0.88rem,1.05vw,0.97rem)", color: "rgba(255,255,255,0.4)" }}>
              {t.s4b.map((b) => <li key={b}>{b}</li>)}
            </ul>
          </div>
        </div>
      </section>

      {/* ══ 5. METRICS ══════════════════════════════════════════════════ */}
      <section className="py-16 md:py-24 px-6 md:px-10" style={{ background: "#000", borderTop: BORDER }}>
        <div className="max-w-7xl mx-auto">
          <p className="reveal font-mono text-[10px] uppercase tracking-[0.28em] text-white/40 mb-16">{t.metricsLabel}</p>
          <div className="grid grid-cols-2 md:grid-cols-4" style={{ borderTop: BORDER }}>
            {t.metrics.map((s, i) => (
              <div key={s.label}
                   className={`reveal pt-10 pb-6 ${i < 3 ? "md:pr-10 md:border-r" : ""} ${i > 0 ? "md:pl-10 border-t md:border-t-0" : ""}`}
                   style={{ borderColor: "rgba(255,255,255,0.07)" }}>
                <div className="font-display font-bold text-white"
                     style={{ fontSize: "clamp(3rem,5.5vw,6rem)", lineHeight: 0.88, letterSpacing: "-0.04em" }}>
                  {s.n}
                </div>
                <div className="font-sans font-medium text-white/50 mt-4 text-sm">{s.label}</div>
                <div className="font-mono uppercase text-white/40 mt-1" style={{ fontSize: "0.65rem", letterSpacing: "0.12em" }}>{s.sub}</div>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* ══ 8. FAQ ══════════════════════════════════════════════════════ */}
      <section className="py-16 md:py-24 px-6 md:px-10" style={{ background: "#000", borderTop: BORDER }}>
        <div className="max-w-7xl mx-auto">
          <div className="reveal mb-20">
            <p className="font-mono text-[10px] uppercase tracking-[0.28em] text-white/40 mb-5">{t.faqLabel}</p>
            <h2 className="font-display font-bold text-white leading-[0.9] tracking-[-0.03em]"
                style={{ fontSize: "clamp(3rem,7vw,8rem)" }}>
              {t.faqTitle}
            </h2>
          </div>
          {faq.map((item) => (
            <div key={item.q} className="reveal py-10 grid md:grid-cols-[1fr_1.5fr] gap-8 md:gap-16 items-start"
                 style={{ borderTop: BORDER }}>
              <div className="font-display font-semibold text-white"
                   style={{ fontSize: "clamp(1rem,1.5vw,1.2rem)", lineHeight: 1.3, letterSpacing: "-0.01em" }}>
                {item.q}
              </div>
              <p className="font-sans text-white/35 leading-relaxed" style={{ fontSize: "clamp(0.9rem,1.1vw,1rem)" }}>
                {item.a}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ══ 9. CTA ══════════════════════════════════════════════════════ */}
      <section className="py-16 md:py-24 px-6 md:px-10" style={{ background: "#10B981" }}>
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:items-end md:justify-between gap-12">
          <div>
            <p className="font-mono text-[10px] uppercase tracking-[0.28em] text-black/40 mb-5">{t.ctaLabel}</p>
            <h2 className="font-display font-bold text-black leading-[0.88] tracking-[-0.03em]"
                style={{ fontSize: "clamp(3rem,7vw,8rem)" }}>
              {t.ctaTitle}
            </h2>
            <p className="mt-6 font-sans text-black/50 leading-relaxed"
               style={{ fontSize: "clamp(0.95rem,1.2vw,1.05rem)", maxWidth: "34ch" }}>
              {t.ctaDesc}
            </p>
          </div>
          <div className="flex flex-col sm:flex-row md:flex-col gap-3 shrink-0">
            <a href={CTA}
               className="inline-flex items-center justify-center px-8 py-4 rounded-full font-sans font-semibold text-sm hover:opacity-90 transition-opacity"
               style={{ background: "#000", color: "#10B981" }}>
              {t.ctaCta}
            </a>
            <a href="https://wa.me/16173667447" target="_blank" rel="noreferrer"
               className="inline-flex items-center justify-center px-8 py-4 rounded-full font-sans font-semibold text-sm text-black transition-colors"
               style={{ border: "1px solid rgba(0,0,0,0.2)" }}>
              WhatsApp
            </a>
            <a href={EMAIL}
               className="inline-flex items-center justify-center px-8 py-4 rounded-full font-sans font-semibold text-sm text-black transition-colors"
               style={{ border: "1px solid rgba(0,0,0,0.2)" }}>
              Email
            </a>
          </div>
        </div>
      </section>

      {/* ══ 10. FOOTER ══════════════════════════════════════════════════ */}
      <section className="px-6 md:px-10" style={{ background: "#000", borderTop: BORDER }}>
        <footer className="max-w-7xl mx-auto py-10 flex flex-col md:flex-row justify-between items-center gap-6">
          <span className="font-sans text-white/40 text-xs tracking-wide">{t.footerCopy}</span>
          <div className="flex items-center gap-3">
            <a href={EMAIL}
               className="flex items-center gap-2 rounded-full px-5 py-2.5 font-sans text-sm font-medium text-white/35 hover:text-white/60 transition-colors"
               style={{ border: BORDER }}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-3.5 h-3.5"><path d="M4 4h16v16H4z" opacity="0"/><path d="M3 6l9 7 9-7M3 6v12h18V6H3z"/></svg>
              Email
            </a>
            <a href="https://wa.me/16173667447" target="_blank" rel="noreferrer"
               className="flex items-center gap-2 rounded-full px-5 py-2.5 font-sans text-sm font-medium text-white/35 hover:text-white/60 transition-colors"
               style={{ border: BORDER }}>
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-3.5 h-3.5"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
              WhatsApp
            </a>
            <a href="https://www.linkedin.com/in/julianaraoz" target="_blank" rel="noreferrer"
               className="flex items-center gap-2 rounded-full px-5 py-2.5 font-sans text-sm font-medium text-white/35 hover:text-white/60 transition-colors"
               style={{ border: BORDER }}>
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-3.5 h-3.5"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
              LinkedIn
            </a>
          </div>
        </footer>
      </section>

    </main>
  )
}
