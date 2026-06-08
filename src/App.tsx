import "@/App.css";

import { Outlet } from "react-router";

import { Header } from "@/components/navigation/Header";
import { Footer } from "@/components/navigation/Footer";

export function App() {
  return (
    <>
      {/* <div className="align"></div> */}
      <div className="min-h-lvh flex flex-col">
        <Header />
        <main className="flex-1 min-h-0 flex flex-col">
          <Outlet />
        </main>
      </div>
      <Footer />
    </>
  );
}
