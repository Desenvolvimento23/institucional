import Header from "@/components/Header";
import Hero from "@/components/Hero";
import History from "@/components/History";
import Companies from "@/components/Companies";
import Partners from "@/components/Partners";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="site-shell">
      <Header />
      <main>
        <Hero />
        <History />
        <Companies />
        <Partners />
      </main>
      <Footer />
    </div>
  );
}
