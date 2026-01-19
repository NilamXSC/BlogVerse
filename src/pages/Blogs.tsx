import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Search, Filter, TrendingUp } from "lucide-react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { BentoCard, BentoGrid } from "@/components/ui/bento-card";
import { BlogCardSkeleton } from "@/components/ui/skeleton-loader";

import avatarSarah from "@/assets/avatars/avatar-sarah.jpg";
import avatarMarcus from "@/assets/avatars/avatar-marcus.jpg";
import avatarEmma from "@/assets/avatars/avatar-emma.jpg";
import avatarAlex from "@/assets/avatars/avatar-alex.jpg";
import avatarDavid from "@/assets/avatars/avatar-david.jpg";
import avatarAisha from "@/assets/avatars/avatar-aisha.jpg";

const mockBlogs = [
  {
    id: 1,
    title: "The Art of Mindful Coding",
    excerpt: "How to write better code by being present and focused in your development process.",
    author: "Sarah Chen",
    avatar: avatarSarah,
    date: "Jan 15, 2024",
    readTime: "5 min read",
    reactions: { "❤️": 234, "🔥": 89 },
    tags: ["Productivity", "Coding"],
  },
  {
    id: 2,
    title: "Building Products That Matter",
    excerpt: "Lessons from 10 years of startup experience and what truly makes products successful.",
    author: "Marcus Johnson",
    avatar: avatarMarcus,
    date: "Jan 12, 2024",
    readTime: "8 min read",
    reactions: { "❤️": 567, "💡": 234 },
    tags: ["Startups", "Product"],
  },
  {
    id: 3,
    title: "The Future of Web Development",
    excerpt: "Exploring emerging technologies and trends that will shape how we build for the web.",
    author: "Emma Watson",
    avatar: avatarEmma,
    date: "Jan 10, 2024",
    readTime: "6 min read",
    reactions: { "❤️": 432, "🤯": 187 },
    tags: ["Tech", "Future"],
  },
  {
    id: 4,
    title: "Designing for Accessibility",
    excerpt: "Making the web inclusive for everyone through thoughtful design choices.",
    author: "Alex Rivera",
    avatar: avatarAlex,
    date: "Jan 8, 2024",
    readTime: "7 min read",
    reactions: { "❤️": 345, "🙌": 156 },
    tags: ["Design", "A11y"],
  },
  {
    id: 5,
    title: "Mastering TypeScript",
    excerpt: "Advanced patterns and techniques for building type-safe applications.",
    author: "David Kim",
    avatar: avatarDavid,
    date: "Jan 5, 2024",
    readTime: "10 min read",
    reactions: { "❤️": 678, "🚀": 234 },
    tags: ["TypeScript", "Coding"],
  },
  {
    id: 6,
    title: "The Psychology of UX",
    excerpt: "Understanding user behavior to create more intuitive interfaces.",
    author: "Aisha Patel",
    avatar: avatarAisha,
    date: "Jan 3, 2024",
    readTime: "9 min read",
    reactions: { "❤️": 456, "🧠": 189 },
    tags: ["UX", "Psychology"],
  },
];

const Blogs = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1500);
    return () => clearTimeout(timer);
  }, []);

  const filteredBlogs = mockBlogs.filter(
    (blog) =>
      blog.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      blog.author.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          {/* Page Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-2xl mx-auto mb-12"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Explore Stories
            </h1>
            <p className="text-muted-foreground text-lg">
              Discover inspiring content from creators around the world
            </p>
          </motion.div>

          {/* Search & Filters */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="flex flex-col sm:flex-row gap-4 mb-8 max-w-2xl mx-auto"
          >
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
              <Input
                placeholder="Search blogs or authors..."
                className="pl-10"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            <Button variant="secondary" className="gap-2">
              <Filter className="w-4 h-4" />
              Filters
            </Button>
            <Button variant="secondary" className="gap-2">
              <TrendingUp className="w-4 h-4" />
              Trending
            </Button>
          </motion.div>

          {/* Blog Grid */}
          {isLoading ? (
            <BentoGrid className="grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
              {Array.from({ length: 6 }).map((_, i) => (
                <BlogCardSkeleton key={i} />
              ))}
            </BentoGrid>
          ) : (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              <BentoGrid className="grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                {filteredBlogs.map((blog, index) => (
                  <motion.div
                    key={blog.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <BentoCard className="h-full cursor-pointer group">
                      {/* Tags */}
                      <div className="flex gap-2 mb-4">
                        {blog.tags.map((tag) => (
                          <span
                            key={tag}
                            className="px-2 py-1 text-xs font-medium rounded-full bg-primary/10 text-primary"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>

                      {/* Title */}
                      <h2 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                        {blog.title}
                      </h2>
                      
                      {/* Excerpt */}
                      <p className="text-muted-foreground mb-4 line-clamp-2">
                        {blog.excerpt}
                      </p>

                      {/* Reactions */}
                      <div className="flex gap-2 mb-4">
                        {Object.entries(blog.reactions).map(([emoji, count]) => (
                          <span
                            key={emoji}
                            className="inline-flex items-center gap-1 text-sm text-muted-foreground"
                          >
                            <span>{emoji}</span>
                            <span>{count}</span>
                          </span>
                        ))}
                      </div>

                      {/* Author */}
                      <div className="flex items-center gap-3 pt-4 border-t border-border">
                        <img 
                          src={blog.avatar}
                          alt={blog.author}
                          className="w-10 h-10 rounded-full object-cover ring-2 ring-primary/20"
                        />
                        <div className="flex-1">
                          <p className="font-medium text-sm">{blog.author}</p>
                          <p className="text-xs text-muted-foreground">
                            {blog.date} · {blog.readTime}
                          </p>
                        </div>
                      </div>
                    </BentoCard>
                  </motion.div>
                ))}
              </BentoGrid>
            </motion.div>
          )}

          {/* Empty State */}
          {!isLoading && filteredBlogs.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-16"
            >
              <Search className="w-16 h-16 mx-auto mb-4 text-muted-foreground" />
              <h3 className="text-xl font-semibold mb-2">No blogs found</h3>
              <p className="text-muted-foreground">
                Try adjusting your search or explore different topics
              </p>
            </motion.div>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Blogs;
