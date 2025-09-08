'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { Navigation } from './navigation';
import { SimpleThemeToggle } from './simple-theme-toggle';

export function Header() {
  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <Link href="/" className="font-bold text-xl">
            <span className="text-primary">Jorge</span>
            <span className="text-foreground"> Negrelli</span>
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            <Navigation />
            <SimpleThemeToggle />
          </div>

          <div className="md:hidden">
            <SimpleThemeToggle />
          </div>
        </div>
      </div>
    </motion.header>
  );
}