import { useState } from "react";

type Result = { name: string; result: string; type: "fat" | "muscle"; img: string };

// Client transformations (from the Malex Miro board, Step 04 — The Proof)
const RESULTS: Result[] = [
  { name: "Ryan", result: "8 months -30kg/66lbs", type: "fat", img: "/media/r-00.jpg" },
  { name: "Paul", result: "3 months -11kg/24lbs", type: "fat", img: "/media/r-01.jpg" },
  { name: "Isaac", result: "4 months -15kg/33lbs", type: "fat", img: "/media/r-02.jpg" },
  { name: "Dave", result: "2 months -10kg/22lbs", type: "fat", img: "/media/r-03.jpg" },
  { name: "Jacob", result: "6 months -21kg/46lbs", type: "fat", img: "/media/r-04.jpg" },
  { name: "Jack", result: "2 months -6kg/13lbs", type: "fat", img: "/media/r-05.jpg" },
  { name: "Mark", result: "-20kg/44lbs", type: "fat", img: "/media/r-06.jpg" },
  { name: "Ryan", result: "4 months -20kg/44lbs", type: "fat", img: "/media/r-07.jpg" },
  { name: "Andrey", result: "2 months -7kg/15lbs", type: "fat", img: "/media/r-08.jpg" },
  { name: "Isaiah", result: "2 months -6kg/13lbs", type: "fat", img: "/media/r-09.jpg" },
  { name: "Daniel", result: "4 months -20kg/44lbs", type: "fat", img: "/media/r-10.jpg" },
  { name: "Justin", result: "6 months -16kg/35lbs", type: "fat", img: "/media/r-11.jpg" },
  { name: "Darsh", result: "3 months -13kg/28lbs + abs", type: "fat", img: "/media/r-12.jpg" },
  { name: "Benjamin", result: "2 months -7kg/15lbs", type: "fat", img: "/media/r-13.jpg" },
  { name: "Mark", result: "4 months -15kg/33lbs", type: "fat", img: "/media/r-14.jpg" },
  { name: "Samuel", result: "3 months -12kg/24lbs", type: "fat", img: "/media/r-15.jpg" },
  { name: "James", result: "6 months -20kg/44lbs", type: "fat", img: "/media/r-16.jpg" },
  { name: "Mo", result: "3 months -19kg/42lbs", type: "fat", img: "/media/r-17.jpg" },
  { name: "David", result: "2 months +6kg/13lbs + abs", type: "muscle", img: "/media/r-18.jpg" },
  { name: "Alexander", result: "6 months +16kg/35lbs + abs", type: "muscle", img: "/media/r-19.jpg" },
  { name: "Hamza", result: "4 months +9kg/20lbs + abs", type: "muscle", img: "/media/r-20.jpg" },
  { name: "Thomas", result: "3 months +9kg/20lbs", type: "muscle", img: "/media/r-21.jpg" },
  { name: "Eric", result: "6 months +15kg/30lbs + abs", type: "muscle", img: "/media/r-22.jpg" },
  { name: "White", result: "3 months +10kg/22lbs", type: "muscle", img: "/media/r-23.jpg" },
  { name: "Lamar", result: "3 months (got abs)", type: "muscle", img: "/media/r-24.jpg" },
  { name: "Arham", result: "6 months +15kg/33lbs", type: "muscle", img: "/media/r-25.jpg" },
  { name: "Luke", result: "3 months +9kg/19lbs + abs", type: "muscle", img: "/media/r-26.jpg" },
  { name: "Omar", result: "6 months +18kg/39lbs + abs", type: "muscle", img: "/media/r-27.jpg" },
  { name: "Chris", result: "+10kg/20lbs + abs", type: "muscle", img: "/media/r-28.jpg" },
  { name: "Adam", result: "4 months +14kg/30lbs + abs", type: "muscle", img: "/media/r-29.jpg" },
  { name: "Bazil", result: "2 months +6kg/13lbs", type: "muscle", img: "/media/r-30.jpg" },
  { name: "Elias", result: "2 months +6kg/13lbs", type: "muscle", img: "/media/r-31.jpg" },
  { name: "Abraham", result: "3 months +12kg/24lbs + abs", type: "muscle", img: "/media/r-32.jpg" },
  { name: "Fice", result: "12 months +23kg/50lbs + abs", type: "muscle", img: "/media/r-33.jpg" },
  { name: "Hakeem", result: "6 months +17kg/37lbs got abs", type: "muscle", img: "/media/r-34.jpg" },
  { name: "Arham", result: "4 months +9kg/19lbs", type: "muscle", img: "/media/r-35.jpg" },
  { name: "Justin", result: "3 months +10kg/20lbs + abs", type: "muscle", img: "/media/r-36.jpg" },
  { name: "Carlos", result: "2 months +7kg/15lbs + abs", type: "muscle", img: "/media/r-37.jpg" },
  { name: "Ryan", result: "4 months +14kg/31lbs", type: "muscle", img: "/media/r-38.jpg" },
  { name: "Ciro", result: "3 months +9kg/19lbs + abs", type: "muscle", img: "/media/r-39.jpg" },
];

const FILTERS = [
  { key: "all", label: "All Results" },
  { key: "fat", label: "Fat Loss" },
  { key: "muscle", label: "Muscle + Abs" },
] as const;

const INITIAL = 12;

export function ClientResults() {
  const [filter, setFilter] = useState<"all" | "fat" | "muscle">("all");
  const [showAll, setShowAll] = useState(false);
  const list = RESULTS.filter((r) => filter === "all" || r.type === filter);
  const visible = showAll ? list : list.slice(0, INITIAL);

  return (
    <div>
      <div className="flex flex-wrap justify-center gap-3 mb-10">
        {FILTERS.map((f) => (
          <button
            key={f.key}
            onClick={() => {
              setFilter(f.key);
              setShowAll(false);
            }}
            className={`px-5 py-2 rounded-full text-sm font-semibold border transition-colors ${
              filter === f.key
                ? "bg-yellow-400 text-black border-yellow-400"
                : "border-yellow-500/40 text-yellow-400 hover:bg-yellow-400/10"
            }`}
          >
            {f.label}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-3 sm:gap-5">
        {visible.map((r) => (
          <figure
            key={r.img}
            className="glass-card p-1.5 rounded-xl border-yellow-500/30 hover:border-yellow-500/60 hover:shadow-lg hover:shadow-yellow-500/20 transition-all duration-300 overflow-hidden"
          >
            <div className="aspect-[4/3] bg-black rounded-lg overflow-hidden">
              <img src={r.img} alt={`${r.name} transformation: ${r.result}`} loading="lazy" className="w-full h-full object-contain" />
            </div>
            <figcaption className="px-2 py-3 text-center">
              <p className="font-bold text-white text-sm sm:text-base">{r.name}</p>
              <p className="text-yellow-400 text-xs sm:text-sm">{r.result}</p>
            </figcaption>
          </figure>
        ))}
      </div>

      {list.length > INITIAL && (
        <div className="text-center mt-10">
          <button
            onClick={() => setShowAll((v) => !v)}
            className="px-8 py-3 rounded-xl border border-yellow-400/50 text-yellow-400 font-semibold hover:bg-yellow-400/10 transition-colors"
          >
            {showAll ? "Show less" : `See all ${list.length} transformations`}
          </button>
        </div>
      )}
    </div>
  );
}
