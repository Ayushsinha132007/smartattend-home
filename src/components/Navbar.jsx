import { useState } from "react";
import { ArrowUpRight, Menu, X } from "lucide-react";

const navigation = [
  { label: "Product", href: "#product" },
  { label: "Insights", href: "#insights" },
  { label: "How it works", href: "#how-it-works" },
];

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 lg:px-8">
        <a
          href="/"
          className="flex items-center gap-2"
          aria-label="SmartAttend home"
          onClick={closeMenu}
        >
          <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#111111] text-sm font-bold text-white">
            S
          </span>

          <span className="font-semibold tracking-tight text-[#111111]">
            SmartAttend
          </span>
        </a>

        <div className="hidden items-center gap-8 md:flex">
          {navigation.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-black/60 transition-colors hover:text-black"
            >
              {item.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <button
            type="button"
            className="hidden text-sm font-medium text-black/60 transition-colors hover:text-black sm:block"
          >
            Sign in
          </button>

          <button
            type="button"
            className="group hidden items-center gap-2 rounded-full bg-[#111111] px-4 py-2.5 text-sm font-medium text-white transition-transform hover:scale-[1.02] sm:flex"
          >
            Get started
            <ArrowUpRight
              size={15}
              className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
            />
          </button>

          <button
            type="button"
            onClick={() => setIsMenuOpen((open) => !open)}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-black/10 bg-white/80 text-[#111111] backdrop-blur-sm sm:hidden"
            aria-label={isMenuOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={isMenuOpen}
            aria-controls="mobile-navigation"
          >
            {isMenuOpen ? <X size={19} /> : <Menu size={19} />}
          </button>
        </div>
      </nav>

      {isMenuOpen && (
        <div
          id="mobile-navigation"
          className="mx-4 overflow-hidden rounded-3xl border border-black/8 bg-white/95 p-3 shadow-[0_20px_60px_rgba(0,0,0,0.10)] backdrop-blur-xl sm:hidden"
        >
          <div className="space-y-1">
            {navigation.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={closeMenu}
                className="block rounded-2xl px-4 py-3 text-sm font-medium text-black/60 transition-colors hover:bg-black/[0.04] hover:text-black"
              >
                {item.label}
              </a>
            ))}
          </div>

          <div className="mt-2 border-t border-black/6 pt-2">
            <button
              type="button"
              onClick={closeMenu}
              className="w-full rounded-2xl px-4 py-3 text-left text-sm font-medium text-black/60 transition-colors hover:bg-black/[0.04] hover:text-black"
            >
              Sign in
            </button>

            <button
              type="button"
              onClick={closeMenu}
              className="mt-1 flex w-full items-center justify-between rounded-2xl bg-[#111111] px-4 py-3 text-sm font-semibold text-white"
            >
              Get started
              <ArrowUpRight size={15} />
            </button>
          </div>
        </div>
      )}
    </header>
  );
}

export default Navbar;