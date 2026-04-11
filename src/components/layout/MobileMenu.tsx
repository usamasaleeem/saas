"use client";

import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/Button";

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
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 z-40 bg-background/80 backdrop-blur-sm lg:hidden"
          />
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed inset-y-0 right-0 z-50 w-full max-w-sm border-l bg-background px-6 py-20 shadow-2xl lg:hidden"
          >
            <div className="flex flex-col space-y-6">
              {links.map((link, i) => {
                const isActive = pathname === link.href || (pathname.startsWith(link.href) && link.href !== "/");
                return (
                  <motion.div
                    key={link.name}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.1 }}
                  >
                    <Link
                      href={link.href}
                      onClick={onClose}
                      className={`text-2xl font-semibold tracking-tight transition-colors hover:text-primary ${
                        isActive ? "text-primary" : "text-foreground"
                      }`}
                    >
                      {link.name}
                    </Link>
                  </motion.div>
                );
              })}

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: links.length * 0.1 }}
                className="pt-6 border-t mt-6 flex flex-col space-y-4"
              >
                <Link href="/login" onClick={onClose} className="w-full">
                  <Button variant="outline" className="w-full justify-center" size="lg">Log In</Button>
                </Link>
                <Link href="/signup" onClick={onClose} className="w-full">
                  <Button className="w-full justify-center" size="lg">Start Free Trial</Button>
                </Link>
              </motion.div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
