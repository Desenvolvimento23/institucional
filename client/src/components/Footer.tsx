import { Facebook, Instagram } from "lucide-react";

export default function Footer() {
  return (
    <footer id="contato" className="footer">
      <div className="site-container">
        <div className="footer-grid">
          <div className="footer-brand">
            <div className="brand-logo footer-logo">
              <img
                src={`${import.meta.env.BASE_URL}brand/campagnaro-logo-main.png`}
                alt="Campagnaro"
              />
            </div>
          </div>

          <div>
            <h3>Navegação</h3>
            <a href="#historia">Nossa história</a>
            <a href="#empresas">Empresas</a>
            <a href="https://www.campagnaro.com.br">Loja online</a>
          </div>

          <div>
            <h3>Redes sociais</h3>
            <a
              href="https://instagram.com/campagnaro"
              target="_blank"
              rel="noreferrer"
            >
              <Instagram size={16} /> Instagram
            </a>
            <a
              href="https://www.facebook.com/campagnaroacessorios/"
              target="_blank"
              rel="noreferrer"
            >
              <Facebook size={16} /> Facebook
            </a>
          </div>
        </div>

        <div className="footer-bottom">
          <span>© {new Date().getFullYear()} Grupo Campagnaro.</span>
          <span>Feito para quem movimenta o Brasil.</span>
        </div>
      </div>
    </footer>
  );
}
