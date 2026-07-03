import { Menu, X } from "lucide-react";
import { useState } from "react";

const navItems = [
  { label: "Início", href: "#inicio" },
  { label: "História", href: "#historia" },
  { label: "Empresas", href: "#empresas" },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="site-header">
      <div className="site-container header-inner">
        <a className="brand-logo" href="#inicio" aria-label="Campagnaro — início">
          <img src="/brand/campagnaro-logo-main.png" alt="Campagnaro" />
        </a>

        <nav className="desktop-nav" aria-label="Navegação principal">
          {navItems.map((item) => (
            <a key={item.href} href={item.href}>
              {item.label}
            </a>
          ))}
        </nav>

        <a
          className="button button-red header-cta"
          href="https://www.campagnaro.com.br"
          target="_blank"
          rel="noreferrer"
        >
          Acessar loja
        </a>

        <button
          className="menu-toggle"
          type="button"
          aria-label={isOpen ? "Fechar menu" : "Abrir menu"}
          aria-expanded={isOpen}
          onClick={() => setIsOpen((value) => !value)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {isOpen && (
        <nav className="mobile-nav" aria-label="Navegação mobile">
          <div className="site-container mobile-nav-inner">
            {navItems.map((item) => (
              <a key={item.href} href={item.href} onClick={() => setIsOpen(false)}>
                {item.label}
              </a>
            ))}
            <a
              className="button button-red"
              href="https://www.campagnaro.com.br"
              target="_blank"
              rel="noreferrer"
            >
              Acessar loja
            </a>
          </div>
        </nav>
      )}
    </header>
  );
}
