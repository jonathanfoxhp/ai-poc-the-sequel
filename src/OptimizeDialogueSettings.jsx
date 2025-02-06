import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import speakerOffIcon from "/icons/speakerOff.svg";
import speakerOnIcon from "/icons/speakerOn.svg";
import aiToggleIcon from "/icons/aiToggle.svg";
import bellIcon from "/icons/bell.svg";
import devicesIcon from "/icons/devices.svg";
import plusIcon from "/icons/plus.svg";
import shopIcon from "/icons/shop.svg";
import CardFlourish1 from "/cardFlourish1.png";
import CardFlourish2 from "/cardFlourish2.png";
import CardFlourish3 from "/cardFlourish3.png";
import "./FullAudioSettings.css";

import Switch from "./components/Switch";
import Equalizer from "./components/Equalizer";

function OptimizeDialogueSettings() {
  const dialogeOptimizedEqData = [-5, -3, -2, 0, 1.75, 2.5, 3, 4, 2.75, 1.5];

  const [eqData, setEqData] = useState(dialogeOptimizedEqData);
  const [isDialogueOptimized, setIsDialogueOptimized] = useState(true);

  const onDialogueOptimizedCHange = (e) => {
    setIsDialogueOptimized(e);
    setEqData(e ? dialogeOptimizedEqData : undefined);
  };

  return (
    <div>
      not currently used
      {/* <div className="settings-outer-container__section-title-bar">
        <span>Equalizer</span>
        <Switch
          checked={isDialogueOptimized}
          onCheckedChange={onDialogueOptimizedCHange}
        />
      </div>
      <div className="text-[#525365] px-8 pb-8 h-60">
        <Equalizer eqData={eqData} />
      </div> */}
    </div>
  );
}

export default OptimizeDialogueSettings;
