import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowRight,
  Menu,
  Sparkles,
  X,
} from "lucide-react";
import { Link } from "react-router-dom";

const navigation = [
  {
    label: "Product",
    href: "#product",
  },
  {
    label: "Insights",
    href: "#insights",
  },
  {
    label: "How it works",
    href: "#how-it-works",
  },
];

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("product");

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;

      setIsScrolled(scrollY > 35);

      const sections = navigation
        .map((item) => document.querySelector(item.href))
        .filter(Boolean);

      let current = "product";

      sections.forEach((section) => {
        const rect = section.getBoundingClientRect();

        if (rect.top <= 180) {
          current = section.id;
        }
      });

      setActiveSection(current);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const handleNavClick = (href) => {
    closeMenu();

    const element = document.querySelector(href);

    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-3 pt-3 sm:px-5 lg:px-6">
      {/* Floating glow */}
      <motion.div
        aria-hidden="true"
        animate={{
          opacity: isScrolled ? 0.08 : 0.16,
          scale: isScrolled ? 0.9 : 1,
        }}
        transition={{
          duration: 0.5,
        }}
        className="pointer-events-none absolute left-1/2 top-1 h-20 w-[min(700px,90vw)] -translate-x-1/2 rounded-full bg-[#cfeee0] blur-3xl"
      />

      <motion.nav
        initial={{
          opacity: 0,
          y: -24,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 0.7,
          ease: [0.22, 1, 0.36, 1],
        }}
        className={`relative mx-auto flex items-center justify-between border transition-all duration-500 ${
          isScrolled
            ? "max-w-5xl rounded-[22px] border-black/10 bg-white/92 px-2.5 py-2 shadow-[0_16px_50px_rgba(0,0,0,0.12)] backdrop-blur-2xl"
            : "max-w-7xl rounded-full border-black/8 bg-white/82 px-3 py-2.5 shadow-[0_8px_35px_rgba(0,0,0,0.07)] backdrop-blur-xl"
        }`}
      >
        {/* Logo */}
        <motion.div
          whileHover={{
            scale: 1.02,
          }}
          whileTap={{
            scale: 0.97,
          }}
        >
          <Link
            to="/"
            onClick={closeMenu}
            className="group flex shrink-0 items-center gap-2 rounded-full px-1.5 py-1"
          >
            <motion.span
              whileHover={{
                rotate: -8,
                scale: 1.08,
              }}
              whileTap={{
                scale: 0.94,
              }}
              transition={{
                type: "spring",
                stiffness: 400,
                damping: 16,
              }}
              className="relative flex h-9 w-9 items-center justify-center overflow-hidden rounded-xl bg-[#111111] text-sm font-bold text-white shadow-[0_5px_16px_rgba(0,0,0,0.16)]"
            >
              <motion.span
                animate={{
                  x: ["-120%", "120%"],
                }}
                transition={{
                  duration: 2.8,
                  repeat: Infinity,
                  repeatDelay: 4,
                  ease: "easeInOut",
                }}
                className="absolute inset-y-0 w-5 -skew-x-12 bg-white/20 blur-[2px]"
              />

              <span className="relative z-10">
                S
              </span>
            </motion.span>

            <span className="font-[Manrope] text-sm font-bold tracking-tight text-[#111111] sm:text-base">
              SmartAttend
            </span>
          </Link>
        </motion.div>

        {/* Desktop navigation */}
        <div className="hidden items-center gap-1 md:flex">
          {navigation.map((item) => {
            const sectionId = item.href.slice(1);
            const isActive = activeSection === sectionId;

            return (
              <motion.a
                key={item.href}
                href={item.href}
                onClick={(event) => {
                  event.preventDefault();
                  handleNavClick(item.href);
                }}
                whileHover={{
                  y: -1,
                }}
                whileTap={{
                  scale: 0.96,
                }}
                className="group relative rounded-full px-4 py-2.5 text-sm font-semibold text-[#111111]/55 transition-colors duration-200 hover:text-[#111111]"
              >
                {/* Active background */}
                {isActive && (
                  <motion.span
                    layoutId="navbar-active-pill"
                    transition={{
                      type: "spring",
                      stiffness: 380,
                      damping: 30,
                    }}
                    className="absolute inset-0 rounded-full bg-black/[0.055] shadow-[inset_0_0_0_1px_rgba(0,0,0,0.035)]"
                  />
                )}

                {/* Hover background */}
                <span className="absolute inset-0 -z-10 rounded-full bg-black/[0.035] opacity-0 transition-opacity duration-200 group-hover:opacity-100" />

                <span className="relative z-10">
                  {item.label}
                </span>

                {/* Active dot */}
                {isActive && (
                  <motion.span
                    layoutId="navbar-active-dot"
                    transition={{
                      type: "spring",
                      stiffness: 400,
                      damping: 25,
                    }}
                    className="absolute bottom-1 left-1/2 h-1 w-1 -translate-x-1/2 rounded-full bg-[#111111]"
                  />
                )}
              </motion.a>
            );
          })}
        </div>

        {/* Desktop actions */}
        <div className="hidden items-center gap-1.5 sm:flex">
          {/* Sign in */}
          <motion.div
            whileHover={{
              y: -1,
            }}
            whileTap={{
              scale: 0.97,
            }}
          >
            <Link
              to="/signin"
              className="rounded-full px-4 py-2.5 text-sm font-semibold text-[#111111]/50 transition-colors duration-200 hover:text-[#111111]"
            >
              Sign in
            </Link>
          </motion.div>

          {/* Get started */}
          <motion.div
            whileHover={{
              y: -2,
            }}
            whileTap={{
              scale: 0.97,
            }}
          >
            <Link
              to="/signup"
              className="group relative inline-flex min-h-[43px] min-w-[145px] items-center justify-center gap-2 overflow-hidden rounded-full bg-[#111111] px-5 py-3 text-sm font-bold text-white shadow-[0_8px_24px_rgba(0,0,0,0.17)]"
            >
              {/* Shine */}
              <motion.span
                initial={{
                  x: "-140%",
                }}
                animate={{
                  x: "140%",
                }}
                transition={{
                  duration: 1.2,
                  repeat: Infinity,
                  repeatDelay: 3,
                  ease: "easeInOut",
                }}
                className="pointer-events-none absolute inset-y-0 w-12 -skew-x-12 bg-white/15 blur-sm"
              />

              {/* Glow */}
              <span className="absolute inset-0 rounded-full bg-white opacity-0 transition-opacity duration-300 group-hover:opacity-[0.07]" />

              <span className="relative z-10 text-white">
                Get started
              </span>

              <motion.span
                className="relative z-10 flex"
                whileHover={{
                  x: 3,
                }}
              >
                <ArrowRight
                  size={16}
                  strokeWidth={2.5}
                  className="text-white"
                />
              </motion.span>
            </Link>
          </motion.div>
        </div>

        {/* Mobile menu button */}
        <motion.button
          type="button"
          whileHover={{
            scale: 1.04,
          }}
          whileTap={{
            scale: 0.9,
          }}
          onClick={() => setIsMenuOpen((open) => !open)}
          className="flex h-10 w-10 items-center justify-center rounded-full border border-black/10 bg-white text-[#111111] shadow-sm md:hidden"
          aria-label={
            isMenuOpen
              ? "Close navigation menu"
              : "Open navigation menu"
          }
          aria-expanded={isMenuOpen}
        >
          <AnimatePresence
            mode="wait"
            initial={false}
          >
            {isMenuOpen ? (
              <motion.span
                key="close"
                initial={{
                  rotate: -90,
                  opacity: 0,
                  scale: 0.7,
                }}
                animate={{
                  rotate: 0,
                  opacity: 1,
                  scale: 1,
                }}
                exit={{
                  rotate: 90,
                  opacity: 0,
                  scale: 0.7,
                }}
                transition={{
                  duration: 0.2,
                }}
              >
                <X size={18} />
              </motion.span>
            ) : (
              <motion.span
                key="menu"
                initial={{
                  rotate: 90,
                  opacity: 0,
                  scale: 0.7,
                }}
                animate={{
                  rotate: 0,
                  opacity: 1,
                  scale: 1,
                }}
                exit={{
                  rotate: -90,
                  opacity: 0,
                  scale: 0.7,
                }}
                transition={{
                  duration: 0.2,
                }}
              >
                <Menu size={18} />
              </motion.span>
            )}
          </AnimatePresence>
        </motion.button>
      </motion.nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{
              opacity: 0,
              y: -12,
              scale: 0.96,
            }}
            animate={{
              opacity: 1,
              y: 0,
              scale: 1,
            }}
            exit={{
              opacity: 0,
              y: -12,
              scale: 0.96,
            }}
            transition={{
              duration: 0.3,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="relative mx-auto mt-2 max-w-7xl overflow-hidden rounded-[26px] border border-black/10 bg-white/95 p-3 shadow-[0_24px_70px_rgba(0,0,0,0.14)] backdrop-blur-2xl md:hidden"
          >
            {/* Mobile glow */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -right-16 -top-16 h-36 w-36 rounded-full bg-[#dff5ec] opacity-60 blur-3xl"
            />

            <div className="relative z-10 space-y-1">
              {navigation.map((item, index) => {
                const isActive =
                  activeSection === item.href.slice(1);

                return (
                  <motion.a
                    key={item.href}
                    href={item.href}
                    onClick={(event) => {
                      event.preventDefault();
                      handleNavClick(item.href);
                    }}
                    initial={{
                      opacity: 0,
                      x: -14,
                    }}
                    animate={{
                      opacity: 1,
                      x: 0,
                    }}
                    transition={{
                      delay: 0.05 + index * 0.06,
                      duration: 0.3,
                    }}
                    whileTap={{
                      scale: 0.98,
                    }}
                    className={`flex items-center justify-between rounded-2xl px-4 py-3.5 text-sm font-semibold transition-all ${
                      isActive
                        ? "bg-black/[0.05] text-[#111111]"
                        : "text-[#111111]/60 hover:bg-black/[0.035] hover:text-[#111111]"
                    }`}
                  >
                    <div className="flex items-center gap-2.5">
                      {isActive && (
                        <motion.span
                          layoutId="mobile-active-dot"
                          className="h-1.5 w-1.5 rounded-full bg-[#111111]"
                        />
                      )}

                      <span>{item.label}</span>
                    </div>

                    <ArrowRight
                      size={14}
                      className={`transition-transform duration-200 ${
                        isActive
                          ? "text-black/60"
                          : "text-black/25"
                      }`}
                    />
                  </motion.a>
                );
              })}
            </div>

            {/* Mobile actions */}
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
                delay: 0.25,
                duration: 0.3,
              }}
              className="relative z-10 mt-2 border-t border-black/8 pt-2"
            >
              <Link
                to="/signin"
                onClick={closeMenu}
                className="flex min-h-[48px] items-center rounded-2xl px-4 py-3.5 text-sm font-semibold text-[#111111]/60 transition-colors hover:bg-black/[0.035] hover:text-[#111111]"
              >
                Sign in
              </Link>

              <Link
                to="/signup"
                onClick={closeMenu}
                className="group mt-1 flex min-h-[50px] w-full items-center justify-between overflow-hidden rounded-2xl bg-[#111111] px-4 py-3.5 text-sm font-bold text-white shadow-[0_8px_24px_rgba(0,0,0,0.15)]"
              >
                <span className="text-white">
                  Get started
                </span>

                <motion.span
                  whileHover={{
                    x: 3,
                  }}
                  className="flex"
                >
                  <ArrowRight
                    size={16}
                    className="text-white"
                  />
                </motion.span>
              </Link>
            </motion.div>

            {/* Mobile footer */}
            <motion.div
              initial={{
                opacity: 0,
              }}
              animate={{
                opacity: 1,
              }}
              transition={{
                delay: 0.35,
              }}
              className="relative z-10 mt-3 flex items-center justify-center gap-2 text-[10px] font-medium text-black/30"
            >
              <Sparkles size={11} />

              <span>
                Attendance intelligence, reimagined
              </span>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

export default Navbar;