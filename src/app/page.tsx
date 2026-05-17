import Image from "next/image";

export default function Home() {
  return (
    <section className="py-10">
      <div className="flex justify-center mt-10">
        <Image
          src="/hero.png"
          alt="imagem"
          width={800}
          height={500}
          className=" "
        />
      </div>
    </section>
  );
}
