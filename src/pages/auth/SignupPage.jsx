import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowRight,
  Check,
  Eye,
  EyeOff,
  ShieldCheck,
  Sparkles,
} from "lucide-react";
import { Link } from "react-router-dom";

const roles = ["Student", "Faculty", "Admin"];

function SignupPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [selectedRole, setSelectedRole] = useState("Faculty");
  const [acceptedTerms, setAcceptedTerms] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!acceptedTerms) return;

    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
    }, 1200);
  };

  return (
    <main className="relative min-h-screen overflow-hidden bg-[#090909] px-4 py-4 text-white sm:px-6 sm:py-6 lg:px-10">
      {/* ================================================= */}
      {/* BACKGROUND ATMOSPHERE */}
      {/* ================================================= */}

      <motion.div
        aria-hidden="true"
        animate={{
          x: [0, 35, 0],
          y: [0, -20, 0],
          scale: [1, 1.08, 1],
          opacity: [0.12, 0.22, 0.12],
        }}
        transition={{
          duration: 9,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="pointer-events-none absolute -left-40 top-10 h-96 w-96 rounded-full bg-[#dff3e8] blur-3xl"
      />

      <motion.div
        aria-hidden="true"
        animate={{
          x: [0, -25, 0],
          y: [0, 20, 0],
          scale: [1, 1.05, 1],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="pointer-events-none absolute -right-40 bottom-0 h-96 w-96 rounded-full bg-[#e7e4d9] opacity-20 blur-3xl"
      />

      {/* ================================================= */}
      {/* MAIN CARD */}
      {/* ================================================= */}

      <div className="relative z-10 mx-auto flex min-h-[calc(100vh-32px)] max-w-7xl overflow-hidden rounded-[30px] border border-white/10 bg-[#111111] shadow-[0_30px_100px_rgba(0,0,0,0.45)] sm:min-h-[calc(100vh-48px)] sm:rounded-[32px]">
        {/* ================================================= */}
        {/* LEFT VISUAL PANEL */}
        {/* ================================================= */}

        <motion.div
          initial={{
            opacity: 0,
            x: -40,
          }}
          animate={{
            opacity: 1,
            x: 0,
          }}
          transition={{
            duration: 0.8,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="relative hidden overflow-hidden bg-[#0b0b0b] p-10 text-white lg:flex lg:w-[46%] lg:flex-col lg:justify-between xl:p-14"
        >
          {/* Green atmosphere */}
          <motion.div
            aria-hidden="true"
            animate={{
              x: [0, 30, 0],
              y: [0, -20, 0],
              scale: [1, 1.1, 1],
              opacity: [0.12, 0.2, 0.12],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute -right-32 -top-32 h-80 w-80 rounded-full bg-[#bcebd3] blur-3xl"
          />

          {/* Bottom atmosphere */}
          <motion.div
            aria-hidden="true"
            animate={{
              x: [0, -20, 0],
              y: [0, 20, 0],
            }}
            transition={{
              duration: 9,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute -bottom-40 -left-32 h-96 w-96 rounded-full bg-white opacity-[0.035] blur-3xl"
          />

          {/* Floating particles */}
          <motion.span
            animate={{
              y: [0, -14, 0],
              opacity: [0.2, 0.55, 0.2],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
            }}
            className="absolute left-[20%] top-[35%] h-1.5 w-1.5 rounded-full bg-white"
          />

          <motion.span
            animate={{
              y: [0, 12, 0],
              opacity: [0.15, 0.45, 0.15],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              delay: 1,
            }}
            className="absolute right-[20%] top-[25%] h-1 w-1 rounded-full bg-[#bcebd3]"
          />

          <div className="relative z-10">
            {/* Logo */}
            <motion.div
              whileHover={{
                y: -2,
              }}
            >
              <Link
                to="/"
                className="group flex w-fit items-center gap-2"
              >
                <motion.span
                  whileHover={{
                    rotate: -8,
                    scale: 1.08,
                  }}
                  className="relative flex h-10 w-10 items-center justify-center overflow-hidden rounded-xl bg-white text-sm font-bold text-[#111111]"
                >
                  <motion.span
                    animate={{
                      x: ["-120%", "120%"],
                    }}
                    transition={{
                      duration: 2.5,
                      repeat: Infinity,
                      repeatDelay: 3,
                    }}
                    className="absolute inset-y-0 w-5 -skew-x-12 bg-black/5 blur-sm"
                  />

                  <span className="relative z-10">
                    S
                  </span>
                </motion.span>

                <span className="font-[Manrope] text-lg font-bold text-white">
                  SmartAttend
                </span>
              </Link>
            </motion.div>

            {/* Hero copy */}
            <motion.div
              initial={{
                opacity: 0,
                y: 20,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.7,
                delay: 0.25,
              }}
              className="mt-20 max-w-md"
            >
              <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.08] px-3 py-2 text-xs font-semibold text-white/75 backdrop-blur-sm">
                <span className="flex h-5 w-5 items-center justify-center rounded-full bg-[#dff5e9] text-[#248557]">
                  <Sparkles size={11} />
                </span>

                Attendance intelligence
              </div>

              <h1 className="mt-7 font-[Manrope] text-4xl font-extrabold leading-[1.05] tracking-[-0.045em] text-white xl:text-5xl">
                Make every classroom signal count.
              </h1>

              <p className="mt-6 text-sm leading-7 text-white/55">
                Create your SmartAttend workspace and bring attendance,
                patterns, and classroom insights together in one focused
                experience.
              </p>
            </motion.div>
          </div>

          {/* Stats */}
          <motion.div
            initial={{
              opacity: 0,
              y: 20,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.7,
              delay: 0.45,
            }}
            className="relative z-10"
          >
            <div className="grid grid-cols-2 gap-3">
              {/* Attendance */}
              <motion.div
                whileHover={{
                  y: -4,
                }}
                className="rounded-2xl border border-white/10 bg-white/[0.05] p-4 backdrop-blur-sm"
              >
                <p className="text-[10px] font-medium text-white/45">
                  Attendance
                </p>

                <p className="mt-2 text-2xl font-bold text-white">
                  92.4%
                </p>

                <div className="mt-3 h-1 overflow-hidden rounded-full bg-white/10">
                  <motion.div
                    initial={{
                      width: 0,
                    }}
                    animate={{
                      width: "92%",
                    }}
                    transition={{
                      duration: 1.2,
                      delay: 0.8,
                      ease: "easeOut",
                    }}
                    className="h-1 rounded-full bg-white"
                  />
                </div>
              </motion.div>

              {/* Weekly trend */}
              <motion.div
                whileHover={{
                  y: -4,
                }}
                className="rounded-2xl border border-white/10 bg-white/[0.05] p-4 backdrop-blur-sm"
              >
                <p className="text-[10px] font-medium text-white/45">
                  Weekly trend
                </p>

                <p className="mt-2 text-2xl font-bold text-white">
                  +4.2%
                </p>

                <p className="mt-2 text-[10px] text-[#9be4bd]">
                  Improving this week
                </p>
              </motion.div>
            </div>

            <div className="mt-4 flex items-center gap-2 text-[10px] text-white/45">
              <ShieldCheck size={13} />
              <span>Secure account experience</span>
            </div>
          </motion.div>
        </motion.div>

        {/* ================================================= */}
        {/* FORM PANEL */}
        {/* ================================================= */}

        <motion.div
          initial={{
            opacity: 0,
            x: 40,
          }}
          animate={{
            opacity: 1,
            x: 0,
          }}
          transition={{
            duration: 0.8,
            delay: 0.1,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="flex w-full items-center justify-center bg-[#111111] p-6 text-white sm:p-10 lg:w-[54%] lg:p-14"
        >
          <div className="w-full max-w-md">
            {/* Mobile logo */}
            <motion.div
              initial={{
                opacity: 0,
                y: -10,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                delay: 0.3,
              }}
            >
              <Link
                to="/"
                className="mb-10 flex w-fit items-center gap-2 lg:hidden"
              >
                <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-white text-sm font-bold text-[#111111]">
                  S
                </span>

                <span className="font-[Manrope] text-base font-bold text-white">
                  SmartAttend
                </span>
              </Link>
            </motion.div>

            {/* Heading */}
            <motion.div
              initial={{
                opacity: 0,
                y: 18,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.6,
                delay: 0.25,
              }}
            >
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-white/50">
                Create your account
              </p>

              <h2 className="mt-3 font-[Manrope] text-3xl font-extrabold tracking-[-0.04em] text-white sm:text-4xl">
                Welcome to SmartAttend.
              </h2>

              <p className="mt-3 text-sm leading-6 text-white/55">
                Set up your workspace in less than a minute.
              </p>
            </motion.div>

            {/* ================================================= */}
            {/* FORM */}
            {/* ================================================= */}

            <form
              onSubmit={handleSubmit}
              className="mt-8 space-y-5"
            >
              {/* Name */}
              <motion.div
                initial={{
                  opacity: 0,
                  y: 14,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  delay: 0.35,
                }}
              >
                <label
                  htmlFor="name"
                  className="mb-2 block text-xs font-bold text-white"
                >
                  Full name
                </label>

                <input
                  id="name"
                  name="name"
                  type="text"
                  placeholder="Ayush Kumar"
                  required
                  className="h-12 w-full rounded-2xl border border-white/15 bg-[#191919] px-4 text-sm text-white outline-none transition-all placeholder:text-white/35 focus:border-white/30 focus:bg-[#1d1d1d] focus:ring-4 focus:ring-white/[0.04]"
                />
              </motion.div>

              {/* Email */}
              <motion.div
                initial={{
                  opacity: 0,
                  y: 14,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  delay: 0.42,
                }}
              >
                <label
                  htmlFor="email"
                  className="mb-2 block text-xs font-bold text-white"
                >
                  Email address
                </label>

                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="you@example.com"
                  required
                  className="h-12 w-full rounded-2xl border border-white/15 bg-[#191919] px-4 text-sm text-white outline-none transition-all placeholder:text-white/35 focus:border-white/30 focus:bg-[#1d1d1d] focus:ring-4 focus:ring-white/[0.04]"
                />
              </motion.div>

              {/* Role */}
              <motion.div
                initial={{
                  opacity: 0,
                  y: 14,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  delay: 0.49,
                }}
              >
                <label className="mb-2 block text-xs font-bold text-white">
                  I am a
                </label>

                <div className="grid grid-cols-3 gap-2">
                  {roles.map((role) => {
                    const isSelected = selectedRole === role;

                    return (
                      <motion.button
                        key={role}
                        type="button"
                        whileTap={{
                          scale: 0.96,
                        }}
                        onClick={() => setSelectedRole(role)}
                        className={`relative overflow-hidden rounded-2xl border px-3 py-3 text-xs font-bold transition-all ${
                          isSelected
                            ? "border-white bg-white text-[#111111] shadow-[0_8px_20px_rgba(0,0,0,0.20)]"
                            : "border-white/15 bg-[#191919] text-white/60 hover:border-white/25 hover:bg-[#1d1d1d] hover:text-white"
                        }`}
                      >
                        {isSelected && (
                          <motion.span
                            layoutId="selected-role"
                            className="absolute inset-0 bg-white"
                          />
                        )}

                        <span
                          className={`relative z-10 ${
                            isSelected
                              ? "text-[#111111]"
                              : "text-white"
                          }`}
                        >
                          {role}
                        </span>
                      </motion.button>
                    );
                  })}
                </div>
              </motion.div>

              {/* Password */}
              <motion.div
                initial={{
                  opacity: 0,
                  y: 14,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  delay: 0.56,
                }}
              >
                <label
                  htmlFor="password"
                  className="mb-2 block text-xs font-bold text-white"
                >
                  Password
                </label>

                <div className="relative">
                  <input
                    id="password"
                    name="password"
                    type={showPassword ? "text" : "password"}
                    placeholder="Create a strong password"
                    minLength={8}
                    required
                    className="h-12 w-full rounded-2xl border border-white/15 bg-[#191919] px-4 pr-12 text-sm text-white outline-none transition-all placeholder:text-white/35 focus:border-white/30 focus:bg-[#1d1d1d] focus:ring-4 focus:ring-white/[0.04]"
                  />

                  <motion.button
                    type="button"
                    whileTap={{
                      scale: 0.9,
                    }}
                    onClick={() =>
                      setShowPassword((visible) => !visible)
                    }
                    className="absolute right-2 top-1/2 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-xl text-white/55 transition-colors hover:bg-white/[0.08] hover:text-white"
                    aria-label={
                      showPassword
                        ? "Hide password"
                        : "Show password"
                    }
                  >
                    <AnimatePresence
                      mode="wait"
                      initial={false}
                    >
                      {showPassword ? (
                        <motion.span
                          key="eye-off"
                          initial={{
                            opacity: 0,
                            scale: 0.7,
                          }}
                          animate={{
                            opacity: 1,
                            scale: 1,
                          }}
                          exit={{
                            opacity: 0,
                            scale: 0.7,
                          }}
                        >
                          <EyeOff size={17} />
                        </motion.span>
                      ) : (
                        <motion.span
                          key="eye"
                          initial={{
                            opacity: 0,
                            scale: 0.7,
                          }}
                          animate={{
                            opacity: 1,
                            scale: 1,
                          }}
                          exit={{
                            opacity: 0,
                            scale: 0.7,
                          }}
                        >
                          <Eye size={17} />
                        </motion.span>
                      )}
                    </AnimatePresence>
                  </motion.button>
                </div>

                <p className="mt-2 text-[10px] text-white/40">
                  Use at least 8 characters.
                </p>
              </motion.div>

              {/* Terms */}
              <motion.div
                initial={{
                  opacity: 0,
                  y: 10,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  delay: 0.63,
                }}
                className="flex items-start gap-3"
              >
                <motion.button
                  type="button"
                  whileTap={{
                    scale: 0.9,
                  }}
                  onClick={() =>
                    setAcceptedTerms((accepted) => !accepted)
                  }
                  className={`mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-md border transition-all ${
                    acceptedTerms
                      ? "border-white bg-white text-[#111111]"
                      : "border-white/25 bg-[#191919] text-white"
                  }`}
                  aria-label="Accept terms"
                >
                  <AnimatePresence>
                    {acceptedTerms && (
                      <motion.span
                        initial={{
                          opacity: 0,
                          scale: 0.5,
                        }}
                        animate={{
                          opacity: 1,
                          scale: 1,
                        }}
                        exit={{
                          opacity: 0,
                          scale: 0.5,
                        }}
                      >
                        <Check size={12} />
                      </motion.span>
                    )}
                  </AnimatePresence>
                </motion.button>

                <span className="text-[11px] leading-5 text-white/55">
                  I agree to the{" "}
                  <span className="font-semibold text-white/80">
                    Terms of Service
                  </span>{" "}
                  and{" "}
                  <span className="font-semibold text-white/80">
                    Privacy Policy
                  </span>
                  .
                </span>
              </motion.div>

              {/* Submit */}
              <motion.button
                type="submit"
                whileHover={
                  acceptedTerms
                    ? {
                        y: -2,
                      }
                    : undefined
                }
                whileTap={
                  acceptedTerms
                    ? {
                        scale: 0.98,
                      }
                    : undefined
                }
                disabled={!acceptedTerms || isSubmitting}
                className={`group relative flex min-h-12 w-full items-center justify-center gap-2 overflow-hidden rounded-full px-6 py-3.5 text-sm font-bold transition-all ${
                  acceptedTerms
                    ? "bg-white text-[#111111] shadow-[0_10px_25px_rgba(0,0,0,0.25)] hover:bg-[#f2f2f2] hover:shadow-[0_15px_35px_rgba(0,0,0,0.35)]"
                    : "cursor-not-allowed border border-white/10 bg-white/[0.08] text-white/40"
                }`}
              >
                {acceptedTerms && !isSubmitting && (
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
                    className="pointer-events-none absolute inset-y-0 w-12 -skew-x-12 bg-black/5 blur-sm"
                  />
                )}

                {isSubmitting ? (
                  <>
                    <motion.span
                      animate={{
                        rotate: 360,
                      }}
                      transition={{
                        duration: 0.8,
                        repeat: Infinity,
                        ease: "linear",
                      }}
                      className="h-4 w-4 rounded-full border-2 border-black/20 border-t-black"
                    />

                    <span className="relative z-10 text-[#111111]">
                      Creating account...
                    </span>
                  </>
                ) : (
                  <>
                    <span
                      className={
                        acceptedTerms
                          ? "relative z-10 text-[#111111]"
                          : "relative z-10 text-white/40"
                      }
                    >
                      Create account
                    </span>

                    <ArrowRight
                      size={16}
                      className={`relative z-10 transition-transform ${
                        acceptedTerms
                          ? "text-[#111111] group-hover:translate-x-1"
                          : "text-white/40"
                      }`}
                    />
                  </>
                )}
              </motion.button>
            </form>

            {/* Sign in */}
            <motion.p
              initial={{
                opacity: 0,
              }}
              animate={{
                opacity: 1,
              }}
              transition={{
                delay: 0.75,
              }}
              className="mt-7 text-center text-xs text-white/50"
            >
              Already have an account?{" "}
              <Link
                to="/signin"
                className="font-bold text-white underline decoration-white/20 underline-offset-4 transition-colors hover:decoration-white"
              >
                Sign in
              </Link>
            </motion.p>

            <p className="mt-8 text-center text-[9px] text-white/30">
              Product concept · Authentication UI demonstration
            </p>
          </div>
        </motion.div>
      </div>
    </main>
  );
}

export default SignupPage;