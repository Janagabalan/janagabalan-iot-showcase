
import { ArrowDown, Download } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center pt-20 px-4">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8 animate-fade-in">
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-7xl font-bold text-slate-800 dark:text-white leading-tight">
                Hi, I'm <span className="text-teal-600 dark:text-teal-400">Janagabalan</span>
              </h1>
              <h2 className="text-xl lg:text-2xl text-slate-600 dark:text-slate-300 font-medium">
                IoT Enthusiast & ECE Student
              </h2>
              <p className="text-lg text-slate-600 dark:text-slate-400 max-w-lg leading-relaxed">
                Building Smart Solutions for a Smarter World through innovative IoT technologies and embedded systems.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                onClick={scrollToContact}
                className="bg-teal-600 hover:bg-teal-700 text-white px-8 py-3 text-lg"
              >
                Let's Connect
                <ArrowDown className="ml-2 h-5 w-5" />
              </Button>
              <Button 
                variant="outline" 
                className="border-teal-600 text-teal-600 hover:bg-teal-50 dark:hover:bg-teal-900/20 px-8 py-3 text-lg"
              >
                Download Resume
                <Download className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>

          {/* Profile Image */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <div className="w-80 h-80 lg:w-96 lg:h-96 rounded-full bg-gradient-to-br from-teal-400 to-blue-500 p-1 animate-scale-in">
                <div className="w-full h-full rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center">
                  <div className="w-72 h-72 lg:w-88 lg:h-88 rounded-full bg-gradient-to-br from-teal-100 to-blue-100 dark:from-teal-900/30 dark:to-blue-900/30 flex items-center justify-center">
                    <div className="text-6xl lg:text-8xl text-teal-600 dark:text-teal-400 font-bold">
                      JR
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Floating Tech Icons */}
              <div className="absolute -top-4 -right-4 w-16 h-16 bg-white dark:bg-slate-800 rounded-full shadow-lg flex items-center justify-center animate-bounce">
                <span className="text-2xl">🤖</span>
              </div>
              <div className="absolute top-20 -left-6 w-12 h-12 bg-white dark:bg-slate-800 rounded-full shadow-lg flex items-center justify-center animate-pulse">
                <span className="text-xl">⚡</span>
              </div>
              <div className="absolute bottom-10 -right-8 w-14 h-14 bg-white dark:bg-slate-800 rounded-full shadow-lg flex items-center justify-center animate-bounce delay-300">
                <span className="text-xl">🌐</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
