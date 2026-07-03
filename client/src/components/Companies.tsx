import { ArrowUpRight } from "lucide-react";

const companies = [
  {
    name: "Campagnaro Peças e Acessórios",
    location: "Vacaria, RS",
    description:
      "Peças, acessórios, climatização, estofaria e soluções para equipar seu caminhão.",
    logo: "companies/acessorios.png",
    logoClass: "",
    href: "https://www.campagnaro.com.br/",
  },
  {
    name: "Campagnaro Truck Center",
    location: "Vacaria, RS",
    description:
      "Manutenção completa para caminhões e carretas com estrutura e equipamentos modernos.",
    logo: "companies/truck-center.png",
    logoClass: "",
    href: "https://www.campagnaro.com.br/",
  },
  {
    name: "Campagnaro e Ciotta Implementos",
    location: "Vacaria, RS",
    description:
      "Mecânica pesada, reforma de carretas, pintura naval e serviços autorizados Randon.",
    logo: "companies/ciotta-randon.png",
    logoClass: "",
    href: "https://www.instagram.com/cecimplementos/",
  },
  {
    name: "Campagnaro Caminhões e Carretas",
    location: "Vacaria, RS",
    description:
      "Compra e venda de caminhões e carretas, com suporte completo de documentação.",
    logo: "companies/caminhoes-carretas.png",
    logoClass: "company-logo-cropped",
    href: "https://www.campagnarocaminhoes.com.br/",
  },
  {
    name: "Forte Restauradora",
    location: "São Marcos, RS",
    description:
      "Restauração, alinhamento de chassis, pintura e reforma de veículos pesados.",
    logo: "companies/forte-restauradora-113.png",
    logoClass: "company-logo-badge",
    href: "https://forterestauradora.com.br/",
  },
  {
    name: "Forte Demolidora",
    location: "Rio Grande do Sul",
    description:
      "Desmontagem veicular responsável e reaproveitamento de peças originais usadas.",
    logo: "companies/forte-demolidora.png",
    logoClass: "company-logo-square",
    href: "https://www.demolidoraforte.com.br/",
  },
];

export default function Companies() {
  return (
    <section id="empresas" className="section companies-section">
      <div className="site-container">
        <div className="section-heading">
          <span className="section-kicker light">Grupo Campagnaro</span>
          <h2>Uma solução para cada trecho da jornada.</h2>
          <p>
            Seis operações especializadas, conectadas pela mesma qualidade e pelo
            compromisso de manter o transporte em movimento.
          </p>
        </div>

        <div className="company-grid">
          {companies.map((company) => {
            return (
              <a
                className="company-card"
                href={company.href}
                target="_blank"
                rel="noreferrer"
                key={company.name}
                aria-label={`Acessar página da ${company.name}`}
              >
                <div className="company-card-top">
                  <div className={`company-logo-frame ${company.logoClass}`}>
                    <img
                      src={`${import.meta.env.BASE_URL}${company.logo}`}
                      alt={`Logo ${company.name}`}
                    />
                  </div>
                </div>
                <h3>{company.name}</h3>
                <p>{company.description}</p>
                <div className="company-card-footer">
                  <span>{company.location}</span>
                  <ArrowUpRight size={18} />
                </div>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
