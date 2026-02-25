const skills = [
  { name: "C# / .NET", level: 70 },
  { name: "Unity", level: 55 },
  { name: "React / JS", level: 60 },
  { name: "SQL", level: 50 },
  { name: "Git", level: 65 },
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