export const metadata = {
  title: "Booking Confirmed | Thank You",
  description:
    "Your service booking has been confirmed. Our team will contact you shortly.",
  robots: {
    index: false, // Don't index the thank you page
    follow: false,
  },
};

export default function ThankYouPage() {
  return (
    <main className="min-h-screen flex items-center justify-center">
      <section className="text-center p-8">
        <h1 className="text-4xl font-bold mb-4 text-green-600">Thank You!</h1>
        <p className="text-xl text-gray-700 mb-4">
          Your booking has been received.
        </p>
        <p className="text-gray-500">
          We will be in touch with you shortly to confirm the details.
        </p>
      </section>
    </main>
  );
}
