'use client';

import { motion, useInView } from 'motion/react';
import { useRef } from 'react';
import
{
        MapPin,
        BadgeCheck,
        ShieldCheck,
        Zap,
        Users,
        Award,
        CheckCircle2,
        ArrowRight,
        Building2,
        Wrench,
        FileCheck2,
        Star,
} from 'lucide-react';

/* ─── Reusable fade-in wrapper ─── */
function FadeIn({
        children,
        delay = 0,
        className = '',
        direction = 'up',
}: {
        children: React.ReactNode;
        delay?: number;
        className?: string;
        direction?: 'up' | 'left' | 'right';
})
{
        const ref = useRef(null);
        const inView = useInView(ref, { once: true, margin: '-60px' });

        const initial = {
                opacity: 0,
                y: direction === 'up' ? 24 : 0,
                x: direction === 'left' ? -24 : direction === 'right' ? 24 : 0,
        };

        return (
                <motion.div
                        ref={ref}
                        initial={initial}
                        animate={inView ? { opacity: 1, y: 0, x: 0 } : initial}
                        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay }}
                        className={className}
                >
                        {children}
                </motion.div>
        );
}

/* ─── Section label ─── */
function SectionLabel({ text, color = 'red' }: { text: string; color?: 'red' | 'blue' })
{
        return (
                <div className="flex items-center gap-2 mb-3">
                        <div className={`w-6 h-px ${ color === 'red' ? 'bg-red-600' : 'bg-blue-600' }`} />
                        <span
                                className={`text-[10px] font-bold tracking-[0.18em] uppercase ${ color === 'red' ? 'text-red-600' : 'text-blue-600'
                                        }`}
                                style={{ fontFamily: "'DM Mono', monospace" }}
                        >
                                {text}
                        </span>
                </div>
        );
}

/* ─── Stat card ─── */
function StatCard({
        value,
        label,
        color,
}: {
        value: string;
        label: string;
        color: 'red' | 'blue';
})
{
        const ref = useRef(null);
        const inView = useInView(ref, { once: true });

        return (
                <motion.div
                        ref={ref}
                        initial={{ opacity: 0, scale: 0.92 }}
                        animate={inView ? { opacity: 1, scale: 1 } : {}}
                        transition={{ duration: 0.5, ease: 'easeOut' }}
                        className={`relative bg-white border-r-4 ${ color === 'red' ? 'border-r-red-600' : 'border-r-blue-600'
                                } border border-gray-100 rounded-sm p-5 shadow-sm`}
                >
                        <p
                                className={`text-3xl font-black leading-none mb-1 ${ color === 'red' ? 'text-red-600' : 'text-blue-700'
                                        }`}
                                style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
                        >
                                {value}
                        </p>
                        <p className="text-[11px] text-gray-500 font-medium uppercase tracking-wider leading-tight">
                                {label}
                        </p>
                </motion.div>
        );
}

/* ─── Coverage location tag ─── */
function LocationTag({ name, active = false }: { name: string; active?: boolean })
{
        return (
                <motion.span
                        whileHover={{ scale: 1.04 }}
                        className={`inline-flex items-center gap-1.5 text-[11px] font-medium px-3 py-1.5 rounded-full border transition-colors cursor-default ${ active
                                ? 'bg-blue-600 text-white border-blue-600'
                                : 'bg-white text-gray-600 border-gray-200 hover:border-blue-300 hover:text-blue-700'
                                }`}
                >
                        <MapPin className="w-3 h-3 shrink-0" />
                        {name}
                </motion.span>
        );
}

/* ─── License / Credential card ─── */
function CredentialCard({
        icon: Icon,
        title,
        issuer,
        number,
        color,
}: {
        icon: React.ElementType;
        title: string;
        issuer: string;
        number: string;
        color: 'red' | 'blue';
})
{
        return (
                <div
                        className={`flex items-start gap-4 p-4 bg-white border border-gray-100 border-l-4 ${ color === 'red' ? 'border-l-red-600' : 'border-l-blue-600'
                                } rounded-sm shadow-sm`}
                >
                        <div
                                className={`shrink-0 w-10 h-10 rounded-sm flex items-center justify-center ${ color === 'red' ? 'bg-red-50' : 'bg-blue-50'
                                        }`}
                        >
                                <Icon
                                        className={`w-5 h-5 ${ color === 'red' ? 'text-red-600' : 'text-blue-600' }`}
                                />
                        </div>
                        <div className="flex-1 min-w-0">
                                <p className="text-[13px] font-bold text-gray-900 leading-tight mb-0.5">{title}</p>
                                <p className="text-[11px] text-gray-500 mb-1">{issuer}</p>
                                <p
                                        className={`text-[10px] font-mono font-bold tracking-wider ${ color === 'red' ? 'text-red-600' : 'text-blue-600'
                                                }`}
                                >
                                        {number}
                                </p>
                        </div>
                        <CheckCircle2
                                className={`shrink-0 w-4 h-4 mt-0.5 ${ color === 'red' ? 'text-red-500' : 'text-blue-500'
                                        }`}
                        />
                </div>
        );
}

/* ─── Feature row ─── */
function FeatureRow({ text, color }: { text: string; color: 'red' | 'blue' })
{
        return (
                <div className="flex items-start gap-3 py-3 border-b border-gray-100 last:border-0">
                        <div
                                className={`mt-0.5 shrink-0 w-1.5 h-1.5 rounded-full ${ color === 'red' ? 'bg-red-600' : 'bg-blue-600'
                                        }`}
                        />
                        <p className="text-[13px] text-gray-700 leading-relaxed">{text}</p>
                </div>
        );
}

/* ─── Team member card ─── */
function TeamCard({
        initials,
        name,
        role,
        license,
        years,
        color,
}: {
        initials: string;
        name: string;
        role: string;
        license: string;
        years: string;
        color: 'red' | 'blue';
})
{
        return (
                <div
                        className={`bg-white border border-gray-100 border-t-4 ${ color === 'red' ? 'border-t-red-600' : 'border-t-blue-600'
                                } rounded-sm shadow-sm p-5`}
                >
                        <div className="flex items-center gap-3 mb-3">
                                <div
                                        className={`w-11 h-11 rounded-sm flex items-center justify-center font-black text-sm text-white ${ color === 'red' ? 'bg-red-600' : 'bg-blue-700'
                                                }`}
                                        style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
                                >
                                        {initials}
                                </div>
                                <div>
                                        <p className="text-[13px] font-bold text-gray-900">{name}</p>
                                        <p className="text-[11px] text-gray-500">{role}</p>
                                </div>
                        </div>
                        <div className="space-y-1.5">
                                <div className="flex items-center gap-2">
                                        <FileCheck2 className={`w-3.5 h-3.5 ${ color === 'red' ? 'text-red-500' : 'text-blue-500' }`} />
                                        <span className="text-[11px] text-gray-600 font-mono">{license}</span>
                                </div>
                                <div className="flex items-center gap-2">
                                        <Award className={`w-3.5 h-3.5 ${ color === 'red' ? 'text-red-500' : 'text-blue-500' }`} />
                                        <span className="text-[11px] text-gray-600">{years} field experience</span>
                                </div>
                        </div>
                </div>
        );
}

/* ══════════════════════════════════════════
   MAIN COMPONENT
══════════════════════════════════════════ */
export default function AboutSection()
{
        const coverageAreas = [
                { name: 'Dubai Marina', active: true },
                { name: 'Downtown Dubai', active: false },
                { name: 'JBR', active: false },
                { name: 'Palm Jumeirah', active: true },
                { name: 'Business Bay', active: false },
                { name: 'JVC', active: false },
                { name: 'Mirdif', active: false },
                { name: 'Jumeirah', active: true },
                { name: 'Al Barsha', active: false },
                { name: 'DIFC', active: false },
                { name: 'Deira', active: false },
                { name: 'Motor City', active: false },
        ];

        return (
                <section className="bg-white py-20 overflow-hidden" id="about">
                        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">

                                {/* ══ SECTION INTRO ══ */}
                                <FadeIn className="mb-16 max-w-3xl">
                                        <SectionLabel text="Who We Are" color="red" />
                                        <h2
                                                className="text-4xl sm:text-5xl font-black text-gray-900 leading-[1.05] tracking-tighter mb-5"
                                                style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
                                        >
                                               <span className="text-blue-700">DUBAI'S MOST TRUSTED</span>{' '}
                                                <span className="text-red-600">EV CHARGER</span>{' '}
                                                <span className="text-blue-700">INSTALLATION</span>{' '}
                                                SPECIALISTS.
                                        </h2>
                                        <p className="text-base text-gray-600 leading-relaxed max-w-2xl">
                                                We are a DEWA-licensed electrical engineering firm specialising exclusively in
                                                residential and commercial EV charger installations across Dubai. Every job is
                                                handled by over-issued licensed professionals — not subcontractors — ensuring your
                                                charger is safe, compliant, and performing at maximum capacity from day one.
                                        </p>
                                </FadeIn>

                                {/* ══ STATS ROW ══ */}
                                <FadeIn className="mb-20">
                                        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                                                <StatCard value="200+" label="Installations Completed" color="red" />
                                                <StatCard value="48hr" label="Average Turnaround" color="blue" />
                                                <StatCard value="100%" label="DEWA Pass Rate" color="red" />
                                                <StatCard value="8yr" label="Industry Experience" color="blue" />
                                        </div>
                                </FadeIn>

                                {/* ══ TWO COLUMN LAYOUT: Story + Credentials ══ */}
                                <div className="grid lg:grid-cols-2 gap-12 mb-20">

                                        {/* Left — Our story */}
                                        <FadeIn direction="left">
                                                <SectionLabel text="Our Story" color="blue" />
                                                <h3
                                                        className="text-2xl font-black text-gray-900 mb-5 tracking-tight"
                                                        style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
                                                >
                                                        BUILT BY ELECTRICIANS WHO WERE TIRED OF BAD INSTALLS.
                                                </h3>

                                                <div className="space-y-4 mb-6">
                                                        <p className="text-[13.5px] text-gray-600 leading-relaxed">
                                                                Our founders spent years in Dubai's electrical contracting scene watching the
                                                                same story repeat: untrained workers, incorrect cable gauges, no load
                                                                calculations, and homeowners left with chargers that tripped breakers nightly
                                                                or delivered half the rated speed.
                                                        </p>
                                                        <p className="text-[13.5px] text-gray-600 leading-relaxed">
                                                                In 2016 we launched with a single principle — <strong className="text-gray-900">
                                                                        every EV charger installation must be done exactly as DEWA requires</strong>,
                                                                by engineers who hold current, valid, over-issued licenses, and inspected
                                                                before handover. No exceptions.
                                                        </p>
                                                        <p className="text-[13.5px] text-gray-600 leading-relaxed">
                                                                Today we serve clients across all major Dubai districts, from single-villa
                                                                Tesla Wall Connectors to multi-bay commercial charging stations for parking
                                                                operators and hospitality groups.
                                                        </p>
                                                </div>

                                                {/* Feature list */}
                                                <div className="border border-gray-100 rounded-sm overflow-hidden bg-gray-50/50 px-4">
                                                        {[
                                                                'Every technician holds a current DEWA over-issued electrical license — verified before every project',
                                                                'Full load calculation & panel assessment included at zero extra cost',
                                                                'Dedicated 32A or 40A circuit sizing per charger — no shared breakers, ever',
                                                                'Post-install DEWA inspection coordination handled entirely by our team',
                                                                'Manufacturer-authorized for Tesla, ABB, Wallbox, Schneider & Siemens',
                                                        ].map((f, i) => (
                                                                <FeatureRow key={i} text={f} color={i % 2 === 0 ? 'red' : 'blue'} />
                                                        ))}
                                                </div>
                                        </FadeIn>

                                        {/* Right — Credentials */}
                                        <FadeIn direction="right" delay={0.1}>
                                                <SectionLabel text="Licenses & Credentials" color="red" />
                                                <h3
                                                        className="text-2xl font-black text-gray-900 mb-5 tracking-tight"
                                                        style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
                                                >
                                                        OVER-ISSUED LICENSED WORKERS. EVERY SINGLE JOB.
                                                </h3>
                                                <p className="text-[13px] text-gray-500 leading-relaxed mb-6">
                                                        Unlike most contractors who use a single master license across dozens of workers,
                                                        every technician on our team holds their own individual DEWA over-issued
                                                        electrical license — meaning they are personally accountable and legally
                                                        authorized to perform electrical work independently.
                                                </p>

                                                <div className="space-y-3 mb-6">
                                                        <CredentialCard
                                                                icon={ShieldCheck}
                                                                title="DEWA Over-Issued Electrical License"
                                                                issuer="Dubai Electricity & Water Authority"
                                                                number="DEWA-EL-OI-2024-0471"
                                                                color="red"
                                                        />
                                                        <CredentialCard
                                                                icon={Zap}
                                                                title="EV Charger Installation Certification"
                                                                issuer="Dubai Supreme Council of Energy"
                                                                number="DSCE-EVCI-TQ-2023-882"
                                                                color="blue"
                                                        />
                                                        <CredentialCard
                                                                icon={Building2}
                                                                title="Commercial Electrical Contractor License"
                                                                issuer="Department of Economy & Tourism, Dubai"
                                                                number="DET-CL-2024-114882"
                                                                color="red"
                                                        />
                                                        <CredentialCard
                                                                icon={Award}
                                                                title="Tesla Certified Wall Connector Installer"
                                                                issuer="Tesla Motors MENA"
                                                                number="TSL-MENA-CERT-2024-00341"
                                                                color="blue"
                                                        />
                                                </div>

                                                {/* License note */}
                                                <div className="flex items-start gap-3 p-4 bg-blue-50 border border-blue-100 rounded-sm border-l-4 border-l-blue-600">
                                                        <BadgeCheck className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
                                                        <p className="text-[12px] text-blue-800 leading-relaxed">
                                                                <strong>What is an over-issued license?</strong> In Dubai, an over-issued
                                                                license means the technician has individually passed DEWA's technical
                                                                examination and is registered under their own name — they are not simply
                                                                working under someone else's license number.
                                                        </p>
                                                </div>
                                        </FadeIn>
                                </div>

                                {/* ══ COVERAGE MAP SECTION ══ */}
                                <FadeIn className="mb-20">
                                        <div className="border border-gray-100 rounded-sm overflow-hidden shadow-sm">
                                                {/* Header */}
                                                <div className="bg-gray-950 px-6 py-5 flex items-center justify-between">
                                                        <div>
                                                                <SectionLabel text="Service Coverage" color="blue" />
                                                                <h3
                                                                        className="text-xl font-black text-white tracking-tight"
                                                                        style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
                                                                >
                                                                        WE COVER ALL MAJOR DUBAI DISTRICTS
                                                                </h3>
                                                        </div>
                                                        <div className="hidden sm:flex items-center gap-2 text-gray-400 text-[11px]">
                                                                <div className="w-3 h-3 rounded-full bg-blue-500" />
                                                                <span>Currently accepting</span>
                                                                <div className="w-3 h-3 rounded-full bg-gray-600 ml-3" />
                                                                <span>All areas</span>
                                                        </div>
                                                </div>

                                                {/* Map placeholder + areas */}
                                                <div className="p-6 bg-white">
                                                        {/* Stylised map area */}
                                                        <div className="relative bg-gray-50 border border-gray-100 rounded-sm overflow-hidden mb-6 h-48 flex items-center justify-center">
                                                                <div className="absolute inset-0 opacity-10"
                                                                        style={{
                                                                                backgroundImage: 'repeating-linear-gradient(0deg, #3b82f6 0, #3b82f6 1px, transparent 0, transparent 50%), repeating-linear-gradient(90deg, #3b82f6 0, #3b82f6 1px, transparent 0, transparent 50%)',
                                                                                backgroundSize: '32px 32px',
                                                                        }}
                                                                />
                                                                <div className="relative z-10 text-center">
                                                                        <MapPin className="w-10 h-10 text-red-600 mx-auto mb-2 drop-shadow-md" />
                                                                        <p
                                                                                className="text-2xl font-black text-gray-900 tracking-tight"
                                                                                style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
                                                                        >
                                                                                ALL OF DUBAI
                                                                        </p>
                                                                        <p className="text-[11px] text-gray-500 mt-1">
                                                                                Residential · Commercial · Industrial
                                                                        </p>
                                                                </div>
                                                                {/* Decorative location dots */}
                                                                {[
                                                                        { top: '25%', left: '20%' }, { top: '40%', left: '60%' },
                                                                        { top: '65%', left: '35%' }, { top: '30%', left: '75%' },
                                                                        { top: '70%', left: '70%' }, { top: '55%', left: '15%' },
                                                                ].map((pos, i) => (
                                                                        <motion.div
                                                                                key={i}
                                                                                className="absolute w-2 h-2 rounded-full bg-red-500"
                                                                                style={pos}
                                                                                animate={{ scale: [1, 1.5, 1], opacity: [0.7, 1, 0.7] }}
                                                                                transition={{ duration: 2, repeat: Infinity, delay: i * 0.4 }}
                                                                        />
                                                                ))}
                                                        </div>

                                                        {/* Location tags */}
                                                        <div className="flex flex-wrap gap-2">
                                                                {coverageAreas.map((area) => (
                                                                        <LocationTag key={area.name} {...area} />
                                                                ))}
                                                                <span className="inline-flex items-center gap-1.5 text-[11px] font-medium px-3 py-1.5 rounded-full border border-dashed border-gray-300 text-gray-400">
                                                                        + All UAE Emirates on request
                                                                </span>
                                                        </div>
                                                </div>

                                                {/* Bottom bar */}
                                                <div className="bg-red-600 px-6 py-3 flex items-center justify-between">
                                                        <p className="text-white text-[12px] font-semibold">
                                                                Not sure if we cover your area?
                                                        </p>
                                                        <a
                                                                href="https://wa.me/971557864636"
                                                                className="flex items-center gap-1.5 text-white text-[12px] font-bold hover:gap-2.5 transition-all"
                                                        >
                                                                Ask on WhatsApp <ArrowRight className="w-3.5 h-3.5" />
                                                        </a>
                                                </div>
                                        </div>
                                </FadeIn>

                                {/* ══ TEAM SECTION ══ */}
                                {/* <FadeIn className="mb-20">
                                        <div className="flex items-end justify-between mb-6">
                                                <div>
                                                        <SectionLabel text="Our Team" color="blue" />
                                                        <h3
                                                                className="text-2xl font-black text-gray-900 tracking-tight"
                                                                style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
                                                        >
                                                                LICENSED PROFESSIONALS, NOT SUBCONTRACTORS.
                                                        </h3>
                                                </div>
                                                <div className="hidden sm:flex items-center gap-1.5 text-[11px] text-gray-500 bg-gray-50 border border-gray-100 rounded-full px-3 py-1.5">
                                                        <Users className="w-3.5 h-3.5" />
                                                        <span>All staff directly employed</span>
                                                </div>
                                        </div>

                                        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                                                <TeamCard
                                                        initials="AK"
                                                        name="Ahmed Al Kaabi"
                                                        role="Lead Installation Engineer"
                                                        license="DEWA-OI-ENG-2847"
                                                        years="11"
                                                        color="red"
                                                />
                                                <TeamCard
                                                        initials="MR"
                                                        name="Mohammed Rashid"
                                                        role="Senior EV Technician"
                                                        license="DEWA-OI-TECH-3912"
                                                        years="8"
                                                        color="blue"
                                                />
                                                <TeamCard
                                                        initials="SP"
                                                        name="Suresh Pillai"
                                                        role="Commercial Projects Lead"
                                                        license="DEWA-OI-ENG-2201"
                                                        years="13"
                                                        color="red"
                                                />
                                                <TeamCard
                                                        initials="FA"
                                                        name="Faisal Al Ansari"
                                                        role="Tesla Certified Installer"
                                                        license="DEWA-OI-TECH-4105"
                                                        years="6"
                                                        color="blue"
                                                />
                                                <TeamCard
                                                        initials="DP"
                                                        name="Dinesh Patel"
                                                        role="Panel & Load Specialist"
                                                        license="DEWA-OI-ENG-1988"
                                                        years="9"
                                                        color="red"
                                                />
                                                <TeamCard
                                                        initials="WA"
                                                        name="Waleed Al Ameri"
                                                        role="DEWA Liaison & Inspection"
                                                        license="DEWA-OI-INSP-0774"
                                                        years="7"
                                                        color="blue"
                                                />
                                        </div>
                                </FadeIn> */}

                                {/* ══ WHY US — SPLIT CARD ══ */}
                                <FadeIn>
                                        <div className="grid md:grid-cols-2 gap-0 border border-gray-200 rounded-sm overflow-hidden shadow-sm">
                                                {/* Red side */}
                                                <div className="bg-red-600  p-8">
                                                        <div className="flex items-center gap-2 mb-5">
                                                                <ShieldCheck className="w-5 h-5 text-white/80" />
                                                                <span className="text-white/80 text-[10px] font-bold tracking-[0.15em] uppercase">
                                                                        The Problem We Solve
                                                                </span>
                                                        </div>
                                                        <h4
                                                                className="text-2xl font-black text-white mb-4 leading-tight"
                                                                style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
                                                        >
                                                                MOST EV INSTALLERS IN DUBAI ARE NOT ACTUALLY QUALIFIED.
                                                        </h4>
                                                        <div className="space-y-3">
                                                                {[
                                                                        'Single master license shared across 15+ workers',
                                                                        'No load calculation — cables undersized for 22kW draw',
                                                                        'Charger wired to existing circuits — breakers trip nightly',
                                                                        'No DEWA inspection arranged — installation is illegal',
                                                                        'Workers with no EV-specific training or certification',
                                                                ].map((issue, i) => (
                                                                        <div key={i} className="flex items-start gap-3">
                                                                                <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-red-200 shrink-0" />
                                                                                <p className="text-[13px] text-red-100 leading-relaxed">{issue}</p>
                                                                        </div>
                                                                ))}
                                                        </div>
                                                </div>

                                                {/* Blue side */}
                                                <div className="bg-blue-700 p-8">
                                                        <div className="flex items-center gap-2 mb-5">
                                                                <Wrench className="w-5 h-5 text-white/80" />
                                                                <span className="text-white/80 text-[10px] font-bold tracking-[0.15em] uppercase">
                                                                        How We're Different
                                                                </span>
                                                        </div>
                                                        <h4
                                                                className="text-2xl font-black text-white mb-4 leading-tight"
                                                                style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
                                                        >
                                                                EVERY JOB ENGINEERED, LICENSED & DEWA-INSPECTED.
                                                        </h4>
                                                        <div className="space-y-3">
                                                                {[
                                                                        'Individual over-issued DEWA license per technician — verified',
                                                                        'Full load calculation & dedicated 32A–40A circuit every time',
                                                                        'Proper cable sizing for maximum rated charger speed',
                                                                        'DEWA inspection booked and passed before project closeout',
                                                                        'Manufacturer-certified for Tesla, ABB, Wallbox & Schneider',
                                                                ].map((point, i) => (
                                                                        <div key={i} className="flex items-start gap-3">
                                                                                <CheckCircle2 className="mt-0.5 w-4 h-4 text-blue-300 shrink-0" />
                                                                                <p className="text-[13px] text-blue-100 leading-relaxed">{point}</p>
                                                                        </div>
                                                                ))}
                                                        </div>
                                                </div>
                                        </div>
                                </FadeIn>

                                {/* ══ BOTTOM CTA ══ */}
                                <FadeIn delay={0.1} className="mt-16 text-center">
                                        <div className="inline-flex flex-col sm:flex-row items-center gap-4">
                                                <motion.a
                                                        href="https://wa.me/971557864636"
                                                        className="group relative inline-flex items-center gap-3 bg-red-600 hover:bg-red-700 text-white font-bold px-8 py-4 rounded-sm transition-colors"
                                                        whileHover={{ scale: 1.02 }}
                                                        whileTap={{ scale: 0.98 }}
                                                >
                                                        <span
                                                                className="text-[13px] uppercase tracking-[0.08em]"
                                                                style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
                                                        >
                                                                Get a Free Consultation
                                                        </span>
                                                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                                </motion.a>
                                                <div className="flex items-center gap-2 text-gray-500 text-[12px]">
                                                        <Star className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />
                                                        <span>4.9 rating · 200+ installations · DEWA certified</span>
                                                </div>
                                        </div>
                                </FadeIn>

                        </div>
                </section>
        );
}