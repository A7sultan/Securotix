import { useState } from "react";

interface NavItem {
  id: string;
  label: string;
}

interface Section {
  id: string;
  title: string;
  content: string;
}

interface OurApproachProps {
  nav: NavItem[];
  sections: Section[];
}

export const OurApproach = ({ nav, sections }: OurApproachProps) => {
  const [activeId, setActiveId] = useState(nav[0]?.id);

  const activeSection = sections.find(
    (section) => section.id === activeId
  );

  return (
    <section className="space-y-16">
      {/* Heading */}
      <h2 className="text-4xl md:text-5xl font-bold text-center">
        Our <span className="text-primary">Approach</span>
      </h2>

      <div className="grid grid-cols-1 lg:grid-cols-[280px_1fr] gap-12 items-start">
        {/* SIDE NAV */}
        <aside className="sticky top-32">
          <div className="rounded-2xl p-6 bg-white/5 backdrop-blur-xl border border-white/10 space-y-2">
            {nav.map((item) => (
              <button
                key={item.id}
                onClick={() => setActiveId(item.id)}
                className={`
                  w-full text-left px-4 py-3 rounded-lg text-sm font-medium transition
                  ${
                    activeId === item.id
                      ? "bg-primary/20 text-primary shadow-[0_0_20px_rgba(255,0,0,0.35)]"
                      : "text-muted-foreground hover:text-primary hover:bg-white/5"
                  }
                `}
              >
                {item.label}
              </button>
            ))}
          </div>
        </aside>

        {/* CONTENT PANEL */}
        <div className="relative rounded-2xl p-10 bg-white/5 backdrop-blur-xl border border-white/10 shadow-[0_0_80px_rgba(255,0,0,0.15)] min-h-[320px]">
          {activeSection && (
            <>
              <h3 className="text-3xl font-bold mb-6 text-glow">
                {activeSection.title}
              </h3>

              <p className="text-lg text-muted-foreground leading-relaxed">
                {activeSection.content}
              </p>
            </>
          )}
        </div>
      </div>
    </section>
  );
};
