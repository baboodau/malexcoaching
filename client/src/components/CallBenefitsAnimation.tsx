import { Check, Users, Zap, Target, Award } from "lucide-react";
import { useState, useEffect } from "react";

export function CallBenefitsAnimation() {
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    {
      title: "Personalized Breakdown",
      description: "A clear breakdown of your current problems, what is holding you back, and exactly how we are going to solve them.",
      icon: Target,
      color: "from-yellow-400 to-yellow-600",
      image: "/media/malex-call/malex-call-hq/wyg-call-1.jpg",
    },
    {
      title: "Full Walkthrough Of Our System",
      description: "A walkthrough of the personal system we have used to help 200+ clients build muscle, lose fat, and stay consistent.",
      icon: Zap,
      color: "from-yellow-400 to-yellow-600",
      image: "/media/malex-call/Gemini_Generated_Image_pshkwjpshkwjpshk.jpg",
      pos: "50% 46%",
    },
    {
      title: "Personalized Roadmap",
      description: "A custom roadmap showing you exactly how to achieve your fitness goal using a system that takes less than 3 hours per week.",
      icon: Award,
      color: "from-yellow-400 to-yellow-600",
      image: "/media/malex-call/wyg-call-3.jpg",
    },
    {
      title: "Clear Next Steps",
      description: "A simple action plan so you know exactly what to do after the call.",
      icon: Check,
      color: "from-yellow-400 to-yellow-600",
      image: "/media/malex-call/wyg-call-4.jpg",
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % steps.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [steps.length]);

  return (
    <div className="w-full max-w-5xl mx-auto">
      <div className="rounded-3xl p-[1px] bg-gradient-to-b from-yellow-400/60 via-yellow-600/25 to-yellow-900/10 shadow-xl shadow-yellow-900/20">
        <div className="rounded-3xl overflow-hidden relative bg-gradient-to-b from-[#17120a] to-[#0a0806]">
          {/* Content Area */}
          <div className="relative z-10 p-8 md:p-12 min-h-[500px]">
            <div className="flex flex-col lg:flex-row gap-8">
              {/* Left: Steps List */}
              <div className="flex-1 space-y-3">
                {steps.map((step, index) => {
                  const Icon = step.icon;
                  const isActive = index === activeStep;

                  return (
                    <button
                      key={index}
                      onClick={() => setActiveStep(index)}
                      className={`w-full text-left p-4 rounded-2xl transition-all duration-300 flex items-center gap-3 group ${
                        isActive
                          ? "bg-gradient-to-r from-yellow-500/30 to-yellow-600/20 border border-yellow-500/50 shadow-lg shadow-yellow-500/20"
                          : "bg-white/[0.03] border border-yellow-500/15 hover:bg-yellow-500/[0.06] hover:border-yellow-500/30"
                      }`}
                    >
                      <div
                        className={`w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 transition-all ${
                          isActive
                            ? "bg-gradient-to-br from-yellow-400 to-yellow-600 shadow-lg shadow-yellow-600/50"
                            : "bg-[#1f1a10] border border-yellow-500/20 group-hover:bg-[#2a2213]"
                        }`}
                      >
                        <Icon className={`w-5 h-5 ${isActive ? "text-black" : "text-yellow-400/80"}`} />
                      </div>
                      <div className="min-w-0 flex-1">
                        <p
                          className={`text-sm font-semibold truncate transition-colors ${
                            isActive ? "text-yellow-300" : "text-gray-300"
                          }`}
                        >
                          {step.title}
                        </p>
                        <p className="text-xs text-gray-500 hidden md:block">Step {index + 1}</p>
                      </div>
                      {isActive && (
                        <div className="w-2 h-2 rounded-full bg-yellow-400 animate-pulse"></div>
                      )}
                    </button>
                  );
                })}
              </div>

              {/* Right: Content Display with Image */}
              <div className="flex-1 flex flex-col justify-center">
                <div className="space-y-6 animate-fade-in">
                  {/* Image Display */}
                  <div className="w-full rounded-2xl p-[1px] bg-gradient-to-b from-yellow-400/60 via-yellow-600/25 to-yellow-900/10 shadow-lg shadow-yellow-900/30">
                    <div className="rounded-2xl overflow-hidden bg-[#0a0806] aspect-[16/10]">
                    <img 
                      src={steps[activeStep].image} 
                      alt={steps[activeStep].title}
                      className="w-full h-full object-cover"
                      style={{ transform: `scale(${(steps[activeStep] as { zoom?: number }).zoom ?? 1})`, objectPosition: (steps[activeStep] as { pos?: string }).pos ?? "50% 50%" }}
                    />
                    </div>
                  </div>

                  {/* Text Content */}
                  <div className="space-y-2">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-yellow-400 to-yellow-600 flex items-center justify-center shadow-lg shadow-yellow-600/50">
                        {(() => {
                          const Icon = steps[activeStep].icon;
                          return <Icon className="w-6 h-6 text-black" />;
                        })()}
                      </div>
                      <h3 className="text-2xl font-bold text-yellow-300">{steps[activeStep].title}</h3>
                    </div>
                    <p className="text-gray-300 leading-relaxed text-lg">
                      {steps[activeStep].description}
                    </p>
                  </div>

                  {/* Progress indicator */}
                  <div className="space-y-2">
                    <div className="flex items-center justify-between text-xs text-gray-500">
                      <span>Progress</span>
                      <span>{activeStep + 1} of {steps.length}</span>
                    </div>
                    <div className="h-2 bg-yellow-900/30 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-full transition-all duration-500"
                        style={{ width: `${((activeStep + 1) / steps.length) * 100}%` }}
                      ></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Manual Navigation */}
      <div className="relative z-20 flex justify-center gap-2 mt-6">
        {steps.map((_, index) => (
          <button
            key={index}
            onClick={() => setActiveStep(index)}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              index === activeStep
                ? "bg-gradient-to-r from-yellow-400 to-yellow-600 w-8"
                : "bg-yellow-900/40 hover:bg-yellow-700/50"
            }`}
          ></button>
        ))}
      </div>
    </div>
  );
}
