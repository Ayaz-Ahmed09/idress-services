// data/services.js

export const services = {
  "ac-repair": {
    slug: "ac-repair",
    title: "AC Repair & Service",
    metaTitle: "AC Repair Service Near You | 24/7 Emergency AC Repair | Dubai",
    metaDescription: "Expert AC repair, installation & maintenance. All brands - Split AC, Window AC, Central AC. Same-day service. Call now for instant booking!",
    seoTitle: "AC Repair Dubai | #1 Emergency AC Fix, Gas Refill & Deep Cleaning — Same-Day",
    seoDescription: "Dubai's fastest AC repair — split, central & window units fixed in 60 min. 24/7 emergency service, certified technicians, gas refill from AED 150, 30-day warranty. Call 055-786-4636 for instant booking.",
    seoKeywords: [
      "AC repair Dubai",
      "AC repair near me",
      "emergency AC repair Dubai",
      "AC gas refill Dubai",
      "AC not cooling Dubai",
      "split AC repair Dubai",
      "central AC repair Dubai",
      "window AC repair Dubai",
      "AC maintenance Dubai",
      "AC deep cleaning Dubai",
      "AC compressor repair Dubai",
      "AC installation Dubai",
      "AC service Dubai same day",
      "best AC repair company Dubai",
      "cheap AC repair Dubai",
      "24/7 AC repair Dubai",
      "AC technician Dubai",
      "air conditioning repair Dubai",
      "AC water leak repair Dubai",
      "AC noise fix Dubai",
      "AC PCB repair Dubai",
      "Daikin AC repair Dubai",
      "LG AC repair Dubai",
      "Samsung AC repair Dubai",
      "AC duct cleaning Dubai",
      "HVAC repair Dubai",
      "AC repair Business Bay",
      "AC repair Downtown Dubai",
      "AC repair JBR",
      "AC repair Marina",
    ],
    jsonLdServiceType: "HVAC Repair and Maintenance",
    heroHeading: "Expert AC Repair & Service",
    heroSubheading: "Fast, Reliable Air Conditioning Repair for All Brands",
    heroDescription: "From cooling issues to complete AC installation, our certified technicians fix it all. Same-day service available with 90-day warranty.",
    icon: "❄️",
    color: "blue",
    gradient: "from-blue-500 to-cyan-400",
    emergencyAvailable: true,
    image: "/ac-repair/Ac-Service.jpeg",
    subServices: [
      {
        id: "ac-not-cooling",
        title: "AC Not Cooling",
        description: "AC running but not cooling properly? We diagnose and fix compressor issues, gas leaks, dirty filters and thermostat problems.",
        icon: "🌡️",
        image: "/ac-repair/ac.jpeg",
        keywords: ["ac not cooling", "ac cooling problem", "ac not cold"],
        estimatedTime: "1-2 hours"
      },
      {
        id: "ac-gas-refill",
        title: "AC Gas Refill / Recharge",
        image: "/ac-repair/ac-gas-refill.jpeg",
        description: "Professional refrigerant gas refilling service. R22, R32, R410A for all AC types with leak detection included.",
        icon: "⛽",
        // price: "Starting ₹1,499",
        keywords: ["ac gas refill", "ac gas charge", "refrigerant refill"],
        estimatedTime: "1 hour"
      },
      {
        id: "ac-installation",
        title: "AC Installation & Uninstallation",
        image: "/ac-repair/ac-1.jpeg",
        description: "Professional split AC, window AC installation. Includes copper piping, bracket, and electrical wiring setup.",
        icon: "🔧",
        // price: "Starting ₹999",
        keywords: ["ac installation", "split ac installation", "ac fitting"],
        estimatedTime: "2-3 hours"
      },
      {
        id: "ac-servicing",
        title: "AC Regular Servicing",
        image: "/ac-repair/Ac-Service.jpeg",
        description: "Complete AC servicing - filter cleaning, coil cleaning, drain pipe cleaning, and performance check.",
        icon: "🧹",
        // price: "Starting ₹499",
        keywords: ["ac service", "ac cleaning", "ac maintenance"],
        estimatedTime: "1-2 hours"
      },
      {
        id: "ac-compressor-repair",
        title: "AC Compressor Repair",
        description: "Expert compressor diagnosis, repair, and replacement service for all AC brands and models.",
        icon: "⚙️",
        image: "/ac-repair/compressor.jpeg",
        // price: "Starting ₹2,499",
        keywords: ["ac compressor repair", "compressor replacement"],
        estimatedTime: "2-4 hours"
      },
      {
        id: "ac-pcb-repair",
        title: "AC PCB / Control Board Repair",
        description: "Circuit board repair, replacement, and troubleshooting for indoor and outdoor AC units.",
        icon: "🔌",
        image: "/ac-repair/ac-pcb.png",
        // price: "Starting ₹1,999",
        keywords: ["ac pcb repair", "ac control board", "ac motherboard"],
        estimatedTime: "2-3 hours"
      },
      {
        id: "ac-noise-issue",
        title: "AC Making Noise",
        description: "Diagnose and fix unusual AC noises - rattling, buzzing, clicking, or humming sounds.",
        icon: "🔊",
        image: "/ac-repair/noise.jpeg",
        // price: "Starting ₹399",
        keywords: ["ac noise", "ac making sound", "ac vibration"],
        estimatedTime: "1-2 hours"
      },
      {
        id: "ac-water-leak",
        title: "AC Water Leaking",
        description: "Fix water dripping from indoor or outdoor AC unit. Drain pipe cleaning and tray repair included.",
        icon: "💧",
        image: "/ac-repair/water-leaking.png",
        // price: "Starting ₹349",
        keywords: ["ac water leak", "ac dripping water", "ac drain problem"],
        estimatedTime: "1 hour"
      }
    ],
    brands: ["Daikin", "LG", "Samsung", "Voltas", "Blue Star", "Hitachi", "Carrier", "Whirlpool", "Godrej", "Panasonic", "Toshiba", "Mitsubishi", "O General", "Haier", "Lloyd"],
    faqs: [
      {
        question: "How much does AC repair cost?",
        answer: "AC repair costs start from for basic issues. Gas refill depends on the type of AC and the amount of gas needed. We provide free diagnosis with every repair booking."
      },
      {
        question: "Do you provide same-day AC repair?",
        answer: "Yes! We offer same-day AC repair service. For emergency repairs, our technicians can reach you within 60 minutes in most service areas."
      },
      {
        question: "What AC brands do you repair?",
        answer: "We repair all major AC brands including Daikin, LG, Samsung, Voltas, Blue Star, Hitachi, Carrier, Whirlpool, Godrej, and more."
      },
      {
        question: "Is there a warranty on AC repairs?",
        answer: "Yes, we provide a 90-day warranty on all AC repairs and 6-month warranty on spare parts replaced during service."
      },
      {
        question: "How often should I service my AC?",
        answer: "We recommend AC servicing every 3-4 months for optimal performance, or at least twice a year - before and after summer season."
      }
    ]
  },

  "fridge-repair": {
    slug: "fridge-repair",
    title: "Refrigerator Repair & Service",
    metaTitle: "Fridge Repair Service Near You | Same-Day Refrigerator Repair | [City]",
    metaDescription: "Expert refrigerator repair for all brands. Fix cooling issues, compressor problems, gas leaks. Same-day service with warranty. Call now!",
    seoTitle: "Fridge Repair Dubai | Same-Day Refrigerator Fix, Gas Refill & Compressor Repair",
    seoDescription: "Dubai's trusted fridge repair — Samsung, LG, Bosch & all brands. Not cooling? Water leaking? Gas refill from AED 200. Same-day doorstep service with 90-day warranty. Call 055-786-4636.",
    seoKeywords: [
      "fridge repair Dubai",
      "refrigerator repair near me",
      "fridge not cooling Dubai",
      "fridge gas refill Dubai",
      "fridge compressor repair Dubai",
      "Samsung fridge repair Dubai",
      "LG fridge repair Dubai",
      "Bosch fridge repair Dubai",
      "fridge water leak repair",
      "refrigerator maintenance Dubai",
      "fridge thermostat repair",
      "freezer repair Dubai",
      "fridge door seal replacement",
      "fridge making noise Dubai",
      "double door fridge repair",
      "side by side fridge repair Dubai",
      "fridge repair Business Bay",
      "fridge repair Marina Dubai",
      "best fridge repair company Dubai",
      "emergency fridge repair Dubai",
    ],
    jsonLdServiceType: "Refrigerator Repair and Maintenance",
    heroHeading: "Expert Refrigerator Repair",
    heroSubheading: "Professional Fridge Repair for All Brands & Models",
    heroDescription: "Don't let a broken fridge spoil your food. Our certified technicians fix all refrigerator problems with same-day service and genuine spare parts.",
    icon: "🧊",
    image: "/fridge/refrigentor-hero.png",
    color: "teal",
    gradient: "from-teal-500 to-emerald-400",
    emergencyAvailable: true,
    subServices: [
      {
        id: "fridge-not-cooling",
        title: "Fridge Not Cooling",
        description: "Refrigerator not cooling or freezing? We fix thermostat issues, gas leaks, compressor problems, and fan motor failures.",
        icon: "🌡️",
        image: "/fridge/Referigentor-services-min.jpeg",
        // price: "Starting ₹349",
        keywords: ["fridge not cooling", "refrigerator not cold"],
        estimatedTime: "1-2 hours"
      },
      {
        id: "fridge-gas-refill",
        title: "Fridge Gas Refill",
        description: "Professional refrigerant gas charging for single door, double door, and side-by-side refrigerators.",
        icon: "⛽",
        image: "/fridge/gas-refill.png",
        // price: "Starting ₹1,299",
        keywords: ["fridge gas refill", "refrigerator gas charge"],
        estimatedTime: "1-2 hours"
      },
      {
        id: "fridge-compressor-repair",
        title: "Fridge Compressor Repair",
        description: "Compressor diagnosis, repair, and replacement for all refrigerator brands with warranty.",
        icon: "⚙️",
        image: "/fridge/comprssor.png",
        // price: "Starting ₹2,999",
        keywords: ["fridge compressor repair", "refrigerator compressor"],
        estimatedTime: "2-4 hours"
      },
      {
        id: "fridge-thermostat-repair",
        title: "Thermostat Replacement",
        description: "Faulty thermostat causing temperature issues? Quick replacement with genuine parts.",
        icon: "🎛️",
        image: "/fridge/thermostate.png",
        // price: "Starting ₹799",
        keywords: ["fridge thermostat", "temperature control repair"],
        estimatedTime: "1 hour"
      },
      {
        id: "fridge-water-leak",
        title: "Fridge Water Leaking",
        description: "Fix water pooling inside or under your refrigerator. Drain tube cleaning and door seal repair.",
        icon: "💧",
        image: "/fridge/water-leak.jpeg",
        // price: "Starting ₹299",
        keywords: ["fridge water leak", "refrigerator leaking water"],
        estimatedTime: "1 hour"
      },
      {
        id: "fridge-ice-buildup",
        title: "Freezer Ice Build-up",
        description: "Excessive ice formation in freezer? We fix defrost timer, heater, and sensor problems.",
        icon: "🧊",
        image: "/fridge/ice-tub.png",
        // price: "Starting ₹499",
        keywords: ["freezer ice buildup", "fridge ice problem"],
        estimatedTime: "1-2 hours"
      },
      {
        id: "fridge-noise",
        title: "Fridge Making Noise",
        description: "Diagnose and fix unusual fridge noises - humming, clicking, buzzing, or rattling sounds.",
        icon: "🔊",
        image: "/fridge/noise.png",
        // price: "Starting ₹399",
        keywords: ["fridge noise", "refrigerator loud sound"],
        estimatedTime: "1-2 hours"
      },
      {
        id: "fridge-door-seal",
        title: "Door Gasket / Seal Replacement",
        description: "Worn-out door seal causing cooling loss? Quick gasket replacement for all fridge models.",
        icon: "🚪",
        image: "/fridge/door-seal.png",
        // price: "Starting ₹599",
        keywords: ["fridge door seal", "refrigerator gasket"],
        estimatedTime: "30 mins - 1 hour"
      }
    ],
    brands: ["LG", "Samsung", "Whirlpool", "Godrej", "Haier", "Bosch", "Hitachi", "Panasonic", "Electrolux", "Voltas Beko", "Liebherr", "Kelvinator"],
    faqs: [
      {
        question: "How much does fridge repair cost?",
        answer: "Basic fridge repair starts from ₹299. Gas refill from ₹1,299, compressor repair from ₹2,999. Exact cost depends on the issue diagnosed."
      },
      {
        question: "Can you repair all fridge brands?",
        answer: "Yes, we repair all major refrigerator brands including LG, Samsung, Whirlpool, Godrej, Haier, Bosch, and many more."
      },
      {
        question: "How long does fridge repair take?",
        answer: "Most fridge repairs are completed within 1-2 hours. Compressor replacement may take 2-4 hours. We provide same-day service."
      },
      {
        question: "Do you use genuine spare parts?",
        answer: "Yes, we use 100% genuine OEM spare parts with manufacturer warranty for all refrigerator repairs."
      }
    ]
  },

  "tv-repair": {
    slug: "tv-repair",
    title: "TV Repair & Service",
    metaTitle: "TV Repair Service Near You | LED, LCD, Smart TV Repair | [City]",
    metaDescription: "Expert TV repair for LED, LCD, OLED, Smart TV. Fix display issues, no power, sound problems. All brands serviced. Call for same-day repair!",
    seoTitle: "TV Repair Dubai | LED, LCD, Smart TV Screen Fix & Motherboard Repair",

    seoDescription: "Expert TV repair in Dubai — LED, LCD, OLED & Smart TV. Black screen, no power, sound issues fixed at your doorstep. Samsung, Sony, LG certified. Call 055-786-4636.",
    seoKeywords: [
      "TV repair Dubai",
      "LED TV repair near me",
      "Smart TV repair Dubai",
      "TV screen replacement Dubai",
      "TV motherboard repair",
      "Samsung TV repair Dubai",
      "LG TV repair Dubai",
      "Sony TV repair Dubai",
      "TV no display fix",
      "TV not turning on Dubai",
      "TV sound problem repair",
      "OLED TV repair Dubai",
      "TV wall mount installation Dubai",
      "TV power supply repair",
      "TV backlight repair Dubai",
      "LCD TV repair near me",
      "Smart TV software update Dubai",
      "TV repair JBR",
      "TV repair Downtown Dubai",
      "best TV repair service Dubai",
    ],
    jsonLdServiceType: "Television Repair and Installation",
    heroHeading: "Professional TV Repair Service",
    heroSubheading: "LED, LCD, OLED & Smart TV Repair for All Brands",
    heroDescription: "Screen issues, no display, sound problems or smart TV glitches - our expert technicians fix all TV problems at your doorstep.",
    icon: "📺",
    image: "/tv-repair/TV-services.jpeg",
    color: "purple",
    gradient: "from-purple-500 to-pink-400",
    emergencyAvailable: false,
    subServices: [
      {
        id: "tv-no-display",
        title: "TV No Display / Black Screen",
        description: "TV turning on but no picture? We fix backlight issues, T-CON board failures, and panel problems.",
        icon: "🖥️",
        image: "/tv-repair/TV-services.jpeg",
        // price: "Starting ₹499",
        keywords: ["tv no display", "tv black screen", "tv no picture"],
        estimatedTime: "1-3 hours"
      },
      {
        id: "tv-no-power",
        title: "TV Not Turning On",
        description: "TV won't power on? Power supply board repair, fuse replacement, and electrical diagnosis.",
        icon: "🔌",
        image: "/tv-repair/no-power.png",
        // price: "Starting ₹399",
        keywords: ["tv not turning on", "tv no power", "tv dead"],
        estimatedTime: "1-2 hours"
      },
      {
        id: "tv-screen-damage",
        title: "TV Screen Replacement",
        description: "Cracked or damaged TV screen? Professional panel replacement for all TV sizes and brands.",
        icon: "💔",
        image: "/tv-repair/screen-damage.png",
        // price: "Starting ₹3,999",
        keywords: ["tv screen replacement", "tv panel replacement", "broken tv screen"],
        estimatedTime: "1-2 days"
      },
      {
        id: "tv-sound-issue",
        title: "TV Sound Problems",
        description: "No sound, distorted audio, or speaker issues? Complete audio system diagnosis and repair.",
        icon: "🔊",
        image: "/tv-repair/no-sound.png",
        // price: "Starting ₹399",
        keywords: ["tv no sound", "tv audio problem", "tv speaker repair"],
        estimatedTime: "1-2 hours"
      },
      {
        id: "tv-smart-tv-issues",
        title: "Smart TV Software Issues",
        description: "WiFi not connecting, apps crashing, slow performance? Smart TV software update and optimization.",
        icon: "📡",
        image: "/tv-repair/smart-issue.png",
        // price: "Starting ₹299",
        keywords: ["smart tv repair", "tv wifi problem", "tv software update"],
        estimatedTime: "1 hour"
      },
      {
        id: "tv-motherboard-repair",
        title: "TV Motherboard Repair",
        description: "Main board diagnosis, repair, and replacement for LED, LCD, and Smart TVs.",
        icon: "🔧",
        image: "/tv-repair/tv-motherboard.png",
        // price: "Starting ₹1,999",
        keywords: ["tv motherboard repair", "tv main board", "tv board replacement"],
        estimatedTime: "2-3 hours"
      },
      {
        id: "tv-wall-mount",
        title: "TV Wall Mount Installation",
        description: "Professional TV wall mounting service. Includes bracket, cable management, and alignment.",
        icon: "🏗️",
        image: "/tv-repair/tv-wall-install.png",
        // price: "Starting ₹499",
        keywords: ["tv wall mount", "tv installation", "tv mounting service"],
        estimatedTime: "1 hour"
      },
      {
        id: "tv-color-issue",
        title: "TV Color / Display Issues",
        description: "Faded colors, lines on screen, flickering display? Complete display diagnosis and repair.",
        icon: "🌈",
        image: "/tv-repair/no-color.png",
        // price: "Starting ₹499",
        keywords: ["tv color problem", "tv lines on screen", "tv flickering"],
        estimatedTime: "1-2 hours"
      }
    ],
    brands: ["Samsung", "LG", "Sony", "Mi (Xiaomi)", "OnePlus", "TCL", "Panasonic", "Toshiba", "Philips", "Vu", "Realme", "Hisense", "Thomson", "Motorola"],
    faqs: [
      {
        question: "Can you repair my TV at home?",
        answer: "Yes! Our technicians provide doorstep TV repair service. Most repairs are completed at your home within 1-3 hours."
      },
      {
        question: "Is it worth repairing an old TV?",
        answer: "It depends on the issue. We provide honest diagnosis - if repair cost exceeds 50% of a new TV price, we'll recommend replacement instead."
      },
      {
        question: "Do you repair Smart TVs?",
        answer: "Yes, we repair all Smart TVs including Android TV, WebOS, Tizen. Software updates, WiFi issues, app problems - we fix it all."
      }
    ]
  },

  "electronics-repair": {
    slug: "electronics-repair",
    title: "Electronics & Gadget Repair",
    metaTitle: "Electronics Repair Service | Washing Machine, Microwave, Gadget Repair | [City]",
    metaDescription: "Expert repair for washing machines, microwaves, water purifiers, inverters & home electronics. All brands serviced with warranty. Book now!",
    seoTitle: "Electronics & Appliance Repair Dubai | Washing Machine, Microwave, RO Service",
    seoDescription: "Professional home appliance repair in Dubai — washing machines, microwaves, water purifiers, geysers & more. All brands, same-day service, genuine parts. Call 055-786-4636.",
    seoKeywords: [
      "washing machine repair Dubai",
      "microwave repair Dubai",
      "water purifier repair Dubai",
      "RO service Dubai",
      "geyser repair Dubai",
      "dishwasher repair Dubai",
      "home appliance repair Dubai",
      "electronics repair near me",
      "kitchen chimney repair Dubai",
      "inverter repair Dubai",
      "dryer repair Dubai",
      "Samsung washing machine repair Dubai",
      "LG washing machine repair Dubai",
      "Bosch appliance repair Dubai",
      "water heater repair Dubai",
      "appliance maintenance Dubai",
      "small appliance repair",
      "vacuum cleaner repair Dubai",
      "cooking range repair Dubai",
      "best appliance repair company Dubai",
    ],
    jsonLdServiceType: "Home Appliance Repair and Maintenance",
    heroHeading: "Electronics & Appliance Repair",
    heroSubheading: "Expert Repair for All Home Electronics & Gadgets",
    heroDescription: "From washing machines to microwaves, water purifiers to inverters - we repair all home electronics with genuine parts and warranty.",
    icon: "🔧",
    image: "/electronics.jpeg",
    color: "orange",
    gradient: "from-orange-500 to-amber-400",
    emergencyAvailable: false,
    subServices: [
      {
        id: "washing-machine-repair",
        title: "Washing Machine Repair",
        description: "Fix all washing machine problems - not spinning, water leaking, drum issues, error codes for front & top load.",
        icon: "👕",
        image: "/electronics/washing-repair.png",
        // price: "Starting ₹399",
        keywords: ["washing machine repair", "washer repair"],
        estimatedTime: "1-3 hours"
      },
      {
        id: "microwave-repair",
        title: "Microwave Oven Repair",
        description: "Microwave not heating, turntable not working, sparking issues? Complete microwave repair service.",
        icon: "🍽️",
        image: "/electronics/micro.png",
        // price: "Starting ₹349",
        keywords: ["microwave repair", "oven repair", "microwave not heating"],
        estimatedTime: "1-2 hours"
      },
      {
        id: "water-purifier-repair",
        title: "Water Purifier / RO Repair",
        description: "RO/UV water purifier repair, filter replacement, membrane change, and annual maintenance.",
        icon: "💧",
        image: "/electronics/ro-repair.png",
        // price: "Starting ₹299",
        keywords: ["water purifier repair", "ro repair", "ro service"],
        estimatedTime: "1 hour"
      },
      {
        id: "inverter-repair",
        title: "Inverter / UPS Repair",
        description: "Inverter not charging, battery issues, beeping problems? Complete inverter and UPS repair service.",
        icon: "🔋",
        image: "/electronics/ups-repair.png",
        // price: "Starting ₹499",
        keywords: ["inverter repair", "ups repair", "inverter battery"],
        estimatedTime: "1-2 hours"
      },
      {
        id: "geyser-repair",
        title: "Geyser / Water Heater Repair",
        description: "Geyser not heating, leaking, or thermostat issues? Quick repair and element replacement.",
        icon: "🚿",
        image: "/electronics/gyser.png",
        // price: "Starting ₹399",
        keywords: ["geyser repair", "water heater repair"],
        estimatedTime: "1-2 hours"
      },
      {
        id: "dishwasher-repair",
        title: "Dishwasher Repair",
        description: "Dishwasher not cleaning, draining, or starting? Complete diagnosis and repair service.",
        icon: "🍽️",
        image: "/electronics/dishwasher.png",
        // price: "Starting ₹499",
        keywords: ["dishwasher repair", "dishwasher not working"],
        estimatedTime: "1-3 hours"
      },
      {
        id: "small-appliance-repair",
        title: "Small Appliance Repair",
        description: "Mixer grinder, iron, fan, induction cooktop, and other small appliance repairs.",
        icon: "🔌",
        image: "/electronics/small.png",
        // price: "Starting ₹199",
        keywords: ["mixer repair", "iron repair", "fan repair", "appliance repair"],
        estimatedTime: "1 hour"
      }
    ],
    brands: ["LG", "Samsung", "Whirlpool", "Bosch", "IFB", "Godrej", "Haier", "Panasonic", "Voltas", "Kent", "Aquaguard", "Luminous", "Microtek", "Bajaj"],
    faqs: [
      {
        question: "What electronics do you repair?",
        answer: "We repair washing machines, microwaves, water purifiers/RO, inverters/UPS, geysers, chimneys, dishwashers, and small home appliances."
      },
      {
        question: "Do you provide doorstep electronics repair?",
        answer: "Yes, most electronics repairs are done at your doorstep. For complex issues, we may need to take the appliance to our workshop."
      },
      {
        question: "What is the warranty on repairs?",
        answer: "We provide 30-90 day warranty on repairs and 6-month warranty on replaced spare parts depending on the appliance."
      }
    ]
  },

  "cctv-installation": {
    slug: "cctv-installation",
    title: "CCTV Camera Installation",
    metaTitle: "CCTV Installation Service | Security Camera Setup & Repair | [City]",
    metaDescription: "Professional CCTV camera installation, AMC & repair. IP cameras, DVR/NVR setup, remote monitoring. Homes & businesses. Get free survey!",
    seoTitle: "CCTV Installation Dubai | Security Camera Setup, Repair & Remote Monitoring",
    seoDescription: "Professional CCTV installation in Dubai — Hikvision, Dahua, CP Plus. HD/IP cameras, DVR/NVR setup, mobile app monitoring. Homes & offices. Free site survey. Call 055-786-4636.",
    seoKeywords: [
      "CCTV installation Dubai",
      "security camera installation Dubai",
      "CCTV camera repair Dubai",
      "IP camera setup Dubai",
      "Hikvision installation Dubai",
      "Dahua camera installation",
      "DVR NVR setup Dubai",
      "CCTV maintenance Dubai",
      "home security camera Dubai",
      "office CCTV installation",
      "wireless camera installation Dubai",
      "CCTV AMC Dubai",
      "remote monitoring setup",
      "CCTV upgrade Dubai",
      "commercial CCTV Dubai",
      "video surveillance Dubai",
      "SIRA approved CCTV Dubai",
      "CCTV installation Business Bay",
      "security camera Marina Dubai",
      "best CCTV company Dubai",
    ],
    jsonLdServiceType: "Security Camera Installation and Maintenance",
    heroHeading: "CCTV Camera Installation & Service",
    heroSubheading: "Professional Security Camera Setup for Home & Business",
    heroDescription: "Protect your property with professional CCTV installation. HD/IP cameras, DVR/NVR setup, remote mobile monitoring, and ongoing maintenance.",
    icon: "📹",
    image: "/cctv.jpeg",
    color: "red",
    gradient: "from-red-500 to-rose-400",
    emergencyAvailable: false,
    subServices: [
      {
        id: "cctv-new-installation",
        title: "New CCTV Installation",
        description: "Complete CCTV camera system installation including cameras, DVR/NVR, cabling, and configuration.",
        icon: "📷",
        image: "/cctv/cctv-installtion.png",
        // price: "Starting ₹4,999",
        keywords: ["cctv installation", "security camera installation", "camera setup"],
        estimatedTime: "3-6 hours"
      },
      {
        id: "cctv-ip-camera",
        title: "IP Camera / WiFi Camera Setup",
        description: "Wireless IP camera installation with mobile app setup for remote viewing from anywhere.",
        icon: "📡",
        image: "/cctv/ip-camers.png",
        // price: "Starting ₹1,999",
        keywords: ["ip camera installation", "wifi camera setup", "wireless cctv"],
        estimatedTime: "1-2 hours"
      },
      {
        id: "cctv-dvr-nvr-setup",
        title: "DVR / NVR Setup & Configuration",
        description: "Digital video recorder setup, hard disk installation, network configuration, and remote access setup.",
        icon: "💿",
        image: "/cctv/dvr-setup.png",
        // price: "Starting ₹1,499",
        keywords: ["dvr setup", "nvr configuration", "cctv recorder"],
        estimatedTime: "1-2 hours"
      },
      {
        id: "cctv-repair",
        title: "CCTV Camera Repair",
        description: "Fix camera not working, blurry images, night vision issues, and recording problems.",
        icon: "🔧",
        image: "/cctv/cctv-repair.png",
        // price: "Starting ₹499",
        keywords: ["cctv repair", "camera not working", "cctv maintenance"],
        estimatedTime: "1-2 hours"
      },
      {
        id: "cctv-amc",
        title: "CCTV AMC (Annual Maintenance)",
        description: "Annual maintenance contract for regular cleaning, software updates, and priority support.",
        icon: "📋",
        image: "/cctv/amc.png",
        // price: "Starting ₹2,999/year",
        keywords: ["cctv amc", "cctv maintenance contract", "camera service"],
        estimatedTime: "Ongoing"
      },
      {
        id: "cctv-upgrade",
        title: "CCTV System Upgrade",
        description: "Upgrade from analog to IP cameras, add more cameras, or upgrade to higher resolution system.",
        icon: "⬆️",
        image: "/cctv/cctv-upgrade.png",
        // price: "Starting ₹2,999",
        keywords: ["cctv upgrade", "camera upgrade", "hd cctv upgrade"],
        estimatedTime: "2-4 hours"
      },
      {
        id: "cctv-remote-monitoring",
        title: "Remote Monitoring Setup",
        description: "Configure mobile app and cloud access to view your CCTV cameras from anywhere in the world.",
        icon: "📱",
        image: "/cctv/remote.png",
        // price: "Starting ₹499",
        keywords: ["cctv remote viewing", "camera mobile app", "remote monitoring"],
        estimatedTime: "30 mins - 1 hour"
      },
      {
        id: "cctv-commercial",
        title: "Commercial CCTV Solutions",
        description: "Large-scale CCTV installation for offices, warehouses, factories, retail stores, and commercial spaces.",
        icon: "🏢",
        image: "/cctv/com-sys.png",
        price: "Custom Quote",
        keywords: ["commercial cctv", "office security camera", "business cctv"],
        estimatedTime: "1-3 days"
      }
    ],
    brands: ["Hikvision", "Dahua", "CP Plus", "Honeywell", "Bosch", "Samsung", "Axis", "Godrej", "Pelco", "Uniview", "TVT", "D-Link"],
    faqs: [
      {
        question: "How many CCTV cameras do I need for my home?",
        answer: "For a typical home, 4-8 cameras are recommended covering all entry points, driveway, and common areas. We offer free site survey to suggest optimal placement."
      },
      {
        question: "Can I view CCTV cameras on my phone?",
        answer: "Yes! We set up remote monitoring on your smartphone so you can view live footage and recordings from anywhere with internet access."
      },
      {
        question: "How long does CCTV footage get stored?",
        answer: "Recording duration depends on hard disk size and camera resolution. Typically, a 1TB HDD stores 7-15 days of footage for 4 cameras."
      },
      {
        question: "Do you provide CCTV cameras or should I buy separately?",
        answer: "We provide complete packages including cameras, DVR/NVR, hard disk, cables, and connectors. You can also buy your own equipment and hire us for installation only."
      }
    ]
  },

  "electrician-service": {
    slug: "electrician-service",
    title: "Electrician Service",
    metaTitle: "Electrician Service Near You | Electrical Repair & Wiring | [City]",
    metaDescription: "Licensed electrician service for wiring, switches, MCB repair, fan installation, short circuit fixing. 24/7 emergency electrical service. Call now!",
    seoTitle: "Electrician Dubai | 24/7 Emergency Electrical Repair, Wiring & Installation",
    seoDescription: "Licensed electricians in Dubai — short circuit repair, wiring, MCB fix, fan & light installation. 24/7 emergency service, certified professionals. Call 055-786-4636.",
    seoKeywords: [
      "electrician Dubai",
      "electrical repair Dubai",
      "emergency electrician Dubai",
      "short circuit repair Dubai",
      "house wiring Dubai",
      "MCB repair Dubai",
      "fan installation Dubai",
      "light installation Dubai",
      "socket repair Dubai",
      "switch replacement Dubai",
      "electrical wiring service",
      "DB box repair Dubai",
      "earthing service Dubai",
      "doorbell installation Dubai",
      "chandelier installation Dubai",
      "electrician near me Dubai",
      "24/7 electrician Dubai",
      "licensed electrician Dubai",
      "villa electrician Dubai",
      "best electrical company Dubai",
    ],
    jsonLdServiceType: "Electrical Repair and Installation",
    heroHeading: "Professional Electrician Service",
    heroSubheading: "Licensed Electricians for All Electrical Needs",
    heroDescription: "From simple switch repairs to complete house wiring - our licensed electricians handle all electrical work safely and efficiently.",
    icon: "⚡",
    image: "/electricen-services.jpeg",
    color: "yellow",
    gradient: "from-yellow-500 to-orange-400",
    emergencyAvailable: true,
    subServices: [
      {
        id: "electrical-wiring",
        title: "Electrical Wiring & Rewiring",
        description: "New house wiring, rewiring old buildings, concealed wiring, and open wiring installation.",
        icon: "🔌",
        image: "/electricen/wiring.png",
        // price: "Starting ₹999",
        keywords: ["electrical wiring", "house wiring", "rewiring service"],
        estimatedTime: "4-8 hours"
      },
      {
        id: "switch-socket-repair",
        title: "Switch & Socket Repair",
        description: "Replace faulty switches, sockets, dimmers, and modular plates. All brands available.",
        icon: "🔲",
        image: "/electricen/socket-repair.jpeg",
        price: "Starting ₹149",
        keywords: ["switch repair", "socket repair", "electrical switch"],
        estimatedTime: "30 mins"
      },
      {
        id: "mcb-fuse-repair",
        title: "MCB / Fuse Box Repair",
        description: "MCB tripping, fuse blowing, distribution board repair, and electrical panel upgrades.",
        icon: "⚡",
        image: "/electricen/mcb-repair.png",
        // price: "Starting ₹299",
        keywords: ["mcb repair", "fuse repair", "electrical panel", "mcb tripping"],
        estimatedTime: "1-2 hours"
      },
      {
        id: "fan-installation",
        title: "Fan Installation & Repair",
        description: "Ceiling fan, exhaust fan, wall fan installation and repair. Includes balancing and speed issues.",
        icon: "🌀",
        image: "/electricen/fan.png",
        // price: "Starting ₹249",
        keywords: ["fan installation", "ceiling fan repair", "fan fitting"],
        estimatedTime: "30 mins - 1 hour"
      },
      {
        id: "light-installation",
        title: "Light & Fixture Installation",
        description: "LED lights, chandeliers, tube lights, spot lights, and decorative lighting installation.",
        icon: "💡",
        image: "/electricen/light.png",
        // price: "Starting ₹199",
        keywords: ["light installation", "led light fitting", "chandelier installation"],
        estimatedTime: "30 mins - 2 hours"
      },
      {
        id: "short-circuit-repair",
        title: "Short Circuit Repair",
        description: "Emergency short circuit diagnosis and repair. Identify faulty wiring and prevent electrical hazards.",
        icon: "🔥",
        image: "/electricen/short.png",
        // price: "Starting ₹499",
        keywords: ["short circuit repair", "electrical short", "power trip"],
        estimatedTime: "1-3 hours"
      },
      {
        id: "earthing-service",
        title: "Earthing / Grounding Service",
        description: "Professional electrical earthing installation and testing for home and commercial safety.",
        icon: "🌍",
        image: "/electricen/earthing.png",
        // price: "Starting ₹1,499",
        keywords: ["earthing service", "grounding", "electrical earthing"],
        estimatedTime: "2-4 hours"
      },
      {
        id: "doorbell-installation",
        title: "Doorbell & Intercom Installation",
        description: "Video doorbell, wireless doorbell, and intercom system installation and setup.",
        icon: "🔔",
        image: "/electricen/doorbell.png",
        // price: "Starting ₹299",
        keywords: ["doorbell installation", "video doorbell", "intercom setup"],
        estimatedTime: "30 mins - 1 hour"
      }
    ],
    brands: ["Havells", "Anchor", "Polycab", "Finolex", "Legrand", "Schneider", "ABB", "Siemens", "Crompton", "Orient", "Bajaj", "Wipro"],
    faqs: [
      {
        question: "Are your electricians licensed?",
        answer: "Yes, all our electricians are licensed, verified, and experienced professionals. They follow all safety protocols and electrical codes."
      },
      {
        question: "Do you provide emergency electrical service?",
        answer: "Yes! We offer 24/7 emergency electrician service for short circuits, power outages, and electrical hazards. Call us anytime."
      },
      {
        question: "How much does an electrician visit cost?",
        answer: "Basic electrician visit starts from ₹149. The cost depends on the type of work - simple repairs, installations, or complex wiring projects."
      },
      {
        question: "Can you do complete house wiring?",
        answer: "Yes, we handle complete electrical wiring for new constructions, renovations, and old house rewiring with proper load calculation and safety standards."
      }
    ]
  }
};