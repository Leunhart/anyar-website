"use client";
import logoanyar from "@/public/logoanyar.png";
import Image from "next/image";
import { useState } from "react";
import { motion } from "framer-motion";
import {
  Sparkles,
  Star,
  CalendarDays,
  Briefcase,
  Music,
  Sparkle,
  HandCoins,
  CheckCircle2,
  PhoneCall,
  Mail,
  MapPin,
  ChevronRight,
  Instagram,
  Facebook,
} from "lucide-react";

type PortfolioCategory = "All" | "Corporate" | "Weddings" | "Music" | "Brand Activation";

type PortfolioItem = {
  src: string;
  label: string;
  badge: Exclude<PortfolioCategory, "All">;
};

const PORTFOLIO_ITEMS: PortfolioItem[] = [
  {
    src: "https://images.unsplash.com/photo-1545239351-1141bd82e8a6?auto=format&fit=crop&w=1000&q=80",
    label: "Corporate Summit",
    badge: "Corporate",
  },
  {
    src: "https://images.unsplash.com/photo-1522673607200-164d1b6ce486?auto=format&fit=crop&w=900&q=80",
    label: "Modern Wedding Reception",
    badge: "Weddings",
  },
  {
    src: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=900&q=80",
    label: "Outdoor Music Night",
    badge: "Music",
  },
  {
    src: "https://images.unsplash.com/photo-1531058020387-3be344556be6?auto=format&fit=crop&w=900&q=80",
    label: "Brand Pop-up Booth",
    badge: "Brand Activation",
  },
  {
    src: "https://images.unsplash.com/photo-1513151233558-d860c5398176?auto=format&fit=crop&w=900&q=80",
    label: "Product Launch Stage",
    badge: "Corporate",
  },
  {
    src: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&w=900&q=80",
    label: "Premium Gala Dinner",
    badge: "Corporate",
  },
];

const fadeInUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

const sectionTitleVariants = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0 },
};

const scrollToSection = (id: string) => {
  if (typeof document === "undefined") return;
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
};

export default function Home() {
  const [activeCategory, setActiveCategory] = useState<PortfolioCategory>("All");

  return (
    <div className="min-h-screen bg-[#f2efe6] text-slate-900">
      {/* NAVBAR */}
      <header className="sticky top-0 z-40 border-b border-slate-200 bg-[#f2efe6] backdrop-blur-xl">
        <nav className="section-padding">
          <div className="max-width flex h-16 items-center justify-between gap-4">
            <div
              className="flex cursor-pointer items-center gap-3"
              onClick={() => scrollToSection("home")}
            >
        <Image
                src="/logoanyar.png"
                alt="ANYAR Event Organizer logo"  
                width={140}
                height={40}
                className="h-15 w-auto"
          priority
        />
            </div>

            <div className="hidden items-center gap-8 text-sm font-medium text-slate-600 md:flex">
              {[
                { id: "home", label: "Home" },
                { id: "services", label: "Services" },
                { id: "portfolio", label: "Portfolio" },
                { id: "testimonials", label: "Testimonials" },
                { id: "contact", label: "Contact" },
              ].map((link) => (
                <button
                  key={link.id}
                  onClick={() => scrollToSection(link.id)}
                  className="relative pb-1 transition-colors hover:text-anyar-gold"
                >
                  {link.label}
                  <span className="absolute inset-x-0 -bottom-0.5 h-px origin-left scale-x-0 bg-gradient-to-r from-anyar-gold/0 via-anyar-gold to-anyar-gold/0 transition-transform group-hover:scale-x-100" />
                </button>
              ))}
            </div>

            <a
              href="https://wa.me/082120113136"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-anyar-gold px-4 py-2 text-sm font-semibold text-slate-950 shadow-[0_0_30px_rgba(250,204,21,0.35)] transition hover:bg-anyar-gold-soft focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-anyar-gold-soft focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950"
            >
              Book Now
              <ChevronRight className="h-4 w-4" />
            </a>
          </div>
        </nav>
      </header>

      <main id="home" className="space-y-24 pb-24 pt-10 sm:space-y-32 sm:pt-16">
        {/* HERO */}
        <section className="section-padding">
          <div className="max-width grid gap-12 md:grid-cols-[minmax(0,1.25fr)_minmax(0,1fr)] md:items-center">
            <div className="space-y-8">
              <motion.div
              className="inline-flex items-center gap-2 rounded-full border border-anyar-gold/40 bg-anyar-gold-muted px-3 py-1 text-xs text-anyar-gold"
                initial={{ opacity: 0, y: -8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.1 }}
              >
                <Star className="h-3.5 w-3.5" />
                <span className="uppercase tracking-[0.28em] text-[10px]">
                  Fresh. Energetic. Memorable.
                </span>
              </motion.div>

              <motion.h1
                variants={fadeInUp}
                initial="hidden"
                animate="visible"
                transition={{ duration: 0.6, delay: 0.15 }}
                className="text-balance text-3xl font-semibold leading-tight text-slate-900 sm:text-4xl lg:text-5xl"
              >
                Acara baru, peluang baru,{" "}
                <span className="text-anyar-gold relative inline-block">
                  <span className="relative z-10">keberuntungan baru</span>
                  <span className="pointer-events-none absolute inset-x-0 bottom-0 z-0 h-2 rounded-full bg-anyar-gold-muted" />
                </span>{" "}
                bersama Anyar.
              </motion.h1>

              <motion.p
                variants={fadeInUp}
                initial="hidden"
                animate="visible"
                transition={{ duration: 0.6, delay: 0.22 }}
                className="max-w-xl text-base text-slate-700 sm:text-lg"
              >
                Event organizer profesional untuk corporate &amp; social events.
                Dari konsep hingga eksekusi, tim ANYAR memastikan setiap momen
                terasa segar, terencana, dan penuh peluang baru bagi brand dan
                tamu Anda.
              </motion.p>

              <motion.div
                variants={fadeInUp}
                initial="hidden"
                animate="visible"
                transition={{ duration: 0.6, delay: 0.3 }}
                className="flex flex-wrap items-center gap-4"
              >
                <button
                  onClick={() => scrollToSection("contact")}
                  className="inline-flex items-center gap-2 rounded-full bg-anyar-gold px-6 py-3 text-sm font-semibold text-slate-950 shadow-[0_0_40px_rgba(250,204,21,0.4)] transition hover:-translate-y-0.5 hover:bg-anyar-gold-soft focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-anyar-gold-soft focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950"
                >
                  Start Your Event
                  <Sparkle className="h-4 w-4" />
                </button>
                <button
                  onClick={() => scrollToSection("portfolio")}
                  className="inline-flex items-center gap-2 rounded-full border border-slate-700/70 bg-slate-900/60 px-5 py-3 text-sm font-medium text-slate-100 transition hover:-translate-y-0.5 hover:border-anyar-gold/70 hover:text-anyar-gold focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-700 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950"
                >
                  View Portfolio
                  <ChevronRight className="h-4 w-4" />
                </button>
              </motion.div>

              <motion.div
                variants={fadeInUp}
                initial="hidden"
                animate="visible"
                transition={{ duration: 0.6, delay: 0.4 }}
                className="mt-4 grid gap-4 text-xs text-slate-600 sm:grid-cols-3"
              >
                <div className="flex items-start gap-3">
                  <div className="mt-0.5 rounded-full bg-anyar-gold-muted p-1.5 text-anyar-gold">
                    <CalendarDays className="h-3.5 w-3.5" />
                  </div>
                  <div>
                    <p className="font-semibold text-slate-500">
                      Corporate &amp; Social
                    </p>
                    <p className="text-[11px] leading-relaxed text-slate-400">
                      Dari launching brand hingga private celebration.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="mt-0.5 rounded-full bg-anyar-gold-muted p-1.5 text-anyar-gold">
                    <HandCoins className="h-3.5 w-3.5" />
                  </div>
                  <div>
                    <p className="font-semibold text-slate-500">
                      Transparan &amp; efisien
                    </p>
                    <p className="text-[11px] leading-relaxed text-slate-400">
                      Budget di-manage dengan jelas, tanpa kejutan di akhir.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="mt-0.5 rounded-full bg-anyar-gold-muted p-1.5 text-anyar-gold">
                    <CheckCircle2 className="h-3.5 w-3.5" />
                  </div>
                  <div>
                    <p className="font-semibold text-slate-500">
                      One-stop solution
                    </p>
                    <p className="text-[11px] leading-relaxed text-slate-400">
                      Venue, vendor, rundown, dan tim on-ground dalam satu
                      koordinasi.
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.25 }}
              className="relative"
            >
              <div className="pointer-events-none absolute -left-8 -top-8 h-32 w-32 rounded-full bg-anyar-gold-muted blur-3xl" />
              <div className="pointer-events-none absolute bottom-4 right-0 h-40 w-40 rounded-full bg-indigo-500/20 blur-3xl" />

              <div className="relative overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-xl">
                <div className="relative p-4 sm:p-6">
                  <div className="flex items-center justify-between gap-4">
                    <div>
                      <p className="text-xs uppercase tracking-[0.18em] text-slate-500">
                        Upcoming highlight
                      </p>
                      <p className="mt-1 text-sm font-semibold text-slate-50">
                        ANYAR Corporate Summit
                      </p>
                      <p className="mt-0.5 text-xs text-slate-500">
                        Jakarta • Q4 2025
                      </p>
                    </div>
                    <div className="rounded-2xl bg-slate-100 px-3 py-2 text-right">
                      <p className="text-[11px] text-slate-500">
                        Events Managed
                      </p>
                      <p className="text-lg font-semibold text-anyar-gold">
                        50+
                      </p>
                    </div>
                  </div>

                  <div className="mt-4 overflow-hidden rounded-2xl border border-slate-200 bg-slate-100">
                    <div className="relative h-40 w-full sm:h-52">
                      <Image
                        src="https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=1200&q=80"
                        alt="Event highlight"
                        fill
                        className="object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/5 to-transparent" />
                      <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-xs text-slate-50">
                        <span className="inline-flex items-center gap-1 rounded-full bg-black/70 px-3 py-1">
                          <Briefcase className="h-3.5 w-3.5" />
                          Corporate Launch
                        </span>
                        <span className="rounded-full bg-anyar-gold-soft/95 px-2.5 py-1 text-[11px] font-semibold text-slate-950">
                          300+ guests
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="mt-4 grid gap-3 text-xs text-slate-600 sm:grid-cols-2">
                    <div className="flex items-center gap-3 rounded-2xl bg-slate-50 px-3 py-2">
                      <div className="rounded-full bg-anyar-gold-muted p-1.5">
                        <CalendarDays className="h-3.5 w-3.5 text-anyar-gold" />
                      </div>
                      <div>
                        <p className="text-[11px] text-slate-500">
                          Rata-rata lead time
                        </p>
                        <p className="text-sm font-medium text-slate-900">
                          30 hari sebelum acara
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3 rounded-2xl bg-slate-50 px-3 py-2">
                      <div className="rounded-full bg-anyar-gold-muted p-1.5">
                        <HandCoins className="h-3.5 w-3.5 text-anyar-gold" />
                      </div>
                      <div>
                        <p className="text-[11px] text-slate-500">
                          ROI Activation
                        </p>
                        <p className="text-sm font-medium text-slate-900">
                          +40% engagement brand
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* ABOUT / WHY ANYAR */}
        <section id="about" className="section-padding">
          <div className="max-width space-y-10">
            <motion.div
              variants={sectionTitleVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.5 }}
              className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between"
            >
              <div>
                <p className="text-xs uppercase tracking-[0.26em] text-anyar-gold">
                  Why Choose Anyar?
                </p>
                <h2 className="mt-1 text-2xl font-semibold text-slate-900 sm:text-3xl">
                  Lebih dari sekadar event,{" "}
                  <span className="text-anyar-gold-soft">
                    kami ciptakan momentum.
                  </span>
                </h2>
              </div>
              <p className="max-w-md text-xs text-slate-600 sm:text-sm">
                ANYAR hadir dengan ide-ide segar yang relevan dengan brand Anda
                dan pengalaman tamu. Tim kami menggabungkan kreativitas,
                struktur, dan ketelitian agar setiap detail terasa menyatu.
              </p>
            </motion.div>

            <div className="grid gap-4 sm:grid-cols-3">
              {[
                {
                  icon: Sparkles,
                  title: "Creative Concepts",
                  desc: "Konsep acara yang fresh, instagramable, dan on-brand tanpa mengorbankan tujuan bisnis.",
                },
                {
                  icon: CheckCircle2,
                  title: "Flawless Execution",
                  desc: "Rundown rapi, koordinasi vendor terjaga, dan tim lapangan yang responsif.",
                },
                {
                  icon: HandCoins,
                  title: "Budget Management",
                  desc: "Rekomendasi paket yang realistis, transparan, dan optimal untuk ROI acara Anda.",
                },
              ].map((item, idx) => (
                <motion.div
                  key={item.title}
                  variants={fadeInUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.4 }}
                  transition={{ duration: 0.45, delay: idx * 0.08 }}
                  className="glass-card flex flex-col gap-3 rounded-2xl p-4"
                >
                  <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-anyar-gold-muted text-anyar-gold">
                    <item.icon className="h-5 w-5" />
                  </div>
                  <h3 className="text-sm font-semibold text-slate-900">
                    {item.title}
                  </h3>
                  <p className="text-xs leading-relaxed text-slate-600">
                    {item.desc}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* SERVICES */}
        <section id="services" className="section-padding">
          <div className="max-width space-y-8">
            <motion.div
              variants={sectionTitleVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.5 }}
              className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between"
            >
              <div>
                <p className="text-xs uppercase tracking-[0.26em] text-anyar-gold">
                  Services
                </p>
                <h2 className="mt-1 text-2xl font-semibold text-slate-900 sm:text-3xl">
                  Layanan yang kami tangani dari A sampai Z.
                </h2>
              </div>
              <p className="max-w-md text-xs text-slate-600 sm:text-sm">
                Pilih format acara yang paling sesuai dengan tujuan brand
                Anda—ANYAR akan merancang alur, experience, sampai momen kecil
                yang meninggalkan kesan.
              </p>
            </motion.div>

            <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
              {[
                {
                  icon: Briefcase,
                  title: "Corporate Events",
                  desc: "Townhall, conference, gala dinner, hingga appreciation night.",
                },
                {
                  icon: CalendarDays,
                  title: "Weddings",
                  desc: "Intimate maupun grande, dengan sentuhan modern & personal.",
                },
                {
                  icon: Music,
                  title: "Music Festivals",
                  desc: "Stage, line-up, dan experience yang immersif dan berkesan.",
                },
                {
                  icon: Sparkles,
                  title: "Brand Activations",
                  desc: "Pop-up, roadshow, dan experiential marketing untuk awareness.",
                },
              ].map((service, idx) => (
                <motion.div
                  key={service.title}
                  variants={fadeInUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.4 }}
                  transition={{ duration: 0.45, delay: idx * 0.08 }}
                  className="group relative flex flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white p-4 shadow-sm transition-transform hover:-translate-y-1 hover:shadow-md"
                >
                  <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    <div className="absolute inset-x-0 top-0 h-20 bg-gradient-to-b from-anyar-gold-muted/60 to-transparent" />
                  </div>
                  <div className="relative">
                    <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-anyar-gold-muted text-anyar-gold group-hover:bg-anyar-gold-soft/80">
                      <service.icon className="h-5 w-5" />
                    </div>
                    <h3 className="mt-4 text-sm font-semibold text-slate-900">
                      {service.title}
                    </h3>
                    <p className="mt-2 text-xs leading-relaxed text-slate-600">
                      {service.desc}
                    </p>
                    <p className="mt-4 inline-flex items-center text-[11px] font-medium text-anyar-gold-soft">
                      Lihat detail paket
                      <ChevronRight className="ml-1 h-3 w-3" />
          </p>
        </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* PORTFOLIO */}
        <section id="portfolio" className="section-padding">
          <div className="max-width space-y-8">
            <motion.div
              variants={sectionTitleVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.5 }}
              className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between"
            >
              <div>
                <p className="text-xs uppercase tracking-[0.26em] text-anyar-gold">
                  Portfolio
                </p>
                <h2 className="mt-1 text-2xl font-semibold text-slate-900 sm:text-3xl">
                  Cuplikan acara yang sudah kami kelola.
                </h2>
              </div>
              <p className="max-w-md text-xs text-slate-600 sm:text-sm">
                Berikut beberapa dokumentasi dari acara yang pernah kami
                tangani. Semua gambar bersifat ilustratif dan dapat diganti
                dengan foto resmi ANYAR.
              </p>
            </motion.div>

            <div className="flex flex-wrap gap-2 text-xs">
              {(["All", "Corporate", "Weddings", "Music", "Brand Activation"] as PortfolioCategory[]).map(
                (tab) => {
                  const isActive = tab === activeCategory;
                  return (
                    <button
                      key={tab}
                      type="button"
                      onClick={() => setActiveCategory(tab)}
                      aria-pressed={isActive}
                      className={`rounded-full border px-3 py-1 transition ${
                        isActive
                          ? "border-anyar-gold/80 bg-anyar-gold-muted text-anyar-gold shadow-[0_0_24px_rgba(250,204,21,0.28)]"
                          : "border-slate-700/70 bg-slate-900/60 text-slate-300 hover:border-anyar-gold/60 hover:text-anyar-gold"
                      }`}
                    >
                      {tab}
                    </button>
                  );
                },
              )}
            </div>

            <div className="grid gap-4 md:grid-cols-3">
              {(activeCategory === "All"
                ? PORTFOLIO_ITEMS
                : PORTFOLIO_ITEMS.filter((item) => item.badge === activeCategory)
              ).map((item, idx) => (
                <motion.div
                  key={item.label}
                  variants={fadeInUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.4 }}
                  transition={{ duration: 0.45, delay: (idx % 3) * 0.08 }}
                  className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm"
                >
                  <div className="relative w-full overflow-hidden rounded-b-2xl bg-slate-900/80 aspect-[16/9]">
            <Image
                      src={item.src}
                      alt={item.label}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/10 to-transparent" />
                  </div>
                  <div className="absolute inset-x-0 bottom-0 p-3 sm:p-4">
                    <div className="flex items-center justify-between gap-2">
                      <div>
                        <p className="text-xs font-semibold text-slate-50 sm:text-sm">
                          {item.label}
                        </p>
                        <p className="mt-0.5 text-[11px] text-slate-300">
                          Managed by ANYAR
                        </p>
                      </div>
                      <span className="rounded-full bg-black/70 px-2.5 py-1 text-[11px] font-medium text-anyar-gold">
                        {item.badge}
                      </span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* STATS / TRUST + TESTIMONIALS */}
        <section id="testimonials" className="section-padding">
          <div className="max-width grid gap-8 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,1.1fr)]">
            <div className="space-y-6">
              <motion.div
                variants={sectionTitleVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.5 }}
              >
                <p className="text-xs uppercase tracking-[0.26em] text-anyar-gold">
                  Numbers &amp; Trust
                </p>
                <h2 className="mt-1 text-2xl font-semibold text-slate-900 sm:text-3xl">
                  Angka yang mendukung kepercayaan klien.
                </h2>
              </motion.div>

              <div className="grid gap-4 sm:grid-cols-3">
                {[
                  {
                    label: "Events Managed",
                    value: "Soon",
                    desc: "Dalam berbagai format dan skala acara.",
                  },
                  {
                    label: "Client Satisfaction",
                    value: "Soon",
                    desc: "Feedback positif & repeat clients.",
                  },
                  {
                    label: "Average NPS",
                    value: "Soon",
                    desc: "Rata-rata skor kepuasan tamu & klien.",
                  },
                ].map((stat, idx) => (
                  <motion.div
                    key={stat.label}
                    variants={fadeInUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.4 }}
                    transition={{ duration: 0.45, delay: idx * 0.08 }}
                    className="glass-card rounded-2xl p-4 text-xs"
                  >
                    <p className="text-[11px] uppercase tracking-[0.18em] text-slate-500">
                      {stat.label}
                    </p>
                    <p className="mt-2 text-xl font-semibold text-anyar-gold-soft">
                      {stat.value}
                    </p>
                    <p className="mt-1 text-[11px] leading-relaxed text-slate-600">
                      {stat.desc}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="space-y-4">
              <motion.div
                variants={sectionTitleVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.5 }}
              >
                <p className="text-xs uppercase tracking-[0.26em] text-anyar-gold">
                  Our Promise
                </p>
                <h3 className="mt-1 text-lg font-semibold text-slate-900">
                  Apa Yang Anyar Bisa Tonjolkan.
                </h3>
              </motion.div>

              <div className="grid gap-4 md:grid-cols-2">
                {[
                  {
                    quote:
                      "Kami menghadirkan konsep acara yang segar, kreatif, dan sesuai dengan identitas brand Anda. Setiap detail dirancang untuk menciptakan pengalaman yang tak terlupakan.",
                    name: "Kreativitas Tanpa Batas",
                    role: "Inovasi dalam Setiap Acara",
                  },
                  {
                    quote:
                      "Dengan tim profesional dan vendor terpercaya, kami memastikan setiap acara berjalan lancar, tepat waktu, dan sesuai dengan harapan Anda.",
                    name: "Eksekusi yang Sempurna",
                    role: "Keandalan dan Presisi",
                  },
                ].map((item, idx) => (
                  <motion.figure
                    key={item.name}
                    variants={fadeInUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.4 }}
                    transition={{ duration: 0.45, delay: idx * 0.08 }}
                    className="glass-card flex h-full flex-col justify-between rounded-2xl p-4 text-xs"
                  >
                    <p className="text-[11px] leading-relaxed text-slate-700">
                      "{item.quote}"
                    </p>
                    <figcaption className="mt-4 border-t border-slate-200 pt-3 text-[11px] text-slate-600">
                      <span className="font-semibold text-slate-900">
                        {item.name}
                      </span>
                      <span className="mx-1 text-slate-500">•</span>
                      <span>{item.role}</span>
                    </figcaption>
                  </motion.figure>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* PRICING PACKAGES
        <section id="pricing" className="section-padding pt-0 sm:pt-4 lg:pt-6">
          <div className="max-width space-y-6">
            <motion.div
              variants={sectionTitleVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.5 }}
              className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between"
            >
              <div>
                <p className="text-xs uppercase tracking-[0.26em] text-anyar-gold">
                  Packages
                </p>
                <h2 className="mt-1 text-2xl font-semibold text-slate-900 sm:text-3xl">
                  Paket harga untuk berbagai jenis acara.
                </h2>
              </div>
              <p className="max-w-md text-xs text-slate-600 sm:text-sm">
                Paket ini sebagai gambaran awal kisaran investasi acara Anda.
                Detail final tetap akan menyesuaikan kebutuhan, jumlah tamu, dan
                pilihan vendor. Semua harga bersifat starting from.
              </p>
            </motion.div>

            <div className="grid gap-4 md:grid-cols-3">
              {[
                {
                  name: "Intimate",
                  highlight: "Untuk acara skala kecil",
                  price: "Rp25–40 jt",
                  idealFor: "Private gathering, engagement, internal meeting.",
                  items: [
                    "Up to ~100 tamu",
                    "Konsep & creative direction dasar",
                    "Basic dekor & ambient sound",
                    "Tim rundown & MC koordinasi",
                  ],
                },
                {
                  name: "Signature",
                  highlight: "Paling sering dipilih",
                  price: "Rp45–80 jt",
                  idealFor: "Corporate gathering, wedding reception, brand event.",
                  featured: true,
                  items: [
                    "100–300 tamu",
                    "Konsep kreatif + theme visual",
                    "Full vendor coordination",
                    "Stage, lighting, & entertainment",
                    "On-site operation team lengkap",
                  ],
                },
                {
                  name: "Momentum",
                  highlight: "Untuk acara berskala besar",
                  price: "Custom",
                  idealFor:
                    "Festival musik, product launch major, multi-day event.",
                  items: [
                    "300+ tamu atau multi hari",
                    "Experience design menyeluruh",
                    "Manajemen sponsorship & media",
                    "Extended crew & talent management",
                  ],
                },
              ].map((pkg, idx) => (
                <motion.div
                  key={pkg.name}
                  variants={fadeInUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.4 }}
                  transition={{ duration: 0.45, delay: idx * 0.08 }}
                  className={`flex flex-col rounded-2xl border ${
                    pkg.featured
                      ? "border-anyar-gold/70 bg-white shadow-md shadow-anyar-gold/10"
                      : "border-slate-200 bg-white shadow-sm"
                  } p-5`}
                >
                  <div className="flex items-start justify-between gap-2">
                    <div>
                      <h3 className="text-sm font-semibold tracking-wide text-slate-900">
                        {pkg.name}
                      </h3>
                      <p className="mt-1 text-[11px] font-medium uppercase tracking-[0.16em] text-anyar-gold">
                        {pkg.highlight}
                      </p>
                    </div>
                    {pkg.featured && (
                      <span className="rounded-full bg-anyar-gold-soft/90 px-2 py-1 text-[10px] font-semibold text-slate-950">
                        Recommended
                      </span>
                    )}
                  </div>
                  <p className="mt-4 text-lg font-semibold text-slate-900">
                    {pkg.price}
                    <span className="ml-1 text-xs font-normal text-slate-500">
                      (start from)
                    </span>
                  </p>
                  <p className="mt-1 text-[11px] text-slate-600">{pkg.idealFor}</p>
                  <ul className="mt-4 space-y-1.5 text-[11px] text-slate-600">
                    {pkg.items.map((item) => (
                      <li key={item} className="flex items-start gap-1.5">
                        <span className="mt-1 h-1.5 w-1.5 rounded-full bg-anyar-gold" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                  <button
                    type="button"
                    onClick={() => scrollToSection("contact")}
                    className="mt-4 inline-flex items-center justify-center rounded-full border border-slate-300 px-3 py-1.5 text-[11px] font-medium text-slate-800 transition hover:border-anyar-gold/80 hover:text-anyar-gold"
                  >
                    Konsultasi paket ini
                  </button>
                </motion.div>
              ))}
            </div>
          </div>
        </section> */}

        {/* CONTACT / FOOTER */}
        <section
          id="contact"
          className="section-padding pt-4 sm:pt-6 lg:pt-10"
        >
          <div className="max-width grid gap-8 rounded-3xl border border-slate-200 bg-white/85 p-6 shadow-sm lg:grid-cols-[minmax(0,1.3fr)_minmax(0,1fr)] lg:p-8">
            <motion.div
              variants={sectionTitleVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.5 }}
              className="space-y-4"
            >
              <p className="text-xs uppercase tracking-[0.26em] text-anyar-gold">
                Contact
              </p>
              <h2 className="text-2xl font-semibold text-slate-900 sm:text-3xl">
                Siap mulai acara baru bersama ANYAR?
              </h2>
              <p className="max-w-lg text-xs text-slate-600 sm:text-sm">
                Ceritakan sedikit tentang acara yang Anda rencanakan—tanggal
                tentative, jenis acara, dan estimasi jumlah tamu. Tim kami akan
                menghubungi Anda dengan proposal awal dalam 1–2 hari kerja.
              </p>

              <form className="mt-4 space-y-3 text-xs">
                <div className="grid gap-3 sm:grid-cols-2">
                  <div className="space-y-1.5">
                    <label className="block text-[11px] font-medium text-slate-700">
                      Nama Lengkap
                    </label>
                    <input
                      type="text"
                      placeholder="Nama Anda"
                      className="w-full rounded-xl border border-slate-300 bg-slate-50 px-3 py-2 text-xs text-slate-900 outline-none placeholder:text-slate-400 focus:border-anyar-gold/80 focus:bg-white"
                    />
                  </div>
                  <div className="space-y-1.5">
                    <label className="block text-[11px] font-medium text-slate-700">
                      Email / WhatsApp
                    </label>
                    <input
                      type="text"
                      placeholder="email@domain.com / 08xxxxxxxxxx"
                      className="w-full rounded-xl border border-slate-300 bg-slate-50 px-3 py-2 text-xs text-slate-900 outline-none placeholder:text-slate-400 focus:border-anyar-gold/80 focus:bg-white"
                    />
                  </div>
                </div>
                <div className="space-y-1.5">
                  <label className="block text-[11px] font-medium text-slate-700">
                    Jenis Acara
                  </label>
                  <input
                    type="text"
                    placeholder="Corporate gathering, wedding, festival, dll."
                    className="w-full rounded-xl border border-slate-300 bg-slate-50 px-3 py-2 text-xs text-slate-900 outline-none placeholder:text-slate-400 focus:border-anyar-gold/80 focus:bg-white"
                  />
                </div>
                <div className="grid gap-3 sm:grid-cols-2">
                  <div className="space-y-1.5">
                    <label className="block text-[11px] font-medium text-slate-700">
                      Tanggal Tentatif
                    </label>
                    <input
                      type="text"
                      placeholder="Bulan / tanggal perkiraan"
                      className="w-full rounded-xl border border-slate-300 bg-slate-50 px-3 py-2 text-xs text-slate-900 outline-none placeholder:text-slate-400 focus:border-anyar-gold/80 focus:bg-white"
                    />
                  </div>
                  <div className="space-y-1.5">
                    <label className="block text-[11px] font-medium text-slate-700">
                      Estimasi Jumlah Tamu
                    </label>
                    <input
                      type="number"
                      placeholder="Contoh: 150"
                      className="w-full rounded-xl border border-slate-300 bg-slate-50 px-3 py-2 text-xs text-slate-900 outline-none placeholder:text-slate-400 focus:border-anyar-gold/80 focus:bg-white"
                    />
                  </div>
                </div>
                <div className="space-y-1.5">
                  <label className="block text-[11px] font-medium text-slate-700">
                    Ceritakan secara singkat tentang acara Anda
                  </label>
                  <textarea
                    rows={3}
                    placeholder="Contoh: Launching produk baru untuk internal & partner, konsep acara casual dan hangat..."
                    className="w-full rounded-xl border border-slate-300 bg-slate-50 px-3 py-2 text-xs text-slate-900 outline-none placeholder:text-slate-400 focus:border-anyar-gold/80 focus:bg-white"
                  />
                </div>
                <button
                  type="button"
                  className="mt-2 inline-flex items-center gap-2 rounded-full bg-anyar-gold px-6 py-2.5 text-xs font-semibold text-slate-950 shadow-[0_8px_24px_rgba(234,179,8,0.35)] transition hover:-translate-y-0.5 hover:bg-anyar-gold-soft focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-anyar-gold-soft focus-visible:ring-offset-2 focus-visible:ring-offset-white"
                >
                  Kirim Brief Singkat
                  <ChevronRight className="h-3.5 w-3.5" />
                </button>
                <p className="pt-1 text-[10px] text-slate-500">
                  Form ini bersifat placeholder (belum terhubung ke backend).
                  Anda dapat mengintegrasikannya dengan email service atau
                  CRM pilihan Anda.
                </p>
              </form>
            </motion.div>

            <div className="space-y-4 text-xs">
              <div className="glass-card rounded-2xl p-4">
                <h3 className="text-sm font-semibold text-slate-500">
                  Kontak Langsung
                </h3>
                <p className="mt-1 text-[11px] text-slate-400">
                  Gunakan jalur komunikasi favorit Anda untuk berbicara dengan
                  tim ANYAR.
                </p>
                <div className="mt-3 space-y-2">
                  <div className="flex items-center gap-2 text-[11px] text-slate-500">
                    <div className="flex h-7 w-7 items-center justify-center rounded-full bg-slate-800/90 text-anyar-gold">
                      <PhoneCall className="h-3.5 w-3.5" />
                    </div>
                    <div>
                      <p className="font-medium">+62 812-2011-3136</p>
                      <p className="text-[10px] text-slate-400">
                        WhatsApp / Call (placeholder)
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 text-[11px] text-slate-500">
                    <div className="flex h-7 w-7 items-center justify-center rounded-full bg-slate-800/90 text-anyar-gold">
                      <Mail className="h-3.5 w-3.5" />
                    </div>
                    <div>
                      <p className="font-medium">hello@anyar.events</p>
                      <p className="text-[10px] text-slate-400">
                        Email utama (placeholder)
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 text-[11px] text-slate-500">
                    <div className="flex h-7 w-7 items-center justify-center rounded-full bg-slate-800/90 text-anyar-gold">
                      <MapPin className="h-3.5 w-3.5" />
                    </div>
                    <div>
                      <p className="font-medium">Jakarta, Indonesia</p>
                      <p className="text-[10px] text-slate-400">
                        Operasional di area Jabodetabek & sekitarnya.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="glass-card flex flex-col justify-between rounded-2xl p-4">
                <div>
                  <p className="text-[11px] uppercase tracking-[0.2em] text-anyar-gold">
                    ANYAR on Social
                  </p>
                  <p className="mt-1 text-sm font-semibold text-slate-500">
                    Ikuti highlight acara dan behind-the-scenes kami.
                  </p>
                </div>
                <div className="mt-3 flex flex-wrap items-center gap-3 text-[11px]">
                  <button className="inline-flex items-center gap-1.5 rounded-full bg-slate-900/80 px-3 py-1.5 text-slate-100 transition hover:border-anyar-gold hover:text-anyar-gold">
                    <Instagram className="h-3.5 w-3.5" />
                    @anyar.events
                  </button>
                  <button className="inline-flex items-center gap-1.5 rounded-full bg-slate-900/80 px-3 py-1.5 text-slate-100 transition hover:border-anyar-gold hover:text-anyar-gold">
                    <Facebook className="h-3.5 w-3.5" />
                    ANYAR Event Organizer
                  </button>
                </div>
                <p className="mt-3 text-[10px] text-slate-500">
                  Tautan sosial masih berupa placeholder—silakan disesuaikan
                  dengan akun resmi ANYAR.
                </p>
              </div>
            </div>
          </div>

          <footer className="mt-10 border-t border-slate-800/80 pt-4 text-[11px] text-slate-500">
            <div className="max-width flex flex-col items-center justify-between gap-2 sm:flex-row">
              <p>
                © {new Date().getFullYear()} ANYAR Event Organizer. All rights
                reserved.
              </p>
              <p className="text-[10px]">
                Acara baru, peluang baru, keberuntungan baru bersama Anyar.
              </p>
        </div>
          </footer>
        </section>
      </main>
    </div>
  );
}
