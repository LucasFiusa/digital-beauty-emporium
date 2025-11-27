import { useState } from "react";
import labios from "@/assets/labios.png";
import olhos from "@/assets/olhos.png";
import rosto from "@/assets/rosto.png";
import tendencia from "@/assets/tendencia.png";
import ProductModal from "./ProductModal";

interface LookItem {
  id: string;
  image: string;
  title: string;
  description: string;
  price: string;
}

const looks: LookItem[] = [
  {
    id: "labios",
    image: labios,
    title: "Lábios",
    description: "Gloss labial com acabamento brilhante e hidratante. Fórmula leve que não pesa nos lábios.",
    price: "R$ 49,90",
  },
  {
    id: "olhos",
    image: olhos,
    title: "Olhos",
    description: "Sombra dourada com glitter para um olhar marcante. Longa duração e alta pigmentação.",
    price: "R$ 79,90",
  },
  {
    id: "rosto",
    image: rosto,
    title: "Rosto",
    description: "Blush em pó com textura sedosa. Proporciona um toque natural e saudável à pele.",
    price: "R$ 59,90",
  },
  {
    id: "tendencia",
    image: tendencia,
    title: "Tendência",
    description: "Kit completo com paleta de sombras e delineador. As cores da estação para arrasar.",
    price: "R$ 129,90",
  },
];

const LooksSection = () => {
  const [selectedLook, setSelectedLook] = useState<LookItem | null>(null);

  return (
    <section id="look" className="py-12 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="section-title">Looks e Dicas de Maquiagem</h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {looks.map((look) => (
            <div
              key={look.id}
              className="look-card rounded-lg overflow-hidden shadow-md"
              onClick={() => setSelectedLook(look)}
            >
              <img
                src={look.image}
                alt={look.title}
                className="w-full aspect-[3/4] object-cover"
              />
            </div>
          ))}
        </div>
      </div>

      {selectedLook && (
        <ProductModal
          isOpen={!!selectedLook}
          onClose={() => setSelectedLook(null)}
          title={selectedLook.title}
          description={selectedLook.description}
          price={selectedLook.price}
        />
      )}
    </section>
  );
};

export default LooksSection;
