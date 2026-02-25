export default function Menu({ active, setActive }) {
  const buttons = [
    "crafting",
    "inventory",
    "map",
    "character",
    "journal",
  ];

  return (
    <div className="menu">
      {buttons.map((btn) => (
        <div
          key={btn}
          className={`menu-btn ${active === btn ? "active" : ""}`}
          onClick={() => setActive(btn)}
        >
          {btn.toUpperCase()}
        </div>
      ))}
    </div>
  );
}