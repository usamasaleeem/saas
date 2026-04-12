"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/Button";
import { X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  links: { name: string; href: string }[];
}

export function MobileMenu({ isOpen, onClose, links }: MobileMenuProps) {
  const pathname = usePathname();

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

          {/* Menu Panel */}
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed inset-y-0 right-0 z-50 w-full max-w-sm border-l bg-background px-6 py-20 shadow-2xl lg:hidden"
          >
            <button
              onClick={onClose}
              className="absolute top-5 right-5 p-2 text-foreground hover:bg-muted rounded-full transition-colors"
              aria-label="Close menu"
            >
              <X className="w-6 h-6" />
            </button>

            <div className="flex flex-col space-y-6 mt-4">
              {links.map((link) => {
                const isActive = pathname === link.href || (pathname.startsWith(link.href) && link.href !== "/");
                return (
                  <div key={link.name}>
                    <Link
                      href={link.href}
                      onClick={onClose}
                      className={`text-2xl font-semibold tracking-tight hover:text-primary transition-colors ${
                        isActive ? "text-primary" : "text-foreground"
                      }`}
                    >
                      {link.name}
                    </Link>
                  </div>
                );
              })}

              <div className="pt-6 border-t mt-6 flex flex-col space-y-4">
                <Link href="https://app.hirelai.com/login" onClick={onClose} className="w-full">
                  <Button variant="outline" className="w-full justify-center" size="lg">
                    Log In
                  </Button>
                </Link>
                <Link href="/book-demo" onClick={onClose} className="w-full">
                  <Button className="w-full justify-center" size="lg">
                    Book a Demo
                  </Button>
                </Link>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
