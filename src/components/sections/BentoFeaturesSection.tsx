import { motion } from "framer-motion";
import { 
  PenSquare, 
  Heart, 
  MessageCircle, 
  User, 
  Shield, 
  Zap,
  Sparkles,
  Bookmark,
  TrendingUp
} from "lucide-react";
import { BentoCard, BentoGrid } from "@/components/ui/bento-card";

const features = [
  {
    icon: PenSquare,
    emoji: "✍️",
    title: "Write Blogs Effortlessly",
    description: "Rich editor with markdown support, image embeds, and code blocks. Your creativity, amplified.",
    color: "from-blue-500/20 to-indigo-500/20",
    span: "md:col-span-2",
  },
  {
    icon: Heart,
    emoji: "😍",
    title: "React with Emotions",
    description: "Express yourself with custom emoji reactions that go beyond simple likes.",
    color: "from-pink-500/20 to-rose-500/20",
    span: "md:col-span-1",
  },
  {
    icon: MessageCircle,
    emoji: "💬",
    title: "Smart Comment System",
    description: "Nested threads, emoji reactions, and real-time updates for meaningful discussions.",
    color: "from-green-500/20 to-emerald-500/20",
    span: "md:col-span-1",
  },
  {
    icon: User,
    emoji: "👤",
    title: "Expressive Profiles",
    description: "Showcase your personality with emoji badges, stats, and curated content.",
    color: "from-purple-500/20 to-violet-500/20",
    span: "md:col-span-1",
  },
  {
    icon: Shield,
    emoji: "🔐",
    title: "Secure Google Login",
    description: "One-click authentication with enterprise-grade security. Your data stays safe.",
    color: "from-amber-500/20 to-orange-500/20",
    span: "md:col-span-1",
  },
  {
    icon: Zap,
    emoji: "🚀",
    title: "Lightning-Fast Experience",
    description: "Optimized for speed with skeleton loading, lazy content, and smooth animations.",
    color: "from-cyan-500/20 to-teal-500/20",
    span: "md:col-span-2",
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

export const BentoFeaturesSection = () => {
  return (
    <section className="py-24 md:py-32 bg-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,_var(--tw-gradient-stops))] from-primary/5 via-transparent to-transparent" />
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-card border border-border mb-4">
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium">Features</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Everything You Need to <span className="text-primary">Create</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            A complete toolkit for modern bloggers. Write, engage, and grow your audience.
          </p>
        </motion.div>

        {/* Bento Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <BentoGrid className="grid-cols-1 md:grid-cols-3 lg:grid-cols-4">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                variants={itemVariants}
                className={feature.span}
              >
                <BentoCard className="h-full group">
                  <div className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                  <div className="relative z-10">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                        <span className="text-2xl">{feature.emoji}</span>
                      </div>
                    </div>
                    <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                    <p className="text-muted-foreground">{feature.description}</p>
                  </div>
                </BentoCard>
              </motion.div>
            ))}
          </BentoGrid>
        </motion.div>

        {/* Additional small features */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="flex flex-wrap justify-center gap-4 mt-12"
        >
          {[
            { icon: Bookmark, label: "Save for later" },
            { icon: TrendingUp, label: "Analytics" },
            { icon: Sparkles, label: "AI Suggestions" },
          ].map((item) => (
            <div
              key={item.label}
              className="flex items-center gap-2 px-4 py-2 rounded-full bg-card border border-border"
            >
              <item.icon className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium">{item.label}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
