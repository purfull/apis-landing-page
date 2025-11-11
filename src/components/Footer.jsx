// import { motion } from "framer-motion";
// import { ArrowRight, Mail, Phone, Twitter, Linkedin, Github } from "lucide-react";
// import { Button } from "./ui/button";

// const Footer = () => {
//   return (
//     <footer className="bg-foreground text-background relative overflow-hidden">
//       {/* CTA Section */}
//       <div className="relative z-10 border-b border-background/10">
//         <div className="container mx-auto px-6 py-20">
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.6 }}
//             className="text-center max-w-4xl mx-auto"
//           >
//             <h2 className="text-4xl lg:text-6xl font-bold mb-6">
//               Ready to Launch Your Website?
//             </h2>
//             <p className="text-xl text-background/70 mb-8 max-w-2xl mx-auto">
//               Stop worrying about tech. Start growing your business. Monthly plans starting at just ₹999.
//             </p>

//             <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
//               <Button
//                 size="lg"
//                 className="text-foreground hover:bg-background/90 text-lg group bg-gradient-primary text-primary-foreground shadow-purple hover:shadow-glow"
//               >
//                 Let's Build Your Website
//                 <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
//               </Button>
//               <div className="text-background/70">or email us at <a href="mailto:hello@webcraft.com" className="text-background font-medium hover:underline">hello@webcraft.com</a></div>
//             </div>
//           </motion.div>
//         </div>
//       </div>

//       {/* Footer Links */}
//       <div className="container mx-auto px-6 py-12">
//         <div className="grid md:grid-cols-4 gap-8 mb-12">
//           {/* Brand */}
//           <div className="md:col-span-2">
//             <h3 className="text-2xl font-bold mb-4">WebCraft</h3>
//             <p className="text-background/70 mb-4 max-w-md">
//               Professional website development, hosting, and maintenance for small and medium businesses. We handle everything so you can focus on what matters.
//             </p>
//           </div>

//           {/* Quick Links */}
//           <div>
//             <h4 className="font-semibold mb-4 text-lg">Quick Links</h4>
//             <ul className="space-y-2 text-background/70">
//               <li><a href="#" className="hover:text-background transition-colors">About Us</a></li>
//               <li><a href="#" className="hover:text-background transition-colors">Pricing</a></li>
//               <li><a href="#" className="hover:text-background transition-colors">Contact</a></li>
//               <li><a href="#" className="hover:text-background transition-colors">FAQ</a></li>
//             </ul>
//           </div>

//           {/* Contact */}
//           <div>
//             <h4 className="font-semibold mb-4 text-lg">Contact</h4>
//             <ul className="space-y-2 text-background/70">
//               <li>
//                 <a href="#" className="flex items-center gap-2 hover:text-background transition-colors">
//                 <Mail className="w-4 h-4" />
//                   hello@webflowpro.com
//                 </a>
//               </li>
//               <li>
//                 <a href="tel:+919876543210" className="flex items-center gap-2 hover:text-background transition-smooth">
//                 <Phone className="w-4 h-4" />
//                   +91 98765 43210
//                 </a>
//               </li>
//             </ul>
//           </div>
//         </div>

//         {/* Bottom Bar */}
//         <div className="pt-8 border-t border-background/10 flex flex-col md:flex-row justify-between items-center gap-4">
//           <p className="text-background/60 text-sm">
//             © 2025 WebCraft. All rights reserved.
//           </p>

//           <div className="flex gap-4">
//             <a href="#" className="w-10 h-10 rounded-full bg-background/10 flex items-center justify-center hover:bg-background/20 transition-colors">
//               <Twitter className="w-5 h-5" />
//             </a>
//             <a href="#" className="w-10 h-10 rounded-full bg-background/10 flex items-center justify-center hover:bg-background/20 transition-colors">
//               <Linkedin className="w-5 h-5" />
//             </a>
//             <a href="#" className="w-10 h-10 rounded-full bg-background/10 flex items-center justify-center hover:bg-background/20 transition-colors">
//               <Github className="w-5 h-5" />
//             </a>
//             <a href="mailto:hello@webcraft.com" className="w-10 h-10 rounded-full bg-background/10 flex items-center justify-center hover:bg-background/20 transition-colors">
//               <Mail className="w-5 h-5" />
//             </a>
//           </div>
//         </div>
//       </div>

//       {/* Background decoration */}
//       <div className="absolute bottom-0 right-0 w-96 h-96 bg-background/5 rounded-full blur-3xl" />
//     </footer>
//   );
// };

// export default Footer;
import { motion } from "framer-motion";
import {
  ArrowRight,
  Mail,
  Phone,
  Twitter,
  Linkedin,
  Github,
} from "lucide-react";
import { Button } from "./ui/button";

const Footer = () => {
  return (
    <footer className="bg-foreground text-background relative overflow-hidden">
      {/* CTA Section */}
      <div className="relative z-10 border-b border-background/10">
        <div className="container mx-auto px-6 py-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h2 className="text-4xl lg:text-6xl font-bold mb-6">
              Ready to Power Your App with APIs?
            </h2>
            <p className="text-xl text-background/70 mb-8 max-w-2xl mx-auto">
              Start integrating high-performance APIs today. Connect, monitor,
              and scale your applications — all in one platform.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button
                size="lg"
                className="text-foreground hover:bg-background/90 text-lg group bg-gradient-primary text-primary-foreground shadow-purple hover:shadow-glow"
              >
                Get Started with APIs
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <div className="text-background/70">
                or email us at{" "}
                <a
                  href="mailto:support@apihub.com"
                  className="text-background font-medium hover:underline"
                >
                  support@apihub.com
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Footer Links */}
      <div className="container mx-auto px-6 py-12">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <h3 className="text-2xl font-bold mb-4">APIHub</h3>
            <p className="text-background/70 mb-4 max-w-md">
              A unified API marketplace that empowers developers and businesses
              to build, integrate, and scale faster. Access powerful APIs with
              transparent pricing and real-time analytics.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4 text-lg">Quick Links</h4>
            <ul className="space-y-2 text-background/70">
              <li>
                <a
                  href="#about"
                  className="hover:text-background transition-colors"
                >
                  About
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-background transition-colors">
                  Pricing
                </a>
              </li>
              <li>
                <a
                  href="docs"
                  className="hover:text-background transition-colors"
                >
                  API Docs
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-background transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4 text-lg">Contact</h4>
            <ul className="space-y-2 text-background/70">
              <li>
                <a
                  href="mailto:support@apihub.com"
                  className="flex items-center gap-2 hover:text-background transition-colors"
                >
                  <Mail className="w-4 h-4" />
                  support@apihub.com
                </a>
              </li>
              <li>
                <a
                  href="tel:+919876543210"
                  className="flex items-center gap-2 hover:text-background transition-colors"
                >
                  <Phone className="w-4 h-4" />
                  +91 98765 43210
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-background/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-background/60 text-sm">
            © 2025 APIHub. All rights reserved.
          </p>

          <div className="flex gap-4">
            <a
              href="#"
              className="w-10 h-10 rounded-full bg-background/10 flex items-center justify-center hover:bg-background/20 transition-colors"
            >
              <Twitter className="w-5 h-5" />
            </a>
            <a
              href="#"
              className="w-10 h-10 rounded-full bg-background/10 flex items-center justify-center hover:bg-background/20 transition-colors"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a
              href="#"
              className="w-10 h-10 rounded-full bg-background/10 flex items-center justify-center hover:bg-background/20 transition-colors"
            >
              <Github className="w-5 h-5" />
            </a>
            <a
              href="mailto:support@apihub.com"
              className="w-10 h-10 rounded-full bg-background/10 flex items-center justify-center hover:bg-background/20 transition-colors"
            >
              <Mail className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>

      {/* Background decoration */}
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-background/5 rounded-full blur-3xl" />
    </footer>
  );
};

export default Footer;
