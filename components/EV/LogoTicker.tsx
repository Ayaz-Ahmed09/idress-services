'use client';
import Image from 'next/image';

export default function LogoTicker()
{
  const logos = [
    { name: "Tesla", url: "https://upload.wikimedia.org/wikipedia/commons/b/bb/Tesla_T_symbol.svg" },
    // { name: "BYD", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e2/BYD_Auto_2022_logo.svg/640px-BYD_Auto_2022_logo.svg" },
    { name: "Audi", url: "https://upload.wikimedia.org/wikipedia/commons/9/92/Audi-Logo_2016.svg" },
    { name: "BMW", url: "https://upload.wikimedia.org/wikipedia/commons/4/44/BMW.svg" },
    { name: "Mercedes", url: "https://upload.wikimedia.org/wikipedia/commons/9/90/Mercedes-Logo.svg" },
    { name: "Hyundai", url: "https://upload.wikimedia.org/wikipedia/commons/4/44/Hyundai_Motor_Company_logo.svg" },
  ];

  return (
    <div className="py-10 border-y border-gray-100 bg-white overflow-hidden flex relative drop-shadow-2xl">
      <div className="absolute left-0 top-0 bottom-0 w-40 bg-linear-to-r from-white to-transparent z-10" />
      <div className="absolute right-0 top-0 bottom-0 w-40 bg-linear-to-l from-white to-transparent z-10" />

      <div className="flex animate-marquee-horizontal whitespace-nowrap items-center">
        {[...logos, ...logos, ...logos, ...logos].map((logo, i) => (
          <div key={i} className="mx-12 flex items-center justify-center group relative h-10 w-32">
            <Image
              src={logo.url}
              alt={`${ logo.name } logo`}
              fill
              sizes="(max-width: 768px) 100vw, 33vw"
              className="object-contain filter grayscale opacity-40 group-hover:opacity-100 group-hover:grayscale-0 transition-all duration-500"
              referrerPolicy="no-referrer"
            />
          </div>
        ))}
      </div>
    </div>
  );
}