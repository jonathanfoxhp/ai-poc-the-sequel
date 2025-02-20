import { useState, useRef } from "react";
import PropTypes from 'prop-types';
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
import AnimatedLines from "./components/AnimatedLines";

function WatchMovie({ onClick }) {
  const messagesEndRef = useRef(null);

  const [conversationStage, setConversationStage] = useState(0);

  const onActivateAllSettings = () => {
    setConversationStage(1);
    scrollToBottom();
  };

  const onDisableToastNotifications = () => {
    setConversationStage(2);
    scrollToBottom();
  };

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
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
            <AnimatedLines>
              <div className="text-base">
                <AIText label="Sure! To optimize your movie experience you can:" />
              </div>
              <ol className="text-base">
                <li>1. Enable <span className="font-bold">audio movie preset</span></li>
                <li>2. Turn on <span className="font-bold">surround sound</span></li>
                <li>3. Enable <span className="font-bold">immersive audio</span></li>
                <li>4. Set display <span className="font-bold">brightness to 80%</span></li>
                <li>5. Switch display preset to <span className="font-bold">movie mode</span></li>
                <li>6. Turn on display <span className="font-bold">HDR</span></li>
              </ol>
              <div className="text-base font-medium">
                Do you want me to activate all six settings?
              </div>
              <div className="text-base">
                Or you can list the ones you want activated (eg. 2-4, 6)
              </div>
            </AnimatedLines>
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
      <div ref={messagesEndRef} className="mt-[140px]" />
    </>
  );
}

WatchMovie.propTypes = {
  onClick: PropTypes.func.isRequired
};

export default WatchMovie;
