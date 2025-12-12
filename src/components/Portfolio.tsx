import { useState } from "react";
import { Filter, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import useScrollAnimation from "@/hooks/useScrollAnimation";

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState("all");
  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation();
  const { ref: projectsRef, isVisible: projectsVisible } = useScrollAnimation();
  const { ref: ctaRef, isVisible: ctaVisible } = useScrollAnimation();

  const projects = [
    {
      id: 1,
      title: "Smart Home Automation with Gemini",
      description: "Voice-controlled appliances using Gemini AI and Google Home integration for seamless home automation.",
      image: "🏠",
      category: "major",
      tech: ["ESP8266", "Google Home", "Gemini AI", "Blynk IoT"],
      status: "Completed",
      color: "from-teal-500 to-cyan-600"
    },
    {
      id: 2,
      title: "Smart Door Lock with RFID & Remote Control",
      description: "Advanced RFID security system with admin override capabilities and remote access control.",
      image: "🔐",
      category: "major",
      tech: ["Arduino", "RFID", "ESP8266", "Mobile App"],
      status: "Completed",
      color: "from-blue-500 to-indigo-600"
    },
    {
      id: 3,
      title: "Radar System using Ultrasonic Sensor",
      description: "Object detection and tracking system with servo motor integration for automated surveillance.",
      image: "📡",
      category: "major",
      tech: ["Arduino", "Ultrasonic Sensor", "Servo Motor", "Processing"],
      status: "Completed",
      color: "from-purple-500 to-violet-600"
    },
    {
      id: 4,
      title: "Fire Detection System",
      description: "Smoke sensor-based alert system with immediate notification capabilities for fire safety.",
      image: "🔥",
      category: "minor",
      tech: ["Arduino", "Smoke Sensor", "Buzzer", "LED Indicators"],
      status: "Completed",
      color: "from-orange-500 to-red-600"
    },
    {
      id: 5,
      title: "Temperature Monitoring System",
      description: "Real-time environmental monitoring with cloud data logging and analytics dashboard.",
      image: "🌡️",
      category: "minor",
      tech: ["ESP8266", "DHT22", "Blynk IoT", "Data Analytics"],
      status: "Completed",
      color: "from-green-500 to-emerald-600"
    },
    {
      id: 6,
      title: "IoT Framework for Plant Stress & Health",
      description: "Real-time monitoring of plant health with a health score displayed on OLED display and Blynk app for remote tracking.",
      image: "🌱",
      category: "major",
      tech: ["ESP8266", "Sensors", "OLED Display", "Blynk IoT"],
      status: "Completed",
      color: "from-lime-500 to-green-600"
    }
  ];

  const filters = [
    { id: "all", label: "All Projects" },
    { id: "major", label: "Major Projects" },
    { id: "minor", label: "Minor Projects" }
  ];

  const filteredProjects = activeFilter === "all" 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <section id="portfolio" className="py-16 sm:py-24 px-4 bg-gradient-to-b from-slate-50 via-white to-slate-50 dark:from-slate-900 dark:via-slate-800/50 dark:to-slate-900 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-40 left-10 w-72 h-72 bg-teal-400/5 rounded-full blur-3xl" />
        <div className="absolute bottom-40 right-10 w-96 h-96 bg-purple-400/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto relative z-10">
        <div 
          ref={headerRef}
          className={`text-center mb-12 sm:mb-16 transition-all duration-700 ${
            headerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <span className="inline-block px-4 py-2 bg-orange-100 dark:bg-orange-900/30 text-orange-700 dark:text-orange-300 rounded-full text-sm font-medium mb-4">
            My Work
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-800 dark:text-white mb-4">
            My <span className="bg-gradient-to-r from-teal-600 to-blue-600 bg-clip-text text-transparent">Portfolio</span>
          </h2>
          <p className="text-lg sm:text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto px-4">
            Showcasing innovative IoT projects and smart solutions I've developed
          </p>
        </div>

        {/* Filter Buttons */}
        <div className={`flex justify-center mb-8 sm:mb-12 transition-all duration-700 delay-200 ${
          headerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <div className="inline-flex items-center gap-2 bg-white dark:bg-slate-800/80 rounded-2xl p-2 shadow-xl border border-slate-200/50 dark:border-slate-700/50 backdrop-blur-sm">
            <Filter className="h-5 w-5 text-slate-500 dark:text-slate-400 ml-2" />
            <div className="flex gap-2">
              {filters.map((filter) => (
                <Button
                  key={filter.id}
                  onClick={() => setActiveFilter(filter.id)}
                  variant={activeFilter === filter.id ? "default" : "ghost"}
                  className={`rounded-xl text-sm px-4 py-2 transition-all duration-300 ${
                    activeFilter === filter.id 
                      ? "bg-gradient-to-r from-teal-500 to-blue-500 text-white shadow-lg" 
                      : "text-slate-600 dark:text-slate-400 hover:text-teal-600 dark:hover:text-teal-400"
                  }`}
                >
                  {filter.label}
                </Button>
              ))}
            </div>
          </div>
        </div>

        {/* Projects Grid */}
        <div 
          ref={projectsRef}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
        >
          {filteredProjects.map((project, index) => (
            <div 
              key={project.id} 
              className={`group bg-white dark:bg-slate-800/80 rounded-3xl shadow-xl border border-slate-200/50 dark:border-slate-700/50 overflow-hidden backdrop-blur-sm hover:shadow-2xl hover:-translate-y-3 transition-all duration-500 ${
                projectsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              {/* Project Image/Icon */}
              <div className={`h-40 sm:h-48 bg-gradient-to-br ${project.color} flex items-center justify-center relative overflow-hidden`}>
                <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors duration-300" />
                <div className="text-5xl sm:text-6xl group-hover:scale-125 transition-transform duration-500 relative z-10">
                  {project.image}
                </div>
                {/* Floating particles */}
                <div className="absolute top-4 right-4 w-3 h-3 bg-white/30 rounded-full animate-float" />
                <div className="absolute bottom-8 left-8 w-2 h-2 bg-white/20 rounded-full animate-float" style={{ animationDelay: '1s' }} />
              </div>

              {/* Project Content */}
              <div className="p-5 sm:p-6">
                <div className="flex items-center justify-between mb-3">
                  <span className={`px-3 py-1 rounded-full text-xs font-bold ${
                    project.status === "Completed" 
                      ? "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400"
                      : "bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-400"
                  }`}>
                    {project.status}
                  </span>
                  <span className={`px-3 py-1 rounded-full text-xs font-bold ${
                    project.category === "major"
                      ? "bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-400"
                      : "bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400"
                  }`}>
                    {project.category === "major" ? "Major" : "Minor"}
                  </span>
                </div>

                <h3 className="text-lg sm:text-xl font-bold text-slate-800 dark:text-white mb-3 line-clamp-2 group-hover:text-teal-600 dark:group-hover:text-teal-400 transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed mb-4 line-clamp-2">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div>
                  <h4 className="text-xs font-bold text-slate-500 dark:text-slate-400 mb-2 uppercase tracking-wider">Technologies</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, techIndex) => (
                      <span 
                        key={techIndex} 
                        className="px-2 py-1 bg-slate-100 dark:bg-slate-700/50 text-slate-600 dark:text-slate-300 text-xs rounded-lg hover:bg-teal-100 dark:hover:bg-teal-900/30 hover:text-teal-700 dark:hover:text-teal-300 transition-colors duration-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Portfolio CTA */}
        <div 
          ref={ctaRef}
          className={`mt-12 sm:mt-16 text-center transition-all duration-700 ${
            ctaVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-400 mb-6">
            Interested in collaborating on an IoT project?
          </p>
          <Button 
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-gradient-to-r from-teal-500 to-blue-500 hover:from-teal-600 hover:to-blue-600 text-white px-8 py-6 text-base rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105"
          >
            Let's Work Together
            <ExternalLink className="ml-2 w-5 h-5" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
