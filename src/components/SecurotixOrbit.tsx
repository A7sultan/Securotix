import { motion } from "framer-motion";

type OrbProps = {
  label: string;
  className?: string;
};

const Orb = ({ label, className }: OrbProps) => (
  <div className={`absolute flex flex-col items-center ${className}`}>
    <div className="w-9 h-9 rounded-full bg-white shadow-[0_0_12px_rgba(255,255,255,0.7)]" />
    <span className="mt-2 text-sm">{label}</span>
  </div>
);

export const SecurotixOrbit = () => {
  return (
    <div className="relative flex items-center justify-center">
      <div className="absolute w-[420px] h-[420px] rounded-full bg-red-900/30 blur-3xl" />

      <div className="absolute w-[360px] h-[360px] rounded-full border border-red-600/40" />
      <div className="absolute w-[260px] h-[260px] rounded-full border border-red-600/25" />
      <div className="absolute w-[160px] h-[160px] rounded-full border border-red-600/15" />

      <div className="relative z-10 text-center">
        <div className="w-28 h-28 rounded-full bg-red-700 border border-red-400/60 shadow-[0_0_30px_rgba(255,0,0,0.6)] flex items-center justify-center">
          <span className="font-bold tracking-wide">Securotix</span>
        </div>
        <p className="text-xs text-muted-foreground mt-2">Cybersecurity</p>
      </div>

      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 22, repeat: Infinity, ease: "linear" }}
        className="absolute w-[400px] h-[400px]"
      >
        <Orb label="Partners" className="left-1/2 -translate-x-1/2 -top-2" />
        <Orb label="Customers" className="right-0 top-1/2 -translate-y-1/2" />
        <Orb label="Vendors" className="left-0 top-1/2 -translate-y-1/2" />
      </motion.div>
    </div>
  );
};
