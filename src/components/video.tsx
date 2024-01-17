import {
  DiscordLogo,
  Lightning,
  FileArrowDown,
  Image,
} from "@phosphor-icons/react";

import { Button } from "./button";
import { Card } from "./card";
import { Footer } from "./footer";

export function Video() {
  return (
    <div className="flex-1">
      <iframe
        className="w-full aspect-video"
        src="https://www.youtube.com/embed/XSbMSSdGSdg?si=fc_6_riBaVQTFtZQ"
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      ></iframe>

      <div className="px-6 pt-6 pb-16 space-y-16">
        <div className="flex flex-col lg:flex-row lg:justify-between gap-6">
          <div className="space-y-6">
            <div className="w-full max-w-[731px] space-y-4">
              <h1 className="text-lg md:text-2xl leading-relaxed md:leading-snug font-bold text-gray-100">
                Aula 01 - Criando o projeto e realizando o setup inicial
              </h1>
              <p className="text-sm md:text-[1rem] leading-relaxed text-gray-200">
                Nessa aula vamos dar início ao projeto criando a estrutura base
                da aplicação utilizando ReactJS, Vite e TailwindCSS. Vamos
                também realizar o setup do nosso projeto no GraphCMS criando as
                entidades da aplicação e integrando a API GraphQL gerada pela
                plataforma no nosso front-end utilizando Apollo Client.
              </p>
            </div>

            <div className="flex items-center gap-4">
              <img
                src="https://github.com/adrianmouzinho.png"
                alt=""
                className="w-16 h-16 rounded-full border-2 border-blue-500"
              />
              <div className="flex flex-col gap-1">
                <span className="text-lg md:text-2xl leading-relaxed md:leading-snug font-bold text-gray-100">
                  Adrian Mouzinho
                </span>
                <span className="text-sm leading-relaxed text-gray-300">
                  Frontend Developer
                </span>
              </div>
            </div>
          </div>

          <div className="min-w-[237px] flex flex-col gap-4">
            <Button>
              <DiscordLogo size={24} />
              Comunidade no discord
            </Button>
            <Button variant="secondary">
              <Lightning size={24} />
              Acesse o desafio
            </Button>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          <Card
            icon={<FileArrowDown size={40} />}
            title="Material complementar"
            content="Acesse o material complementar para acelerar o seu desenvolvimento"
          />
          <Card
            icon={<Image size={40} />}
            title="Wallpapers exclusivos"
            content="Baixe wallpapers exclusivos do Ignite Lab e personalize a sua máquina"
          />
        </div>
      </div>

      <Footer />
    </div>
  );
}
