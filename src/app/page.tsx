import Articles from "@/components/articles";
import Hero from "@/components/hero";

export default function Home() {
  return (
    <main>
      <section className="py-10">
        <Hero />
      </section>
      <section className="py-10">
        <Articles />
      </section>
    </main>
  );
}
