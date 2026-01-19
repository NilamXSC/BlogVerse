import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Heart, MessageCircle, Eye } from "lucide-react";
import { Button } from "@/components/ui/button";
import { BentoCard } from "@/components/ui/bento-card";

const featuredBlogs = [
  {
    id: 1,
    title: "The Art of Mindful Coding",
    excerpt: "How to write better code by being present and focused...",
    author: "Sarah Chen",
    avatar: "👩‍💻",
    reactions: { "❤️": 234, "🔥": 89, "👏": 156 },
    views: "12.5K",
    comments: 45,
    gradient: "from-violet-500/20 to-purple-500/20",
  },
  {
    id: 2,
    title: "Building Products That Matter",
    excerpt: "Lessons from 10 years of startup experience...",
    author: "Marcus Johnson",
    avatar: "👨‍🚀",
    reactions: { "❤️": 567, "💡": 234, "🚀": 123 },
    views: "28.3K",
    comments: 89,
    gradient: "from-amber-500/20 to-orange-500/20",
  },
  {
    id: 3,
    title: "The Future of Web Development",
    excerpt: "Exploring emerging technologies and trends...",
    author: "Emma Watson",
    avatar: "👩‍🔬",
    reactions: { "❤️": 432, "🤯": 187, "✨": 298 },
    views: "45.1K",
    comments: 156,
    gradient: "from-cyan-500/20 to-blue-500/20",
  },
  {
    id: 4,
    title: "Designing for Accessibility",
    excerpt: "Making the web inclusive for everyone...",
    author: "Alex Rivera",
    avatar: "🧑‍🎨",
    reactions: { "❤️": 345, "🙌": 156, "💜": 89 },
    views: "19.8K",
    comments: 67,
    gradient: "from-pink-500/20 to-rose-500/20",
  },
];

export const CarouselSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % featuredBlogs.length);
  }, []);

  const prevSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + featuredBlogs.length) % featuredBlogs.length);
  }, []);

  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, [isPaused, nextSlide]);

  return (
    <section className="py-24 md:py-32 bg-card/50 relative overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-12"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Trending Stories 🔥
          </h2>
          <p className="text-muted-foreground text-lg">
            Discover what the community is reading and loving right now
          </p>
        </motion.div>

        {/* Carousel */}
        <div
          className="relative max-w-4xl mx-auto"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* Navigation Buttons */}
          <Button
            variant="glass"
            size="icon"
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-12 z-20"
            onClick={prevSlide}
          >
            <ChevronLeft className="w-5 h-5" />
          </Button>
          <Button
            variant="glass"
            size="icon"
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-12 z-20"
            onClick={nextSlide}
          >
            <ChevronRight className="w-5 h-5" />
          </Button>

          {/* Slides */}
          <div className="overflow-hidden rounded-2xl">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
              >
                <BentoCard size="xl" hover={false} className="relative overflow-hidden">
                  <div className={`absolute inset-0 bg-gradient-to-br ${featuredBlogs[currentIndex].gradient}`} />
                  
                  <div className="relative z-10 flex flex-col md:flex-row gap-6 md:gap-8">
                    {/* Content */}
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-4">
                        <span className="text-4xl">{featuredBlogs[currentIndex].avatar}</span>
                        <div>
                          <p className="font-semibold">{featuredBlogs[currentIndex].author}</p>
                          <p className="text-sm text-muted-foreground">Top Writer</p>
                        </div>
                      </div>
                      
                      <h3 className="text-2xl md:text-3xl font-bold mb-3">
                        {featuredBlogs[currentIndex].title}
                      </h3>
                      <p className="text-muted-foreground text-lg mb-6">
                        {featuredBlogs[currentIndex].excerpt}
                      </p>

                      {/* Reactions */}
                      <div className="flex flex-wrap items-center gap-3 mb-6">
                        {Object.entries(featuredBlogs[currentIndex].reactions).map(([emoji, count]) => (
                          <span
                            key={emoji}
                            className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-background/50 backdrop-blur-sm text-sm"
                          >
                            <span>{emoji}</span>
                            <span className="font-medium">{count}</span>
                          </span>
                        ))}
                      </div>

                      {/* Stats */}
                      <div className="flex items-center gap-6 text-sm text-muted-foreground">
                        <span className="flex items-center gap-1">
                          <Eye className="w-4 h-4" />
                          {featuredBlogs[currentIndex].views} views
                        </span>
                        <span className="flex items-center gap-1">
                          <MessageCircle className="w-4 h-4" />
                          {featuredBlogs[currentIndex].comments} comments
                        </span>
                      </div>
                    </div>

                    {/* Read Button */}
                    <div className="flex items-center">
                      <Button variant="hero" size="lg">
                        Read Story
                      </Button>
                    </div>
                  </div>
                </BentoCard>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Dots */}
          <div className="flex justify-center gap-2 mt-6">
            {featuredBlogs.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? "w-8 bg-primary"
                    : "bg-muted-foreground/30 hover:bg-muted-foreground/50"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
