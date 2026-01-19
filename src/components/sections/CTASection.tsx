import { motion } from "framer-motion";
import { ArrowRight, Chrome } from "lucide-react";
import { Button } from "@/components/ui/button";

export const CTASection = () => {
  return (
    <section className="py-24 md:py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-secondary/5 to-background" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/10 via-transparent to-transparent" />
      
      {/* Decorative elements */}
      <motion.div
        animate={{ 
          rotate: 360,
          scale: [1, 1.1, 1],
        }}
        transition={{ 
          rotate: { duration: 20, repeat: Infinity, ease: "linear" },
          scale: { duration: 5, repeat: Infinity, ease: "easeInOut" }
        }}
        className="absolute top-1/4 left-10 w-32 h-32 rounded-full border border-primary/20 opacity-50"
      />
      <motion.div
        animate={{ 
          rotate: -360,
          scale: [1, 1.2, 1],
        }}
        transition={{ 
          rotate: { duration: 25, repeat: Infinity, ease: "linear" },
          scale: { duration: 7, repeat: Infinity, ease: "easeInOut" }
        }}
        className="absolute bottom-1/4 right-10 w-48 h-48 rounded-full border border-secondary/20 opacity-50"
      />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto text-center"
        >
          {/* Emoji decoration */}
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
            className="text-6xl mb-6"
          >
            🚀
          </motion.div>

          <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6">
            Ready to Start Your
            <span className="block bg-gradient-to-r from-primary via-secondary to-muted-foreground bg-clip-text text-transparent">
              Creative Journey?
            </span>
          </h2>

          <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-xl mx-auto">
            Join thousands of creators sharing their stories. 
            One click to sign in, infinite possibilities to explore.
          </p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Button variant="hero" size="xl" className="gap-3 group">
              <Chrome className="w-5 h-5" />
              Sign in with Google
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </motion.div>

          {/* Trust badges */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="flex flex-wrap justify-center gap-6 mt-10 text-sm text-muted-foreground"
          >
            <span className="flex items-center gap-2">
              <span className="text-lg">🔐</span>
              Secure & Private
            </span>
            <span className="flex items-center gap-2">
              <span className="text-lg">⚡</span>
              Lightning Fast
            </span>
            <span className="flex items-center gap-2">
              <span className="text-lg">💚</span>
              Free to Start
            </span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
