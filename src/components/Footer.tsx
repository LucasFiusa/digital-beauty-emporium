import mastercard from "@/assets/mastercard.png";
import visa from "@/assets/visa.png";
import pix from "@/assets/pix.png";
import boleto from "@/assets/boleto.png";
import instagram from "@/assets/instagram.png";
import facebook from "@/assets/facebook-passoia.png";
import youtube from "@/assets/youtube.png";
import twitter from "@/assets/twitter-passoia.png";

const Footer = () => {
  return (
    <footer className="bg-footer text-footer py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Atendimentos */}
          <div className="text-center md:text-left">
            <h3 className="text-lg font-bold mb-4 text-primary-foreground">Atendimentos</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:text-primary-foreground transition-colors">
                  Fale Conosco
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary-foreground transition-colors">
                  Perguntas Frequentes
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary-foreground transition-colors">
                  Meus Pedidos
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary-foreground transition-colors">
                  Nossas Lojas
                </a>
              </li>
            </ul>
          </div>

          {/* Formas de Pagamento */}
          <div className="text-center">
            <h3 className="text-lg font-bold mb-4 text-primary-foreground uppercase">
              Formas de Pagamento
            </h3>
            <div className="flex justify-center gap-4 flex-wrap">
              <img src={mastercard} alt="Mastercard" className="h-8 object-contain" />
              <img src={visa} alt="Visa" className="h-8 object-contain" />
              <img src={pix} alt="Pix" className="h-8 object-contain" />
              <img src={boleto} alt="Boleto" className="h-8 object-contain" />
            </div>
          </div>

          {/* Redes Sociais */}
          <div className="text-center md:text-right">
            <h3 className="text-lg font-bold mb-4 text-primary-foreground uppercase">
              Siga-nos nas Redes Sociais
            </h3>
            <div className="flex justify-center md:justify-end gap-4">
              <a href="#" className="hover:opacity-80 transition-opacity">
                <img src={instagram} alt="Instagram" className="h-8 w-8 object-contain" />
              </a>
              <a href="#" className="hover:opacity-80 transition-opacity">
                <img src={facebook} alt="Facebook" className="h-8 w-8 object-contain" />
              </a>
              <a href="#" className="hover:opacity-80 transition-opacity">
                <img src={youtube} alt="YouTube" className="h-8 w-8 object-contain" />
              </a>
              <a href="#" className="hover:opacity-80 transition-opacity">
                <img src={twitter} alt="Twitter" className="h-8 w-8 object-contain" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-footer-text/20 text-center text-sm">
          <p>&copy; 2024 Passoia. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
