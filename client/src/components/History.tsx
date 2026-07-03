const milestones = [
  {
    year: "1998",
    title: "A origem",
    description:
      "Gerson Marin Campagnaro transforma sua experiência como caminhoneiro em uma empresa criada para atender uma necessidade real da estrada.",
  },
  {
    year: "2005",
    title: "Expansão regional",
    description:
      "A Campagnaro cresce, amplia a operação e conquista uma posição de destaque no mercado do Sul do Brasil.",
  },
  {
    year: "2017",
    title: "Novas frentes",
    description:
      "A aquisição da Forte Restauradora amplia o portfólio para restauração, alinhamento e reforma de veículos pesados.",
  },
  {
    year: "2024",
    title: "Referência nacional",
    description:
      "O grupo se consolida entre as maiores empresas brasileiras de peças e acessórios para caminhões.",
  },
];

export default function History() {
  return (
    <section id="historia" className="section history-section">
      <div className="site-container">
        <div className="section-heading split-heading">
          <div>
            <span className="section-kicker">Nossa história</span>
            <h2>Conhecemos a estrada porque viemos dela.</h2>
          </div>
          <p>
            Uma trajetória construída a partir da experiência na estrada, da visão
            de uma família e do compromisso de solucionar necessidades reais do
            transporte rodoviário.
          </p>
        </div>

        <div className="history-story">
          <div>
            <span className="section-kicker">A Campagnaro</span>
            <h3>Uma história que começou atrás do volante.</h3>
          </div>
          <div className="history-story-copy">
            <p>
              A Campagnaro nasceu através de Gerson Marin Campagnaro, inspirado por
              seu pai, o caminhoneiro Zulmiro Campagnaro. Após oito anos como
              motorista, Gerson fundou a empresa em 1998 para atender à falta de
              peças, acessórios e serviços que observava nas estradas.
            </p>
            <p>
              Com gestão familiar e setores especializados, o Grupo cresceu até
              alcançar o 5º lugar no ranking nacional do segmento. Suas empresas
              estão no Rio Grande do Sul, principalmente em Vacaria, com a Forte
              Restauradora localizada em São Marcos.
            </p>
          </div>
        </div>

        <div className="timeline">
          {milestones.map((milestone) => (
            <article className="timeline-item" key={milestone.year}>
              <div className="timeline-year">{milestone.year}</div>
              <div>
                <h3>{milestone.title}</h3>
                <p>{milestone.description}</p>
              </div>
            </article>
          ))}
        </div>

        <div className="history-note">
          <span>Uma empresa familiar, feita por pessoas.</span>
          <p>
            Hoje, as empresas do Grupo Campagnaro atuam de forma integrada para
            oferecer atendimento ágil, conhecimento técnico e soluções completas.
          </p>
        </div>
      </div>
    </section>
  );
}
