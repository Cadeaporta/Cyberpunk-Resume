const buttons = [
  { id: "Apresentação", icon: "◈" },
  { id: "character",    icon: "⊙" },
  { id: "skills",       icon: "⊞" },
  { id: "journal",      icon: "≡" },
  { id: "map",          icon: "◎" },
];

export default function Menu({ active, setActive }) {
  return (
    <div className="menu-grid">
      {buttons.map((btn) => (
        <div
          key={btn.id}
          className={`menu-card ${active === btn.id ? "active" : ""}`}
          onClick={() => setActive(active === btn.id ? null : btn.id)}
        >
          <span className="card-icon">{btn.icon}</span>
          <span className="card-label">{btn.id.toUpperCase()}</span>
        </div>
      ))}
    </div>
  );
}