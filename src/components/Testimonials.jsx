import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Priya Sharma",
    role: "Owner, Artisan Cafe",
    content:
      "Switching to WebCraft was the best decision for my business. They built a beautiful website in just 10 days, and I haven't worried about tech issues since. My bookings doubled!",
    rating: 5,
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Priya",
  },
  {
    name: "Rajesh Kumar",
    role: "Founder, Kumar Consulting",
    content:
      "I was spending hours trying to manage my old website. WebCraft took over everything — hosting, updates, everything. Now I just focus on my clients. Worth every rupee.",
    rating: 5,
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Rajesh",
  },
  {
    name: "Meera Patel",
    role: "Director, Wellness Studio",
    content:
      "Professional, responsive, and genuinely care about my success. They don't just build websites — they build partnerships. The ongoing support is incredible.",
    rating: 5,
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Meera",
  },
];

const Testimonials = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      className="py-16 sm:py-20 md:py-24 bg-gradient-subtle relative overflow-hidden px-4 sm:px-8 lg:px-12"
      ref={ref}
    >
      {/* Background decoration */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-primary/5 via-transparent to-transparent" />

      <div className="container mx-auto relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 sm:mb-14 md:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            Trusted by{" "}
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Business Owners
            </span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto px-2">
            Don't just take our word for it — hear what our clients say.
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-7xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.15, duration: 0.6 }}
            >
              <div className="bg-card/80 backdrop-blur-sm border border-border rounded-xl p-5 sm:p-6 h-full shadow-card hover:shadow-purple transition-all duration-300 hover:-translate-y-1">
                {/* Stars */}
                <div className="flex gap-1 mb-3 sm:mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-4 h-4 sm:w-5 sm:h-5 text-yellow-300 fill-yellow-300"
                    />
                  ))}
                </div>

                {/* Content */}
                <p className="text-sm sm:text-base md:text-lg text-foreground mb-5 sm:mb-6 leading-relaxed italic">
                  "{testimonial.content}"
                </p>

                {/* Author */}
                <div className="flex items-center gap-3 pt-3 sm:pt-4 border-t border-border">
                  <img
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-primary/10"
                  />
                  <div>
                    <div className="font-semibold text-sm sm:text-base">
                      {testimonial.name}
                    </div>
                    <div className="text-xs sm:text-sm text-muted-foreground">
                      {testimonial.role}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
