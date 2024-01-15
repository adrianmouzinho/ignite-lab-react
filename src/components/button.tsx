import { ComponentProps } from "react";

interface ButtonProps extends ComponentProps<"button"> {
  variant?: "primary" | "secondary";
}

export function Button({ variant = "primary", ...props }: ButtonProps) {
  return (
    <button
      className={`w-full h-[54px] flex items-center justify-center gap-2 px-3 text-sm font-bold leading-relaxed uppercase rounded transition-colors ${
        variant === "primary"
          ? "bg-green-500 hover:bg-green-600"
          : "text-blue-500 border border-blue-500 hover:bg-gray-700"
      }`}
      {...props}
    />
  );
}
