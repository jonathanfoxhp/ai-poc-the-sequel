import { useState } from "react";
import PropTypes from "prop-types";
import Accordion from "./components/Accordion";
import AIText from "./components/AIText";
import CopyPaste from "./components/CopyPaste";
import AnimatedLines from "./components/AnimatedLines";
import PrimaryButton from "./components/PrimaryButton";

function DecreaseVolume({ onClick }) {
  const [conversationStage, setConversationStage] = useState(0);

  const enableNoiseCancellation = () => {
    console.log("enableNoiseCancellation");
    setConversationStage(1);
  };

  const onDisableToastNotifications = () => {
    setConversationStage(2);
  };

  return (
    <Accordion
      label="Decrease volume to 60%"
      value="item-3"
      // className="-mt-[140px]"
      onClick={onClick}
    >
      <div className="flex flex-col gap-6">
        {conversationStage >= 0 && (
          <AnimatedLines>
            <div className="text-base opacity-0">
              <AIText label="Decrease volume to 60%" />
            </div>
            <div className="text-base opacity-0">
              Your speaker volume has been adjusted from 100% to 60%. If you’re
              in a noisy environment, consider enabling noise cancellation to
              minimize distractions. Remember, these controls empower you to
              tailor your audio experience.
            </div>

            {conversationStage === 0 && (
              <div className="w-full flex justify-between">
                <CopyPaste />
                <PrimaryButton
                  label="Enable noise cancellation"
                  onClick={enableNoiseCancellation}
                />
              </div>
            )}
            {conversationStage === 1 && (
              <div className="text-base">
                <AIText label="Noise cancellation has been enabled" />
              </div>
            )}
          </AnimatedLines>
        )}
      </div>
    </Accordion>
  );
}

DecreaseVolume.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default DecreaseVolume;
