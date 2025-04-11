import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary-700 active:bg-primary-800",
        destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90 active:bg-destructive/100",
        outline:
          "border border-input bg-background hover:bg-accent/10 hover:text-accent-foreground active:bg-accent/20",
        secondary: "bg-secondary text-secondary-foreground hover:bg-secondary-400 active:bg-secondary-500",
        ghost: "hover:bg-accent/10 hover:text-accent-foreground active:bg-accent/20",
        link: "text-primary underline-offset-4 hover:underline",
        accent: "bg-accent text-accent-foreground hover:bg-accent-600 active:bg-accent-700",
        success: "bg-success-500 text-white hover:bg-success-600 active:bg-success-700",
        warning: "bg-warning-500 text-white hover:bg-warning-600 active:bg-warning-700",
        info: "bg-info-500 text-white hover:bg-info-600 active:bg-info-700",
        error: "bg-error-500 text-white hover:bg-error-600 active:bg-error-700",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8",
        icon: "h-10 w-10",
        xs: "h-8 rounded-md px-2.5 text-xs",
        xl: "h-12 rounded-md px-10 text-base",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return <Comp className={cn(buttonVariants({ variant, size, className }))} ref={ref} {...props} />
  },
)
Button.displayName = "Button"

export { Button, buttonVariants }
