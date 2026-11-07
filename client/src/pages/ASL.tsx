import { useEffect, useRef, useState } from "react";
import { Check, ChevronDown, Play, Clock, Users, ShieldCheck, Video, CalendarCheck, Mail } from "lucide-react";
import { ClientResults } from "@/components/ClientResults";
import { ClientWins } from "@/components/ClientWins";
import { VideoTestimonials } from "@/components/VideoTestimonials";
import { Coaches } from "@/components/Coaches";

/**
 * ASL (After Sales Letter) - Post-Booking Page
 * Layout: anchored nav, hero + stats, 3-step prep, inside the program,
 * client results, case-study videos, coaches, FAQ videos, final reminder, footer.
 */

interface ObjectionVideo {
  id: number;
  title: string;
  description: string;
  videoUrl?: string;
}

const objectionVideos: ObjectionVideo[] = [
  {
    id: 101,
    title: "Is the strategy call free?",
    description: "Yes. It's a free 30-minute call where we look at where you are, what's held you back, and the exact plan to reach your goal.",
  },
  {
    id: 102,
    title: "What happens on the call?",
    description: "A free 30-minute 1-on-1 call: we look at where you are, what has held you back, and build your plan together. You leave with a clear plan either way, with no pressure to sign up.",
  },
  {
    id: 103,
    title: "Do I need gym experience?",
    description: "No. Your plan is built for your level and your schedule, and every exercise comes with video guidance.",
  },
  {
    id: 104,
    title: "How fast will I see results?",
    description: "Sash explains realistic timelines for seeing your transformation.",
    videoUrl: "https://www.loom.com/share/290d21a6a7cd496b89bedb3fe20d04af",
  },
  {
    id: 105,
    title: "Will I have time to do the program?",
    description: "Around 3 hours of training a week, built around your schedule. Sash explains how it fits a busy life.",
    videoUrl: "https://www.loom.com/share/e8a60b20fca74a5f82605f3b9e584ad6",
  },
  {
    id: 106,
    title: "Will I get personalized support?",
    description: "How we coach you 1-on-1, with weekly check-ins and direct messaging.",
    videoUrl: "https://www.loom.com/share/5e36b22deba144ff989e42e7e831d33a",
  },
  {
    id: 107,
    title: "What if I don't get the same results as your clients?",
    description: "Realistic expectations and how we adjust the plan to you.",
    videoUrl: "https://www.loom.com/share/2f11bbdb6cf04e1092316c800b5c92bc",
  },
  {
    id: 108,
    title: "What if I'm not satisfied with the program?",
    description: "We sign a results agreement with every client. Sash walks through the guarantee.",
    videoUrl: "https://www.loom.com/share/7c8dc1c170064c4a83b08c13c3ff0731",
  },
  {
    id: 109,
    title: "What if I'm already with another coach?",
    description: "How switching to Malex works if you already have a coach.",
    videoUrl: "https://www.loom.com/share/4525b80857db41048ba55da74378c766",
  },
  {
    id: 110,
    title: "What is your proof?",
    description: "Real client results and how they were achieved, explained by Sash.",
    videoUrl: "https://www.loom.com/share/4e3aa124a7f6415ca8f8e63d853fbf28",
  },
  {
    id: 111,
    title: "How does your program work?",
    description: "A walkthrough of the process from onboarding to your first results.",
    videoUrl: "https://www.loom.com/share/b842fa625e844521b9edf2ecc43083f1",
  },
  {
    id: 112,
    title: "What should my mindset be for the call?",
    description: "How to show up to your strategy call so we get the most out of it.",
    videoUrl: "https://www.loom.com/share/c531c6ffe7354747b0b57597655120db",
  },
  {
    id: 113,
    title: "Will I be able to afford it?",
    description: "How to think about the investment in your transformation.",
    videoUrl: "https://www.loom.com/share/f1cf6deebd6944a0a076faeff62b1af4",
  },
];

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
  { id: "zTcWwRDwdOc", title: "Client doubled his back size in 2 months" }
];

const NAV = [
  { href: "#prepare", label: "Prepare" },
  { href: "#program", label: "The Program" },
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

const PREP_STEPS = [
  { n: "01", title: "Watch the prep video", body: "It takes a few minutes and shows you exactly how the call works, so we can spend the time on your plan." },
  { n: "02", title: "Pick a quiet spot", body: "Join from somewhere without distractions, with a stable connection. Treat it like an important meeting." },
  { n: "03", title: "Come ready to decide", body: "Know your goal, be honest about what has and hasn't worked, and be ready to act if the plan makes sense." },
];

const PROGRAM = [
  { title: "Personalized training", body: "A 3-hours-a-week plan built around your schedule, delivered in Trainerize." },
  { title: "Personalized nutrition", body: "Meal plans and calorie targets that fit your life — no extreme diets." },
  { title: "Your own dashboard", body: "A custom Notion dashboard with your roadmap, check-ins and progress photos." },
  { title: "Direct coach access", body: "24/7 messaging, weekly check-ins and bi-weekly group calls with Maho and Sash." },
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

const loomId = (url: string) => url.match(/loom\.com\/share\/([a-f0-9]+)/)?.[1];

function LockedVideo({ src }: { src: string }) {
  const ref = useRef<HTMLVideoElement>(null);
  const maxT = useRef(0);
  const [playing, setPlaying] = useState(false);
  const [pct, setPct] = useState(0);
  const toggle = () => {
    const v = ref.current;
    if (!v) return;
    if (v.paused) v.play(); else v.pause();
  };
  return (
    <div className="relative aspect-video rounded-xl overflow-hidden bg-black select-none" onContextMenu={(e) => e.preventDefault()}>
      <video
        ref={ref}
        src={src}
        playsInline
        preload="metadata"
        controls={false}
        disablePictureInPicture
        controlsList="nodownload noplaybackrate noremoteplayback"
        className="w-full h-full object-contain cursor-pointer"
        onClick={toggle}
        onPlay={() => setPlaying(true)}
        onPause={() => setPlaying(false)}
        onTimeUpdate={(e) => {
          const v = e.currentTarget;
          if (v.currentTime > maxT.current) maxT.current = v.currentTime;
          setPct(v.duration ? (v.currentTime / v.duration) * 100 : 0);
        }}
        onSeeking={(e) => {
          const v = e.currentTarget;
          if (v.currentTime > maxT.current + 0.5) v.currentTime = maxT.current;
        }}
        onRateChange={(e) => { e.currentTarget.playbackRate = 1; }}
      />
      {!playing && (
        <button
          type="button"
          onClick={toggle}
          aria-label="Play video"
          className="absolute inset-0 flex items-center justify-center bg-black/40"
        >
          <span className="w-20 h-20 rounded-full bg-gradient-to-b from-yellow-300 to-yellow-600 flex items-center justify-center shadow-lg shadow-yellow-500/30">
            <svg viewBox="0 0 24 24" className="w-9 h-9 ml-1 fill-black"><path d="M8 5v14l11-7z" /></svg>
          </span>
        </button>
      )}
      <div className="absolute bottom-0 left-0 right-0 h-1.5 bg-white/10 pointer-events-none">
        <div className="h-full bg-yellow-400" style={{ width: `${pct}%` }} />
      </div>
    </div>
  );
}

export default function ASL() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [showAllCases, setShowAllCases] = useState(false);

  useEffect(() => {
    document.title = "Your Call Is Confirmed | Malex Coaching";
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
          <a
            href="#prepare"
            className="px-4 py-2 rounded-lg bg-gradient-to-r from-yellow-300 to-amber-500 text-black text-sm font-bold shadow-md shadow-yellow-500/25 hover:brightness-110 transition-all duration-300"
          >
            Prepare for your call
          </a>
        </div>
      </header>

      {/* HERO */}
      <section className="relative px-4 pt-16 pb-20 md:pt-24">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[36rem] h-[36rem] bg-yellow-500/10 rounded-full blur-3xl"></div>
        </div>
        <div className="relative max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="inline-flex items-center gap-2 text-sm font-semibold text-green-400 bg-green-500/10 border border-green-500/30 rounded-full px-4 py-1.5 mb-6">
              <CalendarCheck className="w-4 h-4" /> Your call is confirmed
            </p>
            <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
              You're booked. <span className="text-yellow-400">Here's how to get the most out of it.</span>
            </h1>
            <p className="text-lg text-gray-300 mb-8 leading-relaxed">
              Check your email for the calendar invite. Then take 10 minutes to go through this page so we can spend
              the call building your plan — not explaining the basics.
            </p>
            <div className="flex flex-wrap gap-3">
              <a href="#prepare" className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-yellow-300 via-yellow-400 to-amber-500 text-black font-bold shadow-lg shadow-yellow-500/25 hover:shadow-yellow-400/40 hover:brightness-110 transition-all duration-300">
                <Play className="w-4 h-4" /> Watch the prep video
              </a>
              <a href="#results" className="px-6 py-3 rounded-xl border border-yellow-400/50 text-yellow-400 font-semibold hover:bg-yellow-400/10 transition-colors">
                See client results
              </a>
            </div>
          </div>
          <div className="relative">
            <img
              src="/media/malex-logo-galaxy.jpg"
              alt="Malex Coaching"
              className="w-full rounded-3xl border border-yellow-500/30 shadow-2xl shadow-yellow-500/20"
            />
          </div>
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

      {/* PREPARE */}
      <section id="prepare" className="scroll-mt-20 px-4 py-24 border-t border-yellow-500/15">
        <div className="max-w-6xl mx-auto">
          <SectionHead eyebrow="Before your call" title="3 steps. 10 minutes." sub="Do these before the call and you'll leave with a clear plan." />
          <div className="grid md:grid-cols-3 gap-5 mb-14">
            {PREP_STEPS.map((p) => (
              <div key={p.n} className="rounded-2xl border border-yellow-500/25 bg-gradient-to-b from-[#15110a] to-[#0a0806] transition-all duration-500 hover:border-yellow-400/50 p-6">
                <p className="text-yellow-400 font-bold text-sm tracking-widest mb-3">STEP {p.n}</p>
                <h3 className="text-xl font-bold mb-2">{p.title}</h3>
                <p className="text-gray-400 leading-relaxed">{p.body}</p>
              </div>
            ))}
          </div>
          <div className="max-w-4xl mx-auto rounded-2xl border border-yellow-500/30 p-1 bg-gray-950">
            <LockedVideo src="/media/malex-call/prep-call-new.mp4" />
          </div>
        </div>
      </section>

      {/* PROGRAM */}
      <section id="program" className="scroll-mt-20 px-4 py-24 border-t border-yellow-500/15">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-yellow-400 mb-3">Inside the program</p>
            <h2 className="text-4xl md:text-5xl font-bold mb-8">Your whole plan, in one place.</h2>
            <ul className="space-y-5">
              {PROGRAM.map((p) => (
                <li key={p.title} className="flex gap-4">
                  <span className="mt-1 w-7 h-7 shrink-0 rounded-full bg-yellow-400/15 border border-yellow-400/40 flex items-center justify-center">
                    <Check className="w-4 h-4 text-yellow-400" />
                  </span>
                  <div>
                    <p className="font-bold text-white">{p.title}</p>
                    <p className="text-gray-400">{p.body}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
          <div className="space-y-4">
            <img src="/media/malex-call/malex-upload-E/miro-inside.jpg" alt="Inside the Malex program" loading="lazy" className="w-full rounded-2xl border border-yellow-500/30" />
            <img src="/media/malex-call/malex-upload-E/miro-system.jpg" alt="The Malex coaching system" loading="lazy" className="w-full rounded-2xl border border-yellow-500/30" />
          </div>
        </div>
      </section>

      {/* RESULTS */}
      <section id="results" className="scroll-mt-20 px-4 py-24 border-t border-yellow-500/15">
        <div className="max-w-6xl mx-auto">
          <ClientResults initial={12} />
        </div>
      </section>

      {/* CLIENT WINS */}
      <section id="wins" className="scroll-mt-20 px-4 py-24 border-t border-yellow-500/15">
        <div className="max-w-6xl mx-auto">
          <ClientWins initial={12} />
        </div>
      </section>

      {/* VIDEO TESTIMONIALS */}
      <section id="testimonials" className="scroll-mt-20 px-4 py-24 border-t border-yellow-500/15">
        <div className="max-w-6xl mx-auto">
          <VideoTestimonials initial={8} />
        </div>
      </section>

      {/* CASE STUDIES */}
      <section className="px-4 py-24 border-t border-yellow-500/15">
        <div className="max-w-6xl mx-auto">
          <SectionHead eyebrow="In their words" title="Client case studies" sub="Hear it straight from the men who did it." />
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

      {/* COACHES */}
      <section id="coaches" className="scroll-mt-20 px-4 py-24 border-t border-yellow-500/15 text-center">
        <div className="max-w-6xl mx-auto">
          <SectionHead eyebrow="Who you'll work with" title="Meet your coaches" sub="Maho leads nutrition and fat loss. Sash leads training and muscle. You get both." />
          <div className="-mt-16">
            <Coaches />
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="scroll-mt-20 px-4 py-24 border-t border-yellow-500/15">
        <div className="max-w-3xl mx-auto">
          <SectionHead eyebrow="Questions" title="Before your call" sub="Short answers on video. Watch the ones on your mind." />
          <div className="space-y-3">
            {objectionVideos.map((v) => {
              const open = openFaq === v.id;
              return (
                <div key={v.id} className="rounded-2xl border border-yellow-500/25 bg-gradient-to-b from-[#15110a] to-[#0a0806] transition-all duration-500 hover:border-yellow-400/50 overflow-hidden">
                  <button
                    onClick={() => setOpenFaq(open ? null : v.id)}
                    className="w-full flex items-center justify-between gap-4 p-5 text-left hover:bg-gray-900/60 transition-colors"
                  >
                    <div>
                      <p className="font-bold text-white">{v.title}</p>
                      {v.videoUrl && <p className="text-sm text-gray-400 mt-1">{v.description}</p>}
                    </div>
                    <ChevronDown className={`w-5 h-5 text-yellow-400 shrink-0 transition-transform ${open ? "rotate-180" : ""}`} />
                  </button>
                  {open && (
                    <div className="px-5 pb-5">
                      {!v.videoUrl ? (
                        <p className="text-gray-300 leading-relaxed">{v.description}</p>
                      ) : (
                      <div className="aspect-[4/3] max-w-2xl mx-auto rounded-xl overflow-hidden bg-black">
                        <iframe
                          src={`https://www.loom.com/embed/${loomId(v.videoUrl!)}?hide_owner=true&hide_share=true&hide_title=true&hideEmbedTopBar=true`}
                          title={v.title}
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

      {/* FINAL */}
      <section className="px-4 py-24 border-t border-yellow-500/15">
        <div className="max-w-3xl mx-auto text-center rounded-3xl border border-yellow-500/30 bg-gradient-to-b from-yellow-500/10 to-transparent p-10">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">You're all set.</h2>
          <p className="text-gray-300 text-lg mb-8">
            We'll see you on the call. Can't make it? Use the reschedule link in your confirmation email so your spot
            goes to someone else.
          </p>
          <a href="/" className="inline-block px-8 py-3 rounded-xl border border-yellow-400/50 text-yellow-400 font-semibold hover:bg-yellow-400/10 transition-colors">
            Back to main page
          </a>
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
