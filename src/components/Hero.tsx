import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Wrench, Shield, Star, CheckCircle } from "lucide-react";
const Hero = () => {
  const features = [{
    icon: Star,
    text: "15 anos de experiência"
  }, {
    icon: Shield,
    text: "Peças de qualidade"
  }, {
    icon: Wrench,
    text: "Mão de obra qualificada"
  }, {
    icon: CheckCircle,
    text: "Padrão elevado"
  }];
  return <section id="inicio" className="pt-16 md:pt-20 min-h-screen relative bg-gradient-to-br from-background via-background to-accent/5" style={{
    backgroundImage: `url(/lovable-uploads/7e69b8e0-38e7-4574-adbf-3224459b8972.png)`,
    backgroundSize: 'cover',
    backgroundPosition: 'center top',
    backgroundRepeat: 'no-repeat',
    backgroundAttachment: 'fixed'
  }}>
      <div className="absolute inset-0 bg-pablo-black/60"></div>
      <div className="container mx-auto px-4 py-8 md:py-16 relative z-10">
        <div className="flex flex-col items-center justify-center text-center min-h-[calc(100vh-8rem)] md:min-h-[calc(100vh-10rem)]">
          {/* Content */}
          <div className="space-y-6 md:space-y-8 max-w-4xl w-full bg-black/50 backdrop-blur-sm rounded-xl p-6 md:p-8">
            <div className="space-y-3 md:space-y-4">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-slate-50">
                Pablo Jeep
              </h1>
              <h2 className="text-lg sm:text-xl md:text-xl lg:text-2xl text-slate-50 px-2">
                Especialista em Jeep Compass, Renegade e Suzuki Jimny com 15 anos de experiência
              </h2>
              <p className="text-base md:text-lg leading-relaxed text-zinc-50 px-4 max-w-3xl mx-auto">
                Somos uma empresa moderna e altamente experiente, com compromisso com a segurança dos nossos clientes. 
                Buscamos entregar excelência em peças e serviços para manutenção dos veículos que carregam a vida dos nossos clientes.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center px-4">
              <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 shadow-lg w-full sm:w-auto" onClick={() => window.open("https://wa.me/5593992274247", "_blank")}>
                Falar no WhatsApp
              </Button>
              <Button variant="outline" size="lg" onClick={() => document.querySelector('#servicos')?.scrollIntoView({
              behavior: 'smooth'
            })} className="border-accent/60 text-accent hover:bg-accent hover:text-accent-foreground w-full sm:w-auto">
                Ver serviços
              </Button>
            </div>
          </div>
        </div>

        {/* Modelos de Jeep na parte inferior */}
        <div className="mt-8 md:mt-16 text-center pb-8">
          <h3 className="text-xl md:text-2xl font-bold text-slate-50 mb-4 md:mb-6">Especialização Total</h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 md:gap-4 max-w-2xl mx-auto px-4">
            <div className="p-3 md:p-4 bg-background/90 rounded-lg border backdrop-blur-sm">
              <p className="font-semibold text-accent text-sm md:text-base">Jeep Compass</p>
            </div>
            <div className="p-3 md:p-4 bg-background/90 rounded-lg border backdrop-blur-sm">
              <p className="font-semibold text-accent text-sm md:text-base">Jeep Renegade</p>
            </div>
            <div className="p-3 md:p-4 bg-background/90 rounded-lg border backdrop-blur-sm">
              <p className="font-semibold text-accent text-sm md:text-base">Suzuki Jimny</p>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default Hero;