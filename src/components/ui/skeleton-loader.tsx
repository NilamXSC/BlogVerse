import { cn } from "@/lib/utils";

interface SkeletonLoaderProps {
  className?: string;
  variant?: "text" | "title" | "avatar" | "card" | "image";
}

export const SkeletonLoader = ({ 
  className, 
  variant = "text" 
}: SkeletonLoaderProps) => {
  const variants = {
    text: "h-4 w-full",
    title: "h-8 w-3/4",
    avatar: "h-12 w-12 rounded-full",
    card: "h-48 w-full rounded-2xl",
    image: "h-64 w-full rounded-xl",
  };

  return (
    <div
      className={cn(
        "animate-pulse bg-gradient-to-r from-muted via-muted/50 to-muted",
        "rounded-md",
        variants[variant],
        className
      )}
    />
  );
};

export const BlogCardSkeleton = () => (
  <div className="p-6 rounded-2xl border border-border bg-card space-y-4">
    <SkeletonLoader variant="image" className="h-40" />
    <SkeletonLoader variant="title" />
    <SkeletonLoader variant="text" className="w-full" />
    <SkeletonLoader variant="text" className="w-2/3" />
    <div className="flex items-center gap-3 pt-2">
      <SkeletonLoader variant="avatar" />
      <div className="space-y-2 flex-1">
        <SkeletonLoader variant="text" className="w-1/3" />
        <SkeletonLoader variant="text" className="w-1/4 h-3" />
      </div>
    </div>
  </div>
);

export const ProfileCardSkeleton = () => (
  <div className="p-8 rounded-2xl border border-border bg-card space-y-6">
    <div className="flex flex-col items-center gap-4">
      <SkeletonLoader variant="avatar" className="h-24 w-24" />
      <SkeletonLoader variant="title" className="w-1/2" />
      <SkeletonLoader variant="text" className="w-3/4" />
    </div>
    <div className="grid grid-cols-3 gap-4">
      <SkeletonLoader variant="card" className="h-20" />
      <SkeletonLoader variant="card" className="h-20" />
      <SkeletonLoader variant="card" className="h-20" />
    </div>
  </div>
);
