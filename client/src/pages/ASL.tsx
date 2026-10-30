import { useLocation } from "wouter";
import { Check, ChevronDown, Calendar, ArrowRight } from "lucide-react";
import { useState, useEffect } from "react";
import { Header } from "@/components/Header";

/**
 * ASL (After Sales Letter) - Post-Booking Page
 * 
 * Design System: Cinematic Luxury Minimalism
 * - Pure black backgrounds with deep charcoal cards
 * - Warm gold (#d4af37) accents for CTAs and highlights
 * - Bold Montserrat typography with generous spacing
 * - Liquid glass buttons with subtle glow effects
 * - Smooth scroll animations and hover interactions
 * 
 * Purpose: Confirm the call, increase show-up rate, build trust, and pre-sell the coaching program.
 */

interface ObjectionVideo {
  id: number;
  title: string;
  description: string;
  videoUrl: string;
}

const objectionVideos: ObjectionVideo[] = [
  {
    id: 1,
    title: "How fast will I see results?",
    description: "Realistic timelines for seeing transformation results.",
    videoUrl: "https://youtu.be/HR6PKD-JDWs",
  },
  {
    id: 2,
    title: "What are your client case studies?",
    description: "Real results from our clients' transformations.",
    videoUrl: "https://youtu.be/EdqsKshWgE4",
  },
  {
    id: 3,
    title: "What does the process look like?",
    description: "A detailed walkthrough of our coaching process.",
    videoUrl: "https://youtu.be/5kfXJGnUHSc",
  },
  {
    id: 4,
    title: "What if I don't get the same results as your clients?",
    description: "Understanding realistic expectations and your unique journey.",
    videoUrl: "https://youtu.be/Sr2tq3RBwl0",
  },
  {
    id: 5,
    title: "What if I'm not satisfied with the program?",
    description: "Learn about our satisfaction guarantee and support.",
    videoUrl: "https://youtu.be/WRcpxQop12Q",
  },
  {
    id: 6,
    title: "What if I'm with another coach?",
    description: "How to work with us while working with other coaches.",
    videoUrl: "https://youtu.be/gkP-7sX7KXk",
  },
  {
    id: 7,
    title: "What should my mindset be for the call?",
    description: "Get in the right mindset before your strategy call.",
    videoUrl: "https://youtu.be/DxdsF27F1bo",
  },
  {
    id: 8,
    title: "Will I be able to afford it?",
    description: "Understanding pricing and investment in your transformation.",
    videoUrl: "https://youtu.be/iZw0btmKW3Y",
  },
  {
    id: 9,
    title: "Will I get personalized support?",
    description: "How we provide personalized coaching and support.",
    videoUrl: "https://youtu.be/xA0JvOB7nQ0",
  },
  {
    id: 10,
    title: "Will I have time to do the program?",
    description: "How the program fits into your busy schedule.",
    videoUrl: "https://youtu.be/58MwRglr8Gg",
  },
];

export default function ASL() {
  const [, setLocation] = useLocation();
  const [expandedVideo, setExpandedVideo] = useState<number | null>(null);

  // Scroll animation observer
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("fade-in-up");
        }
      });
    }, { threshold: 0.1 });

    document.querySelectorAll("[data-animate]").forEach((el) => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground overflow-hidden">
      <Header />

      {/* SECTION 1: CONFIRMATION HERO */}
      <section className="relative min-h-screen flex items-center justify-center pt-32 pb-20 px-4 bg-black">
        {/* Background gradient glow */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 left-1/2 transform -translate-x-1/2 w-96 h-96 bg-gradient-to-b from-green-600/10 to-transparent rounded-full blur-3xl"></div>
        </div>

        <div className="relative z-10 max-w-3xl mx-auto text-center">
          {/* Logo */}
          <div className="flex justify-center mb-12">
            <img src="/manus-storage/maho-logo_64d5e184.png" alt="Malex Coaching" className="w-20 h-20 rounded-full" />
          </div>

          {/* Success indicator */}
          <div className="flex justify-center mb-8">
            <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-green-700 rounded-full flex items-center justify-center">
              <Check className="w-10 h-10 text-white" />
            </div>
          </div>

          {/* Main headline */}
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Your Call Is Now Confirmed
          </h1>

          {/* Confirmation message */}
          <p className="text-xl text-gray-300 mb-12">
            Make sure to complete these two steps before your call so we can make the most of your time.
          </p>

          {/* CTA */}
          <button
            onClick={() => {
              document.getElementById("prep-video-section")?.scrollIntoView({ behavior: "smooth" });
            }}
            className="relative px-10 py-4 text-lg text-yellow-400 font-bold rounded-xl overflow-hidden group backdrop-blur-md"
          >
            {/* Liquid glass background */}
            <span className="absolute inset-0 bg-gradient-to-br from-yellow-400/30 via-yellow-300/20 to-yellow-500/30 rounded-xl backdrop-blur-lg"></span>
            <span className="absolute inset-0 border border-yellow-400/40 rounded-xl"></span>
            <span className="absolute inset-0 bg-gradient-to-r from-yellow-400/20 to-yellow-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl"></span>
            {/* Shine effect */}
            <span className="absolute inset-0 rounded-xl overflow-hidden">
              <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-0 group-hover:opacity-30 transform -skew-x-12 group-hover:translate-x-full transition-all duration-500"></span>
            </span>
            {/* Button text */}
            <span className="relative flex items-center gap-2 justify-center">
              <span>Let's Get Started</span>
              <span className="text-xl group-hover:translate-x-1 transition-transform duration-300">→</span>
            </span>
            {/* Glow effect */}
            <span className="absolute inset-0 rounded-xl shadow-lg shadow-yellow-400/0 group-hover:shadow-yellow-400/50 transition-shadow duration-300"></span>
          </button>
        </div>
      </section>

      {/* Divider */}
      <div className="h-px bg-gradient-to-r from-transparent via-green-600/30 to-transparent"></div>

      {/* SECTION 2: PREP / PROGRAM VIDEO */}
      <section id="prep-video-section" data-animate className="py-32 px-4 bg-black">
        <div className="max-w-4xl mx-auto">
          {/* Prep video */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold mb-8 text-center">How to Prepare for This Call</h3>
            <div className="glass-card p-1 border-yellow-500/30 hover:border-yellow-500/50 transition-all duration-300">
              <div className="aspect-video bg-gray-800 rounded-lg overflow-hidden flex items-center justify-center">
                <iframe
                  width="100%"
                  height="100%"
                  src="https://www.youtube.com/embed/CvT4X-0pGbU"
                  title="How to Prepare for This Call"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-full"
                ></iframe>
              </div>
            </div>
          </div>

          {/* Preparation tips */}
          <div className="mt-12">
            <h3 className="text-2xl font-bold mb-8 text-center">Prepare For Your Call</h3>
            <div className="space-y-4 max-w-2xl mx-auto">
              <div className="flex items-start gap-4">
                <span className="text-yellow-400 text-xl font-bold mt-1">•</span>
                <p className="text-gray-300">Be in a quiet place with no distractions.</p>
              </div>
              <div className="flex items-start gap-4">
                <span className="text-yellow-400 text-xl font-bold mt-1">•</span>
                <p className="text-gray-300">Be ready to talk about your current fitness goals.</p>
              </div>
              <div className="flex items-start gap-4">
                <span className="text-yellow-400 text-xl font-bold mt-1">•</span>
                <p className="text-gray-300">Be honest about what has and has not worked for you before.</p>
              </div>
              <div className="flex items-start gap-4">
                <span className="text-yellow-400 text-xl font-bold mt-1">•</span>
                <p className="text-gray-300">Come prepared to take action if the plan makes sense for you.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="h-px bg-gradient-to-r from-transparent via-green-600/30 to-transparent"></div>

      {/* SECTION 3: OBJECTION HANDLING VIDEOS */}
      <section data-animate className="py-32 px-4 bg-black">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-center text-gray-400 mb-12">
            Watch these before your call so you know exactly what to expect.
          </p>

          {/* Video grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {objectionVideos.map((video) => (
              <div key={video.id} className="glass-card p-1 border-yellow-500/30 hover:border-yellow-500/50 transition-all duration-300">
                <button
                  onClick={() => setExpandedVideo(expandedVideo === video.id ? null : video.id)}
                  className="w-full p-6 text-left hover:bg-gray-800/40 transition-colors rounded-lg"
                >
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <span className="text-yellow-400 text-lg font-bold">•</span>
                        <h3 className="font-bold text-lg text-white">{video.title}</h3>
                      </div>
                      <p className="text-gray-400 text-sm">{video.description}</p>
                    </div>
                    <ChevronDown
                      className={`w-5 h-5 text-yellow-400 transition-transform duration-300 flex-shrink-0 ml-4 ${
                        expandedVideo === video.id ? "rotate-180" : ""
                      }`}
                    />
                  </div>
                </button>

                {/* Expanded video content */}
                {expandedVideo === video.id && (
                  <div className="px-6 pb-6 border-t border-yellow-500/20">
                    <div className="mt-4 aspect-video bg-gray-800 rounded-lg overflow-hidden flex items-center justify-center">
                      <iframe
                        width="100%"
                        height="100%"
                        src={`https://www.youtube.com/embed/${video.videoUrl.match(/youtu\.be\/([a-zA-Z0-9-_]+)/)?.[1]}`}
                        title={video.title}
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        className="w-full h-full"
                      ></iframe>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="h-px bg-gradient-to-r from-transparent via-green-600/30 to-transparent"></div>

      {/* SECTION 4: TESTIMONIALS & CASE STUDIES */}
      <section data-animate className="py-32 px-4 bg-black">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
            See What Our Clients Have Achieved
          </h2>
          <p className="text-center text-gray-400 mb-12">
            Real clients. Real transformations.
          </p>

          {/* Case Study Videos Grid - First 6 */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {/* Video 1 */}
            <div className="glass-card p-1 border-yellow-500/30 hover:border-yellow-500/50 transition-all duration-300 stagger-1 group">
              <div className="aspect-video bg-gray-800 rounded-lg overflow-hidden flex items-center justify-center">
                <iframe
                  width="100%"
                  height="100%"
                  src="https://www.youtube.com/embed/ksrXCFP4SBk?quality=hd&vq=hd720"
                  title="How our 50-year-old client lost all the fat"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-full"
                ></iframe>
              </div>
              <p className="text-center text-gray-300 text-sm mt-4 px-4 pb-4">How our 50-year-old client lost all the fat and increased his confidence by x100 in less than a year</p>
            </div>

            {/* Video 2 */}
            <div className="glass-card p-1 border-yellow-500/30 hover:border-yellow-500/50 transition-all duration-300 stagger-2 group">
              <div className="aspect-video bg-gray-800 rounded-lg overflow-hidden flex items-center justify-center">
                <iframe
                  width="100%"
                  height="100%"
                  src="https://www.youtube.com/embed/fuQut2Bjr5s?quality=hd&vq=hd720"
                  title="How our client Lamar got a six-pack"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-full"
                ></iframe>
              </div>
              <p className="text-center text-gray-300 text-sm mt-4 px-4 pb-4">How our client Lamar got a six-pack in half a year</p>
            </div>

            {/* Video 3 */}
            <div className="glass-card p-1 border-yellow-500/30 hover:border-yellow-500/50 transition-all duration-300 stagger-3 group">
              <div className="aspect-video bg-gray-800 rounded-lg overflow-hidden flex items-center justify-center">
                <iframe
                  width="100%"
                  height="100%"
                  src="https://www.youtube.com/embed/dI_c-D81x-A?quality=hd&vq=hd720"
                  title="How our client David went from 20% body fat to 9%"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-full"
                ></iframe>
              </div>
              <p className="text-center text-gray-300 text-sm mt-4 px-4 pb-4">How our client David went from 20% body fat to 9% and got abs in ONE month under Malex Coaching</p>
            </div>

            {/* Video 4 */}
            <div className="glass-card p-1 border-yellow-500/30 hover:border-yellow-500/50 transition-all duration-300 stagger-4 group">
              <div className="aspect-video bg-gray-800 rounded-lg overflow-hidden flex items-center justify-center">
                <iframe
                  width="100%"
                  height="100%"
                  src="https://www.youtube.com/embed/ZkyrMRfuXk4?quality=hd&vq=hd720"
                  title="DOWN 20 LBS IN 30 DAYS"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-full"
                ></iframe>
              </div>
              <p className="text-center text-gray-300 text-sm mt-4 px-4 pb-4">DOWN 20 LBS IN 30 DAYS — Ryan's Journey</p>
            </div>

            {/* Video 5 */}
            <div className="glass-card p-1 border-yellow-500/30 hover:border-yellow-500/50 transition-all duration-300 stagger-1 group">
              <div className="aspect-video bg-gray-800 rounded-lg overflow-hidden flex items-center justify-center">
                <iframe
                  width="100%"
                  height="100%"
                  src="https://www.youtube.com/embed/7jFHJ7AD_ew?quality=hd&vq=hd720"
                  title="How our client Mark got rid of his chronic joint pain"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-full"
                ></iframe>
              </div>
              <p className="text-center text-gray-300 text-sm mt-4 px-4 pb-4">How our client Mark got rid of his chronic joint pain without a doctor at 65 years old</p>
            </div>

            {/* Video 6 */}
            <div className="glass-card p-1 border-yellow-500/30 hover:border-yellow-500/50 transition-all duration-300 stagger-2 group">
              <div className="aspect-video bg-gray-800 rounded-lg overflow-hidden flex items-center justify-center">
                <iframe
                  width="100%"
                  height="100%"
                  src="https://www.youtube.com/embed/s5xMQScpPM8?quality=hd&vq=hd720"
                  title="How our client Andrey lost his beer belly"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-full"
                ></iframe>
              </div>
              <p className="text-center text-gray-300 text-sm mt-4 px-4 pb-4">How our client Andrey lost his beer belly and got a defined jaw as a busy working 9-5 man</p>
            </div>
          </div>

          {/* More Client Wins - Additional 7 Videos */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold text-center mb-8 text-yellow-400">More Client Wins</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Video 7 */}
              <div className="glass-card p-1 border-yellow-500/30 hover:border-yellow-500/50 transition-all duration-300 stagger-3 group">
                <div className="aspect-video bg-gray-800 rounded-lg overflow-hidden flex items-center justify-center">
                  <iframe
                    width="100%"
                    height="100%"
                    src="https://www.youtube.com/embed/9czxkZ8H01w?quality=hd&vq=hd720"
                    title="BUILT MUSCLE AND GOT ABS"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="w-full h-full"
                  ></iframe>
                </div>
                <p className="text-center text-gray-300 text-sm mt-4 px-4 pb-4">BUILT MUSCLE AND GOT ABS — Humza Case Study</p>
              </div>

              {/* Video 8 */}
              <div className="glass-card p-1 border-yellow-500/30 hover:border-yellow-500/50 transition-all duration-300 stagger-4 group">
                <div className="aspect-video bg-gray-800 rounded-lg overflow-hidden flex items-center justify-center">
                  <iframe
                    width="100%"
                    height="100%"
                    src="https://www.youtube.com/embed/c3eYA_Jl8ro?quality=hd&vq=hd720"
                    title="Client loses 19kg"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="w-full h-full"
                  ></iframe>
                </div>
                <p className="text-center text-gray-300 text-sm mt-4 px-4 pb-4">Client loses 19kg</p>
              </div>

              {/* Video 9 */}
              <div className="glass-card p-1 border-yellow-500/30 hover:border-yellow-500/50 transition-all duration-300 stagger-1 group">
                <div className="aspect-video bg-gray-800 rounded-lg overflow-hidden flex items-center justify-center">
                  <iframe
                    width="100%"
                    height="100%"
                    src="https://www.youtube.com/embed/zYpu4rwTvac?quality=hd&vq=hd720"
                    title="How our client went from skinny to muscular"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="w-full h-full"
                  ></iframe>
                </div>
                <p className="text-center text-gray-300 text-sm mt-4 px-4 pb-4">How our client went from skinny to muscular</p>
              </div>

              {/* Video 10 */}
              <div className="glass-card p-1 border-yellow-500/30 hover:border-yellow-500/50 transition-all duration-300 stagger-2 group">
                <div className="aspect-video bg-gray-800 rounded-lg overflow-hidden flex items-center justify-center">
                  <iframe
                    width="100%"
                    height="100%"
                    src="https://www.youtube.com/embed/ipEZpc9lUWI?quality=hd&vq=hd720"
                    title="Don't watch this if you don't want to be skinny anymore"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="w-full h-full"
                  ></iframe>
                </div>
                <p className="text-center text-gray-300 text-sm mt-4 px-4 pb-4">Don't watch this if you don't want to be skinny anymore</p>
              </div>

              {/* Video 11 */}
              <div className="glass-card p-1 border-yellow-500/30 hover:border-yellow-500/50 transition-all duration-300 stagger-3 group">
                <div className="aspect-video bg-gray-800 rounded-lg overflow-hidden flex items-center justify-center">
                  <iframe
                    width="100%"
                    height="100%"
                    src="https://www.youtube.com/embed/kBrZj-LJHy8?quality=hd&vq=hd720"
                    title="How to regain your confidence as a skinny guy"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="w-full h-full"
                  ></iframe>
                </div>
                <p className="text-center text-gray-300 text-sm mt-4 px-4 pb-4">How to regain your confidence as a skinny guy</p>
              </div>

              {/* Video 12 */}
              <div className="glass-card p-1 border-yellow-500/30 hover:border-yellow-500/50 transition-all duration-300 stagger-4 group">
                <div className="aspect-video bg-gray-800 rounded-lg overflow-hidden flex items-center justify-center">
                  <iframe
                    width="100%"
                    height="100%"
                    src="https://www.youtube.com/embed/F6k0vK3xxGc?quality=hd&vq=hd720"
                    title="How our client got big biceps and lost fat"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="w-full h-full"
                  ></iframe>
                </div>
                <p className="text-center text-gray-300 text-sm mt-4 px-4 pb-4">How our client got big biceps and lost fat</p>
              </div>

              {/* Video 13 */}
              <div className="glass-card p-1 border-yellow-500/30 hover:border-yellow-500/50 transition-all duration-300 stagger-1 group">
                <div className="aspect-video bg-gray-800 rounded-lg overflow-hidden flex items-center justify-center">
                  <iframe
                    width="100%"
                    height="100%"
                    src="https://www.youtube.com/embed/zTcWwRDwdOc?quality=hd&vq=hd720"
                    title="Client Case Study"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="w-full h-full"
                  ></iframe>
                </div>
                <p className="text-center text-gray-300 text-sm mt-4 px-4 pb-4">Client Success Story</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="h-px bg-gradient-to-r from-transparent via-green-600/30 to-transparent"></div>

      {/* SECTION 5: FINAL REMINDER */}
      <section data-animate className="py-32 px-4 bg-black">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            You're All Set
          </h2>

          <p className="text-lg text-gray-300 mb-12">
            We'll speak with you on your scheduled call. Watch the prep section above and come ready.
          </p>

          {/* CTA Button */}
          <button
            onClick={() => setLocation("/")}
            className="relative px-10 py-4 text-lg text-yellow-400 font-bold rounded-xl overflow-hidden group backdrop-blur-md"
          >
            {/* Liquid glass background */}
            <span className="absolute inset-0 bg-gradient-to-br from-yellow-400/30 via-yellow-300/20 to-yellow-500/30 rounded-xl backdrop-blur-lg"></span>
            <span className="absolute inset-0 border border-yellow-400/40 rounded-xl"></span>
            <span className="absolute inset-0 bg-gradient-to-r from-yellow-400/20 to-yellow-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl"></span>
            {/* Shine effect */}
            <span className="absolute inset-0 rounded-xl overflow-hidden">
              <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-0 group-hover:opacity-30 transform -skew-x-12 group-hover:translate-x-full transition-all duration-500"></span>
            </span>
            {/* Button text */}
            <span className="relative flex items-center gap-2 justify-center">
              <span>Back To Main Page</span>
              <span className="text-xl group-hover:translate-x-1 transition-transform duration-300">→</span>
            </span>
            {/* Glow effect */}
            <span className="absolute inset-0 rounded-xl shadow-lg shadow-yellow-400/0 group-hover:shadow-yellow-400/50 transition-shadow duration-300"></span>
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-950 py-8 px-4 border-t border-gray-800">
        <div className="max-w-5xl mx-auto text-center text-gray-500 text-sm">
          <p className="mb-1">Contact us for support</p>
          <a href="mailto:maho@malexcoaching.com" className="inline-block text-gray-300 hover:text-yellow-400 transition-colors mb-2">
            maho@malexcoaching.com
          </a>
          <nav className="mb-3 flex flex-wrap justify-center gap-x-4 gap-y-1 text-xs">
            <a href="/terms-of-service" className="hover:text-yellow-400 transition-colors">Terms of Service</a>
            <a href="/refund-policy" className="hover:text-yellow-400 transition-colors">Refund Policy</a>
            <a href="/privacy-policy" className="hover:text-yellow-400 transition-colors">Privacy Policy</a>
            <a href="mailto:maho@malexcoaching.com" className="hover:text-yellow-400 transition-colors">Contact Us</a>
          </nav>
          <p>© 2026 Malex Coaching. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
