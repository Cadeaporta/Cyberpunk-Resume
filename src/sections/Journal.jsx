const entries = [
  { title: "Limpeza de Cache Automático", desc: "Automação de limpeza de cache para plataforma interna.", tag: "PROFISSIONAL" },
  { title: "Projeto Pessoal #1", desc: "Detalhes em breve...", tag: "PESSOAL" },
];

export default function Journal() {
  return (
    <div className="section-content">
      {entries.map((e) => (
        <div key={e.title} className="journal-entry">
          <div className="journal-header">
            <span className="journal-title">{e.title}</span>
            <span className="journal-tag">[{e.tag}]</span>
          </div>
          <p className="journal-desc">{e.desc}</p>
        </div>
      ))}
    </div>
  );
}