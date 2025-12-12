import { Heart, Mail, Linkedin, Github } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 dark:bg-slate-950 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          {/* Logo & Name */}
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-bold bg-gradient-to-r from-teal-400 to-blue-500 bg-clip-text text-transparent">
              Janagabalan R
            </h3>
            <p className="text-slate-400 mt-1">IoT Developer & ECE Student</p>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            <a
              href="mailto:janagabalanr@gmail.com"
              className="w-10 h-10 rounded-full bg-slate-800 hover:bg-teal-500 flex items-center justify-center transition-all duration-300 hover:scale-110"
              aria-label="Email"
            >
              <Mail size={18} />
            </a>
            <a
              href="https://www.linkedin.com/in/janagabalan-r"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-slate-800 hover:bg-blue-600 flex items-center justify-center transition-all duration-300 hover:scale-110"
              aria-label="LinkedIn"
            >
              <Linkedin size={18} />
            </a>
            <a
              href="https://github.com/janagabalan"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-slate-800 hover:bg-slate-600 flex items-center justify-center transition-all duration-300 hover:scale-110"
              aria-label="GitHub"
            >
              <Github size={18} />
            </a>
          </div>

          {/* Copyright */}
          <div className="text-center md:text-right text-slate-400 text-sm">
            <p className="flex items-center justify-center md:justify-end gap-1">
              Made with <Heart size={14} className="text-red-500 fill-red-500" /> by Janagabalan
            </p>
            <p className="mt-1">© {currentYear} All rights reserved</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
