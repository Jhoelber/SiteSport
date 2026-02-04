import { Button } from "../Button";

const BG_SECTION2 =
  "https://res.cloudinary.com/drukanr6m/image/upload/v1770157063/bgsection2_imbst8.jpg"; // <- troque pela imagem de fundo da Section 2
const LIVRO =
  "https://res.cloudinary.com/drukanr6m/image/upload/v1770157061/livrosection2_xnd2ua.webp";

const itens = [
  "Como aplicar os princípios básicos do emagrecimento;",
  "Como definir a quantidade certa das refeições;",
  "Como emagrecer bebendo água;",
  "Como seguir o Desafio da forma correta;",
  "Como organizar a sua cozinha e compras;",
  "Como melhorar a sua autoimagem;",
  "Como criar disciplina e controle;",
  "E muito mais...",
];

function Bullet({ text }: { text: string }) {
  return (
    <li className="flex items-start gap-3">
     
      <span className="mt-0.5 grid h-6 w-6 place-items-center rounded-full border-2 border-[#FF5A00] text-[#FF5A00] text-sm font-black">
        ›
      </span>

      
      <span className="inline-block  px-2 py-1  text-[15px] sm:text-[16px] font-semibold leading-[1.2]">
        {text}
      </span>
    </li>
  );
}

export const Section2 = () => {
  return (
    <section className="relative w-full overflow-hidden text-white">
   
      <img
        className="absolute inset-0 -z-20 h-full w-full object-cover object-center"
        src={BG_SECTION2}
        alt=""
        draggable={false}
      />
    
      <div className="absolute inset-0 -z-10" />

      <div className="mx-auto w-full max-w-285 px-4 py-10 sm:py-14">
        <div className="grid grid-cols-1 items-center gap-10 md:grid-cols-2">
         
          <div className="flex justify-center md:justify-start">
            <img
              src={LIVRO}
              alt="Livro do Desafio"
              className="w-[92%] max-w-130 select-none"
              draggable={false}
            />
          </div>

        
          <div className="relative">
           
            <div className="rounded-md p-5 sm:p-6">
              <h2 className="text-center  text-[18px] sm:text-[22px] font-black uppercase leading-[1.1]">
                <span className="inline-block  px-3 py-2">
                  CONFIRA O QUE VOCÊ VAI APRENDER
                </span>
                <br />
                <span className="mt-2 inline-block  px-3 py-2">
                  NESTE DESAFIO EM 24 DIAS
                </span>
              </h2>

              <ul className="mt-5 space-y-3">
                {itens.map((t, i) => (
                  <Bullet key={i} text={t} />
                ))}
              </ul>

              <div className="mt-6">
                <Button />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
