import { motion } from "framer-motion";
import { Star, Award, Lightbulb, CheckCircle2 } from "lucide-react";

const ACCENT = "text-red-600";
const ACCENT_BG = "bg-red-500/10";
const ACCENT_BORDER = "border-red-500/20";

export function PeerInsightsCard1Kosmos() {
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
      {/* subtle inner ring glow */}
      <div className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-red-500/15" />

      {/* header */}
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
            <p className="text-xs sm:text-sm text-white/60">
              Identity Verification Market
            </p>
          </div>
        </div>
      </div>

      {/* mini quadrant */}
      <div className="px-6 pt-5">
        <div
          className="
            relative rounded-xl
            bg-white/5 border border-white/10
            px-4 py-4
          "
        >
          <div className="text-center text-sm text-white/70 mb-2">
            Identity Verification Market
          </div>

          <div className="relative mt-2 h-[92px]">
            {/* crosshair */}
            <div className="absolute inset-0">
              <div className="absolute left-1/2 top-0 bottom-0 w-px bg-white/10" />
              <div className="absolute top-1/2 left-0 right-0 h-px bg-white/10" />
            </div>

            {/* axis labels */}
            <div className="absolute left-0 top-0 text-xs text-white/50">
              Vision
            </div>
            <div className="absolute right-0 top-0 text-xs text-white/50">
              Innovation
            </div>
            <div className="absolute right-0 bottom-0 text-xs text-white/50">
              Challenger position
            </div>

            {/* dot */}
            <div
              className="
                absolute left-[56%] top-[30%]
                w-5 h-5 rounded-full
                bg-red-500
                shadow-[0_0_28px_rgba(255,0,0,0.65)]
              "
            />

            {/* vendor label */}
            <div className="absolute left-1/2 bottom-1 -translate-x-1/2 text-xs text-white/60">
              1Kosmos
            </div>
          </div>
        </div>
      </div>

      {/* 3 highlight tiles */}
      <div className="px-6 pt-5 grid grid-cols-1 sm:grid-cols-3 gap-3">
        <div
          className="
            rounded-xl p-4
            bg-white/5 border border-white/10
            hover:border-red-500/30
            transition
          "
        >
          <div className="flex items-center gap-2 text-white mb-2">
            <Award className={`w-4 h-4 ${ACCENT}`} />
            <span className="font-semibold">Challenger</span>
          </div>
          <p className="text-xs text-white/65 leading-relaxed">
            Magic Quadrant for Identity Verification
          </p>
        </div>

        <div
          className="
            rounded-xl p-4
            bg-white/5 border border-white/10
            hover:border-red-500/30
            transition
          "
        >
          <div className="flex items-center gap-2 text-white mb-2">
            <Award className={`w-4 h-4 ${ACCENT}`} />
            <span className="font-semibold">Highest</span>
          </div>
          <p className="text-xs text-white/65 leading-relaxed">
            Workforce Use Cases
          </p>
        </div>

        <div
          className="
            rounded-xl p-4
            bg-white/5 border border-white/10
            hover:border-red-500/30
            transition
          "
        >
          <div className="flex items-center gap-2 text-white mb-2">
            <Lightbulb className={`w-4 h-4 ${ACCENT}`} />
            <span className="font-semibold">Innovation</span>
          </div>
          <p className="text-xs text-white/65 leading-relaxed">
            Recognized by KuppingerCole
          </p>
        </div>
      </div>

      {/* quote */}
      <div className="px-6 pt-6">
        <div
          className="
            rounded-xl p-4
            bg-gradient-to-r from-red-500/12 via-transparent to-transparent
            border border-red-500/15
          "
        >
          <p className="text-sm text-white/80 leading-relaxed italic">
            “1Kosmos is the only vendor with FedRAMP High Authorization and
            Kantara-certified as a full-service Credential Service Provider.”
          </p>
        </div>
      </div>

      {/* bullet points */}
      <div className="px-6 pt-5 pb-6 space-y-3">
        {[
          "Kantara-certified as a full-service Credential Service Provider (CSP)",
          "Private, permissioned blockchain for user-controlled privacy",
        ].map((item) => (
          <div key={item} className="flex items-start gap-3">
            <CheckCircle2 className={`w-5 h-5 ${ACCENT} mt-[2px]`} />
            <p className="text-sm text-white/70 leading-relaxed">{item}</p>
          </div>
        ))}
      </div>
    </motion.div>
  );
}
