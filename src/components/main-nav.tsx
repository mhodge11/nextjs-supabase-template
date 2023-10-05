"use client";

import { Icons } from "@/components/icons";
import { NavDropdown } from "@/components/nav-dropdown";
import { navConfig } from "@/config/nav";
import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";

export function MainNav() {
  const pathname = usePathname();

  return (
    <div className="mr-4 hidden lg:flex">
      <Link href="/" className="mr-6 flex items-center space-x-2">
        <Icons.logo className="h-6 w-6" />
        <span className="hidden font-bold sm:inline-block">
          {siteConfig.name}
        </span>
      </Link>
      <nav className="flex items-center space-x-6 text-sm font-medium">
        {navConfig.main.map((navItem) => (
          <Link
            key={navItem.title}
            href={navItem.href ?? "#"}
            className={cn(
              "transition-colors hover:text-foreground/80",
              pathname === navItem.href
                ? "text-foreground"
                : "text-foreground/60",
            )}
          >
            {navItem.title}
          </Link>
        ))}
        <NavDropdown />
      </nav>
    </div>
  );
}
