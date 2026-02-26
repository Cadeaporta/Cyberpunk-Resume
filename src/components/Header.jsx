export default function Header() {
  return (
    <header className="hud-header">
      <div className="hud-left">
        <div className="hud-stat">
          <span className="stat-val">19</span>
          <span className="stat-label">LEVEL</span>
          <div className="stat-bar"><div className="stat-fill" style={{ width: "62%" }} /></div>
        </div>
      </div>
      <div className="hud-right">
        <span className="hud-tag red">▲ Suporte Técnico</span>
        <span className="hud-tag">€$ .NET DEV</span>
      </div>
    </header>
  );
}