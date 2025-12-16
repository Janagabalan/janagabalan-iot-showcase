import { GraduationCap, MapPin, Calendar, Award, ExternalLink } from "lucide-react";
import useScrollAnimation from "@/hooks/useScrollAnimation";

const About = () => {
  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation();
  const { ref: personalRef, isVisible: personalVisible } = useScrollAnimation();
  const { ref: educationRef, isVisible: educationVisible } = useScrollAnimation();
  const { ref: internshipRef, isVisible: internshipVisible } = useScrollAnimation();

  const education = [
    {
      degree: "B.E. Electronics and Communication Engineering",
      institution: "Dhanalakshmi Srinivasan Engineering College (Autonomous)",
      location: "Perambalur",
      period: "2022 - 2026",
      status: "Currently Pursuing"
    },
    {
      degree: "Secondary Education (4th - 12th)",
      institution: "Sathya Saai Public School CBSE",
      location: "Pasar",
      period: "Completed",
      status: "CBSE Board"
    }
  ];

  const internships = [
    {
      company: "NSIC, Chennai",
      role: "IoT Training",
      duration: "1 week",
      date: "August 2024",
      description: "Gained hands-on experience in IoT technologies and industrial applications",
      certificate: "/certificates/NSIC_Internship.pdf"
    },
    {
      company: "ALAS Robotech Solution, Salem",
      role: "Robotics and IoT",
      duration: "10 days",
      date: "February 2025",
      description: "Advanced training in robotics integration with IoT systems",
      certificate: "/certificates/Alas_Internship.pdf"
    }
  ];

  return (
    <section id="about" className="py-16 sm:py-24 px-4 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 right-10 w-72 h-72 bg-teal-400/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-blue-400/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto relative z-10">
        <div 
          ref={headerRef}
          className={`text-center mb-12 sm:mb-16 transition-all duration-700 ${
            headerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <span className="inline-block px-4 py-2 bg-teal-100 dark:bg-teal-900/30 text-teal-700 dark:text-teal-300 rounded-full text-sm font-medium mb-4">
            Get to Know Me
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-800 dark:text-white mb-4">
            About <span className="bg-gradient-to-r from-teal-600 to-blue-600 bg-clip-text text-transparent">Me</span>
          </h2>
          <p className="text-lg sm:text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto px-4">
            Passionate about IoT technologies and building innovative solutions that bridge the physical and digital worlds
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 mb-12 sm:mb-16">
          {/* Personal Info */}
          <div 
            ref={personalRef}
            className={`space-y-6 transition-all duration-700 delay-100 ${
              personalVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
            }`}
          >
            <div className="bg-white dark:bg-slate-800/80 rounded-3xl p-6 sm:p-8 shadow-xl border border-slate-200/50 dark:border-slate-700/50 backdrop-blur-sm hover:shadow-2xl transition-all duration-500 group">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-teal-500 to-blue-500 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <MapPin className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-slate-800 dark:text-white">Personal Information</h3>
              </div>
              <div className="space-y-4">
                <div className="flex items-center space-x-3 p-3 rounded-xl bg-slate-50 dark:bg-slate-900/50 hover:bg-teal-50 dark:hover:bg-teal-900/20 transition-colors duration-300">
                  <MapPin className="h-4 sm:h-5 w-4 sm:w-5 text-teal-600 dark:text-teal-400 flex-shrink-0" />
                  <span className="text-sm sm:text-base text-slate-600 dark:text-slate-400">Tittakudi, Cuddalore District</span>
                </div>
                <div className="flex items-center space-x-3 p-3 rounded-xl bg-slate-50 dark:bg-slate-900/50 hover:bg-teal-50 dark:hover:bg-teal-900/20 transition-colors duration-300">
                  <GraduationCap className="h-4 sm:h-5 w-4 sm:w-5 text-teal-600 dark:text-teal-400 flex-shrink-0" />
                  <span className="text-sm sm:text-base text-slate-600 dark:text-slate-400">ECE Student (Final Year)</span>
                </div>
                <div className="flex items-center space-x-3 p-3 rounded-xl bg-slate-50 dark:bg-slate-900/50 hover:bg-teal-50 dark:hover:bg-teal-900/20 transition-colors duration-300">
                  <Calendar className="h-4 sm:h-5 w-4 sm:w-5 text-teal-600 dark:text-teal-400 flex-shrink-0" />
                  <span className="text-sm sm:text-base text-slate-600 dark:text-slate-400">Expected Graduation: 2026</span>
                </div>
              </div>
            </div>

            <div className="bg-white dark:bg-slate-800/80 rounded-3xl p-6 sm:p-8 shadow-xl border border-slate-200/50 dark:border-slate-700/50 backdrop-blur-sm hover:shadow-2xl transition-all duration-500 group">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <span className="text-2xl">💡</span>
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-slate-800 dark:text-white">My Passion</h3>
              </div>
              <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 leading-relaxed">
                From Tittakudi in Cuddalore district, I am passionate about IoT technologies and their potential to transform everyday life. 
                Currently in my final year of ECE at Dhanalakshmi Srinivasan Engineering College, I focus on developing smart systems 
                that solve real-world problems through innovative technology solutions.
              </p>
            </div>
          </div>

          {/* Education Timeline */}
          <div 
            ref={educationRef}
            className={`space-y-6 transition-all duration-700 delay-200 ${
              educationVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'
            }`}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center shadow-lg">
                <GraduationCap className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-slate-800 dark:text-white">Education</h3>
            </div>
            {education.map((edu, index) => (
              <div 
                key={index} 
                className="bg-white dark:bg-slate-800/80 rounded-3xl p-6 shadow-xl border border-slate-200/50 dark:border-slate-700/50 backdrop-blur-sm hover:shadow-2xl hover:-translate-y-1 transition-all duration-500 group"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-10 sm:w-12 h-10 sm:h-12 bg-gradient-to-br from-teal-100 to-blue-100 dark:from-teal-900/30 dark:to-blue-900/30 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <GraduationCap className="h-5 sm:h-6 w-5 sm:w-6 text-teal-600 dark:text-teal-400" />
                    </div>
                  </div>
                  <div className="flex-grow min-w-0">
                    <h4 className="text-base sm:text-lg font-semibold text-slate-800 dark:text-white mb-1">{edu.degree}</h4>
                    <p className="text-sm sm:text-base text-teal-600 dark:text-teal-400 font-medium mb-1">{edu.institution}</p>
                    <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mb-2">{edu.location} • {edu.period}</p>
                    <span className="inline-block px-3 py-1 bg-gradient-to-r from-teal-100 to-blue-100 dark:from-teal-900/30 dark:to-blue-900/30 text-teal-700 dark:text-teal-300 text-xs rounded-full font-medium">
                      {edu.status}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Internship Experience */}
        <div 
          ref={internshipRef}
          className={`transition-all duration-700 delay-300 ${
            internshipVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <div className="flex items-center justify-center gap-3 mb-8">
            <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-red-500 rounded-2xl flex items-center justify-center shadow-lg">
              <Award className="h-6 w-6 text-white" />
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-slate-800 dark:text-white">Internship Experience</h3>
          </div>
          <div className="grid md:grid-cols-2 gap-6 sm:gap-8">
            {internships.map((internship, index) => (
              <div 
                key={index} 
                className="bg-white dark:bg-slate-800/80 rounded-3xl p-6 sm:p-8 shadow-xl border border-slate-200/50 dark:border-slate-700/50 backdrop-blur-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 group"
              >
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-teal-100 to-blue-100 dark:from-teal-900/30 dark:to-blue-900/30 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Award className="h-6 w-6 text-teal-600 dark:text-teal-400" />
                  </div>
                  <h4 className="text-lg sm:text-xl font-semibold text-slate-800 dark:text-white">{internship.company}</h4>
                </div>
                <p className="text-sm sm:text-base text-teal-600 dark:text-teal-400 font-medium mb-2">{internship.role}</p>
                <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mb-3">{internship.duration} • {internship.date}</p>
                <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 leading-relaxed mb-4">{internship.description}</p>
                <a
                  href={internship.certificate}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-teal-500 to-blue-500 text-white text-sm font-medium rounded-xl hover:from-teal-600 hover:to-blue-600 transition-all duration-300 shadow-lg hover:shadow-xl"
                >
                  <Award className="h-4 w-4" />
                  View Certificate
                  <ExternalLink className="h-3 w-3" />
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
