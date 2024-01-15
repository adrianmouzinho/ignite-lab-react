import { SubscriptionForm } from "../components/subscription-form";

import logoIgniteLabImg from "../assets/logo-ignite-lab.svg";
import codeMockupImg from "../assets/code-mockup.png";
import reactjsIcon from "../assets/reactjs-icon.svg";

export function Subscribe() {
  return (
    <div className="relative bg-blur bg-cover bg-no-repeat">
      <img
        src={reactjsIcon}
        alt="Ícone do Reactjs"
        className="absolute top-2 left-1/2 -translate-x-1/2 -z-10"
      />

      <div className="w-full max-w-[1216px] mx-auto pt-10 md:pt-20 md:px-6">
        <div className="flex gap-8 flex-col md:flex-row md:justify-between items-center">
          <div className="w-full md:max-w-[624px] space-y-6 px-6 md:px-0 text-center md:text-left">
            <img
              src={logoIgniteLabImg}
              alt="Logo do Ignite Lab React"
              className="mx-auto md:mx-0"
            />
            <h1 className="text-3xl md:text-[2.5rem] leading-tight text-gray-100">
              Construa uma{" "}
              <span className="text-blue-500 font-medium">
                aplicação completa
              </span>
              , do zero, com{" "}
              <span className="text-blue-500 font-medium">React JS</span>
            </h1>
            <p className="text-sm md:text-[1rem] leading-relaxed text-gray-200">
              Em apenas uma semana você vai dominar na prática uma das
              tecnologias mais utilizadas e com alta demanda para acessar as
              melhores oportunidades do mercado.
            </p>
          </div>

          <SubscriptionForm />
        </div>

        <img
          src={codeMockupImg}
          alt="Mockup de código Reactjs"
          className="w-full mx-auto"
        />
      </div>
    </div>
  );
}
