import { useEffect, useState } from "react";

const LoadingScreen = ({ onComplete }: { onComplete: () => void }) => {
  const [progress, setProgress] = useState(0);
  const [isExiting, setIsExiting] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setIsExiting(true);
          setTimeout(onComplete, 500);
          return 100;
        }
        return prev + Math.random() * 15 + 5;
      });
    }, 150);

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <div
      className={`fixed inset-0 z-50 flex flex-col items-center justify-center bg-background transition-all duration-500 ${
        isExiting ? "opacity-0 scale-110" : "opacity-100 scale-100"
      }`}
    >
      {/* Animated background grid */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(20,184,166,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(20,184,166,0.03)_1px,transparent_1px)] bg-[size:50px_50px] animate-pulse" />
        
        {/* Floating particles */}
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-primary/30 rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 2}s`,
              animationDuration: `${2 + Math.random() * 3}s`,
            }}
          />
        ))}
      </div>

      {/* Main logo container */}
      <div className="relative mb-8">
        {/* Rotating rings */}
        <div className="absolute inset-0 w-32 h-32 -m-4">
          <div className="absolute inset-0 border-2 border-primary/20 rounded-full animate-spin" style={{ animationDuration: '3s' }} />
          <div className="absolute inset-2 border-2 border-primary/30 rounded-full animate-spin" style={{ animationDuration: '2s', animationDirection: 'reverse' }} />
          <div className="absolute inset-4 border-2 border-primary/40 rounded-full animate-spin" style={{ animationDuration: '4s' }} />
        </div>

        {/* JB Logo */}
        <div className="relative w-24 h-24 flex items-center justify-center">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-primary/5 rounded-2xl rotate-45 animate-pulse" />
          <span className="text-4xl font-bold bg-gradient-to-r from-primary via-teal-400 to-primary bg-clip-text text-transparent animate-pulse">
            JB
          </span>
        </div>
      </div>

      {/* Loading text */}
      <div className="text-center mb-6">
        <h2 className="text-xl font-semibold text-foreground mb-2">
          Janagabalan
        </h2>
        <p className="text-muted-foreground text-sm tracking-wider">
          Loading Portfolio...
        </p>
      </div>

      {/* Progress bar */}
      <div className="w-64 h-1 bg-muted rounded-full overflow-hidden">
        <div
          className="h-full bg-gradient-to-r from-primary to-teal-400 rounded-full transition-all duration-300 ease-out"
          style={{ width: `${Math.min(progress, 100)}%` }}
        />
      </div>

      {/* Progress percentage */}
      <p className="mt-3 text-xs text-muted-foreground font-mono">
        {Math.min(Math.round(progress), 100)}%
      </p>

      {/* Animated code snippets */}
      <div className="absolute bottom-8 left-8 text-xs font-mono text-primary/30 hidden md:block">
        <div className="animate-pulse">{"<Portfolio />"}</div>
      </div>
      <div className="absolute bottom-8 right-8 text-xs font-mono text-primary/30 hidden md:block">
        <div className="animate-pulse" style={{ animationDelay: '0.5s' }}>{"</>"}</div>
      </div>
    </div>
  );
};

export default LoadingScreen;
