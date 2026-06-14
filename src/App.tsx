import "@/index.css";

import { Outlet } from "react-router";

import { Header } from "@/components/navigation/Header";

export function App() {
  return (
    <div className="flex flex-col min-h-lvh">
      <Header />
      <main className="flex flex-col flex-1 min-h-0">
        <Outlet />
      </main>
    </div>
  );
}
