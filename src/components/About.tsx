import { Card } from "@/components/ui/card";
import { Users, Award, Wrench, Shield } from "lucide-react";

const About = () => {
  const highlights = [
    {
      icon: Award,
      title: "15 anos de experiência",
      description: "Mais de uma década servindo a região de Santarém com excelência"
    },
    {
      icon: Users,
      title: "Time profissional",
      description: "Equipe especializada e constantemente atualizada"
    },
    {
      icon: Wrench,
      title: "Mão de obra qualificada",
      description: "Técnicos especializados na linha Jeep nacional"
    },
    {
      icon: Shield,
      title: "Peças de qualidade",
      description: "Apenas peças originais e de fornecedores confiáveis"
    }
  ];

  return (
    <section id="sobre" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Sobre a Pablo Auto Center
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Especializada na linha Jeep nacional, somos referência em manutenção automotiva em Santarém-PA
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-foreground">
              Compromisso com a excelência
            </h3>
            <p className="text-lg text-muted-foreground leading-relaxed">
              A Pablo Auto Center é uma empresa moderna e altamente experiente, especializada em veículos 
              Jeep Compass, Renegade e Suzuki Jimny. Nosso compromisso é com a segurança dos nossos clientes, 
              oferecendo confiança e qualidade em cada serviço.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Buscamos entregar excelência em peças e serviços para manutenção dos veículos que carregam 
              a vida dos nossos clientes. Com 15 anos de experiência no mercado, nossa equipe é 
              constantemente treinada para oferecer o melhor atendimento.
            </p>
          </div>

          <div className="relative flex justify-center">
            <video 
              className="max-w-md w-full h-auto rounded-lg shadow-lg"
              autoPlay
              loop
              muted
              playsInline
            >
              <source src="/galeria/video1.mp4" type="video/mp4" />
              Seu navegador não suporta o elemento de vídeo.
            </video>
          </div>
        </div>

        {/* Nossos Diferenciais */}
        <div className="mb-16">
          <Card className="p-8 bg-gradient-to-br from-accent/10 to-accent/5 border-accent/20 max-w-4xl mx-auto">
            <h4 className="text-2xl font-bold text-foreground mb-6 text-center">Nossos diferenciais</h4>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="flex items-center space-x-3">
                <div className="w-3 h-3 bg-accent rounded-full"></div>
                <span className="text-lg">Especialização total na linha Jeep nacional</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-3 h-3 bg-accent rounded-full"></div>
                <span className="text-lg">Diagnóstico eletrônico avançado</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-3 h-3 bg-accent rounded-full"></div>
                <span className="text-lg">Manutenção preventiva e corretiva</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-3 h-3 bg-accent rounded-full"></div>
                <span className="text-lg">Atendimento personalizado</span>
              </div>
            </div>
          </Card>
        </div>

        {/* Highlights Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {highlights.map((highlight, index) => (
            <Card key={index} className="p-6 text-center hover:shadow-lg transition-shadow duration-300">
              <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <highlight.icon className="w-8 h-8 text-accent" />
              </div>
              <h4 className="text-lg font-bold text-foreground mb-2">
                {highlight.title}
              </h4>
              <p className="text-sm text-muted-foreground">
                {highlight.description}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;