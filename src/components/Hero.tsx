import { ArrowDown, Download, Sparkles, Code, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  const downloadResume = async () => {
    try {
      const resumeUrl = "https://i.postimg.cc/qMFVtjfD/janagabalan-resume.jpg";
      
      const response = await fetch(resumeUrl);
      const blob = await response.blob();
      
      const blobUrl = window.URL.createObjectURL(blob);
      
      const link = document.createElement('a');
      link.href = blobUrl;
      link.download = 'Janagabalan_Resume.jpg';
      
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      
      window.URL.revokeObjectURL(blobUrl);
    } catch (error) {
      console.error('Download failed:', error);
      window.open("https://i.postimg.cc/qMFVtjfD/janagabalan-resume.jpg", '_blank');
    }
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center pt-16 sm:pt-20 px-4 sm:px-6 relative overflow-hidden">
      {/* Enhanced Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-blue-50/30 to-teal-50/30 dark:from-slate-900 dark:via-slate-800/50 dark:to-slate-900"></div>
      
      {/* Animated Background Circles with better positioning */}
      <div className="absolute top-10 sm:top-20 left-5 sm:left-10 w-48 sm:w-72 h-48 sm:h-72 bg-gradient-to-r from-teal-400/10 to-blue-400/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-10 sm:bottom-20 right-5 sm:right-10 w-64 sm:w-96 h-64 sm:h-96 bg-gradient-to-r from-blue-400/10 to-purple-400/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 sm:w-64 h-32 sm:h-64 bg-gradient-to-r from-purple-400/5 to-pink-400/5 rounded-full blur-3xl animate-pulse delay-500"></div>
      
      <div className="container mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Content */}
          <div className="space-y-6 sm:space-y-8 animate-fade-in text-center lg:text-left order-2 lg:order-1">
            {/* Enhanced Badge */}
            <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-2 rounded-full bg-gradient-to-r from-teal-100 to-blue-100 dark:from-teal-900/30 dark:to-blue-900/30 border border-teal-200/50 dark:border-teal-700/50 shadow-sm">
              <Sparkles className="w-3 sm:w-4 h-3 sm:h-4 text-teal-600 dark:text-teal-400" />
              <span className="text-xs sm:text-sm font-semibold text-teal-700 dark:text-teal-300">Available for Projects</span>
            </div>

            <div className="space-y-4 sm:space-y-6">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-slate-800 dark:text-white leading-tight">
                Hi, I'm{" "}
                <span className="bg-gradient-to-r from-teal-600 via-blue-600 to-teal-600 dark:from-teal-400 dark:via-blue-400 dark:to-teal-400 bg-clip-text text-transparent animate-gradient bg-300% bg-size-300">
                  Janagabalan
                </span>
              </h1>
              
              <div className="space-y-3 sm:space-y-4">
                <h2 className="text-xl sm:text-2xl lg:text-3xl text-slate-700 dark:text-slate-200 font-semibold">
                  IoT Enthusiast & ECE Student
                </h2>
                <p className="text-base sm:text-lg lg:text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto lg:mx-0 leading-relaxed px-2 sm:px-0">
                  Building <span className="font-semibold text-teal-600 dark:text-teal-400">Smart Solutions</span> for a{" "}
                  <span className="font-semibold text-blue-600 dark:text-blue-400">Smarter World</span> through innovative IoT technologies and embedded systems.
                </p>
              </div>
            </div>

            {/* Enhanced Stats */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-3 sm:gap-4 py-2 sm:py-4">
              <div className="flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm border border-slate-200/50 dark:border-slate-700/50">
                <div className="w-2 sm:w-3 h-2 sm:h-3 bg-gradient-to-r from-green-400 to-green-500 rounded-full animate-pulse"></div>
                <span className="text-xs sm:text-sm font-medium text-slate-600 dark:text-slate-400">5+ IoT Projects</span>
              </div>
              <div className="flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm border border-slate-200/50 dark:border-slate-700/50">
                <div className="w-2 sm:w-3 h-2 sm:h-3 bg-gradient-to-r from-blue-400 to-blue-500 rounded-full animate-pulse delay-300"></div>
                <span className="text-xs sm:text-sm font-medium text-slate-600 dark:text-slate-400">Arduino Expert</span>
              </div>
              <div className="flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm border border-slate-200/50 dark:border-slate-700/50">
                <div className="w-2 sm:w-3 h-2 sm:h-3 bg-gradient-to-r from-purple-400 to-purple-500 rounded-full animate-pulse delay-500"></div>
                <span className="text-xs sm:text-sm font-medium text-slate-600 dark:text-slate-400">Cloud Integration</span>
              </div>
            </div>

            {/* Enhanced Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start px-4 sm:px-0">
              <Button 
                onClick={scrollToContact}
                className="bg-gradient-to-r from-teal-600 to-blue-600 hover:from-teal-700 hover:to-blue-700 text-white px-6 sm:px-8 py-4 sm:py-6 text-base sm:text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 rounded-xl w-full sm:w-auto"
              >
                Let's Connect
                <ArrowDown className="ml-2 h-4 sm:h-5 w-4 sm:w-5 animate-bounce" />
              </Button>
              <Button 
                onClick={downloadResume}
                variant="outline" 
                className="border-2 border-teal-600/30 bg-white/90 dark:bg-slate-800/90 text-teal-700 dark:text-teal-300 hover:bg-gradient-to-r hover:from-teal-50 hover:to-blue-50 dark:hover:from-teal-900/20 dark:hover:to-blue-900/20 px-6 sm:px-8 py-4 sm:py-6 text-base sm:text-lg font-semibold backdrop-blur-sm transition-all duration-300 transform hover:scale-105 rounded-xl shadow-sm hover:shadow-lg w-full sm:w-auto"
              >
                Download Resume
                <Download className="ml-2 h-4 sm:h-5 w-4 sm:w-5" />
              </Button>
            </div>
          </div>

          {/* Enhanced Profile Image */}
          <div className="flex justify-center lg:justify-end order-1 lg:order-2 mt-4 sm:mt-8 lg:mt-0">
            <div className="relative">
              {/* Main Profile Circle with enhanced gradient */}
              <div className="w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 rounded-full bg-gradient-to-br from-teal-400 via-blue-500 to-purple-600 p-1 animate-scale-in shadow-2xl">
                <div className="w-full h-full rounded-full bg-gradient-to-br from-slate-50 to-white dark:from-slate-800 dark:to-slate-700 flex items-center justify-center backdrop-blur-sm">
                  <div className="w-56 h-56 sm:w-72 sm:h-72 lg:w-88 lg:h-88 rounded-full bg-gradient-to-br from-teal-50 via-blue-50 to-purple-50 dark:from-teal-900/20 dark:via-blue-900/20 dark:to-purple-900/20 flex items-center justify-center shadow-inner border border-white/50 dark:border-slate-600/50">
                    <div className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl bg-gradient-to-r from-teal-600 to-blue-600 dark:from-teal-400 dark:to-blue-400 bg-clip-text text-transparent font-bold">
                      JR
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Enhanced Floating Tech Icons */}
              <div className="absolute -top-3 sm:-top-6 -right-3 sm:-right-6 w-12 sm:w-16 lg:w-20 h-12 sm:h-16 lg:h-20 bg-gradient-to-br from-white to-slate-50 dark:from-slate-700 dark:to-slate-800 rounded-xl sm:rounded-2xl shadow-xl hover:shadow-2xl flex items-center justify-center animate-bounce border border-slate-200/50 dark:border-slate-600/50 transition-all duration-300 hover:scale-110">
                <Code className="w-5 sm:w-6 lg:w-8 h-5 sm:h-6 lg:h-8 text-teal-600 dark:text-teal-400" />
              </div>
              
              <div className="absolute top-8 sm:top-16 -left-4 sm:-left-8 w-10 sm:w-14 lg:w-16 h-10 sm:h-14 lg:h-16 bg-gradient-to-br from-white to-slate-50 dark:from-slate-700 dark:to-slate-800 rounded-lg sm:rounded-xl shadow-xl hover:shadow-2xl flex items-center justify-center animate-pulse border border-slate-200/50 dark:border-slate-600/50 transition-all duration-300 hover:scale-110">
                <Zap className="w-4 sm:w-5 lg:w-6 h-4 sm:h-5 lg:h-6 text-blue-600 dark:text-blue-400" />
              </div>
              
              <div className="absolute bottom-4 sm:bottom-8 -right-5 sm:-right-10 w-12 sm:w-16 lg:w-18 h-12 sm:h-16 lg:h-18 bg-gradient-to-br from-white to-slate-50 dark:from-slate-700 dark:to-slate-800 rounded-xl sm:rounded-2xl shadow-xl hover:shadow-2xl flex items-center justify-center animate-bounce delay-300 border border-slate-200/50 dark:border-slate-600/50 transition-all duration-300 hover:scale-110">
                <span className="text-lg sm:text-xl lg:text-2xl">🌐</span>
              </div>

              <div className="absolute bottom-8 sm:bottom-16 left-2 sm:left-4 w-10 sm:w-12 lg:w-14 h-10 sm:h-12 lg:h-14 bg-gradient-to-br from-white to-slate-50 dark:from-slate-700 dark:to-slate-800 rounded-lg sm:rounded-xl shadow-xl hover:shadow-2xl flex items-center justify-center animate-pulse delay-700 border border-slate-200/50 dark:border-slate-600/50 transition-all duration-300 hover:scale-110">
                <span className="text-base sm:text-lg lg:text-xl">⚡</span>
              </div>

              {/* Enhanced Orbital rings - hidden on mobile for cleaner look */}
              <div className="hidden sm:block absolute inset-0 w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 rounded-full border-2 border-teal-200/30 dark:border-teal-700/30 animate-spin" style={{ animationDuration: '20s' }}></div>
              <div className="hidden sm:block absolute inset-2 sm:inset-4 w-60 h-60 sm:w-72 sm:h-72 lg:w-88 lg:h-88 rounded-full border border-blue-200/30 dark:border-blue-700/30 animate-spin" style={{ animationDuration: '15s', animationDirection: 'reverse' }}></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
