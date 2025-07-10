
import { useState } from "react";
import { MessageCircle, X, Send } from "lucide-react";
import { Button } from "@/components/ui/button";

const FloatingContact = () => {
  const [isOpen, setIsOpen] = useState(false);

  const quickMessages = [
    "Hi! I'd like to discuss a project",
    "Can we schedule a call?",
    "I'm interested in your IoT services",
    "Let's collaborate on something amazing!"
  ];

  const handleQuickMessage = (message: string) => {
    const emailSubject = "Project Inquiry";
    const emailBody = encodeURIComponent(message);
    const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=janagabalanr@gmail.com&su=${emailSubject}&body=${emailBody}`;
    window.open(gmailUrl, '_blank');
    setIsOpen(false);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Quick Messages Panel */}
      {isOpen && (
        <div className="mb-4 bg-white dark:bg-slate-800 rounded-2xl shadow-xl border border-slate-200 dark:border-slate-700 p-4 w-80 animate-fade-in">
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-semibold text-slate-800 dark:text-white">Quick Contact</h3>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsOpen(false)}
              className="h-6 w-6"
            >
              <X className="h-4 w-4" />
            </Button>
          </div>
          
          <div className="space-y-2">
            {quickMessages.map((message, index) => (
              <button
                key={index}
                onClick={() => handleQuickMessage(message)}
                className="w-full text-left p-3 rounded-lg bg-slate-50 dark:bg-slate-700 hover:bg-teal-50 dark:hover:bg-teal-900/20 hover:border-teal-200 dark:hover:border-teal-700 border border-transparent transition-all duration-200 text-sm"
              >
                <div className="flex items-center space-x-2">
                  <Send className="h-4 w-4 text-teal-600 dark:text-teal-400" />
                  <span className="text-slate-700 dark:text-slate-300">{message}</span>
                </div>
              </button>
            ))}
          </div>

          <div className="mt-4 pt-4 border-t border-slate-200 dark:border-slate-700">
            <button
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="w-full text-center p-2 text-teal-600 dark:text-teal-400 hover:bg-teal-50 dark:hover:bg-teal-900/20 rounded-lg transition-colors duration-200 text-sm font-medium"
            >
              Or use the contact form
            </button>
          </div>
        </div>
      )}

      {/* Floating Button */}
      <Button
        onClick={() => setIsOpen(!isOpen)}
        className="h-14 w-14 rounded-full bg-teal-600 hover:bg-teal-700 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
      >
        {isOpen ? (
          <X className="h-6 w-6 text-white" />
        ) : (
          <MessageCircle className="h-6 w-6 text-white" />
        )}
      </Button>
    </div>
  );
};

export default FloatingContact;
