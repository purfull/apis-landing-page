import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Key, ShoppingCart, Code } from "lucide-react";

const steps = [
  {
    icon: ShoppingCart,
    title: "Explore & Choose",
    description:
      "Browse our collection of ready-to-use APIs for authentication, billing, eCommerce, and more. Select what fits your product needs.",
    color: "from-blue-500 to-cyan-400",
  },
  {
    icon: Key,
    title: "Get Your API Key",
    description:
      "Purchase securely and instantly receive your unique API key with clear usage limits and documentation access.",
    color: "from-cyan-400 to-green-400",
  },
  {
    icon: Code,
    title: "Integrate & Build",
    description:
      "Use our clean, developer-friendly API endpoints to connect features to your app or website — fast, secure, and scalable.",
    color: "from-green-400 to-emerald-500",
  },
];

const HowItWorks = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-24 bg-background relative overflow-hidden" ref={ref}>
      {/* Background decoration */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/5 via-transparent to-transparent" />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            How Our{" "}
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              API Service
            </span>{" "}
            Works
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Get powerful APIs in three simple steps — no setup, no server
            management, just plug and play.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {steps.map((step, index) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              className="relative group"
            >
              {/* Connecting line */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-16 left-[60%] w-full h-0.5 bg-gradient-to-r from-primary/50 to-transparent z-0" />
              )}

              <div className="relative bg-card/50 backdrop-blur-sm border border-border rounded-2xl p-8 shadow-card hover:shadow-primary transition-all duration-300 hover:scale-105 h-full">
                {/* Step number */}
                <div className="absolute -top-4 -left-4 w-12 h-12 rounded-full bg-gradient-primary flex items-center justify-center text-primary-foreground font-bold text-lg shadow-glow">
                  {index + 1}
                </div>

                {/* Icon */}
                <div
                  className={`w-16 h-16 rounded-xl bg-gradient-to-br ${step.color} p-4 mb-6 group-hover:scale-110 transition-transform duration-300`}
                >
                  <step.icon className="w-full h-full text-white" />
                </div>

                {/* Content */}
                <h3 className="text-2xl font-bold mb-3">{step.title}</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="text-center mt-12"
        >
          <p className="text-lg text-muted-foreground">
            <span className="font-semibold text-primary">
              Start integrating in minutes.
            </span>{" "}
            Scale your usage anytime with flexible API plans.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default HowItWorks;
