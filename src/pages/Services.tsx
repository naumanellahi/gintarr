import { motion } from "framer-motion";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Building, Paintbrush, Square, Palette, CheckCircle, ArrowRight, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const services = [
  {
    icon: Building,
    title: "Plastering",
    description: "Expert plastering services for walls and ceilings, from smooth finishes to decorative textures.",
    image: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=800&q=80",
    features: [
      "Smooth wall & ceiling finishes",
      "Textured and decorative plastering",
      "Repair and restoration work",
      "Artex removal and skimming",
      "Dry lining installation",
      "Rendering services",
    ],
  },
  {
    icon: Paintbrush,
    title: "Painting & Decorating",
    description: "Transform your space with professional painting services for both interior and exterior.",
    image: "https://images.unsplash.com/photo-1562259949-e8e7689d7828?w=800&q=80",
    features: [
      "Interior & exterior painting",
      "Feature wall creation",
      "Wallpaper installation",
      "Wood staining & varnishing",
      "Spray painting",
      "Commercial painting",
    ],
  },
  {
    icon: Square,
    title: "Flooring",
    description: "Complete flooring solutions from hardwood to tiles, expertly installed for lasting beauty.",
    image: "https://images.unsplash.com/photo-1581858726788-75bc0f6a952d?w=800&q=80",
    features: [
      "Hardwood flooring installation",
      "Laminate & engineered wood",
      "Tile & natural stone",
      "Vinyl & LVT flooring",
      "Carpet fitting",
      "Floor restoration & refinishing",
    ],
  },
  {
    icon: Palette,
    title: "Interior Decoration",
    description: "Full interior design and decoration services to create cohesive, stunning spaces.",
    image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=800&q=80",
    features: [
      "Interior design consultation",
      "Color scheme planning",
      "Space optimization",
      "Furniture placement advice",
      "Lighting design",
      "Complete room makeovers",
    ],
  },
];

const Services = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        {/* Hero */}
        <section className="relative py-32 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-primary via-[hsl(210,80%,35%)] to-secondary" />
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=1600&q=80')] bg-cover bg-center opacity-20" />
          <div className="relative container mx-auto px-4 text-center">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              className="font-display font-bold text-4xl md:text-5xl lg:text-6xl text-white mb-6"
            >
              Our Services
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xl text-white/80 max-w-2xl mx-auto"
            >
              Premium construction and finishing solutions tailored to your needs
            </motion.p>
          </div>
        </section>

        {/* Services */}
        <section className="section-padding">
          <div className="container mx-auto space-y-24">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className={`grid lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? "lg:flex-row-reverse" : ""
                }`}
              >
                <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                  <div className="relative">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="rounded-3xl shadow-2xl w-full h-[400px] object-cover"
                    />
                    <div className="absolute -bottom-6 -right-6 w-24 h-24 rounded-2xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center shadow-xl">
                      <service.icon className="w-12 h-12 text-primary-foreground" />
                    </div>
                  </div>
                </div>
                <div className={index % 2 === 1 ? "lg:order-1" : ""}>
                  <h2 className="font-display font-bold text-3xl md:text-4xl text-foreground mb-4">
                    {service.title}
                  </h2>
                  <p className="text-lg text-muted-foreground mb-6">{service.description}</p>
                  <ul className="grid sm:grid-cols-2 gap-3 mb-8">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-2 text-muted-foreground">
                        <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <div className="flex flex-wrap gap-4">
                    <Button variant="gradient" size="lg" asChild>
                      <Link to="/contact">
                        Get a Quote
                        <ArrowRight className="w-5 h-5 ml-2" />
                      </Link>
                    </Button>
                    <Button variant="outline" size="lg" asChild>
                      <a href="tel:07523197092">
                        <Phone className="w-5 h-5" />
                        Call Now
                      </a>
                    </Button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="py-24 bg-gradient-to-r from-primary to-secondary">
          <div className="container mx-auto px-4 text-center">
            <h2 className="font-display font-bold text-3xl md:text-4xl text-white mb-6">
              Ready to Start Your Project?
            </h2>
            <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
              Contact us today for a free consultation and quote
            </p>
            <Button variant="heroSolid" size="xl" asChild>
              <Link to="/contact">Get Your Free Quote</Link>
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Services;
