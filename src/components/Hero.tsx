import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Wrench, Shield, Star, CheckCircle } from "lucide-react";

const Hero = () => {
  const features = [
    { icon: Star, text: "15 anos de experiência" },
    { icon: Shield, text: "Peças de qualidade" },
    { icon: Wrench, text: "Mão de obra qualificada" },
    { icon: CheckCircle, text: "Padrão elevado" },
  ];

  return (
    <section 
      id="inicio" 
      className="pt-20 min-h-screen relative bg-gradient-to-br from-background via-background to-accent/5"
      style={{
        backgroundImage: 'url(/hero-background.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      <div className="absolute inset-0 bg-pablo-black/60"></div>
      <div className="container mx-auto px-4 py-16 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl lg:text-6xl font-bold text-foreground leading-tight">
                Pablo Auto Center
              </h1>
              <h2 className="text-xl lg:text-2xl text-muted-foreground">
                Especialista em Jeep Compass, Renegade e Suzuki Jimny com 15 anos de experiência
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Somos uma empresa moderna e altamente experiente, com compromisso com a segurança dos nossos clientes. 
                Buscamos entregar excelência em peças e serviços para manutenção dos veículos que carregam a vida dos nossos clientes.
              </p>
            </div>

            {/* Features Grid */}
            <div className="grid grid-cols-2 gap-4">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center space-x-3 p-3 rounded-lg bg-card border">
                  <feature.icon className="w-6 h-6 text-accent" />
                  <span className="text-sm font-medium">{feature.text}</span>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                className="bg-accent text-accent-foreground hover:bg-accent/90 shadow-lg"
                onClick={() => window.open("https://wa.me/5593992274247", "_blank")}
              >
                Falar no WhatsApp
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                onClick={() => document.querySelector('#servicos')?.scrollIntoView({ behavior: 'smooth' })}
                className="border-accent/60 text-accent hover:bg-accent hover:text-accent-foreground"
              >
                Ver serviços
              </Button>
            </div>
          </div>

          {/* Image/Visual Element */}
          <div className="relative">
            <Card className="p-8 bg-gradient-to-br from-accent/10 to-accent/5 border-accent/20">
              <div className="text-center space-y-6">
                <img 
                  src="/logo-pablo.png" 
                  alt="Pablo Auto Center Logo" 
                  className="h-32 w-auto mx-auto"
                />
                <div className="space-y-4">
                  <h3 className="text-2xl font-bold text-foreground">Especialização Total</h3>
                  <div className="grid grid-cols-1 gap-3">
                    <div className="p-3 bg-background rounded-lg border">
                      <p className="font-semibold text-accent">Jeep Compass</p>
                    </div>
                    <div className="p-3 bg-background rounded-lg border">
                      <p className="font-semibold text-accent">Jeep Renegade</p>
                    </div>
                    <div className="p-3 bg-background rounded-lg border">
                      <p className="font-semibold text-accent">Suzuki Jimny</p>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;