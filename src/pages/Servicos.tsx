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
  ClipboardCheck,
  Lock,
  Database,
  AlertTriangle,
  BarChart3,
  MessageSquare,
} from "lucide-react";

const mainServices = [
  {
    icon: Shield,
    title: "DPO Online (Encarregado de Dados)",
    description: "Serviço completo de DPO terceirizado para sua empresa. Nosso profissional atua como ponto de contato entre sua organização, titulares de dados e a ANPD.",
    features: [
      "Representação perante a ANPD",
      "Atendimento a titulares de dados",
      "Orientação sobre proteção de dados",
      "Relatórios mensais de atividades",
      "Resposta a incidentes",
    ],
  },
  {
    icon: FileCheck,
    title: "Diagnóstico e Adequação LGPD",
    description: "Avaliação completa do nível de conformidade da sua empresa e implementação de todas as medidas necessárias para adequação à lei.",
    features: [
      "Análise de processos atuais",
      "Gap analysis de conformidade",
      "Plano de ação detalhado",
      "Cronograma de implementação",
      "Acompanhamento da execução",
    ],
  },
  {
    icon: Database,
    title: "Mapeamento de Dados",
    description: "Identificação e documentação completa de todos os dados pessoais tratados pela sua organização, criando um inventário detalhado.",
    features: [
      "Inventário de dados pessoais",
      "Identificação de bases legais",
      "Análise de fluxo de dados",
      "Documentação de processos",
      "Matriz de tratamento",
    ],
  },
  {
    icon: Users,
    title: "Gestão de Solicitações de Titulares",
    description: "Portal e processos estruturados para receber, gerenciar e responder solicitações de titulares de dados dentro dos prazos legais.",
    features: [
      "Portal de solicitações",
      "Workflow automatizado",
      "Controle de prazos",
      "Histórico completo",
      "Relatórios de atendimento",
    ],
  },
  {
    icon: FileText,
    title: "Documentação Personalizada",
    description: "Elaboração de todos os documentos obrigatórios e recomendados para conformidade com a LGPD, adaptados à realidade da sua empresa.",
    features: [
      "Política de Privacidade",
      "Termos de Uso",
      "Contratos com operadores",
      "Política de cookies",
      "RIPD (Relatório de Impacto)",
    ],
  },
  {
    icon: BookOpen,
    title: "Treinamentos e Capacitação",
    description: "Programas de treinamento para conscientização e capacitação de equipes sobre LGPD e boas práticas de proteção de dados.",
    features: [
      "Treinamento para equipes",
      "Workshops temáticos",
      "Material didático",
      "Avaliações de conhecimento",
      "Certificados de conclusão",
    ],
  },
];

const additionalServices = [
  {
    icon: AlertTriangle,
    title: "Gestão de Incidentes",
    description: "Planos e procedimentos para resposta a incidentes de segurança envolvendo dados pessoais.",
  },
  {
    icon: BarChart3,
    title: "Auditoria de Conformidade",
    description: "Avaliações periódicas do nível de conformidade e identificação de melhorias.",
  },
  {
    icon: ClipboardCheck,
    title: "Compliance Contínuo",
    description: "Monitoramento contínuo e atualização das práticas de proteção de dados.",
  },
  {
    icon: MessageSquare,
    title: "Consultoria Especializada",
    description: "Orientação técnica e jurídica para questões específicas de privacidade.",
  },
];

export default function Servicos() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-20 lg:py-28 bg-gradient-hero">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Nossos <span className="text-gradient">Serviços</span>
            </h1>
            <p className="text-lg text-muted-foreground">
              Soluções completas para adequação à LGPD e proteção de dados pessoais. 
              Conheça todos os serviços que oferecemos para sua empresa.
            </p>
          </div>
        </div>
      </section>

      {/* Main Services Section */}
      <section className="py-20 lg:py-28">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Serviços Principais
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Soluções core para conformidade com a LGPD.
            </p>
          </div>

          <div className="space-y-8">
            {mainServices.map((service, index) => (
              <div
                key={index}
                className="p-8 bg-card rounded-2xl border border-border shadow-card hover:shadow-card-hover transition-all duration-300"
              >
                <div className="grid lg:grid-cols-3 gap-8">
                  <div className="lg:col-span-2">
                    <div className="flex items-start gap-4 mb-4">
                      <div className="w-12 h-12 rounded-xl bg-gradient-primary flex items-center justify-center flex-shrink-0">
                        <service.icon className="w-6 h-6 text-primary-foreground" />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-foreground mb-2">{service.title}</h3>
                        <p className="text-muted-foreground">{service.description}</p>
                      </div>
                    </div>
                  </div>
                  <div className="lg:border-l lg:border-border lg:pl-8">
                    <h4 className="text-sm font-semibold text-foreground mb-4 uppercase tracking-wide">Inclui:</h4>
                    <ul className="space-y-2">
                      {service.features.map((feature, i) => (
                        <li key={i} className="flex items-center gap-2 text-sm text-muted-foreground">
                          <CheckCircle2 className="w-4 h-4 text-accent flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-20 lg:py-28 bg-muted/50">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Serviços Complementares
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Serviços adicionais para uma proteção de dados ainda mais completa.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {additionalServices.map((service, index) => (
              <div
                key={index}
                className="p-6 bg-card rounded-2xl border border-border shadow-card hover:border-primary/30 transition-all duration-300 group"
              >
                <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mb-4 group-hover:bg-accent transition-colors">
                  <service.icon className="w-6 h-6 text-accent group-hover:text-accent-foreground" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">{service.title}</h3>
                <p className="text-sm text-muted-foreground">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 lg:py-28">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl mx-auto text-center bg-gradient-primary rounded-3xl p-12 relative overflow-hidden">
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary-foreground rounded-full blur-3xl" />
            </div>
            <div className="relative">
              <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-6">
                Precisa de ajuda para escolher?
              </h2>
              <p className="text-lg text-primary-foreground/80 mb-8">
                Nossa equipe está pronta para entender suas necessidades e recomendar a melhor solução para sua empresa.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/planos">
                  <Button variant="secondary" size="lg" className="bg-primary-foreground text-primary hover:bg-primary-foreground/90">
                    Ver Planos
                    <ArrowRight className="w-4 h-4" />
                  </Button>
                </Link>
                <Link to="/contato">
                  <Button variant="outline" size="lg" className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10">
                    Falar com Consultor
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
