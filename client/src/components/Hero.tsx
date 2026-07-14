import type { CSSProperties } from "react";
import { ArrowDown, ArrowRight, MapPin } from "lucide-react";

export default function Hero() {
  const heroImageStyle = {
    "--hero-image": `url("${import.meta.env.BASE_URL}hero/desk.jpg")`,
  } as CSSProperties;

  return (
    <section id="inicio" className="hero">
      <div className="hero-media" style={heroImageStyle} aria-hidden="true" />
      <div className="hero-overlay" aria-hidden="true" />

      <div className="site-container hero-content">
        <div className="hero-copy">
          <div className="eyebrow">
            <span />
            Desde 1998
          </div>
          <h1>
            A estrada exige.
            <strong>A Campagnaro resolve.</strong>
          </h1>
          <p>
            Peças, acessórios e serviços especializados para quem move o Brasil.
            Um grupo completo, construído sobre confiança e experiência.
          </p>
          <div className="hero-actions">
            <a className="button button-red" href="#empresas">
              Conheça o grupo <ArrowRight size={18} />
            </a>
          </div>
        </div>

        <div className="hero-facts" aria-label="Números do Grupo Campagnaro">
          <div>
            <strong>25+</strong>
            <span>anos de estrada</span>
          </div>
          <div>
            <strong>6</strong>
            <span>empresas especializadas</span>
          </div>
          <div>
            <strong>5º</strong>
            <span>lugar no ranking nacional</span>
          </div>
        </div>

        <div className="hero-location">
          <MapPin size={17} />
          Vacaria, Rio Grande do Sul
        </div>
      </div>

      <a className="scroll-cue" href="#historia" aria-label="Ir para nossa história">
        <ArrowDown size={20} />
      </a>
    </section>
  );
}
