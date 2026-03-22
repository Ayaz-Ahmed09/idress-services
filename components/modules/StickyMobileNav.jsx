"use client";

import { Phone, CalendarCheck } from "lucide-react";
import { Button } from "@/components/ui/Button";
import Link from "next/link";

export function StickyMobileNav() {
  return (
    <div className="fixed bottom-0 left-0  right-0 z-50 p-4 bg-gray-950/90 backdrop-blur-xl border-b border-t border-blue-500 md:hidden animate-in slide-in-from-bottom duration-300">
      <div className="flex justify-between">
        <a href="tel:+971557864636">
          <Button
            variant="outline"
            className="flex px-4 border-blue-500 text-blue-400 hover:bg-blue-900/30"
          >
            <Phone className="mr-2 h-5 w-5" />
            Call Now
          </Button>
        </a>
        <Link href='https://wa.me/971557864636'>
          <Button
            variant="outline"
            className="flex-1 border-blue-500 text-blue-400 hover:bg-blue-900/30"

          >
            <CalendarCheck className="mr-2 h-5 w-5" />
            Book Now
          </Button>
        </Link>
      </div>
    </div>
  );
}
