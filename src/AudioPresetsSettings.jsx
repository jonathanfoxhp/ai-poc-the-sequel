import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import aiIcon from "/icons/ai.svg";
import aiToggleIcon from "/icons/aiToggle.svg";
import bellIcon from "/icons/bell.svg";
import devicesIcon from "/icons/devices.svg";
import plusIcon from "/icons/plus.svg";
import shopIcon from "/icons/shop.svg";
import CardFlourish1 from "/cardFlourish1.png";
import CardFlourish2 from "/cardFlourish2.png";
import CardFlourish3 from "/cardFlourish3.png";
import "./FullAudioSettings.css";
import AISwitch from "./components/AISwitch";
import RadioGroup from "./components/RadioGroup";
import RadioItem from "./components/RadioItem";
import { useState } from "react";

function AudioPresetsSettings() {
  const [radioValue, setRadioValue] = useState("music");

  return (
    <div>
      <div className="settings-outer-container__section-title-bar">
        <span>Presets</span>
      </div>
      <RadioGroup value={radioValue} onValueChange={setRadioValue}>
        <div className="settings-outer-container__setting-bar h-20">
          <RadioItem label="Auto" value="auto" onValueChange={setRadioValue} />
        </div>
        <div className="settings-outer-container__setting-bar h-20">
          <RadioItem
            label="Music"
            value="music"
            onValueChange={setRadioValue}
          />
        </div>
        <div className="settings-outer-container__setting-bar h-20">
          <RadioItem
            label="Movie"
            value="movie"
            onValueChange={setRadioValue}
          />
        </div>
        <div className="settings-outer-container__setting-bar  h-20">
          <RadioItem
            label="Voice"
            value="voice"
            onValueChange={setRadioValue}
          />
        </div>
      </RadioGroup>
    </div>
  );
}

export default AudioPresetsSettings;
