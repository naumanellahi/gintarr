import { motion } from "framer-motion";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

const Terms = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        {/* Hero */}
        <section className="relative py-24 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-primary via-[hsl(210,80%,35%)] to-secondary" />
          <div className="relative container mx-auto px-4 text-center">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              className="font-display font-bold text-4xl md:text-5xl text-white mb-4"
            >
              Terms of Service
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-white/80"
            >
              Last updated: December 2024
            </motion.p>
          </div>
        </section>

        {/* Content */}
        <section className="section-padding">
          <div className="container mx-auto max-w-4xl">
            <div className="bg-card rounded-3xl p-8 md:p-12 shadow-lg border border-border prose prose-lg max-w-none">
              <h2 className="font-display font-bold text-2xl text-foreground mb-4">Agreement to Terms</h2>
              <p className="text-muted-foreground mb-6">
                By engaging our services, you agree to these Terms of Service. Please read them carefully before proceeding with any work.
              </p>

              <h2 className="font-display font-bold text-2xl text-foreground mb-4">Services</h2>
              <p className="text-muted-foreground mb-6">
                Gintar Traders Ltd provides construction and finishing services including plastering, painting, flooring, and interior decoration. All work is carried out to professional standards.
              </p>

              <h2 className="font-display font-bold text-2xl text-foreground mb-4">Quotes & Pricing</h2>
              <ul className="list-disc pl-6 text-muted-foreground mb-6 space-y-2">
                <li>All quotes are valid for 30 days unless otherwise stated</li>
                <li>Prices are based on the scope of work described in the quote</li>
                <li>Any additional work will be quoted separately</li>
                <li>Payment terms are outlined in individual quotes</li>
              </ul>

              <h2 className="font-display font-bold text-2xl text-foreground mb-4">Warranties</h2>
              <p className="text-muted-foreground mb-6">
                We provide a 12-month warranty on all workmanship. This warranty covers defects arising from poor workmanship but does not cover damage caused by external factors, misuse, or normal wear and tear.
              </p>

              <h2 className="font-display font-bold text-2xl text-foreground mb-4">Cancellation</h2>
              <p className="text-muted-foreground mb-6">
                Cancellations must be made in writing at least 48 hours before scheduled work. Cancellations made with less notice may be subject to a cancellation fee.
              </p>

              <h2 className="font-display font-bold text-2xl text-foreground mb-4">Liability</h2>
              <p className="text-muted-foreground mb-6">
                We carry public liability insurance and will take responsibility for any damage caused by our work. However, we are not liable for pre-existing conditions or issues not related to our services.
              </p>

              <h2 className="font-display font-bold text-2xl text-foreground mb-4">Contact</h2>
              <p className="text-muted-foreground">
                For any questions regarding these terms, please contact us at:<br />
                Email: Gpaskevicius50@gmail.com<br />
                Phone: 07523 197092
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Terms;
