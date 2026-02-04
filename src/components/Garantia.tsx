

export const Garantia = () => {
  return (
    <div className=" p-6 md:p-10 bg-black">
      <div className="flex flex-col items-center gap-6 md:flex-row md:items-center md:justify-center md:gap-10">
        <img
          src="https://res.cloudinary.com/drukanr6m/image/upload/v1770157063/garantia_7_g8asgu.png"
          alt="Garantia 7 dias"
          className="h-28 w-28 shrink-0 object-contain md:h-40 md:w-40"
        />

        <div className="w-full max-w-2xl text-center md:text-left">
          <h3 className="text-xl font-extrabold tracking-wide text-amber-400 md:text-2xl">
            VOCÊ ESTÁ SEGURO, FIQUE TRANQUILO!
          </h3>

          <p className="mt-4 leading-relaxed text-zinc-200">
            <span className="font-bold">
              O código de defesa consumidor (Art. 49) garante 7 dias para
              solicitar reembolso em caso de insatisfação com o produto.
            </span>{" "}
            E se por QUALQUER RAZÃO você entender que este treinamento não é para
            você, basta me avisar e que te devolvo cada centavo que você
            investiu, sem qualquer questionamento.
          </p>
        </div>
      </div>
    </div>
  );
};
