import { Navigation } from "@/components/navigation/Navigation";
import { Footer } from "@/components/Footer";
import { Calendar, User, ArrowRight } from "lucide-react";

const posts = [
  {
    title: "The Rise of AI-Powered Cyber Attacks",
    excerpt:
      "Exploring how artificial intelligence is being weaponized by threat actors and how to defend against it.",
    author: "Sarah Chen",
    date: "Dec 15, 2024",
    category: "Threat Intelligence",
  },
  {
    title: "Zero Trust Architecture: Implementation Guide",
    excerpt:
      "A comprehensive guide to implementing zero trust security in your organization.",
    author: "Marcus Rodriguez",
    date: "Dec 12, 2024",
    category: "Best Practices",
  },
  {
    title: "Cloud Security: Top 10 Mistakes to Avoid",
    excerpt:
      "Common cloud security pitfalls and how to prevent them in your infrastructure.",
    author: "Emily Thompson",
    date: "Dec 10, 2024",
    category: "Cloud Security",
  },
  {
    title: "Ransomware Defense Strategies for 2024",
    excerpt:
      "Latest ransomware trends and effective defense mechanisms for organizations.",
    author: "Sarah Chen",
    date: "Dec 8, 2024",
    category: "Threat Intelligence",
  },
  {
    title: "The Future of Quantum Cryptography",
    excerpt:
      "How quantum computing will revolutionize data encryption and security.",
    author: "Marcus Rodriguez",
    date: "Dec 5, 2024",
    category: "Innovation",
  },
  {
    title: "Insider Threats: Detection and Prevention",
    excerpt:
      "Strategies for identifying and mitigating security risks from within your organization.",
    author: "Emily Thompson",
    date: "Dec 3, 2024",
    category: "Security Operations",
  },
];

const Blog = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <main className="pt-32 pb-20">
        <div className="container mx-auto px-4">
          {/* Hero */}
          <div className="max-w-4xl mx-auto text-center mb-20 space-y-6">
            <h1 className="text-5xl md:text-6xl font-bold">
              <span className="text-glow">Security</span>
              <br />
              <span className="bg-gradient-to-r from-primary to-cyber-red-glow bg-clip-text text-transparent">
                Insights
              </span>
            </h1>
            <p className="text-xl text-muted-foreground">
              Latest trends, best practices, and expert analysis in cyber
              security
            </p>
          </div>

          {/* Featured Post */}
          <div className="mb-16">
            <div className="cyber-border rounded-lg p-12 glass hover-lift hover-glow transition-all cursor-pointer">
              <div className="flex items-center gap-4 mb-4 text-sm text-muted-foreground">
                <span className="px-3 py-1 rounded-full bg-primary/10 text-primary">
                  Featured
                </span>
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  {posts[0].date}
                </div>
                <div className="flex items-center gap-2">
                  <User className="w-4 h-4" />
                  {posts[0].author}
                </div>
              </div>
              <h2 className="text-4xl font-bold mb-4 hover:text-primary transition-colors">
                {posts[0].title}
              </h2>
              <p className="text-xl text-muted-foreground mb-6">
                {posts[0].excerpt}
              </p>
              <button className="flex items-center gap-2 text-primary font-semibold hover:gap-4 transition-all">
                Read More <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Blog Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {posts.slice(1).map((post, index) => (
              <div
                key={index}
                className="cyber-border rounded-lg p-6 glass hover-lift hover-glow transition-all cursor-pointer scan-line"
              >
                <div className="mb-4">
                  <span className="text-xs px-3 py-1 rounded-full bg-primary/10 text-primary">
                    {post.category}
                  </span>
                </div>
                <h3 className="text-xl font-bold mb-3 hover:text-primary transition-colors">
                  {post.title}
                </h3>
                <p className="text-muted-foreground mb-4 line-clamp-3">
                  {post.excerpt}
                </p>
                <div className="flex items-center gap-4 text-sm text-muted-foreground pt-4 border-t border-border/20">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-3 h-3" />
                    {post.date}
                  </div>
                  <div className="flex items-center gap-2">
                    <User className="w-3 h-3" />
                    {post.author}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Blog;
