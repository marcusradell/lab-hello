"use client";

import Image from "next/image";
import { Card } from "@/card";
import { useSearchParams } from "next/navigation";

export default function Home() {
  const searchParams = useSearchParams();

  const guest = searchParams.get("guest");

  return (
    <main className=" min-h-screen flex flex-col items-center justify-center container">
      <Card>
        <h1 className="text-4xl font-bold p-4">
          Välkommen till partyt, {guest}!
        </h1>
        <Image
          src="/sol.jpg"
          alt="Sol Rådell"
          width={300}
          height={300}
          className="rounded-full border-2 border-black"
        />
        <h2 className="text-2xl font-bold p-4">
          <span className="text-fuchsia-600">Sol</span>
          <span className="text-emerald-600"> Rut</span>
          <span className="text-blue-600"> Lisa</span>
          <span className="text-purple-600"> Juliana</span>
          <span className="text-red-600"> Rådell</span>
        </h2>
      </Card>

      <Card>
        <h3 className="text-3xl font-bold p-4">När?</h3>
        <p className="text-xl p-4">Lördagen den 13:e april 14:00</p>
      </Card>

      <Card>
        <h3 className="text-3xl font-bold p-4">Vart?</h3>
        <p className="text-xl p-4">
          <a
            className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
            href="https://maps.app.goo.gl/yP8Fx5i4L1Ufw51M8"
          >
            Snickarvägen 27, 197 30 Bro
          </a>
        </p>
      </Card>

      <Card>
        <h3 className="text-3xl font-bold p-4">Tema</h3>
        <p className="text-xl p-4">Unicorns 🦄 and Rainbows 🌈</p>
      </Card>
    </main>
  );
}
