import { Home, Shield, Radar, Flame, Thermometer, Lightbulb, ArrowRight } from "lucide-react";
import useScrollAnimation from "@/hooks/useScrollAnimation";

const Services = () => {
  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation();
  const { ref: servicesRef, isVisible: servicesVisible } = useScrollAnimation();
  const { ref: ctaRef, isVisible: ctaVisible } = useScrollAnimation();

  const services = [
    {
      icon: Home,
      title: "Home Automation Systems",
      description: "Smart home solutions with voice control integration using Google Home and Gemini AI for seamless automation.",
      features: ["Voice Control", "Remote Access", "Energy Monitoring", "Custom Scheduling"],
      color: "from-teal-500 to-cyan-600"
    },
    {
      icon: Shield,
      title: "Smart Security Systems",
      description: "Advanced RFID-based security systems with admin controls and remote monitoring capabilities.",
      features: ["RFID Access Control", "Admin Override", "Remote Monitoring", "Alert Systems"],
      color: "from-blue-500 to-indigo-600"
    },
    {
      icon: Radar,
      title: "Sensor-Based Alerting",
      description: "Ultrasonic and radar systems for object detection, tracking, and automated alert generation.",
      features: ["Object Detection", "Real-time Tracking", "Automated Alerts", "Data Logging"],
      color: "from-purple-500 to-violet-600"
    },
    {
      icon: Thermometer,
      title: "Environmental Monitoring",
      description: "Real-time temperature and environmental monitoring systems with cloud integration and data analytics.",
      features: ["Real-time Monitoring", "Cloud Integration", "Data Analytics", "Historical Trends"],
      color: "from-green-500 to-emerald-600"
    },
    {
      icon: Flame,
      title: "Safety & Fire Detection",
      description: "Smoke sensor-based fire detection systems with immediate alert capabilities and emergency protocols.",
      features: ["Smoke Detection", "Immediate Alerts", "Emergency Protocols", "Multi-sensor Integration"],
      color: "from-orange-500 to-red-600"
    },
    {
      icon: Lightbulb,
      title: "Project Consulting",
      description: "IoT consultation and prototyping services for custom solutions tailored to specific requirements.",
      features: ["Custom Solutions", "Rapid Prototyping", "Technical Consultation", "Implementation Support"],
      color: "from-yellow-500 to-orange-600"
    }
  ];

  return (
    <section id="services" className="py-16 sm:py-24 px-4 bg-gradient-to-b from-white via-slate-50/50 to-white dark:from-slate-900 dark:via-slate-800/30 dark:to-slate-900 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 right-20 w-96 h-96 bg-blue-400/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-20 w-80 h-80 bg-purple-400/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto relative z-10">
        <div 
          ref={headerRef}
          className={`text-center mb-12 sm:mb-16 transition-all duration-700 ${
            headerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <span className="inline-block px-4 py-2 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-full text-sm font-medium mb-4">
            What I Offer
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-800 dark:text-white mb-4">
            My <span className="bg-gradient-to-r from-teal-600 to-blue-600 bg-clip-text text-transparent">Services</span>
          </h2>
          <p className="text-lg sm:text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto px-4">
            Comprehensive IoT solutions and services to bring your smart technology ideas to life
          </p>
        </div>

        <div 
          ref={servicesRef}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
        >
          {services.map((service, index) => (
            <div 
              key={index} 
              className={`group bg-white dark:bg-slate-800/80 rounded-3xl p-6 sm:p-8 shadow-xl border border-slate-200/50 dark:border-slate-700/50 backdrop-blur-sm hover:shadow-2xl hover:-translate-y-3 transition-all duration-500 ${
                servicesVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="mb-6">
                <div className={`w-16 h-16 bg-gradient-to-br ${service.color} rounded-3xl flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-all duration-500`}>
                  <service.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-slate-800 dark:text-white mb-4 group-hover:text-teal-600 dark:group-hover:text-teal-400 transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-6">{service.description}</p>
              </div>

              <div className="space-y-3">
                <h4 className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider">Key Features</h4>
                {service.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-center space-x-3 group/item">
                    <div className={`w-2 h-2 bg-gradient-to-r ${service.color} rounded-full group-hover/item:scale-150 transition-transform duration-300`} />
                    <span className="text-sm text-slate-600 dark:text-slate-400 group-hover/item:text-slate-800 dark:group-hover/item:text-slate-200 transition-colors duration-300">
                      {feature}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Enhanced CTA Section */}
        <div 
          ref={ctaRef}
          className={`mt-16 sm:mt-20 transition-all duration-700 ${
            ctaVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <div className="relative bg-gradient-to-r from-teal-600 via-blue-600 to-purple-600 rounded-3xl p-8 sm:p-12 text-white shadow-2xl overflow-hidden">
            {/* Decorative elements */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />
            
            <div className="relative z-10 text-center">
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4">Ready to Build Something Amazing?</h3>
              <p className="text-lg text-white/80 mb-8 max-w-2xl mx-auto leading-relaxed">
                Let's discuss your IoT project requirements and create innovative solutions together.
              </p>
              <button 
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="inline-flex items-center gap-2 bg-white text-teal-600 px-8 py-4 rounded-2xl font-bold hover:bg-slate-100 transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:scale-105 group"
              >
                Start Your Project
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
