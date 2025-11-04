import { Button } from "./ui/button";
import { ArrowRight } from "lucide-react";
import heroImage from "../assets/hero-hosting.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center opacity-10"
        // style={{ backgroundImage: `url(${heroImage})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-accent/5" />

      <div className="container relative z-10 px-4 py-20">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          {/* <div className="inline-block px-4 py-2 bg-primary/10 rounded-full border border-primary/20 mb-4">
            <span className="text-sm font-medium text-primary">Professional React Hosting Solutions</span>
          </div> */}

          <h1 className="text-5xl md:text-7xl font-bold tracking-tight">
            Deploy Your React Apps{" "}
            <span className="bg-gradient-primary from-primary to-accent bg-clip-text text-transparent">
              With Confidence
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto">
            Premium hosting on Hostinger with complete API support, VPS
            infrastructure, and dedicated maintenance. Focus on building, we'll
            handle the rest.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
            <Button
              size="lg"
              className="text-lg px-8 shadow-lg hover:shadow-xl transition-all duration-300"
            >
              Get Started
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8">
              View Credits
            </Button>
          </div>

          <div className="flex flex-wrap justify-center gap-8 pt-8 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <div className="h-2 w-2 rounded-full bg-primary animate-pulse" />
              <span>99.9% Uptime</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="h-2 w-2 rounded-full bg-primary animate-pulse" />
              <span>24/7 Support</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="h-2 w-2 rounded-full bg-primary animate-pulse" />
              <span>Monthly Plans</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
