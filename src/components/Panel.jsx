import Apresentacao from "../sections/Apresentacao";
import Character from "../sections/Character";
import Inventory from "../sections/Inventory";
import Journal from "../sections/Journal";
import Map from "../sections/Map";

const sections = {
  Apresentação: <Apresentacao />,
  inventory: <Inventory />,
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