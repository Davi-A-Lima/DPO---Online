import { useState } from "react";
import { Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { CheckCircle2, X, Star, Zap } from "lucide-react";

const plans = [
  {
    name: "Básico",
    description: "Ideal para microempresas que estão começando a se adequar à LGPD.",
    price: {
      monthly: 299,
      annual: 249,
    },
    features: [
      { name: "DPO Online compartilhado", included: true },
      { name: "Diagnóstico inicial LGPD", included: true },
      { name: "Política de Privacidade", included: true },
      { name: "Termos de Uso", included: true },
      { name: "Portal de titulares", included: true },
      { name: "Até 5 atendimentos/mês", included: true },
      { name: "Suporte por email", included: true },
      { name: "Mapeamento de dados", included: false },
      { name: "Treinamentos", included: false },
      { name: "RIPD", included: false },
      { name: "DPO dedicado", included: false },
      { name: "Suporte prioritário", included: false },
    ],
    popular: false,
    cta: "Começar Agora",
  },
  {
    name: "Profissional",
    description: "Para empresas que precisam de conformidade completa com a LGPD.",
    price: {
      monthly: 699,
      annual: 599,
    },
    features: [
      { name: "DPO Online compartilhado", included: true },
      { name: "Diagnóstico completo LGPD", included: true },
      { name: "Política de Privacidade", included: true },
      { name: "Termos de Uso", included: true },
      { name: "Portal de titulares", included: true },
      { name: "Até 20 atendimentos/mês", included: true },
      { name: "Suporte por email e chat", included: true },
      { name: "Mapeamento de dados", included: true },
      { name: "Treinamento básico (1x)", included: true },
      { name: "RIPD simplificado", included: true },
      { name: "DPO dedicado", included: false },
      { name: "Suporte prioritário", included: false },
    ],
    popular: true,
    cta: "Escolher Plano",
  },
  {
    name: "Enterprise",
    description: "Solução completa com DPO dedicado para empresas maiores.",
    price: {
      monthly: 1499,
      annual: 1299,
    },
    features: [
      { name: "DPO Online dedicado", included: true },
      { name: "Diagnóstico completo LGPD", included: true },
      { name: "Documentação completa", included: true },
      { name: "Portal de titulares premium", included: true },
      { name: "Atendimentos ilimitados", included: true },
      { name: "Suporte prioritário 24/7", included: true },
      { name: "Mapeamento de dados completo", included: true },
      { name: "Treinamentos ilimitados", included: true },
      { name: "RIPD completo", included: true },
      { name: "DPO dedicado", included: true },
      { name: "Auditoria trimestral", included: true },
      { name: "Gestão de incidentes", included: true },
    ],
    popular: false,
    cta: "Falar com Vendas",
  },
];

export default function Planos() {
  const [billingPeriod, setBillingPeriod] = useState<"monthly" | "annual">("annual");

  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-20 lg:py-28 bg-gradient-hero">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Planos e <span className="text-gradient">Preços</span>
            </h1>
            <p className="text-lg text-muted-foreground mb-8">
              Escolha o plano ideal para as necessidades da sua empresa. 
              Todos incluem acesso à nossa plataforma de gestão e suporte especializado.
            </p>

            {/* Billing Toggle */}
            <div className="inline-flex items-center gap-4 p-1.5 bg-muted rounded-xl">
              <button
                onClick={() => setBillingPeriod("monthly")}
                className={`px-6 py-2 rounded-lg text-sm font-medium transition-all ${
                  billingPeriod === "monthly"
                    ? "bg-card text-foreground shadow-sm"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                Mensal
              </button>
              <button
                onClick={() => setBillingPeriod("annual")}
                className={`px-6 py-2 rounded-lg text-sm font-medium transition-all flex items-center gap-2 ${
                  billingPeriod === "annual"
                    ? "bg-card text-foreground shadow-sm"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                Anual
                <span className="px-2 py-0.5 bg-accent text-accent-foreground text-xs rounded-full">
                  -15%
                </span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Plans Section */}
      <section className="py-20 lg:py-28">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {plans.map((plan, index) => (
              <div
                key={index}
                className={`relative p-8 bg-card rounded-2xl border-2 transition-all duration-300 ${
                  plan.popular
                    ? "border-primary shadow-card-hover scale-105"
                    : "border-border shadow-card hover:shadow-card-hover hover:border-primary/30"
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <div className="inline-flex items-center gap-1.5 px-4 py-1.5 bg-gradient-primary text-primary-foreground text-sm font-medium rounded-full">
                      <Star className="w-4 h-4" />
                      Mais Popular
                    </div>
                  </div>
                )}

                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-foreground mb-2">{plan.name}</h3>
                  <p className="text-sm text-muted-foreground mb-6">{plan.description}</p>
                  <div className="flex items-baseline justify-center gap-1">
                    <span className="text-sm text-muted-foreground">R$</span>
                    <span className="text-5xl font-bold text-foreground">
                      {plan.price[billingPeriod]}
                    </span>
                    <span className="text-sm text-muted-foreground">/mês</span>
                  </div>
                  {billingPeriod === "annual" && (
                    <p className="text-sm text-accent mt-2">
                      Cobrado anualmente (R$ {plan.price.annual * 12})
                    </p>
                  )}
                </div>

                <div className="space-y-3 mb-8">
                  {plan.features.map((feature, i) => (
                    <div
                      key={i}
                      className={`flex items-center gap-3 text-sm ${
                        feature.included ? "text-foreground" : "text-muted-foreground/50"
                      }`}
                    >
                      {feature.included ? (
                        <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0" />
                      ) : (
                        <X className="w-5 h-5 flex-shrink-0" />
                      )}
                      <span className={!feature.included ? "line-through" : ""}>
                        {feature.name}
                      </span>
                    </div>
                  ))}
                </div>

                <Link to={plan.name === "Enterprise" ? "/contato" : "/login"}>
                  <Button
                    variant={plan.popular ? "hero" : "outline"}
                    className="w-full"
                    size="lg"
                  >
                    {plan.cta}
                  </Button>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 lg:py-28 bg-muted/50">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-foreground text-center mb-12">
              Dúvidas sobre os planos?
            </h2>
            
            <div className="space-y-4">
              <div className="p-6 bg-card rounded-xl border border-border">
                <h3 className="font-semibold text-foreground mb-2">
                  Posso trocar de plano depois?
                </h3>
                <p className="text-sm text-muted-foreground">
                  Sim! Você pode fazer upgrade ou downgrade do seu plano a qualquer momento. 
                  A diferença será calculada proporcionalmente.
                </p>
              </div>
              <div className="p-6 bg-card rounded-xl border border-border">
                <h3 className="font-semibold text-foreground mb-2">
                  Existe período de fidelidade?
                </h3>
                <p className="text-sm text-muted-foreground">
                  No plano mensal não há fidelidade. No plano anual, você se compromete por 12 meses 
                  em troca do desconto oferecido.
                </p>
              </div>
              <div className="p-6 bg-card rounded-xl border border-border">
                <h3 className="font-semibold text-foreground mb-2">
                  Como funciona o pagamento?
                </h3>
                <p className="text-sm text-muted-foreground">
                  Aceitamos cartão de crédito, boleto bancário e PIX. O pagamento é recorrente 
                  conforme a periodicidade escolhida.
                </p>
              </div>
            </div>

            <div className="text-center mt-12">
              <p className="text-muted-foreground mb-4">
                Ainda tem dúvidas? Fale com nossa equipe.
              </p>
              <Link to="/contato">
                <Button variant="outline">
                  Falar com Consultor
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Enterprise CTA */}
      <section className="py-20 lg:py-28">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto bg-gradient-primary rounded-3xl p-12 relative overflow-hidden">
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-0 right-0 w-96 h-96 bg-primary-foreground rounded-full blur-3xl" />
            </div>
            <div className="relative grid md:grid-cols-2 gap-8 items-center">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-primary-foreground/20 rounded-full text-primary-foreground text-sm mb-4">
                  <Zap className="w-4 h-4" />
                  Para grandes empresas
                </div>
                <h2 className="text-3xl font-bold text-primary-foreground mb-4">
                  Precisa de uma solução personalizada?
                </h2>
                <p className="text-primary-foreground/80">
                  Desenvolvemos soluções sob medida para empresas com necessidades específicas. 
                  Entre em contato para uma proposta personalizada.
                </p>
              </div>
              <div className="text-center md:text-right">
                <Link to="/contato">
                  <Button variant="secondary" size="xl" className="bg-primary-foreground text-primary hover:bg-primary-foreground/90">
                    Solicitar Proposta
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
