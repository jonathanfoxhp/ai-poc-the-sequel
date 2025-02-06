import "./FullAudioSettings.css";
import AudioSoundSettings from "./AudioSoundSettings";
import AudioInputSettings from "./AudioInputSettings";
import AudioOutputSettings from "./AudioOutputSettings";
import AudioEqualizerSettings from "./AudioEqualizerSettings";
import MovieModeSettings from "./MovieModeSettings";
import OptimizeDialogueSettings from "./OptimizeDialogueSettings";

import CloseIcon from "/icons/close.svg";
import { useState } from "react";
import AudioPresetsSettings from "./AudioPresetsSettings";
import PrimaryButton from "./components/PrimaryButton";
import SecondaryButton from "./components/SecondaryButton";
import CheckCircleIcon from "/icons/checkCircle.svg";
import aiSuggestionIcon from "/icons/aiSuggestion.svg";
import { useNavigate } from "react-router-dom";

function PartialAudioSettings({ id, onClose, prompt, ...other }) {
  const navigate = useNavigate();

  const renderMap = [
    {
      id: "sound",
      suggestionTitle: `Here’s how we’ll adjust your sound:`,
      suggestions: ["lorem ipsum", "dolorem ipsum et al"],
      settings: <AudioSoundSettings />,
    },
    {
      id: "input",
      suggestionTitle: `Here’s how we’ll make your sound more equal:`,
      suggestions: ["lorem ipsum", "dolorem ipsum et al"],
      settings: <AudioInputSettings />,
    },
    {
      id: "output",
      suggestionTitle: `Here’s how we’ll make your output more better:`,
      suggestions: ["lorem ipsum", "dolorem ipsum et al"],
      settings: <AudioOutputSettings />,
    },
    {
      id: "equalizer",
      suggestionTitle: `Here’s how we’ll make your input sound better:`,
      suggestions: ["lorem ipsum", "dolorem ipsum et al"],
      settings: <AudioEqualizerSettings />,
    },
    {
      id: "presets",
      suggestionTitle: `Here’s how we’ll make your presets work better:`,
      suggestions: ["lorem ipsum", "dolorem ipsum et al"],
      settings: <AudioPresetsSettings />,
    },
    {
      id: "movieMode",
      suggestionTitle: `Here’s how we’ll optimize your computer for movies:`,
      suggestions: [
        "Ensuring the correct microphone is selected",
        "Turning on noise cancellation",
        "Resetting your volume to the midpoint",
        "Enabling privacy mode",
      ],
      settings: <AudioOutputSettings />,
    },
    {
      id: "optimizeDialogue",
      suggestionTitle: `Here’s how we’ll optimize your audio for clear dialogue:`,
      suggestions: [
        "Reducing bass frequencies",
        "Keeping low midrange frequencies as neutral",
        "Boosting midrange for improved articulation",
      ],
      settings: <AudioEqualizerSettings />,
    },
  ];

  const selectedSettings = renderMap.find((item) => item.id === id);

  // if (!selectedSettings) {
  //   return null;
  // }

  return (
    <div
      className={
        !selectedSettings &&
        "opacity-0 max-h-0 invisible transition-opacity duration-300"
      }
    >
      <div className="settings-outer-container mt-4 relative mb-10">
        <div className="flex justify-between px-8 py-8">
          <h1 className="flex items-center gap-4 text-xl  text-hpxCharcoal">
            <img src={aiSuggestionIcon} />"{prompt}"
          </h1>
          <img src={CloseIcon} className="close-button" onClick={onClose} />
        </div>
        <div className="divider" />
        {selectedSettings && (
          <>
            <div className="mx-8 py-8 text-lg leading-none border-[#EDEEFE] border-solid border-b-[1px]">
              <div className="text-[#828398] mb-6">
                {selectedSettings.suggestionTitle}
              </div>
              <ul className="suggestions-list flex flex-col gap-6">
                {selectedSettings.suggestions.map((suggestion, index) => (
                  <li
                    key={index}
                    className="flex gap-2  items-center text-hpxCharcoal"
                  >
                    <img src={CheckCircleIcon} />
                    {suggestion}
                  </li>
                ))}
              </ul>
            </div>
            {selectedSettings.settings}
          </>
        )}
        <div className="divider" />
        <div className="flex gap-2 items-center justify-center py-8">
          {/* <PrimaryButton label="Optimize Audio" /> */}
          <SecondaryButton
            label="Go to Audio Settings"
            onClick={() => navigate("/audio")}
          />
        </div>
      </div>
    </div>
  );
}

export default PartialAudioSettings;
