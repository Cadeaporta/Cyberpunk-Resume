const skills = [
  { name: "C# / .NET", level: 15 },
  { name: "SQL", level: 15 },
  { name: "Git", level: 20 },
];

export default function Inventory() {
  return (
    <div className="section-content">
      {skills.map((s) => (
        <div key={s.name} className="skill-row">
          <span className="label">{s.name}</span>
          <div className="skill-bar">
            <div className="skill-fill" style={{ width: `${s.level}%` }} />
          </div>
          <span className="skill-num">{s.level}</span>
        </div>
      ))}
    </div>
  );
}