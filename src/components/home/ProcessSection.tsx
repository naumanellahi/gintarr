import { motion } from "framer-motion";
import { ClipboardCheck, Ruler, HardHat, Sparkles, CheckCircle } from "lucide-react";

const steps = [
  {
    icon: ClipboardCheck,
    title: "Consultation",
    description: "We begin with a detailed consultation to understand your vision, requirements, and budget.",
    color: "from-primary to-blue-400",
  },
  {
    icon: Ruler,
    title: "Planning & Design",
    description: "Our experts create a comprehensive plan with designs, materials, and timeline.",
    color: "from-blue-400 to-secondary",
  },
  {
    icon: HardHat,
    title: "Execution",
    description: "Our skilled craftsmen bring your vision to life with precision and expertise.",
    color: "from-secondary to-teal-400",
  },
  {
    icon: Sparkles,
    title: "Final Touches",
    description: "We add the finishing touches and ensure every detail meets our high standards.",
    color: "from-teal-400 to-accent",
  },
  {
    icon: CheckCircle,
    title: "Handover",
    description: "Final walkthrough and handover of your transformed space with full satisfaction guarantee.",
    color: "from-accent to-amber-400",
  },
];

export const ProcessSection = () => {
  return (
    <section className="section-padding relative overflow-hidden bg-gradient-to-br from-foreground via-[hsl(220,30%,10%)] to-[hsl(220,40%,6%)]">
      {/* Background Decorations */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-0 w-96 h-96 bg-primary/10 rounded-full blur-[100px]" />
        <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-secondary/10 rounded-full blur-[100px]" />
      </div>

      <div className="relative container mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-20"
        >
          <span className="inline-block px-4 py-2 rounded-full bg-white/10 text-white text-sm font-semibold mb-4">
            Our Process
          </span>
          <h2 className="font-display font-bold text-3xl md:text-4xl lg:text-5xl text-white mb-6">
            How We{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-amber-300">
              Transform
            </span>{" "}
            Your Space
          </h2>
          <p className="text-lg text-white/70">
            Our proven 5-step process ensures every project is delivered with 
            excellence, on time, and within budget.
          </p>
        </motion.div>

        {/* Process Steps */}
        <div className="relative">
          {/* Connection Line */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-primary via-secondary to-accent -translate-y-1/2 opacity-30" />

          <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-8">
            {steps.map((step, index) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 }}
                className="relative group"
              >
                {/* Step Number */}
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-gradient-to-r from-primary to-secondary flex items-center justify-center text-primary-foreground font-bold text-sm z-10">
                  {index + 1}
                </div>

                {/* Card */}
                <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 pt-10 text-center hover:bg-white/10 transition-all duration-300 group-hover:-translate-y-2">
                  {/* Icon */}
                  <div className={`w-16 h-16 mx-auto rounded-2xl bg-gradient-to-br ${step.color} flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                    <step.icon className="w-8 h-8 text-white" />
                  </div>

                  {/* Content */}
                  <h3 className="font-display font-bold text-lg text-white mb-3">
                    {step.title}
                  </h3>
                  <p className="text-white/60 text-sm leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
