import { useState } from "react";
import { motion } from "framer-motion";
import { 
  Bold, 
  Italic, 
  Code, 
  Image, 
  Link, 
  List,
  ListOrdered,
  Quote,
  Heading1,
  Heading2,
  Save,
  Send,
  Sparkles
} from "lucide-react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { BentoCard } from "@/components/ui/bento-card";

const toolbarItems = [
  { icon: Bold, label: "Bold" },
  { icon: Italic, label: "Italic" },
  { icon: Code, label: "Code" },
  { icon: Heading1, label: "H1" },
  { icon: Heading2, label: "H2" },
  { icon: List, label: "List" },
  { icon: ListOrdered, label: "Ordered List" },
  { icon: Quote, label: "Quote" },
  { icon: Image, label: "Image" },
  { icon: Link, label: "Link" },
];

const Write = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [tags, setTags] = useState<string[]>([]);
  const [tagInput, setTagInput] = useState("");

  const addTag = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && tagInput.trim()) {
      e.preventDefault();
      if (!tags.includes(tagInput.trim())) {
        setTags([...tags, tagInput.trim()]);
      }
      setTagInput("");
    }
  };

  const removeTag = (tagToRemove: string) => {
    setTags(tags.filter((tag) => tag !== tagToRemove));
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4 max-w-4xl">
          {/* Page Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-8"
          >
            <h1 className="text-3xl md:text-4xl font-bold mb-2 flex items-center gap-3">
              <Sparkles className="w-8 h-8 text-primary" />
              Write Your Story
            </h1>
            <p className="text-muted-foreground">
              Share your thoughts with the world. Your voice matters.
            </p>
          </motion.div>

          {/* Editor */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            <BentoCard size="lg" className="space-y-6">
              {/* Title */}
              <div>
                <Input
                  placeholder="Your amazing title..."
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  className="text-2xl font-bold border-none bg-transparent px-0 focus-visible:ring-0 placeholder:text-muted-foreground/50"
                />
              </div>

              {/* Tags */}
              <div>
                <div className="flex flex-wrap gap-2 mb-2">
                  {tags.map((tag) => (
                    <span
                      key={tag}
                      className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm cursor-pointer hover:bg-primary/20 transition-colors"
                      onClick={() => removeTag(tag)}
                    >
                      #{tag}
                      <span className="text-xs">×</span>
                    </span>
                  ))}
                </div>
                <Input
                  placeholder="Add tags (press Enter)..."
                  value={tagInput}
                  onChange={(e) => setTagInput(e.target.value)}
                  onKeyDown={addTag}
                  className="border-none bg-transparent px-0 focus-visible:ring-0 placeholder:text-muted-foreground/50"
                />
              </div>

              {/* Toolbar */}
              <div className="flex flex-wrap gap-1 p-2 rounded-lg bg-muted/50 border border-border">
                {toolbarItems.map((item) => (
                  <Button
                    key={item.label}
                    variant="ghost"
                    size="sm"
                    className="h-8 w-8 p-0"
                    title={item.label}
                  >
                    <item.icon className="w-4 h-4" />
                  </Button>
                ))}
              </div>

              {/* Content */}
              <Textarea
                placeholder="Start writing your story... ✨

You can use:
• **bold** and *italic* text
• `code blocks` for technical content
• > quotes for emphasis
• Lists and numbered items

Let your creativity flow!"
                value={content}
                onChange={(e) => setContent(e.target.value)}
                className="min-h-[400px] border-none bg-transparent px-0 focus-visible:ring-0 resize-none placeholder:text-muted-foreground/50"
              />

              {/* Actions */}
              <div className="flex flex-col sm:flex-row gap-3 pt-4 border-t border-border">
                <Button variant="secondary" className="gap-2">
                  <Save className="w-4 h-4" />
                  Save Draft
                </Button>
                <Button variant="hero" className="gap-2 flex-1 sm:flex-none">
                  <Send className="w-4 h-4" />
                  Publish Story
                </Button>
              </div>
            </BentoCard>
          </motion.div>

          {/* Tips */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mt-8"
          >
            <BentoCard>
              <h3 className="font-semibold mb-3 flex items-center gap-2">
                <span className="text-xl">💡</span>
                Writing Tips
              </h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• Start with a hook that grabs attention</li>
                <li>• Use short paragraphs for better readability</li>
                <li>• Add relevant tags to help readers discover your content</li>
                <li>• Proofread before publishing</li>
              </ul>
            </BentoCard>
          </motion.div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Write;
