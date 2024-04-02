// "use client";

import { Card } from "./card";
import Image from "next/image";
// import { useSearchParams } from "next/navigation";

export const Welcome = () => {
  //   const searchParams = useSearchParams();
  //   const guest = searchParams.get("guest");

  return (
    <Card>
      <h1 className="text-4xl font-bold p-4">Välkommen till partyt!</h1>

      <Image
        priority
        src="/sol.jpg"
        alt="Sol Rådell"
        width={300}
        height={300}
        className="rounded-full border-2 border-black"
      />

      <h2 className="text-2xl font-bold p-4">
        Hos
        <span className="text-fuchsia-600"> Sol</span>
        <span className="text-emerald-600"> Rut</span>
        <span className="text-blue-600"> Lisa</span>
        <span className="text-purple-600"> Juliana</span>
        <span className="text-red-600"> Rådell</span>
      </h2>
    </Card>
  );
};
