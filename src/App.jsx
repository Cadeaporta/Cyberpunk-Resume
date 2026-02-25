import { useState } from "react";
import Header from "./components/Header";
import Menu from "./components/Menu";
import Panel from "./components/Panel";

function App() {
  const [activeSection, setActiveSection] = useState("inventory");

  return (
    <div className="app">
      <Header />
      <Menu active={activeSection} setActive={setActiveSection} />
      <Panel activeSection={activeSection} />
    </div>
  );
}

export default App;