import { Phone, Mail, MapPin, Instagram, Facebook } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <img 
              src="/lovable-uploads/3e5aa8b9-6bed-4d14-b49c-eea602431317.png" 
              alt="Pablo Auto Center" 
              className="h-16 w-auto"
            />
            <p className="text-sm opacity-90">
              Especializada em Jeep Compass, Renegade e Suzuki Jimny. 
              15 anos de experiência em manutenção automotiva.
            </p>
            <p className="text-xs opacity-70">
              CNPJ: 34.394.856/0001-00
            </p>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Contato</h3>
            <div className="space-y-2 text-sm">
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4" />
                <span>(93) 99227-4247</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="w-4 h-4" />
                <span>galpao4x4stm@gmail.com</span>
              </div>
              <div className="flex items-start space-x-2">
                <MapPin className="w-4 h-4 mt-0.5" />
                <span>Av. Sérgio Henn, 1018<br />Jardim Santarém, Santarém-PA</span>
              </div>
            </div>
          </div>

          {/* Business Hours & Social */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Horário de funcionamento</h3>
            <div className="text-sm space-y-1">
              <p>Segunda a Sexta: 08h às 12h e 14h às 18h</p>
              <p>Sábado: 08h às 12h</p>
            </div>
            
            <div className="pt-4">
              <h4 className="text-sm font-semibold mb-2">Redes sociais</h4>
              <div className="flex space-x-3">
                <a 
                  href="https://www.instagram.com/pablo_autocenter4x4" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-8 h-8 bg-primary-foreground/10 rounded-full flex items-center justify-center hover:bg-primary-foreground/20 transition-colors"
                >
                  <Instagram className="w-4 h-4" />
                </a>
                <a 
                  href="https://www.facebook.com/p/Pablo-Auto-Center-100061038021774/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-8 h-8 bg-primary-foreground/10 rounded-full flex items-center justify-center hover:bg-primary-foreground/20 transition-colors"
                >
                  <Facebook className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center">
          <p className="text-sm opacity-70">
            © 2024 Pablo Auto Center. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;