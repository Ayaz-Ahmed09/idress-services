import ServicesForm from "@/components/ui/ServicesForm";

export const metadata = {
  title: "Book a Service | Schedule Your Repair",
  description:
    "Book your home repair service in Dubai online. AC repair, fridge fix, electrician, and more. Fast and easy scheduling.",
  alternates: {
    canonical: "/book",
  },
};

export default function BookPage() {
  return (
    <main className="min-h-screen bg-transparent dark:bg-gray-950">
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              Book a Service
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-400">
              Schedule your repair in less than 2 minutes. We&apos;ll get back
              to you within 30 minutes.
            </p>
          </div>
          <ServicesForm />
        </div>
      </section>
    </main>
  );
}
