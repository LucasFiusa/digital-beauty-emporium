import novidades from "@/assets/novidades.png";

const NewsSection = () => {
  return (
    <section id="novidades" className="py-12 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="section-title">Novidades para Você</h2>

        <div className="flex justify-center">
          <img
            src={novidades}
            alt="Novidades em maquiagem"
            className="w-full h-[50vh] object-cover rounded-lg shadow-md"
          />
        </div>
      </div>
    </section>
  );
};

export default NewsSection;
