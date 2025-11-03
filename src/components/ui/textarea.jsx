import * as React from "react";
import { cva } from "class-variance-authority";
import { cn } from "../../lib/utils";

const textareaVariants = cva(
  "flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm shadow-sm placeholder:text-muted-foreground focus-visible:outline-none peer-disabled:cursor-not-allowed peer-disabled:opacity-50 resize-none"
);

const Textarea = React.forwardRef(({ className, ...props }, ref) => (
  <textarea ref={ref} className={cn(textareaVariants(), className)} {...props} />
));

Textarea.displayName = "Textarea";

export { Textarea };
