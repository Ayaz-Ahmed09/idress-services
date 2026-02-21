import ThankYou from "@/components/ui/ThankYou";

export const metadata = {
  title: "Booking Confirmed | Thank You",
  description:
    "Your service booking has been confirmed. Our team will contact you shortly.",
  robots: {
    index: false,
    follow: false,
  },
};

export default function ThankYouPage() {
  return (
    <main className="min-h-screen flex items-center justify-center">
      <section className="text-center p-8">
        <h1 className="text-4xl font-bold mb-4 text-green-600">Thank You!</h1>
        <ThankYou />
      </section>
    </main>
  );
}
