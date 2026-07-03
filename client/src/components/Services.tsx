import {
  ArrowRight,
  Check,
  Cog,
  Package,
  Paintbrush,
  ShieldCheck,
  Snowflake,
  Wrench,
} from "lucide-react";

const services = [
  {
    icon: Wrench,
    title: "Manutenção e reparo",
    description: "Geometria, balanceamento, borracharia e manutenção especializada.",
  },
  {
    icon: Package,
    title: "Peças e acessórios",
    description: "Um catálogo completo para diferentes marcas e necessidades.",
  },
  {
    icon: Snowflake,
    title: "Climatização",
    description: "Instalação e manutenção de sistemas para conforto na cabine.",
  },
  {
    icon: ShieldCheck,
    title: "Segurança",
    description: "Rastreadores, proteção e tecnologia para a sua operação.",
  },
  {
    icon: Cog,
    title: "Implementos",
    description: "Reforma de carretas, mecânica pesada e soluções Randon.",
  },
  {
    icon: Paintbrush,
    title: "Restauração",
    description: "Pintura, alinhamento e recuperação completa de veículos.",
  },
];

export default function Services() {
  return (
    <section id="servicos" className="section services-section">
      <div className="site-container">
        <div className="section-heading split-heading">
          <div>
            <span className="section-kicker">O que fazemos</span>
            <h2>Do detalhe técnico à solução completa.</h2>
          </div>
          <p>
            Atendimento especializado para reduzir paradas, aumentar a segurança e
            deixar seu veículo pronto para a próxima viagem.
          </p>
        </div>

        <div className="service-grid">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <article className="service-card" key={service.title}>
                <div className="service-icon">
                  <Icon size={25} strokeWidth={1.8} />
                </div>
                <div>
                  <h3>{service.title}</h3>
                  <p>{service.description}</p>
                </div>
              </article>
            );
          })}
        </div>

        <div className="store-banner">
          <div className="store-banner-copy">
            <span className="section-kicker light">Loja online</span>
            <h2>Peças e acessórios a poucos cliques.</h2>
            <p>
              Compre com praticidade, atendimento próximo e entrega para todo o
              Brasil.
            </p>
            <ul>
              <li><Check size={18} /> Compra segura</li>
              <li><Check size={18} /> Produtos selecionados</li>
              <li><Check size={18} /> Envio rápido</li>
            </ul>
            <a
              className="button button-white"
              href="https://www.campagnaro.com.br"
              target="_blank"
              rel="noreferrer"
            >
              Ir para a loja <ArrowRight size={18} />
            </a>
          </div>
          <div className="store-banner-mark" aria-hidden="true">
            C
          </div>
        </div>
      </div>
    </section>
  );
}
