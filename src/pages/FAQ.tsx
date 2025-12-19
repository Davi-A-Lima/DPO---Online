import { useState } from "react";
import { Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { ChevronDown, Search, MessageCircle } from "lucide-react";

const faqCategories = [
  {
    name: "LGPD e Proteção de Dados",
    questions: [
      {
        question: "O que é a LGPD?",
        answer: "A Lei Geral de Proteção de Dados (LGPD - Lei nº 13.709/2018) é a legislação brasileira que regula o tratamento de dados pessoais por empresas e organizações. Ela estabelece regras sobre coleta, armazenamento, tratamento e compartilhamento de dados pessoais, com o objetivo de proteger os direitos fundamentais de liberdade, privacidade e livre desenvolvimento da personalidade.",
      },
      {
        question: "Quem precisa se adequar à LGPD?",
        answer: "Todas as empresas e organizações que tratam dados pessoais de pessoas físicas no Brasil precisam se adequar à LGPD, independentemente do porte ou segmento. Isso inclui microempresas, startups, empresas de médio e grande porte, órgãos públicos, ONGs e profissionais autônomos.",
      },
      {
        question: "Quais são as penalidades por não conformidade?",
        answer: "As penalidades podem incluir: advertência, multa simples de até 2% do faturamento (limitada a R$ 50 milhões por infração), multa diária, publicização da infração, bloqueio ou eliminação dos dados pessoais. Além disso, há riscos de danos à reputação e perda de confiança dos clientes.",
      },
      {
        question: "O que são dados pessoais e dados sensíveis?",
        answer: "Dados pessoais são informações que identificam ou podem identificar uma pessoa, como nome, CPF, email, telefone. Dados sensíveis são uma categoria especial que inclui origem racial/étnica, convicções religiosas, opiniões políticas, dados de saúde, dados biométricos, orientação sexual, entre outros. Dados sensíveis requerem proteção adicional.",
      },
    ],
  },
  {
    name: "DPO e Encarregado de Dados",
    questions: [
      {
        question: "O que é um DPO?",
        answer: "DPO (Data Protection Officer) ou Encarregado de Dados é o profissional responsável por atuar como canal de comunicação entre a empresa, os titulares dos dados e a ANPD (Autoridade Nacional de Proteção de Dados). Ele orienta a empresa sobre boas práticas e monitora a conformidade com a LGPD.",
      },
      {
        question: "Minha empresa precisa de um DPO?",
        answer: "A LGPD determina que toda empresa deve indicar um encarregado de dados. Embora a ANPD tenha flexibilizado essa exigência para algumas situações, ter um DPO demonstra comprometimento com a proteção de dados e é recomendado para todas as empresas que tratam dados pessoais.",
      },
      {
        question: "Posso terceirizar o DPO?",
        answer: "Sim! O DPO pode ser um funcionário da empresa ou um profissional/empresa terceirizada. O DPO Online é justamente essa solução: oferecemos profissionais qualificados que atuam como encarregado de dados da sua empresa, com custo muito menor do que contratar um profissional dedicado.",
      },
      {
        question: "Quais são as funções do DPO?",
        answer: "As principais funções incluem: aceitar reclamações de titulares e da ANPD, orientar funcionários sobre práticas de proteção de dados, executar as atribuições determinadas pelo controlador, e orientar a empresa sobre a aplicação da LGPD.",
      },
    ],
  },
  {
    name: "Nossos Serviços",
    questions: [
      {
        question: "Como funciona o DPO Online?",
        answer: "Nosso serviço de DPO Online oferece um profissional qualificado que atua remotamente como encarregado de dados da sua empresa. Você terá acesso à nossa plataforma de gestão, suporte por email/chat, atendimento de solicitações de titulares e orientação contínua sobre conformidade.",
      },
      {
        question: "Quanto tempo leva para se adequar à LGPD?",
        answer: "O tempo varia conforme o porte e complexidade da empresa. Em média, o processo de adequação inicial leva de 2 a 6 meses. Após a adequação inicial, é necessário manter um processo contínuo de conformidade e atualização.",
      },
      {
        question: "O que está incluído em cada plano?",
        answer: "Cada plano inclui diferentes níveis de serviço. O plano Básico é ideal para microempresas, o Profissional para empresas que precisam de conformidade completa, e o Enterprise para organizações maiores com DPO dedicado. Consulte nossa página de planos para detalhes completos.",
      },
      {
        question: "Vocês oferecem consultoria presencial?",
        answer: "Nosso modelo é prioritariamente online, o que nos permite oferecer preços mais acessíveis. Para clientes Enterprise ou situações específicas, podemos realizar visitas presenciais mediante avaliação e custos adicionais.",
      },
    ],
  },
  {
    name: "Pagamento e Contrato",
    questions: [
      {
        question: "Quais formas de pagamento são aceitas?",
        answer: "Aceitamos cartão de crédito (todas as bandeiras), boleto bancário e PIX. O pagamento é recorrente conforme a periodicidade escolhida (mensal ou anual).",
      },
      {
        question: "Posso cancelar a qualquer momento?",
        answer: "No plano mensal, você pode cancelar a qualquer momento sem multa. No plano anual, você se compromete por 12 meses em troca do desconto oferecido. Em caso de cancelamento antecipado do plano anual, há multa proporcional.",
      },
      {
        question: "Como funciona a nota fiscal?",
        answer: "Emitimos nota fiscal de serviços (NFS-e) automaticamente após cada pagamento. A nota é enviada por email e também fica disponível na sua área de cliente.",
      },
      {
        question: "Posso fazer upgrade de plano?",
        answer: "Sim! Você pode fazer upgrade a qualquer momento. A diferença de valor é calculada proporcionalmente ao período restante do seu plano atual. Para downgrade, o novo valor passa a valer a partir do próximo ciclo de cobrança.",
      },
    ],
  },
];

export default function FAQ() {
  const [searchTerm, setSearchTerm] = useState("");
  const [openItems, setOpenItems] = useState<Record<string, boolean>>({});

  const toggleItem = (key: string) => {
    setOpenItems((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  const filteredCategories = faqCategories.map((category) => ({
    ...category,
    questions: category.questions.filter(
      (q) =>
        q.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
        q.answer.toLowerCase().includes(searchTerm.toLowerCase())
    ),
  })).filter((category) => category.questions.length > 0);

  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-20 lg:py-28 bg-gradient-hero">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Perguntas <span className="text-gradient">Frequentes</span>
            </h1>
            <p className="text-lg text-muted-foreground mb-8">
              Encontre respostas para as dúvidas mais comuns sobre LGPD, DPO e nossos serviços.
            </p>

            {/* Search */}
            <div className="relative max-w-xl mx-auto">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
              <input
                type="text"
                placeholder="Buscar perguntas..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-4 bg-card border border-border rounded-xl text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
              />
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Content */}
      <section className="py-20 lg:py-28">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl mx-auto">
            {filteredCategories.length === 0 ? (
              <div className="text-center py-12">
                <p className="text-muted-foreground mb-4">
                  Nenhuma pergunta encontrada para "{searchTerm}"
                </p>
                <Button variant="outline" onClick={() => setSearchTerm("")}>
                  Limpar busca
                </Button>
              </div>
            ) : (
              <div className="space-y-12">
                {filteredCategories.map((category, categoryIndex) => (
                  <div key={categoryIndex}>
                    <h2 className="text-2xl font-bold text-foreground mb-6">
                      {category.name}
                    </h2>
                    <div className="space-y-3">
                      {category.questions.map((item, itemIndex) => {
                        const key = `${categoryIndex}-${itemIndex}`;
                        const isOpen = openItems[key];
                        return (
                          <div
                            key={itemIndex}
                            className="bg-card rounded-xl border border-border overflow-hidden"
                          >
                            <button
                              onClick={() => toggleItem(key)}
                              className="w-full px-6 py-4 flex items-center justify-between text-left hover:bg-muted/50 transition-colors"
                            >
                              <span className="font-medium text-foreground pr-4">
                                {item.question}
                              </span>
                              <ChevronDown
                                className={`w-5 h-5 text-muted-foreground flex-shrink-0 transition-transform ${
                                  isOpen ? "rotate-180" : ""
                                }`}
                              />
                            </button>
                            {isOpen && (
                              <div className="px-6 pb-4">
                                <p className="text-muted-foreground leading-relaxed">
                                  {item.answer}
                                </p>
                              </div>
                            )}
                          </div>
                        );
                      })}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-20 lg:py-28 bg-muted/50">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-xl mx-auto text-center">
            <MessageCircle className="w-12 h-12 text-primary mx-auto mb-6" />
            <h2 className="text-2xl font-bold text-foreground mb-4">
              Não encontrou o que procurava?
            </h2>
            <p className="text-muted-foreground mb-8">
              Nossa equipe está pronta para esclarecer todas as suas dúvidas sobre LGPD e nossos serviços.
            </p>
            <Link to="/contato">
              <Button variant="hero" size="lg">
                Falar com Especialista
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
}
