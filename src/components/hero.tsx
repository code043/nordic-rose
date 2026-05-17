import Image from "next/image";

export default function Hero() {
  return (
    <>
      <div className="flex justify-center m-1">
        <Image
          src="/hero.png"
          alt="imagem"
          width={800}
          height={500}
          className=" "
        />
      </div>
      <h1 className="text-center text-4xl font-bold tracking-tight leading-tight mt-10 font-serif p-5">
        A few words about this blog platform, Ghost, and how this site was made
      </h1>
      <p className="text-center leading-relaxed p-10">
        Why Ghost (& Figma) instead of Medium, WordPress or other options?
      </p>
    </>
  );
}
