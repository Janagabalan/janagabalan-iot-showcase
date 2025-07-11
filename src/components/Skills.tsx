
import { Code, Cpu, Cloud, Settings } from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      title: "Programming & Development",
      icon: Code,
      skills: [
        { name: "Arduino IDE Programming", level: 90 },
        { name: "Basic Python", level: 75 },
        { name: "C Programming", level: 80 },
        { name: "Circuit Debugging", level: 85 }
      ]
    },
    {
      title: "IoT & Hardware",
      icon: Cpu,
      skills: [
        { name: "ESP8266 Development", level: 88 },
        { name: "Hardware Troubleshooting", level: 85 },
        { name: "Sensor Integration", level: 90 },
        { name: "RFID Systems", level: 82 }
      ]
    },
    {
      title: "Cloud Platforms",
      icon: Cloud,
      skills: [
        { name: "Blynk IoT", level: 90 },
        { name: "Sinric Pro", level: 85 },
        { name: "Google Home Integration", level: 80 },
        { name: "Data Analytics", level: 70 }
      ]
    },
    {
      title: "Professional Skills",
      icon: Settings,
      skills: [
        { name: "Project Documentation", level: 88 },
        { name: "Presentation Skills", level: 85 },
        { name: "Excel Data Entry", level: 80 },
        { name: "Problem Solving", level: 92 }
      ]
    }
  ];

  return (
    <section id="skills" className="py-16 sm:py-20 px-4 bg-slate-50 dark:bg-slate-900/50">
      <div className="container mx-auto">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-800 dark:text-white mb-4">
            My <span className="text-teal-600 dark:text-teal-400">Skills</span>
          </h2>
          <p className="text-lg sm:text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto px-4">
            Technical expertise and professional capabilities in IoT development and embedded systems
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 sm:gap-8 mb-8 sm:mb-12">
          {skillCategories.map((category, index) => (
            <div key={index} className="bg-white dark:bg-slate-800 rounded-2xl p-6 sm:p-8 shadow-lg border border-slate-200 dark:border-slate-700 hover:shadow-xl transition-all duration-300">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-10 sm:w-12 h-10 sm:h-12 bg-teal-100 dark:bg-teal-900/30 rounded-lg flex items-center justify-center">
                  <category.icon className="h-5 sm:h-6 w-5 sm:w-6 text-teal-600 dark:text-teal-400" />
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-slate-800 dark:text-white">{category.title}</h3>
              </div>
              
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-sm sm:text-base text-slate-700 dark:text-slate-300 font-medium">{skill.name}</span>
                      <span className="text-teal-600 dark:text-teal-400 text-xs sm:text-sm font-semibold">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-slate-200 dark:bg-slate-700 rounded-full h-2">
                      <div 
                        className="bg-gradient-to-r from-teal-500 to-blue-500 h-2 rounded-full transition-all duration-1000 ease-out"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
          <div className="text-center bg-white dark:bg-slate-800 rounded-2xl p-4 sm:p-6 shadow-lg border border-slate-200 dark:border-slate-700">
            <div className="text-2xl sm:text-3xl font-bold text-teal-600 dark:text-teal-400 mb-2">5+</div>
            <div className="text-sm sm:text-base text-slate-600 dark:text-slate-400 font-medium">IoT Projects</div>
          </div>
          <div className="text-center bg-white dark:bg-slate-800 rounded-2xl p-4 sm:p-6 shadow-lg border border-slate-200 dark:border-slate-700">
            <div className="text-2xl sm:text-3xl font-bold text-teal-600 dark:text-teal-400 mb-2">2</div>
            <div className="text-sm sm:text-base text-slate-600 dark:text-slate-400 font-medium">Internships</div>
          </div>
          <div className="text-center bg-white dark:bg-slate-800 rounded-2xl p-4 sm:p-6 shadow-lg border border-slate-200 dark:border-slate-700">
            <div className="text-2xl sm:text-3xl font-bold text-teal-600 dark:text-teal-400 mb-2">3+</div>
            <div className="text-sm sm:text-base text-slate-600 dark:text-slate-400 font-medium">Cloud Platforms</div>
          </div>
          <div className="text-center bg-white dark:bg-slate-800 rounded-2xl p-4 sm:p-6 shadow-lg border border-slate-200 dark:border-slate-700">
            <div className="text-2xl sm:text-3xl font-bold text-teal-600 dark:text-teal-400 mb-2">4</div>
            <div className="text-sm sm:text-base text-slate-600 dark:text-slate-400 font-medium">Years Study</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
