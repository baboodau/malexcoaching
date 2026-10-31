import { useState } from "react";

// Real client wins pulled from @mahosfitness Instagram highlights
const WINS: [string, "fat" | "muscle" | "msg"][] = [
  ["w001", "fat"],
  ["w037", "muscle"],
  ["w064", "msg"],
  ["w002", "fat"],
  ["w038", "muscle"],
  ["w065", "msg"],
  ["w003", "fat"],
  ["w039", "muscle"],
  ["w066", "msg"],
  ["w004", "fat"],
  ["w040", "muscle"],
  ["w067", "msg"],
  ["w005", "fat"],
  ["w041", "muscle"],
  ["w068", "msg"],
  ["w006", "fat"],
  ["w042", "muscle"],
  ["w069", "msg"],
  ["w007", "fat"],
  ["w043", "muscle"],
  ["w070", "msg"],
  ["w008", "fat"],
  ["w044", "muscle"],
  ["w071", "msg"],
  ["w009", "fat"],
  ["w045", "muscle"],
  ["w072", "msg"],
  ["w010", "fat"],
  ["w046", "muscle"],
  ["w073", "msg"],
  ["w011", "fat"],
  ["w047", "muscle"],
  ["w074", "msg"],
  ["w012", "fat"],
  ["w048", "muscle"],
  ["w075", "msg"],
  ["w013", "fat"],
  ["w049", "muscle"],
  ["w076", "msg"],
  ["w014", "fat"],
  ["w050", "muscle"],
  ["w077", "msg"],
  ["w015", "fat"],
  ["w051", "muscle"],
  ["w078", "msg"],
  ["w016", "fat"],
  ["w052", "muscle"],
  ["w079", "msg"],
  ["w017", "fat"],
  ["w053", "muscle"],
  ["w080", "msg"],
  ["w018", "fat"],
  ["w054", "muscle"],
  ["w081", "msg"],
  ["w019", "fat"],
  ["w055", "muscle"],
  ["w082", "msg"],
  ["w020", "fat"],
  ["w056", "muscle"],
  ["w083", "msg"],
  ["w021", "fat"],
  ["w057", "muscle"],
  ["w084", "msg"],
  ["w022", "fat"],
  ["w058", "muscle"],
  ["w085", "msg"],
  ["w023", "fat"],
  ["w059", "muscle"],
  ["w086", "msg"],
  ["w024", "fat"],
  ["w060", "muscle"],
  ["w087", "msg"],
  ["w025", "fat"],
  ["w061", "muscle"],
  ["w088", "msg"],
  ["w026", "fat"],
  ["w062", "muscle"],
  ["w089", "msg"],
  ["w027", "fat"],
  ["w063", "muscle"],
  ["w090", "msg"],
  ["w028", "fat"],
  ["w114", "muscle"],
  ["w091", "msg"],
  ["w029", "fat"],
  ["w115", "muscle"],
  ["w092", "msg"],
  ["w030", "fat"],
  ["w116", "muscle"],
  ["w093", "msg"],
  ["w031", "fat"],
  ["w117", "muscle"],
  ["w094", "msg"],
  ["w032", "fat"],
  ["w118", "muscle"],
  ["w095", "msg"],
  ["w033", "fat"],
  ["w119", "muscle"],
  ["w096", "msg"],
  ["w034", "fat"],
  ["w120", "muscle"],
  ["w097", "msg"],
  ["w035", "fat"],
  ["w121", "muscle"],
  ["w098", "msg"],
  ["w036", "fat"],
  ["w122", "muscle"],
  ["w125", "msg"],
  ["w099", "fat"],
  ["w123", "muscle"],
  ["w126", "msg"],
  ["w100", "fat"],
  ["w124", "muscle"],
  ["w127", "msg"],
  ["w101", "fat"],
  ["w128", "msg"],
  ["w102", "fat"],
  ["w129", "msg"],
  ["w103", "fat"],
  ["w130", "msg"],
  ["w104", "fat"],
  ["w131", "msg"],
  ["w105", "fat"],
  ["w132", "msg"],
  ["w106", "fat"],
  ["w133", "msg"],
  ["w107", "fat"],
  ["w134", "msg"],
  ["w108", "fat"],
  ["w135", "msg"],
  ["w109", "fat"],
  ["w136", "msg"],
  ["w110", "fat"],
  ["w137", "msg"],
  ["w111", "fat"],
  ["w138", "msg"],
  ["w112", "fat"],
  ["w139", "msg"],
  ["w113", "fat"],
  ["w140", "msg"],
  ["w141", "msg"],
  ["w142", "msg"],
  ["w143", "msg"],
  ["w144", "msg"],
  ["w145", "msg"],
  ["w146", "msg"],
  ["w147", "msg"],
  ["w148", "msg"],
  ["w149", "msg"],
  ["w150", "msg"],
  ["w151", "msg"],
  ["w152", "msg"],
  ["w153", "msg"],
  ["w154", "msg"],
  ["w155", "msg"],
  ["w156", "msg"],
  ["w157", "msg"],
  ["w158", "msg"],
  ["w159", "msg"],
];

const TABS = [
  { key: "all", label: "All Wins" },
  { key: "fat", label: "Weight Loss" },
  { key: "muscle", label: "Muscle Gain" },
  { key: "msg", label: "Client Messages" },
] as const;

type Key = (typeof TABS)[number]["key"];

export function ClientWins({ initial = 16 }: { initial?: number }) {
  const [tab, setTab] = useState<Key>("all");
  const [count, setCount] = useState(initial);
  const [open, setOpen] = useState<string | null>(null);
  const list = WINS.filter(([, t]) => tab === "all" || t === tab);
  const visible = list.slice(0, count);

  return (
    <div className="w-full">
      <div className="text-center mb-10">
        <p className="text-sm font-semibold uppercase tracking-[0.25em] text-yellow-400 mb-3">Client Wins</p>
        <h2 className="text-4xl md:text-5xl font-bold">The Wins Keep Coming</h2>
        <p className="text-gray-400 mt-4">Weigh-ins, strength PRs and messages from clients, straight from our DMs.</p>
      </div>

      <div className="flex flex-wrap justify-center gap-3 mb-10">
        {TABS.map((t) => (
          <button
            key={t.key}
            onClick={() => {
              setTab(t.key);
              setCount(initial);
            }}
            className={`px-5 py-2 rounded-full text-sm font-semibold border transition-all duration-300 ${
              tab === t.key
                ? "bg-gradient-to-r from-yellow-300 to-amber-500 text-black border-transparent shadow-md shadow-yellow-500/30"
                : "border-yellow-500/30 text-gray-300 hover:border-yellow-400 hover:text-yellow-300"
            }`}
          >
            {t.label}
          </button>
        ))}
      </div>

      <div className="columns-2 md:columns-3 lg:columns-4 gap-4 [column-fill:_balance]">
        {visible.map(([f]) => (
          <button
            key={f}
            onClick={() => setOpen(f)}
            className="group mb-4 block w-full break-inside-avoid rounded-2xl p-[1px] bg-gradient-to-b from-yellow-400/60 via-yellow-600/25 to-yellow-900/10 shadow-lg shadow-yellow-900/20 transition-all duration-500 ease-out hover:-translate-y-1 hover:shadow-yellow-500/25"
          >
            <div className="rounded-2xl overflow-hidden bg-[#0a0806]">
              <img
                src={`/media/win-${f.slice(1)}.jpg`}
                alt="Client win"
                loading="lazy"
                className="w-full h-auto transition-transform duration-700 ease-out group-hover:scale-[1.02]"
              />
            </div>
          </button>
        ))}
      </div>

      {count < list.length && (
        <div className="flex justify-center mt-10">
          <button
            onClick={() => setCount((c) => c + 16)}
            className="px-8 py-3 rounded-full border border-yellow-500/40 text-yellow-300 font-semibold hover:bg-yellow-500/10 transition-colors duration-300"
          >
            Show more wins ({list.length - count} more)
          </button>
        </div>
      )}

      {open && (
        <div
          onClick={() => setOpen(null)}
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-sm flex items-center justify-center p-4 cursor-zoom-out"
        >
          <img
            src={`/media/win-${open.slice(1)}.jpg`}
            alt="Client win"
            className="max-h-[92vh] max-w-full rounded-2xl border border-yellow-500/40 shadow-2xl shadow-yellow-900/40"
          />
        </div>
      )}
    </div>
  );
}
