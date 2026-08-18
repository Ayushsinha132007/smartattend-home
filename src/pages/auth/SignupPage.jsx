import { useState } from "react";
import { motion } from "framer-motion";
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

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <main className="min-h-screen bg-[#f7f7f5] px-5 py-6 sm:px-8 lg:px-12">
      <div className="mx-auto flex min-h-[calc(100vh-48px)] max-w-7xl overflow-hidden rounded-[32px] border border-black/8 bg-white shadow-[0_30px_100px_rgba(0,0,0,0.08)]">
        {/* Left visual panel */}
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
                Attendance intelligence
              </div>

              <h1 className="mt-7 font-[Manrope] text-4xl font-extrabold leading-[1.05] tracking-[-0.045em] xl:text-5xl">
                Make every classroom signal count.
              </h1>

              <p className="mt-6 text-sm leading-7 text-white/50">
                Create your SmartAttend workspace and bring attendance,
                patterns, and classroom insights together in one focused
                experience.
              </p>
            </div>
          </div>

          <div className="relative z-10">
            <div className="grid grid-cols-2 gap-3">
              <div className="rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur-sm">
                <p className="text-[10px] font-medium text-white/35">
                  Attendance
                </p>

                <p className="mt-2 text-2xl font-bold">
                  92.4%
                </p>

                <div className="mt-3 h-1 rounded-full bg-white/10">
                  <div className="h-1 w-[92%] rounded-full bg-white" />
                </div>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur-sm">
                <p className="text-[10px] font-medium text-white/35">
                  Weekly trend
                </p>

                <p className="mt-2 text-2xl font-bold">
                  +4.2%
                </p>

                <p className="mt-2 text-[10px] text-[#9be4bd]">
                  Improving this week
                </p>
              </div>
            </div>

            <div className="mt-4 flex items-center gap-2 text-[10px] text-white/35">
              <ShieldCheck size={13} />
              <span>Secure account experience</span>
            </div>
          </div>
        </motion.div>

        {/* Form panel */}
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
                Create your account
              </p>

              <h2 className="mt-3 font-[Manrope] text-3xl font-extrabold tracking-[-0.04em] text-[#111111] sm:text-4xl">
                Welcome to SmartAttend.
              </h2>

              <p className="mt-3 text-sm leading-6 text-black/45">
                Set up your workspace in less than a minute.
              </p>
            </div>

            <form
              onSubmit={handleSubmit}
              className="mt-8 space-y-5"
            >
              {/* Name */}
              <div>
                <label
                  htmlFor="name"
                  className="mb-2 block text-xs font-bold text-[#111111]"
                >
                  Full name
                </label>

                <input
                  id="name"
                  name="name"
                  type="text"
                  placeholder="Ayush Kumar"
                  required
                  className="h-12 w-full rounded-2xl border border-black/10 bg-[#fafaf8] px-4 text-sm text-[#111111] outline-none transition-all placeholder:text-black/25 focus:border-black/30 focus:bg-white focus:ring-4 focus:ring-black/[0.04]"
                />
              </div>

              {/* Email */}
              <div>
                <label
                  htmlFor="email"
                  className="mb-2 block text-xs font-bold text-[#111111]"
                >
                  Email address
                </label>

                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="you@example.com"
                  required
                  className="h-12 w-full rounded-2xl border border-black/10 bg-[#fafaf8] px-4 text-sm text-[#111111] outline-none transition-all placeholder:text-black/25 focus:border-black/30 focus:bg-white focus:ring-4 focus:ring-black/[0.04]"
                />
              </div>

              {/* Role */}
              <div>
                <label className="mb-2 block text-xs font-bold text-[#111111]">
                  I am a
                </label>

                <div className="grid grid-cols-3 gap-2">
                  {roles.map((role) => {
                    const isSelected = selectedRole === role;

                    return (
                      <button
                        key={role}
                        type="button"
                        onClick={() => setSelectedRole(role)}
                        className={`rounded-2xl border px-3 py-3 text-xs font-bold transition-all ${
                          isSelected
                            ? "border-[#111111] bg-[#111111] text-white shadow-sm"
                            : "border-black/10 bg-[#fafaf8] text-black/50 hover:border-black/20 hover:text-black"
                        }`}
                      >
                        {role}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Password */}
              <div>
                <label
                  htmlFor="password"
                  className="mb-2 block text-xs font-bold text-[#111111]"
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

                <p className="mt-2 text-[10px] text-black/30">
                  Use at least 8 characters.
                </p>
              </div>

              {/* Terms */}
              <label className="flex cursor-pointer items-start gap-3">
                <button
                  type="button"
                  onClick={() =>
                    setAcceptedTerms((accepted) => !accepted)
                  }
                  className={`mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-md border transition-all ${
                    acceptedTerms
                      ? "border-[#111111] bg-[#111111] text-white"
                      : "border-black/15 bg-white"
                  }`}
                  aria-label="Accept terms"
                >
                  {acceptedTerms && <Check size={12} />}
                </button>

                <span className="text-[11px] leading-5 text-black/40">
                  I agree to the{" "}
                  <span className="font-semibold text-black/60">
                    Terms of Service
                  </span>{" "}
                  and{" "}
                  <span className="font-semibold text-black/60">
                    Privacy Policy
                  </span>
                  .
                </span>
              </label>

              {/* Submit */}
              <motion.button
                type="submit"
                whileHover={{
                  y: -2,
                }}
                whileTap={{
                  scale: 0.98,
                }}
                disabled={!acceptedTerms}
                className={`group flex min-h-12 w-full items-center justify-center gap-2 rounded-full px-6 py-3.5 text-sm font-bold transition-all ${
                  acceptedTerms
                    ? "bg-[#111111] text-white shadow-[0_10px_25px_rgba(0,0,0,0.14)] hover:bg-black hover:shadow-[0_15px_35px_rgba(0,0,0,0.20)]"
                    : "cursor-not-allowed bg-black/10 text-black/30"
                }`}
              >
                Create account

                <ArrowRight
                  size={16}
                  className={`transition-transform ${
                    acceptedTerms
                      ? "group-hover:translate-x-1"
                      : ""
                  }`}
                />
              </motion.button>
            </form>

            {/* Sign in */}
            <p className="mt-7 text-center text-xs text-black/40">
              Already have an account?{" "}
              <Link
                to="/signin"
                className="font-bold text-[#111111] underline decoration-black/20 underline-offset-4 transition-colors hover:decoration-black"
              >
                Sign in
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

export default SignupPage;