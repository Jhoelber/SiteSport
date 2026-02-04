// src/components/Section5.tsx
export const Section5 = () => {
  return (
    <section className="w-full bg-black text-white">
      <div className="mx-auto w-full max-w-[1140px] px-4 py-12 sm:py-16">
       
        <img
          src="https://res.cloudinary.com/drukanr6m/image/upload/v1770157061/logo_gbvkis.png"
          alt="Desafio 24 dias"
          className="mx-auto h-[52px] sm:h-[64px] w-auto select-none"
          draggable={false}
        />

   
        <h2 className="mt-8 text-center font-['Montserrat'] text-[18px] sm:text-[22px] font-extrabold uppercase tracking-wide">
          VEJA O QUE ESTÃO DIZENDO DO NOSSO PRODUTO
        </h2>

        <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 place-items-center">
          <img
            src="https://res.cloudinary.com/drukanr6m/image/upload/v1770157062/comentario1_ccllaj.jpg"
            alt="Depoimento 1"
            className="w-full max-w-[320px] rounded-[2px] shadow-[0_20px_50px_rgba(0,0,0,0.6)]"
            draggable={false}
          />
          <img
            src="https://res.cloudinary.com/drukanr6m/image/upload/v1770157063/comentario2_ifhtoy.jpg"
            alt="Depoimento 2"
            className="w-full max-w-[320px] rounded-[2px] shadow-[0_20px_50px_rgba(0,0,0,0.6)]"
            draggable={false}
          />
          <img
            src="https://res.cloudinary.com/drukanr6m/image/upload/v1770157066/comentario3_phlof0.jpg"
            alt="Depoimento 3"
            className="w-full max-w-[320px] rounded-[2px] shadow-[0_20px_50px_rgba(0,0,0,0.6)]"
            draggable={false}
          />
        </div>

       
        <div className="mt-10 flex justify-center">
          <img
            src="https://res.cloudinary.com/drukanr6m/image/upload/v1770157061/ebookcompleto_yruo9z.png"
            alt="E-book completo"
            className="w-[520px] max-w-[90%] select-none"
            draggable={false}
          />
        </div>
      </div>
    </section>
  );
};
