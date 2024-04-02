import Image from "next/image";

export default function Home() {
  return (
    <main className=" min-h-screen p-24 flex flex-col items-center justify-center">
      <div className="rounded overflow-hidden shadow-lg bg-amber-50 flex flex-col items-center justify-center">
        <h1 className="text-4xl font-bold p-4">
          Inbjudan till födelsedagskalas hos
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
      </div>
    </main>
  );
}
