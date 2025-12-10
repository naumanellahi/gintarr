import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Facebook, Instagram, Linkedin, ArrowUp, MessageCircle } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const services = [
  "Plastering",
  "Painting & Decorating",
  "Flooring Installation",
  "Interior Decoration",
];

const quickLinks = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Portfolio", href: "/portfolio" },
  { name: "Contact", href: "/contact" },
];

const legalLinks = [
  { name: "Privacy Policy", href: "/privacy" },
  { name: "Terms of Service", href: "/terms" },
  { name: "Return Policy", href: "/return-policy" },
  { name: "Refund Policy", href: "/refund-policy" },
];

export const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative bg-gradient-to-br from-foreground via-[hsl(220,30%,12%)] to-[hsl(220,40%,8%)] text-background overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-secondary/10 rounded-full blur-3xl" />
      </div>

      <div className="relative container mx-auto px-4 pt-20 pb-8">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Company Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                <span className="text-primary-foreground font-display font-bold text-xl">G</span>
              </div>
              <div>
                <h3 className="font-display font-bold text-xl">Gintar Traders</h3>
                <p className="text-sm text-muted-foreground">Ltd</p>
              </div>
            </div>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              Transforming spaces with premium construction and finishing services. 
              Expert plastering, painting, flooring & interior decoration across the UK.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary transition-colors">
                <Facebook size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary transition-colors">
                <Instagram size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary transition-colors">
                <Linkedin size={18} />
              </a>
            </div>
          </motion.div>

          {/* Services */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <h4 className="font-display font-bold text-lg mb-6">Our Services</h4>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service}>
                  <Link
                    to="/services"
                    className="text-muted-foreground hover:text-primary transition-colors flex items-center gap-2 group"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-accent group-hover:scale-150 transition-transform" />
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <h4 className="font-display font-bold text-lg mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors flex items-center gap-2 group"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-secondary group-hover:scale-150 transition-transform" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <h4 className="font-display font-bold text-lg mb-6">Contact Us</h4>
            <ul className="space-y-4">
              <li>
                <a href="tel:07523197092" className="flex items-start gap-3 text-muted-foreground hover:text-primary transition-colors">
                  <Phone size={20} className="mt-0.5 text-accent" />
                  <span>07523 197092</span>
                </a>
              </li>
              <li>
                <a href="https://wa.me/447523197092" target="_blank" rel="noopener noreferrer" className="flex items-start gap-3 text-muted-foreground hover:text-green-400 transition-colors">
                  <MessageCircle size={20} className="mt-0.5 text-green-400" />
                  <span>WhatsApp Us</span>
                </a>
              </li>
              <li>
                <a href="mailto:Gpaskevicius50@gmail.com" className="flex items-start gap-3 text-muted-foreground hover:text-primary transition-colors">
                  <Mail size={20} className="mt-0.5 text-accent" />
                  <span>Gpaskevicius50@gmail.com</span>
                </a>
              </li>
              <li className="flex items-start gap-3 text-muted-foreground">
                <MapPin size={20} className="mt-0.5 text-accent flex-shrink-0" />
                <span>58 Grosvenor Road, Romford, RM7 0QT, UK</span>
              </li>
            </ul>
            {/* CTA Buttons */}
            <div className="flex gap-3 mt-6">
              <Button variant="gold" size="sm" asChild>
                <a href="tel:07523197092">
                  <Phone size={16} />
                  Call
                </a>
              </Button>
              <Button size="sm" asChild className="bg-green-500 hover:bg-green-600 text-white">
                <a href="https://wa.me/447523197092" target="_blank" rel="noopener noreferrer">
                  <MessageCircle size={16} />
                  WhatsApp
                </a>
              </Button>
            </div>
          </motion.div>
        </div>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-white/20 to-transparent mb-8" />

        {/* Bottom Footer */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-muted-foreground text-sm">
            © {new Date().getFullYear()} Gintar Traders Ltd. All rights reserved. Established December 2025.
          </p>
          <div className="flex items-center gap-6">
            {legalLinks.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                className="text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll to Top Button */}
      <button
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 w-12 h-12 rounded-full bg-gradient-to-r from-primary to-secondary text-primary-foreground flex items-center justify-center shadow-lg hover:shadow-xl transition-all hover:-translate-y-1 z-50"
      >
        <ArrowUp size={24} />
      </button>
    </footer>
  );
};
