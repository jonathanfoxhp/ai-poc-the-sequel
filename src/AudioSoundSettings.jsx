import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import settingsLowIcon from "/icons/settingsLow.svg";
import settingsHighIcon from "/icons/settingsHigh.svg";
import widthLowIcon from "/icons/widthLow.svg";
import widthHighIcon from "/icons/widthHigh.svg";
import plusIcon from "/icons/plus.svg";
import shopIcon from "/icons/shop.svg";
import CardFlourish1 from "/cardFlourish1.png";
import CardFlourish2 from "/cardFlourish2.png";
import CardFlourish3 from "/cardFlourish3.png";
import "./FullAudioSettings.css";
import Switch from "./components/Switch";
import Slider from "./components/Slider";

function AudioSoundSettings() {
  return (
    <div>
      <div className="settings-outer-container__section-title-bar">
        <span>Sound</span>
      </div>
      <div className="settings-outer-container__setting-bar">
        <span>Bass</span>
        <Slider
          startIcon={<img src={settingsLowIcon} />}
          endIcon={<img src={settingsHighIcon} />}
        />
      </div>
      <div className="settings-outer-container__setting-bar">
        <span>Treble</span>
        <Slider
          startIcon={<img src={settingsLowIcon} />}
          endIcon={<img src={settingsHighIcon} />}
        />
      </div>
      <div className="settings-outer-container__setting-bar">
        <span>Width</span>
        <Slider
          startIcon={<img src={widthLowIcon} />}
          endIcon={<img src={widthHighIcon} />}
        />
      </div>
      <div className="settings-outer-container__setting-bar">
        <span>High Noise Supression</span>
        <Switch />
      </div>
    </div>
  );
}

export default AudioSoundSettings;
