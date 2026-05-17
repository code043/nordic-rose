import Articles from "@/components/articles";
import Footer from "@/components/footer";
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
       <section className="py-10">
        <Footer />
      </section>
    </main>
  );
}
