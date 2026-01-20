import { motion } from "framer-motion";
import { Star, ThumbsUp, ShieldCheck } from "lucide-react";

export function PeerInsightsCardTufin() {
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
      <div className="px-6 py-6 space-y-5">
        {/* Gartner recognition label */}
        <div className="text-sm text-white/75">
          <span className="font-medium text-white/85">
            Gartner Recognition:
          </span>
        </div>

        {/* Network diagram */}
        <div
          className="
            relative rounded-xl
            bg-white/5 border border-white/10
            px-4 py-4
          "
        >
          <div className="relative h-[86px] w-full">
            {/* dashed connection lines */}
            <svg
              className="absolute inset-0 w-full h-full"
              viewBox="0 0 520 90"
              preserveAspectRatio="none"
            >
              <path
                d="M40,45 C120,10 180,80 260,45 C340,10 400,80 480,45"
                fill="none"
                stroke="rgba(255,0,0,0.35)"
                strokeWidth="2"
                strokeDasharray="6 6"
              />
              <path
                d="M40,45 C120,80 180,10 260,45 C340,80 400,10 480,45"
                fill="none"
                stroke="rgba(255,0,0,0.22)"
                strokeWidth="2"
                strokeDasharray="6 6"
              />
            </svg>

            {/* Nodes */}
            <div className="absolute inset-0 flex items-center justify-between gap-2 px-1">
              {[
                { label: "Firewall" },
                { label: "Cloud" },
                { label: "Policy", center: true },
                { label: "SD-WAN" },
                { label: "Access" },
              ].map((n) => (
                <div
                  key={n.label}
                  className="flex flex-col items-center justify-center min-w-[72px]"
                >
                  <div
                    className={`
                      relative
                      ${n.center ? "w-10 h-10" : "w-9 h-9"}
                      rounded-full
                      bg-red-500/90
                      shadow-[0_0_25px_rgba(255,0,0,0.55)]
                      flex items-center justify-center
                    `}
                  >
                    {n.center ? (
                      <ShieldCheck className="w-5 h-5 text-white" />
                    ) : (
                      <span className="block w-2 h-2 rounded-full bg-white/80" />
                    )}
                  </div>

                  <div className="mt-2 text-[11px] text-white/70">
                    {n.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Main insight */}
        <div className="flex items-start gap-3">
          <div
            className="
              w-9 h-9 rounded-xl
              bg-red-500/10
              border border-red-500/20
              flex items-center justify-center
              shadow-[0_0_20px_rgba(255,0,0,0.18)]
              mt-0.5
            "
          >
            <ThumbsUp className="w-5 h-5 text-red-400" />
          </div>

          <div className="flex-1">
            <h4 className="text-sm sm:text-base font-semibold text-white">
              Powerful Automation Capabilities
            </h4>

            <p className="text-sm text-white/70 leading-relaxed mt-1">
              Tufin Orchestration Suite brings significant automation to network
              security, simplifying engineers’ jobs
            </p>

            <p className="text-sm text-white/75 leading-relaxed italic mt-3">
              “Effective automation of security policies across hybrid
              environments”
            </p>
          </div>
        </div>
      </div>

      {/* subtle bottom glow */}
      <div className="pointer-events-none absolute -bottom-24 left-1/2 -translate-x-1/2 w-[70%] h-40 bg-red-500/10 blur-3xl" />
    </motion.div>
  );
}
