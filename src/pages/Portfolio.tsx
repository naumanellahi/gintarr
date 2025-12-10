import { motion } from "framer-motion";
import { useState } from "react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { X, Phone, MessageCircle, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const categories = ["All", "Plastering", "Painting", "Flooring", "Interior"];

const projects = [
  { id: 1, title: "Modern Living Room Finish", category: "Interior", image: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=800&q=80", description: "Premium interior decoration showcase" },
  { id: 2, title: "Luxury Bedroom Painting", category: "Painting", image: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800&q=80", description: "Elegant wall painting techniques" },
  { id: 3, title: "Executive Office Flooring", category: "Flooring", image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80", description: "Professional hardwood installation" },
  { id: 4, title: "Contemporary Kitchen", category: "Interior", image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&q=80", description: "Complete kitchen transformation" },
  { id: 5, title: "Commercial Wall Plastering", category: "Plastering", image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&q=80", description: "Smooth finish plastering work" },
  { id: 6, title: "Spa Bathroom Design", category: "Interior", image: "https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?w=800&q=80", description: "Luxury bathroom finishing" },
  { id: 7, title: "Retail Space Transformation", category: "Painting", image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&q=80", description: "Commercial painting excellence" },
  { id: 8, title: "Hallway Plastering Work", category: "Plastering", image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80", description: "Seamless wall finishing" },
  { id: 9, title: "Premium Hardwood Flooring", category: "Flooring", image: "https://images.unsplash.com/photo-1581858726788-75bc0f6a952d?w=800&q=80", description: "Quality floor installation" },
];

const Portfolio = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const filteredProjects = activeCategory === "All"
    ? projects
    : projects.filter((p) => p.category === activeCategory);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        {/* Hero */}
        <section className="relative py-32 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-primary via-[hsl(210,80%,35%)] to-secondary" />
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1600&q=80')] bg-cover bg-center opacity-20" />
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
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              className="font-display font-bold text-4xl md:text-5xl lg:text-6xl text-white mb-6"
            >
              Our Portfolio
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xl text-white/80 max-w-2xl mx-auto"
            >
              Showcasing our craftsmanship and attention to detail
            </motion.p>
          </div>
        </section>

        {/* Filter */}
        <section className="py-12 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap justify-center gap-4">
              {categories.map((category) => (
                <motion.button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`px-6 py-3 rounded-full font-medium transition-all ${
                    activeCategory === category
                      ? "bg-gradient-to-r from-primary to-secondary text-primary-foreground shadow-lg"
                      : "bg-card border border-border text-foreground hover:bg-muted"
                  }`}
                >
                  {category}
                </motion.button>
              ))}
            </div>
          </div>
        </section>

        {/* Gallery */}
        <section className="section-padding">
          <div className="container mx-auto">
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProjects.map((project, index) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.05 }}
                  onClick={() => setSelectedImage(project.image)}
                  className="group relative rounded-2xl overflow-hidden cursor-pointer shadow-lg hover:shadow-2xl transition-all"
                >
                  <div className="aspect-[4/3]">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-foreground/90 via-foreground/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-full group-hover:translate-y-0 transition-transform">
                    <span className="inline-block px-3 py-1 text-xs text-accent font-semibold bg-accent/20 rounded-full mb-2">{project.category}</span>
                    <h3 className="font-display font-bold text-xl text-white">{project.title}</h3>
                    <p className="text-white/70 text-sm mt-1">{project.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 bg-gradient-to-r from-primary via-[hsl(210,80%,35%)] to-secondary relative overflow-hidden">
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
              Ready to Start Your Project?
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-xl text-white/80 mb-8 max-w-2xl mx-auto"
            >
              Contact us today for a free consultation and quote
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-4"
            >
              <Button variant="heroSolid" size="xl" asChild>
                <Link to="/contact">
                  Get Your Free Quote
                  <ArrowRight className="w-5 h-5" />
                </Link>
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

        {/* Lightbox */}
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-foreground/90 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <motion.button
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-white/20 transition-colors"
            >
              <X className="w-6 h-6" />
            </motion.button>
            <motion.img
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              src={selectedImage}
              alt="Project"
              className="max-w-full max-h-[90vh] rounded-2xl shadow-2xl"
            />
          </motion.div>
        )}
      </main>
      <Footer />
    </div>
  );
};

export default Portfolio;
