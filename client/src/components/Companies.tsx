import { ArrowUpRight, Instagram } from "lucide-react";
import CompanyCarousel from "./CompanyCarousel";

const companies = [
  {
    name: "Campagnaro Truck Center",
    location: "Vacaria, RS",
    description:
      "Manutenção completa para caminhões e carretas com estrutura e equipamentos modernos.",
    logo: "companies/truck-center.png",
    logoClass: "",
    href: "https://www.campagnaro.com.br/",
    instagram: "https://www.instagram.com/campagnaroacessorios/",
    images: [
      "companies/truck-center-gallery/01-fachada.jpg",
      "companies/truck-center-gallery/02-servicos.jpg",
      "companies/truck-center-gallery/03-estoque.jpg",
      "companies/truck-center-gallery/04-manutencao-cabine.jpg",
      "companies/truck-center-gallery/05-inspecao.jpg",
      "companies/truck-center-gallery/06-testes.jpg",
    ],
  },
  {
    name: "Campagnaro Peças e Acessórios",
    location: "Vacaria, RS",
    description:
      "Peças, acessórios, climatização, estofaria e soluções para equipar seu caminhão.",
    logo: "companies/acessorios.png",
    logoClass: "",
    href: "https://www.campagnaro.com.br/",
    instagram: "https://www.instagram.com/campagnaroacessorios/",
    images: [
      "companies/acessorios-gallery/01-fachada.jpg",
      "companies/acessorios-gallery/02-historia.jpg",
      "companies/acessorios-gallery/03-loja.jpg",
      "companies/acessorios-gallery/04-estrutura.jpg",
      "companies/acessorios-gallery/05-acessorios.jpg",
      "companies/acessorios-gallery/06-estofaria.jpg",
    ],
  },
  {
    name: "Campagnaro Caminhões e Carretas",
    location: "Vacaria, RS",
    description:
      "Compra e venda de caminhões e carretas, com suporte completo de documentação.",
    logo: "companies/caminhoes-carretas.png",
    logoClass: "company-logo-cropped",
    href: "https://www.campagnarocaminhoes.com.br/",
    instagram: "https://www.instagram.com/campagnarocaminhoes",
    images: [
      "companies/caminhoes-carretas-gallery/01-fachada-aerea.jpg",
      "companies/caminhoes-carretas-gallery/02-fachada.jpg",
      "companies/caminhoes-carretas-gallery/03-estrutura.jpg",
      "companies/caminhoes-carretas-gallery/04-entrada.jpg",
      "companies/caminhoes-carretas-gallery/05-caminhoes.jpg",
      "companies/caminhoes-carretas-gallery/06-caminhao.jpg",
    ],
  },
  {
    name: "Forte Demolidora",
    location: "Vacaria, RS",
    description:
      "Desmontagem veicular responsável e reaproveitamento de peças originais usadas.",
    logo: "companies/forte-demolidora.png",
    logoClass: "company-logo-square",
    href: "https://www.demolidoraforte.com.br/",
    instagram: "https://www.instagram.com/demolidoraforte/",
    images: [
      "companies/forte-demolidora-gallery/01-fachada.jpg",
      "companies/forte-demolidora-gallery/02-vista-aerea.jpg",
      "companies/forte-demolidora-gallery/03-patio.jpg",
      "companies/forte-demolidora-gallery/04-cabines.jpg",
      "companies/forte-demolidora-gallery/05-pecas.jpg",
      "companies/forte-demolidora-gallery/06-bancos.jpg",
    ],
  },
  {
    name: "Forte Restauradora",
    location: "São Marcos, RS",
    description:
      "Restauração, alinhamento de chassis, pintura e reforma de veículos pesados.",
    logo: "companies/forte-restauradora-113.png",
    logoClass: "company-logo-badge",
    href: "https://forterestauradora.com.br/",
    instagram: "https://www.instagram.com/forte_restauradora/",
    images: [
      "companies/forte-restauradora-gallery/01-fachada.webp",
      "companies/forte-restauradora-gallery/02-vista-aerea.webp",
      "companies/forte-restauradora-gallery/03-identidade.webp",
      "companies/forte-restauradora-gallery/04-acesso.webp",
      "companies/forte-restauradora-gallery/05-estrutura.webp",
      "companies/forte-restauradora-gallery/06-servico.webp",
    ],
  },
  {
    name: "Campagnaro e Ciotta Implementos",
    location: "Vacaria, RS",
    description:
      "Mecânica pesada, reforma de carretas, pintura naval e serviços autorizados Randon.",
    logo: "companies/ciotta-randon.png",
    logoClass: "",
    href: "https://www.instagram.com/cecimplementos/",
    instagram: "https://www.instagram.com/cecimplementos/",
    images: [
      "companies/ciotta-randon-gallery/01-fachada.webp",
      "companies/ciotta-randon-gallery/02-vista-aerea.webp",
      "companies/ciotta-randon-gallery/03-fachada-geral.webp",
      "companies/ciotta-randon-gallery/04-oficina.webp",
      "companies/ciotta-randon-gallery/05-estrutura.webp",
      "companies/ciotta-randon-gallery/06-implemento.webp",
    ],
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
            Seis operações especializadas, conectadas pela mesma qualidade e
            pelo compromisso de manter o transporte em movimento.
          </p>
        </div>

        <div className="company-grid">
          {companies.map(company => (
            <article
              className={`company-card${company.images ? " has-carousel" : ""}`}
              key={company.name}
            >
              <div className="company-card-top">
                <a
                  className="company-logo-link"
                  href={company.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={`Acessar site da ${company.name}`}
                >
                  <div className={`company-logo-frame ${company.logoClass}`}>
                  <img
                    src={`${import.meta.env.BASE_URL}${company.logo}`}
                    alt={`Logo ${company.name}`}
                  />
                </div>
                </a>
              </div>
              <div className="company-card-content">
                <h3><a className="company-title-link" href={company.href} target="_blank" rel="noreferrer">{company.name}</a></h3>
                <a
                  className="company-card-footer"
                  href={company.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={`Acessar página da ${company.name}`}
                >
                  <span>{company.location}</span>
                  <ArrowUpRight size={18} />
                </a>
                <p>{company.description}</p>
              </div>
              {company.images ? (
                <CompanyCarousel
                  companyName={company.name}
                  images={company.images}
                  intervalMs={4000}
                />
              ) : null}
              <a
                className="company-instagram-link"
                href={company.instagram}
                target="_blank"
                rel="noreferrer"
                aria-label={`Abrir Instagram da ${company.name}`}
              >
                <Instagram size={17} />
                Instagram
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
