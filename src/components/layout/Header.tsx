import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Menu, X } from "lucide-react";
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Portfolio", href: "/portfolio" },
  { name: "Testimonials", href: "/testimonials" },
  { name: "Contact", href: "/contact" },
];

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  return (
    <>
      {/* Top Bar */}
      <div className="hidden lg:block bg-gradient-to-r from-primary to-secondary text-primary-foreground py-2">
        <div className="container mx-auto px-4 flex justify-between items-center text-sm">
          <div className="flex items-center gap-6">
            <a href="tel:07523197092" className="flex items-center gap-2 hover:text-accent transition-colors">
              <Phone size={14} />
              <span>07523 197092</span>
            </a>
            <a href="mailto:Gpaskevicius50@gmail.com" className="flex items-center gap-2 hover:text-accent transition-colors">
              <Mail size={14} />
              <span>Gpaskevicius50@gmail.com</span>
            </a>
          </div>
          <div className="flex items-center gap-2">
            <MapPin size={14} />
            <span>58 Grosvenor Road, Romford, RM7 0QT, UK</span>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className="sticky top-0 z-50 bg-background/80 backdrop-blur-xl border-b border-border/50 shadow-lg"
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center shadow-lg">
                <span className="text-primary-foreground font-display font-bold text-xl">G</span>
              </div>
              <div>
                <h1 className="font-display font-bold text-xl text-foreground">Gintar Traders</h1>
                <p className="text-xs text-muted-foreground">Premium Construction</p>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.href}
                  className={`font-display font-medium text-sm transition-all duration-300 hover:text-primary relative group ${
                    location.pathname === link.href ? "text-primary" : "text-foreground"
                  }`}
                >
                  {link.name}
                  <span
                    className={`absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-primary to-secondary transition-all duration-300 ${
                      location.pathname === link.href ? "w-full" : "w-0 group-hover:w-full"
                    }`}
                  />
                </Link>
              ))}
            </nav>

            {/* CTA Button */}
            <div className="hidden lg:flex items-center gap-4">
              <Button variant="gold" size="lg" asChild>
                <a href="tel:07523197092">
                  <Phone size={18} />
                  Get Free Quote
                </a>
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden p-2 text-foreground"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-background border-t border-border"
          >
            <div className="container mx-auto px-4 py-6">
              <nav className="flex flex-col gap-4">
                {navLinks.map((link) => (
                  <Link
                    key={link.name}
                    to={link.href}
                    onClick={() => setIsOpen(false)}
                    className={`font-display font-medium text-lg py-2 transition-colors ${
                      location.pathname === link.href ? "text-primary" : "text-foreground"
                    }`}
                  >
                    {link.name}
                  </Link>
                ))}
                <Button variant="gold" size="lg" className="mt-4" asChild>
                  <a href="tel:07523197092">
                    <Phone size={18} />
                    Call Now
                  </a>
                </Button>
              </nav>
            </div>
          </motion.div>
        )}
      </motion.header>
    </>
  );
};
