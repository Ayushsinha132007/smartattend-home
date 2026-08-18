import { motion } from "framer-motion";
import {
  ArrowUpRight,
  BrainCircuit,
  ShieldAlert,
  Sparkles,
  TrendingDown,
  TrendingUp,
} from "lucide-react";

const insights = [
  {
    icon: TrendingUp,
    label: "Positive trend",
    title: "Attendance is improving",
    description:
      "Your average attendance has moved upward across the last three weeks.",
    value: "+4.2%",
    type: "positive",
  },
  {
    icon: ShieldAlert,
    label: "Needs attention",
    title: "12 students may need support",
    description:
      "Students below the configured attendance threshold are surfaced automatically.",
    value: "12",
    type: "warning",
  },
  {
    icon: TrendingDown,
    label: "Pattern detected",
    title: "Friday attendance dips",
    description:
      "Friday sessions show a recurring drop compared with the rest of the week.",
    value: "-8.4%",
    type: "negative",
  },
];

function Insights() {
  return (
    <section
      id="insights"
      className="overflow-hidden px-6 py-24 lg:px-8 lg:py-32"
    >
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-14 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
          {/* Section introduction */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
          >
            <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#111111] text-white">
              <BrainCircuit size={19} />
            </div>

            <p className="mt-7 text-xs font-semibold uppercase tracking-[0.18em] text-black/40">
              From data to decisions
            </p>

            <h2 className="mt-5 max-w-xl font-[Manrope] text-4xl font-bold leading-[1.08] tracking-[-0.04em] text-[#111111] sm:text-5xl">
              The useful part starts after attendance is recorded.
            </h2>

            <p className="mt-6 max-w-lg text-base leading-7 text-black/50">
              SmartAttend looks beyond individual attendance records to
              surface patterns that help faculty understand what is changing
              inside their classrooms.
            </p>

            <div className="mt-8 flex items-center gap-2 text-xs font-medium text-black/40">
              <Sparkles size={14} />
              <span>Illustrative product intelligence</span>
            </div>
          </motion.div>

          {/* Insight cards */}
          <div className="space-y-3">
            {insights.map((insight, index) => {
              const Icon = insight.icon;

              return (
                <motion.article
                  key={insight.title}
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{
                    duration: 0.6,
                    delay: index * 0.12,
                  }}
                  className="group rounded-[24px] border border-black/8 bg-white p-5 shadow-[0_12px_40px_rgba(0,0,0,0.04)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_50px_rgba(0,0,0,0.08)] sm:p-6"
                >
                  <div className="flex items-start gap-4">
                    <div
                      className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl ${
                        insight.type === "positive"
                          ? "bg-[#e6f5ed] text-[#28734e]"
                          : insight.type === "warning"
                            ? "bg-[#f5eee1] text-[#8a6428]"
                            : "bg-[#f2e7e7] text-[#8a3d3d]"
                      }`}
                    >
                      <Icon size={18} />
                    </div>

                    <div className="min-w-0 flex-1">
                      <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                        <div>
                          <p className="text-[10px] font-semibold uppercase tracking-[0.12em] text-black/35">
                            {insight.label}
                          </p>

                          <h3 className="mt-1 text-base font-semibold tracking-tight text-[#111111]">
                            {insight.title}
                          </h3>
                        </div>

                        <span
                          className={`w-fit rounded-full px-2.5 py-1 text-[10px] font-bold ${
                            insight.type === "positive"
                              ? "bg-[#edf7f1] text-[#28734e]"
                              : insight.type === "warning"
                                ? "bg-[#f8f1e7] text-[#8a6428]"
                                : "bg-[#f5eaea] text-[#8a3d3d]"
                          }`}
                        >
                          {insight.value}
                        </span>
                      </div>

                      <p className="mt-2 max-w-xl text-sm leading-6 text-black/45">
                        {insight.description}
                      </p>
                    </div>

                    <div className="hidden h-9 w-9 items-center justify-center rounded-full border border-black/8 text-black/30 transition-all group-hover:border-black/15 group-hover:text-black sm:flex">
                      <ArrowUpRight size={15} />
                    </div>
                  </div>
                </motion.article>
              );
            })}
          </div>
        </div>

        {/* Bottom insight panel */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
          className="mt-14 overflow-hidden rounded-[28px] bg-[#111111] p-6 text-white sm:p-8 lg:p-10"
        >
          <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-white/35">
                A clearer classroom view
              </p>

              <h3 className="mt-4 max-w-2xl font-[Manrope] text-2xl font-bold leading-tight tracking-[-0.03em] sm:text-3xl">
                Stop looking at attendance as a number. Start seeing it as a
                signal.
              </h3>

              <p className="mt-4 max-w-2xl text-sm leading-6 text-white/45">
                These examples demonstrate the kind of patterns the product
                could surface from real classroom data.
              </p>
            </div>

            <div className="flex h-20 w-20 shrink-0 items-center justify-center rounded-[22px] border border-white/10 bg-white/5">
              <BrainCircuit size={30} className="text-white/70" />
            </div>
          </div>
        </motion.div>

        <p className="mt-4 text-center text-[9px] text-black/25">
          Product concept · Insight values shown above are illustrative demo
          data
        </p>
      </div>
    </section>
  );
}

export default Insights;