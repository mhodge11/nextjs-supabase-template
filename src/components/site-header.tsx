import { CommandMenu } from "@/components/command-menu";
import { Icons } from "@/components/icons";
import { MainNav } from "@/components/main-nav";
import { MobileNav } from "@/components/mobile-nav";
import { ThemeToggle } from "@/components/theme-toggle";
import { buttonVariants } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";
import Link from "next/link";

export function SiteHeader() {
  return (
    <header className="supports-backdrop-blur:bg-background/60 sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur">
      <div className="container flex h-14 items-center">
        <MainNav />
        <MobileNav />
        <div className="flex flex-1 items-center justify-between space-x-2 lg:justify-end">
          <div className="w-full flex-1 lg:w-auto lg:flex-none">
            <CommandMenu />
          </div>
          <nav className="flex items-center">
            <Link
              href={siteConfig.links.github}
              target="_blank"
              rel="noreferrer"
            >
              <Tooltip>
                <TooltipTrigger>
                  <div
                    className={cn(
                      buttonVariants({
                        variant: "ghost",
                      }),
                      "w-9 px-0",
                    )}
                  >
                    <Icons.gitHub className="h-4 w-4" />
                    <span className="sr-only">GitHub</span>
                  </div>
                </TooltipTrigger>
                <TooltipContent>
                  <p>View my GitHub</p>
                </TooltipContent>
              </Tooltip>
            </Link>
            <Link
              href={siteConfig.links.linkedin}
              target="_blank"
              rel="noreferrer"
            >
              <Tooltip>
                <TooltipTrigger>
                  <div
                    className={cn(
                      buttonVariants({
                        variant: "ghost",
                      }),
                      "w-9 px-0",
                    )}
                  >
                    <Icons.linkedIn className="h-4 w-4" />
                    <span className="sr-only">LinkedIn</span>
                  </div>
                </TooltipTrigger>
                <TooltipContent>
                  <p>View my LinkedIn</p>
                </TooltipContent>
              </Tooltip>
            </Link>
            <Link href={siteConfig.links.x} target="_blank" rel="noreferrer">
              <Tooltip>
                <TooltipTrigger>
                  <div
                    className={cn(
                      buttonVariants({
                        variant: "ghost",
                      }),
                      "w-9 px-0",
                    )}
                  >
                    <Icons.x className="h-4 w-4 fill-current" />
                    <span className="sr-only">X</span>
                  </div>
                </TooltipTrigger>
                <TooltipContent>
                  <p>View my X account</p>
                </TooltipContent>
              </Tooltip>
            </Link>
          </nav>
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}
