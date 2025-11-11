// import { motion } from "framer-motion";
// import { Code2, Cloud, Users } from "lucide-react";

// const highlights = [
//   {
//     icon: Code2,
//     title: "Expert Development",
//     description:
//       "Specialized in React, Node.js, and modern web technologies for cutting-edge solutions.",
//   },
//   {
//     icon: Cloud,
//     title: "Reliable Hosting",
//     description:
//       "Enterprise-grade VPS infrastructure with 99.9% uptime and daily backups.",
//   },
//   {
//     icon: Users,
//     title: "Tailored Solutions",
//     description:
//       "We understand small business needs and create custom solutions that drive results.",
//   },
// ];

// const About = () => {
//   return (
//     <section className="py-24 bg-secondary/50 ">
//       <div className="container px-4 mx-auto ">
//         <div className="grid lg:grid-cols-2 gap-16 items-center max-w-7xl mx-auto px-16">
//           <motion.div
//             initial={{ opacity: 0, x: -50 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.6 }}
//           >
//             <h2 className="text-4xl md:text-5xl font-bold mb-6">
//               Why Choose Us?
//             </h2>
//             <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
//               We're not just another web agency. We're your technology partner,
//               dedicated to helping small and medium businesses succeed online
//               without the technical complexity.
//             </p>
//             <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
//               With years of experience in React, Node.js, and VPS hosting, we've
//               helped hundreds of businesses establish a strong online presence.
//               Our all-in-one approach means you get a beautiful website,
//               reliable hosting, and ongoing support — all in one affordable
//               monthly plan.
//             </p>
//           </motion.div>

//           <motion.div
//             initial={{ opacity: 0, x: 50 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.6 }}
//             className="space-y-6"
//           >
//             {highlights.map((highlight, index) => (
//               <motion.div
//                 key={index}
//                 initial={{ opacity: 0, y: 20 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 viewport={{ once: true }}
//                 transition={{ duration: 0.5, delay: index * 0.1 }}
//                 className="flex gap-4 gradient-card rounded-xl p-6 shadow-card border border-border"
//               >
//                 <div className="w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0 shadow-primary bg-gradient-to-br from-primary to-primary-light">
//                   <highlight.icon className="w-6 h-6 text-primary-foreground" />
//                 </div>
//                 <div>
//                   <h3 className="text-xl font-bold mb-2">{highlight.title}</h3>
//                   <p className="text-muted-foreground">
//                     {highlight.description}
//                   </p>
//                 </div>
//               </motion.div>
//             ))}
//           </motion.div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default About;
import { motion } from "framer-motion";
import { Code2, Cloud, Users } from "lucide-react";

const highlights = [
  {
    icon: Code2,
    title: "Developer-First Platform",
    description:
      "Built by developers, for developers. Our APIs are designed for simplicity, speed, and scalability — no complex setup required.",
  },
  {
    icon: Cloud,
    title: "Reliable Infrastructure",
    description:
      "Hosted on enterprise-grade cloud servers with 99.9% uptime. Your integrations stay online, always.",
  },
  {
    icon: Users,
    title: "Transparent Credit System",
    description:
      "Pay only for what you use. Track every API call and cost from a single, easy-to-use dashboard.",
  },
];

const About = () => {
  return (
    <section className="py-24 bg-secondary/50">
      <div className="container px-4 mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center max-w-7xl mx-auto px-16">
          {/* Left Text Section */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Why Choose Our API Platform?
            </h2>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              We’re redefining how businesses and developers access APIs. No
              lengthy setup, no hidden charges — just fast, reliable, and
              scalable API services that help you build smarter products.
            </p>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Whether you’re a startup or a large enterprise, our unified
              platform gives you access to powerful APIs for authentication,
              billing, analytics, communication, and more — all managed through
              one secure dashboard with full usage visibility.
            </p>
          </motion.div>

          {/* Right Highlight Cards */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            {highlights.map((highlight, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex gap-4 gradient-card rounded-xl p-6 shadow-card border border-border"
              >
                <div className="w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0 shadow-primary bg-gradient-to-br from-primary to-primary-light">
                  <highlight.icon className="w-6 h-6 text-primary-foreground" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">{highlight.title}</h3>
                  <p className="text-muted-foreground">
                    {highlight.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
