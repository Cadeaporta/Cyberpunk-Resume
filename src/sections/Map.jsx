const links = [
  { label: "GITHUB", url: "https://github.com/Cadeaporta" },
  { label: "LINKEDIN", url: "https://www.linkedin.com/in/guilherme-alves-0a523b37b/" },
  { label: "WHATSAPP", url: "wa.me/19978172933"},
];

export default function Map() {
  return (
    <div className="section-content">
      {links.map((l) => (
        <div key={l.label} className="map-link">
          <span className="label">{l.label}</span>
          <a href={l.url} target="_blank" rel="noreferrer">{l.url}</a>
        </div>
      ))}
    </div>
  );
}