import { motion } from "framer-motion";
import {
  ArrowDown,
  ArrowRight,
  BarChart3,
  Check,
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

const sectionVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: {
    opacity: 0,
    y: 28,
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

function HowItWorks() {
  return (
    <section
      id="how-it-works"
      className="relative overflow-hidden px-6 py-24 lg:px-8 lg:py-32"
    >
      {/* Background atmosphere */}
      <motion.div
        aria-hidden="true"
        animate={{
          scale: [1, 1.08, 1],
          opacity: [0.25, 0.4, 0.25],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="pointer-events-none absolute left-1/2 top-20 -z-10 h-80 w-80 -translate-x-1/2 rounded-full bg-[#e8e6de] blur-3xl"
      />

      <div className="mx-auto max-w-7xl">
        {/* Section heading */}
        <motion.div
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
            margin: "-100px",
          }}
          className="mx-auto max-w-2xl text-center"
        >
          <motion.div
            variants={itemVariants}
            className="mx-auto flex h-11 w-11 items-center justify-center rounded-2xl bg-[#111111] text-white shadow-[0_10px_30px_rgba(0,0,0,0.12)]"
          >
            <Sparkles size={18} />
          </motion.div>

          <motion.p
            variants={itemVariants}
            className="mt-7 text-xs font-semibold uppercase tracking-[0.18em] text-black/40"
          >
            How it works
          </motion.p>

          <motion.h2
            variants={itemVariants}
            className="mt-5 font-[Manrope] text-4xl font-bold leading-[1.08] tracking-[-0.04em] text-[#111111] sm:text-5xl"
          >
            From classroom activity to a clearer next step.
          </motion.h2>

          <motion.p
            variants={itemVariants}
            className="mt-6 text-base leading-7 text-black/50"
          >
            SmartAttend keeps the workflow simple: capture what happened,
            understand the pattern, and decide what deserves attention.
          </motion.p>
        </motion.div>

        {/* Steps */}
        <div className="relative mt-16">
          {/* Desktop connecting line */}
          <div
            aria-hidden="true"
            className="absolute left-[16.666%] right-[16.666%] top-[60px] hidden h-px lg:block"
          >
            <motion.div
              initial={{
                scaleX: 0,
                transformOrigin: "left",
              }}
              whileInView={{
                scaleX: 1,
              }}
              viewport={{
                once: true,
                margin: "-80px",
              }}
              transition={{
                duration: 1.2,
                delay: 0.3,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="h-px w-full border-t border-dashed border-black/15"
            />

            {/* Animated travelling dot */}
            <motion.span
              initial={{
                left: "0%",
                opacity: 0,
              }}
              whileInView={{
                left: "100%",
                opacity: [0, 1, 1, 0],
              }}
              viewport={{
                once: true,
              }}
              transition={{
                duration: 1.8,
                delay: 0.55,
                ease: "easeInOut",
              }}
              className="absolute top-1/2 h-2 w-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#111111]"
            />
          </div>

          <motion.div
            variants={sectionVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{
              once: true,
              margin: "-80px",
            }}
            className="grid gap-4 lg:grid-cols-3"
          >
            {steps.map((step, index) => {
              const Icon = step.icon;

              return (
                <motion.article
                  key={step.number}
                  variants={itemVariants}
                  whileHover={{
                    y: -8,
                    transition: {
                      duration: 0.25,
                    },
                  }}
                  className="group relative rounded-[28px] border border-black/8 bg-white p-6 shadow-[0_12px_40px_rgba(0,0,0,0.035)] transition-all duration-300 hover:border-black/12 hover:shadow-[0_25px_60px_rgba(0,0,0,0.09)] sm:p-7"
                >
                  {/* Card glow */}
                  <motion.div
                    aria-hidden="true"
                    initial={{
                      opacity: 0,
                    }}
                    whileHover={{
                      opacity: 1,
                    }}
                    className="pointer-events-none absolute inset-0 rounded-[28px] bg-gradient-to-br from-black/[0.025] via-transparent to-black/[0.04]"
                  />

                  <div className="relative z-10">
                    {/* Top */}
                    <div className="flex items-center justify-between">
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
                        className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#111111] text-white shadow-[0_8px_20px_rgba(0,0,0,0.12)]"
                      >
                        <Icon size={19} />
                      </motion.div>

                      <motion.span
                        initial={{
                          opacity: 0,
                          scale: 0.8,
                        }}
                        whileInView={{
                          opacity: 1,
                          scale: 1,
                        }}
                        viewport={{
                          once: true,
                        }}
                        transition={{
                          delay: 0.25 + index * 0.12,
                          duration: 0.4,
                        }}
                        className="font-[Manrope] text-sm font-bold text-black/20"
                      >
                        {step.number}
                      </motion.span>
                    </div>

                    {/* Step status */}
                    <div className="mt-7 flex items-center gap-2">
                      <motion.span
                        animate={{
                          scale: [1, 1.15, 1],
                          opacity: [0.5, 1, 0.5],
                        }}
                        transition={{
                          duration: 2.5,
                          repeat: Infinity,
                          delay: index * 0.4,
                        }}
                        className="h-1.5 w-1.5 rounded-full bg-[#248557]"
                      />

                      <span className="text-[9px] font-bold uppercase tracking-[0.14em] text-black/30">
                        Step {step.number}
                      </span>
                    </div>

                    <h3 className="mt-4 font-[Manrope] text-xl font-bold tracking-tight text-[#111111]">
                      {step.title}
                    </h3>

                    <p className="mt-3 text-sm leading-6 text-black/45">
                      {step.description}
                    </p>

                    {/* Bottom indicator */}
                    <div className="mt-7 flex items-center justify-between border-t border-black/5 pt-5">
                      <div className="flex items-center gap-1.5 text-[9px] font-semibold text-black/30">
                        <Check size={12} className="text-[#248557]" />
                        Smart workflow
                      </div>

                      <motion.div
                        animate={{
                          x: [0, 3, 0],
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          delay: index * 0.25,
                        }}
                        className="flex h-7 w-7 items-center justify-center rounded-full bg-[#f4f4f1] text-black/35 transition-colors group-hover:bg-[#111111] group-hover:text-white"
                      >
                        <ArrowRight size={13} />
                      </motion.div>
                    </div>
                  </div>

                  {/* Mobile connector */}
                  {index < steps.length - 1 && (
                    <motion.div
                      initial={{
                        opacity: 0,
                        y: -5,
                      }}
                      whileInView={{
                        opacity: 1,
                        y: 0,
                      }}
                      viewport={{
                        once: true,
                      }}
                      transition={{
                        delay: 0.4 + index * 0.12,
                      }}
                      className="relative z-20 mt-6 flex items-center justify-center lg:hidden"
                    >
                      <div className="flex h-9 w-9 items-center justify-center rounded-full border border-black/8 bg-[#f7f7f5] text-black/30 shadow-sm">
                        <ArrowDown size={14} />
                      </div>
                    </motion.div>
                  )}
                </motion.article>
              );
            })}
          </motion.div>
        </div>

        {/* Principle banner */}
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
          className="relative mt-5 overflow-hidden rounded-[28px] border border-black/8 bg-[#eeeee9] p-6 sm:p-8"
        >
          {/* Animated shine */}
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
              duration: 1.2,
              delay: 0.4,
              ease: "easeInOut",
            }}
            className="pointer-events-none absolute inset-y-0 w-32 -skew-x-12 bg-white/40 blur-xl"
          />

          <div className="relative z-10 flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <div className="flex items-center gap-2">
                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[#111111] text-white">
                  <Sparkles size={11} />
                </span>

                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-black/40">
                  The principle
                </p>
              </div>

              <p className="mt-3 max-w-2xl font-[Manrope] text-lg font-semibold tracking-tight text-[#111111] sm:text-xl">
                Less time managing attendance. More time understanding what it
                tells you.
              </p>
            </div>

            <motion.a
              href="#product"
              whileHover={{
                y: -2,
              }}
              whileTap={{
                scale: 0.98,
              }}
              className="group inline-flex min-h-11 w-fit shrink-0 items-center justify-center gap-2 rounded-full border-2 border-black/15 bg-white px-5 py-3 text-sm font-bold text-[#111111] shadow-sm transition-all duration-200 hover:border-black/30 hover:bg-[#fafafa] hover:shadow-md focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-black"
            >
              See the product

              <ArrowRight
                size={15}
                className="transition-transform duration-200 group-hover:translate-x-1"
              />
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default HowItWorks;