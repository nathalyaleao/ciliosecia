import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import heroEyebrow from "@/assets/hero-eyebrow.jpg";

export const Hero = () => {
  return (
    // AJUSTE 1: Padding menor no celular (pt-24 pb-12) e grande no PC (md:pt-40)
    <section className="relative pt-24 pb-12 md:pt-40 md:pb-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        {/* AJUSTE 2: Gap de 8 no celular para aproximar o texto das imagens */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            <span className="inline-block text-sm text-muted-foreground mb-4">
              Realce seu olhar
            </span>
            {/* AJUSTE 3: Fonte 3xl no celular para caber melhor */}
            <h1 className="font-heading text-3xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight mb-6">
              Design de Cílios e Sobrancelhas
            </h1>
            <p className="text-lg text-muted-foreground mb-8 max-w-lg">
              Técnicas modernas para realçar a beleza natural do seu olhar. Agende sua avaliação e descubra o poder de um olhar marcante.
            </p>
            
            {/* AJUSTE 4: Botões Responsivos */}
            <div className="flex flex-wrap gap-4">
              <a
                href="#contato"
                // Celular: px-8 py-3 text-base (Tamanho seguro)
                // PC: md:px-12 md:py-5 md:text-lg (Botão Grande)
                className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-3 text-base md:px-12 md:py-5 md:text-lg rounded-full font-medium hover:bg-primary/90 transition-colors duration-200"
              >
                Agendar 
                <ArrowRight size={16} strokeWidth={1.5} />
              </a>
              <a
                href="#servicos"
                // Mesma lógica aqui
                className="inline-flex items-center gap-2 text-foreground px-8 py-3 text-base md:px-12 md:py-5 md:text-lg rounded-full font-medium border border-border hover:bg-accent transition-colors duration-200"
              >
                Ver serviços
              </a>
            </div>
          </motion.div>

          {/* Image Grid */}
          <motion.div
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="relative"
          >
            <div className="grid grid-cols-2 gap-4">
              <motion.div
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
                className="aspect-[3/4] rounded-3xl overflow-hidden bg-muted"
              >
                <img
                  src= "/resultado.jpg"
                  alt="Serviço de cílios"
                  className="w-full h-full object-cover"
                />
              </motion.div>
              <motion.div
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
                className="aspect-[3/4] rounded-3xl overflow-hidden bg-muted mt-8"
              >
                <img
                  src={heroEyebrow}
                  alt="Serviço de sobrancelhas"
                  className="w-full h-full object-cover"
                />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
