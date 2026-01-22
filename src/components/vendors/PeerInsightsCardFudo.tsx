import { motion } from "framer-motion";
import { BarChart3, CheckCircle2 } from "lucide-react";

const ACCENT = "text-red-600";
const ACCENT_BG = "bg-red-500/10";
const ACCENT_BORDER = "border-red-500/20";

export function PeerInsightsCardFudo() {
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
            <BarChart3 className={`w-5 h-5 ${ACCENT}`} />
          </div>

          <div className="leading-tight">
            <h3 className="text-lg sm:text-xl font-semibold text-white">
              Gartner Peer Insights
            </h3>
          </div>
        </div>
      </div>

      {/* CONTENT */}
      <div className="px-6 py-6 space-y-4">
        <div
          className="
            rounded-xl p-4
            bg-white/5 border border-white/10
            hover:border-red-500/25
            transition
          "
        >
          <div className="flex items-start gap-3">
            <div className="mt-0.5">
              <CheckCircle2 className={`w-5 h-5 ${ACCENT}`} />
            </div>

            <div className="flex-1">
              <h4 className="text-sm sm:text-base font-semibold text-white">
                Comprehensive PAM Solution
              </h4>

              <p className="text-sm text-white/70 leading-relaxed mt-1">
                Advanced auditing, video recording, and credential rotation
                capabilities
              </p>

              <p className="text-sm text-white/75 leading-relaxed italic mt-3">
                “Enhances secure-by-design with intelligent access control”
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* subtle bottom glow */}
      <div className="pointer-events-none absolute -bottom-24 left-1/2 -translate-x-1/2 w-[70%] h-40 bg-red-500/10 blur-3xl" />
    </motion.div>
  );
}
