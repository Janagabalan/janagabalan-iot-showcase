import { useState } from "react";
import { ExternalLink, Github, Filter } from "lucide-react";
import { Button } from "@/components/ui/button";

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState("all");

  const projects = [
    {
      id: 1,
      title: "Smart Home Automation with Gemini",
      description: "Voice-controlled appliances using Gemini AI and Google Home integration for seamless home automation.",
      image: "🏠",
      category: "major",
      tech: ["ESP8266", "Google Home", "Gemini AI", "Blynk IoT"],
      status: "Completed"
    },
    {
      id: 2,
      title: "Smart Door Lock with RFID & Remote Control",
      description: "Advanced RFID security system with admin override capabilities and remote access control.",
      image: "🔐",
      category: "major",
      tech: ["Arduino", "RFID", "ESP8266", "Mobile App"],
      status: "Completed"
    },
    {
      id: 3,
      title: "Radar System using Ultrasonic Sensor",
      description: "Object detection and tracking system with servo motor integration for automated surveillance.",
      image: "📡",
      category: "major",
      tech: ["Arduino", "Ultrasonic Sensor", "Servo Motor", "Processing"],
      status: "Completed"
    },
    {
      id: 4,
      title: "Fire Detection System",
      description: "Smoke sensor-based alert system with immediate notification capabilities for fire safety.",
      image: "🔥",
      category: "minor",
      tech: ["Arduino", "Smoke Sensor", "Buzzer", "LED Indicators"],
      status: "Completed"
    },
    {
      id: 5,
      title: "Temperature Monitoring System",
      description: "Real-time environmental monitoring with cloud data logging and analytics dashboard.",
      image: "🌡️",
      category: "minor",
      tech: ["ESP8266", "DHT22", "Blynk IoT", "Data Analytics"],
      status: "Completed"
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
    <section id="portfolio" className="py-20 px-4 bg-slate-50 dark:bg-slate-900/50">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-slate-800 dark:text-white mb-4">
            My <span className="text-teal-600 dark:text-teal-400">Portfolio</span>
          </h2>
          <p className="text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto">
            Showcasing innovative IoT projects and smart solutions I've developed
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex justify-center mb-12">
          <div className="flex items-center space-x-4 bg-white dark:bg-slate-800 rounded-2xl p-2 shadow-lg border border-slate-200 dark:border-slate-700">
            <Filter className="h-5 w-5 text-slate-500 dark:text-slate-400 ml-2" />
            {filters.map((filter) => (
              <Button
                key={filter.id}
                onClick={() => setActiveFilter(filter.id)}
                variant={activeFilter === filter.id ? "default" : "ghost"}
                className={`rounded-xl ${
                  activeFilter === filter.id 
                    ? "bg-teal-600 text-white hover:bg-teal-700" 
                    : "text-slate-600 dark:text-slate-400 hover:text-teal-600 dark:hover:text-teal-400"
                }`}
              >
                {filter.label}
              </Button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div key={project.id} className="bg-white dark:bg-slate-800 rounded-2xl shadow-lg border border-slate-200 dark:border-slate-700 overflow-hidden hover:shadow-xl hover:scale-105 transition-all duration-300 group">
              {/* Project Image/Icon */}
              <div className="h-48 bg-gradient-to-br from-teal-100 to-blue-100 dark:from-teal-900/30 dark:to-blue-900/30 flex items-center justify-center">
                <div className="text-6xl group-hover:scale-110 transition-transform duration-300">
                  {project.image}
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                    project.status === "Completed" 
                      ? "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400"
                      : "bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-400"
                  }`}>
                    {project.status}
                  </span>
                  <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                    project.category === "major"
                      ? "bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-400"
                      : "bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400"
                  }`}>
                    {project.category === "major" ? "Major" : "Minor"}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-slate-800 dark:text-white mb-3">{project.title}</h3>
                <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed mb-4">{project.description}</p>

                {/* Tech Stack */}
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2">Technologies:</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, index) => (
                      <span key={index} className="px-2 py-1 bg-teal-100 dark:bg-teal-900/30 text-teal-700 dark:text-teal-300 text-xs rounded-lg">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex space-x-3">
                  <Button size="sm" className="flex-1 bg-teal-600 hover:bg-teal-700 text-white">
                    <ExternalLink className="h-4 w-4 mr-2" />
                    View Details
                  </Button>
                  <Button size="sm" variant="outline" className="border-teal-600 text-teal-600 hover:bg-teal-50 dark:hover:bg-teal-900/20">
                    <Github className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Portfolio CTA */}
        <div className="mt-16 text-center">
          <p className="text-lg text-slate-600 dark:text-slate-400 mb-6">
            Interested in collaborating on an IoT project?
          </p>
          <Button 
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-teal-600 hover:bg-teal-700 text-white px-8 py-3"
          >
            Let's Work Together
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
