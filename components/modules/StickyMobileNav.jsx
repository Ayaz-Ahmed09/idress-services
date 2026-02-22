"use client";

import { Phone, CalendarCheck } from "lucide-react";
import { Button } from "@/components/ui/Button";
import Link from "next/link";

export function StickyMobileNav() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-4 bg-gray-950/90 backdrop-blur-xl border-t border-gray-800 md:hidden animate-in slide-in-from-bottom duration-300">
      <div className="flex gap-4">
        <Button
          variant="outline"
          className="flex-1 border-green-500 text-green-400 hover:bg-green-900/30"
          onClick={() => (window.location.href = "tel:+971557864636")} // Replace with actual number
        >
          <Phone className="mr-2 h-5 w-5" />
          Call Now
        </Button>
        <Link href='https://wa.me/971557864636'>
          <Button
            variant="primary"
            className="flex-1"

          >
            <CalendarCheck className="mr-2 h-5 w-5" />
            Book Now
          </Button>
        </Link>
      </div>
    </div>
  );
}
