"use client";

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

  if (!isOpen) return null;

  return (
    <>
      <div
        onClick={onClose}
        className="fixed inset-0 z-40 bg-background/80 backdrop-blur-sm lg:hidden"
      />
      <div
        className="fixed inset-y-0 right-0 z-50 w-full max-w-sm border-l bg-background px-6 py-20 shadow-2xl lg:hidden"
      >
        <div className="flex flex-col space-y-6">
          {links.map((link) => {
            const isActive = pathname === link.href || (pathname.startsWith(link.href) && link.href !== "/");
            return (
              <div key={link.name}>
                <Link
                  href={link.href}
                  onClick={onClose}
                  className={`text-2xl font-semibold tracking-tight hover:text-primary ${
                    isActive ? "text-primary" : "text-foreground"
                  }`}
                >
                  {link.name}
                </Link>
              </div>
            );
          })}

          <div className="pt-6 border-t mt-6 flex flex-col space-y-4">
            <Link href="/login" onClick={onClose} className="w-full">
              <Button variant="outline" className="w-full justify-center" size="lg">Log In</Button>
            </Link>
            <Link href="/signup" onClick={onClose} className="w-full">
              <Button className="w-full justify-center" size="lg">Start Free Trial</Button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
