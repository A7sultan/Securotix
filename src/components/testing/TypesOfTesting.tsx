import { useState } from "react";
import { motion } from "framer-motion";

const content = {
  black: `Black Box, often referred to as behavioral testing or external testing, is a form of software testing technique wherein no prior knowledge of the internal code structure, implementation specifics, or internal routes of an application is necessary. It focuses on the application’s input and output and is entirely dependent on the specifications and requirements for the software.`,
  grey: `Grey Box testing involves partial knowledge of the internal workings of the application.`,
  white: `White Box testing examines a software’s underlying structure, coding, and architecture in order to validate the input-output flow and improve the application’s design, security, and utility. Testing of this kind is sometimes referred to as internal testing, clear box testing, open box testing, or glass box testing because testers can see the code.`,
};

export const TypesOfTesting = () => {
  const [active, setActive] = useState<"black" | "grey" | "white">("white");

  return (
    <section className="relative w-full">
      {/* Heading */}
      <h3 className="text-2xl md:text-3xl font-bold mb-6">
        Types of <span className="text-primary text-glow">Testing</span>
      </h3>

      {/* Tabs */}
      <div className="flex flex-wrap gap-6 md:gap-8 mb-6">
        {(["black", "grey", "white"] as const).map((t) => {
          const isActive = active === t;

          return (
            <button
              key={t}
              onClick={() => setActive(t)}
              className={`
                relative pb-1 text-base md:text-sm font-medium transition
                ${
                  isActive
                    ? "text-primary"
                    : "text-muted-foreground hover:text-white"
                }
              `}
            >
              {t === "black"
                ? "Black Box"
                : t === "grey"
                ? "Grey Box"
                : "White Box"}

              {isActive && (
                <motion.span
                  layoutId="underline"
                  className="
                    absolute left-0 -bottom-1
                    h-[2px] w-full
                    bg-primary
                    shadow-[0_0_16px_rgba(255,0,0,0.7)]
                  "
                />
              )}
            </button>
          );
        })}
      </div>

      {/* Content */}
      <motion.div
        key={active}
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, ease: "easeOut" }}
        className="
          relative
          rounded-xl
          p-6
          md:p-7
          max-w-3xl
          bg-white/5
          backdrop-blur-xl
          border border-white/10
          shadow-[0_0_50px_rgba(255,0,0,0.12)]
        "
      >
        {/* Subtle glow */}
        <div
          className="
            absolute -top-12 -right-12
            w-40 h-40
            bg-primary/25
            blur-[100px]
            rounded-full
            pointer-events-none
          "
        />

        <p className="text-base text-muted-foreground leading-relaxed relative z-10">
          {content[active]}
        </p>
      </motion.div>
    </section>
  );
};
