import { Sunflower } from "next/font/google";

type Props = {
  children: React.ReactNode;
};

const font = Sunflower({ subsets: ["latin"], weight: "300" });

export const Card = ({ children }: Props) => (
  <div
    className={`rounded overflow-hidden shadow-lg bg-amber-50 flex flex-col items-center justify-center bg-opacity-50 w-8/12 m-8 ${font.className}`}
  >
    {children}
  </div>
);
