
import { useState } from "react";
import { Mail, Phone, MapPin, Send, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const response = await fetch('https://formspree.io/f/mrbknewz', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        toast({
          title: "Message sent successfully!",
          description: "Thank you for reaching out. I'll get back to you soon.",
        });
        setFormData({ name: "", email: "", message: "" });
      } else {
        throw new Error('Failed to send message');
      }
    } catch (error) {
      toast({
        title: "Failed to send message",
        description: "Please try again later or contact me directly via email.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "janagabalanr@gmail.com",
      link: "mailto:janagabalanr@gmail.com"
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+91 8610453552",
      link: "tel:+918610453552"
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Tittakudi, Cuddalore District",
      link: "#"
    }
  ];

  return (
    <section id="contact" className="py-24 px-6 bg-gradient-to-br from-slate-50 via-white to-blue-50/30 dark:from-slate-900 dark:via-slate-800/50 dark:to-slate-900">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-slate-800 via-teal-600 to-blue-600 dark:from-white dark:via-teal-400 dark:to-blue-400 bg-clip-text text-transparent mb-6">
            Get In <span className="text-teal-600 dark:text-teal-400">Touch</span>
          </h2>
          <p className="text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto leading-relaxed">
            Let's connect and discuss how we can work together on your next IoT project
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-slate-800 dark:text-white mb-6">Let's Connect</h3>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-8">
                I'm always excited to discuss new IoT projects, collaboration opportunities, or just chat about 
                technology. Feel free to reach out through any of the channels below.
              </p>
            </div>

            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <div key={index} className="flex items-center space-x-4 group p-4 rounded-2xl hover:bg-white/50 dark:hover:bg-slate-800/50 transition-all duration-300 border border-transparent hover:border-slate-200/50 dark:hover:border-slate-700/50">
                  <div className="w-14 h-14 bg-gradient-to-br from-teal-100 to-blue-100 dark:from-teal-900/30 dark:to-blue-900/30 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-sm">
                    <info.icon className="h-6 w-6 text-teal-600 dark:text-teal-400" />
                  </div>
                  <div>
                    <p className="text-slate-500 dark:text-slate-400 text-sm font-medium">{info.label}</p>
                    <a 
                      href={info.link}
                      className="text-slate-800 dark:text-white font-semibold hover:text-teal-600 dark:hover:text-teal-400 transition-colors duration-200"
                    >
                      {info.value}
                    </a>
                  </div>
                </div>
              ))}
            </div>

            {/* Enhanced LinkedIn Profile */}
            <div className="bg-gradient-to-r from-teal-600 to-blue-600 rounded-3xl p-8 text-white shadow-xl">
              <h4 className="text-xl font-semibold mb-3">Connect on LinkedIn</h4>
              <p className="text-teal-100 mb-6">Let's grow our professional network together</p>
              <a 
                href="https://www.linkedin.com/in/janagabalan-r-a72499281"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 bg-white text-teal-600 px-6 py-3 rounded-xl font-semibold hover:bg-slate-100 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-105"
              >
                <span>Visit LinkedIn Profile</span>
                <Send className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Enhanced Contact Form */}
          <div className="bg-white/80 dark:bg-slate-800/80 rounded-3xl p-8 shadow-xl border border-slate-200/50 dark:border-slate-700/50 backdrop-blur-sm">
            <h3 className="text-2xl font-bold text-slate-800 dark:text-white mb-8">Send Message</h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-3">
                  Your Name
                </label>
                <Input
                  id="name"
                  name="name"
                  type="text"
                  required
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="Enter your full name"
                  className="w-full rounded-xl border-slate-200 dark:border-slate-700 focus:border-teal-500 dark:focus:border-teal-400 focus:ring-teal-500/20 bg-white/50 dark:bg-slate-900/50 backdrop-blur-sm"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-3">
                  Email Address
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="Enter your email address"
                  className="w-full rounded-xl border-slate-200 dark:border-slate-700 focus:border-teal-500 dark:focus:border-teal-400 focus:ring-teal-500/20 bg-white/50 dark:bg-slate-900/50 backdrop-blur-sm"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-3">
                  Message
                </label>
                <Textarea
                  id="message"
                  name="message"
                  required
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="Tell me about your project or how I can help you..."
                  className="w-full min-h-[140px] resize-none rounded-xl border-slate-200 dark:border-slate-700 focus:border-teal-500 dark:focus:border-teal-400 focus:ring-teal-500/20 bg-white/50 dark:bg-slate-900/50 backdrop-blur-sm"
                />
              </div>

              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-teal-600 to-blue-600 hover:from-teal-700 hover:to-blue-700 text-white py-4 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
              >
                {isSubmitting ? (
                  <div className="flex items-center space-x-2">
                    <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    <span>Sending...</span>
                  </div>
                ) : (
                  <div className="flex items-center space-x-2">
                    <Send className="h-5 w-5" />
                    <span>Send Message</span>
                  </div>
                )}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
