
import { useState } from "react";
import { Sun, Moon } from "lucide-react";
import { Button } from "@/components/ui/button";

interface HeaderProps {
  darkMode: boolean;
  toggleDarkMode: () => void;
}

const Header = ({ darkMode, toggleDarkMode }: HeaderProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  const navItems = [
    { label: "Home", id: "hero" },
    { label: "About", id: "about" },
    { label: "Skills", id: "skills" },
    { label: "Services", id: "services" },
    { label: "Portfolio", id: "portfolio" },
    { label: "Contact", id: "contact" },
  ];

  return (
    <header className="fixed top-0 w-full bg-white/95 dark:bg-slate-900/95 backdrop-blur-lg border-b border-slate-200/50 dark:border-slate-700/50 z-50 transition-all duration-300 shadow-sm">
      <div className="container mx-auto px-4 sm:px-6 py-3 sm:py-4">
        <div className="flex items-center justify-between">
          <div className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-slate-800 via-teal-600 to-blue-600 dark:from-white dark:via-teal-400 dark:to-blue-400 bg-clip-text text-transparent">
            Janagabalan<span className="text-teal-600 dark:text-teal-400">.R</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="relative px-4 py-2 text-slate-600 dark:text-slate-300 hover:text-teal-600 dark:hover:text-teal-400 transition-all duration-200 font-medium rounded-lg hover:bg-slate-100/50 dark:hover:bg-slate-800/50 group"
              >
                {item.label}
                <span className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-gradient-to-r from-teal-600 to-blue-600 transition-all duration-200 group-hover:w-full group-hover:left-0"></span>
              </button>
            ))}

            <Button
              variant="ghost"
              size="icon"
              onClick={toggleDarkMode}
              className="ml-6 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 transition-all duration-200"
            >
              {darkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </Button>
          </nav>

          {/* Mobile Menu Controls */}
          <div className="md:hidden flex items-center space-x-2">
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleDarkMode}
              className="rounded-full w-10 h-10"
            >
              {darkMode ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
            </Button>

            {/* Mobile Navigation Menu Button */}
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="relative rounded-full w-10 h-10"
            >
              <div className="flex flex-col items-center justify-center w-5 h-5">
                <span className={`block h-0.5 w-5 bg-current transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-1' : ''}`}></span>
                <span className={`block h-0.5 w-5 bg-current transition-all duration-300 mt-1 ${isMenuOpen ? 'opacity-0' : ''}`}></span>
                <span className={`block h-0.5 w-5 bg-current transition-all duration-300 mt-1 ${isMenuOpen ? '-rotate-45 -translate-y-1' : ''}`}></span>
              </div>
            </Button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        <div className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${isMenuOpen ? 'max-h-80 opacity-100' : 'max-h-0 opacity-0'}`}>
          <nav className="border-t border-slate-200/50 dark:border-slate-700/50 mt-3">
            <div className="flex flex-col space-y-1 pt-3 pb-2">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="text-left text-slate-600 dark:text-slate-300 hover:text-teal-600 dark:hover:text-teal-400 hover:bg-gradient-to-r hover:from-slate-100 hover:to-transparent dark:hover:from-slate-800 dark:hover:to-transparent transition-all duration-200 font-medium py-3 px-4 rounded-xl text-base"
                >
                  {item.label}
                </button>
              ))}
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
