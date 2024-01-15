import { Outlet } from "react-router-dom";

import { Footer } from "../../components/footer";

export function AppLayout() {
  return (
    <div className="min-h-screen flex flex-col antialiased">
      <div className="flex-1">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}
