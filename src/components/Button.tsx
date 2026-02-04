// src/components/Button.tsx
type Props = {
  href?: string;
  children?: React.ReactNode;
};

export const Button = ({ href = "#", children = "EU QUERO COMEÇAR O MEU DESAFIO AGORA!" }: Props) => {
  return (
    <a
      href={href}
      className={[
        "inline-flex w-full items-center justify-center text-center",
        "rounded-[11px] bg-[#FF500B] px-6 py-4",
        "font-['Roboto'] text-[16px] sm:text-[18px] font-black uppercase tracking-wide text-white",
        "shadow-[0_0_25px_1px_rgba(255,80,11,0.9)]",
        "[text-shadow:-1px_3px_7px_rgba(0,0,0,0.89)]",
        "transition-transform duration-200 hover:scale-[1.03] active:scale-[0.99]",
      ].join(" ")}
    >
      {children}
    </a>
  );
};
