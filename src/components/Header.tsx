import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Phone, MapPin } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = [
    { label: "Início", href: "#inicio" },
    { label: "Sobre", href: "#sobre" },
    { label: "Serviços", href: "#servicos" },
    { label: "Contato", href: "#contato" },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href) as HTMLElement;
    if (element) {
      const headerHeight = 80;
      const elementPosition = element.offsetTop - headerHeight;
      window.scrollTo({
        top: elementPosition,
        behavior: "smooth",
      });
    }
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/95 backdrop-blur-sm">
      <div className="container mx-auto px-4 h-20 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center">
          <img 
            src="/lovable-uploads/3e5aa8b9-6bed-4d14-b49c-eea602431317.png" 
            alt="Pablo Auto Center" 
            className="h-12 w-auto"
          />
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {menuItems.map((item) => (
            <button
              key={item.label}
              onClick={() => scrollToSection(item.href)}
              className="text-white hover:text-accent transition-colors duration-200 font-medium"
            >
              {item.label}
            </button>
          ))}
        </nav>

        {/* Contact Info */}
        <div className="hidden lg:flex items-center space-x-4">
          <div className="flex items-center space-x-2 text-sm">
            <Phone className="w-4 h-4 text-accent" />
            <span className="text-white">(93) 99227-4247</span>
          </div>
          <Button
            variant="default"
            size="sm"
            onClick={() => window.open("https://wa.me/5593992274247", "_blank")}
            className="bg-accent text-accent-foreground hover:bg-accent/90"
          >
            WhatsApp
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? (
            <X className="w-6 h-6 text-white" />
          ) : (
            <Menu className="w-6 h-6 text-white" />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-black border-t border-border">
          <nav className="container mx-auto px-4 py-4 space-y-4">
            {menuItems.map((item) => (
              <button
                key={item.label}
                onClick={() => scrollToSection(item.href)}
                className="block w-full text-left text-white hover:text-accent transition-colors duration-200 font-medium py-2"
              >
                {item.label}
              </button>
            ))}
            <div className="pt-4 border-t border-border">
              <div className="flex items-center space-x-2 text-sm mb-3">
                <Phone className="w-4 h-4 text-accent" />
                <span className="text-white">(93) 99227-4247</span>
              </div>
              <Button
                variant="default"
                size="sm"
                onClick={() => window.open("https://wa.me/5593992274247", "_blank")}
                className="w-full bg-accent text-accent-foreground hover:bg-accent/90"
              >
                WhatsApp
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;