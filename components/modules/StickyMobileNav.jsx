"use client";

import { Phone, CalendarCheck } from "lucide-react";
import { Button } from "@/components/ui/Button";

export function StickyMobileNav() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-4 bg-white/80 backdrop-blur-xl border-t border-gray-200 md:hidden animate-in slide-in-from-bottom duration-300">
      <div className="flex gap-4">
        <Button
          variant="outline"
          className="flex-1 border-green-600 text-green-700 hover:bg-green-50"
          onClick={() => (window.location.href = "tel:+971501234567")} // Replace with actual number
        >
          <Phone className="mr-2 h-5 w-5" />
          Call Now
        </Button>
        <Button
          variant="primary"
          className="flex-1"
          onClick={() =>
            document
              .getElementById("lead-form")
              ?.scrollIntoView({ behavior: "smooth" })
          }
        >
          <CalendarCheck className="mr-2 h-5 w-5" />
          Book Now
        </Button>
      </div>
    </div>
  );
}
