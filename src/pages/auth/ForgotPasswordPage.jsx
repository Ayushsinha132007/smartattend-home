import { useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  Mail,
  Sparkles,
} from "lucide-react";
import { Link } from "react-router-dom";

function ForgotPasswordPage() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!email.trim()) {
      return;
    }

    setSubmitted(true);
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
                Account recovery
              </div>

              <h1 className="mt-7 font-[Manrope] text-4xl font-extrabold leading-[1.05] tracking-[-0.045em] xl:text-5xl">
                Get back to your classroom insights.
              </h1>

              <p className="mt-6 text-sm leading-7 text-white/50">
                Enter the email connected to your SmartAttend account and
                we'll help you get back in.
              </p>
            </div>
          </div>

          <div className="relative z-10">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-sm">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/10">
                  <Mail size={18} />
                </div>

                <div>
                  <p className="text-xs font-bold text-white/80">
                    Password recovery
                  </p>

                  <p className="mt-1 text-[10px] text-white/35">
                    Simple, secure and straightforward.
                  </p>
                </div>
              </div>
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

            {!submitted ? (
              <>
                <div>
                  <Link
                    to="/signin"
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-black/40 transition-colors hover:text-black"
                  >
                    <ArrowLeft size={13} />
                    Back to sign in
                  </Link>

                  <p className="mt-8 text-xs font-bold uppercase tracking-[0.18em] text-black/35">
                    Reset password
                  </p>

                  <h2 className="mt-3 font-[Manrope] text-3xl font-extrabold tracking-[-0.04em] text-[#111111] sm:text-4xl">
                    Forgot your password?
                  </h2>

                  <p className="mt-3 text-sm leading-6 text-black/45">
                    No worries. Enter your email address and we'll send
                    instructions to reset your password.
                  </p>
                </div>

                <form
                  onSubmit={handleSubmit}
                  className="mt-8 space-y-5"
                >
                  <div>
                    <label
                      htmlFor="reset-email"
                      className="mb-2 block text-xs font-bold text-[#111111]"
                    >
                      Email address
                    </label>

                    <div className="relative">
                      <Mail
                        size={17}
                        className="absolute left-4 top-1/2 -translate-y-1/2 text-black/30"
                      />

                      <input
                        id="reset-email"
                        name="email"
                        type="email"
                        value={email}
                        onChange={(event) =>
                          setEmail(event.target.value)
                        }
                        placeholder="you@example.com"
                        autoComplete="email"
                        required
                        className="h-12 w-full rounded-2xl border border-black/10 bg-[#fafaf8] pl-11 pr-4 text-sm text-[#111111] outline-none transition-all placeholder:text-black/25 focus:border-black/30 focus:bg-white focus:ring-4 focus:ring-black/[0.04]"
                      />
                    </div>
                  </div>

                  <motion.button
                    type="submit"
                    whileHover={{ y: -2 }}
                    whileTap={{ scale: 0.98 }}
                    className="group flex min-h-12 w-full items-center justify-center gap-2 rounded-full bg-[#111111] px-6 py-3.5 text-sm font-bold text-white shadow-[0_10px_25px_rgba(0,0,0,0.14)] transition-all hover:bg-black hover:shadow-[0_15px_35px_rgba(0,0,0,0.20)]"
                  >
                    Send reset instructions

                    <ArrowRight
                      size={16}
                      className="transition-transform group-hover:translate-x-1"
                    />
                  </motion.button>
                </form>

                <p className="mt-7 text-center text-xs text-black/40">
                  Remember your password?{" "}
                  <Link
                    to="/signin"
                    className="font-bold text-[#111111] underline decoration-black/20 underline-offset-4 transition-colors hover:decoration-black"
                  >
                    Sign in
                  </Link>
                </p>
              </>
            ) : (
              <motion.div
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-center"
              >
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-3xl bg-[#e3f6ec] text-[#28734e]">
                  <CheckCircle2 size={28} />
                </div>

                <p className="mt-7 text-xs font-bold uppercase tracking-[0.18em] text-black/35">
                  Check your inbox
                </p>

                <h2 className="mt-3 font-[Manrope] text-3xl font-extrabold tracking-[-0.04em] text-[#111111]">
                  Reset link requested.
                </h2>

                <p className="mt-4 text-sm leading-6 text-black/45">
                  If an account exists for{" "}
                  <span className="font-bold text-black/65">
                    {email}
                  </span>
                  , password reset instructions will be sent there.
                </p>

                <Link
                  to="/signin"
                  className="group mx-auto mt-8 inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-[#111111] px-6 py-3.5 text-sm font-bold text-white shadow-[0_10px_25px_rgba(0,0,0,0.14)] transition-all hover:-translate-y-0.5 hover:bg-black"
                >
                  Back to sign in

                  <ArrowRight
                    size={16}
                    className="transition-transform group-hover:translate-x-1"
                  />
                </Link>
              </motion.div>
            )}

            <p className="mt-10 text-center text-[9px] text-black/25">
              Product concept · Authentication UI demonstration
            </p>
          </div>
        </motion.div>
      </div>
    </main>
  );
}

export default ForgotPasswordPage;