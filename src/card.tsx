type Props = {
  children: React.ReactNode;
};

export const Card = ({ children }: Props) => (
  <div
    // className={`w-[600px] rounded overflow-hidden shadow-lg bg-amber-50 flex flex-col items-center justify-center bg-opacity-50 ${font.className}`}
    className="flex flex-col items-center justify-center"
  >
    {children}
  </div>
);
