"use client";

import { buttonVariants } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { navConfig } from "@/config/nav";
import { cn } from "@/lib/utils";
import { usePathname, useRouter } from "next/navigation";
import * as React from "react";

const dropdownNav = navConfig.dropdown.find(
  (nav) => nav.title === "Example Dropdown",
);

export function NavDropdown() {
  const pathname = usePathname();
  const router = useRouter();

  const runCommand = React.useCallback((command: () => unknown) => {
    command();
  }, []);

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <div
          className={cn(
            buttonVariants({ variant: "ghost" }),
            "ml-2 cursor-pointer text-center transition-colors hover:text-foreground/80",
            dropdownNav?.items.find((navItem) => pathname === navItem.href)
              ? "text-foreground"
              : "text-foreground/60",
          )}
        >
          Example Dropdown
          <span className="sr-only">Example dropdown</span>
        </div>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        {dropdownNav?.items.map((navItem) => (
          <DropdownMenuItem
            key={navItem.href}
            onClick={() => {
              runCommand(() => router.push(navItem.href!));
            }}
          >
            {navItem.title}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
