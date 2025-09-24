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
  return <section id="inicio" className="pt-20 min-h-screen relative bg-gradient-to-br from-background via-background to-accent/5" style={{
    backgroundImage: `url(/lovable-uploads/7e69b8e0-38e7-4574-adbf-3224459b8972.png)`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat'
  }}>
      <div className="absolute inset-0 bg-pablo-black/60"></div>
      <div className="container mx-auto px-4 py-16 relative z-10">
        <div className="flex flex-col items-center justify-center text-center min-h-[80vh]">
          {/* Content */}
          <div className="space-y-8 max-w-4xl">
            <div className="space-y-4">
              <h1 className="text-4xl font-bold leading-tight text-slate-50 lg:text-6xl">
                Pablo Auto Center
              </h1>
              <h2 className="text-xl text-slate-50 lg:text-2xl">
                Especialista em Jeep Compass, Renegade e Suzuki Jimny com 15 anos de experiência
              </h2>
              <p className="text-lg leading-relaxed text-zinc-50">
                Somos uma empresa moderna e altamente experiente, com compromisso com a segurança dos nossos clientes. 
                Buscamos entregar excelência em peças e serviços para manutenção dos veículos que carregam a vida dos nossos clientes.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-16">
              <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 shadow-lg" onClick={() => window.open("https://wa.me/5593992274247", "_blank")}>
                Falar no WhatsApp
              </Button>
              <Button variant="outline" size="lg" onClick={() => document.querySelector('#servicos')?.scrollIntoView({
              behavior: 'smooth'
            })} className="border-accent/60 text-accent hover:bg-accent hover:text-accent-foreground">
                Ver serviços
              </Button>
            </div>
          </div>
        </div>

        {/* Modelos de Jeep na parte inferior */}
        <div className="mt-32 text-center pb-16">
          <h3 className="text-2xl font-bold text-slate-50 mb-8">Especialização Total</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-2xl mx-auto">
            <div className="p-6 bg-background/90 rounded-lg border backdrop-blur-sm">
              <p className="font-semibold text-accent text-lg">Jeep Compass</p>
            </div>
            <div className="p-6 bg-background/90 rounded-lg border backdrop-blur-sm">
              <p className="font-semibold text-accent text-lg">Jeep Renegade</p>
            </div>
            <div className="p-6 bg-background/90 rounded-lg border backdrop-blur-sm">
              <p className="font-semibold text-accent text-lg">Suzuki Jimny</p>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default Hero;