const partners = [
  ["54.png", "Aquário"],
  ["55.png", "Kauai Automotivo"],
  ["66.png", "CP"],
  ["68.png", "GRSUL Componentes Automotivos"],
  ["72.png", "Fiberplast"],
  ["73.png", "Firestone"],
  ["74.png", "Oter"],
  ["75.png", "ASX"],
  ["76.png", "Alcoa"],
  ["77.png", "Serisul"],
  ["78.png", "Vinilona Sansuy"],
  ["79.png", "Drakar"],
  ["3.png", "Resfriar"],
  ["4.png", "Fabbof Componentes Automotivos"],
  ["8.png", "Fibroplast"],
  ["11.png", "Fibroplast do Brasil"],
  ["14.png", "Boff Indústria de Autopeças"],
  ["15.png", "B1 Parts"],
  ["19.png", "Bepo"],
  ["21.png", "Vedl Fibras"],
  ["23.png", "Rodoplast"],
  ["26.png", "Climatizar"],
  ["28.png", "Elber Automotive"],
  ["31.png", "Maxiclima"],
  ["32.png", "Chimba Cozinhas para Caminhões"],
  ["34.png", "Nino Faróis"],
  ["35.png", "Amalcaburio"],
  ["37.png", "Pradolux"],
  ["38.png", "Amil Componentes Automotivos"],
  ["44.png", "Papaléguas"],
  ["45.png", "Roadline"],
  ["46.png", "Gauss"],
  ["49.png", "H3 Componentes Automotivos"],
  ["50.png", "JS Tapetes Personalizados"],
  ["51.png", "Jost"],
  ["53.png", "Zanbor Indústria Metalúrgica"],
  ["89.png", "Gelbox"],
  ["92.png", "IDP Borghetti"],
  ["94.png", "Braslux"],
  ["96.png", "Olho de Gato"],
  ["99.png", "IVA"],
  ["100.png", "Orgus"],
  ["103.png", "Bonfanti Peças"],
  ["106.png", "Edreaza Componentes Automotivos"],
  ["109.png", "Guerra"],
  ["113.png", "BPS Automotive"],
  ["115.png", "PCCozinhas"],
  ["118.png", "Cunhados Peças"],
  ["120.png", "IAM"],
  ["123.png", "CEPAM"],
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
