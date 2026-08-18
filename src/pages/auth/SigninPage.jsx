import { useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Eye,
  EyeOff,
  LockKeyhole,
  Sparkles,
} from "lucide-react";
import { Link } from "react-router-dom";

function SigninPage() {
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <main className="min-h-screen bg-[#f7f7f5] px-5 py-6 sm:px-8 lg:px-12">
      <div className="mx-auto flex min-h-[calc(100vh-48px)] max-w-7xl overflow-hidden rounded-[32px] border border-black/8 bg-white shadow-[0_30px_100px_rgba(0,0,0,0.08)]">
        {/* Left panel */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          className="relative hidden overflow-hidden bg-[#111111] p-10 text-white lg:flex lg:w-[46%] lg:flex-col lg:justify-between xl:p-14"
        >
          <div
            aria-hidden="true"
            className="absolute -right-32 -top-32 h-80 w-80 rounded-full bg-[#bcebd3] opacity-20 blur-3xl"
          />

          <div
            aria-hidden="true"
            className="absolute -bottom-40 -left-32 h-96 w-96 rounded-full bg-white opacity-5 blur-3xl"
          />

          <div className="relative z-10">
            <Link
              to="/"
              className="flex w-fit items-center gap-2"
            >
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-white text-sm font-bold text-[#111111]">
                S
              </span>

              <span className="font-[Manrope] text-lg font-bold">
                SmartAttend
              </span>
            </Link>

            <div className="mt-20 max-w-md">
              <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/8 px-3 py-2 text-xs font-semibold text-white/70">
                <Sparkles size={13} />
                Welcome back
              </div>

              <h1 className="mt-7 font-[Manrope] text-4xl font-extrabold leading-[1.05] tracking-[-0.045em] xl:text-5xl">
                Your classroom intelligence is waiting.
              </h1>

              <p className="mt-6 text-sm leading-7 text-white/50">
                Sign in to continue managing attendance, discovering
                classroom patterns, and making better decisions.
              </p>
            </div>
          </div>

          <div className="relative z-10">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-sm">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-[10px] text-white/35">
                    Today's attendance
                  </p>

                  <p className="mt-1 text-2xl font-bold">
                    92.4%
                  </p>
                </div>

                <div className="rounded-full bg-[#dff5e9] px-3 py-1.5 text-[10px] font-bold text-[#28734e]">
                  +4.2%
                </div>
              </div>

              <div className="mt-5 flex h-12 items-end gap-2">
                {[35, 50, 43, 65, 58, 75, 90].map(
                  (height, index) => (
                    <motion.div
                      key={index}
                      initial={{ height: 0 }}
                      animate={{ height: `${height}%` }}
                      transition={{
                        duration: 0.6,
                        delay: 0.3 + index * 0.06,
                      }}
                      className={`flex-1 rounded-t-md ${
                        index === 6
                          ? "bg-white"
                          : "bg-white/15"
                      }`}
                    />
                  ),
                )}
              </div>
            </div>

            <div className="mt-4 flex items-center gap-2 text-[10px] text-white/35">
              <LockKeyhole size={13} />
              <span>Secure account experience</span>
            </div>
          </div>
        </motion.div>

        {/* Sign in form */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="flex w-full items-center justify-center p-6 sm:p-10 lg:w-[54%] lg:p-14"
        >
          <div className="w-full max-w-md">
            {/* Mobile logo */}
            <Link
              to="/"
              className="mb-10 flex w-fit items-center gap-2 lg:hidden"
            >
              <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#111111] text-sm font-bold text-white">
                S
              </span>

              <span className="font-[Manrope] text-base font-bold text-[#111111]">
                SmartAttend
              </span>
            </Link>

            <div>
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-black/35">
                Sign in
              </p>

              <h2 className="mt-3 font-[Manrope] text-3xl font-extrabold tracking-[-0.04em] text-[#111111] sm:text-4xl">
                Welcome back.
              </h2>

              <p className="mt-3 text-sm leading-6 text-black/45">
                Enter your details to access your SmartAttend workspace.
              </p>
            </div>

            <form
              onSubmit={handleSubmit}
              className="mt-8 space-y-5"
            >
              {/* Email */}
              <div>
                <label
                  htmlFor="signin-email"
                  className="mb-2 block text-xs font-bold text-[#111111]"
                >
                  Email address
                </label>

                <input
                  id="signin-email"
                  name="email"
                  type="email"
                  placeholder="you@example.com"
                  autoComplete="email"
                  required
                  className="h-12 w-full rounded-2xl border border-black/10 bg-[#fafaf8] px-4 text-sm text-[#111111] outline-none transition-all placeholder:text-black/25 focus:border-black/30 focus:bg-white focus:ring-4 focus:ring-black/[0.04]"
                />
              </div>

              {/* Password */}
              <div>
                <div className="mb-2 flex items-center justify-between">
                  <label
                    htmlFor="signin-password"
                    className="text-xs font-bold text-[#111111]"
                  >
                    Password
                  </label>

                  <Link
                    to="/forgot-password"
                    className="text-[10px] font-bold text-black/40 transition-colors hover:text-black"
                  >
                    Forgot password?
                  </Link>
                </div>

                <div className="relative">
                  <input
                    id="signin-password"
                    name="password"
                    type={showPassword ? "text" : "password"}
                    placeholder="Enter your password"
                    autoComplete="current-password"
                    required
                    className="h-12 w-full rounded-2xl border border-black/10 bg-[#fafaf8] px-4 pr-12 text-sm text-[#111111] outline-none transition-all placeholder:text-black/25 focus:border-black/30 focus:bg-white focus:ring-4 focus:ring-black/[0.04]"
                  />

                  <button
                    type="button"
                    onClick={() =>
                      setShowPassword((visible) => !visible)
                    }
                    className="absolute right-2 top-1/2 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-xl text-black/35 transition-colors hover:bg-black/[0.04] hover:text-black"
                    aria-label={
                      showPassword
                        ? "Hide password"
                        : "Show password"
                    }
                  >
                    {showPassword ? (
                      <EyeOff size={17} />
                    ) : (
                      <Eye size={17} />
                    )}
                  </button>
                </div>
              </div>

              {/* Remember me */}
              <label className="flex cursor-pointer items-center gap-3 text-[11px] text-black/45">
                <input
                  type="checkbox"
                  className="h-4 w-4 rounded border-black/15 accent-black"
                />

                <span>Keep me signed in</span>
              </label>

              {/* Submit */}
              <motion.button
                type="submit"
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="group flex min-h-12 w-full items-center justify-center gap-2 rounded-full bg-[#111111] px-6 py-3.5 text-sm font-bold text-white shadow-[0_10px_25px_rgba(0,0,0,0.14)] transition-all hover:bg-black hover:shadow-[0_15px_35px_rgba(0,0,0,0.20)]"
              >
                Sign in

                <ArrowRight
                  size={16}
                  className="transition-transform group-hover:translate-x-1"
                />
              </motion.button>
            </form>

            {/* Signup */}
            <p className="mt-7 text-center text-xs text-black/40">
              Don't have an account?{" "}
              <Link
                to="/signup"
                className="font-bold text-[#111111] underline decoration-black/20 underline-offset-4 transition-colors hover:decoration-black"
              >
                Create one
              </Link>
            </p>

            <p className="mt-8 text-center text-[9px] text-black/25">
              Product concept · Authentication UI demonstration
            </p>
          </div>
        </motion.div>
      </div>
    </main>
  );
}

export default SigninPage;