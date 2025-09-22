import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Wrench, 
  Cog, 
  Zap, 
  Droplets, 
  RotateCcw, 
  Car,
  CheckCircle 
} from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Car,
      title: "Especializada na linha Jeep nacional",
      description: "Atendimento especializado para Jeep Compass, Renegade e modelos nacionais",
      features: ["Conhecimento técnico especializado", "Peças originais", "Diagnóstico preciso"]
    },
    {
      icon: CheckCircle,
      title: "Revisão geral",
      description: "Inspeção completa do veículo para garantir segurança e performance",
      features: ["Checklist completo", "Relatório detalhado", "Preventiva e corretiva"]
    },
    {
      icon: Wrench,
      title: "Revisão de freios e suspensão",
      description: "Manutenção dos sistemas de segurança mais importantes do veículo",
      features: ["Teste de frenagem", "Inspeção de amortecedores", "Troca de pastilhas"]
    },
    {
      icon: Cog,
      title: "Manutenção em transmissão automática",
      description: "Serviços especializados para transmissões automáticas",
      features: ["Diagnóstico eletrônico", "Reparo especializado", "Manutenção preventiva"]
    },
    {
      icon: Zap,
      title: "Diagnóstico eletrônico",
      description: "Identificação precisa de problemas através de equipamentos modernos",
      features: ["Scanner automotivo", "Análise de códigos", "Relatório técnico"]
    },
    {
      icon: Droplets,
      title: "Troca do fluido de transmissão automática",
      description: "Manutenção essencial para longevidade da transmissão",
      features: ["Fluidos originais", "Procedimento técnico", "Teste pós-serviço"]
    },
    {
      icon: RotateCcw,
      title: "Troca de óleo motor e filtros",
      description: "Manutenção básica essencial para o motor do seu veículo",
      features: ["Óleos de qualidade", "Filtros originais", "Descarte ecológico"]
    }
  ];

  return (
    <section id="servicos" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Nossos serviços
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Oferecemos uma gama completa de serviços especializados para Jeep Compass, Renegade e Suzuki Jimny
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {services.map((service, index) => (
            <Card key={index} className="p-6 hover:shadow-lg transition-all duration-300 group">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-accent/20 transition-colors">
                  <service.icon className="w-6 h-6 text-accent" />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-bold text-foreground mb-2">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground mb-4 text-sm">
                    {service.description}
                  </p>
                  <ul className="space-y-1">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center space-x-2 text-sm">
                        <div className="w-1.5 h-1.5 bg-accent rounded-full"></div>
                        <span className="text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <Card className="p-8 bg-gradient-to-r from-accent/5 to-accent/10 border-accent/20">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Precisa de algum desses serviços?
            </h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Entre em contato conosco e agende uma consulta. Nossa equipe especializada está pronta para atender seu veículo.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg"
                className="bg-accent text-accent-foreground hover:bg-accent/90"
                onClick={() => window.open("https://wa.me/5593992274247", "_blank")}
              >
                Agendar pelo WhatsApp
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                onClick={() => document.querySelector('#contato')?.scrollIntoView({ behavior: 'smooth' })}
                className="border-accent/60 text-accent hover:bg-accent hover:text-accent-foreground"
              >
                Ver contato
              </Button>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Services;