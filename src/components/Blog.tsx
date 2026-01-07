import { AnimatedSection, StaggerContainer, StaggerItem } from "./AnimatedSection";
import { ArrowUpRight } from "lucide-react";

const posts = [
  {
    title: "5 cuidados essenciais após extensão de cílios",
    category: "Cuidados",
    image: "/foto2.jpg"
  },
  {
    title: "Tendências de sobrancelhas para 2024",
    category: "Tendências",
    image: "/foto1.jpg"
  },
  {
    title: "Volume russo vs cílios clássicos: qual escolher?",
    category: "Guia",
    image: "/foto3.jpg"
  },
];

export const Blog = () => {
  return (
    <section id="blog" className="py-20 md:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        <AnimatedSection className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12" direction="left">
          <div>
            <span className="inline-block text-sm text-muted-foreground mb-4">
              Blog
            </span>
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
              Dicas e novidades
            </h2>
          </div>
          <a
            href="#"
            className="inline-flex items-center gap-2 text-sm font-medium text-foreground hover:text-muted-foreground transition-colors duration-200"
          >
            Ver todos os artigos
            <ArrowUpRight size={16} strokeWidth={1.5} />
          </a>
        </AnimatedSection>

        <StaggerContainer className="grid md:grid-cols-3 gap-6">
          {posts.map((post) => (
            <StaggerItem key={post.title} direction="right">
              <a href="#" className="group block">
                <div className="aspect-[4/3] rounded-3xl overflow-hidden mb-4 bg-muted">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <span className="inline-block text-xs text-muted-foreground bg-muted px-3 py-1 rounded-full mb-3">
                  {post.category}
                </span>
                <h3 className="font-heading font-semibold text-lg text-foreground group-hover:text-muted-foreground transition-colors duration-200">
                  {post.title}
                </h3>
              </a>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
};
