import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import micOffIcon from "/icons/micOff.svg";
import micOnIcon from "/icons/micOn.svg";
import "./FullAudioSettings.css";
import Switch from "./components/Switch";
import Slider from "./components/Slider";
import Select from "./components/Select";

function AudioInputSettings() {
  const inputTypeOptions = [{ label: "Internal mic", vaule: 1 }];
  const micModeOptions = [{ label: "Conference", vaule: 1 }];

  return (
    <div>
      <div className="settings-outer-container__section-title-bar">
        <span>Input</span>
      </div>
      <div className="settings-outer-container__setting-bar">
        <span>Type</span>
        <Select options={inputTypeOptions} />
      </div>
      <div className="settings-outer-container__setting-bar">
        <span>Volume</span>
        <Slider
          startIcon={<img src={micOffIcon} />}
          endIcon={<img src={micOnIcon} />}
        />
      </div>
      <div className="settings-outer-container__setting-bar">
        <span>Noise Reduction</span>
        <Switch />
      </div>
      <div className="settings-outer-container__setting-bar">
        <span>Mic Mode</span>
        <Select options={micModeOptions} />
      </div>
    </div>
  );
}

export default AudioInputSettings;
