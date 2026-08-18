import { ArrowUpRight, Menu } from "lucide-react";

function Navbar() {
  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 lg:px-8">
        <a
          href="/"
          className="flex items-center gap-2"
          aria-label="SmartAttend home"
        >
          <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#111111] text-sm font-bold text-white">
            S
          </span>

          <span className="font-semibold tracking-tight text-[#111111]">
            SmartAttend
          </span>
        </a>

        <div className="hidden items-center gap-8 md:flex">
          <a
            href="#product"
            className="text-sm font-medium text-black/60 transition-colors hover:text-black"
          >
            Product
          </a>

          <a
            href="#insights"
            className="text-sm font-medium text-black/60 transition-colors hover:text-black"
          >
            Insights
          </a>

          <a
            href="#how-it-works"
            className="text-sm font-medium text-black/60 transition-colors hover:text-black"
          >
            How it works
          </a>
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
            className="flex h-10 w-10 items-center justify-center rounded-full border border-black/10 bg-white/70 text-[#111111] backdrop-blur-sm sm:hidden"
            aria-label="Open navigation menu"
          >
            <Menu size={19} />
          </button>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;