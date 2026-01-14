import { useState } from "react";
import { motion } from "framer-motion";

export type TestingType = {
  id: string;
  label: string;
  content: string;
};

interface TypesOfTestingProps {
  types: TestingType[];
  title?: string;
  showTitle?: boolean;
}

export const TypesOfTesting = ({
  types,
  title = "Types of Testing",
  showTitle = true,
}: TypesOfTestingProps) => {
  const [active, setActive] = useState(types[0]?.id);

  const activeContent = types.find((t) => t.id === active);

  return (
    <section className="relative">
      {/* Section heading (optional) */}
      {showTitle && (
        <h3 className="text-3xl md:text-4xl font-bold mb-12">
          {title.split(" ")[0]}{" "}
          <span className="text-primary text-glow">
            {title.split(" ").slice(1).join(" ")}
          </span>
        </h3>
      )}

      {/* Tabs */}
      <div className="flex flex-wrap gap-10 mb-10">
        {types.map((type) => {
          const isActive = active === type.id;

          return (
            <button
              key={type.id}
              onClick={() => setActive(type.id)}
              className={`
                relative pb-2 text-lg font-medium transition
                ${
                  isActive
                    ? "text-primary"
                    : "text-muted-foreground hover:text-white"
                }
              `}
            >
              {type.label}

              {isActive && (
                <motion.span
                  layoutId="underline"
                  className="
                    absolute left-0 -bottom-1
                    h-[2px] w-full
                    bg-primary
                    shadow-[0_0_20px_rgba(255,0,0,0.8)]
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
        initial={{ opacity: 0, y: 14 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.35 }}
        className="
          relative
          rounded-2xl
          p-8
          max-w-3xl
          bg-white/5
          backdrop-blur-xl
          border border-white/10
          shadow-[0_0_60px_rgba(255,0,0,0.15)]
        "
      >
        <p className="text-lg text-muted-foreground leading-relaxed">
          {activeContent?.content || ""}
        </p>
      </motion.div>
    </section>
  );
};
