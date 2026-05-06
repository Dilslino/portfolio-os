import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cn } from "@/lib/utils";

type Props = React.ButtonHTMLAttributes<HTMLButtonElement> & { asChild?: boolean; variant?: "primary"|"ghost"|"outline"; size?:"sm"|"md" };
export function Button({className,asChild,variant="primary",size="md",...props}:Props){
 const Comp=asChild?Slot:"button";
 return <Comp className={cn("inline-flex items-center justify-center rounded-xl font-medium transition outline-none focus-visible:ring-2 focus-visible:ring-accent/60 disabled:opacity-50", size==="sm"?"h-9 px-3 text-sm":"h-11 px-4", variant==="primary"&&"bg-foreground text-background hover:opacity-90", variant==="ghost"&&"hover:bg-foreground/5 text-foreground", variant==="outline"&&"border border-border bg-surface/60 hover:bg-foreground/5", className)} {...props}/>;
}
