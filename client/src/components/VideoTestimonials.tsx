import { useState } from "react";
import { Play } from "lucide-react";

// Video testimonials from the @mahosfitness "proof" highlight
const TESTIMONIALS = [
  { id: "t01", name: "Shamir", result: "Burned belly fat, built muscle" },
  { id: "t02", name: "Anik", result: "-10kg of belly fat in 9 weeks" },
  { id: "t03", name: "Hassan", result: "Lost belly fat in 6 weeks" },
  { id: "t04", name: "Elijah", result: "Skinny fat to muscular" },
  { id: "t05", name: "Adrian", result: "Up 5kg of muscle" },
  { id: "t06", name: "Benjamin", result: "Leaner, stronger, more confident" },
  { id: "t07", name: "Palmer", result: "Skinny fat to toned in 90 days" },
  { id: "t08", name: "Justin", result: "-7lbs in 5 weeks" },
  { id: "t09", name: "Ryan", result: "-10lbs in 2 months" },
  { id: "t10", name: "Leo", result: "+5kg of muscle" },
  { id: "t11", name: "Andrey", result: "1 month under Malex" },
  { id: "t12", name: "Aariz", result: "Body recomp in 2 months" },
  { id: "t13", name: "Arham", result: "Bulked up serious mass" },
  { id: "t14", name: "Adii", result: "Got the 6 pack" },
  { id: "t15", name: "Hüseyin", result: "-12kg in 90 days" },
  { id: "t16", name: "Usman", result: "Back transformation" },
  { id: "t17", name: "Mark", result: "65 years old, no more joint pain" },
  { id: "t18", name: "Sam", result: "19% to 12% body fat" },
  { id: "t19", name: "Eric", result: "Built muscle, got 6 pack abs" },
  { id: "t20", name: "Zach", result: "V-taper in 2-3 months" },
  { id: "t21", name: "Paul", result: "Lost the beer belly" },
  { id: "t22", name: "Lamar", result: "Six pack before summer" },
  { id: "t23", name: "Richard", result: "58 years old, -3kg in 5 weeks" },
];

export function VideoTestimonials({ initial = 8 }: { initial?: number }) {
  const [extra, setExtra] = useState(0);
  const [playing, setPlaying] = useState<string | null>(null);
  const base = (TESTIMONIALS.length - initial) % 2 ? initial - 1 : initial;
  const count = Math.min(TESTIMONIALS.length, base + extra);
  const visible = TESTIMONIALS.slice(0, count);

  return (
    <div className="w-full">
      <div className="text-center mb-10">
        <p className="text-sm font-semibold uppercase tracking-[0.25em] text-yellow-400 mb-3">Video Testimonials</p>
        <h2 className="text-4xl md:text-5xl font-bold">Hear It From Them</h2>
        <p className="text-gray-400 mt-4">Real clients, on camera, in their own words.</p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
        {visible.map((t) => (
          <figure
            key={t.id}
            className="group rounded-2xl p-[1px] bg-gradient-to-b from-yellow-400/60 via-yellow-600/25 to-yellow-900/10 shadow-lg shadow-yellow-900/20 transition-all duration-500 ease-out hover:-translate-y-1 hover:shadow-yellow-500/25"
          >
            <div className="rounded-2xl overflow-hidden bg-[#0a0806]">
              <div className="relative aspect-[9/16] bg-black">
                {playing === t.id ? (
                  <video
                    src={`/media/${t.id}.mp4`}
                    poster={`/media/${t.id}.jpg`}
                    controls
                    autoPlay
                    playsInline
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <button onClick={() => setPlaying(t.id)} className="absolute inset-0 w-full h-full" aria-label={`Play ${t.name}'s testimonial`}>
                    <img src={`/media/${t.id}.jpg`} alt={`${t.name} testimonial`} loading="lazy" className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]" />
                    <span className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
                    <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-yellow-300 to-amber-500 shadow-lg shadow-yellow-500/40 transition-transform duration-300 group-hover:scale-110">
                      <Play className="w-7 h-7 text-black fill-black ml-1" />
                    </span>
                  </button>
                )}
              </div>
              <figcaption className="px-3 pt-3 pb-4 text-center">
                <p className="font-bold text-white tracking-tight">{t.name}</p>
                <p className="mt-0.5 font-semibold text-xs md:text-sm bg-gradient-to-r from-yellow-300 via-yellow-400 to-amber-500 bg-clip-text text-transparent">{t.result}</p>
              </figcaption>
            </div>
          </figure>
        ))}
      </div>

      {count < TESTIMONIALS.length && (
        <div className="flex justify-center mt-10">
          <button
            onClick={() => setExtra((e) => e + 8)}
            className="px-8 py-3 rounded-full border border-yellow-500/40 text-yellow-300 font-semibold hover:bg-yellow-500/10 transition-colors duration-300"
          >
            Show more ({TESTIMONIALS.length - count})
          </button>
        </div>
      )}
    </div>
  );
}
