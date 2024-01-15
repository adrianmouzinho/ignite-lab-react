import { createBrowserRouter } from "react-router-dom";

import { AppLayout } from "./pages/_layouts/app";
import { Subscribe } from "./pages/subscribe";
import { Event } from "./pages/event";
import { NotFound } from "./pages/404";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <NotFound />,
    children: [
      {
        path: "/",
        element: <Subscribe />,
      },
      {
        path: "/event",
        element: <Event />,
      },
    ],
  },
]);
