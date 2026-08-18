import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, Menu, Sparkles, X } from "lucide-react";
import { Link } from "react-router-dom";

const navigation = [
  { label: "Product", href: "#product" },
  { label: "Insights", href: "#insights" },
  { label: "How it works", href: "#how-it-works" },
];

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("product");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);

      const sections = navigation
        .map((item) => document.querySelector(item.href))
        .filter(Boolean);

      let current = "product";

      sections.forEach((section) => {
        const rect = section.getBoundingClientRect();

        if (rect.top <= 150) {
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

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-4 pt-3 sm:px-6">
      <motion.nav
        initial={{ opacity: 0, y: -20 }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 0.6,
          ease: [0.22, 1, 0.36, 1],
        }}
        className={`mx-auto flex items-center justify-between rounded-full border transition-all duration-500 ${
          isScrolled
            ? "max-w-5xl border-black/10 bg-white/95 px-3 py-2 shadow-[0_12px_40px_rgba(0,0,0,0.10)] backdrop-blur-2xl"
            : "max-w-7xl border-black/8 bg-white/85 px-3 py-2.5 shadow-[0_8px_30px_rgba(0,0,0,0.06)] backdrop-blur-xl"
        }`}
      >
        {/* Logo */}
        <motion.div
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.97 }}
        >
          <Link
            to="/"
            onClick={closeMenu}
            className="group flex shrink-0 items-center gap-2 rounded-full px-2 py-1"
          >
            <motion.span
              whileHover={{ rotate: -8 }}
              transition={{
                type: "spring",
                stiffness: 400,
              }}
              className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#111111] text-sm font-bold text-white shadow-sm"
            >
              S
            </motion.span>

            <span className="font-[Manrope] text-sm font-bold tracking-tight text-[#111111] sm:text-base">
              SmartAttend
            </span>
          </Link>
        </motion.div>

        {/* Desktop navigation */}
        <div className="hidden items-center gap-1 md:flex">
          {navigation.map((item) => {
            const isActive = activeSection === item.href.slice(1);

            return (
              <a
                key={item.href}
                href={item.href}
                className="relative rounded-full px-4 py-2.5 text-sm font-semibold text-[#111111]/65 transition-colors duration-200 hover:text-[#111111]"
              >
                {isActive && (
                  <motion.span
                    layoutId="navbar-active"
                    className="absolute inset-0 -z-10 rounded-full bg-black/[0.05]"
                  />
                )}

                <span className="relative z-10">
                  {item.label}
                </span>

                {isActive && (
                  <motion.span
                    layoutId="navbar-dot"
                    className="absolute bottom-1 left-1/2 h-1 w-1 -translate-x-1/2 rounded-full bg-[#111111]"
                  />
                )}
              </a>
            );
          })}
        </div>

        {/* Desktop actions */}
        <div className="hidden items-center gap-2 sm:flex">
          {/* Sign in */}
          <Link
            to="/signin"
            className="rounded-full px-4 py-2.5 text-sm font-medium text-[#111111]/55 transition-colors duration-200 hover:text-[#111111]"
          >
            Sign in
          </Link>

          {/* Get started */}
          <motion.div
            whileHover={{
              y: -2,
              scale: 1.02,
            }}
            whileTap={{
              scale: 0.97,
            }}
          >
            <Link
              to="/signup"
              className="group relative inline-flex min-h-[44px] min-w-[148px] items-center justify-center gap-2 overflow-hidden rounded-full bg-[#111111] px-5 py-3 text-sm font-bold text-white shadow-[0_8px_20px_rgba(0,0,0,0.16)]"
            >
              <motion.span
                initial={{ x: "-120%" }}
                whileHover={{ x: "120%" }}
                transition={{
                  duration: 0.65,
                  ease: "easeInOut",
                }}
                className="absolute inset-y-0 w-12 -skew-x-12 bg-white/15 blur-sm"
              />

              <span className="relative z-10 text-white">
                Get started
              </span>

              <ArrowRight
                size={16}
                strokeWidth={2.5}
                className="relative z-10 text-white transition-transform duration-300 group-hover:translate-x-1"
              />
            </Link>
          </motion.div>
        </div>

        {/* Mobile menu */}
        <motion.button
          type="button"
          whileTap={{ scale: 0.9 }}
          onClick={() => setIsMenuOpen((open) => !open)}
          className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-black/12 bg-white text-[#111111] shadow-sm md:hidden"
          aria-label={
            isMenuOpen ? "Close navigation menu" : "Open navigation menu"
          }
          aria-expanded={isMenuOpen}
        >
          <AnimatePresence mode="wait" initial={false}>
            {isMenuOpen ? (
              <motion.span
                key="close"
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 90, opacity: 0 }}
              >
                <X size={18} />
              </motion.span>
            ) : (
              <motion.span
                key="menu"
                initial={{ rotate: 90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: -90, opacity: 0 }}
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
              y: -10,
              scale: 0.97,
            }}
            animate={{
              opacity: 1,
              y: 0,
              scale: 1,
            }}
            exit={{
              opacity: 0,
              y: -10,
              scale: 0.97,
            }}
            transition={{
              duration: 0.25,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="mx-auto mt-2 max-w-7xl overflow-hidden rounded-[26px] border border-black/10 bg-white/95 p-3 shadow-[0_20px_60px_rgba(0,0,0,0.12)] backdrop-blur-2xl md:hidden"
          >
            <div className="space-y-1">
              {navigation.map((item, index) => (
                <motion.a
                  key={item.href}
                  href={item.href}
                  onClick={closeMenu}
                  initial={{
                    opacity: 0,
                    x: -12,
                  }}
                  animate={{
                    opacity: 1,
                    x: 0,
                  }}
                  transition={{
                    delay: index * 0.05,
                  }}
                  className="flex items-center justify-between rounded-2xl px-4 py-3.5 text-sm font-semibold text-[#111111]/70 transition-colors hover:bg-black/[0.04] hover:text-[#111111]"
                >
                  <span>{item.label}</span>

                  <ArrowRight
                    size={14}
                    className="text-black/30"
                  />
                </motion.a>
              ))}
            </div>

            <div className="mt-2 border-t border-black/8 pt-2">
              {/* Mobile Sign in */}
              <Link
                to="/signin"
                onClick={closeMenu}
                className="block rounded-2xl px-4 py-3.5 text-sm font-semibold text-[#111111]/60"
              >
                Sign in
              </Link>

              {/* Mobile Get started */}
              <Link
                to="/signup"
                onClick={closeMenu}
                className="mt-1 flex min-h-[50px] w-full items-center justify-between rounded-2xl bg-[#111111] px-4 py-3.5 text-sm font-bold text-white"
              >
                <span className="text-white">
                  Get started
                </span>

                <ArrowRight
                  size={16}
                  className="text-white"
                />
              </Link>
            </div>

            <div className="mt-3 flex items-center justify-center gap-2 text-[10px] font-medium text-black/30">
              <Sparkles size={11} />
              <span>Attendance intelligence, reimagined</span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

export default Navbar;