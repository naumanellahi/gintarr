import { motion } from "framer-motion";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

const ReturnPolicy = () => {
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
              Return Policy
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
                At Gintar Traders Ltd, we are committed to delivering exceptional construction, plastering, painting, flooring, and interior decoration services. As a service-based business, we understand that circumstances may sometimes require adjustments to your project. This Return Policy outlines the conditions under which we accept return requests and the procedures for addressing any concerns you may have.
              </p>

              <h2 className="font-display font-bold text-2xl text-foreground mb-4">Nature of Our Services</h2>
              <p className="text-muted-foreground mb-6">
                Please note that Gintar Traders Ltd provides professional construction and finishing services rather than physical products. As such, traditional "returns" in the retail sense do not apply to our business model. However, we have established comprehensive policies to ensure your complete satisfaction with our workmanship.
              </p>

              <h2 className="font-display font-bold text-2xl text-foreground mb-4">Non-Returnable Services Disclaimer</h2>
              <p className="text-muted-foreground mb-4">
                Due to the nature of construction and finishing services, the following cannot be "returned" or reversed:
              </p>
              <ul className="list-disc pl-6 text-muted-foreground mb-6 space-y-2">
                <li>Completed plastering work that has been applied and cured</li>
                <li>Paint and decorative finishes that have been applied to surfaces</li>
                <li>Flooring installations that have been permanently affixed</li>
                <li>Custom interior decoration work tailored to your specifications</li>
                <li>Labour hours expended on project completion</li>
                <li>Materials that have been cut, prepared, or customised for your project</li>
              </ul>

              <h2 className="font-display font-bold text-2xl text-foreground mb-4">Client Satisfaction Process</h2>
              <p className="text-muted-foreground mb-4">
                Your satisfaction is our priority. We have implemented a comprehensive satisfaction process to address any concerns:
              </p>
              <ul className="list-disc pl-6 text-muted-foreground mb-6 space-y-2">
                <li><strong>Initial Consultation:</strong> We provide detailed consultations to ensure complete understanding of your requirements before work commences</li>
                <li><strong>Progress Updates:</strong> Regular updates and check-ins throughout the project to ensure alignment with your expectations</li>
                <li><strong>Quality Inspection:</strong> Thorough inspection upon completion with your opportunity to review and approve the work</li>
                <li><strong>Snag List:</strong> We address any minor issues or touch-ups identified during the final walkthrough at no additional cost</li>
                <li><strong>Guarantee Period:</strong> Our workmanship is backed by a guarantee period during which we will rectify any defects at no charge</li>
              </ul>

              <h2 className="font-display font-bold text-2xl text-foreground mb-4">Conditions for Accepting Return Requests</h2>
              <p className="text-muted-foreground mb-4">
                While services cannot be returned in the traditional sense, we will consider rework or remediation requests under the following conditions:
              </p>
              <ul className="list-disc pl-6 text-muted-foreground mb-6 space-y-2">
                <li>The request is made within 14 days of project completion</li>
                <li>The concern relates to workmanship that does not meet industry standards</li>
                <li>The issue is documented with photographs and a written description</li>
                <li>The problem is not a result of third-party interference or client-caused damage</li>
                <li>The concern relates to the originally agreed scope of work</li>
                <li>Normal wear and tear or environmental factors are not the cause</li>
              </ul>

              <h2 className="font-display font-bold text-2xl text-foreground mb-4">Return Request Timeline</h2>
              <p className="text-muted-foreground mb-4">
                To ensure timely resolution of any concerns, please adhere to the following timeline:
              </p>
              <ul className="list-disc pl-6 text-muted-foreground mb-6 space-y-2">
                <li><strong>Within 24 hours:</strong> Report any immediately visible defects or concerns</li>
                <li><strong>Within 7 days:</strong> Notify us of any issues that become apparent during normal use</li>
                <li><strong>Within 14 days:</strong> Submit formal return or rework requests with full documentation</li>
                <li><strong>Beyond 14 days:</strong> Requests will be assessed on a case-by-case basis and may be subject to additional charges</li>
              </ul>

              <h2 className="font-display font-bold text-2xl text-foreground mb-4">How to Submit a Return Request</h2>
              <p className="text-muted-foreground mb-4">
                To submit a return or rework request, please follow these steps:
              </p>
              <ol className="list-decimal pl-6 text-muted-foreground mb-6 space-y-2">
                <li>Contact us via email or telephone to notify us of your concern</li>
                <li>Provide your project reference number and completion date</li>
                <li>Submit photographs clearly showing the issue(s)</li>
                <li>Include a written description of your concerns</li>
                <li>Our team will acknowledge your request within 48 hours</li>
                <li>A site visit will be arranged to assess the situation</li>
                <li>We will provide a written response with our proposed resolution within 5 working days</li>
              </ol>

              <h2 className="font-display font-bold text-2xl text-foreground mb-4">Exclusions</h2>
              <p className="text-muted-foreground mb-4">
                Return or rework requests will not be accepted in the following circumstances:
              </p>
              <ul className="list-disc pl-6 text-muted-foreground mb-6 space-y-2">
                <li>Issues caused by client interference with work in progress</li>
                <li>Damage resulting from improper use or maintenance</li>
                <li>Changes to colour, texture, or finish preferences after approval</li>
                <li>Variations in natural materials that are characteristic of the product</li>
                <li>Issues arising from client-supplied materials</li>
                <li>Damage caused by subsequent work performed by third parties</li>
              </ul>

              <h2 className="font-display font-bold text-2xl text-foreground mb-4">Contact Us</h2>
              <p className="text-muted-foreground">
                If you have any questions about this Return Policy or wish to submit a request, please contact us at:<br />
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

export default ReturnPolicy;
