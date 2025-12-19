import { Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Calendar, Clock, ArrowRight, Tag } from "lucide-react";

const featuredPost = {
  title: "Guia Completo: Como adequar sua empresa à LGPD em 2024",
  excerpt: "Um passo a passo detalhado para garantir a conformidade da sua empresa com a Lei Geral de Proteção de Dados, desde o diagnóstico inicial até a implementação completa.",
  image: "https://images.unsplash.com/photo-1633265486064-086b219458ec?w=800&h=400&fit=crop",
  date: "15 Jan 2024",
  readTime: "12 min",
  category: "Guia",
  slug: "guia-completo-lgpd-2024",
};

const posts = [
  {
    title: "O que é o DPO e por que sua empresa precisa de um?",
    excerpt: "Entenda o papel do Encarregado de Dados e como ele pode ajudar sua organização a se manter em conformidade.",
    image: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=400&h=250&fit=crop",
    date: "10 Jan 2024",
    readTime: "6 min",
    category: "DPO",
    slug: "o-que-e-dpo",
  },
  {
    title: "5 erros comuns na adequação à LGPD e como evitá-los",
    excerpt: "Conheça os principais erros que as empresas cometem ao tentar se adequar à LGPD e aprenda como evitá-los.",
    image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=400&h=250&fit=crop",
    date: "05 Jan 2024",
    readTime: "8 min",
    category: "Dicas",
    slug: "erros-comuns-lgpd",
  },
  {
    title: "Direitos dos Titulares: O que sua empresa precisa saber",
    excerpt: "Um guia sobre os direitos garantidos pela LGPD aos titulares de dados e como sua empresa deve atendê-los.",
    image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=400&h=250&fit=crop",
    date: "28 Dez 2023",
    readTime: "7 min",
    category: "LGPD",
    slug: "direitos-titulares",
  },
  {
    title: "Política de Privacidade: Como elaborar corretamente",
    excerpt: "Aprenda a criar uma política de privacidade completa e em conformidade com a LGPD para seu site ou aplicativo.",
    image: "https://images.unsplash.com/photo-1507925921958-8a62f3d1a50d?w=400&h=250&fit=crop",
    date: "20 Dez 2023",
    readTime: "9 min",
    category: "Documentação",
    slug: "politica-privacidade",
  },
  {
    title: "LGPD para E-commerce: Guia Essencial",
    excerpt: "Tudo que lojas virtuais precisam saber para tratar dados de clientes de forma segura e legal.",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=250&fit=crop",
    date: "15 Dez 2023",
    readTime: "10 min",
    category: "Setorial",
    slug: "lgpd-ecommerce",
  },
  {
    title: "Incidentes de Segurança: Como responder corretamente",
    excerpt: "Procedimentos e prazos para comunicar incidentes de segurança envolvendo dados pessoais à ANPD.",
    image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=400&h=250&fit=crop",
    date: "10 Dez 2023",
    readTime: "8 min",
    category: "Segurança",
    slug: "incidentes-seguranca",
  },
];

const categories = ["Todos", "LGPD", "DPO", "Dicas", "Documentação", "Setorial", "Segurança", "Guia"];

export default function Blog() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-20 lg:py-28 bg-gradient-hero">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Blog & <span className="text-gradient">Conteúdos</span>
            </h1>
            <p className="text-lg text-muted-foreground">
              Artigos, guias e materiais educativos sobre LGPD, proteção de dados e privacidade para ajudar sua empresa.
            </p>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-8 border-b border-border">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
            {categories.map((category, index) => (
              <button
                key={index}
                className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-colors ${
                  index === 0
                    ? "bg-primary text-primary-foreground"
                    : "bg-muted text-muted-foreground hover:text-foreground hover:bg-muted"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Post */}
      <section className="py-12">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="bg-card rounded-2xl border border-border overflow-hidden shadow-card hover:shadow-card-hover transition-all duration-300 group">
            <div className="grid md:grid-cols-2 gap-0">
              <div className="aspect-video md:aspect-auto">
                <img
                  src={featuredPost.image}
                  alt={featuredPost.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-8 lg:p-12 flex flex-col justify-center">
                <div className="flex items-center gap-4 mb-4">
                  <span className="px-3 py-1 bg-primary/10 text-primary text-sm font-medium rounded-full">
                    {featuredPost.category}
                  </span>
                  <span className="text-sm text-muted-foreground">Em destaque</span>
                </div>
                <h2 className="text-2xl lg:text-3xl font-bold text-foreground mb-4 group-hover:text-primary transition-colors">
                  {featuredPost.title}
                </h2>
                <p className="text-muted-foreground mb-6">{featuredPost.excerpt}</p>
                <div className="flex items-center gap-4 text-sm text-muted-foreground mb-6">
                  <span className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    {featuredPost.date}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    {featuredPost.readTime} de leitura
                  </span>
                </div>
                <Button variant="hero" className="w-fit">
                  Ler Artigo
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Posts Grid */}
      <section className="py-12 lg:py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <h2 className="text-2xl font-bold text-foreground mb-8">Últimos Artigos</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {posts.map((post, index) => (
              <article
                key={index}
                className="bg-card rounded-2xl border border-border overflow-hidden shadow-card hover:shadow-card-hover transition-all duration-300 group"
              >
                <div className="aspect-video overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <Tag className="w-4 h-4 text-accent" />
                    <span className="text-sm text-accent font-medium">{post.category}</span>
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-4 line-clamp-2">{post.excerpt}</p>
                  <div className="flex items-center justify-between text-sm text-muted-foreground">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      {post.date}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      {post.readTime}
                    </span>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* Load More */}
          <div className="text-center mt-12">
            <Button variant="outline" size="lg">
              Carregar Mais Artigos
            </Button>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-20 lg:py-28 bg-muted/50">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-xl mx-auto text-center">
            <h2 className="text-2xl font-bold text-foreground mb-4">
              Receba nossos conteúdos
            </h2>
            <p className="text-muted-foreground mb-8">
              Inscreva-se para receber artigos, guias e novidades sobre LGPD e proteção de dados diretamente no seu email.
            </p>
            <form className="flex gap-3 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Seu melhor email"
                className="flex-1 px-4 py-3 bg-card border border-border rounded-xl text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
              />
              <Button variant="hero">Inscrever</Button>
            </form>
          </div>
        </div>
      </section>
    </Layout>
  );
}
