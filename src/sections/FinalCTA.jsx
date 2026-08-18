import { motion } from "framer-motion";
import { ArrowRight, Check, Sparkles, Zap } from "lucide-react";

function FinalCTA() {
  return (
    <section className="relative overflow-hidden px-6 py-24 lg:px-8 lg:py-32">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{
            opacity: 0,
            y: 35,
            scale: 0.98,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
            scale: 1,
          }}
          viewport={{
            once: true,
            margin: "-100px",
          }}
          transition={{
            duration: 0.8,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="relative overflow-hidden rounded-[32px] bg-[#111111] px-6 py-16 text-white shadow-[0_30px_90px_rgba(0,0,0,0.14)] sm:px-10 sm:py-20 lg:px-16 lg:py-24"
        >
          {/* ============================= */}
          {/* Animated background atmosphere */}
          {/* ============================= */}

          <motion.div
            aria-hidden="true"
            animate={{
              x: [0, 35, 0],
              y: [0, -20, 0],
              scale: [1, 1.1, 1],
              opacity: [0.15, 0.25, 0.15],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-[#bdebd6] blur-3xl"
          />

          <motion.div
            aria-hidden="true"
            animate={{
              x: [0, -25, 0],
              y: [0, 20, 0],
              scale: [1, 1.08, 1],
              opacity: [0.03, 0.08, 0.03],
            }}
            transition={{
              duration: 9,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="pointer-events-none absolute -bottom-32 -left-24 h-80 w-80 rounded-full bg-white blur-3xl"
          />

          {/* Small floating particles */}
          <motion.span
            aria-hidden="true"
            animate={{
              y: [0, -15, 0],
              opacity: [0.15, 0.4, 0.15],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute left-[12%] top-[22%] h-1.5 w-1.5 rounded-full bg-white"
          />

          <motion.span
            aria-hidden="true"
            animate={{
              y: [0, 12, 0],
              opacity: [0.1, 0.35, 0.1],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              delay: 1,
              ease: "easeInOut",
            }}
            className="absolute right-[16%] top-[30%] h-1 w-1 rounded-full bg-white"
          />

          <motion.span
            aria-hidden="true"
            animate={{
              y: [0, -10, 0],
              opacity: [0.1, 0.3, 0.1],
            }}
            transition={{
              duration: 4.5,
              repeat: Infinity,
              delay: 0.5,
              ease: "easeInOut",
            }}
            className="absolute bottom-[24%] right-[28%] h-1.5 w-1.5 rounded-full bg-white"
          />

          {/* ============================= */}
          {/* Content */}
          {/* ============================= */}

          <div className="relative z-10 mx-auto max-w-3xl text-center">
            {/* Eyebrow */}
            <motion.div
              initial={{
                opacity: 0,
                y: 12,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                duration: 0.5,
                delay: 0.15,
              }}
              className="mx-auto flex w-fit items-center gap-2 rounded-full border border-white/15 bg-white/[0.08] px-3.5 py-2 text-xs font-semibold text-white/70 backdrop-blur-sm"
            >
              <motion.span
                animate={{
                  rotate: [0, 8, -8, 0],
                  scale: [1, 1.1, 1],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="flex h-5 w-5 items-center justify-center rounded-full bg-[#dff5e9] text-[#248557]"
              >
                <Sparkles size={11} />
              </motion.span>

              <span>
                Built around better classroom decisions
              </span>
            </motion.div>

            {/* Heading */}
            <motion.h2
              initial={{
                opacity: 0,
                y: 20,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                duration: 0.7,
                delay: 0.25,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="mt-7 font-[Manrope] text-4xl font-extrabold leading-[1.05] tracking-[-0.045em] !text-white sm:text-5xl lg:text-6xl"
            >
              Make every class count.
            </motion.h2>

            {/* Description */}
            <motion.p
              initial={{
                opacity: 0,
                y: 16,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                duration: 0.6,
                delay: 0.4,
              }}
              className="mx-auto mt-6 max-w-xl text-sm leading-6 text-white/55 sm:text-base sm:leading-7"
            >
              Bring attendance, patterns, and classroom signals into one
              focused workspace designed to help faculty act earlier.
            </motion.p>

            {/* CTA buttons */}
            <motion.div
              initial={{
                opacity: 0,
                y: 18,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                duration: 0.6,
                delay: 0.5,
              }}
              className="mt-9 flex flex-col items-stretch justify-center gap-3 sm:flex-row sm:items-center"
            >
              {/* PRIMARY CTA */}
              <motion.a
                href="#product"
                whileHover={{
                  y: -4,
                  scale: 1.02,
                }}
                whileTap={{
                  scale: 0.98,
                }}
                style={{
                  backgroundColor: "#ffffff",
                  color: "#111111",
                }}
                className="group relative inline-flex min-h-12 min-w-[190px] items-center justify-center gap-2 overflow-hidden rounded-full border-2 border-white px-6 py-3.5 text-sm font-bold shadow-[0_12px_30px_rgba(0,0,0,0.20)] transition-all duration-300 hover:bg-[#f0f0ed] hover:shadow-[0_18px_40px_rgba(0,0,0,0.28)] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
              >
                {/* Shine */}
                <motion.span
                  initial={{
                    x: "-140%",
                  }}
                  whileHover={{
                    x: "140%",
                  }}
                  transition={{
                    duration: 0.65,
                  }}
                  className="pointer-events-none absolute inset-y-0 w-12 -skew-x-12 bg-black/5 blur-sm"
                />

                <span
                  style={{
                    color: "#111111",
                  }}
                  className="relative z-10 font-bold"
                >
                  Explore the platform
                </span>

                <ArrowRight
                  size={16}
                  strokeWidth={2.5}
                  style={{
                    color: "#111111",
                  }}
                  className="relative z-10 transition-transform duration-200 group-hover:translate-x-1"
                />
              </motion.a>

              {/* SECONDARY CTA */}
              <motion.a
                href="#how-it-works"
                whileHover={{
                  y: -4,
                  scale: 1.02,
                }}
                whileTap={{
                  scale: 0.98,
                }}
                style={{
                  backgroundColor:
                    "rgba(255,255,255,0.10)",
                  color: "#ffffff",
                }}
                className="group inline-flex min-h-12 min-w-[160px] items-center justify-center gap-2 rounded-full border-2 border-white/30 px-6 py-3.5 text-sm font-bold backdrop-blur-sm transition-all duration-300 hover:border-white/55 hover:bg-white/15 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
              >
                <span
                  style={{
                    color: "#ffffff",
                  }}
                  className="font-bold"
                >
                  See how it works
                </span>

                <ArrowRight
                  size={15}
                  style={{
                    color: "#ffffff",
                  }}
                  className="transition-transform duration-200 group-hover:translate-x-1"
                />
              </motion.a>
            </motion.div>

            {/* Trust points */}
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
                duration: 0.6,
                delay: 0.7,
              }}
              className="mx-auto mt-8 flex max-w-lg flex-wrap items-center justify-center gap-x-5 gap-y-2 text-[10px] font-medium text-white/35"
            >
              <span className="flex items-center gap-1.5">
                <Check size={11} className="text-white/50" />
                Illustrative product concept
              </span>

              <span className="hidden h-1 w-1 rounded-full bg-white/20 sm:block" />

              <span className="flex items-center gap-1.5">
                <Check size={11} className="text-white/50" />
                No fabricated customer claims
              </span>
            </motion.div>

            {/* Small bottom signal */}
            <motion.div
              initial={{
                opacity: 0,
                scale: 0.9,
              }}
              whileInView={{
                opacity: 1,
                scale: 1,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                duration: 0.5,
                delay: 0.9,
              }}
              className="mx-auto mt-8 flex w-fit items-center gap-2 text-[9px] font-semibold uppercase tracking-[0.16em] text-white/25"
            >
              <motion.span
                animate={{
                  scale: [1, 1.25, 1],
                  opacity: [0.4, 1, 0.4],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                }}
                className="h-1.5 w-1.5 rounded-full bg-[#bdebd6]"
              />

              <Zap size={11} />

              Smarter attendance starts here
            </motion.div>
          </div>

          {/* Bottom border glow */}
          <motion.div
            aria-hidden="true"
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
              duration: 1.2,
              delay: 0.6,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="absolute bottom-0 left-[15%] right-[15%] h-px origin-center bg-gradient-to-r from-transparent via-white/20 to-transparent"
          />
        </motion.div>
      </div>
    </section>
  );
}

export default FinalCTA;