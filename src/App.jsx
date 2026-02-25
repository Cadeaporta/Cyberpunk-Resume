import { useState } from "react";
import Header from "./components/Header";
import Menu from "./components/Menu";
import Panel from "./components/Panel";

function App() {
  const [active, setActive] = useState(null);

  return (
    <div className="app">
      <Header />
      <div className="main">
        <Menu active={active} setActive={setActive} />
        {active && <Panel activeSection={active} onClose={() => setActive(null)} />}
      </div>
      <footer className="hud-footer">
        <span>MODEL LINE // 1.2001A</span>
        <span>PHASE NAME: GUILHERME.ALV.EXE</span>
        <span>TASK_MANAGER_0116</span>
      </footer>
    </div>
  );
}

export default App;