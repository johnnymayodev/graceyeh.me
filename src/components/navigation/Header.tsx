import { Link } from "react-router";

export function Header() {
  return (
    <header className="flex sticky top-0 z-40 justify-between items-center px-6 w-full text-4xl font-bold h-18 bg-background">
      <Link to="/">
        <h1>Grace Yeh</h1>
      </Link>
    </header>
  );
}
