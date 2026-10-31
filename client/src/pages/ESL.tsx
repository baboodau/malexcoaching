import { useEffect, useState } from "react";
import { ArrowRight, Check, Clock, Users, Video, ShieldCheck, ChevronDown, Mail } from "lucide-react";
import { CallBenefitsAnimation } from "@/components/CallBenefitsAnimation";
import { ClientResults } from "@/components/ClientResults";
import { ClientWins } from "@/components/ClientWins";
import { VideoTestimonials } from "@/components/VideoTestimonials";
import { Coaches } from "@/components/Coaches";

/**
 * ESL (Entry Sales Letter) - Main Landing Page
 * Layout: anchored nav, hero + stats, problem cards, the method, what you get on the call,
 * booking (Calendly), client results, coaches, case studies, FAQ, final CTA, footer.
 */

const CALENDLY =
  "https://calendly.com/aleksandrharrison0/aleksandr-harrison-1-1-call?hide_event_type_details=1&hide_gdpr_block=1";

const caseStudies: { id: string; title: string }[] = [
  { id: "ksrXCFP4SBk", title: "How our 50-year-old client lost all the fat and increased his confidence by x100 in less than a year" },
  { id: "fuQut2Bjr5s", title: "How our client Lamar got a six-pack in half a year" },
  { id: "dI_c-D81x-A", title: "How our client David went from 20% body fat to 9% and got abs in ONE month under Malex Coaching" },
  { id: "ZkyrMRfuXk4", title: "DOWN 20 LBS IN 30 DAYS — Ryan’s Journey" },
  { id: "7jFHJ7AD_ew", title: "How our client Mark got rid of his chronic joint pain without a doctor at 65 years old" },
  { id: "s5xMQScpPM8", title: "How our client Andrey lost his beer belly and got a defined jaw as a busy working 9-5 man" },
  { id: "9czxkZ8H01w", title: "BUILT MUSCLE AND GOT ABS — Humza Case Study" },
  { id: "c3eYA_Jl8ro", title: "Client loses 19kg" },
  { id: "zYpu4rwTvac", title: "How our client went from skinny to muscular" },
  { id: "ipEZpc9lUWI", title: "Don’t watch this if you don’t want to be skinny anymore" },
  { id: "kBrZj-LJHy8", title: "How to regain your confidence as a skinny guy" },
  { id: "F6k0vK3xxGc", title: "How our client got big biceps and lost fat" },
  { id: "zTcWwRDwdOc", title: "Client Success Story" }
];

const NAV = [
  { href: "#method", label: "The Method" },
  { href: "#call", label: "The Call" },
  { href: "#results", label: "Results" },
  { href: "#coaches", label: "Coaches" },
  { href: "#faq", label: "FAQ" },
];

const STATS = [
  { icon: Users, value: "200+", label: "clients transformed" },
  { icon: Clock, value: "3 hrs", label: "of training per week" },
  { icon: Video, value: "1:1", label: "coaching + weekly check-ins" },
  { icon: ShieldCheck, value: "Signed", label: "results guarantee" },
];

const PROBLEMS = [
  { tag: "Problem 01", title: "No time to live in the gym", body: "Work, family and travel come first. Plans built for people with free time fall apart by week three." },
  { tag: "Problem 02", title: "Diets that fight your life", body: "Strict meal plans that ignore dinners out, business trips and weekends never last." },
  { tag: "Problem 03", title: "No one keeping you on track", body: "Without check-ins and someone adjusting the plan, progress stalls and motivation fades." },
];

const METHOD = [
  { n: "01", title: "Plan", body: "We map your schedule, food and training history, then build your workout and nutrition plan around your real life." },
  { n: "02", title: "Train", body: "3 hours a week in Trainerize, with weekly check-ins, progress photos and 24/7 messaging with your coaches." },
  { n: "03", title: "Keep it", body: "We teach you the habits so you can hold your new physique for life — not just for 12 weeks." },
];

const FAQS: { q: string; a: string; v?: string }[] = [
  { q: "Is the strategy call free?", a: "Yes. It's a free 30-minute call where we look at where you are, what's held you back, and the exact plan to reach your goal." },
  { q: "Do I need gym experience?", a: "No. Your plan is built for your level and your schedule, and every exercise comes with video guidance." },
  { q: "How fast will I see results?", a: "Sash explains realistic timelines for seeing your transformation.", v: "HR6PKD-JDWs" },
  { q: "Will I have time to do the program?", a: "Around 3 hours of training a week, built around your schedule. Sash explains how it fits a busy life.", v: "58MwRglr8Gg" },
  { q: "Will I get personalized support?", a: "How we coach you 1-on-1, with weekly check-ins and direct messaging.", v: "xA0JvOB7nQ0" },
  { q: "What if I don't get the same results as your clients?", a: "Realistic expectations and how we adjust the plan to you.", v: "Sr2tq3RBwl0" },
  { q: "What if I'm not satisfied with the program?", a: "We sign a results agreement with every client. Sash walks through the guarantee.", v: "WRcpxQop12Q" },
  { q: "What if I'm already with another coach?", a: "How switching to Malex works if you already have a coach.", v: "gkP-7sX7KXk" },
  { q: "Will I be able to afford it?", a: "How to think about the investment in your transformation.", v: "iZw0btmKW3Y" },
];

function SectionHead({ eyebrow, title, sub }: { eyebrow: string; title: string; sub?: string }) {
  return (
    <div className="text-center mb-12">
      <p className="text-sm font-semibold uppercase tracking-[0.25em] text-yellow-400 mb-3">{eyebrow}</p>
      <h2 className="text-4xl md:text-5xl font-bold">{title}</h2>
      {sub && <p className="text-gray-400 mt-4 max-w-2xl mx-auto">{sub}</p>}
    </div>
  );
}

function BookButton({ className = "" }: { className?: string }) {
  return (
    <a
      href="#book"
      className={`inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-gradient-to-r from-yellow-300 via-yellow-400 to-amber-500 text-black font-bold shadow-lg shadow-yellow-500/25 hover:shadow-yellow-400/40 hover:brightness-110 transition-all duration-300 ${className}`}
    >
      Book my free strategy call <ArrowRight className="w-4 h-4" />
    </a>
  );
}

export default function ESL() {
  const [showAllCases, setShowAllCases] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  useEffect(() => {
    document.title = "Malex Coaching | Busy Men Transform Their Physique";
    // After a booking in the embedded Calendly, stay on this site's confirmation page
    const onMessage = (e: MessageEvent) => {
      if (typeof e.origin === "string" && e.origin.includes("calendly.com") && e.data?.event === "calendly.event_scheduled") {
        window.location.href = "/booking-confirmed";
      }
    };
    window.addEventListener("message", onMessage);
    return () => window.removeEventListener("message", onMessage);
  }, []);

  const caseBase = (caseStudies.length - 6) % 2 ? 5 : 6;
  const cases = showAllCases ? caseStudies : caseStudies.slice(0, caseBase);

  return (
    <div className="min-h-screen bg-black text-foreground overflow-x-hidden">
      {/* NAV */}
      <header className="sticky top-0 z-50 bg-black/85 backdrop-blur-xl border-b border-yellow-500/15">
        <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between gap-4">
          <a href="/" className="flex items-center gap-3 shrink-0">
            <img src="/manus-storage/maho-logo_64d5e184.png" alt="Malex Coaching" className="w-10 h-10 rounded-full" />
            <span className="font-bold leading-tight text-sm">
              Malex <span className="text-yellow-400">Coaching</span>
            </span>
          </a>
          <nav className="hidden md:flex items-center gap-6 text-sm text-gray-300">
            {NAV.map((n) => (
              <a key={n.href} href={n.href} className="hover:text-yellow-400 transition-colors">
                {n.label}
              </a>
            ))}
          </nav>
          <a href="#book" className="px-4 py-2 rounded-lg bg-gradient-to-r from-yellow-300 to-amber-500 text-black text-sm font-bold shadow-md shadow-yellow-500/25 hover:brightness-110 transition-all duration-300">
            Book free call
          </a>
        </div>
      </header>

      {/* HERO */}
      <section className="relative px-4 pt-14 pb-20 md:pt-24">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[36rem] h-[36rem] bg-yellow-500/10 rounded-full blur-3xl"></div>
        </div>
        <div className="relative max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-yellow-400 mb-5">1-on-1 online coaching · busy men</p>
            <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
              We help busy men <span className="text-yellow-400">transform their physique.</span>
            </h1>
            <p className="text-xl font-semibold text-white mb-3">In 3 hours per week.</p>
            <p className="text-lg text-gray-300 mb-8 leading-relaxed">
              Build muscle, lose fat, and create a physique you can maintain for life — with a personalized coaching
              system designed around your schedule.
            </p>
            <div className="flex flex-wrap gap-3">
              <BookButton />
              <a href="#results" className="px-6 py-3.5 rounded-xl border border-yellow-400/50 text-yellow-400 font-semibold hover:bg-yellow-400/10 transition-colors">
                See client results
              </a>
            </div>
            <p className="text-sm text-gray-500 mt-4">Free 30-minute call. You leave with a clear plan either way.</p>
          </div>
          <img
            src="/media/malex-logo-galaxy.jpg"
            alt="Malex Coaching"
            className="w-full aspect-[828/462] object-contain rounded-3xl border border-yellow-500/30 shadow-2xl shadow-yellow-500/20 bg-black"
          />
        </div>

        <div className="relative max-w-6xl mx-auto mt-14 grid grid-cols-2 md:grid-cols-4 gap-4">
          {STATS.map((s) => (
            <div key={s.label} className="rounded-2xl border border-yellow-500/25 bg-gradient-to-b from-[#15110a] to-[#0a0806] transition-all duration-500 hover:border-yellow-400/50/80 p-5 text-center">
              <s.icon className="w-5 h-5 text-yellow-400 mx-auto mb-2" />
              <p className="text-2xl md:text-3xl font-bold text-white">{s.value}</p>
              <p className="text-xs md:text-sm text-gray-400 mt-1">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* PROBLEM */}
      <section className="px-4 py-24 border-t border-yellow-500/15">
        <div className="max-w-6xl mx-auto">
          <SectionHead eyebrow="Sound familiar?" title="Successful everywhere except the mirror." />
          <div className="grid md:grid-cols-3 gap-5">
            {PROBLEMS.map((p) => (
              <div key={p.tag} className="rounded-2xl border border-yellow-500/25 bg-gradient-to-b from-[#15110a] to-[#0a0806] transition-all duration-500 hover:border-yellow-400/50 p-6">
                <p className="text-yellow-400 font-bold text-xs tracking-widest uppercase mb-3">{p.tag}</p>
                <h3 className="text-xl font-bold mb-2">{p.title}</h3>
                <p className="text-gray-400 leading-relaxed">{p.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* METHOD */}
      <section id="method" className="scroll-mt-20 px-4 py-24 border-t border-yellow-500/15">
        <div className="max-w-6xl mx-auto">
          <SectionHead eyebrow="The Malex method" title="Plan. Train. Keep it." sub="A system built around your life, not the other way round." />
          <div className="grid md:grid-cols-3 gap-5">
            {METHOD.map((m) => (
              <div key={m.n} className="rounded-2xl border border-yellow-500/20 bg-gradient-to-b from-yellow-500/10 to-transparent p-6">
                <p className="text-4xl font-bold text-yellow-400 mb-4">{m.n}</p>
                <h3 className="text-xl font-bold mb-2">{m.title}</h3>
                <p className="text-gray-400 leading-relaxed">{m.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHAT YOU GET ON THE CALL */}
      <section id="call" className="scroll-mt-20 px-4 py-24 border-t border-yellow-500/15">
        <div className="max-w-6xl mx-auto">
          <SectionHead eyebrow="The free strategy call" title="What you'll get on the call" sub="An interactive breakdown of your personalized strategy." />
          <CallBenefitsAnimation />
          <div className="flex justify-center mt-10">
            <BookButton />
          </div>
        </div>
      </section>

      {/* BOOK */}
      <section id="book" className="scroll-mt-20 px-4 py-24 border-t border-yellow-500/15">
        <div className="max-w-3xl mx-auto">
          <SectionHead eyebrow="30-minute strategy call" title="I'm ready to change my life" sub="Pick a time that works best for you." />
          <div className="rounded-2xl border border-yellow-500/30 p-1 bg-gray-950">
            <iframe title="Book your call" src={`${CALENDLY}&embed_type=Inline&embed_domain=${typeof window !== "undefined" ? window.location.host : "malexcoaching.com"}`} width="100%" height="650" frameBorder="0" className="rounded-xl"></iframe>
          </div>
          <ul className="mt-8 grid sm:grid-cols-3 gap-3 text-sm text-gray-300">
            {["Free, no obligation", "Personal plan on the call", "Spots are limited"].map((t) => (
              <li key={t} className="flex items-center gap-2 justify-center">
                <Check className="w-4 h-4 text-yellow-400" /> {t}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* RESULTS */}
      <section id="results" className="scroll-mt-20 px-4 py-24 border-t border-yellow-500/15">
        <div className="max-w-6xl mx-auto">
          <ClientResults initial={12} />
          <div className="flex justify-center mt-12">
            <BookButton />
          </div>
        </div>
      </section>

      {/* CLIENT WINS */}
      <section id="wins" className="scroll-mt-20 px-4 py-24 border-t border-yellow-500/15">
        <div className="max-w-6xl mx-auto">
          <ClientWins initial={16} />
        </div>
      </section>

      {/* VIDEO TESTIMONIALS */}
      <section id="testimonials" className="scroll-mt-20 px-4 py-24 border-t border-yellow-500/15">
        <div className="max-w-6xl mx-auto">
          <VideoTestimonials initial={8} />
        </div>
      </section>

      {/* COACHES */}
      <section id="coaches" className="scroll-mt-20 px-4 py-24 border-t border-yellow-500/15 text-center">
        <div className="max-w-6xl mx-auto">
          <SectionHead eyebrow="Who you'll work with" title="Meet your coaches" sub="Maho leads nutrition and fat loss. Sash leads training and muscle. You get both." />
          <div className="-mt-16">
            <Coaches />
          </div>
        </div>
      </section>

      {/* CASE STUDIES */}
      <section className="px-4 py-24 border-t border-yellow-500/15">
        <div className="max-w-6xl mx-auto">
          <SectionHead eyebrow="In their words" title="Client case studies" sub="See what is possible when the right system is built around your lifestyle." />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {cases.map((c) => (
              <div key={c.id} className="rounded-2xl border border-yellow-500/25 bg-gradient-to-b from-[#15110a] to-[#0a0806] transition-all duration-500 hover:border-yellow-400/50 overflow-hidden">
                <div className="aspect-video bg-black">
                  <iframe
                    src={`https://www.youtube.com/embed/${c.id}?quality=hd&vq=hd720`}
                    title={c.title}
                    loading="lazy"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="w-full h-full"
                  ></iframe>
                </div>
                <p className="p-4 text-sm text-gray-300">{c.title}</p>
              </div>
            ))}
          </div>
          {caseStudies.length > caseBase && (
            <div className="flex justify-center mt-10">
              <button
                onClick={() => setShowAllCases(!showAllCases)}
                className="px-8 py-3 rounded-xl border border-yellow-400/50 text-yellow-400 font-semibold hover:bg-yellow-400/10 transition-colors"
              >
                {showAllCases ? "Show less" : `Show more (${caseStudies.length - caseBase})`}
              </button>
            </div>
          )}
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="scroll-mt-20 px-4 py-24 border-t border-yellow-500/15">
        <div className="max-w-3xl mx-auto">
          <SectionHead eyebrow="Questions" title="Before you book" />
          <div className="space-y-3">
            {FAQS.map((f, i) => {
              const open = openFaq === i;
              return (
                <div key={f.q} className="rounded-2xl border border-yellow-500/25 bg-gradient-to-b from-[#15110a] to-[#0a0806] transition-all duration-500 hover:border-yellow-400/50 overflow-hidden">
                  <button
                    onClick={() => setOpenFaq(open ? null : i)}
                    className="w-full flex items-center justify-between gap-4 p-5 text-left hover:bg-gray-900/60 transition-colors"
                  >
                    <span className="font-bold text-white flex items-center gap-2">
                      {f.v && <span className="text-[10px] uppercase tracking-wider font-bold px-2 py-0.5 rounded-full bg-gradient-to-r from-yellow-300 to-amber-500 text-black">Video</span>}
                      {f.q}
                    </span>
                    <ChevronDown className={`w-5 h-5 text-yellow-400 shrink-0 transition-transform ${open ? "rotate-180" : ""}`} />
                  </button>
                  {open && (
                    <div className="px-5 pb-5">
                      <p className="text-gray-400 leading-relaxed">{f.a}</p>
                      {f.v && (
                        <div className="mt-4 aspect-video rounded-xl overflow-hidden bg-black border border-yellow-500/20">
                          <iframe
                            src={`https://www.youtube.com/embed/${f.v}?rel=0`}
                            title={f.q}
                            loading="lazy"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                            className="w-full h-full"
                          ></iframe>
                        </div>
                      )}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="px-4 py-24 border-t border-yellow-500/15">
        <div className="max-w-3xl mx-auto text-center rounded-3xl border border-yellow-500/30 bg-gradient-to-b from-yellow-500/10 to-transparent p-10">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-yellow-400 mb-3">Limited 1-on-1 spots</p>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Ready to build your best physique?</h2>
          <p className="text-gray-300 text-lg mb-8">
            Book a free strategy call with our team and we'll show you exactly what to do next.
          </p>
          <BookButton />
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-gray-950 py-8 px-4 border-t border-gray-800">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-gray-500">
          <p>© 2026 Malex Coaching. All rights reserved.</p>
          <nav className="flex flex-wrap justify-center gap-x-5 gap-y-1">
            <a href="/terms-of-service" className="hover:text-yellow-400 transition-colors">Terms of Service</a>
            <a href="/refund-policy" className="hover:text-yellow-400 transition-colors">Refund Policy</a>
            <a href="/privacy-policy" className="hover:text-yellow-400 transition-colors">Privacy Policy</a>
            <a href="mailto:maho@malexcoaching.com" className="inline-flex items-center gap-1 hover:text-yellow-400 transition-colors">
              <Mail className="w-3.5 h-3.5" /> maho@malexcoaching.com
            </a>
          </nav>
        </div>
      </footer>
    </div>
  );
}
