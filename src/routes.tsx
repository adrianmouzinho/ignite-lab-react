import { createBrowserRouter } from "react-router-dom";

import { AppLayout } from "./pages/_layouts/app";
import { Subscribe } from "./pages/subscribe";
import { Event } from "./pages/event";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
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
