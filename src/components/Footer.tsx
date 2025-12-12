import { Heart, Mail, Linkedin, Github, ArrowUp } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative bg-gradient-to-b from-slate-900 via-slate-900 to-slate-950 text-white py-16 overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-64 h-64 bg-teal-500/5 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-blue-500/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-teal-500/3 to-blue-500/3 rounded-full blur-3xl" />
      </div>

      {/* Top border gradient line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-teal-500/50 to-transparent" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Back to top button */}
        <div className="flex justify-center mb-8">
          <button
            onClick={scrollToTop}
            className="group w-12 h-12 rounded-full bg-gradient-to-r from-teal-500 to-blue-500 flex items-center justify-center transition-all duration-500 hover:scale-110 hover:shadow-lg hover:shadow-teal-500/25 animate-bounce"
            style={{ animationDuration: "2s" }}
            aria-label="Back to top"
          >
            <ArrowUp size={20} className="transition-transform duration-300 group-hover:-translate-y-1" />
          </button>
        </div>

        <div className="flex flex-col items-center gap-8">
          {/* Logo & Name with animation */}
          <div className="text-center group">
            <h3 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-teal-400 via-cyan-400 to-blue-500 bg-clip-text text-transparent bg-size-300 animate-gradient transition-all duration-300">
              Janagabalan R
            </h3>
            <p className="text-slate-400 mt-2 text-sm md:text-base tracking-wider uppercase">
              IoT Developer & ECE Student
            </p>
          </div>

          {/* Divider */}
          <div className="w-24 h-px bg-gradient-to-r from-transparent via-slate-600 to-transparent" />

          {/* Social Links with staggered animation */}
          <div className="flex items-center gap-5">
            <a
              href="mailto:janagabalanr@gmail.com"
              className="group relative w-12 h-12 rounded-xl bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 flex items-center justify-center transition-all duration-500 hover:scale-110 hover:bg-gradient-to-br hover:from-teal-500 hover:to-teal-600 hover:border-transparent hover:shadow-lg hover:shadow-teal-500/25"
              aria-label="Email"
            >
              <Mail size={20} className="text-slate-300 group-hover:text-white transition-colors duration-300" />
              <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 text-xs text-slate-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
                Email
              </span>
            </a>
            <a
              href="https://www.linkedin.com/in/janagabalan-r"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative w-12 h-12 rounded-xl bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 flex items-center justify-center transition-all duration-500 hover:scale-110 hover:bg-gradient-to-br hover:from-blue-500 hover:to-blue-600 hover:border-transparent hover:shadow-lg hover:shadow-blue-500/25"
              aria-label="LinkedIn"
            >
              <Linkedin size={20} className="text-slate-300 group-hover:text-white transition-colors duration-300" />
              <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 text-xs text-slate-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
                LinkedIn
              </span>
            </a>
            <a
              href="https://github.com/janagabalan"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative w-12 h-12 rounded-xl bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 flex items-center justify-center transition-all duration-500 hover:scale-110 hover:bg-gradient-to-br hover:from-slate-600 hover:to-slate-700 hover:border-transparent hover:shadow-lg hover:shadow-slate-500/25"
              aria-label="GitHub"
            >
              <Github size={20} className="text-slate-300 group-hover:text-white transition-colors duration-300" />
              <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 text-xs text-slate-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
                GitHub
              </span>
            </a>
          </div>

          {/* Copyright with heart animation */}
          <div className="text-center text-slate-500 text-sm mt-4 space-y-2">
            <p className="flex items-center justify-center gap-2">
              Made with 
              <Heart size={14} className="text-red-500 fill-red-500 animate-pulse" style={{ animationDuration: "1.5s" }} /> 
              by 
              <span className="text-teal-400 font-medium">Janagabalan</span>
            </p>
            <p className="text-slate-600">
              © {currentYear} All rights reserved
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
