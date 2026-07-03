import Header from '@/components/Header';
import Hero from '@/components/Hero';
import History from '@/components/History';
import Companies from '@/components/Companies';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <div className="site-shell">
      <Header />
      <main>
        <Hero />
        <History />
        <Companies />
      </main>
      <Footer />
    </div>
  );
}
