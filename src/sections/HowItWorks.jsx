import { motion } from "framer-motion";
import {
  ArrowDown,
  BarChart3,
  ScanFace,
  Sparkles,
} from "lucide-react";

const steps = [
  {
    number: "01",
    icon: ScanFace,
    title: "Capture",
    description:
      "Attendance enters the system through the workflow your institution chooses, without turning every class into an administrative task.",
  },
  {
    number: "02",
    icon: BarChart3,
    title: "Understand",
    description:
      "Attendance records become clear trends, class-level patterns, and student-level signals inside one focused workspace.",
  },
  {
    number: "03",
    icon: Sparkles,
    title: "Act",
    description:
      "Faculty can identify students and patterns that need attention before a small attendance issue becomes a bigger one.",
  },
];

function HowItWorks() {
  return (
    <section
      id="how-it-works"
      className="px-6 py-24 lg:px-8 lg:py-32"
    >
      <div className="mx-auto max-w-7xl">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="mx-auto max-w-2xl text-center"
        >
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-black/40">
            How it works
          </p>

          <h2 className="mt-5 font-[Manrope] text-4xl font-bold leading-[1.08] tracking-[-0.04em] text-[#111111] sm:text-5xl">
            From classroom activity to a clearer next step.
          </h2>

          <p className="mt-6 text-base leading-7 text-black/50">
            SmartAttend keeps the workflow simple: capture what happened,
            understand the pattern, and decide what deserves attention.
          </p>
        </motion.div>

        {/* Steps */}
        <div className="relative mt-16">
          {/* Desktop connector */}
          <div
            aria-hidden="true"
            className="absolute left-[16.666%] right-[16.666%] top-12 hidden border-t border-dashed border-black/10 lg:block"
          />

          <div className="grid gap-4 lg:grid-cols-3">
            {steps.map((step, index) => {
              const Icon = step.icon;

              return (
                <motion.article
                  key={step.number}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{
                    duration: 0.6,
                    delay: index * 0.12,
                  }}
                  className="relative rounded-[28px] border border-black/8 bg-white p-6 shadow-[0_12px_40px_rgba(0,0,0,0.035)] sm:p-7"
                >
                  <div className="relative z-10 flex items-center justify-between">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#111111] text-white">
                      <Icon size={19} />
                    </div>

                    <span className="font-[Manrope] text-sm font-bold text-black/20">
                      {step.number}
                    </span>
                  </div>

                  <h3 className="mt-8 font-[Manrope] text-xl font-bold tracking-tight text-[#111111]">
                    {step.title}
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-black/45">
                    {step.description}
                  </p>

                  {index < steps.length - 1 && (
                    <div className="mt-6 flex items-center justify-center lg:hidden">
                      <div className="flex h-8 w-8 items-center justify-center rounded-full border border-black/8 bg-[#f7f7f5] text-black/30">
                        <ArrowDown size={14} />
                      </div>
                    </div>
                  )}
                </motion.article>
              );
            })}
          </div>
        </div>

        {/* Bottom statement */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
          className="mt-5 rounded-[28px] border border-black/8 bg-[#eeeee9] p-6 sm:p-8"
        >
          <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-black/35">
                The principle
              </p>

              <p className="mt-2 max-w-2xl font-[Manrope] text-lg font-semibold tracking-tight text-[#111111] sm:text-xl">
                Less time managing attendance. More time understanding what it
                tells you.
              </p>
            </div>

            <div className="shrink-0 rounded-full border border-black/8 bg-white px-4 py-2 text-[10px] font-semibold text-black/45">
              Simple by design
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default HowItWorks;