const COACHES = [
  { name: "Coach Maho", role: "Nutrition & Fat Loss", img: "/media/coach-maho.jpg" },
  { name: "Coach Sash", role: "Training & Muscle", img: "/media/coach-sash.jpg" },
];

export function Coaches() {
  return (
    <div className="mt-16">
      <p className="text-sm font-semibold uppercase tracking-widest text-yellow-400 mb-6">Your Coaches</p>
      <div className="grid grid-cols-2 gap-4 sm:gap-6 max-w-2xl mx-auto">
        {COACHES.map((c) => (
          <figure key={c.name} className="glass-card p-1.5 rounded-xl border-yellow-500/30 overflow-hidden">
            <div className="aspect-[4/5] rounded-lg overflow-hidden bg-black">
              <img src={c.img} alt={c.name} loading="lazy" className="w-full h-full object-cover" />
            </div>
            <figcaption className="py-3">
              <p className="font-bold text-white">{c.name}</p>
              <p className="text-yellow-400 text-sm">{c.role}</p>
            </figcaption>
          </figure>
        ))}
      </div>
    </div>
  );
}
