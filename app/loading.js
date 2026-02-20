import { Wrench } from "lucide-react";

export default function Loading() {
  return (
    <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-white dark:bg-gray-950">
      <div className="relative flex items-center justify-center">

        {/* 1. Outer Glowing Ring (Slow rotation) */}
        <div className="absolute h-24 w-24 rounded-full border-4 border-t-blue-600 border-r-transparent border-b-indigo-600 border-l-transparent animate-[spin_2s_linear_infinite] opacity-20" />

        {/* 2. Main High-Speed Spinner */}
        <div className="h-16 w-16 rounded-full border-4 border-gray-200 dark:border-gray-800 border-t-blue-600 animate-spin will-change-transform" />

        {/* 3. Center Logo/Initial (Static) */}
        <div className="absolute flex items-center justify-center">
          <span className="text-xs font-bold text-blue-600 dark:text-blue-400 tracking-tighter uppercase">
            <Wrench />
          </span>
        </div>
      </div>

      {/* Loading Text */}
      <p className="mt-6 text-sm font-medium text-gray-500 dark:text-gray-400 tracking-widest animate-pulse uppercase">
        Loading...
      </p>
    </div>
  );
}