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
import Slider from "./components/Slider";
import Select from "./components/Select";
import SecondaryAlert from "./components/SecondaryAlert";

function AudioOutputSettings({ alertTitle }) {
  const outputTypeOptions = [{ label: "Internal speaker", vaule: 1 }];

  const [volume, setVolune] = useState([65]);
  const [hdrEnabled, setIsHDR] = useState(true);

  const undoMovieModeOptimization = () => {
    setIsHDR(false);
    setVolune([40]);
  };

  return (
    <div className={alertTitle && "bg-hpxWhite"}>
      <div className="settings-outer-container__section-title-bar">
        <span>Output</span>
        {alertTitle && (
          <SecondaryAlert
            title={alertTitle}
            buttonLabel={"Undo adjustment"}
            onButtonClick={undoMovieModeOptimization}
          />
        )}
      </div>
      <div className="settings-outer-container__setting-bar">
        <span>Type</span>
        <Select options={outputTypeOptions} />
      </div>
      <div className="settings-outer-container__setting-bar">
        <span>Volume</span>
        <Slider
          startIcon={<img src={speakerOffIcon} />}
          endIcon={<img src={speakerOnIcon} />}
          value={volume}
          onValueChange={setVolune}
        />
      </div>
      <div className="settings-outer-container__setting-bar">
        <span>HDR Sound</span>
        <Switch checked={hdrEnabled} onCheckedChange={setIsHDR} />
      </div>
    </div>
  );
}

export default AudioOutputSettings;
