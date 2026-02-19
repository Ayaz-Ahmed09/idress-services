"use client";

import emailjs from "@emailjs/browser";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/Button";
import { GlassCard } from "@/components/ui/GlassCard";
import { services } from "@/data/services";

// Inline SVG icons for optimal performance - no external library needed
const Icons = {
  User: () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
      <circle cx="12" cy="7" r="4" />
    </svg>
  ),
  Phone: () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  ),
  Mail: () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <rect width="20" height="16" x="2" y="4" rx="2" />
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
    </svg>
  ),
  MapPin: () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  ),
  Tool: () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
    </svg>
  ),
  MessageSquare: () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
    </svg>
  ),
  CheckCircle: () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="40"
      height="40"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
      <path d="m9 11 3 3L22 4" />
    </svg>
  ),
  AlertCircle: () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <circle cx="12" cy="12" r="10" />
      <line x1="12" x2="12" y1="8" y2="12" />
      <line x1="12" x2="12.01" y1="16" y2="16" />
    </svg>
  ),
  Loader2: () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="animate-spin"
      aria-hidden="true"
    >
      <path d="M21 12a9 9 0 1 1-6.219-8.56" />
    </svg>
  ),
  Send: () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="m22 2-7 20-4-9-9-4 20-7z" />
      <path d="M22 2 11 13" />
    </svg>
  ),
  ChevronDown: () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="m6 9 6 6 6-6" />
    </svg>
  ),
  ArrowLeft: () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <line x1="19" y1="12" x2="5" y2="12" />
      <polyline points="12 19 5 12 12 5" />
    </svg>
  ),
  Home: () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
      <polyline points="9 22 9 12 15 12 15 22" />
    </svg>
  ),
  Sparkles: () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="48"
      height="48"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z" />
    </svg>
  ),
};

const SERVICE_OPTIONS = Object.values(services).map((service) => ({
  value: service.slug,
  label: service.title,
  icon: service.icon,
}));

export default function ServicesForm() {
  const formRef = useRef(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [isError, setIsError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [useFallback, setUseFallback] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    service: "",
    subService: "",
    message: "",
  });

  const [availableSubServices, setAvailableSubServices] = useState([]);

  useEffect(() => {
    if (formData.service && services[formData.service]) {
      setAvailableSubServices(services[formData.service].subServices || []);
      setFormData((prev) => ({ ...prev, subService: "" }));
    } else {
      setAvailableSubServices([]);
    }
  }, [formData.service]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const resetForm = () => {
    setFormData({
      name: "",
      email: "",
      phone: "",
      address: "",
      service: "",
      subService: "",
      message: "",
    });
    setIsSuccess(false);
    setIsError(false);
    setErrorMessage("");
    setUseFallback(false);
  };

  const sendWithEmailJS = async () => {
    const serviceID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
    const templateID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
    const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

    if (!serviceID || !templateID || !publicKey) {
      throw new Error(
        "EmailJS configuration is missing. Please check your environment variables.",
      );
    }

    const templateParams = {
      to_name: "Admin",
      from_name: formData.name,
      from_email: formData.email,
      phone: formData.phone,
      address: formData.address,
      service:
        SERVICE_OPTIONS.find((s) => s.value === formData.service)?.label ||
        formData.service,
      sub_service: formData.subService
        ? availableSubServices.find((s) => s.id === formData.subService)
            ?.title || formData.subService
        : "Not specified",
      message: formData.message || "No additional message",
      time: new Date().toLocaleString(),
    };

    await emailjs.send(serviceID, templateID, templateParams, publicKey);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setIsError(false);
    setErrorMessage("");

    try {
      if (useFallback) {
        return;
      }

      await sendWithEmailJS();
      setIsSuccess(true);
    } catch (error) {
      console.error("EmailJS Error:", error);
      setIsError(true);
      setErrorMessage(
        error.message ||
          "Failed to send message. Switching to fallback method.",
      );
      setUseFallback(true);
    } finally {
      setIsLoading(false);
    }
  };

  const getFormSubmitUrl = () => {
    const email =
      process.env.NEXT_PUBLIC_CONTACT_EMAIL || "your-email@example.com";
    return `https://formsubmit.co/${email}`;
  };

  if (isSuccess) {
    return (
      <div className="w-full max-w-2xl mx-auto">
        {/* Back arrow */}
        <Link
          href="/"
          className="inline-flex items-center gap-2 mb-6 text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primary transition-colors group"
        >
          <span className="group-hover:-translate-x-1 transition-transform">
            <Icons.ArrowLeft />
          </span>
          <span className="text-sm font-medium">Back to Home</span>
        </Link>

        <GlassCard className="p-8 md:p-12 text-center relative overflow-hidden">
          {/* Animated background elements */}
          <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
            <div className="absolute top-10 left-10 w-32 h-32 bg-green-400/20 rounded-full blur-3xl animate-pulse" />
            <div className="absolute bottom-10 right-10 w-40 h-40 bg-blue-400/20 rounded-full blur-3xl animate-pulse delay-700" />
          </div>

          {/* Success animation */}
          <div className="relative">
            <div className="w-24 h-24 bg-gradient-to-br from-green-400 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg shadow-green-500/30 animate-bounce">
              <Icons.CheckCircle />
            </div>

            <div className="absolute -top-2 -right-2 text-yellow-400 animate-pulse">
              <Icons.Sparkles />
            </div>
            <div className="absolute -bottom-2 -left-2 text-blue-400 animate-pulse delay-300">
              <Icons.Sparkles />
            </div>
          </div>

          <h3 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-4">
            Thank You!
          </h3>

          <p className="text-gray-600 dark:text-gray-400 mb-4">
            Your service request has been submitted successfully.
          </p>

          <div className="bg-blue-50 dark:bg-blue-900/20 rounded-xl p-4 mb-8">
            <p className="text-blue-700 dark:text-blue-400 font-semibold">
              We'll contact you within 30 minutes!
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              onClick={resetForm}
              variant="primary"
              className="flex items-center justify-center gap-2"
            >
              <Icons.Send />
              Submit Another Request
            </Button>

            <Link href="/">
              <Button
                variant="outline"
                className="flex items-center justify-center gap-2 w-full"
              >
                <Icons.Home />
                Back to Home
              </Button>
            </Link>
          </div>
        </GlassCard>
      </div>
    );
  }

  return (
    <div className="w-full max-w-2xl mx-auto">
      {/* Back arrow */}
      <Link
        href="/"
        className="inline-flex items-center gap-2 mb-6 text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primary transition-colors group"
      >
        <span className="group-hover:-translate-x-1 transition-transform">
          <Icons.ArrowLeft />
        </span>
        <span className="text-sm font-medium">Back to Home</span>
      </Link>

      <GlassCard className="overflow-hidden">
        <div className="bg-gradient-to-r from-primary to-primary-dark p-6 md:p-8">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">
            Book a Service
          </h2>
          <p className="text-white/80">
            Fill in your details and we&apos;ll get back to you shortly
          </p>
        </div>

        <form
          ref={formRef}
          onSubmit={handleSubmit}
          action={useFallback ? getFormSubmitUrl() : undefined}
          method={useFallback ? "POST" : undefined}
          className="p-6 md:p-8 space-y-6"
        >
          {useFallback && (
            <input
              type="hidden"
              name="_subject"
              value={`New Service Request: ${formData.service}`}
            />
          )}
          {useFallback && <input type="hidden" name="_captcha" value="false" />}
          {useFallback && (
            <input type="hidden" name="_template" value="table" />
          )}
          {useFallback && (
            <input
              type="hidden"
              name="_next"
              value={
                typeof window !== "undefined"
                  ? `${window.location.origin}/thank-you`
                  : "/thank-you"
              }
            />
          )}

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label
                htmlFor="name"
                className="text-sm font-semibold text-gray-700 dark:text-gray-300 flex items-center gap-2"
              >
                <span className="text-primary">
                  <Icons.User />
                </span>
                Full Name *
              </label>
              <input
                id="name"
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder="John Doe"
                className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary focus:border-transparent transition-all outline-none"
              />
            </div>

            <div className="space-y-2">
              <label
                htmlFor="phone"
                className="text-sm font-semibold text-gray-700 dark:text-gray-300 flex items-center gap-2"
              >
                <span className="text-primary">
                  <Icons.Phone />
                </span>
                Phone Number *
              </label>
              <input
                id="phone"
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
                placeholder="+1 234 567 890"
                className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary focus:border-transparent transition-all outline-none"
              />
            </div>
          </div>

          <div className="space-y-2">
            <label
              htmlFor="email"
              className="text-sm font-semibold text-gray-700 dark:text-gray-300 flex items-center gap-2"
            >
              <span className="text-primary">
                <Icons.Mail />
              </span>
              Email Address
            </label>
            <input
              id="email"
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="john@example.com"
              className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary focus:border-transparent transition-all outline-none"
            />
          </div>

          <div className="space-y-2">
            <label
              htmlFor="address"
              className="text-sm font-semibold text-gray-700 dark:text-gray-300 flex items-center gap-2"
            >
              <span className="text-primary">
                <Icons.MapPin />
              </span>
              Address *
            </label>
            <input
              id="address"
              type="text"
              name="address"
              value={formData.address}
              onChange={handleChange}
              required
              placeholder="Your complete address"
              className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary focus:border-transparent transition-all outline-none"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label
                htmlFor="service"
                className="text-sm font-semibold text-gray-700 dark:text-gray-300 flex items-center gap-2"
              >
                <span className="text-primary">
                  <Icons.Tool />
                </span>
                Select Service *
              </label>
              <div className="relative">
                <select
                  id="service"
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 pr-12 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary focus:border-transparent transition-all outline-none appearance-none cursor-pointer"
                >
                  <option value="">Choose a service</option>
                  {SERVICE_OPTIONS.map((service) => (
                    <option key={service.value} value={service.value}>
                      {service.icon} {service.label}
                    </option>
                  ))}
                </select>
                <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-gray-500">
                  <Icons.ChevronDown />
                </div>
              </div>
            </div>

            <div className="space-y-2">
              <label
                htmlFor="subService"
                className="text-sm font-semibold text-gray-700 dark:text-gray-300 flex items-center gap-2"
              >
                <span className="text-primary">
                  <Icons.Tool />
                </span>
                Specific Issue
              </label>
              <div className="relative">
                <select
                  id="subService"
                  name="subService"
                  value={formData.subService}
                  onChange={handleChange}
                  disabled={!formData.service}
                  className="w-full px-4 py-3 pr-12 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary focus:border-transparent transition-all outline-none appearance-none cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <option value="">
                    {formData.service
                      ? "Select specific issue"
                      : "Select a service first"}
                  </option>
                  {availableSubServices.map((subService) => (
                    <option key={subService.id} value={subService.id}>
                      {subService.icon} {subService.title}
                    </option>
                  ))}
                </select>
                <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-gray-500">
                  <Icons.ChevronDown />
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-2">
            <label
              htmlFor="message"
              className="text-sm font-semibold text-gray-700 dark:text-gray-300 flex items-center gap-2"
            >
              <span className="text-primary">
                <Icons.MessageSquare />
              </span>
              Additional Details
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows={4}
              placeholder="Describe your issue in detail..."
              className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary focus:border-transparent transition-all outline-none resize-none"
            />
          </div>

          {isError && (
            <div className="flex items-center gap-3 p-4 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-xl">
              <span className="text-red-600 dark:text-red-400 flex-shrink-0">
                <Icons.AlertCircle />
              </span>
              <div className="flex-1">
                <p className="text-sm text-red-700 dark:text-red-400 font-medium">
                  {useFallback
                    ? "Switched to FormSubmit fallback method."
                    : errorMessage}
                </p>
                {useFallback && (
                  <p className="text-xs text-red-600 dark:text-red-500 mt-1">
                    Your message will be sent via an alternative method.
                  </p>
                )}
              </div>
            </div>
          )}

          <Button
            type="submit"
            variant="primary"
            size="lg"
            isLoading={isLoading}
            className="w-full"
          >
            {isLoading ? (
              <>
                <span className="mr-2">
                  <Icons.Loader2 />
                </span>
                Sending...
              </>
            ) : (
              <>
                <span className="mr-2">
                  <Icons.Send />
                </span>
                {useFallback ? "Submit Request" : "Book Service Now"}
              </>
            )}
          </Button>

          <p className="text-center text-xs text-gray-500 dark:text-gray-500">
            By submitting this form, you agree to our terms and conditions.
            {useFallback && (
              <span className="block mt-1">
                Using FormSubmit fallback method.
              </span>
            )}
          </p>
        </form>
      </GlassCard>
    </div>
  );
}
