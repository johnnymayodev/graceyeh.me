import "@/App.css";

import { Outlet } from "react-router";

import { Header } from "@/components/navigation/Header";
import { Footer } from "@/components/navigation/Footer";

export function App() {
  return (
    <>
      {/* <div className="align"></div> */}
      <div className="min-h-lvh">
        <Header />
        <main className="*:first:min-h-[calc(100lvh-4rem)]! *:min-h-lvh">
          <Outlet />
        </main>
      </div>
      <Footer />
    </>
  );
}
