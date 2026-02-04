import { useEffect, useState } from "react";

const BG_SECTION6 =
  "https://res.cloudinary.com/drukanr6m/image/upload/v1770157063/bhsection4_xnxo9y.jpg";

// ⚠️ No print é um “pack” de livros (3D). Se você tiver essa imagem, troque aqui.
const LIVROS =
  "https://res.cloudinary.com/drukanr6m/image/upload/v1770157061/livrosection2_xnd2ua.webp";

function useCountdown(durationMinutes = 19) {
  const [endAt] = useState(() => Date.now() + durationMinutes * 60 * 1000);
  const [now, setNow] = useState(Date.now());

  useEffect(() => {
    const t = setInterval(() => setNow(Date.now()), 250);
    return () => clearInterval(t);
  }, []);

  const diff = Math.max(0, endAt - now);
  const totalSeconds = Math.floor(diff / 1000);
  const minutes = Math.floor(totalSeconds / 60);
  const seconds = totalSeconds % 60;

  return { minutes, seconds };
}

export const Section6 = () => {
  const { minutes, seconds } = useCountdown(19);

  return (
    <section className="relative w-full overflow-hidden text-white">

      <img
        className="absolute inset-0 -z-20 h-full w-full object-cover object-center"
        src={BG_SECTION6}
        alt=""
        draggable={false}
      />
      
      <div className="absolute inset-0 -z-10 bg-black/35" />

      <div className="mx-auto w-full max-w-[1140px] px-4 py-12 sm:py-16">
        <div className="grid grid-cols-1 items-center gap-10 md:grid-cols-2">
        
          <div className="flex justify-center md:justify-start">
            <img
              src={LIVROS}
              alt="Livro do Desafio"
              className="w-[92%] max-w-[520px] select-none drop-shadow-[0_20px_30px_rgba(0,0,0,0.6)]"
              draggable={false}
            />
          </div>

         
          <div className="flex justify-center md:justify-end">
            <div
              className={[
                "relative w-full max-w-[420px] rounded-[26px] p-6 sm:p-7",
                "bg-black/70 border border-[#FF5A00]/45",
                "shadow-[0_0_0_1px_rgba(255,90,0,0.18),0_0_40px_rgba(255,90,0,0.30),0_25px_70px_rgba(0,0,0,0.75)]",
             
                "before:content-[''] before:absolute before:inset-[-10px] before:-z-10",
                "before:rounded-[34px] before:bg-[#FF5A00]/10 before:blur-[18px]",
              ].join(" ")}
            >
              <h3 className="text-center text-[20px] sm:text-[22px] font-black uppercase tracking-wide">
                OFERTA ESPECIAL
              </h3>

              <div className="mt-2 flex justify-center">
                <span className="rounded bg-[#FF5A00] px-3 py-1 text-[12px] font-black uppercase tracking-wide text-black">
                  PROMOÇÃO ENCERRA EM POUCOS MINUTOS
                </span>
              </div>

           
              <div className="mt-5 grid grid-cols-2 gap-4">
                <div className="rounded-[16px] border border-[#FF5A00]/45 bg-black/40 p-4 text-center">
                  <div className="text-[52px] leading-none font-black">
                    {String(minutes).padStart(2, "0")}
                  </div>
                  <div className="mt-1 text-[14px] uppercase tracking-wide text-white/90">
                    Minutos
                  </div>
                </div>

                <div className="rounded-[16px] border border-[#FF5A00]/45 bg-black/40 p-4 text-center">
                  <div className="text-[52px] leading-none font-black">
                    {String(seconds).padStart(2, "0")}
                  </div>
                  <div className="mt-1 text-[14px] uppercase tracking-wide text-white/90">
                    Segundos
                  </div>
                </div>
              </div>

          
              <div className="mt-4 text-center text-[12px] font-bold text-white/90">
                DE <span className="line-through">R$147,99</span> POR APENAS
              </div>

              <div className="mt-3 flex justify-center">
                <div className="rounded-full border-2 border-[#FF5A00] px-10 py-3">
                  <span className="text-[42px] font-black tracking-tight">
                    R$97,00
                  </span>
                </div>
              </div>

             
              <a
                href="#checkout"
                className={[
                  "mt-5 inline-flex w-full items-center justify-center",
                  "rounded-full bg-[#FF5A00] px-6 py-3",
                  "text-[14px] font-black uppercase tracking-wide text-white",
                  "shadow-[0_0_25px_rgba(255,90,0,0.65)]",
                  "transition-transform duration-200 hover:scale-[1.03] active:scale-[0.99]",
                ].join(" ")}
              >
                COMPRAR AGORA A FÓRMULA
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
