import { useState } from "react";
import checkMark from "/icons/checkmark.svg";
import speed from "/icons/speed.svg";
import play from "/icons/play.svg";
import aiCircle from "/icons/aiCircle.svg";
import bellSlash from "/icons/bellSlash.svg";
import Accordion from "./components/Accordion";
import AIConversationPill from "./components/AIConversationPill";
import AIText from "./components/AIText";
import PrimaryButton from "./components/PrimaryButton";
import CopyPaste from "./components/CopyPaste";

function WatchMovie({ onClick }) {
  const [conversationStage, setConversationStage] = useState(0);

  const onActivateAllSettings = () => {
    setConversationStage(1);
  };

  const onDisableToastNotifications = () => {
    setConversationStage(2);
  };

  return (
    <>
      <Accordion
        label="I want to watch a movie"
        value="item-1"
        onClick={onClick}
      >
        <div className="flex flex-col gap-6">
          {conversationStage >= 0 && (
            <>
              <AIText label="Sure! To optimize your movie experience you can:" />
              <ol className="text-base">
                <li>
                  1. Enable <strong>audio movie preset</strong>
                </li>
                <li>
                  2. Turn on <strong>surround sound</strong>
                </li>
                <li>
                  3. Enable <strong>immersive audio</strong>
                </li>
                <li>
                  4. Set display <strong>brightness to 80%</strong>
                </li>
                <li>
                  5. Switch display preset to <strong>movie mode</strong>
                </li>
                <li>
                  6. Turn on display <strong>HDR</strong>
                </li>
              </ol>
              <div className="font-medium text-base">
                Do you want me to activate all six settings?
              </div>
              <div className="text-base">
                Or you can list the ones you want activated (eg. 2-4, 6)
              </div>
            </>
          )}
          {conversationStage === 0 && (
            <div className="w-full flex  justify-between">
              <CopyPaste />
              <PrimaryButton
                label="Activate all settings"
                onClick={onActivateAllSettings}
              />
            </div>
          )}

          {conversationStage >= 1 && (
            <>
              <div className="w-full flex justify-between">
                <CopyPaste />
                <AIConversationPill
                  checked
                  icon={<img src={checkMark} />}
                  label="Movie settings applied"
                />
              </div>
              <AIText label="All done! Movie mode is now activated. Here are some related recommendations" />
              <div className="w-full flex justify-end">
                <AIConversationPill
                  icon={
                    <img src={conversationStage >= 2 ? checkMark : bellSlash} />
                  }
                  checked={conversationStage >= 2}
                  label="Disable toast notifications"
                  onClick={onDisableToastNotifications}
                />
              </div>
            </>
          )}
          {conversationStage == 1 && (
            <div className="w-full flex justify-end">
              <AIConversationPill
                icon={<img src={play} />}
                label="Recommend movies"
              />
            </div>
          )}

          {conversationStage >= 2 && (
            <>
              <AIText label="All done! Toast has been disabled. Here are some related recommendations" />
              <div className="w-full flex justify-end">
                <AIConversationPill
                  icon={<img src={aiCircle} />}
                  label="Make these my default movie mode"
                  // onClick={onDisableToastNotifications}
                />
              </div>
              <div className="w-full flex justify-end">
                <AIConversationPill
                  icon={<img src={speed} />}
                  label="Enable high performance"
                />
              </div>
              <div className="w-full flex justify-end">
                <AIConversationPill
                  icon={<img src={play} />}
                  label="Recommend movies"
                />
              </div>
            </>
          )}
        </div>
      </Accordion>
    </>
  );
}

export default WatchMovie;
