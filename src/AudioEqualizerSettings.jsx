import Switch from "./components/Switch";
import Equalizer from "./components/Equalizer";
import SecondaryAlert from "./components/SecondaryAlert";
import { useState } from "react";

function AudioEqualizerSettings({ alertTitle, ...other }) {
  const dialogeOptimizedEqData = [-5, -3, -2, 0, 1.75, 2.5, 3, 4, 2.75, 1.5];

  const [eqData, setEqData] = useState(dialogeOptimizedEqData);
  const [isDialogueOptimized, setIsDialogueOptimized] = useState(true);

  const onDialogueOptimizedCHange = (e) => {
    setIsDialogueOptimized(e);
    setEqData(e ? dialogeOptimizedEqData : undefined);
  };

  return (
    <div className={alertTitle && "bg-hpxWhite"}>
      <div className="settings-outer-container__section-title-bar">
        <span>Equalizer</span>
        {alertTitle && (
          <SecondaryAlert
            title={alertTitle}
            buttonLabel={"Undo adjustment"}
            onButtonClick={() => onDialogueOptimizedCHange(false)}
          />
        )}
      </div>
      <div className="settings-outer-container__setting-bar">
        <span>Optimized</span>
        <Switch
          checked={isDialogueOptimized}
          onCheckedChange={onDialogueOptimizedCHange}
        />
      </div>
      <div className="text-[#525365] px-8 pb-8 h-60">
        <Equalizer eqData={eqData} />
      </div>
    </div>
  );
}

export default AudioEqualizerSettings;
