'use client';

import React, { ElementType, useState } from 'react';
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import { ChevronDown } from 'lucide-react';

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export interface FeatureCardProps {
  Icon: ElementType;
  title: string;
  description: string;
  className?: string;
}

export const FeatureCard = React.forwardRef<HTMLDivElement, FeatureCardProps>(
  ({ Icon, title, description, className }, ref) => {
    const titleId = React.useId();
    const [isOpen, setIsOpen] = useState(false);

    return (
      <div
        ref={ref}
        onClick={() => setIsOpen(!isOpen)}
        className={cn(
          "problem-card group flex flex-col p-5 md:p-6 rounded-2xl border border-white/5 bg-white/5 shadow-lg backdrop-blur-lg transition-all duration-300 ease-in-out md:hover:scale-105 md:hover:border-violet-500/20 md:hover:bg-white/10 dark:bg-black/30 md:dark:hover:bg-black/50 cursor-pointer md:cursor-default overflow-hidden",
          className
        )}
        aria-labelledby={titleId}
      >
        {/* ── MOBILE LAYOUT (Acordeón) ── */}
        <div className="flex w-full items-center justify-between md:hidden gap-4">
          <div className="flex items-center gap-4">
            <div className="flex shrink-0 h-10 w-10 items-center justify-center rounded-lg border border-violet-500/20 bg-violet-600/10 text-violet-400">
              <Icon className="h-5 w-5" aria-hidden="true" />
            </div>
            <h3 className="text-[15px] font-bold leading-tight tracking-tight text-white text-left italic uppercase">
              {title}
            </h3>
          </div>
          <ChevronDown className={cn("h-5 w-5 shrink-0 text-violet-500/60 transition-transform duration-300", isOpen ? "rotate-180" : "rotate-0")} />
        </div>

        <div 
          className={cn(
            "grid transition-all duration-300 ease-in-out md:hidden w-full",
            isOpen ? "grid-rows-[1fr] opacity-100 mt-4" : "grid-rows-[0fr] opacity-0"
          )}
        >
          <div className="overflow-hidden">
            <p className="text-sm text-neutral-400 italic font-medium leading-relaxed pb-1">
              {description}
            </p>
          </div>
        </div>

        {/* ── DESKTOP LAYOUT (Estructura Original Intacta) ── */}
        <div className="hidden md:flex flex-col items-start gap-4 pl-1">
          <div className="flex h-12 w-12 items-center justify-center rounded-lg border border-violet-500/20 bg-violet-600/10 text-violet-400 group-hover:bg-violet-600/20 transition-colors">
            <Icon className="h-6 w-6" aria-hidden="true" />
          </div>
          <div className="flex flex-col">
            <h3 id={titleId} className="text-lg font-bold leading-none tracking-tight text-white group-hover:text-violet-200 transition-colors duration-300">
              {title}
            </h3>
            <p className="mt-2 text-sm text-neutral-400 italic group-hover:text-neutral-300 transition-colors duration-300">
              {description}
            </p>
          </div>
        </div>
      </div>
    );
  }
);
FeatureCard.displayName = "FeatureCard";

export interface FeatureGridProps extends React.HTMLAttributes<HTMLElement> {
  sectionTitle: string;
  sectionDescription?: string;
  features?: FeatureCardProps[];
}

export const FeatureGrid = React.forwardRef<HTMLElement, FeatureGridProps>(
  ({ sectionTitle, sectionDescription, features = [], className, ...props }, ref) => {
    const titleId = React.useId();

    return (
      <section
        ref={ref}
        className={cn("py-24 px-6 max-w-6xl mx-auto border-t border-white/5 relative z-10 w-full", className)}
        aria-labelledby={titleId}
        {...props}
      >
        <div className="mb-14 max-w-3xl">
          {sectionTitle && (
            <h2 id={titleId} className="text-2xl font-black text-white uppercase tracking-tighter mb-6 border-l-4 border-violet-600 pl-6 italic">
              {sectionTitle}
            </h2>
          )}
          {sectionDescription && (
             <p className="mt-4 text-neutral-400 md:text-xl italic pl-6">
                {sectionDescription}
             </p>
          )}
        </div>
        <div className="mt-12 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, index) => (
            <FeatureCard key={index} {...feature} />
          ))}
        </div>
      </section>
    );
  }
);
FeatureGrid.displayName = "FeatureGrid";
