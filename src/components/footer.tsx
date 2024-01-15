import logoRocketImg from "../assets/logo-rocketseat.svg";

export function Footer() {
  return (
    <footer className="w-full px-6 pb-6 bg-gray-900">
      <div className="pt-6 border-t border-gray-500 flex flex-col md:flex-row items-center md:justify-between gap-6">
        <div className="flex flex-col md:flex-row items-center gap-4 md:gap-6">
          <img src={logoRocketImg} alt="Logo da Rocketseat" />
          <span className="text-sm leading-relaxed text-gray-300">
            Rocketseat - Todos os direitos reservados
          </span>
        </div>
        <span className="text-sm leading-relaxed text-gray-300">
          Políticas de privacidade
        </span>
      </div>
    </footer>
  );
}
