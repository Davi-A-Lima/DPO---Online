import { Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import {
  Shield,
  FileCheck,
  Users,
  Headphones,
  BookOpen,
  FileText,
  ArrowRight,
  CheckCircle2,
  Star,
  Quote,
  Zap,
  Lock,
  Clock,
} from "lucide-react";

const benefits = [
  {
    icon: Zap,
    title: "Automatização Completa",
    description: "Processo de adequação à LGPD automatizado e simplificado para sua empresa.",
  },
  {
    icon: FileText,
    title: "Documentação Personalizada",
    description: "Políticas, contratos e documentos adaptados à realidade do seu negócio.",
  },
  {
    icon: Users,
    title: "DPO Especializado",
    description: "Profissional qualificado dedicado à proteção de dados da sua empresa.",
  },
  {
    icon: Headphones,
    title: "Portal de Atendimento",
    description: "Mediação direta entre cliente e DPO através de nossa plataforma.",
  },
];

const services = [
  {
    icon: FileCheck,
    title: "Diagnóstico LGPD",
    description: "Avaliação completa do nível de conformidade da sua empresa com a LGPD.",
  },
  {
    icon: Users,
    title: "Gestão de Titulares",
    description: "Atendimento e gestão de solicitações dos titulares de dados.",
  },
  {
    icon: Shield,
    title: "DPO Online",
    description: "Encarregado de dados terceirizado para sua organização.",
  },
  {
    icon: BookOpen,
    title: "Treinamentos",
    description: "Capacitação de equipes sobre LGPD e boas práticas.",
  },
  {
    icon: Lock,
    title: "Mapeamento de Dados",
    description: "Identificação e catalogação de todos os dados pessoais tratados.",
  },
  {
    icon: FileText,
    title: "Documentação",
    description: "Elaboração de políticas, termos e documentos obrigatórios.",
  },
];

const testimonials = [
  {
    name: "Maria Silva",
    role: "CEO, TechStart",
    content: "O serviço de DPO Online transformou nossa gestão de dados. Processo simples e equipe extremamente competente.",
    rating: 5,
  },
  {
    name: "João Santos",
    role: "Diretor, Comercial Plus",
    content: "Excelente custo-benefício. Conseguimos nos adequar à LGPD rapidamente e com total suporte.",
    rating: 5,
  },
  {
    name: "Ana Costa",
    role: "Gerente, Varejo Express",
    content: "A plataforma de mediação facilita muito a comunicação. Respostas rápidas e profissionais.",
    rating: 5,
  },
];

const stats = [
  { value: "500+", label: "Empresas Atendidas" },
  { value: "99%", label: "Satisfação" },
  { value: "24h", label: "Tempo de Resposta" },
  { value: "5 Anos", label: "Experiência" },
];

export default function Index() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative bg-gradient-hero overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-20 left-10 w-72 h-72 bg-primary/20 rounded-full blur-3xl" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/20 rounded-full blur-3xl" />
        </div>
        
        <div className="container mx-auto px-4 lg:px-8 py-20 lg:py-32 relative">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full text-primary text-sm font-medium mb-8 animate-fade-in">
              <Shield className="w-4 h-4" />
              <span>Soluções completas em LGPD</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight mb-6 animate-slide-up">
              Soluções de{" "}
              <span className="text-gradient">DPO Online</span>
              {" "}e Adequação à{" "}
              <span className="text-gradient">LGPD</span>
              {" "}para PMEs
            </h1>
            
            <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto animate-slide-up" style={{ animationDelay: "0.1s" }}>
              Proteja sua empresa com soluções práticas e acessíveis. 
              Conte com especialistas em proteção de dados para garantir sua conformidade legal.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-slide-up" style={{ animationDelay: "0.2s" }}>
              <Link to="/planos">
                <Button variant="hero" size="xl">
                  Contratar Plano
                  <ArrowRight className="w-5 h-5" />
                </Button>
              </Link>
              <Link to="/contato">
                <Button variant="hero-outline" size="xl">
                  Fale com Especialista
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-primary">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-primary-foreground mb-1">{stat.value}</div>
                <div className="text-sm text-primary-foreground/70">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 lg:py-28">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Por que escolher o DPO Online?
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Oferecemos uma solução completa para adequação à LGPD, com tecnologia e expertise para proteger sua empresa.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="p-6 bg-card rounded-2xl border border-border shadow-card hover:shadow-card-hover transition-all duration-300 group"
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-primary flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <benefit.icon className="w-6 h-6 text-primary-foreground" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">{benefit.title}</h3>
                <p className="text-sm text-muted-foreground">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 lg:py-28 bg-muted/50">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Nossos Serviços
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Soluções completas para todas as necessidades de adequação à LGPD da sua empresa.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <div
                key={index}
                className="p-6 bg-card rounded-2xl border border-border hover:border-primary/30 shadow-card hover:shadow-card-hover transition-all duration-300 group"
              >
                <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mb-4 group-hover:bg-accent group-hover:text-accent-foreground transition-colors">
                  <service.icon className="w-6 h-6 text-accent group-hover:text-accent-foreground" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">{service.title}</h3>
                <p className="text-sm text-muted-foreground">{service.description}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link to="/servicos">
              <Button variant="outline" size="lg">
                Ver Todos os Serviços
                <ArrowRight className="w-4 h-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 lg:py-28">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              O que nossos clientes dizem
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Empresas que confiam em nossos serviços para proteção de dados.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="p-6 bg-card rounded-2xl border border-border shadow-card"
              >
                <Quote className="w-10 h-10 text-primary/20 mb-4" />
                <p className="text-foreground mb-6">{testimonial.content}</p>
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-accent text-accent" />
                  ))}
                </div>
                <div>
                  <div className="font-semibold text-foreground">{testimonial.name}</div>
                  <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 lg:py-28 bg-gradient-primary relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary-foreground rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-1/4 w-72 h-72 bg-primary-foreground rounded-full blur-3xl" />
        </div>
        
        <div className="container mx-auto px-4 lg:px-8 relative">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-6">
              Pronto para proteger sua empresa?
            </h2>
            <p className="text-lg text-primary-foreground/80 mb-10">
              Solicite uma consultoria gratuita e descubra como podemos ajudar sua empresa a se adequar à LGPD.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/planos">
                <Button variant="secondary" size="xl" className="bg-primary-foreground text-primary hover:bg-primary-foreground/90">
                  Ver Planos e Preços
                </Button>
              </Link>
              <Link to="/contato">
                <Button variant="outline" size="xl" className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10">
                  Consultoria Gratuita
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
