'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { navItems } from '@/config/nav';
import { cn } from '@/lib/utils';

import { Button } from '../ui/button';

type DashboardNavProps = {
  onClose?: () => void;
};

const DashboardNav = ({ onClose }: DashboardNavProps) => {
  const pathname = usePathname();
  const isActive = (path: string) => pathname === path;

  const handleClick = () => onClose && onClose();

  return (
    <nav className="grid items-start gap-2">
      {navItems.map((item) => (
        <Button
          key={item.href}
          variant={isActive(item.href) ? 'secondary' : 'ghost'}
          className={cn('justify-start', isActive(item.href) && 'bg-accent')}
          asChild
        >
          <Link href={item.href} onClick={handleClick}>
            {item.icon && <item.icon className="mr-2 h-4 w-4" />}
            {item.title}
          </Link>
        </Button>
      ))}
    </nav>
  );
};

export default DashboardNav;
