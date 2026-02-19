"use client";

import { useState } from "react";

const acBrands = [
  "Samsung",
  "LG",
  "Daikin",
  "Carrier",
  "Mitsubishi",
  "Trane",
  "Gree",
  "Other",
];
const acIssues = [
  "Not Cooling",
  "Water Leaking",
  "Strange Noise",
  "Bad Smell",
  "Won't Turn On",
  "Compressor Issue",
  "Remote Not Working",
  "General Maintenance",
];
const timeSlots = [
  "09:00 AM",
  "10:00 AM",
  "11:00 AM",
  "12:00 PM",
  "02:00 PM",
  "03:00 PM",
  "04:00 PM",
  "05:00 PM",
];

export default function BookingFunnel() {
  const [step, setStep] = useState(0);
  const [selectedBrand, setSelectedBrand] = useState("");
  const [selectedIssue, setSelectedIssue] = useState("");
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedTime, setSelectedTime] = useState("");
  const [confirmed, setConfirmed] = useState(false);

  const steps = ["Brand", "Issue", "Schedule", "Confirm"];

  const canNext = () => {
    if (step === 0) return !!selectedBrand;
    if (step === 1) return !!selectedIssue;
    if (step === 2) return !!selectedDate && !!selectedTime;
    return true;
  };

  const handleConfirm = () => {
    setConfirmed(true);
  };

  const handleReset = () => {
    setStep(0);
    setSelectedBrand("");
    setSelectedIssue("");
    setSelectedDate("");
    setSelectedTime("");
    setConfirmed(false);
  };

  return (
    <section id="booking" className="relative py-24 px-6">
      <div className="mx-auto max-w-3xl">
        {/* Section Header */}
        <div className="mb-12 text-center reveal-section">
          <span className="inline-block rounded-full border border-[var(--accent-orange)]/20 bg-[var(--accent-orange-dim)] px-4 py-1.5 text-xs font-medium text-[var(--accent-orange)] uppercase tracking-wider mb-4">
            Book a Service
          </span>
          <h2 className="text-[var(--text-primary)] mb-4">
            Schedule Your{" "}
            <span className="text-[var(--accent-orange)]">Repair</span>
          </h2>
          <p className="mx-auto max-w-xl text-[var(--text-secondary)]">
            Book in 60 seconds. A certified technician will arrive at your
            doorstep.
          </p>
        </div>

        {/* Booking Card */}
        <div className="glass-strong rounded-3xl p-8 glow-cyan reveal-section">
          {/* Progress Bar */}
          {!confirmed && (
            <div className="mb-8">
              <div className="flex items-center justify-between mb-3">
                {steps.map((s, i) => (
                  <div key={s} className="flex items-center gap-2">
                    <div
                      className={`flex h-8 w-8 items-center justify-center rounded-full text-xs font-bold transition-all duration-300 ${
                        i <= step
                          ? "bg-[var(--accent-cyan)] text-[var(--bg-primary)]"
                          : "bg-[var(--bg-secondary)] text-[var(--text-muted)]"
                      }`}
                    >
                      {i < step ? (
                        <svg
                          width="14"
                          height="14"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="3"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <polyline points="20 6 9 17 4 12" />
                        </svg>
                      ) : (
                        i + 1
                      )}
                    </div>
                    <span
                      className={`hidden text-xs font-medium sm:block ${i <= step ? "text-[var(--text-primary)]" : "text-[var(--text-muted)]"}`}
                    >
                      {s}
                    </span>
                  </div>
                ))}
              </div>
              <div className="h-1 rounded-full bg-[var(--bg-secondary)] overflow-hidden">
                <div
                  className="h-full rounded-full bg-gradient-to-r from-[var(--accent-cyan)] to-[#00B8D4] transition-all duration-500"
                  style={{ width: `${((step + 1) / steps.length) * 100}%` }}
                />
              </div>
            </div>
          )}

          {/* Step Content */}
          <div className="min-h-[280px]">
            {confirmed ? (
              /* Success State */
              <div className="flex flex-col items-center justify-center text-center py-8 animate-fade-in-up">
                <div className="mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-green-500/20">
                  <svg
                    width="40"
                    height="40"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#22c55e"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-[var(--text-primary)] mb-2">
                  Booking Confirmed!
                </h3>
                <p className="text-[var(--text-secondary)] mb-2">
                  A technician for your{" "}
                  <span className="text-[var(--accent-cyan)] font-semibold">
                    {selectedBrand}
                  </span>{" "}
                  AC will arrive on{" "}
                  <span className="text-[var(--text-primary)] font-semibold">
                    {selectedDate}
                  </span>{" "}
                  at{" "}
                  <span className="text-[var(--text-primary)] font-semibold">
                    {selectedTime}
                  </span>
                  .
                </p>
                <p className="text-sm text-[var(--text-muted)] mb-6">
                  Booking reference: #
                  {Math.random().toString(36).substring(2, 8).toUpperCase()}
                </p>
                <button
                  onClick={handleReset}
                  className="rounded-xl border border-[var(--border-glass)] px-6 py-2.5 text-sm font-medium text-[var(--text-secondary)] transition-all duration-300 hover:border-[var(--accent-cyan)]/40 hover:text-[var(--text-primary)]"
                >
                  Book Another Service
                </button>
              </div>
            ) : (
              <>
                {/* Step 0: Brand */}
                {step === 0 && (
                  <div className="animate-fade-in-up">
                    <h3 className="text-lg font-semibold text-[var(--text-primary)] mb-4">
                      Select Your AC Brand
                    </h3>
                    <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
                      {acBrands.map((brand) => (
                        <button
                          key={brand}
                          onClick={() => setSelectedBrand(brand)}
                          className={`rounded-xl border px-4 py-3 text-sm font-medium transition-all duration-200 ${
                            selectedBrand === brand
                              ? "border-[var(--accent-cyan)] bg-[var(--accent-cyan-dim)] text-[var(--accent-cyan)]"
                              : "border-[var(--border-glass)] text-[var(--text-secondary)] hover:border-[var(--accent-cyan)]/30 hover:text-[var(--text-primary)]"
                          }`}
                        >
                          {brand}
                        </button>
                      ))}
                    </div>
                  </div>
                )}

                {/* Step 1: Issue */}
                {step === 1 && (
                  <div className="animate-fade-in-up">
                    <h3 className="text-lg font-semibold text-[var(--text-primary)] mb-4">
                      What&apos;s the Issue?
                    </h3>
                    <div className="grid grid-cols-2 gap-3">
                      {acIssues.map((issue) => (
                        <button
                          key={issue}
                          onClick={() => setSelectedIssue(issue)}
                          className={`rounded-xl border px-4 py-3 text-sm font-medium text-left transition-all duration-200 ${
                            selectedIssue === issue
                              ? "border-[var(--accent-cyan)] bg-[var(--accent-cyan-dim)] text-[var(--accent-cyan)]"
                              : "border-[var(--border-glass)] text-[var(--text-secondary)] hover:border-[var(--accent-cyan)]/30 hover:text-[var(--text-primary)]"
                          }`}
                        >
                          {issue}
                        </button>
                      ))}
                    </div>
                  </div>
                )}

                {/* Step 2: Schedule */}
                {step === 2 && (
                  <div className="animate-fade-in-up">
                    <h3 className="text-lg font-semibold text-[var(--text-primary)] mb-4">
                      Pick a Date & Time
                    </h3>
                    <div className="grid gap-6 sm:grid-cols-2">
                      <div>
                        <label className="block text-sm font-medium text-[var(--text-secondary)] mb-2">
                          Date
                        </label>
                        <input
                          type="date"
                          value={selectedDate}
                          onChange={(e) => setSelectedDate(e.target.value)}
                          min={new Date().toISOString().split("T")[0]}
                          className="w-full rounded-xl border border-[var(--border-glass)] bg-[var(--bg-secondary)] px-4 py-3 text-sm text-[var(--text-primary)] outline-none transition-colors duration-200 focus:border-[var(--accent-cyan)] [color-scheme:dark]"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-[var(--text-secondary)] mb-2">
                          Time Slot
                        </label>
                        <div className="grid grid-cols-2 gap-2">
                          {timeSlots.map((time) => (
                            <button
                              key={time}
                              onClick={() => setSelectedTime(time)}
                              className={`rounded-lg border px-3 py-2 text-xs font-medium transition-all duration-200 ${
                                selectedTime === time
                                  ? "border-[var(--accent-cyan)] bg-[var(--accent-cyan-dim)] text-[var(--accent-cyan)]"
                                  : "border-[var(--border-glass)] text-[var(--text-muted)] hover:text-[var(--text-secondary)]"
                              }`}
                            >
                              {time}
                            </button>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {/* Step 3: Confirm */}
                {step === 3 && (
                  <div className="animate-fade-in-up">
                    <h3 className="text-lg font-semibold text-[var(--text-primary)] mb-6">
                      Confirm Your Booking
                    </h3>
                    <div className="space-y-4 rounded-xl bg-[var(--bg-secondary)] p-5">
                      <div className="flex justify-between text-sm">
                        <span className="text-[var(--text-muted)]">Brand</span>
                        <span className="text-[var(--text-primary)] font-medium">
                          {selectedBrand}
                        </span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-[var(--text-muted)]">Issue</span>
                        <span className="text-[var(--text-primary)] font-medium">
                          {selectedIssue}
                        </span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-[var(--text-muted)]">Date</span>
                        <span className="text-[var(--text-primary)] font-medium">
                          {selectedDate}
                        </span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-[var(--text-muted)]">Time</span>
                        <span className="text-[var(--text-primary)] font-medium">
                          {selectedTime}
                        </span>
                      </div>
                      <hr className="border-[var(--border-glass)]" />
                      <div className="flex justify-between text-sm">
                        <span className="text-[var(--text-muted)]">
                          Estimated Cost
                        </span>
                        <span className="text-[var(--accent-cyan)] font-bold">
                          AED 150 - 350
                        </span>
                      </div>
                    </div>
                  </div>
                )}

                {/* Navigation Buttons */}
                <div className="mt-8 flex items-center justify-between">
                  <button
                    onClick={() => setStep(Math.max(0, step - 1))}
                    disabled={step === 0}
                    className="rounded-xl border border-[var(--border-glass)] px-6 py-2.5 text-sm font-medium text-[var(--text-secondary)] transition-all duration-200 hover:border-[var(--accent-cyan)]/30 hover:text-[var(--text-primary)] disabled:opacity-30 disabled:cursor-not-allowed"
                  >
                    Back
                  </button>
                  {step < 3 ? (
                    <button
                      onClick={() => setStep(step + 1)}
                      disabled={!canNext()}
                      className="rounded-xl bg-gradient-to-r from-[var(--accent-cyan)] to-[#00B8D4] px-8 py-2.5 text-sm font-semibold text-[var(--bg-primary)] transition-all duration-300 hover:shadow-lg hover:shadow-[var(--accent-cyan)]/25 disabled:opacity-30 disabled:cursor-not-allowed"
                    >
                      Next
                    </button>
                  ) : (
                    <button
                      onClick={handleConfirm}
                      className="rounded-xl bg-gradient-to-r from-[var(--accent-orange)] to-[#FF8C42] px-8 py-2.5 text-sm font-semibold text-white transition-all duration-300 hover:shadow-lg hover:shadow-[var(--accent-orange)]/25"
                    >
                      Confirm Booking
                    </button>
                  )}
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
