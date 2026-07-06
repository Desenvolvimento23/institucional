const navItems = [
  { label: "Início", href: "#inicio" },
  { label: "História", href: "#historia" },
  { label: "Empresas", href: "#empresas" },
];

export default function Header() {
  return (
    <header className="site-header">
      <div className="site-container header-inner">
        <a
          className="brand-logo"
          href="#inicio"
          aria-label="Campagnaro — início"
        >
          <img
            src={`${import.meta.env.BASE_URL}brand/campagnaro-logo-main.png`}
            alt="Campagnaro"
          />
        </a>

        <nav className="desktop-nav" aria-label="Navegação principal">
          {navItems.map(item => (
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
      </div>
    </header>
  );
}
