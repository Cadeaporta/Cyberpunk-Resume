export default function Panel({ activeSection }) {
  function renderContent() {
    switch (activeSection) {
      case "character":
        return (
          <>
            <h2>CHARACTER PROFILE</h2>
            <p>Estudante de Engenharia de Software.</p>
          </>
        );

      case "inventory":
        return (
          <>
            <h2>INVENTORY</h2>
            <p>C# | .NET | SQL | Unity</p>
          </>
        );

      case "quests":
        return (
          <>
            <h2>QUEST LOG</h2>
            <p>Experiência em suporte técnico.</p>
          </>
        );

      case "shards":
        return (
          <>
            <h2>SHARDS</h2>
            <p>Projetos e links do GitHub.</p>
          </>
        );

      default:
        return <p>System Error</p>;
    }
  }

  return <div className="panel">{renderContent()}</div>;
}