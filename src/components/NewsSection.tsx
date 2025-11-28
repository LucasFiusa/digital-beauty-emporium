import novidades from "@/assets/novidades.png";

const NewsSection = () => {
  return (
    <section id="novidades" className="py-12 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="section-title">Novidades para Você</h2>
      </div>
      <img
        src={novidades}
        alt="Novidades em maquiagem"
        className="w-full h-[50vh] object-cover"
      />
    </section>
  );
};

export default NewsSection;
