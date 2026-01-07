import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { AnimatedSection } from "./AnimatedSection";
import { Check } from "lucide-react";

const tabsData = {
  cilios: {
    title: "Cílios",
    services: [
      {
        name: "Extensão Clássica",
        duration: "2h",
        price: "R$ 180",
        features: ["Fios fio a fio", "Durabilidade de 4 semanas", "Manutenção inclusa"],
      },
      {
        name: "Volume Russo",
        duration: "2h30",
        price: "R$ 250",
        features: ["Volume 3D a 6D", "Efeito dramático", "Ideal para eventos"],
      },
      {
        name: "Lash Lifting",
        duration: "1h",
        price: "R$ 120",
        features: ["Curvatura natural", "Durabilidade 8 semanas", "Inclui tintura"],
      },
    ],
  },
  sobrancelhas: {
    title: "Sobrancelhas",
    services: [
      {
        name: "Design com Henna",
        duration: "45min",
        price: "R$ 70",
        features: ["Harmonização facial", "Coloração natural", "Durabilidade 15 dias"],
      },
      {
        name: "Micropigmentação",
        duration: "3h",
        price: "R$ 450",
        features: ["Técnica fio a fio", "Resultado natural", "Retoque incluso"],
      },
      {
        name: "Brow Lamination",
        duration: "1h",
        price: "R$ 150",
        features: ["Efeito penteado", "Durabilidade 6 semanas", "Fios alinhados"],
      },
    ],
  },
};

export const Tabs = () => {
  const [activeTab, setActiveTab] = useState<"cilios" | "sobrancelhas">("cilios");

  return (
    <section className="py-20 md:py-32 bg-card">
      <div className="max-w-7xl mx-auto px-6">
        <AnimatedSection className="text-center mb-12" direction="up">
          <span className="inline-block text-sm text-muted-foreground mb-4">
            Catálogo de serviços
          </span>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-8">
            Escolha sua categoria
          </h2>

          {/* Tab Buttons */}
          <div className="inline-flex items-center gap-2 p-1.5 bg-muted rounded-full">
            <button
              onClick={() => setActiveTab("cilios")}
              className={`px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                activeTab === "cilios"
                  ? "bg-primary text-primary-foreground"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              Cílios
            </button>
            <button
              onClick={() => setActiveTab("sobrancelhas")}
              className={`px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                activeTab === "sobrancelhas"
                  ? "bg-primary text-primary-foreground"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              Sobrancelhas
            </button>
          </div>
        </AnimatedSection>

        {/* Tab Content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ x: 30, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: -30, opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="grid md:grid-cols-3 gap-6"
          >
            {tabsData[activeTab].services.map((service, index) => (
              <motion.div
                key={service.name}
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1,
                  ease: [0.25, 0.46, 0.45, 0.94],
                }}
                className="bg-background rounded-3xl p-8 border border-border"
              >
                <div className="flex items-center justify-between mb-6">
                  <span className="text-xs text-muted-foreground bg-muted px-3 py-1 rounded-full">
                    {service.duration}
                  </span>
                  <span className="font-heading font-bold text-2xl text-foreground">
                    {service.price}
                  </span>
                </div>
                <h3 className="font-heading font-semibold text-xl text-foreground mb-4">
                  {service.name}
                </h3>
                <ul className="space-y-3">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-3 text-sm text-muted-foreground">
                      <Check size={16} strokeWidth={1.5} className="text-foreground" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <button className="w-full mt-8 py-3 px-4 rounded-full border border-border text-sm font-medium text-foreground hover:bg-accent transition-colors duration-200">
                  Agendar
                </button>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};
