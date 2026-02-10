import { useEffect, useState } from "react";
import { Navigation } from "@/components/navigation/Navigation";
import { Footer } from "@/components/Footer";
import { fetchBlogs } from "@/pages/blog/blogService";
import { Link } from "react-router-dom";

export default function BlogListPage() {
  const [blogs, setBlogs] = useState<any[]>([]);

  useEffect(() => {
    fetchBlogs().then(setBlogs);
  }, []);

  if (!blogs.length) return null;

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

        {/* Featured */}
        <Link to={`/blog/${blogs[0].slug}`}>
          <div className="cyber-border rounded-xl p-10 md:p-14 glass hover-lift mb-20 cursor-pointer group">

            <span className="text-xs text-cyber-red font-semibold uppercase">
              Featured
            </span>

            <h2 className="text-4xl font-bold mt-3 mb-4 group-hover:text-cyber-red transition">
              {blogs[0].title}
            </h2>

            <p className="text-muted-foreground line-clamp-3 mb-6">
              {blogs[0].content}
            </p>

            <div className="text-sm text-muted-foreground">
              {new Date(blogs[0].createdAt).toDateString()}
            </div>
          </div>
        </Link>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogs.slice(1).map((blog) => (
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
      </main>

      <Footer />
    </div>
  );
}
