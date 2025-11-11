import { Button } from "./ui/button";
import { ArrowRight } from "lucide-react";
import heroImage from "../assets/hero-hosting.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-10"
        style={{ backgroundImage: `url(${heroImage})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-accent/5" />

      {/* Content */}
      <div className="container relative z-10 px-4 py-16 sm:py-20 md:py-28">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          {/* Tagline */}
          <div className="inline-block px-3 sm:px-4 py-1.5 sm:py-2 bg-primary/10 rounded-full border border-primary/20 mb-2 sm:mb-4">
            <span className="text-xs sm:text-sm font-medium text-primary tracking-wide">
              🚀 Empower Your Apps with Powerful APIs
            </span>
          </div>

          {/* Heading */}
          <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-snug">
            Build. Integrate. Scale —{" "}
            <span className="bg-gradient-primary from-primary to-accent bg-clip-text text-transparent">
              Faster with Our APIs
            </span>
          </h1>

          {/* Description */}
          <p className="text-base sm:text-lg md:text-xl lg:text-xl text-muted-foreground max-w-2xl mx-auto px-2 sm:px-0">
            Access production-ready APIs, monitor usage in real time, and manage
            credits effortlessly. No setup. No downtime. Just pure performance.
          </p>

          {/* 🔥 New Brand Tagline */}
          <p className="text-sm sm:text-base md:text-lg text-muted-foreground italic">
            {/* The fastest way to power your apps with ready-made APIs. */}
            Launch features in minutes, not weeks — powered by our APIs.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
            <Button
              size="lg"
              className="w-full sm:w-auto text-base sm:text-lg px-6 sm:px-8 shadow-lg hover:shadow-xl transition-all duration-300"
            >
              Start for Free
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="w-full sm:w-auto text-base sm:text-lg px-6 sm:px-8"
            >
              Explore APIs
            </Button>
          </div>

          {/* Feature Tagline Bar */}
          <div className="flex flex-wrap justify-center gap-3 sm:gap-4 md:gap-6 lg:gap-8 pt-6 sm:pt-8 text-xs sm:text-sm text-muted-foreground px-4">
            {[
              "⚡ Real-time API Response",
              // "💳 Transparent Credit System",
              "📊 Developer Dashboard",
              "🔒 Secure Authentication",
              "🌍 Global API Endpoints",
            ].map((tag, i) => (
              <div
                key={i}
                className="flex items-center gap-2 bg-primary/5 px-2.5 sm:px-3 py-1 rounded-full border border-primary/10"
              >
                <div className="h-1.5 w-1.5 sm:h-2 sm:w-2 rounded-full bg-primary animate-pulse" />
                <span>{tag}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
