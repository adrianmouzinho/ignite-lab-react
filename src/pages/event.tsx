import { Header } from "../components/header";
import { Sidebar } from "../components/sidebar";
import { Video } from "../components/video";

export function Event() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex">
        <Video />
        <Sidebar />
      </main>
    </div>
  );
}
