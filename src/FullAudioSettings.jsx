import { useState, useEffect } from "react";
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
import AudioSoundSettings from "./AudioSoundSettings";
import AudioInputSettings from "./AudioInputSettings";
import AudioOutputSettings from "./AudioOutputSettings";
import AudioEqualizerSettings from "./AudioEqualizerSettings";
import AudioPresetsSettings from "./AudioPresetsSettings";
import PrimaryButton from "./components/PrimaryButton";
import PrimaryAlert from "./components/PrimaryAlert";

import Header from "./components/Header";
import SecondaryAlert from "./components/SecondaryAlert";
import { useSearchParams } from "react-router-dom";

function FullAudioSettings() {
  const scroll = (top = 0) => {
    window.scrollTo({
      top: top,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    let top = 0;
    if (settingsChanged === "equalizer") {
      top = 1300;
    }
    scroll(top);
  }, []);

  const [searchParams] = useSearchParams();
  const settingsChanged = searchParams.get("settingsChanged");
  const changeSummary = searchParams.get("changeSummary");
  const prompt = searchParams.get("prompt");

  return (
    <div>
      <div className="background-image-container" />
      <Header hasBack page="settings" />
      <div className="flex flex-col mb-52 items-center justify-center mt-[4.5rem]">
        {settingsChanged && (
          <div className="sticky z-[1000] top-0">
            <PrimaryAlert title={`"${prompt}"`} />
          </div>
        )}
        <div className="settings-outer-container mt-4">
          <h1 className="settings-outer-container__title-bar">
            Customize Audio
          </h1>
          <AudioInputSettings />
          <div className="divider" />
          <AudioOutputSettings
            alertTitle={settingsChanged === "output" && changeSummary}
          />
          <div className="divider" />
          <AudioSoundSettings />
          <div className="divider" />
          <AudioEqualizerSettings
            alertTitle={settingsChanged === "equalizer" && changeSummary}
          />
          <div className="divider" />
          <AudioPresetsSettings />
        </div>
        <div className="pt-4">
          <PrimaryButton label="Restore Defaults" />
        </div>
      </div>
    </div>
  );
}

export default FullAudioSettings;
