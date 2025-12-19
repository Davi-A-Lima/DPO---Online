import { Layout } from "@/components/layout/Layout";
import { Shield, Target, Heart, Award, Users, Clock, CheckCircle2 } from "lucide-react";

const values = [
  {
    icon: Shield,
    title: "Segurança",
    description: "Proteção de dados é nossa prioridade máxima em todos os processos.",
  },
  {
    icon: Target,
    title: "Excelência",
    description: "Buscamos sempre entregar o melhor resultado para nossos clientes.",
  },
  {
    icon: Heart,
    title: "Compromisso",
    description: "Dedicação total à adequação e conformidade de cada empresa.",
  },
  {
    icon: Award,
    title: "Qualidade",
    description: "Padrões elevados em todos os serviços e entregas.",
  },
];

const team = [
  {
    name: "Dr. Ricardo Mendes",
    role: "Diretor Jurídico & DPO Senior",
    description: "Advogado especialista em direito digital com mais de 15 anos de experiência.",
  },
  {
    name: "Dra. Carla Oliveira",
    role: "Coordenadora de Compliance",
    description: "Especialista em governança de dados e implementação de políticas de privacidade.",
  },
  {
    name: "Lucas Ferreira",
    role: "Gerente de Tecnologia",
    description: "Desenvolvedor sênior focado em soluções de segurança da informação.",
  },
];

const differentials = [
  "Mais de 5 anos de experiência em LGPD e proteção de dados",
  "Equipe multidisciplinar com advogados, TI e consultores",
  "Plataforma própria de gestão e mediação",
  "Atendimento personalizado para cada cliente",
  "Metodologia comprovada de adequação",
  "Suporte contínuo pós-implementação",
];

export default function Sobre() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-20 lg:py-28 bg-gradient-hero">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Sobre o <span className="text-gradient">DPO Online</span>
            </h1>
            <p className="text-lg text-muted-foreground">
              Somos especialistas em proteção de dados e conformidade com a LGPD, 
              dedicados a ajudar empresas a proteger seus dados e seus clientes.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 lg:py-28">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Nossa Missão
              </h2>
              <p className="text-lg text-muted-foreground mb-6">
                Democratizar o acesso à conformidade com a LGPD para pequenas e médias empresas, 
                oferecendo soluções acessíveis e de alta qualidade que garantam a proteção de dados 
                pessoais de forma eficiente e profissional.
              </p>
              <p className="text-lg text-muted-foreground">
                Acreditamos que toda empresa, independente do seu porte, deve ter acesso a 
                serviços de DPO qualificados e ferramentas adequadas para proteger os dados 
                de seus clientes e colaboradores.
              </p>
            </div>
            <div className="bg-card rounded-2xl border border-border p-8 shadow-card">
              <h3 className="text-xl font-semibold text-foreground mb-6">Nossos Números</h3>
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center p-4 bg-muted rounded-xl">
                  <div className="text-3xl font-bold text-primary mb-1">500+</div>
                  <div className="text-sm text-muted-foreground">Empresas Atendidas</div>
                </div>
                <div className="text-center p-4 bg-muted rounded-xl">
                  <div className="text-3xl font-bold text-primary mb-1">5+</div>
                  <div className="text-sm text-muted-foreground">Anos de Experiência</div>
                </div>
                <div className="text-center p-4 bg-muted rounded-xl">
                  <div className="text-3xl font-bold text-primary mb-1">99%</div>
                  <div className="text-sm text-muted-foreground">Satisfação</div>
                </div>
                <div className="text-center p-4 bg-muted rounded-xl">
                  <div className="text-3xl font-bold text-primary mb-1">24h</div>
                  <div className="text-sm text-muted-foreground">Tempo Resposta</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 lg:py-28 bg-muted/50">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Nossos Valores
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Os princípios que guiam nosso trabalho e relacionamento com clientes.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <div
                key={index}
                className="p-6 bg-card rounded-2xl border border-border shadow-card text-center"
              >
                <div className="w-14 h-14 rounded-xl bg-gradient-primary flex items-center justify-center mx-auto mb-4">
                  <value.icon className="w-7 h-7 text-primary-foreground" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">{value.title}</h3>
                <p className="text-sm text-muted-foreground">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Differentials Section */}
      <section className="py-20 lg:py-28">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Nosso Diferencial
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                O que nos torna a escolha certa para a adequação da sua empresa à LGPD.
              </p>
              <div className="space-y-4">
                {differentials.map((item, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                    <span className="text-foreground">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="p-6 bg-primary rounded-2xl text-primary-foreground">
                <Users className="w-8 h-8 mb-4" />
                <div className="text-2xl font-bold mb-1">20+</div>
                <div className="text-sm text-primary-foreground/70">Profissionais Especializados</div>
              </div>
              <div className="p-6 bg-accent rounded-2xl text-accent-foreground">
                <Clock className="w-8 h-8 mb-4" />
                <div className="text-2xl font-bold mb-1">48h</div>
                <div className="text-sm text-accent-foreground/70">Início do Projeto</div>
              </div>
              <div className="p-6 bg-accent rounded-2xl text-accent-foreground col-span-2">
                <Award className="w-8 h-8 mb-4" />
                <div className="text-2xl font-bold mb-1">Certificados</div>
                <div className="text-sm text-accent-foreground/70">Profissionais com certificações internacionais em privacidade</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 lg:py-28 bg-muted/50">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Nossa Equipe
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Profissionais qualificados e dedicados à proteção de dados.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {team.map((member, index) => (
              <div
                key={index}
                className="p-6 bg-card rounded-2xl border border-border shadow-card text-center"
              >
                <div className="w-20 h-20 rounded-full bg-gradient-primary mx-auto mb-4 flex items-center justify-center">
                  <span className="text-2xl font-bold text-primary-foreground">
                    {member.name.split(" ").map(n => n[0]).join("")}
                  </span>
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-1">{member.name}</h3>
                <p className="text-sm text-accent font-medium mb-3">{member.role}</p>
                <p className="text-sm text-muted-foreground">{member.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}
