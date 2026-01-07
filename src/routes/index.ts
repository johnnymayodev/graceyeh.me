import { createBrowserRouter } from "react-router";

import { App } from "@/App.tsx";
import { Home } from "@/pages/Home.tsx";
import { Experience } from "@/pages/Experience";
import { Contact } from "@/pages/Contact.tsx";
import { HTTP404 } from "@/pages/error/HTTP404";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: App,
    children: [
      { index: true, Component: Home },
      { path: "experience", Component: Experience },
      { path: "contact", Component: Contact },
    ],
  },
  {
    path: "*",
    Component: HTTP404,
  },
]);
