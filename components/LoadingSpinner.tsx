import { cn } from "@/lib/utils"

interface LoadingSpinnerProps {
  size?: "sm" | "md" | "lg"
  message?: string
  className?: string
  showMessage?: boolean
}

export function LoadingSpinner({
  size = "md",
  message = "Loading...",
  className,
  showMessage = true
}: LoadingSpinnerProps) {
  const sizeClasses = {
    sm: "size-4 border-2",
    md: "size-6 border-2",
    lg: "size-8 border-[3px]"
  }

  const containerPadding = {
    sm: "min-h-[60px]",
    md: "min-h-[80px]",
    lg: "min-h-[100px]"
  }

  return (
    <div
      className={cn(
        "flex flex-col items-center justify-center",
        containerPadding[size],
        className
      )}
    > 
      <div
        className={cn(
          "border-muted-foregroung/20 border-t-primary rounded-full animate-spin",
          sizeClasses[size]
        )}
        role="status"
        aria-label="Loading"
      />
        {showMessage && (
          <p className="mt-3 text-sm text-muted-foreground animate-pulse">
            {message}
          </p>
        )}
      </div>
  )
}

export function InlineSpinner({
  size = "sm",
  className
}: {
  size?: "sm" | "md" | "lg"
  className?: string
}) {
  const sizeClasses = {
    sm: "size-4 border-2",
    md: "size-5 border-2",
    lg: "size-6 border-2"
  }

  return (
    <div
      className={cn(
        "border-muted-foreground/20 border-t-primary rounded-full animate-spin",
        sizeClasses[size],
        className
      )}
      role="status"
      aria-label="Loading"
    />
  )
}