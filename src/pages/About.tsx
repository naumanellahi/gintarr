import { motion } from "framer-motion";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Award, Target, Shield, Heart, Zap, CheckCircle, Sparkles, Phone, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const values = [
  { icon: Shield, title: "Integrity", description: "Honest, transparent dealings in every project we undertake." },
  { icon: Award, title: "Quality", description: "Uncompromising standards in materials and workmanship." },
  { icon: CheckCircle, title: "Reliability", description: "Dependable service you can count on every time." },
  { icon: Target, title: "Precision", description: "Meticulous attention to every detail." },
  { icon: Heart, title: "Customer Focus", description: "Your satisfaction is our top priority." },
  { icon: Sparkles, title: "Innovation", description: "Modern techniques for superior results." },
];

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        {/* Hero */}
        <section className="relative py-32 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-primary via-[hsl(210,80%,35%)] to-secondary" />
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1600&q=80')] bg-cover bg-center opacity-20" />
          {/* Floating Elements */}
          <motion.div
            animate={{ y: [-10, 10, -10], rotate: [0, 5, 0] }}
            transition={{ duration: 6, repeat: Infinity }}
            className="absolute top-20 left-[10%] w-20 h-20 border-2 border-white/20 rounded-xl"
          />
          <motion.div
            animate={{ y: [10, -10, 10] }}
            transition={{ duration: 8, repeat: Infinity }}
            className="absolute bottom-20 right-[15%] w-32 h-32 bg-accent/20 rounded-full blur-xl"
          />
          <div className="relative container mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white text-sm font-medium mb-6"
            >
              <Sparkles className="w-4 h-4 text-accent" />
              <span>Established December 2025</span>
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="font-display font-bold text-4xl md:text-5xl lg:text-6xl text-white mb-6"
            >
              About Gintar Traders Ltd
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xl text-white/80 max-w-2xl mx-auto"
            >
              A fresh approach to premium construction and finishing services
            </motion.p>
          </div>
        </section>

        {/* Story */}
        <section className="section-padding">
          <div className="container mx-auto">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-4">
                  Our Story
                </span>
                <h2 className="font-display font-bold text-3xl md:text-4xl text-foreground mb-6">
                  A New Beginning in <span className="text-gradient">Premium Construction</span>
                </h2>
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>
                    Gintar Traders Ltd was established in December 2025 with a clear vision: to deliver 
                    exceptional construction and finishing services that transform spaces and exceed 
                    expectations. We are a fresh, dynamic company ready to make our mark in the UK 
                    construction industry.
                  </p>
                  <p>
                    Our founder brings expertise in plastering, painting, flooring, and interior 
                    decoration, combining traditional craftsmanship with modern techniques. We believe 
                    that every space deserves premium quality workmanship, and we're committed to 
                    delivering exactly that.
                  </p>
                  <p>
                    As a newly launched business, we are hungry for success and dedicated to building 
                    our reputation through exceptional quality, reliability, and customer satisfaction. 
                    Your project is our priority, and we treat every job with the care and attention 
                    it deserves.
                  </p>
                  <p>
                    We serve homeowners, property developers, and commercial clients throughout the UK, 
                    bringing fresh ideas and unwavering dedication to every project we undertake.
                  </p>
                </div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="relative"
              >
                <img
                  src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=800&q=80"
                  alt="Professional construction work"
                  className="rounded-3xl shadow-2xl"
                />
                <motion.div 
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 }}
                  className="absolute -bottom-8 -left-8 bg-gradient-to-br from-primary to-secondary rounded-2xl p-6 text-primary-foreground shadow-xl"
                >
                  <div className="text-4xl font-display font-bold flex items-center gap-2">
                    <Sparkles className="w-8 h-8" />
                    New
                  </div>
                  <div className="text-sm opacity-80">Est. December 2025</div>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="section-padding bg-muted/30">
          <div className="container mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="glass-card bg-card/80 p-8 rounded-3xl border border-border hover:shadow-2xl transition-all"
              >
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center mb-6">
                  <Target className="w-8 h-8 text-primary-foreground" />
                </div>
                <h3 className="font-display font-bold text-2xl text-foreground mb-4">Our Mission</h3>
                <p className="text-muted-foreground leading-relaxed">
                  To deliver exceptional construction and finishing services that transform spaces, 
                  exceed expectations, and create lasting value for our clients through quality 
                  craftsmanship, innovation, and unwavering commitment to excellence. We aim to 
                  build a reputation as the most trusted name in premium finishing services.
                </p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="glass-card bg-card/80 p-8 rounded-3xl border border-border hover:shadow-2xl transition-all"
              >
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-accent to-amber-400 flex items-center justify-center mb-6">
                  <Zap className="w-8 h-8 text-foreground" />
                </div>
                <h3 className="font-display font-bold text-2xl text-foreground mb-4">Our Vision</h3>
                <p className="text-muted-foreground leading-relaxed">
                  To become the most sought-after construction finishing company in the UK, 
                  recognized for our exceptional quality, innovative solutions, and the outstanding 
                  relationships we build with our clients. We envision growth through excellence 
                  and customer satisfaction.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="section-padding">
          <div className="container mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center max-w-3xl mx-auto mb-16"
            >
              <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-4">
                Our Values
              </span>
              <h2 className="font-display font-bold text-3xl md:text-4xl text-foreground">
                What We <span className="text-gradient">Stand For</span>
              </h2>
            </motion.div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {values.map((value, index) => (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="group bg-card rounded-2xl p-6 border border-border hover:shadow-xl transition-all hover:-translate-y-1"
                >
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary/10 to-secondary/10 flex items-center justify-center mb-4 group-hover:from-primary group-hover:to-secondary transition-all">
                    <value.icon className="w-7 h-7 text-primary group-hover:text-primary-foreground transition-colors" />
                  </div>
                  <h3 className="font-display font-bold text-lg text-foreground mb-2">{value.title}</h3>
                  <p className="text-muted-foreground text-sm">{value.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 bg-gradient-to-r from-primary via-[hsl(210,80%,35%)] to-secondary relative overflow-hidden">
          {/* Floating Elements */}
          <motion.div
            animate={{ y: [-20, 20, -20] }}
            transition={{ duration: 6, repeat: Infinity }}
            className="absolute top-10 left-[10%] w-16 h-16 border-2 border-white/20 rounded-xl"
          />
          <motion.div
            animate={{ y: [20, -20, 20] }}
            transition={{ duration: 8, repeat: Infinity }}
            className="absolute bottom-10 right-[10%] w-24 h-24 bg-white/10 rounded-full blur-xl"
          />
          <div className="container mx-auto px-4 text-center relative z-10">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="font-display font-bold text-3xl md:text-4xl text-white mb-6"
            >
              Ready to Transform Your Space?
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-xl text-white/80 mb-8 max-w-2xl mx-auto"
            >
              Get in touch today for a free consultation and quote
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-4"
            >
              <Button variant="heroSolid" size="xl" asChild>
                <Link to="/contact">Get Your Free Quote</Link>
              </Button>
              <Button variant="hero" size="xl" asChild>
                <a href="tel:07523197092">
                  <Phone className="w-5 h-5" />
                  Call Now
                </a>
              </Button>
              <Button variant="hero" size="xl" asChild>
                <a href="https://wa.me/447523197092" target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="w-5 h-5" />
                  WhatsApp
                </a>
              </Button>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default About;
