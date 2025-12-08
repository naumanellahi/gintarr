import { motion } from "framer-motion";
import { Paintbrush, Building, Square, Palette, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const services = [
  {
    icon: Building,
    title: "Plastering",
    description: "Expert plastering services for walls and ceilings. From smooth finishes to decorative textures, we create flawless surfaces.",
    image: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=600&q=80",
    features: ["Smooth & Textured", "Repairs & Restoration", "Artex Removal"],
  },
  {
    icon: Paintbrush,
    title: "Painting & Decorating",
    description: "Transform your space with professional painting. Interior and exterior solutions with premium finishes.",
    image: "https://images.unsplash.com/photo-1562259949-e8e7689d7828?w=600&q=80",
    features: ["Interior & Exterior", "Feature Walls", "Wallpapering"],
  },
  {
    icon: Square,
    title: "Flooring",
    description: "Complete flooring solutions from hardwood to tiles. Expert installation for lasting beauty and durability.",
    image: "https://images.unsplash.com/photo-1581858726788-75bc0f6a952d?w=600&q=80",
    features: ["Hardwood & Laminate", "Tiles & Vinyl", "Carpet Fitting"],
  },
  {
    icon: Palette,
    title: "Interior Decoration",
    description: "Full interior design and decoration services. Creating cohesive, stunning spaces that reflect your style.",
    image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=600&q=80",
    features: ["Design Consultation", "Color Schemes", "Complete Makeovers"],
  },
];

export const ServicesPreview = () => {
  return (
    <section className="section-padding relative overflow-hidden bg-gradient-to-b from-muted/30 via-muted/50 to-muted/30">
      {/* Background Decorations */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-secondary/5 rounded-full blur-3xl" />
      </div>

      <div className="relative container mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-4">
            Our Services
          </span>
          <h2 className="font-display font-bold text-3xl md:text-4xl lg:text-5xl text-foreground mb-6">
            Premium Construction &{" "}
            <span className="text-gradient">Finishing Solutions</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            From plastering to interior decoration, we provide comprehensive services 
            to transform your space into something extraordinary.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative bg-card rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 border border-border"
            >
              {/* Image */}
              <div className="relative h-56 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-card/50 to-transparent" />
                
                {/* Icon Badge */}
                <div className="absolute bottom-4 left-6 w-14 h-14 rounded-2xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <service.icon className="w-7 h-7 text-primary-foreground" />
                </div>
              </div>

              {/* Content */}
              <div className="p-6 pt-4">
                <h3 className="font-display font-bold text-2xl text-foreground mb-3 group-hover:text-primary transition-colors">
                  {service.title}
                </h3>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {service.description}
                </p>

                {/* Features */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {service.features.map((feature) => (
                    <span
                      key={feature}
                      className="px-3 py-1 rounded-full bg-muted text-sm text-muted-foreground"
                    >
                      {feature}
                    </span>
                  ))}
                </div>

                {/* Link */}
                <Link
                  to="/services"
                  className="inline-flex items-center gap-2 text-primary font-semibold group-hover:gap-4 transition-all"
                >
                  Learn More
                  <ArrowRight className="w-4 h-4" />
                </Link>
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
          <Button variant="gradient" size="lg" asChild>
            <Link to="/services">
              View All Services
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};
