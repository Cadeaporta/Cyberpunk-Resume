import Apresentacao from "../sections/Apresentacao";
import Character from "../sections/Character";
import Skills from "../sections/skills";
import Journal from "../sections/Journal";
import Map from "../sections/map";

const sections = {
  Apresentação: <Apresentacao />,
  Skills: <Skills />,
  map: <Map />,
  character: <Character />,
  journal: <Journal />,
};

export default function Panel({ activeSection, onClose }) {
  return (
    <div className="panel">
      <div className="panel-header">
        <span className="panel-title">{activeSection.toUpperCase()}</span>
        <span className="panel-close" onClick={onClose}>[ESC] CLOSE</span>
      </div>
      {sections[activeSection]}
    </div>
  );
}