import { NavLink } from "@/components/navigation/NavLink";
import { categories } from "@/components/categories";

const Partners = () => {
  return (
    <div className="min-h-screen bg-background">

      <main className="pt-36 pb-24 container mx-auto px-4">

        <h1 className="text-5xl font-bold mb-4">
          Partner Ecosystem
        </h1>

        <p className="text-muted-foreground max-w-2xl mb-16">
          Curated technology partners delivering measurable business security outcomes.
        </p>

        <div className="divide-y divide-white/10">
          {categories.map(c=>(
            <div key={c.name} className="py-10">
              <div className="text-xl font-semibold mb-4">{c.name}</div>

              <div className="flex flex-wrap gap-6">
                {c.vendors.map(v=>(
                  <NavLink key={v.name} to={v.path}
                    className="text-muted-foreground hover:text-primary transition"
                  >
                    {v.name}
                  </NavLink>
                ))}
              </div>
            </div>
          ))}
        </div>

      </main>
    </div>
  );
};

export default Partners;
