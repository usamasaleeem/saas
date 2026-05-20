"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/Button";
import { X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  links: { name: string; href: string }[];
}

export function MobileMenu({ isOpen, onClose, links }: MobileMenuProps) {
  const pathname = usePathname();
  const [windowHeight, setWindowHeight] = useState(0);

  useEffect(() => {
    setWindowHeight(window.innerHeight);
    
    const handleResize = () => {
      setWindowHeight(window.innerHeight);
    };
    
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 z-40 bg-background/80 backdrop-blur-sm lg:hidden"
          />

          {/* Menu Panel - Fixed height and scrollable */}
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed top-0 right-0 z-50 w-full max-w-sm bg-background shadow-2xl lg:hidden flex flex-col"
            style={{ 
              height: windowHeight || '100vh',
              maxHeight: windowHeight || '100vh'
            }}
          >
            {/* Header with close button */}
            <div className="flex items-center justify-between p-4 border-b border-border bg-background sticky top-0 z-10">
              <div className="w-8 h-8" /> {/* Spacer for alignment */}
              <h2 className="text-lg font-semibold">Menu</h2>
              <button
                onClick={onClose}
                className="p-2 text-foreground hover:bg-muted rounded-full transition-colors"
                aria-label="Close menu"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Scrollable Content */}
            <div className="flex-1 overflow-y-auto">
              <div className="px-6 py-6">
                {/* Navigation Links */}
                <div className="flex flex-col space-y-6">
                  {links.map((link) => {
                    const isActive = pathname === link.href || (pathname.startsWith(link.href) && link.href !== "/");
                    return (
                      <Link
                        key={link.name}
                        href={link.href}
                        onClick={onClose}
                        className={`text-2xl font-semibold tracking-tight hover:text-primary transition-colors ${
                          isActive ? "text-primary" : "text-foreground"
                        }`}
                      >
                        {link.name}
                      </Link>
                    );
                  })}
                </div>

                {/* Action Buttons */}
                <div className="pt-8 mt-8 border-t border-border">
                  <div className="flex flex-col space-y-3">
                    <Link href="https://app.hirelai.com/login" onClick={onClose} className="w-full">
                      <Button variant="outline" className="w-full justify-center" size="lg">
                        Log In
                      </Button>
                    </Link>
                    <Link href="https://app.hirelai.com/signup" onClick={onClose} className="w-full">
                      <Button variant="outline" className="w-full justify-center" size="lg">
                        Register
                      </Button>
                    </Link>
                    <Link href="/book-demo" onClick={onClose} className="w-full">
                      <Button className="w-full justify-center" size="lg">
                        Book a Demo
                      </Button>
                    </Link>
                  </div>
                </div>

                {/* Footer Spacer */}
                <div className="h-8" />
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}