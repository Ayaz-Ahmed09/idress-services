"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { services } from "@/data/services";

// Inline SVG icons
const Icons = {
  Search: () => (
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
      <circle cx="11" cy="11" r="8" />
      <path d="m21 21-4.3-4.3" />
    </svg>
  ),
  X: () => (
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
      <path d="M18 6 6 18" />
      <path d="m6 6 12 12" />
    </svg>
  ),
  Wrench: () => (
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
  ArrowRight: () => (
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
      <line x1="5" y1="12" x2="19" y2="12" />
      <polyline points="12 5 19 12 12 19" />
    </svg>
  ),
};

// Generate searchable content from services
const generateSearchContent = () => {
  const content = [];

  Object.values(services).forEach((service) => {
    // Add main service
    content.push({
      type: "service",
      title: service.title,
      slug: service.slug,
      description: service.heroDescription,
      keywords: [service.title.toLowerCase(), service.slug.replace("-", " ")],
    });

    // Add sub-services
    service.subServices?.forEach((sub) => {
      content.push({
        type: "subservice",
        title: sub.title,
        parentService: service.title,
        parentSlug: service.slug,
        description: sub.description,
        price: sub.price,
        keywords: [
          sub.title.toLowerCase(),
          ...(sub.keywords || []),
          service.title.toLowerCase(),
        ],
      });
    });

    // Add brands
    service.brands?.forEach((brand) => {
      content.push({
        type: "brand",
        title: `${brand} ${service.title}`,
        brand: brand,
        parentService: service.title,
        parentSlug: service.slug,
        description: `Expert ${service.title.toLowerCase()} for ${brand}`,
        keywords: [brand.toLowerCase(), service.title.toLowerCase()],
      });
    });
  });

  return content;
};

const searchContent = generateSearchContent();

export default function SearchBar() {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const [showResults, setShowResults] = useState(false);
  const [showServicePrompt, setShowServicePrompt] = useState(false);

  useEffect(() => {
    if (query.trim().length < 2) {
      setResults([]);
      setShowServicePrompt(false);
      return;
    }

    const lowerQuery = query.toLowerCase();

    // Check if query contains "service" or "services"
    const containsServiceWord =
      lowerQuery.includes("service") || lowerQuery.includes("services");
    setShowServicePrompt(containsServiceWord);

    // Filter results
    const filtered = searchContent
      .filter((item) => {
        const searchText =
          `${item.title} ${item.description} ${item.keywords?.join(" ") || ""}`.toLowerCase();
        return searchText.includes(lowerQuery);
      })
      .slice(0, 8); // Limit to 8 results

    setResults(filtered);
  }, [query]);

  const handleClear = () => {
    setQuery("");
    setResults([]);
    setShowServicePrompt(false);
    setShowResults(false);
  };

  return (
    <div className="w-full max-w-3xl mx-auto relative">
      {/* Search input container */}
      <div className="relative group">
        <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none text-gray-400 group-focus-within:text-primary transition-colors">
          <Icons.Search />
        </div>

        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onFocus={() => setShowResults(true)}
          placeholder="Search services, brands, or issues..."
          className="w-full pl-12 pr-12 py-4 rounded-2xl border-2 border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white placeholder-gray-400 focus:outline-none focus:border-primary focus:ring-4 focus:ring-primary/10 transition-all shadow-lg"
        />

        {query && (
          <button
            type="button"
            onClick={handleClear}
            className="absolute inset-y-0 right-4 flex items-center text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 transition-colors"
            aria-label="Clear search"
          >
            <Icons.X />
          </button>
        )}

        {/* Search glow effect */}
        <div className="absolute -inset-1 bg-gradient-to-r from-primary/20 to-cyan-500/20 rounded-2xl blur-xl opacity-0 group-focus-within:opacity-100 transition-opacity -z-10" />
      </div>

      {/* Results dropdown */}
      {showResults && (query.trim().length >= 2 || showServicePrompt) && (
        <div className="absolute top-full left-0 right-0 mt-2 bg-white dark:bg-gray-800 rounded-2xl shadow-2xl border border-gray-200 dark:border-gray-700 overflow-hidden z-50">
          {/* Service prompt */}
          {showServicePrompt && (
            <div className="p-4 bg-gradient-to-r from-orange-50 to-cyan-50 dark:from-orange-900/20 dark:to-cyan-900/20 border-b border-orange-100 dark:border-orange-800">
              <div className="flex items-start gap-3">
                <div className="p-2 bg-primary rounded-lg text-white flex-shrink-0">
                  <Icons.Wrench />
                </div>
                <div className="flex-1">
                  <p className="font-semibold text-gray-900 dark:text-white mb-1">
                    We have your solution!
                  </p>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
                    Looking for professional services? Contact us now for expert
                    assistance.
                  </p>
                  <Link
                    href="/book"
                    className="inline-flex items-center gap-2 px-4 py-2 bg-primary text-white text-sm font-semibold rounded-lg hover:bg-primary-dark transition-colors"
                    onClick={() => setShowResults(false)}
                  >
                    Contact Us
                    <Icons.ArrowRight />
                  </Link>
                </div>
              </div>
            </div>
          )}

          {/* Search results */}
          {results.length > 0 ? (
            <div className="max-h-[400px] overflow-y-auto">
              {results.map((result, index) => (
                <Link
                  key={`${result.type}-${result.title}-${index}`}
                  href={
                    result.parentSlug
                      ? `/${result.parentSlug}`
                      : `/${result.slug}`
                  }
                  className="flex items-start gap-3 p-4 hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors border-b border-gray-100 dark:border-gray-700 last:border-0"
                  onClick={() => setShowResults(false)}
                >
                  <div className="flex-shrink-0">
                    {result.type === "service" && (
                      <span className="inline-flex items-center px-2 py-1 bg-orange-100 dark:bg-orange-900/30 text-orange-700 dark:text-orange-400 text-xs font-semibold rounded">
                        Service
                      </span>
                    )}
                    {result.type === "subservice" && (
                      <span className="inline-flex items-center px-2 py-1 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 text-xs font-semibold rounded">
                        Issue
                      </span>
                    )}
                    {result.type === "brand" && (
                      <span className="inline-flex items-center px-2 py-1 bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-400 text-xs font-semibold rounded">
                        Brand
                      </span>
                    )}
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="font-semibold text-gray-900 dark:text-white truncate">
                      {result.title}
                    </p>
                    <p className="text-sm text-gray-500 dark:text-gray-400 line-clamp-1">
                      {result.description}
                    </p>
                    {result.price && (
                      <p className="text-xs text-primary font-medium mt-1">
                        {result.price}
                      </p>
                    )}
                  </div>
                </Link>
              ))}
            </div>
          ) : query.trim().length >= 2 ? (
            <div className="p-8 text-center">
              <div className="w-16 h-16 bg-gray-100 dark:bg-gray-700 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icons.Search />
              </div>
              <p className="text-gray-600 dark:text-gray-400 mb-2">
                No results found for &ldquo;{query}&rdquo;
              </p>
              <p className="text-sm text-gray-500 dark:text-gray-500">
                Try searching for different keywords or contact us directly.
              </p>
              <Link
                href="/book"
                className="inline-flex items-center gap-2 mt-4 px-6 py-2 bg-primary text-white font-semibold rounded-lg hover:bg-primary-dark transition-colors"
                onClick={() => setShowResults(false)}
              >
                Contact Us
                <Icons.ArrowRight />
              </Link>
            </div>
          ) : null}
        </div>
      )}
    </div>
  );
}
