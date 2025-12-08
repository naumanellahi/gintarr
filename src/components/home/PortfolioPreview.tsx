import { motion } from "framer-motion";
import { useState } from "react";
import { ArrowRight, ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const projects = [
  {
    id: 1,
    title: "Modern Living Room",
    category: "Interior Decoration",
    image: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=800&q=80",
    description: "Complete living room transformation with custom paint and flooring.",
  },
  {
    id: 2,
    title: "Luxury Bedroom Suite",
    category: "Painting & Plastering",
    image: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800&q=80",
    description: "Premium plastering and elegant paint finishes for a luxury feel.",
  },
  {
    id: 3,
    title: "Contemporary Office",
    category: "Flooring",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80",
    description: "Professional hardwood flooring installation for corporate spaces.",
  },
  {
    id: 4,
    title: "Kitchen Renovation",
    category: "Full Renovation",
    image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&q=80",
    description: "Complete kitchen makeover with custom tiling and decoration.",
  },
  {
    id: 5,
    title: "Restaurant Interior",
    category: "Commercial",
    image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&q=80",
    description: "Stunning commercial space with unique finishes and textures.",
  },
  {
    id: 6,
    title: "Bathroom Design",
    category: "Tiling & Decoration",
    image: "https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?w=800&q=80",
    description: "Elegant bathroom renovation with premium tiles and fixtures.",
  },
];

export const PortfolioPreview = () => {
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  return (
    <section className="section-padding relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-muted/30" />

      <div className="relative container mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="inline-block px-4 py-2 rounded-full bg-accent/10 text-accent text-sm font-semibold mb-4">
            Our Portfolio
          </span>
          <h2 className="font-display font-bold text-3xl md:text-4xl lg:text-5xl text-foreground mb-6">
            Featured{" "}
            <span className="text-gradient-gold">Projects</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Explore our collection of stunning transformations. Each project showcases 
            our commitment to quality and attention to detail.
          </p>
        </motion.div>

        {/* Portfolio Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              onMouseEnter={() => setHoveredId(project.id)}
              onMouseLeave={() => setHoveredId(null)}
              className="group relative rounded-2xl overflow-hidden cursor-pointer shadow-lg hover:shadow-2xl transition-all duration-500"
            >
              {/* Image */}
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
              </div>

              {/* Overlay */}
              <div
                className={`absolute inset-0 bg-gradient-to-t from-foreground via-foreground/60 to-transparent transition-opacity duration-300 ${
                  hoveredId === project.id ? "opacity-100" : "opacity-0"
                }`}
              />

              {/* Category Badge */}
              <div className="absolute top-4 left-4">
                <span className="px-3 py-1.5 rounded-full bg-primary/90 text-primary-foreground text-xs font-semibold backdrop-blur-sm">
                  {project.category}
                </span>
              </div>

              {/* Content Overlay */}
              <div
                className={`absolute inset-0 flex flex-col justify-end p-6 transition-all duration-300 ${
                  hoveredId === project.id ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                }`}
              >
                <h3 className="font-display font-bold text-xl text-white mb-2">
                  {project.title}
                </h3>
                <p className="text-white/80 text-sm mb-4">{project.description}</p>
                <div className="flex items-center gap-2 text-accent font-semibold">
                  <span>View Project</span>
                  <ExternalLink className="w-4 h-4" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <Button variant="gold" size="lg" asChild>
            <Link to="/portfolio">
              View Full Portfolio
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};
