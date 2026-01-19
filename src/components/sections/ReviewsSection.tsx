import { motion } from "framer-motion";
import { Star } from "lucide-react";
import { BentoCard, BentoGrid } from "@/components/ui/bento-card";

import avatarJessica from "@/assets/avatars/avatar-jessica.jpg";
import avatarDavid from "@/assets/avatars/avatar-david.jpg";
import avatarAisha from "@/assets/avatars/avatar-aisha.jpg";
import avatarMichael from "@/assets/avatars/avatar-michael.jpg";
import avatarSophie from "@/assets/avatars/avatar-sophie.jpg";
import avatarJames from "@/assets/avatars/avatar-james.jpg";

const reviews = [
  {
    id: 1,
    name: "Jessica Martinez",
    avatar: avatarJessica,
    role: "Tech Blogger",
    rating: 5,
    review: "BlogVerse transformed how I connect with my audience. The reaction system is genius!",
    reactions: ["❤️", "🔥", "✨"],
  },
  {
    id: 2,
    name: "David Kim",
    avatar: avatarDavid,
    role: "Software Engineer",
    rating: 5,
    review: "Finally, a platform that understands developers. The code blocks are beautiful!",
    reactions: ["👏", "🚀", "💡"],
  },
  {
    id: 3,
    name: "Aisha Patel",
    avatar: avatarAisha,
    role: "Creative Director",
    rating: 5,
    review: "The design is stunning and the writing experience is incredibly smooth. Love it!",
    reactions: ["😍", "💜", "🌟"],
  },
  {
    id: 4,
    name: "Michael Brown",
    avatar: avatarMichael,
    role: "Educator",
    rating: 5,
    review: "My students love reading and engaging with content here. It's modern and intuitive.",
    reactions: ["🙌", "❤️", "📖"],
  },
  {
    id: 5,
    name: "Sophie Chen",
    avatar: avatarSophie,
    role: "Researcher",
    rating: 5,
    review: "Perfect for sharing research insights. The comment threads are incredibly helpful!",
    reactions: ["🤯", "💡", "🧠"],
  },
  {
    id: 6,
    name: "James Wilson",
    avatar: avatarJames,
    role: "Music Critic",
    rating: 5,
    review: "The emoji reactions capture emotions that words can't. Absolutely brilliant!",
    reactions: ["🎸", "❤️", "🔥"],
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

export const ReviewsSection = () => {
  return (
    <section className="py-24 md:py-32 bg-background relative overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Loved by Creators
          </h2>
          <p className="text-muted-foreground text-lg">
            Join thousands of writers who've found their voice on BlogVerse
          </p>
        </motion.div>

        {/* Reviews Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <BentoGrid className="grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {reviews.map((review) => (
              <motion.div key={review.id} variants={itemVariants}>
                <BentoCard className="h-full">
                  {/* Header */}
                  <div className="flex items-center gap-3 mb-4">
                    <img 
                      src={review.avatar} 
                      alt={review.name}
                      className="w-12 h-12 rounded-full object-cover ring-2 ring-primary/20"
                    />
                    <div>
                      <p className="font-semibold">{review.name}</p>
                      <p className="text-sm text-muted-foreground">{review.role}</p>
                    </div>
                  </div>

                  {/* Rating */}
                  <div className="flex gap-1 mb-3">
                    {Array.from({ length: review.rating }).map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                    ))}
                  </div>

                  {/* Review */}
                  <p className="text-foreground mb-4">{review.review}</p>

                  {/* Reactions */}
                  <div className="flex gap-2">
                    {review.reactions.map((emoji, i) => (
                      <span
                        key={i}
                        className="w-8 h-8 rounded-full bg-muted flex items-center justify-center text-lg"
                      >
                        {emoji}
                      </span>
                    ))}
                  </div>
                </BentoCard>
              </motion.div>
            ))}
          </BentoGrid>
        </motion.div>
      </div>
    </section>
  );
};
