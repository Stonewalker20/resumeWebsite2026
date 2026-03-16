import { createBrowserRouter } from "react-router";
import { Layout } from "./components/layout";
import { Home } from "./pages/home";
import { Resume } from "./pages/resume";
import { Experience } from "./pages/experience";
import { Projects } from "./pages/projects";
import { Hobbies } from "./pages/hobbies";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Layout,
    children: [
      { index: true, Component: Home },
      { path: "resume", Component: Resume },
      { path: "experience", Component: Experience },
      { path: "projects", Component: Projects },
      { path: "hobbies", Component: Hobbies },
    ],
  },
]);