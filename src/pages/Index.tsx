import Header from "@/components/Header";
import Hero from "@/components/Hero";
import LooksSection from "@/components/LooksSection";
import LaunchesSection from "@/components/LaunchesSection";
import NewsSection from "@/components/NewsSection";
import Footer from "@/components/Footer";
const Index = () => {
  return <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <Hero />
        <LooksSection />
        <LaunchesSection />
        <NewsSection />
      </main>
      <Footer className="bg-[#e1e1e1]" />
    </div>;
};
export default Index;