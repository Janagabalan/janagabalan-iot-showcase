
import { GraduationCap, MapPin, Calendar, Award } from "lucide-react";

const About = () => {
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
      description: "Gained hands-on experience in IoT technologies and industrial applications"
    },
    {
      company: "ALAS Robotech Solution, Salem",
      role: "Robotics and IoT",
      duration: "10 days",
      date: "February 2025",
      description: "Advanced training in robotics integration with IoT systems"
    }
  ];

  return (
    <section id="about" className="py-16 sm:py-20 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-800 dark:text-white mb-4">
            About <span className="text-teal-600 dark:text-teal-400">Me</span>
          </h2>
          <p className="text-lg sm:text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto px-4">
            Passionate about IoT technologies and building innovative solutions that bridge the physical and digital worlds
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 mb-12 sm:mb-16">
          {/* Personal Info */}
          <div className="space-y-6">
            <div className="bg-white dark:bg-slate-800 rounded-2xl p-6 sm:p-8 shadow-lg border border-slate-200 dark:border-slate-700">
              <h3 className="text-xl sm:text-2xl font-bold text-slate-800 dark:text-white mb-6">Personal Information</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <MapPin className="h-4 sm:h-5 w-4 sm:w-5 text-teal-600 dark:text-teal-400 flex-shrink-0" />
                  <span className="text-sm sm:text-base text-slate-600 dark:text-slate-400">Tittakudi, Cuddalore District</span>
                </div>
                <div className="flex items-center space-x-3">
                  <GraduationCap className="h-4 sm:h-5 w-4 sm:w-5 text-teal-600 dark:text-teal-400 flex-shrink-0" />
                  <span className="text-sm sm:text-base text-slate-600 dark:text-slate-400">ECE Student (Final Year)</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Calendar className="h-4 sm:h-5 w-4 sm:w-5 text-teal-600 dark:text-teal-400 flex-shrink-0" />
                  <span className="text-sm sm:text-base text-slate-600 dark:text-slate-400">Expected Graduation: 2026</span>
                </div>
              </div>
            </div>

            <div className="bg-white dark:bg-slate-800 rounded-2xl p-6 sm:p-8 shadow-lg border border-slate-200 dark:border-slate-700">
              <h3 className="text-xl sm:text-2xl font-bold text-slate-800 dark:text-white mb-4">My Passion</h3>
              <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 leading-relaxed">
                From Tittakudi in Cuddalore district, I am passionate about IoT technologies and their potential to transform everyday life. 
                Currently in my final year of ECE at Dhanalakshmi Srinivasan Engineering College, I focus on developing smart systems 
                that solve real-world problems through innovative technology solutions.
              </p>
            </div>
          </div>

          {/* Education Timeline */}
          <div className="space-y-6">
            <h3 className="text-xl sm:text-2xl font-bold text-slate-800 dark:text-white mb-6">Education</h3>
            {education.map((edu, index) => (
              <div key={index} className="bg-white dark:bg-slate-800 rounded-2xl p-6 shadow-lg border border-slate-200 dark:border-slate-700">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-10 sm:w-12 h-10 sm:h-12 bg-teal-100 dark:bg-teal-900/30 rounded-full flex items-center justify-center">
                      <GraduationCap className="h-5 sm:h-6 w-5 sm:w-6 text-teal-600 dark:text-teal-400" />
                    </div>
                  </div>
                  <div className="flex-grow min-w-0">
                    <h4 className="text-base sm:text-lg font-semibold text-slate-800 dark:text-white mb-1">{edu.degree}</h4>
                    <p className="text-sm sm:text-base text-teal-600 dark:text-teal-400 font-medium mb-1">{edu.institution}</p>
                    <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mb-2">{edu.location} • {edu.period}</p>
                    <span className="inline-block px-3 py-1 bg-teal-100 dark:bg-teal-900/30 text-teal-700 dark:text-teal-300 text-xs rounded-full">
                      {edu.status}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Internship Experience */}
        <div>
          <h3 className="text-xl sm:text-2xl font-bold text-slate-800 dark:text-white mb-6 sm:mb-8 text-center">Internship Experience</h3>
          <div className="grid md:grid-cols-2 gap-6 sm:gap-8">
            {internships.map((internship, index) => (
              <div key={index} className="bg-white dark:bg-slate-800 rounded-2xl p-6 sm:p-8 shadow-lg border border-slate-200 dark:border-slate-700 hover:shadow-xl transition-shadow duration-300">
                <div className="flex items-center space-x-3 mb-4">
                  <Award className="h-5 sm:h-6 w-5 sm:w-6 text-teal-600 dark:text-teal-400 flex-shrink-0" />
                  <h4 className="text-lg sm:text-xl font-semibold text-slate-800 dark:text-white">{internship.company}</h4>
                </div>
                <p className="text-sm sm:text-base text-teal-600 dark:text-teal-400 font-medium mb-2">{internship.role}</p>
                <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mb-3">{internship.duration} • {internship.date}</p>
                <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 leading-relaxed">{internship.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
