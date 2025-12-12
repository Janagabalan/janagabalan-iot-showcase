import { Code, Cpu, Cloud, Settings } from "lucide-react";
import useScrollAnimation from "@/hooks/useScrollAnimation";
import { useEffect, useState } from "react";

const Skills = () => {
  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation();
  const { ref: skillsRef, isVisible: skillsVisible } = useScrollAnimation();
  const { ref: statsRef, isVisible: statsVisible } = useScrollAnimation();
  const [animateSkills, setAnimateSkills] = useState(false);

  useEffect(() => {
    if (skillsVisible) {
      const timer = setTimeout(() => setAnimateSkills(true), 300);
      return () => clearTimeout(timer);
    }
  }, [skillsVisible]);

  const skillCategories = [
    {
      title: "Programming & Development",
      icon: Code,
      color: "from-violet-500 to-purple-600",
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
      color: "from-teal-500 to-cyan-600",
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
      color: "from-blue-500 to-indigo-600",
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
      color: "from-orange-500 to-red-600",
      skills: [
        { name: "Project Documentation", level: 88 },
        { name: "Presentation Skills", level: 85 },
        { name: "Excel Data Entry", level: 80 },
        { name: "Problem Solving", level: 92 }
      ]
    }
  ];

  const stats = [
    { value: "5+", label: "IoT Projects", icon: "🚀" },
    { value: "2", label: "Internships", icon: "💼" },
    { value: "3+", label: "Cloud Platforms", icon: "☁️" },
    { value: "4", label: "Years Study", icon: "📚" }
  ];

  return (
    <section id="skills" className="py-16 sm:py-24 px-4 bg-gradient-to-b from-slate-50 via-white to-slate-50 dark:from-slate-900 dark:via-slate-800/50 dark:to-slate-900 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-40 left-20 w-80 h-80 bg-purple-400/5 rounded-full blur-3xl" />
        <div className="absolute bottom-40 right-20 w-96 h-96 bg-teal-400/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto relative z-10">
        <div 
          ref={headerRef}
          className={`text-center mb-12 sm:mb-16 transition-all duration-700 ${
            headerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <span className="inline-block px-4 py-2 bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 rounded-full text-sm font-medium mb-4">
            What I Can Do
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-800 dark:text-white mb-4">
            My <span className="bg-gradient-to-r from-teal-600 to-blue-600 bg-clip-text text-transparent">Skills</span>
          </h2>
          <p className="text-lg sm:text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto px-4">
            Technical expertise and professional capabilities in IoT development and embedded systems
          </p>
        </div>

        <div 
          ref={skillsRef}
          className="grid md:grid-cols-2 gap-6 sm:gap-8 mb-12 sm:mb-16"
        >
          {skillCategories.map((category, index) => (
            <div 
              key={index} 
              className={`bg-white dark:bg-slate-800/80 rounded-3xl p-6 sm:p-8 shadow-xl border border-slate-200/50 dark:border-slate-700/50 backdrop-blur-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 group ${
                skillsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="flex items-center space-x-3 mb-6">
                <div className={`w-12 h-12 bg-gradient-to-br ${category.color} rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-all duration-300`}>
                  <category.icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-slate-800 dark:text-white">{category.title}</h3>
              </div>
              
              <div className="space-y-5">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-sm sm:text-base text-slate-700 dark:text-slate-300 font-medium">{skill.name}</span>
                      <span className={`bg-gradient-to-r ${category.color} bg-clip-text text-transparent text-xs sm:text-sm font-bold`}>
                        {skill.level}%
                      </span>
                    </div>
                    <div className="w-full bg-slate-200 dark:bg-slate-700 rounded-full h-2.5 overflow-hidden">
                      <div 
                        className={`bg-gradient-to-r ${category.color} h-2.5 rounded-full transition-all duration-1000 ease-out relative`}
                        style={{ width: animateSkills ? `${skill.level}%` : '0%' }}
                      >
                        <div className="absolute inset-0 bg-white/20 animate-shimmer bg-[length:200%_100%]" />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Quick Stats */}
        <div 
          ref={statsRef}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6"
        >
          {stats.map((stat, index) => (
            <div 
              key={index}
              className={`text-center bg-white dark:bg-slate-800/80 rounded-3xl p-6 sm:p-8 shadow-xl border border-slate-200/50 dark:border-slate-700/50 backdrop-blur-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 group ${
                statsVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-90'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="text-3xl mb-3 group-hover:scale-125 transition-transform duration-300">{stat.icon}</div>
              <div className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-teal-600 to-blue-600 bg-clip-text text-transparent mb-2">
                {stat.value}
              </div>
              <div className="text-sm sm:text-base text-slate-600 dark:text-slate-400 font-medium">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
