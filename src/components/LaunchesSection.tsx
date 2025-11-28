import { useState } from "react";
import aberto from "@/assets/aberto.png";
import fechado from "@/assets/fechado.png";
import batom from "@/assets/batom.png";
import cinzaBoca from "@/assets/cinza-boca.png";
import bordoBoca from "@/assets/bordo-boca.png";
import nudeBoca from "@/assets/nude-boca.png";
import vermelhoBoca from "@/assets/vermelho-boca.png";
import cinzaColor from "@/assets/cinza-color.png";
import vermelhoColor from "@/assets/vermelho-color.png";
import bordoColor from "@/assets/bordo-color.png";
import nudeColor from "@/assets/nude-color.png";
import estrelas from "@/assets/estrelas.png";

interface ColorOption {
  id: string;
  colorImage: string;
  lipImage: string;
}

const colors: ColorOption[] = [
  { id: "cinza", colorImage: cinzaColor, lipImage: cinzaBoca },
  { id: "vermelho", colorImage: vermelhoColor, lipImage: vermelhoBoca },
  { id: "bordo", colorImage: bordoColor, lipImage: bordoBoca },
  { id: "nude", colorImage: nudeColor, lipImage: nudeBoca },
];

const LaunchesSection = () => {
  const [selectedColor, setSelectedColor] = useState<ColorOption>(colors[0]);

  return (
    <section id="lancamentos" className="py-12 bg-gray-light">
      <div className="container mx-auto px-4">
        <h2 className="section-title">Aproveite os Lançamentos</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
          {/* 1ª Divisão - Imagens empilhadas (hidden on mobile) */}
          <div className="hidden md:flex flex-col gap-4 items-center">
            <img
              src={aberto}
              alt="Batom aberto"
              className="w-40 h-auto object-contain"
            />
            <img
              src={fechado}
              alt="Batom fechado"
              className="w-40 h-auto object-contain"
            />
            <img
              src={batom}
              alt="Batons"
              className="w-40 h-auto object-contain"
            />
          </div>

          {/* 2ª Divisão - Imagem principal */}
          <div className="flex justify-center">
            <img
              src={selectedColor.lipImage}
              alt="Modelo com batom"
              className="w-full max-w-sm rounded-lg shadow-lg transition-opacity duration-300"
            />
          </div>

          {/* 3ª Divisão - Cores e descrição */}
          <div className="flex flex-col gap-4">
            <img src={estrelas} alt="5 estrelas" className="h-6 w-auto object-contain self-start" />

            <h3 className="text-xl font-bold text-charcoal">Matte Premium</h3>

            <div>
              <p className="text-muted-foreground mb-3">Cores disponíveis</p>
              <div className="flex gap-3">
                {colors.map((color) => (
                  <button
                    key={color.id}
                    onClick={() => setSelectedColor(color)}
                    className={`color-swatch overflow-hidden ${
                      selectedColor.id === color.id ? "active" : ""
                    }`}
                  >
                    <img
                      src={color.colorImage}
                      alt={`Cor ${color.id}`}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            </div>

            <div className="mt-4">
              <h4 className="text-lg font-semibold text-charcoal mb-2">Descrição</h4>
              <p className="text-muted-foreground text-sm leading-relaxed">
                O Batom Matte possui uma fórmula inovadora desenvolvida para entregar o máximo de cor na primeira aplicação com um deslize suave e macio. Tem acabamento matte aveludado e manteiga de manga que ajuda a hidratar e a proteger os lábios contra ressecamento. Ajuda na hidratação dos lábios, textura fina e macia que não pesa nos lábios.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LaunchesSection;
