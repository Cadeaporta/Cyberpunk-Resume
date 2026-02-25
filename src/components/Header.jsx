export default function Header() {
  return (
    <header className="hud-header">
      <div className="hud-left">
        <div className="hud-stat">
          <span className="stat-val">19</span>
          <span className="stat-label">LEVEL</span>
          <div className="stat-bar"><div className="stat-fill" style={{ width: "62%" }} /></div>
        </div>
        <div className="hud-stat">
          <span className="stat-val green">42</span>
          <span className="stat-label green">STREET CRED</span>
          <div className="stat-bar"><div className="stat-fill green" style={{ width: "42%" }} /></div>
        </div>
      </div>
      <div className="hud-right">
        <span className="hud-tag red">▲ HORTOLÂNDIA — SP</span>
        <span className="hud-tag">€$ .NET DEV</span>
      </div>
    </header>
  );
}