// src/components/Section1.tsx
import { Button } from "../Button";

const BG =
  "https://res.cloudinary.com/drukanr6m/image/upload/v1770157062/bgsection1_tsryqd.jpg";

const IFRAME_SRC =
  "https://res.cloudinary.com/drukanr6m/video/upload/v1770674184/WhatsApp_Video_2026-02-05_at_21.41.24_fa9ufd.mp4";

export const Section1 = () => {
  return (
    <section className="relative w-full overflow-hidden text-white">
      {/* BG */}
      <img
        className="absolute inset-0 -z-20 h-full w-full object-cover object-[70%_top] md:object-[78%_top]"
        src={BG}
        alt=""
        draggable={false}
      />
      {/* overlay */}
      <div className="absolute inset-0 -z-10 bg-black/35" />

      <div className="mx-auto w-full max-w-[1140px] px-4 py-[60px] sm:py-[80px] lg:py-[90px]">
        {/* ✅ em vez de 50/50, coluna esquerda maior */}
        <div className="grid grid-cols-1 gap-10 md:grid-cols-[1.35fr_0.65fr] md:gap-6">
          {/* COLUNA ESQUERDA */}
          <div className="flex flex-col items-center md:items-start">
            <img
              src="https://res.cloudinary.com/drukanr6m/image/upload/v1770157061/logo_gbvkis.png"
              alt="Desafio 24 Dias"
              className="w-[300px] sm:w-[420px] lg:w-[520px] select-none"
              draggable={false}
            />

            {/* ✅ não quebrar "PARA" no desktop */}
            <h1
              className={[
                "mt-6 font-extrabold uppercase leading-[1.05]",
                "text-center md:text-left",
                "text-[28px] sm:text-[34px] md:text-[34px] lg:text-[40px] xl:text-[44px]",
                "lg:whitespace-nowrap",
                "drop-shadow-[0_3px_10px_rgba(0,0,0,0.65)]",
              ].join(" ")}
            >
              CONHEÇA A FÓRMULA INFALÍVEL PARA
            </h1>

            <h2
              className={[
                "mt-2 font-extrabold uppercase leading-[1.05]",
                "text-center md:text-left",
                "text-[#FF500B]",
                "text-[28px] sm:text-[34px] md:text-[34px] lg:text-[40px] xl:text-[44px]",
                "drop-shadow-[0_3px_10px_rgba(0,0,0,0.65)]",
              ].join(" ")}
            >
              ELIMINAR DE 3 A 7KG SEM PASSAR FOME
            </h2>

            <p className="mt-4 max-w-[720px] text-center md:text-left text-[14px] sm:text-[16px] font-semibold leading-[1.35] text-white/90">
              Um guia completo para transformar seu corpo e deixar qualquer homem
              completamente obcecado por você!
            </p>

            {/* PLAYER */}
            <div className="mt-6 w-full max-w-[620px]">
              <div className="rounded-[6px] border border-[#FF5A00]/70 bg-black/30 p-[10px] shadow-[0_18px_40px_rgba(0,0,0,0.6)]">
                <div className="overflow-hidden rounded-[4px] bg-black">
                  <div className="relative w-full pt-[56.25%]">
                    <video
                      src={IFRAME_SRC}
                      className="absolute inset-0 h-full w-full object-cover"
                      autoPlay
                      muted
                      loop
                      playsInline
                      preload="auto"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* CTA */}
            <div className="mt-5 w-full max-w-[620px]">
              <Button href="#checkout" />
            </div>
          </div>

          {/* COLUNA DIREITA: é só “respiro” pra não pegar na modelo do fundo */}
          <div className="hidden md:block" />
        </div>
      </div>
    </section>
  );
};
