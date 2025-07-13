
import { Home, Shield, Radar, Flame, Thermometer, Lightbulb } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Home,
      title: "Home Automation Systems",
      description: "Smart home solutions with voice control integration using Google Home and Gemini AI for seamless automation.",
      features: ["Voice Control", "Remote Access", "Energy Monitoring", "Custom Scheduling"]
    },
    {
      icon: Shield,
      title: "Smart Security Systems",
      description: "Advanced RFID-based security systems with admin controls and remote monitoring capabilities.",
      features: ["RFID Access Control", "Admin Override", "Remote Monitoring", "Alert Systems"]
    },
    {
      icon: Radar,
      title: "Sensor-Based Alerting",
      description: "Ultrasonic and radar systems for object detection, tracking, and automated alert generation.",
      features: ["Object Detection", "Real-time Tracking", "Automated Alerts", "Data Logging"]
    },
    {
      icon: Thermometer,
      title: "Environmental Monitoring",
      description: "Real-time temperature and environmental monitoring systems with cloud integration and data analytics.",
      features: ["Real-time Monitoring", "Cloud Integration", "Data Analytics", "Historical Trends"]
    },
    {
      icon: Flame,
      title: "Safety & Fire Detection",
      description: "Smoke sensor-based fire detection systems with immediate alert capabilities and emergency protocols.",
      features: ["Smoke Detection", "Immediate Alerts", "Emergency Protocols", "Multi-sensor Integration"]
    },
    {
      icon: Lightbulb,
      title: "Project Consulting",
      description: "IoT consultation and prototyping services for custom solutions tailored to specific requirements.",
      features: ["Custom Solutions", "Rapid Prototyping", "Technical Consultation", "Implementation Support"]
    }
  ];

  return (
    <section id="services" className="py-20 px-6 bg-gradient-to-br from-slate-50 via-white to-slate-50 dark:from-slate-900 dark:via-slate-900/50 dark:to-slate-900">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-slate-800 via-teal-600 to-blue-600 dark:from-white dark:via-teal-400 dark:to-blue-400 bg-clip-text text-transparent mb-6">
            My <span className="text-teal-600 dark:text-teal-400">Services</span>
          </h2>
          <p className="text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto leading-relaxed">
            Comprehensive IoT solutions and services to bring your smart technology ideas to life
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="group bg-white dark:bg-slate-800/50 rounded-3xl p-8 shadow-lg border border-slate-200/50 dark:border-slate-700/50 hover:shadow-2xl hover:scale-105 transition-all duration-300 backdrop-blur-sm hover:border-teal-200 dark:hover:border-teal-700">
              <div className="mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-teal-100 to-blue-100 dark:from-teal-900/30 dark:to-blue-900/30 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-sm">
                  <service.icon className="h-8 w-8 text-teal-600 dark:text-teal-400" />
                </div>
                <h3 className="text-xl font-bold text-slate-800 dark:text-white mb-4 group-hover:text-teal-600 dark:group-hover:text-teal-400 transition-colors duration-300">{service.title}</h3>
                <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-6">{service.description}</p>
              </div>

              <div className="space-y-3">
                <h4 className="text-sm font-semibold text-slate-700 dark:text-slate-300 mb-4 uppercase tracking-wide">Key Features:</h4>
                {service.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-gradient-to-r from-teal-500 to-blue-500 rounded-full flex-shrink-0"></div>
                    <span className="text-sm text-slate-600 dark:text-slate-400">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Enhanced CTA Section */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-teal-600 to-blue-600 rounded-3xl p-12 text-white shadow-2xl border border-teal-500/20">
            <h3 className="text-3xl font-bold mb-4">Ready to Build Something Amazing?</h3>
            <p className="text-lg text-teal-100 mb-8 max-w-2xl mx-auto leading-relaxed">
              Let's discuss your IoT project requirements and create innovative solutions together.
            </p>
            <button 
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-white text-teal-600 px-8 py-4 rounded-xl font-semibold hover:bg-slate-100 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              Start Your Project
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
