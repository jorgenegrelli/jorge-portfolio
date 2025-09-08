'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

const navItems = [
  { href: '/', label: 'Home' },
  { href: '/projetos', label: 'Projetos' },
  { href: '/sobre', label: 'Sobre' },
  { href: '/blog', label: 'Blog' },
  { href: '/contato', label: 'Contato' },
];

export function Navigation() {
  const pathname = usePathname();

  return (
    <nav className="flex items-center space-x-8">
      {navItems.map((item) => {
        const isActive = pathname === item.href;
        
        return (
          <Link
            key={item.href}
            href={item.href}
            className={cn(
              'relative px-3 py-2 text-sm font-medium transition-colors hover:text-primary',
              isActive ? 'text-primary' : 'text-muted-foreground'
            )}
          >
            {isActive && (
              <motion.div
                className="absolute inset-0 bg-primary/10 rounded-md"
                layoutId="navbar"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{
                  type: 'spring',
                  stiffness: 400,
                  damping: 30,
                }}
              />
            )}
            <span className="relative z-10">{item.label}</span>
          </Link>
        );
      })}
    </nav>
  );
}