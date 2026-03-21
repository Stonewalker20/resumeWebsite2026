import { RouterProvider } from "react-router";
import { Analytics } from "./components/analytics";
import { router } from "./routes";

export default function App() {
  return (
    <>
      <Analytics />
      <RouterProvider router={router} />
    </>
  );
}
