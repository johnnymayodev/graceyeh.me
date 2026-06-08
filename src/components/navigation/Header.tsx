import { useState } from "react";
import { Link } from "react-router";
import { Menu } from "lucide-react";

import { sections } from "@/data/portfolio";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 flex h-[var(--header-height)] w-full items-center justify-between bg-bento-page px-4">
      <Link
        to="/"
        className="bento-display-sm"
      >
        Grace Yeh
      </Link>
      <Sheet open={open} onOpenChange={setOpen}>
        <SheetTrigger asChild>
          <Button
            variant="ghost"
            size="icon"
            aria-label="Open menu"
            className="rounded-full"
          >
            <Menu className="size-5" />
          </Button>
        </SheetTrigger>
        <SheetContent side="right" className="w-full bg-bento-page">
          <SheetHeader>
            <SheetTitle className="bento-text-label text-left">
              Menu
            </SheetTitle>
          </SheetHeader>
          <nav className="mt-8 flex flex-col gap-4">
            {sections.map((section) => (
              <Link
                key={section.id}
                to={{ pathname: "/", hash: section.id }}
                onClick={() => setOpen(false)}
                className="bento-text-nav"
              >
                {section.title.charAt(0) + section.title.slice(1).toLowerCase()}
              </Link>
            ))}
            <Link
              to="/experience"
              onClick={() => setOpen(false)}
              className="bento-text-nav-muted"
            >
              Experience
            </Link>
            <Link
              to="/contact"
              onClick={() => setOpen(false)}
              className="bento-text-nav-muted"
            >
              Contact
            </Link>
          </nav>
        </SheetContent>
      </Sheet>
    </header>
  );
}
