import { AnimatedSection, StaggerContainer, StaggerItem } from "./AnimatedSection";
import { ArrowUpRight } from "lucide-react";

const services = [
  {
    title: "Extensão de Cílios",
    description: "Fios clássicos ou volume russo para um olhar natural ou dramático.",
    image: "/extensao-cilios.jpg"
  },
  {
    title: "Lash Lifting",
    description: "Curvatura natural dos seus cílios com durabilidade de até 8 semanas.",
    image: "/lash-lafintg.jpeg"
  },
  {
    title: "Design de Sobrancelhas",
    description: "Harmonização facial com técnicas de precisão e naturalidade.",
    image: "/designer-sobrancelha.jpg"
  },
  {
    title: "Micropigmentação",
    description: "Sobrancelhas fio a fio ou esfumadas para um resultado duradouro.",
    image: "/micropgmentacao.jpg"
  },
];

export const Services = () => {
  return (
    <section id="servicos" className="py-12 md:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        
        <AnimatedSection className="text-center mb-10 md:mb-16" direction="up">
          <span className="inline-block text-sm text-muted-foreground mb-4">
            Nossos serviços
          </span>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Transforme seu olhar
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Técnicas exclusivas para realçar a beleza natural dos seus olhos
          </p>
        </AnimatedSection>

        {/* MUDANÇA AQUI: gap-12 (muito espaço) no celular, e gap-8 no PC */}
        <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 md:gap-8">
          {services.map((service, index) => (
            <StaggerItem key={service.title} direction={index % 2 === 0 ? "left" : "right"}>
              <div className="group cursor-pointer">
                <div className="aspect-[4/5] rounded-3xl overflow-hidden mb-4 bg-muted">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="flex items-start justify-between gap-2">
                  <div>
                    <h3 className="font-heading font-semibold text-foreground mb-1">
                      {service.title}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {service.description}
                    </p>
                  </div>
                  <ArrowUpRight
                    size={20}
                    strokeWidth={1.5}
                    className="text-muted-foreground group-hover:text-foreground transition-colors duration-200 flex-shrink-0 mt-1"
                  />
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
};
