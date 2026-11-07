import { useEffect, useRef, useState, type ReactNode } from "react";
import { ArrowRight, Check, Lock, Unlock } from "lucide-react";

const card =
  "rounded-2xl border border-yellow-500/25 bg-gradient-to-b from-[#15110a] to-[#0a0806] transition-all duration-500 hover:border-yellow-400/50";

function Head({ eyebrow, title, sub }: { eyebrow: string; title: string; sub?: string }) {
  return (
    <div className="text-center mb-10">
      <p className="text-sm font-semibold uppercase tracking-[0.25em] text-yellow-400 mb-3">{eyebrow}</p>
      <h2 className="text-3xl md:text-5xl font-bold">{title}</h2>
      {sub && <p className="text-gray-400 mt-4 max-w-2xl mx-auto">{sub}</p>}
    </div>
  );
}

/* ---------- Micro-copy under book buttons ---------- */
export function BookNote() {
  return <p className="text-sm text-gray-400 mt-3 text-center">Private call. No obligation. You leave with a plan either way.</p>;
}

/* ---------- 3. Trusted-by strip (real clients from the results board) ---------- */
const STRIP = [
  ["Jacob", "-21kg in 6 months"],
  ["Ryan", "-30kg in 8 months"],
  ["Mo", "-19kg in 3 months"],
  ["Fice", "+23kg in 12 months"],
  ["Omar", "+18kg + abs in 6 months"],
  ["Isaac", "-15kg in 4 months"],
  ["Hakeem", "+17kg + abs in 6 months"],
  ["Daniel", "-20kg in 4 months"],
  ["Alexander", "+16kg + abs in 6 months"],
  ["Darsh", "-13kg + abs in 3 months"],
  ["Mark", "65 years old, no more joint pain"],
  ["Richard", "58 years old, -3kg in 5 weeks"],
];

export function TrustedStrip() {
  const items = [...STRIP, ...STRIP];
  return (
    <section className="py-8 border-t border-yellow-500/15 overflow-hidden">
      <style>{`@keyframes malexScroll{from{transform:translateX(0)}to{transform:translateX(-50%)}}@media (prefers-reduced-motion: reduce){.malex-scroll{animation:none!important}}`}</style>
      <p className="text-center text-xs font-semibold uppercase tracking-[0.3em] text-yellow-400 mb-5">Real clients, real results</p>
      <div className="relative">
        <div className="malex-scroll flex w-max gap-4" style={{ animation: "malexScroll 60s linear infinite" }}>
          {items.map(([n, r], i) => (
            <div key={i} className="shrink-0 rounded-xl border border-yellow-500/25 bg-gradient-to-b from-[#15110a] to-[#0a0806] px-5 py-3">
              <p className="font-bold text-white leading-tight">{n}</p>
              <p className="text-sm text-yellow-400 whitespace-nowrap">{r}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- Across all clients: animated totals ---------- */
const KG_TO_LB = 2.20462;

function useInView<T extends Element>() {
  const ref = useRef<T | null>(null);
  const [seen, setSeen] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el || typeof IntersectionObserver === "undefined") { setSeen(true); return; }
    const io = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setSeen(true); io.disconnect(); } }, { threshold: 0.3 });
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return [ref, seen] as const;
}

function useCountUp(target: number, run: boolean, ms = 2200) {
  const [v, setV] = useState(0);
  useEffect(() => {
    if (!run) return;
    if (window.matchMedia?.("(prefers-reduced-motion: reduce)").matches) { setV(target); return; }
    let raf = 0;
    const t0 = performance.now();
    const tick = (t: number) => {
      const p = Math.min((t - t0) / ms, 1);
      setV(target * (1 - Math.pow(1 - p, 3)));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [run, target, ms]);
  return v;
}

const fmt = (n: number, d = 1) => n.toLocaleString("en-US", { minimumFractionDigits: d, maximumFractionDigits: d });

function TotalCard({ label, kg, run, max, week, neg }: { label: string; kg: number; run: boolean; max: number; week: number; neg?: boolean }) {
  const v = useCountUp(kg, run);
  const w = useCountUp(week, run, 2600);
  const pct = (v / max) * 100;
  return (
    <div className={`${card} p-7 md:p-8`}>
      <p className="text-yellow-400 font-bold text-xs tracking-widest uppercase mb-4">{label}</p>
      <p className="text-5xl md:text-6xl font-bold text-white leading-none tabular-nums">
        {neg ? "-" : ""}{fmt(v, 0)} <span className="text-2xl text-yellow-400">kg</span>
      </p>
      <p className="text-2xl md:text-3xl font-semibold text-yellow-300 mt-2 tabular-nums">
        {neg ? "-" : ""}{fmt(v * KG_TO_LB, 0)} <span className="text-lg text-yellow-400/80">lbs</span>
      </p>
      <div className="mt-6 h-3 rounded-full bg-white/10 overflow-hidden">
        <div className="h-full rounded-full bg-gradient-to-r from-yellow-300 via-yellow-400 to-amber-500 shadow-[0_0_12px_rgba(250,204,21,0.5)]" style={{ width: `${pct}%` }} />
      </div>
      <p className="text-xs text-gray-400 mt-3">Combined total across all our clients</p>
      <div className="mt-5 inline-flex items-center gap-2.5 rounded-full border border-yellow-400/40 bg-yellow-400/10 px-4 py-2">
        <span className="relative flex h-2.5 w-2.5">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-yellow-400 opacity-75"></span>
          <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-yellow-400"></span>
        </span>
        <span className="text-xs font-bold uppercase tracking-wider text-yellow-400">This week</span>
        <span className="text-sm font-bold text-white tabular-nums">{neg ? "-" : "+"}{Math.round(w)} kg · {neg ? "-" : "+"}{Math.round(w * KG_TO_LB)} lbs</span>
      </div>
    </div>
  );
}

export function ResultsInNumbers() {
  const [ref, seen] = useInView<HTMLDivElement>();
  const clients = useCountUp(200, seen, 1600);
  const abs = useCountUp(100, seen, 1800);
  return (
    <section className="px-4 pt-20 pb-2 border-t border-yellow-500/15">
      <div ref={ref} className="max-w-5xl mx-auto">
        <Head eyebrow="Across all our clients" title="What 200+ clients added up to" sub="Fat loss, muscle and abs, from men with a full-time job." />
        <div className="grid md:grid-cols-2 gap-5">
          <TotalCard label="Total fat lost" kg={1989} run={seen} max={1989} week={18} neg />
          <TotalCard label="Total muscle built" kg={1209} run={seen} max={1989} week={8} />
        </div>
        <div className="grid grid-cols-2 gap-5 mt-5">
          <div className={`${card} p-6 text-center`}>
            <p className="text-4xl font-bold text-yellow-400 tabular-nums">{Math.round(clients)}+</p>
            <p className="font-bold text-white mt-1">clients coached 1-on-1</p>
          </div>
          <div className={`${card} p-6 text-center`}>
            <p className="text-4xl font-bold text-yellow-400 tabular-nums">{Math.round(abs)}+</p>
            <p className="font-bold text-white mt-1">clients got abs</p>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- 9 + 10. The Malex Coaching method, the app, and an example check-in ---------- */
const SCREENS = [
  ["/media/app/app-home.jpg", "Home"],
  ["/media/app/app-workout.jpg", "Workout"],
  ["/media/app/app-nutrition.jpg", "Nutrition"],
  ["/media/app/app-scanner.jpg", "Barcode scanner"],
  ["/media/app/app-coach.jpg", "AI coach"],
  ["/media/app/app-progress.jpg", "Progress"],
];

export function CoachingAppSection() {
  return (
    <section className="px-4 py-24 border-t border-yellow-500/15">
      <div className="max-w-6xl mx-auto">
        <Head
          eyebrow="The Malex Coaching Method"
          title="Your whole plan in one app"
          sub="Training, nutrition, check-ins and your coaches, all in one place. This is what you use every day."
        />
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
          {SCREENS.map(([src, alt]) => (
            <img
              key={src}
              src={src}
              alt={`Malex Coaching app: ${alt}`}
              loading="lazy"
              className="w-full h-auto rounded-[1.5rem] border border-yellow-500/30 shadow-xl shadow-yellow-500/10"
            />
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- 2. "How this call works" video (existing Loom) ---------- */
export function HowCallWorks() {
  return (
    <section className="px-4 pt-24 pb-4 border-t border-yellow-500/15">
      <div className="max-w-3xl mx-auto">
        <Head eyebrow="Before you book" title="How this call works" sub="Two minutes. Watch this first so you know exactly what happens." />
        <div className="rounded-2xl border border-yellow-500/30 p-1 bg-gray-950">
          <div className="aspect-[4/3] max-w-2xl mx-auto rounded-xl overflow-hidden bg-black">
            <iframe
              src="https://www.loom.com/embed/b842fa625e844521b9edf2ecc43083f1?hide_owner=true&hide_share=true&hide_title=true&hideEmbedTopBar=true"
              title="How this call works"
              loading="lazy"
              allowFullScreen
              className="w-full h-full"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- 1. Application gate in front of the calendar ---------- */
type Answers = { name: string; email: string; phone: string; goal: string; invest: string; hours: string };
const EMPTY: Answers = { name: "", email: "", phone: "", goal: "", invest: "", hours: "" };

const inputCls =
  "w-full rounded-xl bg-black/50 border border-yellow-500/25 px-4 py-3 text-white placeholder:text-gray-500 focus:outline-none focus:border-yellow-400";

function Choice({ options, value, onPick }: { options: string[]; value: string; onPick: (v: string) => void }) {
  return (
    <div className="grid gap-3">
      {options.map((o) => (
        <button
          key={o}
          type="button"
          onClick={() => onPick(o)}
          className={`text-left rounded-xl border px-4 py-3 font-semibold transition-colors ${
            value === o ? "border-yellow-400 bg-yellow-400/10 text-yellow-300" : "border-yellow-500/25 text-gray-200 hover:border-yellow-400/60"
          }`}
        >
          {o}
        </button>
      ))}
    </div>
  );
}

export function ApplicationGate({ children }: { children: (qs: string) => ReactNode }) {
  const [step, setStep] = useState(1);
  const [a, setA] = useState<Answers>(EMPTY);
  const [err, setErr] = useState("");
  const done = step > 4;

  const next = () => {
    if (step === 1) {
      if (!a.name.trim() || !/^\S+@\S+\.\S+$/.test(a.email)) return setErr("Add your name and a valid email.");
    }
    if (step === 2 && !a.goal) return setErr("Pick your main goal.");
    if (step === 3 && !a.invest) return setErr("Choose one to continue.");
    if (step === 3 && a.invest === "Not right now") return setErr("This coaching is a financial investment. Come back when you are ready to invest your time and finances into your physique.");
    if (step === 4 && !a.hours) return setErr("Pick your weekly training time.");
    setErr("");
    if (step === 4) {
      try {
        fetch("https://formspree.io/f/xrppvkrp", {
          method: "POST",
          headers: { "Content-Type": "application/json", Accept: "application/json" },
          body: JSON.stringify({ name: a.name, email: a.email, whatsapp: a.phone, goal: a.goal, willing_to_invest: a.invest, hours_per_week: a.hours, _subject: "New Malex call application: " + a.name }),
        }).catch(() => {});
      } catch {}
    }
    setStep(step + 1);
  };

  const qs = `&name=${encodeURIComponent(a.name)}&email=${encodeURIComponent(a.email)}`;

  return (
    <div>
      <div className="rounded-2xl border border-yellow-500/30 bg-gradient-to-b from-[#15110a] to-[#0a0806] p-6 md:p-8 mb-6">
        <div className="flex items-center justify-between mb-5">
          <p className="text-yellow-400 font-bold text-xs tracking-widest uppercase">{done ? "Application complete" : `Step ${step} of 4`}</p>
          <span className={`inline-flex items-center gap-1.5 text-xs font-bold px-2.5 py-1 rounded-full ${done ? "bg-green-500/15 text-green-400" : "bg-yellow-500/10 text-yellow-400"}`}>
            {done ? <Unlock className="w-3.5 h-3.5" /> : <Lock className="w-3.5 h-3.5" />} {done ? "Calendar unlocked" : "Calendar locked"}
          </span>
        </div>
        <div className="h-1.5 rounded-full bg-white/10 mb-6 overflow-hidden">
          <div className="h-full bg-gradient-to-r from-yellow-300 to-amber-500 transition-all duration-500" style={{ width: `${(Math.min(step - 1, 4) / 4) * 100}%` }} />
        </div>

        {done ? (
          <p className="text-gray-200">Thanks {a.name.split(" ")[0]}. Pick a time below and we will have your details ready for the call.</p>
        ) : (
          <>
            {step === 1 && (
              <div className="grid gap-3">
                <h3 className="text-xl font-bold mb-1">Your details</h3>
                <input className={inputCls} placeholder="Full name" value={a.name} onChange={(e) => setA({ ...a, name: e.target.value })} aria-label="Full name" />
                <input className={inputCls} type="email" placeholder="Email" value={a.email} onChange={(e) => setA({ ...a, email: e.target.value })} aria-label="Email" />
                <input className={inputCls} placeholder="WhatsApp (optional)" value={a.phone} onChange={(e) => setA({ ...a, phone: e.target.value })} aria-label="WhatsApp" />
              </div>
            )}
            {step === 2 && (
              <div>
                <h3 className="text-xl font-bold mb-3">What is your main goal?</h3>
                <Choice options={["Lose fat", "Build muscle", "Both"]} value={a.goal} onPick={(v) => setA({ ...a, goal: v })} />
              </div>
            )}
            {step === 3 && (
              <div>
                <h3 className="text-xl font-bold mb-3">Are you willing to invest your time and finances into your physique?</h3>
                <Choice options={["Yes, I am willing to invest", "Not right now"]} value={a.invest} onPick={(v) => setA({ ...a, invest: v })} />
              </div>
            )}
            {step === 4 && (
              <div>
                <h3 className="text-xl font-bold mb-3">How many hours a week can you train?</h3>
                <Choice options={["About 3 hours", "4 to 5 hours", "6 hours or more"]} value={a.hours} onPick={(v) => setA({ ...a, hours: v })} />
              </div>
            )}
            {err && <p className="text-red-400 text-sm mt-3">{err}</p>}
            <div className="flex items-center gap-3 mt-6">
              {step > 1 && (
                <button type="button" onClick={() => { setErr(""); setStep(step - 1); }} className="px-5 py-3 rounded-xl border border-yellow-400/40 text-yellow-400 font-semibold hover:bg-yellow-400/10 transition-colors">
                  Back
                </button>
              )}
              <button
                type="button"
                onClick={next}
                className="inline-flex items-center gap-2 px-7 py-3 rounded-xl bg-gradient-to-r from-yellow-300 via-yellow-400 to-amber-500 text-black font-bold shadow-lg shadow-yellow-500/25 hover:brightness-110 transition-all duration-300"
              >
                {step === 4 ? "Unlock the calendar" : "Continue"} <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </>
        )}
      </div>
      {done ? children(qs) : (
        <div className="rounded-2xl border border-yellow-500/15 bg-black/40 p-10 text-center text-gray-500">
          <Lock className="w-6 h-6 mx-auto mb-2 text-yellow-500/60" />
          Answer the 4 quick steps above to unlock your calendar.
        </div>
      )}
    </div>
  );
}

export function ProofTabs({ tabs }: { tabs: { label: string; node: ReactNode }[] }) {
  const [i, setI] = useState(0);
  return (
    <div>
      <div className="text-center mb-10">
        <p className="text-sm font-semibold uppercase tracking-[0.25em] text-yellow-400 mb-3">The proof</p>
        <div className="inline-flex flex-wrap justify-center gap-2 rounded-2xl border border-yellow-500/25 bg-black/60 p-1.5">
          {tabs.map((t, k) => (
            <button
              key={t.label}
              type="button"
              onClick={() => setI(k)}
              className={`px-5 py-2.5 rounded-xl text-sm font-bold transition-all duration-300 ${
                i === k ? "bg-gradient-to-r from-yellow-300 via-yellow-400 to-amber-500 text-black shadow-md shadow-yellow-500/25" : "text-gray-300 hover:text-yellow-300"
              }`}
            >
              {t.label}
            </button>
          ))}
        </div>
      </div>
      {tabs[i].node}
    </div>
  );
}
