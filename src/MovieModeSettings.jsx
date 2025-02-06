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

function MovieModeSettings() {
  const inputTypeOptions = [{ label: "Internal mic", vaule: 1 }];

  return (
    <div>
      {/* <div className="settings-outer-container__section-title-bar">
        <span>Movie Mode</span>
      </div> */}
      <div className="settings-outer-container__setting-bar">
        <span>Input</span>
        <Select options={inputTypeOptions} />
      </div>
      <div className="settings-outer-container__setting-bar">
        <span>Volume</span>
        <Slider
          startIcon={<img src={speakerOffIcon} />}
          endIcon={<img src={speakerOnIcon} />}
        />
      </div>
      <div className="settings-outer-container__setting-bar">
        <span>Privacy Mode</span>
        <Switch defaultChecked />
      </div>
      <div className="settings-outer-container__setting-bar">
        <span>Noise cancellation</span>
        <Switch defaultChecked />
      </div>
    </div>
  );
}

export default MovieModeSettings;
