import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

const subscribeUserFormSchema = z.object({
  name: z
    .string()
    .min(3, { message: "O nome precisa de no mínimo 3 caracteres" })
    .transform((name) => {
      name = name.toLowerCase();
      return name
        .trim()
        .split(" ")
        .map((word) => {
          return word[0].toUpperCase().concat(word.substring(1));
        })
        .join(" ");
    }),
  email: z
    .string()
    .nonempty("O email é obrigatório")
    .email({ message: "Formato de email inválido" })
    .toLowerCase(),
});

type SubscribeUserFormData = z.infer<typeof subscribeUserFormSchema>;

export function SubscriptionForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SubscribeUserFormData>({
    resolver: zodResolver(subscribeUserFormSchema),
  });

  function subscribeUser(data: SubscribeUserFormData) {
    console.log(data);
  }

  return (
    <div className="w-full h-fit md:max-w-[390px] space-y-6 px-6 py-8 md:p-8 bg-gray-700 border border-gray-500 md:rounded">
      <h2 className="text-lg md:text-[1.5rem] font-bold leading-relaxed md:leading-snug text-gray-100">
        Inscreva-se gratuitamente
      </h2>

      <form onSubmit={handleSubmit(subscribeUser)}>
        <div className="grid gap-2">
          <div className="grid gap-1">
            <label htmlFor="name" className="sr-only">
              Nome completo
            </label>
            <input
              type="text"
              id="name"
              autoCorrect="off"
              placeholder="Seu nome completo"
              className="w-full h-14 px-5 bg-gray-900 text-gray placeholder:text-gray-300 rounded"
              {...register("name")}
            />
            {errors.name && (
              <span className="text-sm text-red-500">
                {errors.name.message}
              </span>
            )}
          </div>
          <div className="grid gap-1">
            <label htmlFor="email" className="sr-only">
              Email
            </label>
            <input
              type="email"
              id="email"
              autoCapitalize="none"
              autoComplete="email"
              autoCorrect="off"
              placeholder="Digite seu email"
              className="w-full h-14 px-5 bg-gray-900 text-gray placeholder:text-gray-300 rounded"
              {...register("email")}
            />
            {errors.email && (
              <span className="text-sm text-red-500">
                {errors.email.message}
              </span>
            )}
          </div>
        </div>

        <button
          type="submit"
          className="w-full h-[54px] mt-6 text-sm font-bold leading-relaxed uppercase bg-green-500 rounded hover:bg-green-600 transition-colors"
        >
          Garantir minha vaga
        </button>
      </form>
    </div>
  );
}
