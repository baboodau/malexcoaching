import { useState, type ReactNode } from "react";
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

/* ---------- 4 + 5. Big-number cards and outcome cards ---------- */
const BIG = [
  ["-21KG", "Jacob", "6 months"],
  ["-30KG", "Ryan", "8 months"],
  ["+23KG", "Fice", "12 months"],
  ["-19KG", "Mo", "3 months"],
  ["+18KG", "Omar", "6 months, plus abs"],
  ["-20KG", "Daniel", "4 months"],
  ["+17KG", "Hakeem", "6 months, got abs"],
  ["-15KG", "Isaac", "4 months"],
];

const OUTCOMES: { name: string; tag: string; lines: string[] }[] = [
  { name: "Ryan", tag: "Down 20 lbs in 30 days", lines: ["Down 20 lbs", "In 30 days", "Coached 1-on-1"] },
  { name: "Mark", tag: "65 years old", lines: ["Got rid of chronic joint pain", "Without a doctor", "At 65 years old"] },
  { name: "Andrey", tag: "Busy 9-5 man", lines: ["Lost his beer belly", "Got a defined jaw", "As a busy working 9-5 man"] },
  { name: "David", tag: "20% to 9% body fat", lines: ["Went from 20% to 9% body fat", "Got abs", "In ONE month"] },
  { name: "Lamar", tag: "Six-pack in half a year", lines: ["Built a six-pack", "In half a year", "Coached 1-on-1"] },
  { name: "Humza", tag: "Built muscle", lines: ["Built muscle", "Got abs", "Coached 1-on-1"] },
];

export function ResultsInNumbers() {
  return (
    <section className="px-4 py-24 border-t border-yellow-500/15">
      <div className="max-w-6xl mx-auto">
        <Head eyebrow="The numbers" title="Results in black and white" sub="Real clients, real timelines. Every number comes from a client we coached 1-on-1." />
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-14">
          {BIG.map(([n, name, t]) => (
            <div key={name + n} className={`${card} p-5 text-center`}>
              <p className="text-4xl md:text-5xl font-bold text-yellow-400">{n}</p>
              <p className="font-bold text-white mt-2">{name}</p>
              <p className="text-xs text-gray-400 mt-1">{t}</p>
            </div>
          ))}
        </div>
        <div className="grid md:grid-cols-3 gap-5">
          {OUTCOMES.map((o) => (
            <div key={o.name} className={`${card} p-6`}>
              <p className="text-yellow-400 font-bold text-xs tracking-widest uppercase mb-2">{o.tag}</p>
              <h3 className="text-xl font-bold mb-3">{o.name}</h3>
              <ul className="space-y-2">
                {o.lines.map((l) => (
                  <li key={l} className="flex items-start gap-2 text-gray-300 text-sm">
                    <Check className="w-4 h-4 text-yellow-400 mt-0.5 shrink-0" />
                    {l}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="flex flex-col items-center mt-10">
          <a
            href="#book"
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-gradient-to-r from-yellow-300 via-yellow-400 to-amber-500 text-black font-bold shadow-lg shadow-yellow-500/25 hover:brightness-110 transition-all duration-300"
          >
            Book my free strategy call <ArrowRight className="w-4 h-4" />
          </a>
          <BookNote />
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

        <div className="grid md:grid-cols-2 gap-6 mt-14 items-stretch">
          <div className={`${card} p-6`}>
            <div className="flex items-center justify-between mb-5">
              <p className="font-bold text-lg">Weekly check-in</p>
              <span className="text-[10px] uppercase tracking-wider font-bold px-2 py-0.5 rounded-full bg-gradient-to-r from-yellow-300 to-amber-500 text-black">Example week</span>
            </div>
            <div className="grid grid-cols-2 gap-3 text-sm">
              {[
                ["Sessions", "3 / 3"],
                ["Protein", "6 / 7 days"],
                ["Avg steps", "9,340"],
                ["Avg sleep", "7h 10m"],
                ["Weight", "-1.4 kg"],
                ["Waist", "-1 cm"],
              ].map(([k, v]) => (
                <div key={k} className="rounded-xl bg-black/40 border border-yellow-500/15 p-3">
                  <p className="text-gray-400 text-xs">{k}</p>
                  <p className="text-white font-bold text-lg">{v}</p>
                </div>
              ))}
            </div>
            <p className="text-xs text-gray-500 mt-4">Your coach reviews it and replies within 24 hours. Figures shown are an example, not a real client.</p>
          </div>
          <div className={`${card} p-6 flex items-center justify-center`}>
            <img src="/media/malex-call/malex-upload-E/miro-system.jpg" alt="The Malex Coaching system" loading="lazy" className="w-full rounded-xl" />
          </div>
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
    if (step === 4 && !a.hours) return setErr("Pick your weekly training time.");
    setErr("");
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
                <h3 className="text-xl font-bold mb-3">Are you ready to invest in yourself right now?</h3>
                <Choice options={["Yes, I am ready", "I want to learn more first"]} value={a.invest} onPick={(v) => setA({ ...a, invest: v })} />
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
