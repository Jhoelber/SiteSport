
import { Button } from "../Button";

const BG =
  "https://res.cloudinary.com/drukanr6m/image/upload/v1770157062/bgsection1_tsryqd.jpg";

const IFRAME_SRC = "https://player-vz-2cc8bbeb-04f.tv.pandavideo.com.br/embed/?v=8771e2a0-5835-43e1-9746-a195e8dc50f6"; // <--arrumar

export const Section1 = () => {
  return (
    <section className="relative w-full overflow-hidden text-white">
    
      <img
        className="absolute inset-0 -z-20 h-full w-full object-cover object-[center_top]"
        src={BG}
        alt=""
        draggable={false}
      />
   
      <div className="absolute inset-0 -z-10 bg-black/35" />

      <div className="mx-auto w-full max-w-[1140px] px-4 py-[70px] sm:py-[95px]">
        <div className="grid grid-cols-1 md:grid-cols-2">
         
          <div className="flex flex-col items-center md:pr-6">
            <img
              src="https://res.cloudinary.com/drukanr6m/image/upload/v1770157061/logo_gbvkis.png"
              alt="Desafio 24 Dias"
              className="w-[260px] sm:w-[320px] select-none"
              draggable={false}
            />

            <h1 className="mt-6 text-center font-['Montserrat'] text-[22px] sm:text-[28px] font-black leading-[1.15] uppercase">
              CONHEÇA A FÓRMULA INFALÍVEL PARA
            </h1>

            <h2 className="mt-1 text-center font-['Montserrat'] text-[22px] sm:text-[28px] font-black leading-[1.15] uppercase text-[#FF500B]">
              ELIMINAR DE 3 A 7KG SEM PASSAR FOME
            </h2>

            <p className="mt-4 max-w-[560px] text-center font-['Montserrat'] text-[14px] sm:text-[16px] font-semibold leading-[1.35] text-white/90">
              Um guia completo para transformar seu corpo e deixar qualquer homem
              completamente obcecado por você!
            </p>

            
            <div className="mt-6 w-full max-w-[620px]">
              <div className="rounded-[6px] border border-[#FF5A00]/70 bg-black/30 p-[10px] shadow-[0_18px_40px_rgba(0,0,0,0.6)]">
                <div className="overflow-hidden rounded-[4px] bg-black">
                  <div className="relative w-full pt-[56.25%]">
                    <iframe
                      src={IFRAME_SRC}
                      className="absolute inset-0 h-full w-full"
                      allow="autoplay; fullscreen; picture-in-picture"
                      allowFullScreen
                      loading="lazy"
                      title="Vídeo"
                    />
                  </div>
                </div>
              </div>
            </div>

         
            <div className="mt-5 w-full max-w-[620px] flex justify-center">
              <div className="w-full max-w-[520px]">
                <Button href="#checkout" />
              </div>
            </div>
          </div>

      
          <div className="hidden md:block" />
        </div>
      </div>
    </section>
  );
};
