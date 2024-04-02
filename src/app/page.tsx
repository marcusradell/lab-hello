import { Card } from "@/card";

import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen bg-white bg-opacity-25 m-auto flex flex-col items-center justify-center gap-4 container">
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

      <Card>
        <h3 className="text-3xl font-bold p-4">När?</h3>
        <p className="text-xl">Lördagen den 13:e april Klockan 14:00</p>
      </Card>

      <Card>
        <h3 className="text-3xl font-bold p-4">Vart?</h3>
        <p className="text-xl">
          <a
            className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
            href="https://maps.app.goo.gl/yP8Fx5i4L1Ufw51M8"
          >
            Snickarvägen 27, 197 30 Bro
          </a>
        </p>
      </Card>

      <Card>
        <h3 className="text-3xl font-bold">Tema</h3>
        <p className="text-xl p-4">Unicorns 🦄 and Rainbows 🌈</p>
        <p>
          <em>Klä ut er som ni vill, och om ni vill!</em>
        </p>
      </Card>

      <Card>
        <h3 className="text-3xl font-bold">Telefon</h3>

        <p className="text-xl pt-4">
          Pappa Marcus:{" "}
          <a
            className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
            href="tel:+46725223325"
          >
            0725 22 33 25
          </a>
        </p>
        <p className="text-xl pb-4">
          Mamma Sandra:{" "}
          <a
            className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
            href="tel:+46730441534"
          >
            073 044 15 34
          </a>
        </p>
      </Card>
    </main>
  );
}
