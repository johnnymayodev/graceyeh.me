// import { ThemeToggle } from "@/components/ThemeToggle";
// import { Link } from "react-router";
// import { H3 } from "../typography/H3";
import { H1 } from "../typography/H1";
import { Menu } from "lucide-react";
// import { P } from "../typography/P";
// import { Menu } from "lucide-react";

export function Header() {
  // type HeaderItem = {
  //   name: string;
  //   href: string;
  // };

  // const headerItems: HeaderItem[] = [
  //   // { name: "home", href: "/" },
  //   { name: "experience", href: "experience" },
  //   { name: "portfolio", href: "portfolio" },
  //   { name: "contact", href: "contact" },
  // ];

  return (
    <div className="flex items-center justify-between h-18 w-full capitalize *:mx-4">
      <a href="/">
        <H1 className="font-semibold underline italic">Grace Yeh</H1>
      </a>
      <nav className="gap-6 items-center">
        {/* {headerItems.map((item: HeaderItem) => (
          <Link key={item.name} to={item.href} className="hover:underline">
            {item.name}
          </Link>
        ))} */}
        <Menu />
        {/* <ThemeToggle /> */}
      </nav>
    </div>
  );
}
