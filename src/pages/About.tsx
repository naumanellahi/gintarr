import { motion } from "framer-motion";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Award, Users, Target, Shield, Heart, Zap, CheckCircle } from "lucide-react";

const values = [
  { icon: Shield, title: "Integrity", description: "Honest, transparent dealings in every project we undertake." },
  { icon: Award, title: "Quality", description: "Uncompromising standards in materials and workmanship." },
  { icon: Users, title: "Communication", description: "Clear, consistent updates throughout your project." },
  { icon: CheckCircle, title: "Safety", description: "Strict adherence to safety protocols and regulations." },
  { icon: Target, title: "Precision", description: "Meticulous attention to every detail." },
  { icon: Heart, title: "Reliability", description: "Dependable service you can count on." },
];

const team = [
  { name: "Gintaras P.", role: "Founder & Director", image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80" },
  { name: "James Wilson", role: "Lead Plasterer", image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&q=80" },
  { name: "Sarah Mitchell", role: "Interior Designer", image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&q=80" },
  { name: "Michael Brown", role: "Flooring Specialist", image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&q=80" },
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
          <div className="relative container mx-auto px-4 text-center">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
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
              Building excellence and delivering trust since 2010
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
                  A Legacy of <span className="text-gradient">Excellence</span>
                </h2>
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>
                    Gintar Traders Ltd was founded in 2010 with a simple mission: to deliver exceptional 
                    construction and finishing services that transform spaces and exceed expectations.
                  </p>
                  <p>
                    What began as a small family operation has grown into one of the most trusted names 
                    in construction finishing across the UK. Our journey has been defined by an unwavering 
                    commitment to quality, integrity, and customer satisfaction.
                  </p>
                  <p>
                    Today, we serve homeowners, property developers, and commercial clients with the same 
                    dedication and personal touch that defined our early days. Every project, regardless 
                    of size, receives our complete attention and expertise.
                  </p>
                  <p>
                    Our team of skilled craftsmen brings decades of combined experience to every job, 
                    ensuring that your vision becomes reality with precision and care.
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
                  alt="Our team at work"
                  className="rounded-3xl shadow-2xl"
                />
                <div className="absolute -bottom-8 -left-8 bg-gradient-to-br from-primary to-secondary rounded-2xl p-6 text-primary-foreground shadow-xl">
                  <div className="text-4xl font-display font-bold">15+</div>
                  <div className="text-sm opacity-80">Years Experience</div>
                </div>
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
                className="glass-card bg-card/80 p-8 rounded-3xl border border-border"
              >
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center mb-6">
                  <Target className="w-8 h-8 text-primary-foreground" />
                </div>
                <h3 className="font-display font-bold text-2xl text-foreground mb-4">Our Mission</h3>
                <p className="text-muted-foreground leading-relaxed">
                  To deliver exceptional construction and finishing services that transform spaces, 
                  exceed expectations, and create lasting value for our clients through quality 
                  craftsmanship, innovation, and unwavering commitment to excellence.
                </p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="glass-card bg-card/80 p-8 rounded-3xl border border-border"
              >
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-accent to-amber-400 flex items-center justify-center mb-6">
                  <Zap className="w-8 h-8 text-foreground" />
                </div>
                <h3 className="font-display font-bold text-2xl text-foreground mb-4">Our Vision</h3>
                <p className="text-muted-foreground leading-relaxed">
                  To be the most trusted and sought-after construction finishing company in the UK, 
                  recognized for our exceptional quality, innovative solutions, and the lasting 
                  relationships we build with our clients and communities.
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

        {/* Team */}
        <section className="section-padding bg-muted/30">
          <div className="container mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center max-w-3xl mx-auto mb-16"
            >
              <span className="inline-block px-4 py-2 rounded-full bg-accent/10 text-accent text-sm font-semibold mb-4">
                Our Team
              </span>
              <h2 className="font-display font-bold text-3xl md:text-4xl text-foreground">
                Meet Our <span className="text-gradient-gold">Experts</span>
              </h2>
            </motion.div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {team.map((member, index) => (
                <motion.div
                  key={member.name}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="group bg-card rounded-2xl overflow-hidden border border-border hover:shadow-xl transition-all"
                >
                  <div className="aspect-square overflow-hidden">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-4 text-center">
                    <h3 className="font-display font-bold text-lg text-foreground">{member.name}</h3>
                    <p className="text-muted-foreground text-sm">{member.role}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default About;
