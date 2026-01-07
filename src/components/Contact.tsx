import { AnimatedSection } from "./AnimatedSection";
import { ArrowRight, MapPin, Phone, Mail, Clock } from "lucide-react";

export const Contact = () => {
  return (
    <section id="contato" className="py-20 md:py-32 bg-card">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Info */}
          <AnimatedSection direction="left">
            <span className="inline-block text-sm text-muted-foreground mb-4">
              Contato
            </span>
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Agende seu procedimento 
            </h2>
            <p className="text-lg text-muted-foreground mb-10 max-w-lg">
              Entre em contato conosco e descubra como podemos realçar a beleza natural do seu olhar.
            </p>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-muted flex items-center justify-center flex-shrink-0">
                  <MapPin size={18} strokeWidth={1.5} className="text-foreground" />
                </div>
                <div>
                  <p className="font-medium text-foreground">Endereço</p>
                  <p className="text-sm text-muted-foreground">Av. Paulista, 1000 - São Paulo, SP</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-muted flex items-center justify-center flex-shrink-0">
                  <Phone size={18} strokeWidth={1.5} className="text-foreground" />
                </div>
                <div>
                  <p className="font-medium text-foreground">Telefone</p>
                  <p className="text-sm text-muted-foreground">(11) 99999-9999</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-muted flex items-center justify-center flex-shrink-0">
                  <Mail size={18} strokeWidth={1.5} className="text-foreground" />
                </div>
                <div>
                  <p className="font-medium text-foreground">E-mail</p>
                  <p className="text-sm text-muted-foreground">contato@meunegocio.com</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-muted flex items-center justify-center flex-shrink-0">
                  <Clock size={18} strokeWidth={1.5} className="text-foreground" />
                </div>
                <div>
                  <p className="font-medium text-foreground">Horário</p>
                  <p className="text-sm text-muted-foreground">Seg - Sáb: 9h às 19h</p>
                </div>
              </div>
            </div>
          </AnimatedSection>

          {/* Form */}
          <AnimatedSection direction="right">
            <form className="bg-background rounded-3xl p-8 border border-border space-y-6">
              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                    Nome
                  </label>
                  <input
                    type="text"
                    id="name"
                    placeholder="Seu nome"
                    className="w-full px-4 py-3 rounded-xl border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring transition-all duration-200"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-2">
                    Telefone
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    placeholder="(11) 99999-9999"
                    className="w-full px-4 py-3 rounded-xl border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring transition-all duration-200"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                  E-mail
                </label>
                <input
                  type="email"
                  id="email"
                  placeholder="seu@email.com"
                  className="w-full px-4 py-3 rounded-xl border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring transition-all duration-200"
                />
              </div>
              <div>
                <label htmlFor="service" className="block text-sm font-medium text-foreground mb-2">
                  Serviço de interesse
                </label>
                <select
                  id="service"
                  className="w-full px-4 py-3 rounded-xl border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-ring transition-all duration-200"
                >
                  <option value="">Selecione um serviço</option>
                  <option value="extensao">Extensão de Cílios</option>
                  <option value="lifting">Lash Lifting</option>
                  <option value="design">Design de Sobrancelhas</option>
                  <option value="micro">Micropigmentação</option>
                </select>
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                  Mensagem
                </label>
                <textarea
                  id="message"
                  rows={4}
                  placeholder="Conte-nos sobre o que você procura..."
                  className="w-full px-4 py-3 rounded-xl border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring transition-all duration-200 resize-none"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-primary text-primary-foreground py-3 px-4 rounded-full text-sm font-medium hover:bg-primary/90 transition-colors duration-200 inline-flex items-center justify-center gap-2"
              >
                Enviar mensagem
                <ArrowRight size={16} strokeWidth={1.5} />
              </button>
            </form>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};
