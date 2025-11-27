import { useState } from "react";
import { Menu, X } from "lucide-react";
import logo from "@/assets/passoia.png";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-40 bg-background shadow-sm">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo */}
        <a href="/" className="flex-shrink-0">
          <img src={logo} alt="Passoia" className="h-10 md:h-12" />
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          <button
            onClick={() => scrollToSection("look")}
            className="nav-link"
          >
            Look
          </button>
          <button
            onClick={() => scrollToSection("lancamentos")}
            className="nav-link"
          >
            Lançamentos
          </button>
          <button
            onClick={() => scrollToSection("novidades")}
            className="nav-link"
          >
            Novidades
          </button>
        </nav>

        {/* Mobile Hamburger Button */}
        <button
          className="md:hidden p-2"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? (
            <X className="w-6 h-6 text-charcoal" />
          ) : (
            <Menu className="w-6 h-6 text-charcoal" />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden absolute top-full left-0 right-0 bg-background shadow-lg transition-all duration-300 ${
          isMenuOpen ? "max-h-64 opacity-100" : "max-h-0 opacity-0 overflow-hidden"
        }`}
      >
        <nav className="flex flex-col p-4 gap-4">
          <button
            onClick={() => scrollToSection("look")}
            className="nav-link text-left py-2 border-b border-border"
          >
            Look
          </button>
          <button
            onClick={() => scrollToSection("lancamentos")}
            className="nav-link text-left py-2 border-b border-border"
          >
            Lançamentos
          </button>
          <button
            onClick={() => scrollToSection("novidades")}
            className="nav-link text-left py-2"
          >
            Novidades
          </button>
        </nav>
      </div>
    </header>
  );
};

export default Header;
