import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Check, Sparkles } from "lucide-react";
import { Button } from "./ui/button";

const plans = [
  {
    name: "Starter",
    price: "999",
    description: "Perfect for small businesses just getting started",
    features: [
      "Up to 5 pages",
      "Mobile responsive design",
      "Basic SEO setup",
      "Contact form",
      "Free SSL certificate",
      "Monthly updates (2 hrs)",
      "Email support"
    ],
    highlighted: false
  },
  {
    name: "Growth",
    price: "2,499",
    description: "For growing businesses that need more",
    features: [
      "Up to 15 pages",
      "Advanced custom design",
      "SEO optimization",
      "Blog integration",
      "Analytics dashboard",
      "Monthly updates (5 hrs)",
      "Priority email support",
      "Social media integration"
    ],
    highlighted: true
  },
  {
    name: "Pro",
    price: "4,999",
    description: "Enterprise-grade solution for serious growth",
    features: [
      "Unlimited pages",
      "Premium custom design",
      "Advanced SEO & marketing",
      "E-commerce ready",
      "Custom features & integrations",
      "Unlimited updates",
      "24/7 priority support",
      "Dedicated account manager"
    ],
    highlighted: false
  }
];

const Pricing = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-24 bg-gradient-subtle relative overflow-hidden" ref={ref}>
      <div className="container mx-auto px-6 relative z-10 px-[7%]">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            Simple, <span className="bg-gradient-primary bg-clip-text text-transparent">Transparent Pricing</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Choose the plan that fits your business. No hidden fees, no surprises.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.15, duration: 0.6 }}
              className={`relative ${plan.highlighted ? 'md:-mt-4' : ''}`}
            >
              {plan.highlighted && (
                <div className="absolute -top-5 left-1/2 -translate-x-1/2 bg-gradient-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-medium flex items-center gap-1 shadow-glow">
                  <Sparkles className="w-4 h-4" />
                  Most Popular
                </div>
              )}

              <div className={`relative bg-card rounded-2xl p-8 h-full flex flex-col ${
                plan.highlighted 
                  ? 'border-2 border-primary shadow-purple' 
                  : 'border border-border shadow-card'
              } hover:shadow-glow transition-all duration-300`}>
                <div className="mb-6">
                  <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                  <p className="text-sm text-muted-foreground mb-4">{plan.description}</p>
                  <div className="flex items-baseline gap-2">
                    <span className="text-5xl font-bold bg-gradient-primary bg-clip-text text-transparent">
                      ₹{plan.price}
                    </span>
                    <span className="text-muted-foreground">/month</span>
                  </div>
                </div>

                <ul className="space-y-3 mb-8 flex-grow">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3">
                      <div className="mt-0.5 w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <Check className="w-3 h-3 text-primary" />
                      </div>
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button 
                  className={plan.highlighted 
                    ? "w-full bg-gradient-primary text-primary-foreground shadow-purple hover:shadow-glow" 
                    : "w-full"
                  }
                  variant={plan.highlighted ? "default" : "outline"}
                  size="lg"
                >
                  Get Started
                </Button>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="text-center mt-12"
        >
          <p className="text-muted-foreground">
            All plans include free domain for first year, SSL certificate, and regular backups
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Pricing;
