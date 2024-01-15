import { CheckCircle, Lock } from "@phosphor-icons/react";

interface ClassOfDayProps {
  isReleased?: boolean;
  content: string;
  date: string;
  isLive?: boolean;
  isSelected?: boolean;
}

export function ClassOfDay({
  isReleased = false,
  content,
  date,
  isLive = false,
  isSelected = false,
}: ClassOfDayProps) {
  return (
    <div className="space-y-2">
      <span className="leading-relaxed text-gray-300">{date}</span>
      <div
        className={`flex flex-col gap-4 p-4 rounded cursor-pointer ${
          isSelected ? "bg-green-500" : "border border-gray-500"
        }`}
      >
        <div className="flex items-center justify-between">
          <span
            className={`flex items-center gap-2 text-sm leading-relaxed font-medium ${
              isSelected
                ? "text-white"
                : isReleased
                ? "text-blue-500"
                : "text-orange-500"
            }`}
          >
            {isReleased ? <CheckCircle size={20} /> : <Lock size={20} />}
            {isReleased ? "Conteúdo liberado" : "Em breve"}
          </span>

          <span
            className={`text-xs leading-relaxed font-bold uppercase rounded border px-2 ${
              isSelected
                ? "text-white border-white"
                : isLive
                ? "text-green-500 border-green-500"
                : "border-green-500"
            }`}
          >
            {isLive ? "ao vivo" : "aula prática"}
          </span>
        </div>

        <strong
          className={`font-bold leading-relaxed ${
            isSelected ? "text-white" : "text-gray-200"
          }`}
        >
          {content}
        </strong>
      </div>
    </div>
  );
}
