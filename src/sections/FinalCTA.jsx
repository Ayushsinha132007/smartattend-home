import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";

function FinalCTA() {
  return (
    <section className="px-6 py-24 lg:px-8 lg:py-32">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="relative overflow-hidden rounded-[32px] bg-[#111111] px-6 py-16 text-white sm:px-10 sm:py-20 lg:px-16 lg:py-24"
        >
          {/* Decorative background */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-[#dff5ec] opacity-20 blur-3xl"
          />

          <div
            aria-hidden="true"
            className="pointer-events-none absolute -bottom-32 -left-24 h-80 w-80 rounded-full bg-white opacity-5 blur-3xl"
          />

          <div className="relative z-10 mx-auto max-w-3xl text-center">
            <div className="mx-auto flex w-fit items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3.5 py-2 text-xs font-medium text-white/55 backdrop-blur-sm">
              <Sparkles size={14} />
              <span>Built around better classroom decisions</span>
            </div>

            <h2 className="mt-7 font-[Manrope] text-4xl font-extrabold leading-[1.05] tracking-[-0.045em] sm:text-5xl lg:text-6xl">
              Make every class count.
            </h2>

            <p className="mx-auto mt-6 max-w-xl text-sm leading-6 text-white/45 sm:text-base">
              Bring attendance, patterns, and classroom signals into one
              focused workspace designed to help faculty act earlier.
            </p>

            <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <a
                href="#product"
                className="group inline-flex items-center justify-center gap-2 rounded-full bg-white px-5 py-3.5 text-sm font-semibold text-[#111111] transition-all duration-200 hover:-translate-y-0.5 hover:shadow-2xl"
              >
                Explore the platform
                <ArrowRight
                  size={16}
                  className="transition-transform duration-200 group-hover:translate-x-1"
                />
              </a>

              <a
                href="#how-it-works"
                className="inline-flex items-center justify-center rounded-full border border-white/10 bg-white/5 px-5 py-3.5 text-sm font-semibold text-white/80 backdrop-blur-sm transition-colors hover:bg-white/10"
              >
                See how it works
              </a>
            </div>

            <p className="mt-7 text-[10px] text-white/25">
              Product concept · No real customer claims or usage figures
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default FinalCTA;