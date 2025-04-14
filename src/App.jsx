import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { AppLayout } from "./components/UI/AppLayout.jsx";
import { Home } from "./pages/Home/Home.jsx";
import { About } from "./pages/About/About.jsx";
import { Skills } from "./pages/Skills/Skills.jsx";
import { Projects } from "./pages/Projects/Projects.jsx";
import { Education } from "./pages/Education/Education.jsx";
import { Contact } from "./pages/Contact/Contact.jsx";
export const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <AppLayout />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/about",
          element: <About />,
        },
        {
          path: "/skills",
          element: <Skills />,
        },
        {
          path: "/projects",
          element: <Projects />,
        },
        {
          path: "/education",
          element: <Education />,
        },
        {
          path: "/contact",
          element: <Contact />,
        },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
};
