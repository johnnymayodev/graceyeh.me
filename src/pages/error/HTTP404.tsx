import { H1 } from "@/components/typography/H1";
import { H3 } from "@/components/typography/H3";
import { Button } from "@/components/ui/button";
import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router";

export function HTTP404() {
  return (
    <div className="gap-4 center h-lvh">
      <H1 className="text-8xl">404</H1>
      <H3>Page Not Found</H3>
      <Link to="/">
        <Button className="cursor-pointer">
          Return Home <ArrowUpRight />
        </Button>
      </Link>
    </div>
  );
}
