const partners = [
  ["3.png", "Resfriar"],
  ["4.png", "Fabbof Componentes Automotivos"],
  ["5.png", "Fabbof"],
  ["7.png", "Fibroplast"],
  ["9.png", "Boff Indústria de Autopeças"],
  ["11.png", "B1 Parts"],
  ["14.png", "Bepo"],
  ["16.png", "Vedl Fibras"],
  ["18.png", "Rodoplast"],
  ["65.png", "VTruck"],
  ["67.png", "Fiberplast"],
  ["68.png", "Firestone"],
  ["69.png", "Oter"],
  ["73.png", "Vinilona Sansuy"],
  ["74.png", "Drakar"],
  ["75.png", "Toda Carga Cipatex"],
  ["77.png", "GV Tronic"],
  ["78.png", "Luna Implementos"],
  ["79.png", "Zamin Indústria Eletrônica"],
  ["81.png", "Venka"],
  ["83.png", "Gelbox"],
  ["85.png", "IDP Borghetti"],
  ["87.png", "Braslux"],
  ["89.png", "Olho de Gato"],
  ["93.png", "Orgus"],
  ["96.png", "Bonfanti Peças"],
  ["99.png", "Edreaza Componentes Automotivos"],
  ["19.png", "Rodoplast"],
  ["21.png", "Climatizar"],
  ["23.png", "Elber Automotive"],
  ["26.png", "Maxiclima"],
  ["27.png", "Chimba Cozinhas para Caminhões"],
  ["29.png", "Nino Faróis"],
  ["30.png", "Amalcaburio"],
  ["32.png", "Pradolux"],
  ["33.png", "Amil Componentes Automotivos"],
  ["40.png", "Roadline"],
  ["41.png", "Gauss"],
  ["44.png", "H3 Componentes Automotivos"],
  ["46.png", "Jost"],
  ["48.png", "Zanbor Indústria Metalúrgica"],
  ["49.png", "Aquário"],
  ["50.png", "Kauai Automotivo"],
  ["51.png", "Fibracel"],
  ["61.png", "CP"],
  ["63.png", "GRSUL Componentes Automotivos"],
  ["106.png", "BPS Automotive"],
  ["108.png", "PCCozinhas"],
  ["111.png", "Cunhados Peças"],
  ["113.png", "IAM"],
] as const;

function PartnerGroup({ hidden = false }: { hidden?: boolean }) {
  return (
    <div className="partners-group" aria-hidden={hidden || undefined}>
      {partners.map(([file, name]) => (
        <div className="partner-logo" key={`${hidden ? "copy-" : ""}${file}`}>
          <img
            src={`${import.meta.env.BASE_URL}partners/${file}`}
            alt={hidden ? "" : `Logo ${name}`}
            loading="lazy"
            decoding="async"
          />
        </div>
      ))}
    </div>
  );
}

export default function Partners() {
  return (
    <section className="partners-section" aria-labelledby="partners-title">
      <div className="site-container partners-heading">
        <h2 id="partners-title">Nossos parceiros</h2>
      </div>

      <div className="partners-marquee">
        <div className="partners-track">
          <PartnerGroup />
          <PartnerGroup hidden />
        </div>
      </div>
    </section>
  );
}