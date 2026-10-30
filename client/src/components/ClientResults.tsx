import { useState } from "react";

type Result = {
  name: string;
  result: string;
  type: "fat" | "muscle";
  cols: number;
  imgs: string[];
};

// Client transformations (Malex Miro board, Step 04 — The Proof).
// Every photo is its own equal-size box; each card's photo area is square.
const RESULTS: Result[] = [
  { name: "Paul", result: "3 months -11kg/24lbs", type: "fat", cols: 2, imgs: ["/media/c01-1.jpg", "/media/c01-2.jpg"] },
  { name: "Isaac", result: "4 months -15kg/33lbs", type: "fat", cols: 2, imgs: ["/media/c02-1.jpg", "/media/c02-2.jpg"] },
  { name: "Dave", result: "2 months -10kg/22lbs", type: "fat", cols: 2, imgs: ["/media/c03-1.jpg", "/media/c03-2.jpg", "/media/c03-3.jpg", "/media/c03-4.jpg"] },
  { name: "Jacob", result: "6 months -21kg/46lbs", type: "fat", cols: 2, imgs: ["/media/c04-1.jpg", "/media/c04-2.jpg"] },
  { name: "Jack", result: "2 months -6kg/13lbs", type: "fat", cols: 2, imgs: ["/media/c05-1.jpg", "/media/c05-2.jpg"] },
  { name: "Mark", result: "-20kg/44lbs", type: "fat", cols: 2, imgs: ["/media/c06-1.jpg", "/media/c06-2.jpg"] },
  { name: "Ryan", result: "4 months -20kg/44lbs", type: "fat", cols: 2, imgs: ["/media/c07-1.jpg", "/media/c07-2.jpg"] },
  { name: "Andrey", result: "2 months -7kg/15lbs", type: "fat", cols: 2, imgs: ["/media/c08-1.jpg", "/media/c08-2.jpg"] },
  { name: "Isaiah", result: "2 months -6kg/13lbs", type: "fat", cols: 2, imgs: ["/media/c09-1.jpg", "/media/c09-2.jpg"] },
  { name: "Daniel", result: "4 months -20kg/44lbs", type: "fat", cols: 2, imgs: ["/media/c10-1.jpg", "/media/c10-2.jpg"] },
  { name: "Justin", result: "6 months -16kg/35lbs", type: "fat", cols: 2, imgs: ["/media/c11-1.jpg", "/media/c11-2.jpg", "/media/c11-3.jpg", "/media/c11-4.jpg"] },
  { name: "Darsh", result: "3 months -13kg/28lbs + abs", type: "fat", cols: 2, imgs: ["/media/c12-1.jpg", "/media/c12-2.jpg"] },
  { name: "Benjamin", result: "2 months -7kg/15lbs", type: "fat", cols: 2, imgs: ["/media/c13-1.jpg", "/media/c13-2.jpg"] },
  { name: "Mark", result: "4 months -15kg/33lbs", type: "fat", cols: 2, imgs: ["/media/c14-1.jpg", "/media/c14-2.jpg"] },
  { name: "Samuel", result: "3 months -12kg/24lbs", type: "fat", cols: 2, imgs: ["/media/c15-1.jpg", "/media/c15-2.jpg"] },
  { name: "James", result: "6 months -20kg/44lbs", type: "fat", cols: 2, imgs: ["/media/c16-1.jpg", "/media/c16-2.jpg"] },
  { name: "Mo", result: "3 months -19kg/42lbs", type: "fat", cols: 4, imgs: ["/media/c17-1.jpg", "/media/c17-2.jpg", "/media/c17-3.jpg", "/media/c17-4.jpg"] },
  { name: "Ryan", result: "8 months -30kg/66lbs", type: "fat", cols: 2, imgs: ["/media/c00-1.jpg", "/media/c00-2.jpg"] },
  { name: "David", result: "2 months +6kg/13lbs + abs", type: "muscle", cols: 2, imgs: ["/media/c18-1.jpg", "/media/c18-2.jpg"] },
  { name: "Alexander", result: "6 months +16kg/35lbs + abs", type: "muscle", cols: 1, imgs: ["/media/c19-1.jpg", "/media/c19-2.jpg"] },
  { name: "Hamza", result: "4 months +9kg/20lbs + abs", type: "muscle", cols: 2, imgs: ["/media/c20-1.jpg", "/media/c20-2.jpg"] },
  { name: "Thomas", result: "3 months +9kg/20lbs", type: "muscle", cols: 4, imgs: ["/media/c21-1.jpg", "/media/c21-2.jpg", "/media/c21-3.jpg", "/media/c21-4.jpg"] },
  { name: "Eric", result: "6 months +15kg/30lbs + abs", type: "muscle", cols: 2, imgs: ["/media/c22-1.jpg", "/media/c22-2.jpg"] },
  { name: "White", result: "3 months +10kg/22lbs", type: "muscle", cols: 2, imgs: ["/media/c23-1.jpg", "/media/c23-2.jpg"] },
  { name: "Lamar", result: "3 months (got abs)", type: "muscle", cols: 2, imgs: ["/media/c24-1.jpg", "/media/c24-2.jpg"] },
  { name: "Arham", result: "6 months +15kg/33lbs", type: "muscle", cols: 1, imgs: ["/media/c25-1.jpg", "/media/c25-2.jpg"] },
  { name: "Luke", result: "3 months +9kg/19lbs + abs", type: "muscle", cols: 2, imgs: ["/media/c26-1.jpg", "/media/c26-2.jpg"] },
  { name: "Omar", result: "6 months +18kg/39lbs + abs", type: "muscle", cols: 2, imgs: ["/media/c27-1.jpg", "/media/c27-2.jpg"] },
  { name: "Chris", result: "+10kg/20lbs + abs", type: "muscle", cols: 3, imgs: ["/media/c28-1.jpg", "/media/c28-2.jpg", "/media/c28-3.jpg", "/media/c28-4.jpg", "/media/c28-5.jpg", "/media/c28-6.jpg"] },
  { name: "Adam", result: "4 months +14kg/30lbs + abs", type: "muscle", cols: 2, imgs: ["/media/c29-1.jpg", "/media/c29-2.jpg"] },
  { name: "Bazil", result: "2 months +6kg/13lbs", type: "muscle", cols: 3, imgs: ["/media/c30-1.jpg", "/media/c30-2.jpg", "/media/c30-3.jpg", "/media/c30-4.jpg", "/media/c30-5.jpg", "/media/c30-6.jpg"] },
  { name: "Elias", result: "2 months +6kg/13lbs", type: "muscle", cols: 2, imgs: ["/media/c31-1.jpg", "/media/c31-2.jpg", "/media/c31-3.jpg", "/media/c31-4.jpg"] },
  { name: "Abraham", result: "3 months +12kg/24lbs + abs", type: "muscle", cols: 2, imgs: ["/media/c32-1.jpg", "/media/c32-2.jpg", "/media/c32-3.jpg", "/media/c32-4.jpg"] },
  { name: "Fice", result: "12 months +23kg/50lbs + abs", type: "muscle", cols: 2, imgs: ["/media/c33-1.jpg", "/media/c33-2.jpg"] },
  { name: "Hakeem", result: "6 months +17kg/37lbs got abs", type: "muscle", cols: 2, imgs: ["/media/c34-1.jpg", "/media/c34-2.jpg"] },
  { name: "Arham", result: "4 months +9kg/19lbs", type: "muscle", cols: 2, imgs: ["/media/c35-1.jpg", "/media/c35-2.jpg"] },
  { name: "Justin", result: "3 months +10kg/20lbs + abs", type: "muscle", cols: 2, imgs: ["/media/c36-1.jpg", "/media/c36-2.jpg", "/media/c36-3.jpg", "/media/c36-4.jpg"] },
  { name: "Carlos", result: "2 months +7kg/15lbs + abs", type: "muscle", cols: 2, imgs: ["/media/c37-1.jpg", "/media/c37-2.jpg"] },
  { name: "Ryan", result: "4 months +14kg/31lbs", type: "muscle", cols: 2, imgs: ["/media/c38-1.jpg", "/media/c38-2.jpg"] },
  { name: "Ciro", result: "3 months +9kg/19lbs + abs", type: "muscle", cols: 2, imgs: ["/media/c39-1.jpg", "/media/c39-2.jpg"] },
];

const FILTERS = [
  { key: "all", label: "All Results" },
  { key: "fat", label: "Fat Loss" },
  { key: "muscle", label: "Muscle + Abs" },
] as const;

type Props = { initial?: number; heading?: boolean };

export function ClientResults({ initial = 12, heading = true }: Props) {
  const [filter, setFilter] = useState<"all" | "fat" | "muscle">("all");
  const [showAll, setShowAll] = useState(false);
  const list = RESULTS.filter((r) => filter === "all" || r.type === filter);
  const visible = showAll ? list : list.slice(0, initial);

  return (
    <div className="w-full">
      {heading && (
        <div className="text-center mb-10">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-yellow-400 mb-3">Client Results</p>
          <h2 className="text-4xl md:text-5xl font-bold">200+ Men Transformed</h2>
          <p className="text-gray-400 mt-4">Real clients. Real before and afters. No stock photos.</p>
        </div>
      )}

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
                : "border-yellow-500/30 text-gray-300 hover:border-yellow-400 hover:text-yellow-300"
            }`}
          >
            {f.label}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {visible.map((r) => (
          <figure
            key={r.name + r.result}
            className="rounded-2xl border border-yellow-500/30 bg-gray-950 overflow-hidden hover:border-yellow-400/70 transition-colors"
          >
            <div
              className="aspect-square grid gap-1 bg-black p-1"
              style={{ gridTemplateColumns: `repeat(${r.cols}, minmax(0, 1fr))` }}
            >
              {r.imgs.map((src, i) => (
                <img
                  key={src}
                  src={src}
                  alt={`${r.name} transformation photo ${i + 1}`}
                  loading="lazy"
                  className="w-full h-full object-contain rounded-md bg-black"
                />
              ))}
            </div>
            <figcaption className="px-4 py-4 text-center">
              <p className="font-bold text-white text-lg">{r.name}</p>
              <p className="text-yellow-400 font-semibold text-sm">{r.result}</p>
            </figcaption>
          </figure>
        ))}
      </div>

      {list.length > initial && (
        <div className="flex justify-center mt-10">
          <button
            onClick={() => setShowAll(!showAll)}
            className="px-8 py-3 rounded-xl border border-yellow-400/50 text-yellow-400 font-semibold hover:bg-yellow-400/10 transition-colors"
          >
            {showAll ? "Show less" : `See all ${list.length} transformations`}
          </button>
        </div>
      )}
    </div>
  );
}
