import { createBrowserRouter } from "react-router";
import { Layout } from "./components/layout";
import { Home } from "./pages/home";
import { Resume } from "./pages/resume";
import { Experience } from "./pages/experience";
import { Projects } from "./pages/projects";
import { Hobbies } from "./pages/hobbies";
import { pagePaths } from "./page-paths";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Layout,
    children: [
      { index: true, Component: Home },
      { path: "index.html", Component: Home },
      { path: pagePaths.resume.slice(1), Component: Resume },
      { path: pagePaths.profile.slice(1), Component: Experience },
      { path: pagePaths.experience.slice(1), Component: Experience },
      { path: pagePaths.projects.slice(1), Component: Projects },
      { path: pagePaths.hobbies.slice(1), Component: Hobbies },
    ],
  },
], {
  basename: import.meta.env.BASE_URL,
});
