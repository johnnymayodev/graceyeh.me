import "@/index.css";

import { Outlet } from "react-router";

export function App() {
  return (
    <div className="flex flex-col min-h-lvh">
      <main className="flex flex-col flex-1 min-h-0">
        <Outlet />
      </main>
    </div>
  );
}
