import { motion } from "framer-motion";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

const Privacy = () => {
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
              Privacy Policy
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
              <h2 className="font-display font-bold text-2xl text-foreground mb-4">Introduction</h2>
              <p className="text-muted-foreground mb-6">
                Gintar Traders Ltd ("we", "our", "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, and safeguard your personal information when you use our services or visit our website.
              </p>

              <h2 className="font-display font-bold text-2xl text-foreground mb-4">Information We Collect</h2>
              <p className="text-muted-foreground mb-4">We may collect the following types of information:</p>
              <ul className="list-disc pl-6 text-muted-foreground mb-6 space-y-2">
                <li>Name, email address, phone number, and postal address</li>
                <li>Details about your property and project requirements</li>
                <li>Communications you have with us</li>
                <li>Website usage data through cookies</li>
              </ul>

              <h2 className="font-display font-bold text-2xl text-foreground mb-4">How We Use Your Information</h2>
              <ul className="list-disc pl-6 text-muted-foreground mb-6 space-y-2">
                <li>To provide and improve our construction services</li>
                <li>To communicate with you about your project</li>
                <li>To send you quotes and invoices</li>
                <li>To respond to your inquiries</li>
                <li>To comply with legal obligations</li>
              </ul>

              <h2 className="font-display font-bold text-2xl text-foreground mb-4">Data Security</h2>
              <p className="text-muted-foreground mb-6">
                We implement appropriate security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction.
              </p>

              <h2 className="font-display font-bold text-2xl text-foreground mb-4">Your Rights</h2>
              <p className="text-muted-foreground mb-6">
                You have the right to access, correct, or delete your personal information. You may also object to or restrict certain processing of your data. To exercise these rights, please contact us.
              </p>

              <h2 className="font-display font-bold text-2xl text-foreground mb-4">Contact Us</h2>
              <p className="text-muted-foreground">
                If you have any questions about this Privacy Policy, please contact us at:<br />
                Email: Gpaskevicius50@gmail.com<br />
                Phone: 07523 197092<br />
                Address: 58 Grosvenor Road, Romford, RM7 0QT, UK
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Privacy;
