import { useLocation } from "wouter";

interface HeaderProps {
  showNav?: boolean;
}

export function Header({ showNav = true }: HeaderProps) {
  const [, setLocation] = useLocation();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-b from-black via-black/95 to-black/80 backdrop-blur-xl border-b border-yellow-500/10 rounded-b-3xl">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo - Left */}
        <button
          onClick={() => setLocation("/")}
          className="flex items-center gap-3 hover:opacity-90 transition-opacity group"
        >
          <img 
            src="/manus-storage/maho-logo_64d5e184.png" 
            alt="Malex Coaching" 
            className="w-12 h-12 rounded-full group-hover:shadow-lg group-hover:shadow-yellow-500/40 transition-all duration-300 translate-x-1" 
          />
          <div className="flex flex-col leading-tight">
            <span className="font-bold text-white text-base tracking-tight">Malex</span>
            <span className="bg-gradient-to-r from-yellow-400 via-yellow-300 to-yellow-500 bg-clip-text text-transparent font-bold text-base tracking-tight">Coaching</span>
          </div>
        </button>

        {/* Navigation */}
        {showNav && (
          <nav className="flex items-center gap-6">
            <button
              onClick={() => setLocation("/")}
              className="text-gray-300 hover:text-yellow-400 transition-colors text-sm font-medium"
            >
              Home
            </button>
            <a
              href="https://calendly.com/aleksandrharrison0/aleksandr-harrison-1-1-call"
              target="_blank"
              rel="noopener noreferrer"
              className="relative px-8 py-2.5 text-yellow-400 font-bold rounded-xl text-sm overflow-hidden group backdrop-blur-md"
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
                <span>Book Call</span>
                <span className="text-lg group-hover:translate-x-1 transition-transform duration-300">→</span>
              </span>
              
              {/* Glow effect */}
              <span className="absolute inset-0 rounded-xl shadow-lg shadow-yellow-400/0 group-hover:shadow-yellow-400/50 transition-shadow duration-300"></span>
            </a>
          </nav>
        )}
      </div>
    </header>
  );
}
