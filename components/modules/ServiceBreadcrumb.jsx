"use client";

import Link from "next/link";
import { services } from "@/data/services";
import { ChevronRight, Home } from "lucide-react";

export default function ServiceBreadcrumb({ serviceSlug }) {
  const service = services[serviceSlug];

  if (!service) return null;

  return (
    <nav className="flex items-center gap-2 px-6 py-4 text-sm text-gray-600 dark:text-gray-400 bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm border-b border-gray-200 dark:border-gray-700">
      <div className="max-w-7xl mx-auto w-full flex items-center gap-2">
        <Link
          href="/"
          className="flex items-center gap-1 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
        >
          <Home size={16} />
          <span>Home</span>
        </Link>
        <ChevronRight size={16} className="text-gray-400" />
        <span className="text-gray-900 dark:text-white font-medium">
          {service.title}
        </span>
      </div>
    </nav>
  );
}
