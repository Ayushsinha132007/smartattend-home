import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowRight,
  ArrowUpRight,
  BrainCircuit,
  CheckCircle2,
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
    detail:
      "The strongest improvement is coming from Tuesday and Wednesday sessions, where attendance has remained consistently above the weekly average.",
  },
  {
    icon: ShieldAlert,
    label: "Needs attention",
    title: "12 students may need support",
    description:
      "Students below the configured attendance threshold are surfaced automatically.",
    value: "12",
    type: "warning",
    detail:
      "SmartAttend groups students who are approaching or already below the configured attendance threshold so faculty can review them earlier.",
  },
  {
    icon: TrendingDown,
    label: "Pattern detected",
    title: "Friday attendance dips",
    description:
      "Friday sessions show a recurring drop compared with the rest of the week.",
    value: "-8.4%",
    type: "negative",
    detail:
      "Friday attendance has shown a recurring decline across recent sessions, making it a useful pattern for faculty to investigate.",
  },
];

function Insights() {
  const [activeInsight, setActiveInsight] = useState(null);

  return (
    <section
      id="insights"
      className="relative overflow-hidden px-6 py-24 lg:px-8 lg:py-32"
    >
      {/* Ambient background */}
      <motion.div
        aria-hidden="true"
        animate={{
          scale: [1, 1.08, 1],
          opacity: [0.2, 0.35, 0.2],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="pointer-events-none absolute -right-32 top-20 -z-10 h-96 w-96 rounded-full bg-[#e4e2da] blur-3xl"
      />

      <motion.div
        aria-hidden="true"
        animate={{
          x: [0, 25, 0],
          y: [0, -15, 0],
        }}
        transition={{
          duration: 9,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="pointer-events-none absolute -left-40 bottom-20 -z-10 h-80 w-80 rounded-full bg-[#e5f3eb] opacity-50 blur-3xl"
      />

      <div className="mx-auto max-w-7xl">
        <div className="grid gap-14 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
          {/* Section introduction */}
          <motion.div
            initial={{
              opacity: 0,
              x: -30,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{
              once: true,
              margin: "-100px",
            }}
            transition={{
              duration: 0.7,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            <motion.div
              whileHover={{
                rotate: -5,
                scale: 1.05,
              }}
              transition={{
                type: "spring",
                stiffness: 350,
              }}
              className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#111111] text-white shadow-[0_10px_25px_rgba(0,0,0,0.12)]"
            >
              <BrainCircuit size={19} />
            </motion.div>

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

            <motion.a
              href="#how-it-works"
              whileHover={{
                y: -2,
              }}
              whileTap={{
                scale: 0.98,
              }}
              className="group mt-8 inline-flex min-h-11 items-center gap-2 rounded-full border-2 border-black/15 bg-white px-5 py-3 text-sm font-bold !text-[#111111] shadow-sm transition-all duration-200 hover:border-black/30 hover:bg-[#fafafa] hover:shadow-md focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-black"
            >
              <span className="!text-[#111111]">
                See how insights help
              </span>

              <ArrowRight
                size={15}
                className="text-[#111111] transition-transform duration-200 group-hover:translate-x-1"
              />
            </motion.a>

            <motion.div
              initial={{
                opacity: 0,
              }}
              whileInView={{
                opacity: 1,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                delay: 0.5,
              }}
              className="mt-7 flex items-center gap-2 text-xs font-medium text-black/40"
            >
              <Sparkles size={14} />

              <span>
                Illustrative product intelligence
              </span>
            </motion.div>
          </motion.div>

          {/* Insight cards */}
          <div className="space-y-3">
            {insights.map((insight, index) => {
              const Icon = insight.icon;
              const isActive = activeInsight === index;

              return (
                <motion.article
                  key={insight.title}
                  initial={{
                    opacity: 0,
                    x: 35,
                  }}
                  whileInView={{
                    opacity: 1,
                    x: 0,
                  }}
                  viewport={{
                    once: true,
                    margin: "-80px",
                  }}
                  transition={{
                    duration: 0.65,
                    delay: index * 0.12,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  whileHover={{
                    y: -5,
                  }}
                  className={`group relative overflow-hidden rounded-[24px] border bg-white p-5 shadow-[0_12px_40px_rgba(0,0,0,0.04)] transition-all duration-300 sm:p-6 ${
                    isActive
                      ? "border-black/15 shadow-[0_22px_55px_rgba(0,0,0,0.09)]"
                      : "border-black/8 hover:border-black/12 hover:shadow-[0_20px_50px_rgba(0,0,0,0.08)]"
                  }`}
                >
                  {/* Hover glow */}
                  <motion.div
                    aria-hidden="true"
                    initial={{
                      opacity: 0,
                    }}
                    whileHover={{
                      opacity: 1,
                    }}
                    className="pointer-events-none absolute -right-20 -top-20 h-40 w-40 rounded-full bg-black/[0.025] blur-3xl"
                  />

                  <div className="relative z-10 flex items-start gap-4">
                    {/* Icon */}
                    <motion.div
                      whileHover={{
                        rotate: -6,
                        scale: 1.08,
                      }}
                      transition={{
                        type: "spring",
                        stiffness: 400,
                        damping: 18,
                      }}
                      className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl ${
                        insight.type === "positive"
                          ? "bg-[#e6f5ed] text-[#28734e]"
                          : insight.type === "warning"
                            ? "bg-[#f5eee1] text-[#8a6428]"
                            : "bg-[#f2e7e7] text-[#8a3d3d]"
                      }`}
                    >
                      <Icon size={18} />
                    </motion.div>

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

                        {/* Value */}
                        <motion.span
                          initial={{
                            scale: 0.85,
                            opacity: 0,
                          }}
                          whileInView={{
                            scale: 1,
                            opacity: 1,
                          }}
                          viewport={{
                            once: true,
                          }}
                          transition={{
                            delay: 0.3 + index * 0.1,
                          }}
                          className={`w-fit rounded-full px-2.5 py-1 text-[10px] font-bold ${
                            insight.type === "positive"
                              ? "bg-[#edf7f1] text-[#28734e]"
                              : insight.type === "warning"
                                ? "bg-[#f8f1e7] text-[#8a6428]"
                                : "bg-[#f5eaea] text-[#8a3d3d]"
                          }`}
                        >
                          {insight.value}
                        </motion.span>
                      </div>

                      <p className="mt-2 max-w-xl text-sm leading-6 text-black/45">
                        {insight.description}
                      </p>

                      {/* Expandable detail */}
                      <AnimatePresence initial={false}>
                        {isActive && (
                          <motion.div
                            initial={{
                              height: 0,
                              opacity: 0,
                            }}
                            animate={{
                              height: "auto",
                              opacity: 1,
                            }}
                            exit={{
                              height: 0,
                              opacity: 0,
                            }}
                            transition={{
                              duration: 0.3,
                              ease: [0.22, 1, 0.36, 1],
                            }}
                            className="overflow-hidden"
                          >
                            <div className="mt-4 border-t border-black/5 pt-4">
                              <div className="flex items-start gap-2">
                                <Sparkles
                                  size={13}
                                  className="mt-0.5 shrink-0 text-black/35"
                                />

                                <p className="text-xs leading-5 text-black/45">
                                  {insight.detail}
                                </p>
                              </div>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>

                    {/* Expand button */}
                    <motion.button
                      type="button"
                      aria-label={`View ${insight.title}`}
                      aria-expanded={isActive}
                      onClick={() =>
                        setActiveInsight(
                          isActive ? null : index,
                        )
                      }
                      whileTap={{
                        scale: 0.9,
                      }}
                      className={`hidden h-9 w-9 shrink-0 items-center justify-center rounded-full border transition-all sm:flex ${
                        isActive
                          ? "border-[#111111] bg-[#111111] text-white"
                          : "border-black/8 bg-white text-black/35 group-hover:border-black/20 group-hover:bg-[#f7f7f5] group-hover:text-black"
                      }`}
                    >
                      <motion.span
                        animate={{
                          rotate: isActive ? 90 : 0,
                        }}
                        transition={{
                          duration: 0.2,
                        }}
                      >
                        <ArrowUpRight size={15} />
                      </motion.span>
                    </motion.button>
                  </div>

                  {/* Mobile action */}
                  <button
                    type="button"
                    onClick={() =>
                      setActiveInsight(
                        isActive ? null : index,
                      )
                    }
                    className="relative z-10 mt-4 flex w-full items-center gap-2 border-t border-black/5 pt-3 text-left text-[10px] font-bold text-black/35 sm:hidden"
                  >
                    <span>
                      {isActive
                        ? "Hide insight"
                        : "View insight"}
                    </span>

                    <ArrowRight size={12} />
                  </button>

                  {/* Bottom progress accent */}
                  <motion.div
                    initial={{
                      scaleX: 0,
                    }}
                    whileInView={{
                      scaleX: 1,
                    }}
                    viewport={{
                      once: true,
                    }}
                    transition={{
                      duration: 0.8,
                      delay: 0.25 + index * 0.12,
                    }}
                    className={`absolute bottom-0 left-0 h-[2px] w-full origin-left ${
                      insight.type === "positive"
                        ? "bg-[#28734e]"
                        : insight.type === "warning"
                          ? "bg-[#8a6428]"
                          : "bg-[#8a3d3d]"
                    }`}
                  />
                </motion.article>
              );
            })}
          </div>
        </div>

        {/* Bottom insight panel */}
        <motion.div
          initial={{
            opacity: 0,
            y: 30,
            scale: 0.98,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
            scale: 1,
          }}
          viewport={{
            once: true,
            margin: "-80px",
          }}
          transition={{
            duration: 0.7,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="relative mt-14 overflow-hidden rounded-[28px] bg-[#111111] p-6 text-white shadow-[0_25px_70px_rgba(0,0,0,0.12)] sm:p-8 lg:p-10"
        >
          {/* Animated glow */}
          <motion.div
            aria-hidden="true"
            animate={{
              x: [0, 30, 0],
              y: [0, -15, 0],
              opacity: [0.08, 0.16, 0.08],
            }}
            transition={{
              duration: 7,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="pointer-events-none absolute -right-20 -top-32 h-80 w-80 rounded-full bg-white blur-3xl"
          />

          {/* Shine */}
          <motion.div
            aria-hidden="true"
            initial={{
              x: "-120%",
            }}
            whileInView={{
              x: "120%",
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 1.3,
              delay: 0.4,
              ease: "easeInOut",
            }}
            className="pointer-events-none absolute inset-y-0 w-24 -skew-x-12 bg-white/10 blur-xl"
          />

          <div className="relative z-10 grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
            <div>
              <div className="flex items-center gap-2">
                <div className="flex h-7 w-7 items-center justify-center rounded-full border border-white/10 bg-white/10">
                  <Sparkles
                    size={12}
                    className="text-white"
                  />
                </div>

                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-white/40">
                  A clearer classroom view
                </p>
              </div>

              <h3 className="mt-4 max-w-2xl font-[Manrope] text-2xl font-bold leading-tight tracking-[-0.03em] !text-white sm:text-3xl">
                Stop looking at attendance as a number. Start seeing it as a
                signal.
              </h3>

              <p className="mt-4 max-w-2xl text-sm leading-6 text-white/50">
                These examples demonstrate the kind of patterns the product
                could surface from real classroom data.
              </p>

              <div className="mt-6 flex flex-wrap gap-2">
                {[
                  "Patterns",
                  "Trends",
                  "Student signals",
                ].map((item) => (
                  <motion.span
                    key={item}
                    whileHover={{
                      y: -2,
                    }}
                    className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-[9px] font-semibold text-white/50"
                  >
                    <CheckCircle2 size={11} />
                    {item}
                  </motion.span>
                ))}
              </div>
            </div>

            {/* Dark CTA — explicit contrast */}
            <motion.a
              href="#how-it-works"
              whileHover={{
                y: -3,
                scale: 1.015,
              }}
              whileTap={{
                scale: 0.98,
              }}
              style={{
                backgroundColor: "#111111",
                color: "#ffffff",
              }}
              className="group relative inline-flex min-h-12 w-fit items-center justify-center gap-2 overflow-hidden rounded-full border-2 border-white/30 px-6 py-3.5 text-sm font-bold !text-white shadow-[0_8px_24px_rgba(0,0,0,0.25)] transition-all duration-300 hover:border-white/60 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
            >
              {/* CTA shine */}
              <motion.span
                initial={{
                  x: "-120%",
                }}
                whileHover={{
                  x: "120%",
                }}
                transition={{
                  duration: 0.6,
                }}
                className="absolute inset-y-0 w-10 -skew-x-12 bg-white/10 blur-sm"
              />

              <span
                style={{
                  color: "#ffffff",
                }}
                className="relative z-10"
              >
                Explore the workflow
              </span>

              <ArrowRight
                size={16}
                strokeWidth={2.5}
                style={{
                  color: "#ffffff",
                }}
                className="relative z-10 transition-transform duration-200 group-hover:translate-x-1"
              />
            </motion.a>
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