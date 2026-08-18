import { useState } from "react";
import {
  ArrowRight,
  ArrowUpRight,
  BarChart3,
  CalendarDays,
  CheckCircle2,
  Clock3,
  Sparkles,
  TrendingUp,
  Users,
} from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

const views = [
  {
    id: "overview",
    label: "Overview",
    icon: BarChart3,
  },
  {
    id: "attendance",
    label: "Attendance",
    icon: CalendarDays,
  },
  {
    id: "students",
    label: "Students",
    icon: Users,
  },
  {
    id: "insights",
    label: "Insights",
    icon: Sparkles,
  },
];

const attendanceData = [
  58, 64, 61, 72, 68, 77, 74, 84, 79, 92,
];

const students = [
  {
    initial: "A",
    name: "Aarav Mehta",
    attendance: "68%",
    status: "Needs attention",
  },
  {
    initial: "A",
    name: "Ananya Singh",
    attendance: "71%",
    status: "Needs attention",
  },
  {
    initial: "R",
    name: "Rohan Kumar",
    attendance: "73%",
    status: "Monitor",
  },
  {
    initial: "I",
    name: "Ishita Sharma",
    attendance: "74%",
    status: "Monitor",
  },
];

const insights = [
  {
    title: "Attendance is improving",
    description:
      "Average attendance has increased consistently over the last three weeks.",
    value: "+4.2%",
    type: "positive",
  },
  {
    title: "12 students need attention",
    description:
      "Students below your configured attendance threshold were automatically surfaced.",
    value: "12",
    type: "warning",
  },
  {
    title: "Friday attendance dips",
    description:
      "Friday sessions are showing a recurring drop compared with the rest of the week.",
    value: "-8.4%",
    type: "negative",
  },
];

function ProductShowcase() {
  const [activeView, setActiveView] = useState("overview");
  const [selectedWeek, setSelectedWeek] = useState("This week");

  return (
    <section
      id="product"
      className="overflow-hidden px-6 py-24 lg:px-8 lg:py-32"
    >
      <div className="mx-auto max-w-7xl">
        <div className="grid items-center gap-14 lg:grid-cols-[0.7fr_1.3fr] lg:gap-16">
          {/* LEFT CONTENT */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
          >
            <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#111111] text-white">
              <BarChart3 size={19} />
            </div>

            <p className="mt-7 text-xs font-semibold uppercase tracking-[0.18em] text-black/40">
              The product
            </p>

            <h2 className="mt-5 max-w-xl font-[Manrope] text-4xl font-bold leading-[1.08] tracking-[-0.045em] text-[#111111] sm:text-5xl">
              Everything you need to understand attendance.
            </h2>

            <p className="mt-6 max-w-lg text-base leading-7 text-black/50">
              One focused workspace for classes, attendance patterns,
              students who need attention, and the decisions behind the
              numbers.
            </p>

            <a
              href="#insights"
              className="group mt-8 inline-flex min-h-11 items-center gap-2 rounded-full border-2 border-black/15 bg-white px-5 py-3 text-sm font-bold text-[#111111] shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:border-black/30 hover:bg-[#fafafa] hover:shadow-md focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-black"
            >
              Explore insights

              <ArrowRight
                size={15}
                className="transition-transform duration-200 group-hover:translate-x-1"
              />
            </a>

            {/* Small feature list */}
            <div className="mt-8 space-y-3">
              {[
                "Real-time attendance overview",
                "Student attention tracking",
                "Automatic classroom patterns",
              ].map((item, index) => (
                <motion.div
                  key={item}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    delay: 0.2 + index * 0.08,
                  }}
                  className="flex items-center gap-2.5 text-xs font-medium text-black/45"
                >
                  <CheckCircle2
                    size={15}
                    className="shrink-0 text-[#28734e]"
                  />

                  {item}
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* DASHBOARD */}
          <motion.div
            initial={{
              opacity: 0,
              x: 30,
              scale: 0.98,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
              scale: 1,
            }}
            viewport={{
              once: true,
              margin: "-100px",
            }}
            transition={{
              duration: 0.8,
            }}
            className="relative"
          >
            {/* Ambient glow */}
            <motion.div
              animate={{
                scale: [1, 1.04, 1],
                opacity: [0.4, 0.55, 0.4],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              aria-hidden="true"
              className="absolute -inset-8 -z-10 rounded-full bg-[#e7e5dd] blur-3xl"
            />

            <div className="overflow-hidden rounded-[28px] border-[8px] border-[#111111] bg-[#f7f7f5] shadow-[0_35px_90px_rgba(0,0,0,0.13)]">
              {/* TOP BAR */}
              <div className="flex items-center justify-between border-b border-black/5 bg-white px-4 py-3 sm:px-5 sm:py-4">
                <div className="flex items-center gap-2">
                  <CalendarDays
                    size={14}
                    className="text-black/35"
                  />

                  <span className="text-[10px] font-medium text-black/45">
                    Tuesday, August 18
                  </span>
                </div>

                <select
                  value={selectedWeek}
                  onChange={(event) =>
                    setSelectedWeek(event.target.value)
                  }
                  className="cursor-pointer appearance-none rounded-full border border-black/8 bg-white px-3 py-1.5 text-[10px] font-semibold text-black/55 outline-none"
                >
                  <option>This week</option>
                  <option>Last week</option>
                  <option>This month</option>
                </select>
              </div>

              {/* DASHBOARD CONTENT */}
              <div className="p-3 sm:p-5">
                {/* Dashboard heading */}
                <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                  <div>
                    <p className="text-[10px] font-medium text-black/35">
                      SmartAttend workspace
                    </p>

                    <h3 className="mt-1 text-xl font-bold tracking-tight text-[#111111]">
                      Attendance overview
                    </h3>
                  </div>

                  <div className="flex items-center gap-1.5 text-[10px] text-black/30">
                    <Clock3 size={12} />
                    Updated today
                  </div>
                </div>

                {/* TABS */}
                <div className="mt-5 flex gap-1 overflow-x-auto rounded-2xl bg-[#eeeeea] p-1">
                  {views.map((view) => {
                    const Icon = view.icon;
                    const isActive = activeView === view.id;

                    return (
                      <button
                        key={view.id}
                        type="button"
                        onClick={() => setActiveView(view.id)}
                        className="relative flex min-w-fit flex-1 items-center justify-center gap-1.5 rounded-xl px-3 py-2.5 text-[9px] font-bold transition-colors"
                      >
                        {isActive && (
                          <motion.span
                            layoutId="product-tab"
                            className="absolute inset-0 rounded-xl bg-white shadow-sm"
                            transition={{
                              type: "spring",
                              stiffness: 400,
                              damping: 30,
                            }}
                          />
                        )}

                        <span
                          className={`relative z-10 flex items-center gap-1.5 ${
                            isActive
                              ? "text-[#111111]"
                              : "text-black/35"
                          }`}
                        >
                          <Icon size={12} />
                          {view.label}
                        </span>
                      </button>
                    );
                  })}
                </div>

                {/* VIEW CONTENT */}
                <div className="mt-3 min-h-[390px]">
                  <AnimatePresence mode="wait">
                    {/* OVERVIEW */}
                    {activeView === "overview" && (
                      <motion.div
                        key="overview"
                        initial={{
                          opacity: 0,
                          y: 12,
                        }}
                        animate={{
                          opacity: 1,
                          y: 0,
                        }}
                        exit={{
                          opacity: 0,
                          y: -10,
                        }}
                        transition={{
                          duration: 0.3,
                        }}
                      >
                        {/* STATS */}
                        <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
                          <div className="rounded-2xl bg-[#111111] p-4 text-white">
                            <p className="text-[9px] text-white/45">
                              Overall
                            </p>

                            <motion.p
                              initial={{ opacity: 0 }}
                              animate={{ opacity: 1 }}
                              className="mt-2 text-2xl font-bold"
                            >
                              92.4%
                            </motion.p>

                            <p className="mt-1 text-[8px] text-white/35">
                              +4.2% this week
                            </p>
                          </div>

                          <StatCard
                            icon={<Users size={12} />}
                            label="Students"
                            value="248"
                            description="students tracked"
                          />

                          <StatCard
                            label="Classes"
                            value="24"
                            description="this week"
                          />

                          <StatCard
                            label="Attention"
                            value="12"
                            description="need review"
                          />
                        </div>

                        {/* ANALYTICS */}
                        <div className="mt-3 grid gap-3 lg:grid-cols-[1.6fr_0.8fr]">
                          <AttendanceChart />

                          <StudentMiniList />
                        </div>
                      </motion.div>
                    )}

                    {/* ATTENDANCE */}
                    {activeView === "attendance" && (
                      <motion.div
                        key="attendance"
                        initial={{
                          opacity: 0,
                          y: 12,
                        }}
                        animate={{
                          opacity: 1,
                          y: 0,
                        }}
                        exit={{
                          opacity: 0,
                          y: -10,
                        }}
                        transition={{
                          duration: 0.3,
                        }}
                      >
                        <div className="rounded-2xl border border-black/5 bg-white p-4 sm:p-5">
                          <div className="flex items-start justify-between">
                            <div>
                              <p className="text-[9px] text-black/35">
                                Attendance performance
                              </p>

                              <p className="mt-1 text-base font-bold text-[#111111]">
                                Weekly attendance trend
                              </p>
                            </div>

                            <div className="rounded-full bg-[#e3f6ec] px-2.5 py-1 text-[8px] font-bold text-[#248557]">
                              +4.2%
                            </div>
                          </div>

                          <div className="mt-7 flex h-52 items-end gap-2 border-b border-black/5">
                            {attendanceData.map(
                              (height, index) => (
                                <motion.div
                                  key={index}
                                  initial={{ height: 0 }}
                                  animate={{
                                    height: `${height}%`,
                                  }}
                                  transition={{
                                    duration: 0.7,
                                    delay: index * 0.06,
                                    ease: "easeOut",
                                  }}
                                  className={`flex-1 rounded-t-lg ${
                                    index ===
                                    attendanceData.length - 1
                                      ? "bg-[#111111]"
                                      : "bg-black/10"
                                  }`}
                                />
                              ),
                            )}
                          </div>

                          <div className="mt-3 flex justify-between text-[8px] text-black/25">
                            {[
                              "Mon",
                              "Tue",
                              "Wed",
                              "Thu",
                              "Fri",
                              "Sat",
                              "Sun",
                            ].map((day) => (
                              <span key={day}>{day}</span>
                            ))}
                          </div>

                          <div className="mt-6 grid grid-cols-3 gap-2">
                            <MiniMetric
                              label="Average"
                              value="82.4%"
                            />

                            <MiniMetric
                              label="Best day"
                              value="92.4%"
                            />

                            <MiniMetric
                              label="Lowest"
                              value="74.2%"
                            />
                          </div>
                        </div>
                      </motion.div>
                    )}

                    {/* STUDENTS */}
                    {activeView === "students" && (
                      <motion.div
                        key="students"
                        initial={{
                          opacity: 0,
                          y: 12,
                        }}
                        animate={{
                          opacity: 1,
                          y: 0,
                        }}
                        exit={{
                          opacity: 0,
                          y: -10,
                        }}
                        transition={{
                          duration: 0.3,
                        }}
                      >
                        <div className="rounded-2xl border border-black/5 bg-white p-4 sm:p-5">
                          <div className="flex items-center justify-between">
                            <div>
                              <p className="text-[9px] text-black/35">
                                Student attention
                              </p>

                              <p className="mt-1 text-base font-bold text-[#111111]">
                                Students needing review
                              </p>
                            </div>

                            <span className="rounded-full bg-[#f8f1e7] px-2.5 py-1 text-[8px] font-bold text-[#8a6428]">
                              12 students
                            </span>
                          </div>

                          <div className="mt-5 space-y-2">
                            {students.map(
                              (
                                student,
                                index,
                              ) => (
                                <motion.div
                                  key={student.name}
                                  initial={{
                                    opacity: 0,
                                    x: -12,
                                  }}
                                  animate={{
                                    opacity: 1,
                                    x: 0,
                                  }}
                                  transition={{
                                    delay:
                                      index * 0.08,
                                  }}
                                  className="flex items-center gap-3 rounded-2xl border border-black/5 bg-[#fafaf8] p-3 transition-all hover:-translate-y-0.5 hover:border-black/10 hover:bg-white hover:shadow-sm"
                                >
                                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#f0f0ed] text-[10px] font-bold text-black/50">
                                    {student.initial}
                                  </div>

                                  <div className="min-w-0 flex-1">
                                    <p className="truncate text-[10px] font-bold text-[#111111]">
                                      {student.name}
                                    </p>

                                    <p className="mt-0.5 text-[8px] text-black/35">
                                      {student.status}
                                    </p>
                                  </div>

                                  <div className="text-right">
                                    <p className="text-xs font-bold text-[#111111]">
                                      {student.attendance}
                                    </p>

                                    <div className="mt-1 h-1 w-12 overflow-hidden rounded-full bg-black/5">
                                      <div
                                        className="h-full rounded-full bg-[#111111]"
                                        style={{
                                          width:
                                            student.attendance,
                                        }}
                                      />
                                    </div>
                                  </div>

                                  <ArrowUpRight
                                    size={14}
                                    className="text-black/20"
                                  />
                                </motion.div>
                              ),
                            )}
                          </div>

                          <button
                            type="button"
                            className="mt-4 flex min-h-10 w-full items-center justify-center rounded-xl border border-black/8 bg-[#f7f7f5] text-[10px] font-bold text-[#111111] transition-all hover:border-black/15 hover:bg-[#eeeeea]"
                          >
                            View all students
                          </button>
                        </div>
                      </motion.div>
                    )}

                    {/* INSIGHTS */}
                    {activeView === "insights" && (
                      <motion.div
                        key="insights"
                        initial={{
                          opacity: 0,
                          y: 12,
                        }}
                        animate={{
                          opacity: 1,
                          y: 0,
                        }}
                        exit={{
                          opacity: 0,
                          y: -10,
                        }}
                        transition={{
                          duration: 0.3,
                        }}
                        className="space-y-2"
                      >
                        {insights.map(
                          (insight, index) => (
                            <motion.div
                              key={insight.title}
                              initial={{
                                opacity: 0,
                                x: 15,
                              }}
                              animate={{
                                opacity: 1,
                                x: 0,
                              }}
                              transition={{
                                delay:
                                  index * 0.1,
                              }}
                              className="group rounded-2xl border border-black/5 bg-white p-4 transition-all hover:-translate-y-0.5 hover:border-black/10 hover:shadow-sm"
                            >
                              <div className="flex items-start gap-3">
                                <div
                                  className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-xl ${
                                    insight.type ===
                                    "positive"
                                      ? "bg-[#e3f6ec] text-[#28734e]"
                                      : insight.type ===
                                          "warning"
                                        ? "bg-[#f8f1e7] text-[#8a6428]"
                                        : "bg-[#f5eaea] text-[#8a3d3d]"
                                  }`}
                                >
                                  {insight.type ===
                                  "positive" ? (
                                    <TrendingUp
                                      size={15}
                                    />
                                  ) : (
                                    <Sparkles
                                      size={15}
                                    />
                                  )}
                                </div>

                                <div className="min-w-0 flex-1">
                                  <div className="flex items-start justify-between gap-3">
                                    <div>
                                      <p className="text-[10px] font-bold text-[#111111]">
                                        {insight.title}
                                      </p>

                                      <p className="mt-1 text-[8px] leading-4 text-black/40">
                                        {
                                          insight.description
                                        }
                                      </p>
                                    </div>

                                    <span
                                      className={`shrink-0 rounded-full px-2 py-1 text-[8px] font-bold ${
                                        insight.type ===
                                        "positive"
                                          ? "bg-[#edf7f1] text-[#28734e]"
                                          : insight.type ===
                                              "warning"
                                            ? "bg-[#f8f1e7] text-[#8a6428]"
                                            : "bg-[#f5eaea] text-[#8a3d3d]"
                                      }`}
                                    >
                                      {
                                        insight.value
                                      }
                                    </span>
                                  </div>
                                </div>
                              </div>
                            </motion.div>
                          ),
                        )}

                        <div className="rounded-2xl bg-[#111111] p-5 text-white">
                          <div className="flex items-center gap-2">
                            <Sparkles size={15} />

                            <p className="text-[9px] font-bold uppercase tracking-[0.12em] text-white/45">
                              Smart signal
                            </p>
                          </div>

                          <p className="mt-3 text-sm font-bold leading-5">
                            Friday sessions may need a closer look.
                          </p>

                          <p className="mt-2 text-[9px] leading-4 text-white/40">
                            SmartAttend detected a recurring attendance
                            pattern across recent classroom sessions.
                          </p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </div>

              {/* FOOTER */}
              <div className="border-t border-black/5 bg-white px-4 py-3 text-center">
                <p className="text-[9px] text-black/25">
                  Product preview · Illustrative demo data
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

/* -------------------------------- */
/* Reusable dashboard components     */
/* -------------------------------- */

function StatCard({
  icon,
  label,
  value,
  description,
}) {
  return (
    <motion.div
      whileHover={{
        y: -2,
      }}
      className="rounded-2xl border border-black/5 bg-white p-4"
    >
      {icon ? (
        <div className="flex items-center gap-1.5 text-black/35">
          {icon}

          <span className="text-[9px]">
            {label}
          </span>
        </div>
      ) : (
        <p className="text-[9px] text-black/35">
          {label}
        </p>
      )}

      <p className="mt-2 text-2xl font-bold text-[#111111]">
        {value}
      </p>

      <p className="mt-1 text-[8px] text-black/30">
        {description}
      </p>
    </motion.div>
  );
}

function AttendanceChart() {
  return (
    <div className="rounded-2xl border border-black/5 bg-white p-4">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-[9px] text-black/35">
            Attendance performance
          </p>

          <p className="mt-1 text-sm font-semibold text-[#111111]">
            Weekly trend
          </p>
        </div>

        <span className="rounded-full bg-[#e3f6ec] px-2.5 py-1 text-[8px] font-bold text-[#248557]">
          Improving
        </span>
      </div>

      <div className="mt-6 flex h-36 items-end gap-2 border-b border-black/5">
        {[38, 46, 43, 61, 56, 68, 64, 78, 74, 91].map(
          (height, index) => (
            <motion.div
              key={index}
              initial={{ height: 0 }}
              whileInView={{
                height: `${height}%`,
              }}
              viewport={{ once: true }}
              transition={{
                duration: 0.55,
                delay: index * 0.05,
                ease: "easeOut",
              }}
              className={`flex-1 rounded-t-md ${
                index === 9
                  ? "bg-[#111111]"
                  : "bg-black/10"
              }`}
            />
          ),
        )}
      </div>

      <div className="mt-2 flex justify-between text-[8px] text-black/25">
        <span>Mon</span>
        <span>Tue</span>
        <span>Wed</span>
        <span>Thu</span>
        <span>Fri</span>
        <span>Sat</span>
      </div>
    </div>
  );
}

function StudentMiniList() {
  return (
    <div className="rounded-2xl border border-black/5 bg-white p-4">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-[9px] text-black/35">
            Student attention
          </p>

          <p className="mt-1 text-sm font-semibold text-[#111111]">
            Needs review
          </p>
        </div>

        <span className="text-[8px] text-black/30">
          12 students
        </span>
      </div>

      <div className="mt-5 space-y-3">
        {students.slice(0, 4).map((student) => (
          <div
            key={student.name}
            className="flex items-center gap-2"
          >
            <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#f0f0ed] text-[9px] font-semibold text-black/45">
              {student.initial}
            </div>

            <span className="min-w-0 flex-1 truncate text-[9px] font-medium text-black/55">
              {student.name}
            </span>

            <span className="text-[8px] font-semibold text-black/35">
              {student.attendance}
            </span>
          </div>
        ))}
      </div>

      <button
        type="button"
        className="mt-5 flex min-h-10 w-full items-center justify-center rounded-xl border border-black/8 bg-[#f7f7f5] text-[10px] font-bold text-[#111111] transition-all hover:border-black/15 hover:bg-[#eeeeea]"
      >
        View students
      </button>
    </div>
  );
}

function MiniMetric({ label, value }) {
  return (
    <div className="rounded-xl bg-[#f7f7f5] p-3">
      <p className="text-[8px] text-black/35">
        {label}
      </p>

      <p className="mt-1 text-sm font-bold text-[#111111]">
        {value}
      </p>
    </div>
  );
}

export default ProductShowcase;