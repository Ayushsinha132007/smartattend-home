import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Check,
  Sparkles,
} from "lucide-react";

const productLinks = [
  { label: "Overview", href: "#product" },
  { label: "Insights", href: "#insights" },
  { label: "How it works", href: "#how-it-works" },
];

const exploreLinks = [
  {
    label: "Product preview",
    href: "#product",
    external: true,
  },
  {
    label: "Classroom insights",
    href: "#insights",
  },
  {
    label: "Workflow",
    href: "#how-it-works",
  },
];

const footerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: {
    opacity: 0,
    y: 18,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.55,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-black/8 px-6 py-12 lg:px-8">
      {/* Ambient background */}
      <motion.div
        aria-hidden="true"
        animate={{
          x: [0, 30, 0],
          y: [0, -15, 0],
          opacity: [0.15, 0.28, 0.15],
        }}
        transition={{
          duration: 9,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="pointer-events-none absolute -bottom-32 -left-24 h-64 w-64 rounded-full bg-[#e4f2eb] blur-3xl"
      />

      <motion.div
        aria-hidden="true"
        animate={{
          x: [0, -20, 0],
          y: [0, 15, 0],
          opacity: [0.1, 0.2, 0.1],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="pointer-events-none absolute -right-20 top-10 h-52 w-52 rounded-full bg-[#e7e5dd] blur-3xl"
      />

      <div className="relative z-10 mx-auto max-w-7xl">
        <motion.div
          variants={footerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
            margin: "-80px",
          }}
          className="grid gap-12 lg:grid-cols-[1.2fr_0.8fr]"
        >
          {/* Brand */}
          <motion.div
            variants={itemVariants}
            className="max-w-md"
          >
            <motion.a
              href="/"
              whileHover={{
                y: -2,
              }}
              whileTap={{
                scale: 0.98,
              }}
              className="group flex w-fit items-center gap-2"
              aria-label="SmartAttend home"
            >
              <motion.span
                whileHover={{
                  rotate: -6,
                  scale: 1.06,
                }}
                transition={{
                  type: "spring",
                  stiffness: 400,
                  damping: 18,
                }}
                className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#111111] text-sm font-bold text-white shadow-sm"
              >
                S
              </motion.span>

              <span className="font-[Manrope] text-base font-bold tracking-tight text-[#111111]">
                SmartAttend
              </span>
            </motion.a>

            <p className="mt-5 max-w-sm text-sm leading-6 text-black/45">
              Attendance intelligence for modern classrooms. Designed to help
              faculty spend less time managing records and more time acting on
              what the data reveals.
            </p>

            {/* Product badge */}
            <motion.div
              whileHover={{
                y: -2,
              }}
              className="mt-6 inline-flex items-center gap-2 rounded-full border border-black/8 bg-white px-3 py-1.5 text-[10px] font-semibold text-black/40 shadow-sm"
            >
              <span className="flex h-4 w-4 items-center justify-center rounded-full bg-[#e3f6ec] text-[#248557]">
                <Sparkles size={9} />
              </span>

              Product concept · Illustrative experience
            </motion.div>

            {/* Status */}
            <div className="mt-6 flex items-center gap-2 text-[10px] font-medium text-black/30">
              <motion.span
                animate={{
                  scale: [1, 1.25, 1],
                  opacity: [0.45, 1, 0.45],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                }}
                className="h-1.5 w-1.5 rounded-full bg-[#248557]"
              />

              <span>Designed for modern classrooms</span>
            </div>
          </motion.div>

          {/* Links */}
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3">
            {/* Product */}
            <motion.div variants={itemVariants}>
              <p className="text-xs font-bold text-[#111111]">
                Product
              </p>

              <div className="mt-5 space-y-3.5">
                {productLinks.map((link) => (
                  <motion.a
                    key={link.href}
                    href={link.href}
                    whileHover={{
                      x: 4,
                    }}
                    transition={{
                      duration: 0.2,
                    }}
                    className="group flex w-fit items-center gap-1.5 text-xs font-medium text-black/45 transition-colors hover:text-black"
                  >
                    <span>{link.label}</span>
                  </motion.a>
                ))}
              </div>
            </motion.div>

            {/* Explore */}
            <motion.div variants={itemVariants}>
              <p className="text-xs font-bold text-[#111111]">
                Explore
              </p>

              <div className="mt-5 space-y-3.5">
                {exploreLinks.map((link) => (
                  <motion.a
                    key={link.label}
                    href={link.href}
                    whileHover={{
                      x: 4,
                    }}
                    className="group flex w-fit items-center gap-1 text-xs font-medium text-black/45 transition-colors hover:text-black"
                  >
                    {link.label}

                    {link.external && (
                      <ArrowUpRight
                        size={11}
                        className="transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                      />
                    )}
                  </motion.a>
                ))}
              </div>
            </motion.div>

            {/* Connect */}
            <motion.div variants={itemVariants}>
              <p className="text-xs font-bold text-[#111111]">
                Connect
              </p>

              <div className="mt-5">
                <motion.a
                  href="https://github.com/Ayushsinha132007/smartattend-home"
                  target="_blank"
                  rel="noreferrer"
                  whileHover={{
                    y: -3,
                    scale: 1.02,
                  }}
                  whileTap={{
                    scale: 0.98,
                  }}
                  className="group inline-flex min-h-10 items-center gap-2 rounded-full border-2 border-black/12 bg-white px-4 py-2.5 text-xs font-bold text-[#111111] shadow-sm transition-all duration-200 hover:border-black/25 hover:bg-[#fafafa] hover:shadow-md"
                >
                  <span className="flex h-5 w-5 items-center justify-center rounded-full bg-[#111111] text-[9px] font-bold text-white">
                    GH
                  </span>

                  GitHub

                  <ArrowUpRight
                    size={12}
                    className="transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                  />
                </motion.a>
              </div>

              <p className="mt-4 max-w-[160px] text-[9px] leading-4 text-black/30">
                Explore the project and follow its development.
              </p>
            </motion.div>
          </div>
        </motion.div>

        {/* Divider */}
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
            duration: 0.9,
            delay: 0.2,
          }}
          className="mt-12 origin-left border-t border-black/6"
        />

        {/* Bottom */}
        <motion.div
          initial={{
            opacity: 0,
            y: 10,
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
            delay: 0.3,
          }}
          className="mt-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between"
        >
          <p className="text-[10px] font-medium text-black/30">
            © 2026 SmartAttend. Product concept for demonstration.
          </p>

          <div className="flex items-center gap-2 text-[10px] font-medium text-black/30">
            <Check
              size={11}
              className="text-[#248557]"
            />

            <span>
              Built with React, Tailwind CSS & Framer Motion.
            </span>
          </div>
        </motion.div>

        {/* Back to top */}
        <motion.a
          href="#"
          whileHover={{
            y: -3,
          }}
          whileTap={{
            scale: 0.9,
          }}
          className="absolute bottom-5 right-0 hidden h-9 w-9 items-center justify-center rounded-full border border-black/8 bg-white text-black/35 shadow-sm transition-colors hover:border-black/20 hover:text-black sm:flex"
          aria-label="Back to top"
        >
          <ArrowUpRight
            size={14}
            className="-rotate-45"
          />
        </motion.a>
      </div>
    </footer>
  );
}

export default Footer;