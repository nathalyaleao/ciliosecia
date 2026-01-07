import { AnimatedSection, StaggerContainer, StaggerItem } from "./AnimatedSection";
import { Check, ArrowRight } from "lucide-react";

const plans = [
  {
    name: "Essencial",
    price: "R$ 99",
    period: "/mês",
    description: "Perfeito para quem está começando",
    features: [
      "1 manutenção de cílios por mês",
      "Design de sobrancelhas mensal",
      "10% de desconto em produtos",
      "Agendamento prioritário",
    ],
    highlighted: false,
  },
  {
    name: "Premium",
    price: "R$ 189",
    period: "/mês",
    description: "Nosso plano mais popular",
    features: [
      "2 manutenções de cílios por mês",
      "Design de sobrancelhas quinzenal",
      "20% de desconto em produtos",
      "Agendamento VIP",
      "Tratamentos capilares inclusos",
    ],
    highlighted: true,
  },
  {
    name: "Elite",
    price: "R$ 299",
    period: "/mês",
    description: "Experiência completa de beleza",
    features: [
      "Manutenções ilimitadas",
      "Todos os serviços inclusos",
      "30% de desconto em produtos",
      "Atendimento exclusivo",
      "Brindes mensais",
      "Parceria com salões",
    ],
    highlighted: false,
  },
];

export const Pricing = () => {
  return (
    <section id="planos" className="py-20 md:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        <AnimatedSection className="text-center mb-16" direction="up">
          <span className="inline-block text-sm text-muted-foreground mb-4">
            Planos e preços
          </span>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Escolha seu plano
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Pacotes pensados para cuidar do seu olhar com economia e praticidade
          </p>
        </AnimatedSection>

        <StaggerContainer className="grid md:grid-cols-3 gap-6">
          {plans.map((plan) => (
            <StaggerItem key={plan.name} direction="up">
              <div
                className={`rounded-3xl p-8 h-full flex flex-col ${
                  plan.highlighted
                    ? "bg-primary text-primary-foreground"
                    : "bg-card border border-border"
                }`}
              >
                {plan.highlighted && (
                  <span className="inline-block self-start text-xs bg-primary-foreground text-primary px-3 py-1 rounded-full mb-4">
                    Mais popular
                  </span>
                )}
                <h3 className="font-heading font-semibold text-xl mb-2">{plan.name}</h3>
                <p
                  className={`text-sm mb-6 ${
                    plan.highlighted ? "text-primary-foreground/70" : "text-muted-foreground"
                  }`}
                >
                  {plan.description}
                </p>
                <div className="mb-6">
                  <span className="font-heading font-bold text-4xl">{plan.price}</span>
                  <span
                    className={`text-sm ${
                      plan.highlighted ? "text-primary-foreground/70" : "text-muted-foreground"
                    }`}
                  >
                    {plan.period}
                  </span>
                </div>
                <ul className="space-y-3 mb-8 flex-grow">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-3 text-sm">
                      <Check
                        size={16}
                        strokeWidth={1.5}
                        className={plan.highlighted ? "text-primary-foreground" : "text-foreground"}
                      />
                      {feature}
                    </li>
                  ))}
                </ul>
                <button
                  className={`w-full py-3 px-4 rounded-full text-sm font-medium transition-colors duration-200 inline-flex items-center justify-center gap-2 ${
                    plan.highlighted
                      ? "bg-primary-foreground text-primary hover:bg-primary-foreground/90"
                      : "border border-border text-foreground hover:bg-accent"
                  }`}
                >
                  Assinar agora
                  <ArrowRight size={16} strokeWidth={1.5} />
                </button>
                <p
                  className={`text-xs text-center mt-4 ${
                    plan.highlighted ? "text-primary-foreground/60" : "text-muted-foreground"
                  }`}
                >
                  Cancele fácil, sem complicação.
                </p>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
};
