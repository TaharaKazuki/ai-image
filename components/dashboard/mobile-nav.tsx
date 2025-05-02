'use client';

import { Menu } from 'lucide-react';
import { useState } from 'react';

import { Button } from '@/components/ui/button';
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';

import DashboardNav from './nav';

const MobileNav = () => {
  const [open, setOpen] = useState(false);
  const handleClose = () => setOpen(false);

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button
          variant="ghost"
          className="mr-2 px-0 text-base hover:bg-transparent md:hidden"
        >
          <Menu className="h-6 w-6" />
          <span className="sr-only">メニュー</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="pr-0 pl-1">
        <SheetHeader className="px-10 py-3 text-left">
          <SheetTitle>メニュー</SheetTitle>
        </SheetHeader>
        <div className="px-7">
          <DashboardNav onClose={handleClose} />
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;
