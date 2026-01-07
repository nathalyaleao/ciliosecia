import { Instagram, Facebook } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="py-12 bg-background border-t border-border">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          <div className="md:col-span-2">
            <a href="#" className="font-heading font-bold text-xl text-foreground mb-4 block">
              Meu Negócio
            </a>
            <p className="text-sm text-muted-foreground max-w-sm mb-6">
              Especialistas em design de cílios e sobrancelhas. Transforme seu olhar com técnicas modernas e atendimento personalizado.
            </p>
            <div className="flex gap-4">
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-muted flex items-center justify-center text-foreground hover:bg-accent transition-colors duration-200"
              >
                <Instagram size={18} strokeWidth={1.5} />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-muted flex items-center justify-center text-foreground hover:bg-accent transition-colors duration-200"
              >
                <Facebook size={18} strokeWidth={1.5} />
              </a>
            </div>
          </div>
          <div>
            <h4 className="font-heading font-semibold text-foreground mb-4">Navegação</h4>
            <ul className="space-y-3">
              <li>
                <a href="#servicos" className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-200">
                  Serviços
                </a>
              </li>
              <li>
                <a href="#planos" className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-200">
                  Planos
                </a>
              </li>
              <li>
                <a href="#depoimentos" className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-200">
                  Depoimentos
                </a>
              </li>
              <li>
                <a href="#blog" className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-200">
                  Blog
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-heading font-semibold text-foreground mb-4">Contato</h4>
            <ul className="space-y-3">
              <li className="text-sm text-muted-foreground">
                Av. Paulista, 1000
              </li>
              <li className="text-sm text-muted-foreground">
                São Paulo, SP
              </li>
              <li className="text-sm text-muted-foreground">
                (11) 99999-9999
              </li>
              <li className="text-sm text-muted-foreground">
                contato@meunegocio.com
              </li>
            </ul>
          </div>
        </div>
        <div className="pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            © 2024 Meu Negócio. Todos os direitos reservados.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-200">
              Política de Privacidade
            </a>
            <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-200">
              Termos de Uso
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
