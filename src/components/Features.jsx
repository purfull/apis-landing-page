import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Zap, Shield, TrendingUp, HeadphonesIcon, Globe, BarChart3 } from "lucide-react";

const features = [
  {
    icon: Zap,
    title: "Lightning Fast Hosting",
    description: "Blazing-fast load times with global CDN. Your visitors won't wait.",
    gradient: "from-yellow-500 to-orange-500"
  },
  {
    icon: Shield,
    title: "Bank-Grade Security",
    description: "Free SSL, automatic backups, and enterprise security. Your data is safe.",
    gradient: "from-green-500 to-emerald-500"
  },
  {
    icon: TrendingUp,
    title: "SEO Optimized",
    description: "Built for search engines. Get found by customers who matter.",
    gradient: "from-blue-500 to-cyan-500"
  },
  {
    icon: HeadphonesIcon,
    title: "24/7 Support",
    description: "Real humans, ready to help. No bots, no ticket queues.",
    gradient: "from-purple-500 to-pink-500"
  },
  {
    icon: Globe,
    title: "Custom Domain",
    description: "Your brand, your domain. We handle all the technical setup.",
    gradient: "from-indigo-500 to-purple-500"
  },
  {
    icon: BarChart3,
    title: "Analytics Dashboard",
    description: "Track visitors, conversions, and growth. Data-driven decisions made easy.",
    gradient: "from-pink-500 to-rose-500"
  }
];

const Features = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-24 bg-background relative" ref={ref}>
      <div className="container mx-auto px-[7%] ">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            Everything You Need, <span className="bg-gradient-primary bg-clip-text text-transparent">Nothing You Don't</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Premium features that big agencies charge extra for — included in every plan.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="group"
            >
              <div className="bg-card border border-border rounded-xl p-6 h-full hover:shadow-card hover:border-primary/50 transition-all duration-300 hover:-translate-y-1">
                <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${feature.gradient} p-3 mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <feature.icon className="w-full h-full text-white" />
                </div>
                
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
