import { useState } from "react";

type Result = {
  name: string;
  result: string;
  type: "fat" | "muscle";
  img: string;
};

// Client transformations (Malex Miro board, Step 04 — The Proof).
// Every photo is its own equal-size box; each card's photo area is square.
const RESULTS: Result[] = [
  { name: "Paul", result: "3 months -11kg/24lbs", type: "fat", img: "/media/res-c01.jpg" },
  { name: "Isaac", result: "4 months -15kg/33lbs", type: "fat", img: "/media/res-c02.jpg" },
  { name: "Dave", result: "2 months -10kg/22lbs", type: "fat", img: "/media/res-c03.jpg" },
  { name: "Jacob", result: "6 months -21kg/46lbs", type: "fat", img: "/media/res-c04.jpg" },
  { name: "Jack", result: "2 months -6kg/13lbs", type: "fat", img: "/media/res-c05.jpg" },
  { name: "Mark", result: "-20kg/44lbs", type: "fat", img: "/media/res-c06.jpg" },
  { name: "Ryan", result: "4 months -20kg/44lbs", type: "fat", img: "/media/res-c07.jpg" },
  { name: "Andrey", result: "2 months -7kg/15lbs", type: "fat", img: "/media/res-c08.jpg" },
  { name: "Isaiah", result: "2 months -6kg/13lbs", type: "fat", img: "/media/res-c09.jpg" },
  { name: "Daniel", result: "4 months -20kg/44lbs", type: "fat", img: "/media/res-c10.jpg" },
  { name: "Justin", result: "6 months -16kg/35lbs", type: "fat", img: "/media/res-c11.jpg" },
  { name: "Darsh", result: "3 months -13kg/28lbs + abs", type: "fat", img: "/media/res-c12.jpg" },
  { name: "Benjamin", result: "2 months -7kg/15lbs", type: "fat", img: "/media/res-c13.jpg" },
  { name: "Mark", result: "4 months -15kg/33lbs", type: "fat", img: "/media/res-c14.jpg" },
  { name: "Samuel", result: "3 months -12kg/24lbs", type: "fat", img: "/media/res-c15.jpg" },
  { name: "James", result: "6 months -20kg/44lbs", type: "fat", img: "/media/res-c16.jpg" },
  { name: "Mo", result: "3 months -19kg/42lbs", type: "fat", img: "/media/res-c17.jpg" },
  { name: "Ryan", result: "8 months -30kg/66lbs", type: "fat", img: "/media/res-c00.jpg" },
  { name: "David", result: "2 months +6kg/13lbs + abs", type: "muscle", img: "/media/res-c18.jpg" },
  { name: "Alexander", result: "6 months +16kg/35lbs + abs", type: "muscle", img: "/media/res-c19.jpg" },
  { name: "Hamza", result: "4 months +9kg/20lbs + abs", type: "muscle", img: "/media/res-c20.jpg" },
  { name: "Thomas", result: "3 months +9kg/20lbs", type: "muscle", img: "/media/res-c21.jpg" },
  { name: "Eric", result: "6 months +15kg/30lbs + abs", type: "muscle", img: "/media/res-c22.jpg" },
  { name: "White", result: "3 months +10kg/22lbs", type: "muscle", img: "/media/res-c23.jpg" },
  { name: "Lamar", result: "3 months (got abs)", type: "muscle", img: "/media/res-c24.jpg" },
  { name: "Arham", result: "6 months +15kg/33lbs", type: "muscle", img: "/media/res-c25.jpg" },
  { name: "Luke", result: "3 months +9kg/19lbs + abs", type: "muscle", img: "/media/res-c26.jpg" },
  { name: "Omar", result: "6 months +18kg/39lbs + abs", type: "muscle", img: "/media/res-c27.jpg" },
  { name: "Chris", result: "+10kg/20lbs + abs", type: "muscle", img: "/media/res-c28.jpg" },
  { name: "Adam", result: "4 months +14kg/30lbs + abs", type: "muscle", img: "/media/res-c29.jpg" },
  { name: "Bazil", result: "2 months +6kg/13lbs", type: "muscle", img: "/media/res-c30.jpg" },
  { name: "Elias", result: "2 months +6kg/13lbs", type: "muscle", img: "/media/res-c31.jpg" },
  { name: "Abraham", result: "3 months +12kg/24lbs + abs", type: "muscle", img: "/media/res-c32.jpg" },
  { name: "Fice", result: "12 months +23kg/50lbs + abs", type: "muscle", img: "/media/res-c33.jpg" },
  { name: "Hakeem", result: "6 months +17kg/37lbs got abs", type: "muscle", img: "/media/res-c34.jpg" },
  { name: "Arham", result: "4 months +9kg/19lbs", type: "muscle", img: "/media/res-c35.jpg" },
  { name: "Justin", result: "3 months +10kg/20lbs + abs", type: "muscle", img: "/media/res-c36.jpg" },
  { name: "Carlos", result: "2 months +7kg/15lbs + abs", type: "muscle", img: "/media/res-c37.jpg" },
  { name: "Ryan", result: "4 months +14kg/31lbs", type: "muscle", img: "/media/res-c38.jpg" },
  { name: "Ciro", result: "3 months +9kg/19lbs + abs", type: "muscle", img: "/media/res-c39.jpg" },
  { name: "Noah", result: "2 months +5kg/11lbs muscle", type: "muscle", img: "/media/res-n01.jpg" },
  { name: "Elagili", result: "1 month +3kg/7lbs muscle", type: "muscle", img: "/media/res-n02.jpg" },
  { name: "Ethan", result: "Back: no muscle to V-taper", type: "muscle", img: "/media/res-n03.jpg" },
  { name: "Hasan", result: "3 months -15kg/33lbs", type: "fat", img: "/media/res-n04.jpg" },
  { name: "Taffiq", result: "1 month -4kg/10lbs", type: "fat", img: "/media/res-n05.jpg" },
  { name: "Lucas", result: "Stronger + leaner", type: "muscle", img: "/media/res-n06.jpg" },
  { name: "Rock", result: "Chest transformation", type: "muscle", img: "/media/res-n07.jpg" },
  { name: "Mason", result: "Underweight to 6 pack", type: "muscle", img: "/media/res-n08.jpg" },
  { name: "Aaron", result: "-10lbs + abs forming", type: "fat", img: "/media/res-n09.jpg" },
  { name: "Michael", result: "Lost the belly, visible abs", type: "fat", img: "/media/res-n10.jpg" },
  { name: "Angelo", result: "Skinny fat to 6 pack", type: "muscle", img: "/media/res-n11.jpg" },
  { name: "Logan", result: "4 months, same mirror", type: "muscle", img: "/media/res-n12.jpg" },
  { name: "Liam", result: "12 weeks leaner", type: "fat", img: "/media/res-n13.jpg" },
  { name: "Owen", result: "6 weeks, abs secured", type: "muscle", img: "/media/res-n14.jpg" },
  { name: "Caleb", result: "Stuck & plateaued to muscular", type: "muscle", img: "/media/res-n15.jpg" },
  { name: "Nathan", result: "2 months arm growth", type: "muscle", img: "/media/res-n16.jpg" },
  { name: "Tyler", result: "Visible abs", type: "muscle", img: "/media/res-n17.jpg" },
  { name: "Kyle", result: "Abs in a few weeks", type: "muscle", img: "/media/res-n18.jpg" },
  { name: "Richie", result: "Lost the belly", type: "fat", img: "/media/res-n19.jpg" },
  { name: "Connor", result: "9 weeks, abs", type: "muscle", img: "/media/res-n20.jpg" },
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
            className={`px-5 py-2 rounded-full text-sm font-semibold border transition-all duration-300 ${
              filter === f.key
                ? "bg-gradient-to-r from-yellow-300 to-amber-500 text-black border-transparent shadow-md shadow-yellow-500/30"
                : "border-yellow-500/30 text-gray-300 hover:border-yellow-400 hover:text-yellow-300"
            }`}
          >
            {f.label}
          </button>
        ))}
      </div>

      <div className="columns-1 sm:columns-2 lg:columns-3 gap-6">
        {visible.map((r) => (
          <figure
            key={r.name + r.result}
            className="group mb-6 break-inside-avoid rounded-3xl p-[1px] bg-gradient-to-b from-yellow-400/60 via-yellow-600/25 to-yellow-900/10 shadow-lg shadow-yellow-900/20 transition-all duration-500 ease-out hover:-translate-y-1 hover:shadow-yellow-500/25"
          >
            <div className="rounded-3xl overflow-hidden bg-gradient-to-b from-[#17120a] to-[#0a0806]">
              <div className="overflow-hidden">
                <img
                  src={r.img}
                  alt={`${r.name} before and after`}
                  loading="lazy"
                  className="w-full h-auto block transition-transform duration-700 ease-out group-hover:scale-[1.02]"
                />
              </div>
              <figcaption className="px-4 pt-3 pb-5 text-center">
                <p className="font-bold text-white text-lg tracking-tight">{r.name}</p>
                <p className="mt-0.5 font-semibold text-sm bg-gradient-to-r from-yellow-300 via-yellow-400 to-amber-500 bg-clip-text text-transparent">
                  {r.result}
                </p>
              </figcaption>
            </div>
          </figure>
        ))}
      </div>

      {list.length > initial && (
        <div className="flex justify-center mt-10">
          <button
            onClick={() => setShowAll(!showAll)}
            className="px-8 py-3 rounded-full border border-yellow-400/50 text-yellow-300 font-semibold hover:bg-yellow-400/10 transition-all duration-300"
          >
            {showAll ? "Show less" : `See all ${list.length} transformations`}
          </button>
        </div>
      )}
    </div>
  );
}
