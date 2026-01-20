import { motion } from "framer-motion";
import { Star, Trophy, Award } from "lucide-react";

export function PeerInsightsCardMiniOrange() {
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
            className="
              w-10 h-10 rounded-xl
              bg-red-500/10
              border border-red-500/20
              flex items-center justify-center
              shadow-[0_0_25px_rgba(255,0,0,0.25)]
            "
          >
            <Star className="w-5 h-5 text-red-400" />
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
        {/* VOTC */}
        <div
          className="
            rounded-xl p-4
            bg-white/5 border border-white/10
            hover:border-red-500/25
            transition
          "
        >
          <div className="flex items-start gap-3">
            <div
              className="
                mt-0.5
                w-9 h-9 rounded-lg
                bg-red-500/10
                border border-red-500/20
                flex items-center justify-center
              "
            >
              <Trophy className="w-5 h-5 text-red-400" />
            </div>

            <div className="flex-1">
              <h4 className="text-sm sm:text-base font-semibold text-white">
                VOTC 2024 Recognition
              </h4>
              <p className="text-sm text-white/70 leading-relaxed mt-1">
                Positioned as a “Strong Performer” in Gartner Peer Insights
                Vendor Option Tool Cloud 2024
              </p>
            </div>
          </div>
        </div>

        {/* G2 */}
        <div
          className="
            rounded-xl p-4
            bg-white/5 border border-white/10
            hover:border-red-500/25
            transition
          "
        >
          <div className="flex items-start gap-3">
            <div
              className="
                mt-0.5
                w-9 h-9 rounded-lg
                bg-red-500/10
                border border-red-500/20
                flex items-center justify-center
              "
            >
              <Award className="w-5 h-5 text-red-400" />
            </div>

            <div className="flex-1">
              <h4 className="text-sm sm:text-base font-semibold text-white">
                G2 Rankings
              </h4>
              <p className="text-sm text-white/70 leading-relaxed mt-1">
                #1 on G2 for Best ROI, Best Support, and High Performer
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
