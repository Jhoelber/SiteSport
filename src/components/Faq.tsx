// src/sections/Faq.tsx
import { useState } from "react";

type FAQ = { q: string; a: string };

const FAQS: FAQ[] = [
  {
    q: "O que é isso tudo?",
    a: "É um guia de acompanhamento completo criado por um Nutricionista para ajudar você a transformar a sua vida através de reeducação alimentar em 24 dias.",
  },
  {
    q: "Como eu vou receber esse guia?",
    a: "Você terá acesso instantâneo a uma versão em PDF deste guia, juntamente com links de download para os bônus. O acesso é imediato logo após a confirmação do pagamento. Se pagar no boleto pode levar até 3 dias úteis para a compensação.",
  },
  {
    q: "Em quanto tempo vou ter resultados com o que vou aprender nesse programa?",
    a: "Você pode começar a ver os resultados no aprendizado com extrema rapidez... Em alguns dias depois de começar. Quanto mais você fizer disso parte da sua rotina diária, mais rápido você vai obter os resultados que deseja.",
  },
  {
    q: "E se eu não tiver tempo para estudar?",
    a: "O conteúdo é direto ao ponto e você consegue aplicar em poucos minutos por dia. A ideia é encaixar no seu dia a dia sem complicação.",
  },
  {
    q: "Como vou receber acesso ao método?",
    a: "Após a confirmação do pagamento, você recebe um e-mail com o acesso e instruções para baixar o material e os bônus.",
  },
  {
    q: "Existe alguma garantia que o programa funciona?",
    a: "Você tem garantia conforme o prazo informado na oferta. Se não fizer sentido pra você, pode solicitar reembolso dentro desse período.",
  },
];

function Chevron({ open }: { open: boolean }) {
  return (
    <span
      className={[
        "grid h-6 w-6 place-items-center",
        "text-[#FF5A00] font-black",
        "transition-transform duration-200",
        open ? "rotate-180" : "rotate-0",
      ].join(" ")}
    >
      ^
    </span>
  );
}

export const Faq = () => {
  const [openIndex, setOpenIndex] = useState<number>(0);

  return (
    <section className="w-full bg-black text-white">
      <div className="mx-auto w-full max-w-[980px] px-4 py-14 sm:py-20">
        
        <h2 className="text-center font-['Montserrat'] text-[32px] sm:text-[40px] font-black uppercase text-[#FF5A00]">
          DÚVIDAS FREQUENTES
        </h2>

        <div className="mt-10 space-y-6">
          {FAQS.map((f, i) => {
            const open = openIndex === i;

            return (
              <div key={f.q} className="w-full">
             
                <button
                  type="button"
                  onClick={() => setOpenIndex(open ? -1 : i)}
                  className={[
                    "w-full flex items-center gap-3",
                    "bg-[#2A1200] px-4 sm:px-6 py-4",
                    "text-left",
                    "border-b border-[#FF5A00]/80",
                  ].join(" ")}
                >
                  <Chevron open={open} />
                  <span className="font-['Montserrat'] text-[14px] sm:text-[15px] font-extrabold">
                    {f.q}
                  </span>
                </button>

           
                {open && (
                  <div className="px-4 sm:px-6 pt-4 pb-6">
                    <p className="text-[12px] sm:text-[13px] leading-relaxed text-white/90">
                      {f.a}
                    </p>

                  
                    <div className="mt-6 h-px w-full bg-[#FF5A00]" />
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
