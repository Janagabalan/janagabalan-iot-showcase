
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
      
      // Fetch the image
      const response = await fetch(resumeUrl);
      const blob = await response.blob();
      
      // Create blob URL
      const blobUrl = window.URL.createObjectURL(blob);
      
      // Create download link
      const link = document.createElement('a');
      link.href = blobUrl;
      link.download = 'Janagabalan_Resume.jpg';
      
      // Trigger download
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      
      // Clean up blob URL
      window.URL.revokeObjectURL(blobUrl);
    } catch (error) {
      console.error('Download failed:', error);
      // Fallback: open in new tab
      window.open("https://i.postimg.cc/qMFVtjfD/janagabalan-resume.jpg", '_blank');
    }
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center pt-16 sm:pt-20 px-4 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-blue-50/50 to-teal-50/50 dark:from-slate-900 dark:via-slate-800/50 dark:to-slate-900"></div>
      
      {/* Animated Background Circles */}
      <div className="absolute top-10 sm:top-20 left-5 sm:left-10 w-48 sm:w-72 h-48 sm:h-72 bg-gradient-to-r from-teal-400/20 to-blue-400/20 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-10 sm:bottom-20 right-5 sm:right-10 w-64 sm:w-96 h-64 sm:h-96 bg-gradient-to-r from-blue-400/20 to-purple-400/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
      
      <div className="container mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Content */}
          <div className="space-y-6 sm:space-y-8 animate-fade-in text-center lg:text-left">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-2 rounded-full bg-gradient-to-r from-teal-100 to-blue-100 dark:from-teal-900/30 dark:to-blue-900/30 border border-teal-200/50 dark:border-teal-700/50">
              <Sparkles className="w-3 sm:w-4 h-3 sm:h-4 text-teal-600 dark:text-teal-400" />
              <span className="text-xs sm:text-sm font-medium text-teal-700 dark:text-teal-300">Available for Projects</span>
            </div>

            <div className="space-y-4 sm:space-y-6">
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-slate-800 dark:text-white leading-tight">
                Hi, I'm{" "}
                <span className="bg-gradient-to-r from-teal-600 via-blue-600 to-teal-600 dark:from-teal-400 dark:via-blue-400 dark:to-teal-400 bg-clip-text text-transparent animate-gradient bg-300% bg-size-300">
                  Janagabalan
                </span>
              </h1>
              
              <div className="space-y-2 sm:space-y-3">
                <h2 className="text-xl sm:text-2xl lg:text-3xl text-slate-700 dark:text-slate-200 font-semibold">
                  IoT Enthusiast & ECE Student
                </h2>
                <p className="text-base sm:text-lg lg:text-xl text-slate-600 dark:text-slate-400 max-w-xl mx-auto lg:mx-0 leading-relaxed">
                  Building <span className="font-semibold text-teal-600 dark:text-teal-400">Smart Solutions</span> for a{" "}
                  <span className="font-semibold text-blue-600 dark:text-blue-400">Smarter World</span> through innovative IoT technologies and embedded systems.
                </p>
              </div>
            </div>

            {/* Stats */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-4 sm:gap-6 py-2 sm:py-4">
              <div className="flex items-center gap-2">
                <div className="w-2 sm:w-3 h-2 sm:h-3 bg-gradient-to-r from-green-400 to-green-500 rounded-full animate-pulse"></div>
                <span className="text-xs sm:text-sm text-slate-600 dark:text-slate-400">5+ IoT Projects</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 sm:w-3 h-2 sm:h-3 bg-gradient-to-r from-blue-400 to-blue-500 rounded-full animate-pulse delay-300"></div>
                <span className="text-xs sm:text-sm text-slate-600 dark:text-slate-400">Arduino Expert</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 sm:w-3 h-2 sm:h-3 bg-gradient-to-r from-purple-400 to-purple-500 rounded-full animate-pulse delay-500"></div>
                <span className="text-xs sm:text-sm text-slate-600 dark:text-slate-400">Cloud Integration</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start">
              <Button 
                onClick={scrollToContact}
                className="bg-gradient-to-r from-teal-600 to-blue-600 hover:from-teal-700 hover:to-blue-700 text-white px-6 sm:px-8 py-4 sm:py-6 text-base sm:text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 w-full sm:w-auto"
              >
                Let's Connect
                <ArrowDown className="ml-2 h-4 sm:h-5 w-4 sm:w-5 animate-bounce" />
              </Button>
              <Button 
                onClick={downloadResume}
                variant="outline" 
                className="border-2 border-teal-600/20 bg-white/80 dark:bg-slate-800/80 text-teal-700 dark:text-teal-300 hover:bg-gradient-to-r hover:from-teal-50 hover:to-blue-50 dark:hover:from-teal-900/20 dark:hover:to-blue-900/20 px-6 sm:px-8 py-4 sm:py-6 text-base sm:text-lg font-semibold backdrop-blur-sm transition-all duration-300 transform hover:scale-105 w-full sm:w-auto"
              >
                Download Resume
                <Download className="ml-2 h-4 sm:h-5 w-4 sm:w-5" />
              </Button>
            </div>
          </div>

          {/* Profile Image */}
          <div className="flex justify-center lg:justify-end mt-8 lg:mt-0">
            <div className="relative">
              {/* Main Profile Circle */}
              <div className="w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 rounded-full bg-gradient-to-br from-teal-400 via-blue-500 to-purple-600 p-1 animate-scale-in shadow-2xl">
                <div className="w-full h-full rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center backdrop-blur-sm">
                  <div className="w-56 h-56 sm:w-72 sm:h-72 lg:w-88 lg:h-88 rounded-full bg-gradient-to-br from-teal-100 via-blue-100 to-purple-100 dark:from-teal-900/30 dark:via-blue-900/30 dark:to-purple-900/30 flex items-center justify-center shadow-inner">
                    <div className="text-4xl sm:text-6xl lg:text-8xl bg-gradient-to-r from-teal-600 to-blue-600 dark:from-teal-400 dark:to-blue-400 bg-clip-text text-transparent font-bold">
                      JR
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Floating Tech Icons with enhanced styling */}
              <div className="absolute -top-4 sm:-top-6 -right-4 sm:-right-6 w-14 sm:w-20 h-14 sm:h-20 bg-gradient-to-br from-white to-slate-50 dark:from-slate-700 dark:to-slate-800 rounded-xl sm:rounded-2xl shadow-lg hover:shadow-xl flex items-center justify-center animate-bounce border border-slate-200 dark:border-slate-600 transition-all duration-300 hover:scale-110">
                <Code className="w-6 sm:w-8 h-6 sm:h-8 text-teal-600 dark:text-teal-400" />
              </div>
              
              <div className="absolute top-12 sm:top-16 -left-6 sm:-left-8 w-12 sm:w-16 h-12 sm:h-16 bg-gradient-to-br from-white to-slate-50 dark:from-slate-700 dark:to-slate-800 rounded-lg sm:rounded-xl shadow-lg hover:shadow-xl flex items-center justify-center animate-pulse border border-slate-200 dark:border-slate-600 transition-all duration-300 hover:scale-110">
                <Zap className="w-5 sm:w-6 h-5 sm:h-6 text-blue-600 dark:text-blue-400" />
              </div>
              
              <div className="absolute bottom-6 sm:bottom-8 -right-8 sm:-right-10 w-16 sm:w-18 h-16 sm:h-18 bg-gradient-to-br from-white to-slate-50 dark:from-slate-700 dark:to-slate-800 rounded-xl sm:rounded-2xl shadow-lg hover:shadow-xl flex items-center justify-center animate-bounce delay-300 border border-slate-200 dark:border-slate-600 transition-all duration-300 hover:scale-110">
                <span className="text-xl sm:text-2xl">🌐</span>
              </div>

              <div className="absolute bottom-12 sm:bottom-16 left-2 sm:left-4 w-12 sm:w-14 h-12 sm:h-14 bg-gradient-to-br from-white to-slate-50 dark:from-slate-700 dark:to-slate-800 rounded-lg sm:rounded-xl shadow-lg hover:shadow-xl flex items-center justify-center animate-pulse delay-700 border border-slate-200 dark:border-slate-600 transition-all duration-300 hover:scale-110">
                <span className="text-lg sm:text-xl">⚡</span>
              </div>

              {/* Orbital rings - hide on small screens */}
              <div className="hidden sm:block absolute inset-0 w-80 h-80 lg:w-96 lg:h-96 rounded-full border-2 border-teal-200/30 dark:border-teal-700/30 animate-spin" style={{ animationDuration: '20s' }}></div>
              <div className="hidden sm:block absolute inset-4 w-72 h-72 lg:w-88 lg:h-88 rounded-full border border-blue-200/30 dark:border-blue-700/30 animate-spin" style={{ animationDuration: '15s', animationDirection: 'reverse' }}></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
