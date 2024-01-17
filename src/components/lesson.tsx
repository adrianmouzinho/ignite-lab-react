import { CheckCircle, Lock } from "@phosphor-icons/react";
import { isPast, format } from "date-fns";
import { ptBR } from "date-fns/locale/pt-BR";

interface LessonProps {
  title: string;
  slug: string;
  availableAt: Date;
  type: "live" | "class";
}

export function Lesson({ title, availableAt, type }: LessonProps) {
  const isLessonAvailable = isPast(availableAt);
  const availableDateFormatted = format(
    availableAt,
    "EEEE '•' d '• de' MMMM '•' k'h'mm",
    {
      locale: ptBR,
    }
  );
  const isSelected = false;

  return (
    <a href="#" className="space-y-2">
      <span className="leading-relaxed text-gray-300">
        {availableDateFormatted}
      </span>

      <div
        className={`flex flex-col gap-4 p-4 rounded cursor-pointer ${
          isSelected ? "bg-green-500" : "border border-gray-500"
        }`}
      >
        <header className="flex items-center justify-between">
          <span
            className={`flex items-center gap-2 text-sm leading-relaxed font-medium ${
              isSelected
                ? "text-white"
                : isLessonAvailable
                ? "text-blue-500"
                : "text-orange-500"
            }`}
          >
            {isLessonAvailable ? <CheckCircle size={20} /> : <Lock size={20} />}
            {isLessonAvailable ? "Conteúdo liberado" : "Em breve"}
          </span>

          <span
            className={`text-xs leading-relaxed font-bold uppercase rounded border px-2 py-[0.125rem] ${
              isSelected
                ? "text-white border-white"
                : type === "live"
                ? "text-green-500 border-green-500"
                : "text-white border-green-500"
            }`}
          >
            {type === "live" ? "ao vivo" : "aula prática"}
          </span>
        </header>

        <strong
          className={`font-bold leading-relaxed ${
            isSelected ? "text-white" : "text-gray-200"
          }`}
        >
          {title}
        </strong>
      </div>
    </a>
  );
}
