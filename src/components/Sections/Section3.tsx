// src/components/Section3.tsx
import { Button } from "../Button";

const itens = [
  "Pessoas que estão com autoestima baixa;",
  "Pessoas que não aguentam mais piadinhas por causa do seu peso;",
  "Pessoas que buscam melhorar sua saúde;",
  "Pessoas que querem usar roupas que sempre sonhou;",
  "Pessoas que não conseguem subir na balança;",
  "Pessoas que querem viver uma nova vida a partir de agora.",
];

function Bullet({ text }: { text: string }) {
  return (
    <li className="flex items-start gap-3">
      {/* ícone laranja */}
      <span className="mt-0.5 grid h-5 w-5 place-items-center rounded-full border-2 border-[#FF5A00] text-[#FF5A00] text-[12px] font-black">
        ›
      </span>

      {/* texto (sem faixa azul nessa section) */}
      <span className="font-['Montserrat'] text-[15px] sm:text-[16px] font-semibold leading-tight text-white">
        {text}
      </span>
    </li>
  );
}

export const Section3 = () => {
  return (
    <section className="relative w-full overflow-hidden text-white">
      {/* BG de verdade */}
      <img
        className="absolute inset-0 -z-20 h-full w-full object-cover object-center"
        src="https://res.cloudinary.com/drukanr6m/image/upload/v1770157063/bgsection3_rrpnwy.jpg"
        alt=""
        draggable={false}
      />
      {/* overlay leve pra destacar conteúdo */}
      <div className="absolute inset-0 -z-10 bg-black/30" />

      <div className="mx-auto w-full max-w-285 px-4 py-10 sm:py-14">
        <div className="grid grid-cols-1 items-center gap-10 md:grid-cols-2">
          {/* ESQUERDA: texto + lista + parágrafo + e-book */}
          <div>
            {/* TÍTULO com “faixa cinza” */}
            <h2 className="text-center font-['Montserrat'] e text-[18px] sm:text-[22px] font-extrabold uppercase leading-[1.1]">
              <span className="inline-block  px-3 py-2  text-white">
                QUEM PRECISA DESTE GUIA
              </span>
              <br />
              <span className="mt-2 inline-block  px-3 py-2 text-[#FF5A00]">
                COMPLETO ENSINANDO PASSO A PASSO?
              </span>
            </h2>

            <ul className="mt-6 space-y-3">
              {itens.map((t, i) => (
                <Bullet key={i} text={t} />
              ))}
            </ul>

            {/* parágrafo (com destaque laranja em partes) */}
            <p className="mt-6 font-['Montserrat'] text-[16px] sm:text-[18px] font-bold leading-tight">
              Se você se identificou com pelo menos uma das situações acima,{" "}
              <span className="text-[#FF5A00]">
                clique no botão abaixo e receba o e-book
              </span>{" "}
              com os bônus em seu{" "}
              <span className="text-[#FF5A00]">E-mail agora mesmo.</span>
            </p>

            {/* “E-BOOK COMPLETO” grande (simulação do print) */}
            <div className="mt-6">
              <p
                className={[
                  "font-['Roboto'] font-black uppercase",
                  "text-[54px] sm:text-[72px] leading-[0.9]",
                  "text-[#FF5A00]",
                  "[text-shadow:0_0_0.5px_#000,0_8px_20px_rgba(0,0,0,0.9)]",
                ].join(" ")}
              >
                E-BOOK
              </p>
              <p
                className={[
                  "font-['Roboto'] font-black uppercase",
                  "text-[54px] sm:text-[72px] leading-[0.9]",
                  "text-[#FF5A00]",
                  "[text-shadow:0_0_0.5px_#000,0_8px_20px_rgba(0,0,0,0.9)]",
                ].join(" ")}
              >
                COMPLETO
              </p>
            </div>

            <div className="mt-6 max-w-140">
              <Button />
            </div>
          </div>

          {/* DIREITA: imagem do cara */}
          <div className="flex justify-center md:justify-end">
            <img
              className="w-[92%] max-w-130 select-none"
              src="https://res.cloudinary.com/drukanr6m/image/upload/v1770157062/fotosection3_xfczmb.webp"
              alt=""
              draggable={false}
            />
          </div>
        </div>
      </div>
    </section>
  );
};
