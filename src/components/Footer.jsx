import { ArrowUpRight, Github, Linkedin } from "lucide-react";

function Footer() {
  return (
    <footer className="border-t border-black/8 px-6 py-10 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col gap-10 lg:flex-row lg:items-start lg:justify-between">
          <div className="max-w-sm">
            <a
              href="/"
              className="flex w-fit items-center gap-2"
              aria-label="SmartAttend home"
            >
              <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#111111] text-sm font-bold text-white">
                S
              </span>

              <span className="font-semibold tracking-tight text-[#111111]">
                SmartAttend
              </span>
            </a>

            <p className="mt-4 text-sm leading-6 text-black/40">
              Attendance intelligence for modern classrooms. Designed to help
              faculty spend less time managing records and more time acting on
              what the data reveals.
            </p>

            <p className="mt-5 text-[10px] text-black/25">
              Product concept · Illustrative experience
            </p>
          </div>

          <div className="grid grid-cols-2 gap-x-16 gap-y-8 sm:grid-cols-3">
            <div>
              <p className="text-xs font-semibold text-[#111111]">
                Product
              </p>

              <div className="mt-4 space-y-3">
                <a
                  href="#product"
                  className="block text-xs text-black/40 transition-colors hover:text-black"
                >
                  Overview
                </a>

                <a
                  href="#insights"
                  className="block text-xs text-black/40 transition-colors hover:text-black"
                >
                  Insights
                </a>

                <a
                  href="#how-it-works"
                  className="block text-xs text-black/40 transition-colors hover:text-black"
                >
                  How it works
                </a>
              </div>
            </div>

            <div>
              <p className="text-xs font-semibold text-[#111111]">
                Resources
              </p>

              <div className="mt-4 space-y-3">
                <a
                  href="#product"
                  className="group flex items-center gap-1 text-xs text-black/40 transition-colors hover:text-black"
                >
                  Product preview
                  <ArrowUpRight
                    size={11}
                    className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                  />
                </a>

                <a
                  href="#how-it-works"
                  className="block text-xs text-black/40 transition-colors hover:text-black"
                >
                  Workflow
                </a>

                <a
                  href="#"
                  className="block text-xs text-black/40 transition-colors hover:text-black"
                >
                  Documentation
                </a>
              </div>
            </div>

            <div>
              <p className="text-xs font-semibold text-[#111111]">
                Connect
              </p>

              <div className="mt-4 flex items-center gap-2">
                <a
                  href="#"
                  aria-label="SmartAttend GitHub"
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-black/8 bg-white text-black/40 transition-all hover:border-black/15 hover:text-black"
                >
                  <Github size={15} />
                </a>

                <a
                  href="#"
                  aria-label="SmartAttend LinkedIn"
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-black/8 bg-white text-black/40 transition-all hover:border-black/15 hover:text-black"
                >
                  <Linkedin size={15} />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-3 border-t border-black/6 pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-[10px] text-black/30">
            © 2026 SmartAttend. Product concept for demonstration.
          </p>

          <p className="text-[10px] text-black/30">
            Built with React, Tailwind CSS & Framer Motion.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;