import { motion } from "framer-motion";
import {
  ArrowUpRight,
  CalendarDays,
  CircleCheck,
  Clock3,
  MoreHorizontal,
  Users,
} from "lucide-react";

function ProductShowcase() {
  return (
    <section
      id="product"
      className="px-6 py-24 lg:px-8 lg:py-32"
    >
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-14 lg:grid-cols-[0.7fr_1.3fr] lg:items-end">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
          >
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-black/40">
              The product
            </p>

            <h2 className="mt-5 max-w-xl font-[Manrope] text-4xl font-bold leading-tight tracking-[-0.04em] text-[#111111] sm:text-5xl">
              Everything you need to understand attendance.
            </h2>

            <p className="mt-6 max-w-lg text-base leading-7 text-black/50">
              One focused workspace for classes, attendance patterns,
              students who need attention, and the decisions behind the
              numbers.
            </p>

            <a
              href="#insights"
              className="group mt-8 inline-flex items-center gap-2 text-sm font-semibold text-[#111111]"
            >
              Explore insights
              <ArrowUpRight
                size={16}
                className="transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              />
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="relative"
          >
            <div className="overflow-hidden rounded-[28px] border border-black/10 bg-[#111111] p-3 shadow-[0_35px_90px_rgba(0,0,0,0.14)]">
              <div className="rounded-[22px] bg-[#f7f7f5] p-4 sm:p-5">
                {/* Dashboard top bar */}
                <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                  <div>
                    <div className="flex items-center gap-2">
                      <CalendarDays
                        size={14}
                        className="text-black/35"
                      />
                      <span className="text-[10px] font-medium text-black/40">
                        Tuesday, August 18
                      </span>
                    </div>

                    <h3 className="mt-2 font-[Manrope] text-lg font-bold tracking-tight text-[#111111]">
                      Attendance overview
                    </h3>
                  </div>

                  <button
                    type="button"
                    className="flex w-fit items-center gap-2 rounded-full border border-black/10 bg-white px-3 py-2 text-[10px] font-medium text-black/55"
                  >
                    This week
                    <MoreHorizontal size={13} />
                  </button>
                </div>

                {/* Metrics */}
                <div className="mt-5 grid grid-cols-2 gap-3 lg:grid-cols-4">
                  <div className="rounded-2xl bg-[#111111] p-4 text-white">
                    <div className="flex items-center justify-between">
                      <span className="text-[9px] text-white/45">
                        Overall
                      </span>
                      <CircleCheck size={13} />
                    </div>

                    <p className="mt-3 text-2xl font-bold">92.4%</p>

                    <p className="mt-1 text-[9px] text-white/40">
                      +4.2% this week
                    </p>
                  </div>

                  <div className="rounded-2xl border border-black/5 bg-white p-4">
                    <Users size={14} className="text-black/35" />

                    <p className="mt-3 text-2xl font-bold text-[#111111]">
                      248
                    </p>

                    <p className="mt-1 text-[9px] text-black/35">
                      students tracked
                    </p>
                  </div>

                  <div className="rounded-2xl border border-black/5 bg-white p-4">
                    <Clock3 size={14} className="text-black/35" />

                    <p className="mt-3 text-2xl font-bold text-[#111111]">
                      24
                    </p>

                    <p className="mt-1 text-[9px] text-black/35">
                      classes this week
                    </p>
                  </div>

                  <div className="rounded-2xl border border-black/5 bg-white p-4">
                    <div className="h-3.5 w-3.5 rounded-full bg-[#dcefe5]" />

                    <p className="mt-3 text-2xl font-bold text-[#111111]">
                      12
                    </p>

                    <p className="mt-1 text-[9px] text-black/35">
                      need attention
                    </p>
                  </div>
                </div>

                {/* Main content */}
                <div className="mt-3 grid gap-3 lg:grid-cols-[1.25fr_0.75fr]">
                  {/* Chart */}
                  <div className="rounded-2xl border border-black/5 bg-white p-4">
                    <div className="flex items-start justify-between">
                      <div>
                        <p className="text-[9px] text-black/35">
                          Attendance performance
                        </p>
                        <p className="mt-1 text-sm font-semibold">
                          Weekly trend
                        </p>
                      </div>

                      <span className="rounded-full bg-[#edf7f1] px-2 py-1 text-[8px] font-semibold text-[#28734e]">
                        Improving
                      </span>
                    </div>

                    <div className="relative mt-8 h-36">
                      <div className="absolute inset-x-0 top-0 border-t border-dashed border-black/5" />
                      <div className="absolute inset-x-0 top-1/3 border-t border-dashed border-black/5" />
                      <div className="absolute inset-x-0 top-2/3 border-t border-dashed border-black/5" />
                      <div className="absolute inset-x-0 bottom-0 border-t border-dashed border-black/5" />

                      <svg
                        viewBox="0 0 500 150"
                        className="absolute inset-0 h-full w-full overflow-visible"
                        preserveAspectRatio="none"
                        aria-label="Illustrative attendance trend chart"
                      >
                        <motion.path
                          d="M0 115 C45 108 60 90 100 98 C145 108 160 65 205 76 C250 88 275 50 310 62 C350 75 375 32 410 45 C445 58 465 25 500 18"
                          fill="none"
                          stroke="#111111"
                          strokeWidth="3"
                          strokeLinecap="round"
                          initial={{ pathLength: 0 }}
                          whileInView={{ pathLength: 1 }}
                          viewport={{ once: true }}
                          transition={{ duration: 1.5, ease: "easeInOut" }}
                        />
                      </svg>

                      <div className="absolute bottom-[-18px] left-0 right-0 flex justify-between text-[8px] text-black/25">
                        <span>Mon</span>
                        <span>Tue</span>
                        <span>Wed</span>
                        <span>Thu</span>
                        <span>Fri</span>
                        <span>Sat</span>
                      </div>
                    </div>
                  </div>

                  {/* Students */}
                  <div className="rounded-2xl border border-black/5 bg-white p-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-[9px] text-black/35">
                          Student attention
                        </p>
                        <p className="mt-1 text-sm font-semibold">
                          Needs review
                        </p>
                      </div>

                      <span className="text-[9px] text-black/35">
                        12 students
                      </span>
                    </div>

                    <div className="mt-5 space-y-3">
                      {[
                        ["Aarav Mehta", "68%"],
                        ["Ananya Singh", "71%"],
                        ["Rohan Kumar", "73%"],
                        ["Ishita Sharma", "74%"],
                      ].map(([name, percentage]) => (
                        <div
                          key={name}
                          className="flex items-center justify-between"
                        >
                          <div className="flex min-w-0 items-center gap-2">
                            <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#f0f0ed] text-[9px] font-semibold text-black/50">
                              {name.charAt(0)}
                            </div>

                            <span className="truncate text-[9px] font-medium text-black/65">
                              {name}
                            </span>
                          </div>

                          <span className="ml-2 text-[9px] font-semibold text-black/40">
                            {percentage}
                          </span>
                        </div>
                      ))}
                    </div>

                    <button
                      type="button"
                      className="mt-5 w-full rounded-xl bg-[#f4f4f1] py-2.5 text-[9px] font-semibold text-black/55 transition-colors hover:bg-[#ebebe7]"
                    >
                      View students
                    </button>
                  </div>
                </div>

                <p className="mt-4 text-center text-[9px] text-black/25">
                  Product preview · Illustrative demo data
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default ProductShowcase;