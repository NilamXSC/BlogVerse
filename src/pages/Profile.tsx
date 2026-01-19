import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { 
  Settings, 
  Edit3, 
  BookOpen, 
  Heart, 
  MessageCircle, 
  Bookmark,
  TrendingUp,
  Calendar,
  MapPin
} from "lucide-react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { BentoCard, BentoGrid } from "@/components/ui/bento-card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ProfileCardSkeleton, BlogCardSkeleton } from "@/components/ui/skeleton-loader";

import avatarAlex from "@/assets/avatars/avatar-alex.jpg";

const mockProfile = {
  name: "Alex Johnson",
  avatar: avatarAlex,
  bio: "Full-stack developer & tech writer. Passionate about building beautiful, accessible web experiences.",
  location: "San Francisco, CA",
  joinedDate: "January 2023",
  badges: ["Top Writer", "Early Adopter", "Consistent Creator"],
  stats: {
    posts: 42,
    followers: 1234,
    following: 567,
    reactions: 8900,
  },
};

const mockPosts = [
  {
    id: 1,
    title: "Building Accessible React Components",
    date: "Jan 15, 2024",
    reactions: { "❤️": 234, "🔥": 89 },
  },
  {
    id: 2,
    title: "The Future of TypeScript",
    date: "Jan 10, 2024",
    reactions: { "❤️": 456, "💡": 123 },
  },
  {
    id: 3,
    title: "My Journey into Open Source",
    date: "Jan 5, 2024",
    reactions: { "❤️": 789, "🚀": 234 },
  },
];

const Profile = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1500);
    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <main className="pt-24 pb-16">
          <div className="container mx-auto px-4 max-w-4xl">
            <ProfileCardSkeleton />
            <div className="mt-8 grid gap-4">
              {Array.from({ length: 3 }).map((_, i) => (
                <BlogCardSkeleton key={i} />
              ))}
            </div>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4 max-w-4xl">
          {/* Profile Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <BentoCard size="lg" className="relative overflow-visible">
              {/* Actions */}
              <div className="absolute top-6 right-6 flex gap-2">
                <Button variant="ghost" size="icon">
                  <Settings className="w-5 h-5" />
                </Button>
                <Button variant="secondary" size="sm" className="gap-2">
                  <Edit3 className="w-4 h-4" />
                  Edit Profile
                </Button>
              </div>

              {/* Avatar & Info */}
              <div className="flex flex-col md:flex-row gap-6 items-center md:items-start">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="relative"
                >
                  <img 
                    src={mockProfile.avatar}
                    alt={mockProfile.name}
                    className="w-24 h-24 rounded-full object-cover ring-4 ring-primary/20"
                  />
                </motion.div>
                <div className="flex-1 text-center md:text-left">
                  <h1 className="text-2xl font-bold mb-2">{mockProfile.name}</h1>
                  <p className="text-muted-foreground mb-4 max-w-md">{mockProfile.bio}</p>
                  
                  {/* Meta */}
                  <div className="flex flex-wrap justify-center md:justify-start gap-4 text-sm text-muted-foreground mb-4">
                    <span className="flex items-center gap-1">
                      <MapPin className="w-4 h-4" />
                      {mockProfile.location}
                    </span>
                    <span className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      Joined {mockProfile.joinedDate}
                    </span>
                  </div>

                  {/* Badges */}
                  <div className="flex flex-wrap justify-center md:justify-start gap-2">
                    {mockProfile.badges.map((badge) => (
                      <span
                        key={badge}
                        className="px-3 py-1 rounded-full bg-primary/10 text-sm font-medium"
                      >
                        {badge}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8 pt-6 border-t border-border">
                {[
                  { label: "Posts", value: mockProfile.stats.posts, icon: BookOpen },
                  { label: "Followers", value: mockProfile.stats.followers.toLocaleString(), icon: Heart },
                  { label: "Following", value: mockProfile.stats.following, icon: TrendingUp },
                  { label: "Reactions", value: mockProfile.stats.reactions.toLocaleString(), icon: MessageCircle },
                ].map((stat) => (
                  <div key={stat.label} className="text-center">
                    <div className="text-2xl font-bold">{stat.value}</div>
                    <div className="text-sm text-muted-foreground flex items-center justify-center gap-1">
                      <stat.icon className="w-4 h-4" />
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </BentoCard>
          </motion.div>

          {/* Tabs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="mt-8"
          >
            <Tabs defaultValue="blogs" className="w-full">
              <TabsList className="w-full justify-start bg-card border border-border p-1">
                <TabsTrigger value="blogs" className="gap-2">
                  <BookOpen className="w-4 h-4" />
                  Blogs
                </TabsTrigger>
                <TabsTrigger value="reactions" className="gap-2">
                  <Heart className="w-4 h-4" />
                  Reactions
                </TabsTrigger>
                <TabsTrigger value="comments" className="gap-2">
                  <MessageCircle className="w-4 h-4" />
                  Comments
                </TabsTrigger>
                <TabsTrigger value="saved" className="gap-2">
                  <Bookmark className="w-4 h-4" />
                  Saved
                </TabsTrigger>
              </TabsList>

              <TabsContent value="blogs" className="mt-6">
                <BentoGrid className="grid-cols-1">
                  {mockPosts.map((post, index) => (
                    <motion.div
                      key={post.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <BentoCard className="flex flex-col md:flex-row md:items-center gap-4 cursor-pointer group">
                        <div className="flex-1">
                          <h3 className="font-semibold group-hover:text-primary transition-colors">
                            {post.title}
                          </h3>
                          <p className="text-sm text-muted-foreground">{post.date}</p>
                        </div>
                        <div className="flex gap-3">
                          {Object.entries(post.reactions).map(([emoji, count]) => (
                            <span
                              key={emoji}
                              className="inline-flex items-center gap-1 text-sm text-muted-foreground"
                            >
                              <span>{emoji}</span>
                              <span>{count}</span>
                            </span>
                          ))}
                        </div>
                      </BentoCard>
                    </motion.div>
                  ))}
                </BentoGrid>
              </TabsContent>

              <TabsContent value="reactions" className="mt-6">
                <div className="text-center py-12">
                  <Heart className="w-12 h-12 mx-auto mb-4 text-muted-foreground" />
                  <p className="text-muted-foreground">Your reaction history will appear here</p>
                </div>
              </TabsContent>

              <TabsContent value="comments" className="mt-6">
                <div className="text-center py-12">
                  <MessageCircle className="w-12 h-12 mx-auto mb-4 text-muted-foreground" />
                  <p className="text-muted-foreground">Your comments will appear here</p>
                </div>
              </TabsContent>

              <TabsContent value="saved" className="mt-6">
                <div className="text-center py-12">
                  <Bookmark className="w-12 h-12 mx-auto mb-4 text-muted-foreground" />
                  <p className="text-muted-foreground">Your saved posts will appear here</p>
                </div>
              </TabsContent>
            </Tabs>
          </motion.div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Profile;
