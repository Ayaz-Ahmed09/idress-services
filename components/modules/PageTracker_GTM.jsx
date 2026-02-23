"use client";
import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { sendGTMEvent } from "@next/third-parties/google";

export default function PageViewTracker() {
        const pathname = usePathname();

        useEffect(() => {
                // This fires every time the 'pathname' changes
                sendGTMEvent({
                        event: "page_view",
                        page_path: pathname,
                        page_name: document.title

                });
        }, [pathname]);

        return null;
}
