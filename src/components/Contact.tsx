import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  Instagram,
  Facebook 
} from "lucide-react";

const Contact = () => {
  const contactInfo = [
    {
      icon: Phone,
      title: "Telefone",
      value: "(93) 99227-4247",
      action: () => window.open("tel:+5593992274247", "_self")
    },
    {
      icon: Mail,
      title: "Email",
      value: "galpao4x4stm@gmail.com",
      action: () => window.open("mailto:galpao4x4stm@gmail.com", "_self")
    },
    {
      icon: MapPin,
      title: "Endereço",
      value: "Av. Sérgio Henn, 1028 - Jardim Santarém, Santarém - PA, 68020-590",
      action: () => window.open("https://maps.google.com/maps?q=Av.+Sérgio+Henn,+1028+-+Jardim+Santarém,+Santarém+-+PA,+68020-590", "_blank")
    },
    {
      icon: Clock,
      title: "Horário de funcionamento",
      value: "Seg a Sex: 08h-12h e 14h-18h | Sáb: 08h-12h",
      action: null
    }
  ];

  const socialMedia = [
    {
      icon: Instagram,
      name: "Instagram",
      url: "https://www.instagram.com/pablo_autocenter4x4",
      handle: "@pablo_autocenter4x4"
    },
    {
      icon: Facebook,
      name: "Facebook",
      url: "https://www.facebook.com/p/Pablo-Auto-Center-100061038021774/",
      handle: "Pablo Jeep"
    }
  ];

  return (
    <section id="contato" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Entre em contato
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Estamos prontos para atender você e cuidar do seu veículo com toda a expertise que você merece
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 mb-12">
          {/* Contact Information */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-foreground mb-6">
              Informações de contato
            </h3>
            
            {contactInfo.map((info, index) => (
              <Card 
                key={index} 
                className={`p-6 ${info.action ? 'cursor-pointer hover:shadow-lg' : ''} transition-all duration-300`}
                onClick={info.action || undefined}
              >
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <info.icon className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-foreground mb-1">
                      {info.title}
                    </h4>
                    <p className="text-muted-foreground">
                      {info.value}
                    </p>
                  </div>
                </div>
              </Card>
            ))}

            {/* Social Media */}
            <div className="pt-6">
              <h4 className="text-lg font-semibold text-foreground mb-4">
                Siga-nos nas redes sociais
              </h4>
              <div className="flex space-x-4">
                {socialMedia.map((social, index) => (
                  <Button
                    key={index}
                    variant="outline"
                    size="lg"
                    onClick={() => window.open(social.url, "_blank")}
                    className="flex items-center space-x-2 border-accent/60 text-accent hover:bg-accent hover:text-accent-foreground"
                  >
                    <social.icon className="w-5 h-5" />
                    <span>{social.name}</span>
                  </Button>
                ))}
              </div>
            </div>
          </div>

          {/* Map */}
          <div>
            <h3 className="text-2xl font-bold text-foreground mb-6">
              Nossa localização
            </h3>
            <Card className="p-0 overflow-hidden">
              <iframe
                src="https://www.google.com/maps?q=Av.+Sérgio+Henn,+1028,+Jardim+Santarém,+Santarém,+PA,+68020-590&output=embed"
                width="100%"
                height="400"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-96"
                title="Localização da Pablo Jeep - Av. Sérgio Henn, 1028"
              ></iframe>
              <div className="p-4 bg-card">
                <Button
                  variant="outline"
                  onClick={() => window.open("https://maps.google.com/maps?q=Av.+Sérgio+Henn,+1028+-+Jardim+Santarém,+Santarém+-+PA,+68020-590", "_blank")}
                  className="w-full border-accent/60 text-accent hover:bg-accent hover:text-accent-foreground"
                >
                  <MapPin className="w-4 h-4 mr-2" />
                  Abrir no Google Maps
                </Button>
              </div>
            </Card>
          </div>
        </div>

        {/* WhatsApp CTA */}
        <div className="text-center">
          <Card className="p-8 bg-gradient-to-r from-accent/5 to-accent/10 border-accent/20">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Fale conosco agora mesmo!
            </h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Precisa de ajuda ou quer agendar um serviço? Entre em contato pelo WhatsApp e receba atendimento personalizado.
            </p>
            <Button 
              size="lg"
              className="bg-accent text-accent-foreground hover:bg-accent/90 text-lg px-8 py-3"
              onClick={() => window.open("https://wa.me/5593992274247", "_blank")}
            >
              <Phone className="w-5 h-5 mr-2" />
              Chamar no WhatsApp
            </Button>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;