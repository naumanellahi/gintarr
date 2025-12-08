import { motion } from "framer-motion";
import { useState } from "react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Phone, Mail, MapPin, Send, MessageCircle, Clock, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    await new Promise((resolve) => setTimeout(resolve, 1500));
    toast({
      title: "Message Sent Successfully!",
      description: "We'll get back to you within 24 hours.",
    });
    setFormData({ name: "", email: "", phone: "", service: "", message: "" });
    setIsSubmitting(false);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

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
              Contact Us
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xl text-white/80 max-w-2xl mx-auto"
            >
              Get in touch for a free consultation and quote
            </motion.p>
          </div>
        </section>

        {/* Contact Content */}
        <section className="section-padding">
          <div className="container mx-auto">
            <div className="grid lg:grid-cols-2 gap-12">
              {/* Form */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="bg-card rounded-3xl p-8 shadow-2xl border border-border"
              >
                <h3 className="font-display font-bold text-2xl text-foreground mb-6">Send Us a Message</h3>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">Name *</label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-xl bg-muted border border-border focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                        placeholder="Your full name"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">Phone *</label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-xl bg-muted border border-border focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                        placeholder="Your phone number"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">Email *</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-xl bg-muted border border-border focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                      placeholder="your@email.com"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">Service</label>
                    <select
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl bg-muted border border-border focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                    >
                      <option value="">Select a service</option>
                      <option value="plastering">Plastering</option>
                      <option value="painting">Painting & Decorating</option>
                      <option value="flooring">Flooring</option>
                      <option value="interior">Interior Decoration</option>
                      <option value="multiple">Multiple Services</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">Message *</label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={4}
                      className="w-full px-4 py-3 rounded-xl bg-muted border border-border focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all resize-none"
                      placeholder="Tell us about your project..."
                    />
                  </div>
                  <Button type="submit" variant="gradient" size="lg" disabled={isSubmitting} className="w-full">
                    {isSubmitting ? "Sending..." : <><Send className="w-5 h-5" /> Send Message</>}
                  </Button>
                </form>
              </motion.div>

              {/* Info */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="space-y-8"
              >
                <div className="grid sm:grid-cols-2 gap-4">
                  <a href="tel:07523197092" className="bg-gradient-to-br from-primary to-secondary p-6 rounded-2xl text-primary-foreground">
                    <Phone className="w-8 h-8 mb-4" />
                    <p className="text-white/80 text-sm mb-1">Call Us</p>
                    <p className="font-display font-bold text-lg">07523 197092</p>
                  </a>
                  <a href="https://wa.me/447523197092" target="_blank" rel="noopener noreferrer" className="bg-gradient-to-br from-green-500 to-green-600 p-6 rounded-2xl text-white">
                    <MessageCircle className="w-8 h-8 mb-4" />
                    <p className="text-white/80 text-sm mb-1">WhatsApp</p>
                    <p className="font-display font-bold text-lg">Quick Response</p>
                  </a>
                </div>

                <div className="bg-card rounded-2xl p-6 shadow-lg border border-border space-y-6">
                  <div className="flex items-start gap-4">
                    <Mail className="w-6 h-6 text-primary mt-1" />
                    <div>
                      <p className="text-sm text-muted-foreground mb-1">Email</p>
                      <a href="mailto:Gpaskevicius50@gmail.com" className="text-foreground hover:text-primary">Gpaskevicius50@gmail.com</a>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <MapPin className="w-6 h-6 text-primary mt-1" />
                    <div>
                      <p className="text-sm text-muted-foreground mb-1">Address</p>
                      <p className="text-foreground">58 Grosvenor Road, Romford, RM7 0QT, UK</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <Clock className="w-6 h-6 text-primary mt-1" />
                    <div>
                      <p className="text-sm text-muted-foreground mb-1">Working Hours</p>
                      <p className="text-foreground">Mon - Fri: 8:00 AM - 6:00 PM<br/>Sat: 9:00 AM - 4:00 PM</p>
                    </div>
                  </div>
                </div>

                {/* Map */}
                <div className="rounded-2xl overflow-hidden shadow-lg h-64">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2479.5!2d0.18!3d51.58!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNTHCsDM0JzQ4LjAiTiAwwrAxMCc0OC4wIkU!5e0!3m2!1sen!2suk!4v1234567890"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                  />
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;
