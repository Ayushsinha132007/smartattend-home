import { motion } from "framer-motion";
import {
  ArrowRight,
  Check,
  Sparkles,
  TrendingUp,
  Users,
} from "lucide-react";

function Hero() {
  return (
    <section className="relative overflow-hidden px-6 pb-20 pt-36 lg:px-8 lg:pb-28 lg:pt-44">
      {/* Background glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-0 -z-10 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-[#dff5ec] opacity-70 blur-3xl"
      />

      <div className="mx-auto max-w-7xl">
        <div className="grid items-center gap-16 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
          {/* Hero content */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-black/10 bg-white/70 px-3.5 py-2 text-xs font-medium text-black/60 shadow-sm backdrop-blur-md">
              <Sparkles size={14} />
              <span>Attendance intelligence, reimagined</span>
            </div>

            <h1 className="max-w-3xl font-[Manrope] text-5xl font-extrabold leading-[1.02] tracking-[-0.045em] text-[#111111] sm:text-6xl lg:text-7xl">
              Know your classroom.
              <span className="block text-black/45">
                Before it becomes a problem.
              </span>
            </h1>

            <p className="mt-7 max-w-xl text-base leading-7 text-black/55 sm:text-lg">
              SmartAttend turns everyday attendance data into clear,
              actionable classroom insights — so faculty can spend less time
              managing spreadsheets and more time teaching.
            </p>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <a
                href="#product"
                className="group inline-flex items-center justify-center gap-2 rounded-full bg-[#111111] px-5 py-3.5 text-sm font-semibold text-white transition-all duration-200 hover:-translate-y-0.5 hover:shadow-xl"
              >
                Explore the platform
                <ArrowRight
                  size={16}
                  className="transition-transform duration-200 group-hover:translate-x-1"
                />
              </a>

              <a
                href="#how-it-works"
                className="inline-flex items-center justify-center rounded-full border border-black/10 bg-white/60 px-5 py-3.5 text-sm font-semibold text-[#111111] backdrop-blur-sm transition-all duration-200 hover:border-black/20 hover:bg-white"
              >
                See how it works
              </a>
            </div>

            <div className="mt-9 flex flex-wrap gap-x-6 gap-y-3 text-xs font-medium text-black/45">
              <span className="flex items-center gap-1.5">
                <Check size={14} />
                Automated workflows
              </span>

              <span className="flex items-center gap-1.5">
                <Check size={14} />
                Real-time insights
              </span>

              <span className="flex items-center gap-1.5">
                <Check size={14} />
                Built for classrooms
              </span>
            </div>
          </motion.div>

          {/* Dashboard preview */}
          <motion.div
            initial={{ opacity: 0, y: 35, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.15, ease: "easeOut" }}
            className="relative"
          >
            <div className="absolute -right-5 -top-5 h-28 w-28 rounded-full bg-[#cfeee0] opacity-70 blur-2xl" />

            <div className="relative overflow-hidden rounded-[28px] border border-black/10 bg-white p-3 shadow-[0_30px_80px_rgba(0,0,0,0.10)]">
              {/* Browser-style header */}
              <div className="flex items-center justify-between border-b border-black/5 px-4 py-3">
                <div className="flex gap-1.5">
                  <span className="h-2.5 w-2.5 rounded-full bg-black/10" />
                  <span className="h-2.5 w-2.5 rounded-full bg-black/10" />
                  <span className="h-2.5 w-2.5 rounded-full bg-black/10" />
                </div>

                <span className="text-[10px] font-medium text-black/30">
                  smartattend.app
                </span>

                <div className="h-5 w-5" />
              </div>

              {/* Dashboard */}
              <div className="grid gap-3 bg-[#f7f7f5] p-4 sm:grid-cols-[0.7fr_1.3fr]">
                {/* Sidebar */}
                <div className="hidden rounded-2xl bg-[#111111] p-4 text-white sm:block">
                  <div className="flex items-center gap-2">
                    <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-white text-xs font-bold text-black">
                      S
                    </div>
                    <span className="text-xs font-semibold">
                      SmartAttend
                    </span>
                  </div>

                  <div className="mt-8 space-y-2">
                    {["Overview", "Attendance", "Insights", "Students"].map(
                      (item, index) => (
                        <div
                          key={item}
                          className={`rounded-lg px-3 py-2 text-[10px] ${
                            index === 0
                              ? "bg-white/10 text-white"
                              : "text-white/40"
                          }`}
                        >
                          {item}
                        </div>
                      ),
                    )}
                  </div>

                  <div className="mt-16 rounded-xl border border-white/10 bg-white/5 p-3">
                    <p className="text-[9px] text-white/40">
                      This week's trend
                    </p>
                    <p className="mt-1 text-lg font-semibold">+4.2%</p>
                  </div>
                </div>

                {/* Main dashboard */}
                <div className="min-w-0">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-[10px] font-medium text-black/35">
                        Tuesday, August 18
                      </p>
                      <h2 className="mt-1 text-sm font-bold text-[#111111]">
                        Good morning, Professor
                      </h2>
                    </div>

                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-white text-black/40 shadow-sm">
                      <Users size={14} />
                    </div>
                  </div>

                  <div className="mt-4 grid grid-cols-2 gap-2">
                    <div className="rounded-2xl bg-[#111111] p-3 text-white">
                      <div className="flex items-center justify-between">
                        <span className="text-[9px] text-white/45">
                          Attendance
                        </span>
                        <TrendingUp size={12} />
                      </div>

                      <p className="mt-2 text-2xl font-bold">92.4%</p>

                      <div className="mt-2 h-1 rounded-full bg-white/15">
                        <div className="h-1 w-[92%] rounded-full bg-white" />
                      </div>
                    </div>

                    <div className="rounded-2xl border border-black/5 bg-white p-3">
                      <span className="text-[9px] text-black/35">
                        Classes today
                      </span>
                      <p className="mt-2 text-2xl font-bold text-[#111111]">
                        08
                      </p>
                      <p className="mt-1 text-[9px] text-black/35">
                        6 completed
                      </p>
                    </div>
                  </div>

                  <div className="mt-2 rounded-2xl border border-black/5 bg-white p-3">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-[9px] text-black/35">
                          Attendance trend
                        </p>
                        <p className="mt-1 text-xs font-semibold">
                          Weekly overview
                        </p>
                      </div>

                      <span className="rounded-full bg-[#e6f5ed] px-2 py-1 text-[8px] font-semibold text-[#28734e]">
                        +4.2%
                      </span>
                    </div>

                    <div className="mt-5 flex h-20 items-end gap-2">
                      {[42, 58, 52, 72, 64, 82, 91].map((height, index) => (
                        <div
                          key={index}
                          className="flex flex-1 items-end"
                        >
                          <motion.div
                            initial={{ height: 0 }}
                            animate={{ height: `${height}%` }}
                            transition={{
                              duration: 0.7,
                              delay: 0.6 + index * 0.06,
                              ease: "easeOut",
                            }}
                            className={`w-full rounded-t-md ${
                              index === 6 ? "bg-[#111111]" : "bg-black/10"
                            }`}
                          />
                        </div>
                      ))}
                    </div>

                    <div className="mt-2 flex justify-between text-[8px] text-black/25">
                      <span>Mon</span>
                      <span>Tue</span>
                      <span>Wed</span>
                      <span>Thu</span>
                      <span>Fri</span>
                      <span>Sat</span>
                      <span>Today</span>
                    </div>
                  </div>

                  <div className="mt-2 grid grid-cols-2 gap-2">
                    <div className="rounded-2xl border border-black/5 bg-white p-3">
                      <p className="text-[9px] text-black/35">
                        Needs attention
                      </p>
                      <p className="mt-1 text-lg font-bold">12</p>
                      <p className="text-[8px] text-black/30">
                        students below 75%
                      </p>
                    </div>

                    <div className="rounded-2xl border border-black/5 bg-white p-3">
                      <p className="text-[9px] text-black/35">
                        Classes tracked
                      </p>
                      <p className="mt-1 text-lg font-bold">24</p>
                      <p className="text-[8px] text-black/30">
                        this semester
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Demo data notice */}
              <div className="border-t border-black/5 px-4 py-2.5 text-center">
                <p className="text-[9px] text-black/30">
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

export default Hero;