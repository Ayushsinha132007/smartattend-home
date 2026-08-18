import { motion } from "framer-motion";
import {
  ArrowRight,
  Check,
  MousePointer2,
  Sparkles,
  TrendingUp,
  Users,
} from "lucide-react";

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: {
    opacity: 0,
    y: 24,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.65,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

function Hero() {
  return (
    <section className="relative overflow-hidden px-6 pb-20 pt-36 lg:px-8 lg:pb-28 lg:pt-44">
      {/* Background atmosphere */}
      <motion.div
        aria-hidden="true"
        animate={{
          scale: [1, 1.08, 1],
          opacity: [0.55, 0.75, 0.55],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="pointer-events-none absolute left-1/2 top-[-180px] -z-10 h-[600px] w-[600px] -translate-x-1/2 rounded-full bg-[#dff5ec] opacity-70 blur-3xl"
      />

      <motion.div
        aria-hidden="true"
        animate={{
          x: [0, -30, 0],
          y: [0, 20, 0],
        }}
        transition={{
          duration: 9,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="pointer-events-none absolute right-[-120px] top-[280px] -z-10 h-[280px] w-[280px] rounded-full bg-[#e9e7df] opacity-60 blur-3xl"
      />

      {/* Small floating ambient orb */}
      <motion.div
        aria-hidden="true"
        animate={{
          y: [0, -18, 0],
          x: [0, 8, 0],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="pointer-events-none absolute left-[8%] top-[30%] -z-10 h-16 w-16 rounded-full bg-white/70 shadow-[0_10px_40px_rgba(0,0,0,0.05)] blur-sm"
      />

      <div className="mx-auto max-w-7xl">
        <div className="grid items-center gap-16 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
          {/* Hero copy */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {/* Eyebrow */}
            <motion.div
              variants={itemVariants}
              className="mb-7 inline-flex items-center gap-2 rounded-full border border-black/10 bg-white px-3.5 py-2 text-xs font-semibold text-black/65 shadow-sm"
            >
              <motion.span
                animate={{
                  rotate: [0, 8, -8, 0],
                  scale: [1, 1.08, 1],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="flex h-5 w-5 items-center justify-center rounded-full bg-[#e3f6ec] text-[#248557]"
              >
                <Sparkles size={11} />
              </motion.span>

              <span>Attendance intelligence, reimagined</span>

              <motion.span
                animate={{
                  x: [0, 3, 0],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                }}
                className="h-1.5 w-1.5 rounded-full bg-[#248557]"
              />
            </motion.div>

            {/* Heading */}
            <motion.h1
              variants={itemVariants}
              className="max-w-3xl font-[Manrope] text-[2.75rem] font-extrabold leading-[1.02] tracking-[-0.055em] text-[#111111] sm:text-6xl lg:text-7xl"
            >
              Know your classroom.

              <span className="block text-black/40">
                Before it becomes a problem.
              </span>
            </motion.h1>

            {/* Description */}
            <motion.p
              variants={itemVariants}
              className="mt-7 max-w-xl text-base leading-7 text-black/55 sm:text-lg sm:leading-8"
            >
              SmartAttend turns everyday attendance data into clear,
              actionable classroom insights — so faculty can spend less time
              managing spreadsheets and more time teaching.
            </motion.p>

            {/* CTA buttons */}
            <motion.div
              variants={itemVariants}
              className="mt-9 flex flex-col gap-3 sm:flex-row"
            >
              {/* Primary CTA */}
              <motion.a
                href="#product"
                whileHover={{
                  y: -3,
                  scale: 1.015,
                }}
                whileTap={{
                  scale: 0.98,
                }}
                className="group inline-flex min-h-[48px] min-w-[190px] items-center justify-center gap-2 rounded-full bg-[#111111] px-6 py-3.5 text-sm font-bold !text-white shadow-[0_12px_30px_rgba(0,0,0,0.16)] transition-shadow duration-300 hover:shadow-[0_18px_45px_rgba(0,0,0,0.22)] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#111111]"
              >
                <span className="!text-white">
                  Explore the platform
                </span>

                <ArrowRight
                  size={16}
                  strokeWidth={2.5}
                  className="text-white transition-transform duration-300 group-hover:translate-x-1"
                />
              </motion.a>

              {/* Secondary CTA */}
              <motion.a
                href="#how-it-works"
                whileHover={{
                  y: -3,
                  scale: 1.015,
                }}
                whileTap={{
                  scale: 0.98,
                }}
                className="inline-flex min-h-[48px] min-w-[160px] items-center justify-center rounded-full border-2 border-black/15 bg-white px-6 py-3.5 text-sm font-bold !text-[#111111] shadow-sm transition-all duration-300 hover:border-black/30 hover:bg-[#fafafa] hover:shadow-md focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#111111]"
              >
                <span className="!text-[#111111]">
                  See how it works
                </span>
              </motion.a>
            </motion.div>

            {/* Trust points */}
            <motion.div
              variants={itemVariants}
              className="mt-9 flex flex-wrap gap-x-6 gap-y-3 text-xs font-semibold text-black/50"
            >
              {[
                "Automated workflows",
                "Real-time insights",
                "Built for classrooms",
              ].map((item) => (
                <span
                  key={item}
                  className="flex items-center gap-1.5"
                >
                  <span className="flex h-4 w-4 items-center justify-center rounded-full bg-[#e3f6ec] text-[#248557]">
                    <Check size={10} />
                  </span>

                  {item}
                </span>
              ))}
            </motion.div>
          </motion.div>

          {/* Dashboard preview */}
          <motion.div
            initial={{
              opacity: 0,
              y: 45,
              scale: 0.94,
              rotateX: 6,
              rotateY: -4,
            }}
            animate={{
              opacity: 1,
              y: [0, -8, 0],
              scale: 1,
              rotateX: 0,
              rotateY: 0,
            }}
            transition={{
              opacity: {
                duration: 0.8,
                delay: 0.25,
                ease: "easeOut",
              },
              scale: {
                duration: 0.8,
                delay: 0.25,
                ease: [0.22, 1, 0.36, 1],
              },
              rotateX: {
                duration: 0.9,
                delay: 0.25,
              },
              rotateY: {
                duration: 0.9,
                delay: 0.25,
              },
              y: {
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
              },
            }}
            whileHover={{
              y: -12,
              rotateX: 1.5,
              rotateY: -1.5,
              scale: 1.01,
              transition: {
                duration: 0.35,
              },
            }}
            style={{
              transformPerspective: 1200,
            }}
            className="relative"
          >
            {/* Dashboard glow */}
            <motion.div
              animate={{
                scale: [1, 1.08, 1],
                opacity: [0.45, 0.65, 0.45],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              aria-hidden="true"
              className="absolute -inset-8 -z-10 rounded-full bg-[#cfeee0] opacity-70 blur-3xl"
            />

            {/* Floating status pill */}
            <motion.div
              initial={{
                opacity: 0,
                x: 20,
                y: 20,
              }}
              animate={{
                opacity: 1,
                x: 0,
                y: [0, -5, 0],
              }}
              transition={{
                opacity: {
                  duration: 0.6,
                  delay: 1,
                },
                x: {
                  duration: 0.6,
                  delay: 1,
                },
                y: {
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                },
              }}
              className="absolute -right-3 top-10 z-20 hidden items-center gap-2 rounded-full border border-black/8 bg-white px-3 py-2 shadow-[0_12px_35px_rgba(0,0,0,0.10)] sm:flex"
            >
              <span className="h-2 w-2 rounded-full bg-[#248557]" />

              <span className="text-[9px] font-bold text-black/55">
                Attendance improving
              </span>

              <TrendingUp
                size={12}
                className="text-[#248557]"
              />
            </motion.div>

            {/* Floating students pill */}
            <motion.div
              initial={{
                opacity: 0,
                x: -20,
                y: 20,
              }}
              animate={{
                opacity: 1,
                x: 0,
                y: [0, 6, 0],
              }}
              transition={{
                opacity: {
                  duration: 0.6,
                  delay: 1.1,
                },
                x: {
                  duration: 0.6,
                  delay: 1.1,
                },
                y: {
                  duration: 4.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                },
              }}
              className="absolute -bottom-4 -left-3 z-20 hidden items-center gap-2 rounded-2xl border border-black/8 bg-white px-3 py-2.5 shadow-[0_12px_35px_rgba(0,0,0,0.10)] sm:flex"
            >
              <div className="flex h-7 w-7 items-center justify-center rounded-full bg-[#111111] text-white">
                <Users size={13} />
              </div>

              <div>
                <p className="text-[8px] text-black/35">
                  Students tracked
                </p>

                <p className="text-xs font-bold text-[#111111]">
                  248
                </p>
              </div>
            </motion.div>

            {/* Browser frame */}
            <div className="relative overflow-hidden rounded-[28px] border border-black/10 bg-white p-3 shadow-[0_35px_100px_rgba(0,0,0,0.12)]">
              {/* Browser header */}
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
                    {[
                      "Overview",
                      "Attendance",
                      "Insights",
                      "Students",
                    ].map((item, index) => (
                      <motion.div
                        key={item}
                        animate={
                          index === 0
                            ? {
                                opacity: [0.7, 1, 0.7],
                              }
                            : {}
                        }
                        transition={{
                          duration: 3,
                          repeat: Infinity,
                          ease: "easeInOut",
                        }}
                        className={`rounded-lg px-3 py-2 text-[10px] ${
                          index === 0
                            ? "bg-white/10 text-white"
                            : "text-white/40"
                        }`}
                      >
                        {item}
                      </motion.div>
                    ))}
                  </div>

                  <div className="mt-16 rounded-xl border border-white/10 bg-white/5 p-3">
                    <p className="text-[9px] text-white/40">
                      This week's trend
                    </p>

                    <p className="mt-1 text-lg font-semibold">
                      +4.2%
                    </p>
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

                    <motion.div
                      animate={{
                        rotate: [0, 4, -4, 0],
                      }}
                      transition={{
                        duration: 4,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                      className="flex h-8 w-8 items-center justify-center rounded-full bg-white text-black/40 shadow-sm"
                    >
                      <Users size={14} />
                    </motion.div>
                  </div>

                  <div className="mt-4 grid grid-cols-2 gap-2">
                    <div className="rounded-2xl bg-[#111111] p-3 text-white">
                      <div className="flex items-center justify-between">
                        <span className="text-[9px] text-white/45">
                          Attendance
                        </span>

                        <TrendingUp size={12} />
                      </div>

                      <motion.p
                        initial={{
                          opacity: 0,
                          scale: 0.8,
                        }}
                        animate={{
                          opacity: 1,
                          scale: 1,
                        }}
                        transition={{
                          duration: 0.5,
                          delay: 1,
                        }}
                        className="mt-2 text-2xl font-bold"
                      >
                        92.4%
                      </motion.p>

                      <div className="mt-2 h-1 rounded-full bg-white/15">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={{ width: "92%" }}
                          transition={{
                            duration: 1,
                            delay: 1.1,
                            ease: "easeOut",
                          }}
                          className="h-1 rounded-full bg-white"
                        />
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

                      <span className="rounded-full bg-[#e3f6ec] px-2 py-1 text-[8px] font-bold text-[#248557]">
                        +4.2%
                      </span>
                    </div>

                    <div className="mt-5 flex h-20 items-end gap-2">
                      {[42, 58, 52, 72, 64, 82, 91].map(
                        (height, index) => (
                          <div
                            key={index}
                            className="flex flex-1 items-end"
                          >
                            <motion.div
                              initial={{
                                height: 0,
                              }}
                              animate={{
                                height: `${height}%`,
                              }}
                              transition={{
                                duration: 0.7,
                                delay: 0.8 + index * 0.06,
                                ease: "easeOut",
                              }}
                              className={`w-full rounded-t-md ${
                                index === 6
                                  ? "bg-[#111111]"
                                  : "bg-black/10"
                              }`}
                            />
                          </div>
                        ),
                      )}
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
                    <motion.div
                      whileHover={{
                        y: -2,
                      }}
                      className="rounded-2xl border border-black/5 bg-white p-3"
                    >
                      <p className="text-[9px] text-black/35">
                        Needs attention
                      </p>

                      <p className="mt-1 text-lg font-bold">
                        12
                      </p>

                      <p className="text-[8px] text-black/30">
                        students below 75%
                      </p>
                    </motion.div>

                    <motion.div
                      whileHover={{
                        y: -2,
                      }}
                      className="rounded-2xl border border-black/5 bg-white p-3"
                    >
                      <p className="text-[9px] text-black/35">
                        Classes tracked
                      </p>

                      <p className="mt-1 text-lg font-bold">
                        24
                      </p>

                      <p className="text-[8px] text-black/30">
                        this semester
                      </p>
                    </motion.div>
                  </div>
                </div>
              </div>

              <div className="border-t border-black/5 px-4 py-2.5 text-center">
                <p className="text-[9px] text-black/30">
                  Product preview · Illustrative demo data
                </p>
              </div>
            </div>

            {/* Cursor hint */}
            <motion.div
              initial={{
                opacity: 0,
              }}
              animate={{
                opacity: [0, 1, 0],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                delay: 2,
              }}
              className="absolute bottom-5 right-5 hidden items-center gap-1.5 rounded-full bg-[#111111] px-3 py-2 text-[8px] font-bold text-white shadow-lg sm:flex"
            >
              <MousePointer2 size={11} />
              Explore dashboard
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default Hero;