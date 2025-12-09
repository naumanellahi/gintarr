import { motion } from "framer-motion";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

const RefundPolicy = () => {
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
              Refund Policy
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
                Gintar Traders Ltd is dedicated to providing high-quality construction, plastering, painting, flooring, and interior decoration services. We understand that transparency regarding our refund procedures is essential to maintaining trust with our valued clients. This Refund Policy outlines the circumstances under which refunds may or may not be issued, ensuring clarity and fairness for all parties.
              </p>

              <h2 className="font-display font-bold text-2xl text-foreground mb-4">When Refunds May Be Issued</h2>
              <p className="text-muted-foreground mb-4">
                Refunds may be considered in the following circumstances:
              </p>
              <ul className="list-disc pl-6 text-muted-foreground mb-6 space-y-2">
                <li><strong>Project Cancellation Before Commencement:</strong> If you cancel your project before any work has commenced and no materials have been ordered or prepared, you may be entitled to a full refund of any deposit paid, minus a reasonable administrative fee of 10%</li>
                <li><strong>Significant Deviation from Agreed Specifications:</strong> If completed work substantially deviates from the agreed specifications and we are unable to rectify the issue to your satisfaction, a partial or full refund may be considered</li>
                <li><strong>Failure to Complete Work:</strong> In the unlikely event that we are unable to complete the agreed work due to circumstances within our control, you will receive a refund proportionate to the uncompleted portion</li>
                <li><strong>Mutual Agreement:</strong> Refunds may be issued when both parties mutually agree to terminate the contract under specific documented circumstances</li>
              </ul>

              <h2 className="font-display font-bold text-2xl text-foreground mb-4">When Refunds Cannot Be Issued</h2>
              <p className="text-muted-foreground mb-4">
                As a service-based business, refunds are not available in the following situations:
              </p>
              <ul className="list-disc pl-6 text-muted-foreground mb-6 space-y-2">
                <li><strong>Completed and Approved Work:</strong> Once work has been completed and signed off by the client, refunds will not be issued for changes of mind or aesthetic preferences</li>
                <li><strong>Work in Progress Cancellation:</strong> If a project is cancelled after work has commenced, refund amounts will be calculated based on work completed and materials used</li>
                <li><strong>Client-Caused Delays:</strong> Where project delays are caused by client actions or inactions, no refunds will be issued for additional costs incurred</li>
                <li><strong>Third-Party Damage:</strong> Damage caused by other contractors, occupants, or environmental factors after our work is complete</li>
                <li><strong>Change of Mind:</strong> Requests for refunds based on preference changes after work approval</li>
                <li><strong>Force Majeure:</strong> Circumstances beyond our reasonable control including severe weather, pandemic restrictions, or supply chain disruptions</li>
                <li><strong>Non-Compliance with Aftercare Instructions:</strong> Issues arising from failure to follow our maintenance and aftercare guidance</li>
              </ul>

              <h2 className="font-display font-bold text-2xl text-foreground mb-4">Partial Refund Conditions</h2>
              <p className="text-muted-foreground mb-4">
                Partial refunds may be applicable in the following scenarios:
              </p>
              <ul className="list-disc pl-6 text-muted-foreground mb-6 space-y-2">
                <li><strong>Early Termination:</strong> If a project is terminated early by mutual agreement, you will receive a refund for work not yet performed, less materials already ordered or prepared and a reasonable administration fee</li>
                <li><strong>Scope Reduction:</strong> If the agreed scope of work is reduced during the project, appropriate adjustments will be made to the final invoice</li>
                <li><strong>Quality Issues:</strong> Where specific elements of work do not meet agreed standards and cannot be rectified, a proportionate refund may be offered</li>
                <li><strong>Overcharging:</strong> In the rare event of a billing error resulting in overcharging, the excess amount will be refunded promptly</li>
              </ul>

              <h2 className="font-display font-bold text-2xl text-foreground mb-4">Work-in-Progress Policy</h2>
              <p className="text-muted-foreground mb-4">
                Our work-in-progress policy is designed to protect both parties:
              </p>
              <ul className="list-disc pl-6 text-muted-foreground mb-6 space-y-2">
                <li><strong>Stage Payments:</strong> For larger projects, we operate a stage payment system where payment is requested upon completion of defined project milestones</li>
                <li><strong>Cancellation During Work:</strong> If you wish to cancel during an ongoing project, you must provide written notice. Payment will be due for all work completed up to the cancellation date, plus the cost of materials ordered or prepared</li>
                <li><strong>Restocking Fees:</strong> Specialised or custom materials that cannot be returned may be charged at full cost</li>
                <li><strong>Site Clearance:</strong> If cancellation occurs mid-project, any costs associated with site clearance and making the area safe will be the client's responsibility</li>
              </ul>

              <h2 className="font-display font-bold text-2xl text-foreground mb-4">Client Responsibility Clauses</h2>
              <p className="text-muted-foreground mb-4">
                To ensure a smooth project delivery and clear refund assessment, clients are responsible for:
              </p>
              <ul className="list-disc pl-6 text-muted-foreground mb-6 space-y-2">
                <li>Providing clear and accurate project specifications at the outset</li>
                <li>Ensuring adequate site access for our team and equipment</li>
                <li>Making timely decisions when approval is requested</li>
                <li>Informing us promptly of any concerns during the project</li>
                <li>Protecting completed work from damage by other trades or occupants</li>
                <li>Following all aftercare and maintenance instructions provided</li>
                <li>Making payments in accordance with the agreed payment schedule</li>
              </ul>

              <h2 className="font-display font-bold text-2xl text-foreground mb-4">Refund Request Process</h2>
              <p className="text-muted-foreground mb-4">
                To request a refund, please follow this process:
              </p>
              <ol className="list-decimal pl-6 text-muted-foreground mb-6 space-y-2">
                <li>Submit your refund request in writing via email within 14 days of the issue arising</li>
                <li>Include your project reference number, invoice details, and full explanation of your request</li>
                <li>Provide supporting documentation including photographs where applicable</li>
                <li>Our team will acknowledge receipt within 48 hours</li>
                <li>We will investigate your request and may arrange a site visit if necessary</li>
                <li>A written decision will be provided within 10 working days</li>
                <li>If approved, refunds will be processed within 14 working days using the original payment method</li>
              </ol>

              <h2 className="font-display font-bold text-2xl text-foreground mb-4">Dispute Resolution</h2>
              <p className="text-muted-foreground mb-6">
                In the event of a dispute regarding refunds, we are committed to resolving matters amicably. We encourage open dialogue and, where necessary, will engage in mediation through an appropriate industry body. Our goal is always to reach a fair resolution that maintains our professional relationship and protects the interests of all parties.
              </p>

              <h2 className="font-display font-bold text-2xl text-foreground mb-4">Contact Us</h2>
              <p className="text-muted-foreground">
                If you have any questions about this Refund Policy or wish to submit a refund request, please contact us at:<br />
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

export default RefundPolicy;
