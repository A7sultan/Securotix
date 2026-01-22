import { motion } from "framer-motion";
import { Star, Trophy } from "lucide-react";

const ACCENT = "text-red-600";
const ACCENT_BG = "bg-red-500/10";
const ACCENT_BORDER = "border-red-500/20";

export function PeerInsightsCardNucleus() {
  const rating = 4.5;
  const maxStars = 5;

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.55, ease: "easeOut" }}
      className="
        relative w-full max-w-[560px]
        rounded-2xl overflow-hidden
        border border-white/10
        bg-black/60 backdrop-blur-xl
        shadow-[0_0_65px_rgba(255,0,0,0.16)]
      "
    >
      {/* subtle red ring */}
      <div className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-red-500/15" />

      {/* HEADER */}
      <div className="px-6 pt-6 pb-5 border-b border-white/10">
        <div className="flex items-center gap-3">
          <div
            className={`
              w-10 h-10 rounded-xl
              ${ACCENT_BG}
              border ${ACCENT_BORDER}
              flex items-center justify-center
              shadow-[0_0_25px_rgba(255,0,0,0.25)]
            `}
          >
            <Star className={`w-5 h-5 ${ACCENT}`} />
          </div>

          <div className="leading-tight">
            <h3 className="text-lg sm:text-xl font-semibold text-white">
              Gartner Peer Insights
            </h3>
          </div>
        </div>
      </div>

      {/* BODY */}
      <div className="px-6 py-6 space-y-6">
        {/* Overall Rating */}
        <div className="flex items-start justify-between gap-6">
          <div>
            <p className="text-sm text-white/70 mb-3">Overall Rating:</p>

            {/* Stars */}
            <div className="flex items-center gap-2">
              {Array.from({ length: maxStars }).map((_, i) => (
                <Star
                  key={i}
                  className={`w-5 h-5 ${ACCENT}`}
                  fill="currentColor"
                  opacity={i < Math.floor(rating) ? 1 : 0.35}
                />
              ))}
            </div>
          </div>

          <div className="text-right">
            <div className="text-3xl font-bold text-white leading-none">
              {rating.toFixed(1)}
              <span className="text-base font-medium text-white/70">
                {" "}
                / 5 stars
              </span>
            </div>
          </div>
        </div>

        {/* Willingness to Recommend */}
        <div className="flex items-center justify-between">
          <p className="text-sm text-white/70">Willingness to Recommend:</p>
          <div className="text-3xl font-bold text-white">95%</div>
        </div>

        {/* Recognition */}
        <div className="space-y-3">
          <div className="flex items-center gap-3">
            <div
              className={`
                w-9 h-9 rounded-xl
                ${ACCENT_BG}
                border ${ACCENT_BORDER}
                flex items-center justify-center
                shadow-[0_0_20px_rgba(255,0,0,0.18)]
              `}
            >
              <Trophy className={`w-5 h-5 ${ACCENT}`} />
            </div>

            <h4 className="text-sm sm:text-base font-semibold text-white">
              2025 Gartner® Magic Quadrant for Exposure Assessment Platforms
            </h4>
          </div>

          <p className="text-sm text-white/70 leading-relaxed">
            Positioned as a Challenger, recognized for Completeness of Vision
            and Ability to Execute
          </p>
        </div>

        {/* Quote */}
        <div
          className="
            rounded-xl p-4
            bg-gradient-to-r from-red-500/12 via-transparent to-transparent
            border border-red-500/15
          "
        >
          <p className="text-sm text-white/80 leading-relaxed italic">
            “Outstanding vulnerability management orchestration platform for
            modern environments”
          </p>
        </div>
      </div>

      {/* subtle bottom glow */}
      <div className="pointer-events-none absolute -bottom-24 left-1/2 -translate-x-1/2 w-[70%] h-40 bg-red-500/10 blur-3xl" />
    </motion.div>
  );
}
