'use client';

import { motion } from 'framer-motion';

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.2 },
  },
};

const leftVariants = {
  hidden: { opacity: 0, x: -30 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
  },
};

const rightVariants = {
  hidden: { opacity: 0, x: 30 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
  },
};

export default function PositioningStatement() {
  return (
    <section id="about" className="bg-obsidian py-24 md:py-32">
      <motion.div
        className="mx-auto grid max-w-7xl grid-cols-1 gap-12 px-6 lg:grid-cols-5 lg:gap-16 md:px-16 lg:px-20"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-80px' }}
      >
        {/* ── Left column (3/5) ───────────────────────────── */}
        <motion.div className="lg:col-span-3" variants={leftVariants}>
          <h2 className="text-3xl font-light leading-tight text-ivory md:text-4xl lg:text-5xl">
            We don&rsquo;t manage contracts.
            <br />
            <span className="text-gold">We protect your hotel.</span>
          </h2>

          <div className="mt-8 space-y-5">
            <p className="max-w-[480px] text-base leading-relaxed text-silver">
              Most engineering firms think in scopes of work. We think in guest
              experience outcomes. When your chiller fails at 2am in August, the
              question isn&rsquo;t cost — it&rsquo;s response time. We answer
              that question before it&rsquo;s asked.
            </p>
            <p className="max-w-[480px] text-base leading-relaxed text-silver">
              As Egypt&rsquo;s only dedicated hospitality engineering
              partnership, we bring international brand standard execution to
              Sharm El-Sheikh&rsquo;s most demanding properties — and we stay
              long after handover.
            </p>
          </div>

          <a
            href="#services"
            className="gold-underline mt-8 inline-block text-sm font-medium text-gold transition-colors hover:text-gold-light"
          >
            See how we&rsquo;re different&nbsp;→
          </a>
        </motion.div>

        {/* ── Right column (2/5) — SVG Technical Schematic ── */}
        <motion.div
          className="relative flex items-center justify-center lg:col-span-2"
          variants={rightVariants}
        >
          <svg
            viewBox="0 0 400 360"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="h-auto w-full max-w-[380px]"
            aria-hidden="true"
          >
            {/* HVAC lines — top system */}
            <path
              d="M 60 60 L 160 60 L 160 120 L 280 120"
              stroke="#C9A96E"
              strokeWidth="1"
              className="draw-line"
              style={{ animationDelay: '0.2s' }}
            />
            <path
              d="M 60 80 L 130 80 L 130 140 L 280 140"
              stroke="#C9A96E"
              strokeWidth="1"
              className="draw-line"
              style={{ animationDelay: '0.5s' }}
            />
            {/* Chiller unit box */}
            <rect
              x="40"
              y="45"
              width="30"
              height="50"
              rx="2"
              stroke="#C9A96E"
              strokeWidth="1"
              className="draw-line"
              style={{ animationDelay: '0s' }}
            />
            <text
              x="55"
              y="74"
              textAnchor="middle"
              fill="#C9A96E"
              fontSize="7"
              fontFamily="sans-serif"
            >
              CH
            </text>

            {/* Electrical distribution — center system */}
            <path
              d="M 200 180 L 340 180"
              stroke="#C9A96E"
              strokeWidth="1"
              className="draw-line"
              style={{ animationDelay: '0.8s' }}
            />
            <path
              d="M 280 180 L 280 220 L 340 220"
              stroke="#C9A96E"
              strokeWidth="1"
              className="draw-line"
              style={{ animationDelay: '1s' }}
            />
            <path
              d="M 280 180 L 280 260 L 340 260"
              stroke="#C9A96E"
              strokeWidth="1"
              className="draw-line"
              style={{ animationDelay: '1.2s' }}
            />
            {/* Electrical nodes */}
            <circle cx="200" cy="180" r="6" stroke="#C9A96E" strokeWidth="1" className="draw-line" style={{ animationDelay: '0.7s' }} />
            <circle cx="280" cy="180" r="3" fill="#C9A96E" className="draw-line" style={{ animationDelay: '0.9s' }} />
            <circle cx="340" cy="180" r="3" fill="#C9A96E" className="draw-line" style={{ animationDelay: '0.85s' }} />
            <circle cx="340" cy="220" r="3" fill="#C9A96E" className="draw-line" style={{ animationDelay: '1.05s' }} />
            <circle cx="340" cy="260" r="3" fill="#C9A96E" className="draw-line" style={{ animationDelay: '1.25s' }} />

            {/* Main panel symbol */}
            <rect x="186" y="170" width="28" height="20" rx="1" stroke="#C9A96E" strokeWidth="1" className="draw-line" style={{ animationDelay: '0.6s' }} />

            {/* Plumbing — bottom system */}
            <path
              d="M 80 300 L 200 300 L 200 240 L 200 180"
              stroke="#C9A96E"
              strokeWidth="1"
              className="draw-line"
              style={{ animationDelay: '1.4s' }}
            />
            <path
              d="M 200 300 L 300 300 L 300 240"
              stroke="#C9A96E"
              strokeWidth="1"
              className="draw-line"
              style={{ animationDelay: '1.6s' }}
            />
            {/* Plumbing valve symbols */}
            <path d="M 135 296 L 140 304 L 145 296" stroke="#C9A96E" strokeWidth="1" className="draw-line" style={{ animationDelay: '1.5s' }} />
            <path d="M 245 296 L 250 304 L 255 296" stroke="#C9A96E" strokeWidth="1" className="draw-line" style={{ animationDelay: '1.7s' }} />

            {/* BMS dashed connection lines */}
            <path
              d="M 120 170 L 186 170"
              stroke="#C9A96E"
              strokeWidth="1"
              strokeDasharray="4 4"
              className="draw-line"
              style={{ animationDelay: '1.8s' }}
            />
            <path
              d="M 120 190 L 160 190 L 160 160 L 280 160 L 280 140"
              stroke="#C9A96E"
              strokeWidth="1"
              strokeDasharray="4 4"
              className="draw-line"
              style={{ animationDelay: '2s' }}
            />
            {/* BMS controller box */}
            <rect x="90" y="158" width="35" height="44" rx="2" stroke="#C9A96E" strokeWidth="1" className="draw-line" style={{ animationDelay: '1.7s' }} />
            <text
              x="107"
              y="184"
              textAnchor="middle"
              fill="#C9A96E"
              fontSize="6"
              fontFamily="sans-serif"
            >
              BMS
            </text>
          </svg>

          {/* Annotation tags */}
          <span className="absolute left-4 top-4 text-xs font-medium uppercase tracking-wider text-gold md:left-8 md:top-0">
            HVAC Systems
          </span>
          <span className="absolute right-4 top-[42%] text-xs font-medium uppercase tracking-wider text-gold md:right-0">
            Electrical
          </span>
          <span className="absolute bottom-2 left-4 text-xs font-medium uppercase tracking-wider text-gold md:bottom-0 md:left-8">
            Plumbing
          </span>
          <span className="absolute bottom-8 right-4 text-xs font-medium uppercase tracking-wider text-gold md:bottom-10 md:right-0">
            BMS Integration
          </span>
        </motion.div>
      </motion.div>
    </section>
  );
}