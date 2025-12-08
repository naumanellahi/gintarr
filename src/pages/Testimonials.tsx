import { motion } from "framer-motion";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Thompson",
    role: "Homeowner, London",
    content: "Gintar Traders transformed our living room beyond our expectations. The plastering work was flawless, and the painting finish is absolutely stunning. Professional, punctual, and a pleasure to work with!",
    rating: 5,
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&q=80",
  },
  {
    name: "James Mitchell",
    role: "Property Developer",
    content: "We've used Gintar Traders for multiple projects across our developments. Their attention to detail and commitment to deadlines is unmatched. Highly recommended for any construction finishing work.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&q=80",
  },
  {
    name: "Emma Davies",
    role: "Interior Designer",
    content: "As a designer, I'm very particular about execution. Gintar Traders consistently delivers exceptional quality. Their flooring installation work is precise, and they understand the importance of aesthetics.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&q=80",
  },
  {
    name: "Michael Brown",
    role: "Restaurant Owner",
    content: "The team renovated our restaurant space beautifully. From the initial consultation to the final touches, everything was handled professionally. Our customers love the new look!",
    rating: 5,
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&q=80",
  },
  {
    name: "Lisa Anderson",
    role: "Homeowner, Essex",
    content: "Outstanding service from start to finish. The team was professional, clean, and efficient. Our new flooring looks absolutely beautiful, and the plastering work is perfect.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=200&q=80",
  },
  {
    name: "David Wilson",
    role: "Office Manager",
    content: "Gintar Traders completed our office renovation on time and within budget. The quality of their work speaks for itself. We've already recommended them to other businesses.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&q=80",
  },
];

const Testimonials = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        {/* Hero */}
        <section className="relative py-32 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-primary via-[hsl(210,80%,35%)] to-secondary" />
          <div className="relative container mx-auto px-4 text-center">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              className="font-display font-bold text-4xl md:text-5xl lg:text-6xl text-white mb-6"
            >
              Client Testimonials
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xl text-white/80 max-w-2xl mx-auto"
            >
              Hear what our valued clients have to say about working with us
            </motion.p>
          </div>
        </section>

        {/* Testimonials Grid */}
        <section className="section-padding">
          <div className="container mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={testimonial.name}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-card rounded-3xl p-8 shadow-lg border border-border hover:shadow-2xl transition-all relative"
                >
                  <div className="absolute top-8 right-8 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <Quote className="w-6 h-6 text-primary" />
                  </div>
                  <div className="flex gap-1 mb-6">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-accent text-accent" />
                    ))}
                  </div>
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    "{testimonial.content}"
                  </p>
                  <div className="flex items-center gap-4">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-14 h-14 rounded-full object-cover ring-4 ring-primary/20"
                    />
                    <div>
                      <h4 className="font-display font-semibold text-foreground">{testimonial.name}</h4>
                      <p className="text-muted-foreground text-sm">{testimonial.role}</p>
                    </div>
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

export default Testimonials;
