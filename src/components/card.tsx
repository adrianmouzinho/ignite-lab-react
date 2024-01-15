import { ReactNode } from "react";
import { CaretRight } from "@phosphor-icons/react";

interface CardProps {
  icon: ReactNode;
  title: string;
  content: string;
}

export function Card({ icon, title, content }: CardProps) {
  return (
    <div className="flex rounded overflow-hidden cursor-pointer">
      <div className="flex items-center justify-center px-6 bg-green-600">
        {icon}
      </div>
      <div className="flex-1 flex items-center justify-between p-6 bg-gray-700">
        <div className="space-y-1 w-full max-w-[280px]">
          <span className="text-lg md:text-2xl leading-relaxed md:leading-snug font-bold text-gray-100">
            {title}
          </span>
          <p className="text-xs leading-relaxed text-gray-200">{content}</p>
        </div>
        <CaretRight size={24} className="text-blue-500" />
      </div>
    </div>
  );
}
