import { Button } from "@/components/ui/button";
import { useLocation } from "wouter";
import { Check, Users, Zap, Target, Award } from "lucide-react";
import { useEffect, useState } from "react";
import { Header } from "@/components/Header";
import { CallBenefitsAnimation } from "@/components/CallBenefitsAnimation";
import { ClientResults } from "@/components/ClientResults";
import { Coaches } from "@/components/Coaches";

/**
 * ESL (Entry Sales Letter) - Main Landing Page
 * 
 * Design System: Cinematic Luxury Minimalism
 * - Pure black backgrounds with deep charcoal cards
 * - Warm gold/yellow (#fbbf24) accents for CTAs and highlights
 * - Bold Montserrat typography with generous spacing
 * - Liquid glass buttons with subtle glow effects
 * - Smooth scroll animations and hover interactions
 */

export default function ESL() {
  const [, setLocation] = useLocation();
  const [scrollY, setScrollY] = useState(0);

  // Smooth scroll to Calendly section
  const scrollToCalendly = () => {
    const element = document.getElementById("calendly-section");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Track scroll position for parallax effects
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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

      {/* SECTION 1: HERO */}
      <section className="relative min-h-screen flex items-center justify-center pt-32 pb-20 px-4 opacity-0 animate-fade-in bg-black grid-bg">
        {/* Background gradient glow */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div 
            className="absolute top-1/4 left-1/2 transform -translate-x-1/2 w-96 h-96 bg-gradient-to-b from-yellow-600/10 to-transparent rounded-full blur-3xl"
            style={{ transform: `translate(-50%, calc(-50% + ${scrollY * 0.3}px))` }}
          ></div>
        </div>

        <div className="relative z-10 max-w-5xl mx-auto">
          {/* Logo */}
          <div className="flex justify-center mb-12" style={{ transform: `translateY(${scrollY * 0.1}px)` }}>
            <img src="/media/malex-logo-ring.jpg" alt="Malex Coaching" className="w-56 h-56 md:w-72 md:h-72 rounded-3xl object-cover shadow-2xl shadow-yellow-500/20" />
          </div>

          {/* Main headline with gold accent and underline */}
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-center mb-6 leading-tight" style={{ transform: `translateY(${scrollY * 0.05}px)` }}>
            We Help Busy Men{" "}
            <span className="relative inline-block">
              <span className="absolute inset-0 bg-gradient-to-r from-yellow-600 to-yellow-500 rounded-lg -skew-x-12 opacity-25 blur-sm"></span>
              <span className="relative text-white font-bold">Transform</span>
            </span>
            {" "}Their Physique
          </h1>

          {/* Time commitment */}
          <p className="text-yellow-400 text-center mb-4 font-semibold">In 3 hours per week</p>
          
          {/* Subheadline - smaller text */}
          <p className="text-sm md:text-base text-gray-400 text-center mb-12 max-w-2xl mx-auto leading-relaxed">
            Build muscle, lose fat, and create a physique you can maintain for life — with a personalized coaching system designed around your schedule.
          </p>

          {/* Trust indicators */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 max-w-2xl mx-auto">
            <div className="flex items-center justify-center gap-3 text-yellow-400 stagger-1">
              <Users className="w-5 h-5" />
              <span className="font-semibold text-sm">100+ Clients Helped</span>
            </div>
            <div className="flex items-center justify-center gap-3 text-yellow-400 stagger-2">
              <Zap className="w-5 h-5" />
              <span className="font-semibold text-sm">Busy-Schedule Friendly</span>
            </div>
            <div className="flex items-center justify-center gap-3 text-yellow-400 stagger-3">
              <Target className="w-5 h-5" />
              <span className="font-semibold text-sm">Personalized Coaching</span>
            </div>
          </div>



          {/* CTA Section - Calendly Embed */}
          <div id="calendly-section" className="flex justify-center opacity-0 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <div className="w-full max-w-2xl">
              {/* Section Header */}
              <div className="text-center mb-8">
                <h3 className="text-3xl md:text-4xl font-bold mb-3">Ready to Start Your Transformation?</h3>
                <p className="text-gray-400 text-lg">Pick a time that works best for you</p>
                <div className="flex items-center justify-center gap-3 mt-4">
                  <div className="h-px w-12 bg-gradient-to-r from-yellow-500 to-transparent"></div>
                  <span className="text-yellow-400 font-semibold text-sm">30-Minute Strategy Call</span>
                  <div className="h-px w-12 bg-gradient-to-l from-yellow-500 to-transparent"></div>
                </div>
              </div>
              
              {/* Calendly Embed */}
              <div className="glass-card p-1 border-yellow-500/30 hover:border-yellow-500/50 transition-all duration-300">
                <div className="bg-gradient-to-br from-gray-900 to-gray-950 rounded-lg overflow-hidden">
                  <iframe
                    title="Calendly Booking"
                    src="https://calendly.com/aleksandrharrison0/aleksandr-harrison-1-1-call?hide_event_type_details=1&hide_gdpr_block=1"
                    width="100%"
                    height="600"
                    frameBorder="0"
                    className="rounded-lg"
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="h-px bg-gradient-to-r from-transparent via-yellow-600/30 to-transparent"></div>

      {/* SECTION 2: WHAT YOU GET ON THE CALL - ANIMATED SOFTWARE INTERFACE */}
      <section data-animate className="py-32 px-4 bg-black grid-bg relative overflow-hidden">
        {/* Decorative background elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-0 left-1/4 w-72 h-72 bg-gradient-to-b from-yellow-600/8 to-transparent rounded-full blur-3xl parallax-element"></div>
          <div className="absolute bottom-0 right-1/4 w-72 h-72 bg-gradient-to-t from-yellow-600/8 to-transparent rounded-full blur-3xl parallax-element" style={{ animationDelay: '0.5s' }}></div>
        </div>

        <div className="max-w-5xl mx-auto relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              What You'll Get On The Call
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto text-lg">
              An interactive breakdown of your personalized strategy
            </p>
          </div>

          {/* Animated Software Interface */}
          <CallBenefitsAnimation />


        </div>
      </section>

      {/* Divider */}
      <div className="h-px bg-gradient-to-r from-transparent via-yellow-600/30 to-transparent"></div>

      {/* SECTION 3: CTA - I'M READY TO CHANGE MY LIFE */}
      <section data-animate className="py-32 px-4 bg-black grid-bg">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-8">
            I'm Ready To Change My Life
          </h2>

          {/* CTA Button */}
          <button
            onClick={scrollToCalendly}
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
              <span>Book My Free Strategy Call</span>
              <span className="text-xl group-hover:translate-x-1 transition-transform duration-300">→</span>
            </span>
            {/* Glow effect */}
            <span className="absolute inset-0 rounded-xl shadow-lg shadow-yellow-400/0 group-hover:shadow-yellow-400/50 transition-shadow duration-300"></span>
          </button>

          {/* Coaches */}
          <Coaches />
        </div>
      </section>

      {/* Divider */}
      <div className="h-px bg-gradient-to-r from-transparent via-yellow-600/30 to-transparent"></div>

      {/* SECTION 4: SOCIAL PROOF - OVER 100 SUCCESSFUL CLIENTS */}
      <section data-animate className="py-32 px-4 bg-black grid-bg">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
            Over 100 Successful Clients
          </h2>
          <p className="text-center text-gray-400 mb-16">
            Real clients. Real transformations. And so many more.
          </p>

          {/* Client results (from Miro) */}
          <ClientResults />
        </div>
      </section>

      {/* Divider */}
      <div className="h-px bg-gradient-to-r from-transparent via-yellow-600/30 to-transparent"></div>

      {/* SECTION 4: CLIENT CASE STUDIES */}
      <section data-animate className="py-32 px-4 bg-black grid-bg">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Client Case Studies
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto text-lg">
              See what is possible when the right system is built around your lifestyle.
            </p>
          </div>

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

          {/* More Client Wins - Additional 6 Videos */}
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
      <div className="h-px bg-gradient-to-r from-transparent via-yellow-600/30 to-transparent"></div>

      {/* SECTION 5: FINAL CTA */}
      <section data-animate className="py-32 px-4 bg-black grid-bg">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready To Build Your Best Physique?
          </h2>

          <p className="text-lg text-gray-300 mb-8">
            Book a free strategy call with our team and we'll show you exactly what to do next.
          </p>

          {/* CTA Button */}
          <button
            onClick={scrollToCalendly}
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
              <span>Book My Free Strategy Call</span>
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
