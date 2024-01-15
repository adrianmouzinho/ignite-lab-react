import { ClassOfDay } from "./class-of-day";

export function Sidebar() {
  return (
    <aside className="p-6 divide-y divide-gray-500">
      <h3 className="pb-6">Cronograma das aulas</h3>
      <div className="space-y-8 pt-6">
        <ClassOfDay
          content="Abertura do evento Ignite labs"
          date="Domingo • 20 de junho • 19h00"
          isReleased
          isLive
        />
        <ClassOfDay
          content="Aula 01 - Criando o projeto e realizando o setup inicial"
          date="Segunda • 21 de junho • 19h00"
          isReleased
          isSelected
        />
        <ClassOfDay
          content="Aula 02 - Titulo aula ignite labs"
          date="Terça • 22 de junho • 19h00"
        />
        <ClassOfDay
          content="Aula 03 - Titulo aula ignite labs"
          date="Quarta • 23 de junho • 19h00"
        />
      </div>
    </aside>
  );
}
