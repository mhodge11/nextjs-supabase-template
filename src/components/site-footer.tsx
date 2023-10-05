import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { siteConfig } from "@/config/site";
import Link from "next/link";

export function SiteFooter() {
  return (
    <footer className="py-6 md:px-8 md:py-0">
      <div className="container flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row">
        <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
          Built by{" "}
          <Link href={siteConfig.links.x} target="_blank" rel="noreferrer">
            <Tooltip>
              <TooltipTrigger>
                <div className="font-medium underline underline-offset-4">
                  Micah Hodge
                </div>
              </TooltipTrigger>
              <TooltipContent>
                <p>View my X account</p>
              </TooltipContent>
            </Tooltip>
          </Link>
          . The source code is available on{" "}
          <Link
            href={siteConfig.links.githubProject}
            target="_blank"
            rel="noreferrer"
          >
            <Tooltip>
              <TooltipTrigger>
                <div className="font-medium underline underline-offset-4">
                  GitHub
                </div>
              </TooltipTrigger>
              <TooltipContent>
                <p>View this project on GitHub</p>
              </TooltipContent>
            </Tooltip>
          </Link>
          .
        </p>
      </div>
    </footer>
  );
}
