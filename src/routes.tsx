import { createBrowserRouter } from "react-router-dom";

import { Subscribe } from "./pages/subscribe";
import { Event } from "./pages/event";
import { NotFound } from "./pages/404";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Subscribe />,
    errorElement: <NotFound />,
  },
  {
    path: "/event",
    element: <Event />,
  },
]);
