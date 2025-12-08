import { motion } from "framer-motion";
import { Award, Users, Target, Lightbulb } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const features = [
  {
    icon: Award,
    title: "Quality Craftsmanship",
    description: "Every project reflects our commitment to excellence and attention to detail.",
  },
  {
    icon: Users,
    title: "Expert Team",
    description: "Our skilled professionals bring years of experience to every job.",
  },
  {
    icon: Target,
    title: "Precision Work",
    description: "We deliver results that exceed expectations with meticulous precision.",
  },
  {
    icon: Lightbulb,
    title: "Innovative Solutions",
    description: "Creative approaches to transform your vision into reality.",
  },
];

export const AboutPreview = () => {
  return (
    <section className="section-padding relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-muted/30 to-background" />
      <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-gradient-to-bl from-primary/5 to-transparent rounded-full blur-3xl" />

      <div className="relative container mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image Side */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative">
              {/* Main Image */}
              <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&q=80"
                  alt="Professional construction work"
                  className="w-full h-[500px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/50 via-transparent to-transparent" />
              </div>

              {/* Floating Card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                className="absolute -bottom-8 -right-8 bg-card rounded-2xl p-6 shadow-2xl border border-border"
              >
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                    <span className="text-3xl font-display font-bold text-primary-foreground">15+</span>
                  </div>
                  <div>
                    <p className="font-display font-semibold text-foreground">Years of</p>
                    <p className="text-muted-foreground">Experience</p>
                  </div>
                </div>
              </motion.div>

              {/* Decorative Element */}
              <div className="absolute -top-6 -left-6 w-24 h-24 border-4 border-accent/30 rounded-2xl" />
            </div>
          </motion.div>

          {/* Content Side */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-4">
              About Us
            </span>
            <h2 className="font-display font-bold text-3xl md:text-4xl lg:text-5xl text-foreground mb-6 leading-tight">
              Building Excellence,{" "}
              <span className="text-gradient">Delivering Trust</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              At Gintar Traders Ltd, we are passionate about transforming spaces into stunning 
              masterpieces. With over 15 years of experience in construction and finishing, 
              we've built a reputation for quality, reliability, and customer satisfaction.
            </p>

            {/* Features Grid */}
            <div className="grid sm:grid-cols-2 gap-6 mb-8">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-start gap-4 group"
                >
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/10 to-secondary/10 flex items-center justify-center group-hover:from-primary group-hover:to-secondary transition-all duration-300">
                    <feature.icon className="w-6 h-6 text-primary group-hover:text-primary-foreground transition-colors" />
                  </div>
                  <div>
                    <h4 className="font-display font-semibold text-foreground mb-1">{feature.title}</h4>
                    <p className="text-sm text-muted-foreground">{feature.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <Button variant="gradient" size="lg" asChild>
              <Link to="/about">
                Learn More About Us
              </Link>
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
