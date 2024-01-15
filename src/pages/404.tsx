import { Link } from "react-router-dom";

export function NotFound() {
  return (
    <div className="h-screen w-full flex flex-col gap-2 items-center justify-center">
      <h1 className="text-4xl font-bold">Página não encontrada</h1>
      <p>
        Voltar para a{" "}
        <Link to="/event" className="text-green-500 underline">
          página do evento
        </Link>
      </p>
    </div>
  );
}
