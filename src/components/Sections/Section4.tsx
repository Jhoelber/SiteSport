// src/components/Section4.tsx
const bonuses = [
  {
    img: "https://res.cloudinary.com/drukanr6m/image/upload/v1770157062/para_ficar_em_forma_gbd3c3.png",
    label: "BÔNUS 01",
    title: "Receitas Fit Almoço e Jantar",
    desc:
      "Receitas Fit é um guia com receitas deliciosas de almoço e jantar, sem perder o foco da dieta.. Você também pode imprimi-la para consultar como referência rápida sempre que precisar.",
    rotate: "-rotate-[14deg]",
  },
  {
    img: "https://res.cloudinary.com/drukanr6m/image/upload/v1770157061/salgadofit_jpdklc.png",
    label: "BÔNUS 02",
    title: "Salgados Fit",
    desc:
      "Salgados Fit é um guia com receitas deliciosas de almoço e jantar, sem perder o foco da dieta.. Você também pode imprimi-la para consultar como referência rápida sempre que precisar.",
    rotate: "-rotate-[8deg]",
  },
  {
    img: "https://res.cloudinary.com/drukanr6m/image/upload/v1770157062/detox_bsepyb.png",
    label: "BÔNUS 03",
    title: "Sucos Detox",
    desc:
      "Suco Detox é um guia com sucos detox deliciosos para ajudar na sua reeducação alimentar. Você também pode imprimir para consultar como referência rápida sempre que precisar.",
    rotate: "-rotate-[10deg]",
  },
];

export const Section4 = () => {
  return (
    <section className="relative w-full bg-black text-white overflow-hidden">

      <div className="mx-auto w-full max-w-285 px-4 py-10 sm:py-14">

      
          <img
            src="https://res.cloudinary.com/drukanr6m/image/upload/v1770157061/logo_gbvkis.png"
            alt=""
            className="mx-auto h-20 sm:h-26 w-auto"
          />
       


        <h2 className="text-center font-['Montserrat'] text-[18px] sm:text-[22px] font-extrabold uppercase tracking-wide">
          APROVEITE! E RECEBA DE BRINDE ESSES{" "}
          <span className="text-[#FF5A00]">BÔNUS INCRÍVEIS</span>
        </h2>

        {/* grid */}
        <div className="mt-10 grid grid-cols-1 gap-8 md:grid-cols-3 md:gap-6">
          {bonuses.map((b) => (
            <div
              key={b.label}
              className={[
                "relative overflow-hidden rounded-[18px]",
                // ✅ gradiente igual a 1ª imagem (topo escuro -> laranja embaixo)
                "bg-linear-to-b from-black via-orange-950 to-[#FF5A00]",
                // sombra do card
                "shadow-[0_28px_70px_rgba(0,0,0,0.55)]",
                // altura semelhante (pra não “encolher” como na 2ª)
                "min-h-130",
              ].join(" ")}
            >
              {/* topo do card (espaço pro livro “flutuar”) */}
              <div className="px-6 pt-10">
                <div className="flex justify-center">
                  <img
                    src={b.img}
                    alt={b.title}
                    draggable={false}
                    className={[
                      "w-57.5 select-none",
                      b.rotate,
                      // ✅ hover aumenta a imagem
                      "transition-transform duration-300 ease-out",
                      "hover:scale-[1.10]",
                      // ✅ sombra forte igual do print
                      "drop-shadow-[0_18px_26px_rgba(0,0,0,0.65)]",
                    ].join(" ")}
                  />
                </div>
              </div>

              {/* pílula BÔNUS */}
              <div className="mt-6 flex justify-center px-6">
                <div className="w-full max-w-65 rounded-full border border-white/25 bg-black/15 py-2 text-center">
                  <span className="font-['Montserrat'] text-[34px] font-black tracking-wider">
                    {b.label}
                  </span>
                </div>
              </div>

              {/* conteúdo */}
              <div className="px-6 pb-8 pt-5 text-center">
                <h3 className="font-['Montserrat'] text-[26px] font-extrabold leading-tight text-[#FFB200]">
                  {b.title}
                </h3>

                <p className="mt-4 text-[13px] leading-relaxed text-white/95">
                  {b.desc}
                </p>
              </div>

              {/* arredondamento e “base” mais viva (igual a primeira imagem) */}
              <div className="pointer-events-none absolute inset-x-0 bottom-0 h-20 bg-linear-to-t from-black/10 to-transparent" />
            </div>
          ))}
        </div>
      </div>
    </section >
  );
};
