import { useEffect, useState } from "react";
import { Navigation } from "@/components/navigation/Navigation";
import { Footer } from "@/components/Footer";
import { fetchBlogs } from "@/pages/blog/blogService";
import { Link } from "react-router-dom";

interface Blog {
  id: number;
  slug: string;
  title: string;
  content: string;
  createdAt: string;
}

export default function BlogListPage() {
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetchBlogs()
      .then((data) => setBlogs(data))
      .catch(() => setError("Failed to load blogs. Please try again later."))
      .finally(() => setLoading(false));
  }, []);

  const featured = blogs[0];
  const remaining = blogs.slice(1);

  // -------------------------
  // Loading State
  // -------------------------
  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <p className="text-muted-foreground">Loading blogs...</p>
      </div>
    );
  }

  // -------------------------
  // Error State
  // -------------------------
  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <p className="text-red-500">{error}</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <main className="pt-36 pb-20 container mx-auto px-4">
        {/* Hero */}
        <div className="text-center mb-20">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Security Insights
          </h1>
          <div className="fancy-line mx-auto w-[180px] mb-6" />
          <p className="text-muted-foreground max-w-xl mx-auto">
            Latest cyber-security intelligence, threat research,
            and security engineering deep dives.
          </p>
        </div>

        {/* Empty State */}
        {blogs.length === 0 ? (
          <div className="text-center py-20">
            <h2 className="text-2xl font-semibold mb-4">
              No blog posts yet
            </h2>
            <p className="text-muted-foreground">
              We're preparing security insights. Check back soon.
            </p>
          </div>
        ) : (
          <>
            {/* Featured */}
            {featured && (
              <Link to={`/blog/${featured.slug}`}>
                <div className="cyber-border rounded-xl p-10 md:p-14 glass hover-lift mb-20 cursor-pointer group">
                  <span className="text-xs text-cyber-red font-semibold uppercase">
                    Featured
                  </span>

                  <h2 className="text-4xl font-bold mt-3 mb-4 group-hover:text-cyber-red transition">
                    {featured.title}
                  </h2>

                  <p className="text-muted-foreground line-clamp-3 mb-6">
                    {featured.content}
                  </p>

                  <div className="text-sm text-muted-foreground">
                    {new Date(featured.createdAt).toDateString()}
                  </div>
                </div>
              </Link>
            )}

            {/* Grid */}
            {remaining.length > 0 && (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {remaining.map((blog) => (
                  <Link key={blog.id} to={`/blog/${blog.slug}`}>
                    <div className="cyber-border rounded-xl p-6 glass hover-lift cursor-pointer group">
                      <h3 className="text-xl font-bold mb-3 group-hover:text-cyber-red transition">
                        {blog.title}
                      </h3>

                      <p className="text-muted-foreground text-sm mb-4 line-clamp-3">
                        {blog.content}
                      </p>

                      <div className="text-xs text-muted-foreground">
                        {new Date(blog.createdAt).toDateString()}
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            )}
          </>
        )}
      </main>

      <Footer />
    </div>
  );
}
