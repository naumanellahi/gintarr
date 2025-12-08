import { motion } from "framer-motion";
import { Phone, ArrowRight, MessageCircle, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

export const CTASection = () => {
  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative py-24 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary via-[hsl(200,80%,45%)] to-secondary" />

      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Floating Particles */}
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            initial={{
              x: Math.random() * 100 + "%",
              y: "100%",
              opacity: 0,
            }}
            animate={{
              y: "-100%",
              opacity: [0, 0.5, 0],
            }}
            transition={{
              duration: Math.random() * 10 + 8,
              repeat: Infinity,
              delay: Math.random() * 5,
              ease: "linear",
            }}
            className="absolute w-2 h-2 bg-white/20 rounded-full"
          />
        ))}

        {/* Gradient Orbs */}
        <div className="absolute top-0 left-1/4 w-64 h-64 bg-accent/20 rounded-full blur-[80px] animate-pulse" />
        <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-white/10 rounded-full blur-[80px] animate-pulse" style={{ animationDelay: "1s" }} />

        {/* Geometric Shapes */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          className="absolute top-10 right-[20%] w-20 h-20 border-2 border-white/10 rounded-xl"
        />
        <motion.div
          animate={{ rotate: -360 }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-10 left-[15%] w-32 h-32 border-2 border-white/10 rounded-full"
        />
      </div>

      <div className="relative container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white text-sm font-medium mb-8"
          >
            <Sparkles className="w-4 h-4 text-accent" />
            <span>Ready to Transform Your Space?</span>
          </motion.div>

          {/* Headline */}
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-display font-bold text-3xl md:text-4xl lg:text-5xl text-white mb-6"
          >
            Start Your Project Today
          </motion.h2>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-xl text-white/80 mb-10 max-w-2xl mx-auto"
          >
            Get a free consultation and quote for your construction or renovation project. 
            Our team is ready to bring your vision to life.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Button
              variant="heroSolid"
              size="xl"
              onClick={scrollToContact}
              className="group"
            >
              Get Your Free Quote
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button variant="glass" size="xl" asChild>
              <a href="tel:07523197092">
                <Phone className="w-5 h-5" />
                07523 197092
              </a>
            </Button>
            <Button variant="glass" size="xl" asChild>
              <a href="https://wa.me/447523197092" target="_blank" rel="noopener noreferrer">
                <MessageCircle className="w-5 h-5" />
                WhatsApp Us
              </a>
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
